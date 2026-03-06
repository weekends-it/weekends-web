import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const OWNER_EMAIL = "hello@wkends.com";

export async function POST(req: NextRequest) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
  }

  const {
    name,
    email,
    phone,
    company,
    issue,
    priority,
    discounts,
    resolvedAddress,
    travelDistanceKm,
    travelTimeMinutes,
    travelCost,
    minHours,
    maxHours,
    rate,
    minLabour,
    maxLabour,
    minTotal,
    maxTotal,
    complexity,
    reasoning,
    preferredDate,
  } = await req.json();

  if (!name || !email || !issue) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const priorityLabel =
    priority === "emergency" ? "Emergency" : priority === "remote" ? "Remote" : "Break/Fix";

  const resend = new Resend(resendKey);

  // ── Notification to owner ──────────────────────────────────────────
  const ownerHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <div style="background:#1a3a1a;padding:24px 32px;border-radius:12px 12px 0 0">
        <p style="color:#27aa27;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px">New Booking Request</p>
        <h1 style="color:white;font-size:28px;margin:0">${name}</h1>
        ${company ? `<p style="color:rgba(255,255,255,0.5);font-size:14px;margin:4px 0 0">${company}</p>` : ""}
      </div>
      <div style="background:#f9fafb;padding:24px 32px;border:1px solid #e5e7eb;border-top:none">

        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#27aa27">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Phone</td><td style="padding:8px 0;font-size:14px"><a href="tel:${phone}" style="color:#27aa27">${phone}</a></td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Priority</td><td style="padding:8px 0;font-size:14px;font-weight:600">${priorityLabel}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Complexity</td><td style="padding:8px 0;font-size:14px">${complexity}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Address</td><td style="padding:8px 0;font-size:14px">${resolvedAddress}</td></tr>
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Travel</td><td style="padding:8px 0;font-size:14px">${travelDistanceKm} km · ~${travelTimeMinutes} min · $${travelCost}</td></tr>
          ${discounts ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Discounts</td><td style="padding:8px 0;font-size:14px;color:#27aa27">${discounts}</td></tr>` : ""}
          ${preferredDate ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Preferred time</td><td style="padding:8px 0;font-size:14px;color:#27aa27;font-weight:600">${preferredDate}</td></tr>` : ""}
        </table>

        <div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;margin-bottom:24px">
          <p style="color:#6b7280;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 8px">Issue</p>
          <p style="font-size:14px;line-height:1.6;margin:0">${issue}</p>
        </div>

        <div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;margin-bottom:24px">
          <p style="color:#6b7280;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 12px">AI Assessment</p>
          <p style="font-size:13px;color:#374151;line-height:1.6;margin:0 0 12px">${reasoning}</p>
          <p style="font-size:13px;color:#6b7280;margin:0">${minHours}–${maxHours} hrs @ $${rate}/hr</p>
        </div>

        <div style="background:#1a3a1a;border-radius:8px;padding:16px 20px">
          <p style="color:rgba(255,255,255,0.5);font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 12px">Estimate</p>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="color:rgba(255,255,255,0.6);font-size:13px">Labour</span>
            <span style="color:white;font-size:13px">$${minLabour} – $${maxLabour}</span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:12px">
            <span style="color:rgba(255,255,255,0.6);font-size:13px">Travel</span>
            <span style="color:white;font-size:13px">$${travelCost}</span>
          </div>
          <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:12px;display:flex;justify-content:space-between">
            <span style="color:rgba(255,255,255,0.6);font-size:13px;font-weight:600">Total estimate</span>
            <span style="color:#27aa27;font-size:16px;font-weight:700">$${Math.round(minTotal)} – $${Math.round(maxTotal)}</span>
          </div>
        </div>

      </div>
    </div>
  `;

  // ── Confirmation to customer ───────────────────────────────────────
  const customerHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <div style="background:#1a3a1a;padding:24px 32px;border-radius:12px 12px 0 0">
        <p style="color:#27aa27;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px">weekends.</p>
        <h1 style="color:white;font-size:28px;margin:0">Booking received,<br/>${name.split(" ")[0]}.</h1>
      </div>
      <div style="background:#f9fafb;padding:24px 32px;border:1px solid #e5e7eb;border-top:none">

        <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 24px">
          Thanks for getting in touch. We've received your booking request and will reach out shortly to confirm your appointment and provide a final quote.
        </p>

        <div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;margin-bottom:24px">
          <p style="color:#6b7280;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 12px">Your Job Summary</p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;width:130px">Issue</td><td style="padding:6px 0;font-size:13px">${issue}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:13px">Address</td><td style="padding:6px 0;font-size:13px">${resolvedAddress}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:13px">Priority</td><td style="padding:6px 0;font-size:13px;font-weight:600">${priorityLabel}</td></tr>
            ${discounts ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:13px">Discounts</td><td style="padding:6px 0;font-size:13px;color:#27aa27">${discounts} — confirmed on booking</td></tr>` : ""}
            ${preferredDate ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:13px">Preferred time</td><td style="padding:6px 0;font-size:13px;font-weight:600">${preferredDate}</td></tr>` : ""}
          </table>
        </div>

        <div style="background:#1a3a1a;border-radius:8px;padding:16px 20px;margin-bottom:24px">
          <p style="color:rgba(255,255,255,0.5);font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 10px">Estimated Total</p>
          <p style="color:#27aa27;font-size:28px;font-weight:700;margin:0">$${Math.round(minTotal)} – $${Math.round(maxTotal)}</p>
          <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:6px 0 0">Final price confirmed before work begins · not a tax invoice</p>
        </div>

        <p style="font-size:13px;color:#6b7280;line-height:1.6;margin:0">
          Questions? Reply to this email or call us at <a href="tel:+61404878087" style="color:#27aa27">+61 404 878 087</a>.
        </p>

      </div>
      <div style="padding:16px 32px;text-align:center">
        <p style="font-size:12px;color:#9ca3af;margin:0">Weekends IT · Brisbane, QLD · <a href="https://wkends.com" style="color:#9ca3af">wkends.com</a></p>
      </div>
    </div>
  `;

  try {
    await Promise.all([
      resend.emails.send({
        from: "Weekends IT <bookings@wkends.com>",
        to: OWNER_EMAIL,
        replyTo: email,
        subject: `New booking: ${name}${company ? ` · ${company}` : ""} — ${priorityLabel}`,
        html: ownerHtml,
      }),
      resend.emails.send({
        from: "Weekends IT <bookings@wkends.com>",
        to: email,
        subject: "Booking received — Weekends IT",
        html: customerHtml,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
