"use client";

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillName = searchParams.get("name") ?? "";
  const prefillPriority = searchParams.get("priority") ?? "";
  const prefillIssue = searchParams.get("issue") ?? "";
  const prefillAddress = searchParams.get("address") ?? "";
  const prefillMin = searchParams.get("min") ?? "";
  const prefillMax = searchParams.get("max") ?? "";
  const prefillDiscounts = searchParams.get("discounts") ?? "";
  const prefillCompany = searchParams.get("company") ?? "";

  const fromEstimate = !!prefillIssue;
  const priorityLabel = prefillPriority === "emergency" ? "Emergency" : prefillPriority === "urgent" ? "Urgent" : "Normal";
  const defaultServiceType =
    prefillPriority === "emergency" ? "emergency"
    : prefillCompany ? "business"
    : prefillIssue ? "home"
    : "";

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone") || undefined,
          serviceType: data.get("service-type") || undefined,
          message: data.get("message") || undefined,
          _trap: data.get("_trap") || undefined,
        }),
      });

      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error ?? "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div>
        <p className="label-section mb-8">Send a message</p>
        <div className="flex flex-col items-start gap-4 py-6">
          <div className="flex items-center justify-center rounded-full bg-brand-green/10" style={{ width: '3rem', height: '3rem' }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="text-brand-green">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h3 className="heading-serif text-[1.6rem] text-foreground leading-tight">Message sent.</h3>
          <p className="text-foreground/50 text-sm leading-relaxed">
            We&apos;ll get back to you as soon as possible — usually within a few hours. Check your inbox for a confirmation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="label-section mb-8">Send a message</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot — hidden from real users, bots fill it in */}
        <input type="text" name="_trap" aria-hidden="true" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }} />
        {[
          { id: "name", label: "Name", type: "text", required: true, defaultValue: prefillName },
          { id: "email", label: "Email", type: "email", required: true, defaultValue: "" },
          { id: "phone", label: "Phone", type: "tel", required: false, defaultValue: "" },
        ].map(({ id, label, type, required, defaultValue }) => (
          <div key={id}>
            <label
              htmlFor={id}
              className="block text-xs font-medium uppercase tracking-widest text-foreground/30 mb-3"
            >
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              required={required}
              defaultValue={defaultValue}
              className="w-full px-4 py-3.5 border border-foreground/8 bg-foreground/4 rounded-xl text-sm text-foreground transition-colors duration-300 focus:outline-none focus:border-brand-green placeholder:text-foreground/20 font-sans"
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="service-type"
            className="block text-xs font-medium uppercase tracking-widest text-foreground/30 mb-3"
          >
            Service Type
          </label>
          <select
            id="service-type"
            name="service-type"
            defaultValue={defaultServiceType}
            className="w-full px-4 py-3.5 border border-foreground/8 bg-surface-light rounded-xl text-sm text-foreground transition-colors duration-300 focus:outline-none focus:border-brand-green font-sans"
          >
            <option value="">Select a service</option>
            <option value="business">Small Business IT</option>
            <option value="retail">Retail Solutions</option>
            <option value="home">Home &amp; Family</option>
            <option value="emergency">Emergency Support</option>
            <option value="other">Other / Not Sure</option>
          </select>
        </div>

        {/* Locked estimate summary — only shown when coming from the estimator */}
        {fromEstimate && (
          <div>
            <p className="block text-xs font-medium uppercase tracking-widest text-foreground/30 mb-3">
              Your Estimate
            </p>
            <div
              className="rounded-xl text-sm space-y-3"
              style={{ padding: '1.25rem 1.25rem', border: '1px solid rgba(var(--foreground-val), 0.08)', backgroundColor: 'rgba(var(--foreground-val), 0.03)' }}
            >
              <div className="flex justify-between items-start gap-4">
                <span className="text-foreground/40 shrink-0">Issue</span>
                <span className="text-foreground text-right">{prefillIssue}</span>
              </div>
              {prefillAddress && (
                <div className="flex justify-between items-start gap-4">
                  <span className="text-foreground/40 shrink-0">Address</span>
                  <span className="text-foreground text-right">{prefillAddress}</span>
                </div>
              )}
              <div className="flex justify-between items-center gap-4">
                <span className="text-foreground/40 shrink-0">Priority</span>
                <span className="text-foreground">{priorityLabel}</span>
              </div>
              {prefillMin && prefillMax && (
                <div className="flex justify-between items-center gap-4 pt-2" style={{ borderTop: '1px solid rgba(var(--foreground-val), 0.06)' }}>
                  <span className="text-foreground/40 shrink-0">Estimated total</span>
                  <span className="font-semibold text-foreground">${prefillMin} – ${prefillMax}</span>
                </div>
              )}
              {prefillDiscounts && (
                <div className="flex justify-between items-center gap-4">
                  <span className="text-foreground/40 shrink-0">Discounts</span>
                  <span className="text-brand-green text-sm">{prefillDiscounts}</span>
                </div>
              )}
            </div>
            <p className="text-xs text-foreground/25 mt-2">Estimate locked — final price confirmed before work begins.</p>

            <input type="hidden" name="estimate-issue" value={prefillIssue} />
            <input type="hidden" name="estimate-address" value={prefillAddress} />
            <input type="hidden" name="estimate-priority" value={prefillPriority} />
            <input type="hidden" name="estimate-min" value={prefillMin} />
            <input type="hidden" name="estimate-max" value={prefillMax} />
            {prefillDiscounts && <input type="hidden" name="estimate-discounts" value={prefillDiscounts} />}
          </div>
        )}

        <div>
          <label
            htmlFor="message"
            className="block text-xs font-medium uppercase tracking-widest text-foreground/30 mb-3"
          >
            {fromEstimate ? "Anything else we should know?" : "Tell us about your needs"}
          </label>
          <textarea
            id="message"
            name="message"
            required={!fromEstimate}
            placeholder={fromEstimate ? "Any additional details, access instructions, preferred times…" : undefined}
            className="w-full px-4 py-3.5 border border-foreground/8 bg-foreground/4 rounded-xl text-sm text-foreground transition-colors duration-300 focus:outline-none focus:border-brand-green resize-y min-h-[120px] placeholder:text-foreground/20 font-sans"
          />
        </div>

        {error && (
          <p className="text-sm text-red-500">{error}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-brand-green-dark cursor-pointer border-none disabled:opacity-60"
        >
          {submitting ? "Sending…" : fromEstimate ? "Confirm Booking" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
