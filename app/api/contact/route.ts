import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const OWNER_EMAIL = "hello@wkends.com";

const SERVICE_LABELS: Record<string, string> = {
  business: "Small Business IT",
  retail: "Retail Solutions",
  home: "Home & Family",
  emergency: "Emergency Support",
  other: "Other / Not Sure",
};

export async function POST(req: NextRequest) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json({ error: "Missing RESEND_API_KEY" }, { status: 500 });
  }

  const { name, email, phone, serviceType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const serviceLabel = SERVICE_LABELS[serviceType] ?? serviceType ?? "Not specified";
  const resend = new Resend(resendKey);

  // ── Notification to owner ──────────────────────────────────────────
  const ownerHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <div style="background:#1a3a1a;padding:24px 32px;border-radius:12px 12px 0 0">
        <p style="color:#27aa27;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px">New Contact Form Submission</p>
        <h1 style="color:white;font-size:28px;margin:0">${name}</h1>
      </div>
      <div style="background:#f9fafb;padding:24px 32px;border:1px solid #e5e7eb;border-top:none">
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:140px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${email}" style="color:#27aa27">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Phone</td><td style="padding:8px 0;font-size:14px"><a href="tel:${phone}" style="color:#27aa27">${phone}</a></td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Service</td><td style="padding:8px 0;font-size:14px">${serviceLabel}</td></tr>
        </table>
        <div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px">
          <p style="color:#6b7280;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 8px">Message</p>
          <p style="font-size:14px;line-height:1.7;margin:0;white-space:pre-wrap">${message}</p>
        </div>
      </div>
    </div>
  `;

  // ── Confirmation to sender ─────────────────────────────────────────
  const customerHtml = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
      <div style="background:#1a3a1a;padding:24px 32px;border-radius:12px 12px 0 0">
        <p style="color:#27aa27;font-size:13px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px">weekends.</p>
        <h1 style="color:white;font-size:28px;margin:0">Message received,<br/>${name.split(" ")[0]}.</h1>
      </div>
      <div style="background:#f9fafb;padding:24px 32px;border:1px solid #e5e7eb;border-top:none">
        <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 24px">
          Thanks for reaching out. We've received your message and will get back to you as soon as possible — usually within a few hours.
        </p>
        <div style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;margin-bottom:24px">
          <p style="color:#6b7280;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 10px">Your message</p>
          <p style="font-size:14px;line-height:1.7;color:#374151;margin:0;white-space:pre-wrap">${message}</p>
        </div>
        <p style="font-size:13px;color:#6b7280;line-height:1.6;margin:0">
          Need something urgent? Call or text us at <a href="tel:+61404878087" style="color:#27aa27">+61 404 878 087</a>.
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
        subject: `New enquiry: ${name} — ${serviceLabel}`,
        html: ownerHtml,
      }),
      resend.emails.send({
        from: "Weekends IT <bookings@wkends.com>",
        to: email,
        subject: "We got your message — Weekends IT",
        html: customerHtml,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
