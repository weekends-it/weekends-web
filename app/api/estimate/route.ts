import { NextRequest, NextResponse } from "next/server";

const BANYO_LNG = 153.0686;
const BANYO_LAT = -27.3833;

const REMOTE_RATE = 70;
const NORMAL_RATE = 85;
const EMERGENCY_RATE = 150;
const TRAVEL_RATE_PER_KM = 0.55;

export async function POST(req: NextRequest) {
  try {
    const { address, issue, priority } = await req.json();

    if (!address || !issue || !priority) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const mapboxToken = process.env.MAPBOX_SECRET_TOKEN;
    const openaiKey = process.env.OPENAI_API_KEY;

    if (!mapboxToken || !openaiKey) {
      const missing = [!mapboxToken && "MAPBOX_SECRET_TOKEN", !openaiKey && "OPENAI_API_KEY"].filter(Boolean).join(", ");
      return NextResponse.json(
        { error: `Missing env vars: ${missing}` },
        { status: 500 }
      );
    }

    // 1. Geocode the address
    const geocodeRes = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?country=AU&proximity=${BANYO_LNG},${BANYO_LAT}&access_token=${mapboxToken}`
    );

    if (!geocodeRes.ok) {
      return NextResponse.json(
        { error: "Failed to look up address" },
        { status: 400 }
      );
    }

    const geocodeData = await geocodeRes.json();

    if (!geocodeData.features || geocodeData.features.length === 0) {
      return NextResponse.json(
        { error: "Address not found. Please try a more specific address including suburb and state." },
        { status: 400 }
      );
    }

    const [lng, lat] = geocodeData.features[0].center;
    const resolvedAddress = geocodeData.features[0].place_name;

    // 2. Get driving directions from Banyo
    const directionsRes = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${BANYO_LNG},${BANYO_LAT};${lng},${lat}?access_token=${mapboxToken}`
    );

    if (!directionsRes.ok) {
      return NextResponse.json(
        { error: "Failed to calculate travel" },
        { status: 500 }
      );
    }

    const directionsData = await directionsRes.json();

    if (!directionsData.routes || directionsData.routes.length === 0) {
      return NextResponse.json(
        { error: "Could not calculate a route to your address" },
        { status: 400 }
      );
    }

    const route = directionsData.routes[0];
    const distanceKm = route.distance / 1000;
    const durationMinutes = Math.round(route.duration / 60);

    // 3. Call OpenAI for hour estimate
    const openaiRes = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${openaiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content:
                "You are an IT support job estimator for Weekends IT, a Brisbane-based IT support business. Estimate on-site job durations conservatively — lean toward the higher end to avoid underquoting. Always respond with valid JSON only, no markdown or explanation outside the JSON.",
            },
            {
              role: "user",
              content: `Estimate how long this IT support job will take on-site. Be conservative.

Issue: ${issue}

Return only this JSON, no other text:
{
  "minHours": <minimum realistic hours as a decimal number>,
  "maxHours": <maximum realistic hours as a decimal number>,
  "reasoning": "<1-2 sentence explanation of the estimate>",
  "complexity": "<simple, moderate, or complex>"
}`,
            },
          ],
        }),
      }
    );

    if (!openaiRes.ok) {
      const errData = await openaiRes.json().catch(() => ({}));
      console.error("OpenAI error:", JSON.stringify(errData, null, 2));
      const detail = errData?.error?.message ?? "Failed to generate estimate";
      return NextResponse.json({ error: detail }, { status: 500 });
    }

    const openaiData = await openaiRes.json();
    const rawContent = openaiData.choices[0].message.content;

    let estimate: {
      minHours: number;
      maxHours: number;
      reasoning: string;
      complexity: string;
    };

    try {
      const cleaned = rawContent.replace(/```json\n?|\n?```/g, "").trim();
      estimate = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse OpenAI response:", rawContent);
      return NextResponse.json(
        { error: "Failed to parse estimate response" },
        { status: 500 }
      );
    }

    // 4. Calculate pricing
    const rate = priority === "remote" ? REMOTE_RATE : priority === "normal" ? NORMAL_RATE : EMERGENCY_RATE;
    const travelCost = priority === "remote" ? 0 : Math.round(distanceKm * TRAVEL_RATE_PER_KM * 100) / 100;
    const minLabour = Math.round(estimate.minHours * rate);
    const maxLabour = Math.round(estimate.maxHours * rate);

    return NextResponse.json({
      resolvedAddress,
      travelDistanceKm: Math.round(distanceKm * 10) / 10,
      travelTimeMinutes: durationMinutes,
      travelCost,
      minHours: estimate.minHours,
      maxHours: estimate.maxHours,
      reasoning: estimate.reasoning,
      complexity: estimate.complexity,
      rate,
      minLabour,
      maxLabour,
      minTotal: Math.round((minLabour + travelCost) * 100) / 100,
      maxTotal: Math.round((maxLabour + travelCost) * 100) / 100,
    });
  } catch (err) {
    console.error("Estimate error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
