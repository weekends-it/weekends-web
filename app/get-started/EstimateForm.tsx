"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const QLD_BBOX = "137.99,-29.18,153.55,-10.68";
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

type Priority = "normal" | "urgent" | "emergency";
type StepKey =
  | "name"
  | "company"
  | "address"
  | "issue"
  | "priority"
  | "discounts"
  | "calculating"
  | "result"
  | "contact"
  | "booked";

interface EstimateResult {
  resolvedAddress: string;
  travelDistanceKm: number;
  travelTimeMinutes: number;
  travelCost: number;
  minHours: number;
  maxHours: number;
  reasoning: string;
  complexity: string;
  rate: number;
  minLabour: number;
  maxLabour: number;
  minTotal: number;
  maxTotal: number;
}

const PRIORITY_OPTIONS: {
  value: Priority;
  label: string;
  rate: string;
  desc: string;
}[] = [
  { value: "normal", label: "Normal", rate: "$85/hr", desc: "Next available" },
  { value: "urgent", label: "Urgent", rate: "$150/hr", desc: "Priority scheduling" },
  { value: "emergency", label: "Emergency", rate: "$150/hr", desc: "Same-day guaranteed" },
];

const DISCOUNT_OPTIONS = [
  { id: "seniors", label: "Senior (65+)" },
  { id: "nonprofit", label: "Nonprofit organisation" },
  { id: "education", label: "Educational institution" },
];

const FORM_STEPS: StepKey[] = ["name", "company", "address", "issue", "priority", "discounts"];

export default function EstimateForm() {
  const [step, setStep] = useState<StepKey>("name");
  const [visible, setVisible] = useState(true);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [issue, setIssue] = useState("");
  const [priority, setPriority] = useState<Priority>("normal");
  const [discounts, setDiscounts] = useState<string[]>([]);
  const [result, setResult] = useState<EstimateResult | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameVal, setNameVal] = useState("");
  const [companyVal, setCompanyVal] = useState("");
  const [issueVal, setIssueVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [phoneVal, setPhoneVal] = useState("");

  const [addressVal, setAddressVal] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const addressWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (addressWrapRef.current && !addressWrapRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const fetchSuggestions = useCallback((value: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (value.length < 3) { setSuggestions([]); return; }
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(value)}.json?country=AU&bbox=${QLD_BBOX}&types=address,place&proximity=153.0686,-27.3833&limit=5&access_token=${MAPBOX_TOKEN}`
        );
        const data = await res.json();
        const places = (data.features ?? []).map((f: { place_name: string }) => f.place_name);
        setSuggestions(places);
        setShowSuggestions(places.length > 0);
      } catch { setSuggestions([]); }
    }, 300);
  }, []);

  function go(nextStep: StepKey, dir: "forward" | "backward" = "forward") {
    setDirection(dir);
    setVisible(false);
    setTimeout(() => {
      setStep(nextStep);
      setVisible(true);
    }, 200);
  }

  function submitName() {
    const val = nameVal.trim();
    if (!val) return;
    setName(val);
    go("company");
  }

  function submitCompany(skip = false) {
    setCompany(skip ? "" : companyVal.trim());
    go("address");
  }

  function submitAddress() {
    if (!addressVal.trim()) return;
    setAddress(addressVal);
    go("issue");
  }

  function submitIssue() {
    const val = issueVal.trim();
    if (!val) return;
    setIssue(val);
    go("priority");
  }

  function selectPriority(p: Priority) {
    setPriority(p);
    go("discounts");
  }

  async function submitDiscounts() {
    go("calculating");
    await new Promise((r) => setTimeout(r, 400));
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, address: addressVal, issue, priority }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate estimate");
      setResult(data);
      go("result");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      go("result");
    }
  }

  async function submitContact() {
    const val = emailVal.trim();
    if (!val || !result) return;
    setEmail(val);
    setPhone(phoneVal.trim());
    go("booked");
    // Fire-and-forget — user sees confirmation immediately
    fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email: val,
        phone: phoneVal.trim() || undefined,
        company: company || undefined,
        issue,
        priority,
        discounts: discounts.length > 0
          ? discounts.map((id) => DISCOUNT_OPTIONS.find((d) => d.id === id)?.label).filter(Boolean).join(", ")
          : undefined,
        ...result,
      }),
    }).catch((err) => console.error("Booking email error:", err));
  }

  function reset() {
    setVisible(false);
    setTimeout(() => {
      setStep("name");
      setName(""); setCompany(""); setAddress(""); setIssue("");
      setEmail(""); setPhone("");
      setPriority("normal"); setDiscounts([]); setResult(null); setErrorMsg("");
      setNameVal(""); setCompanyVal(""); setAddressVal(""); setIssueVal("");
      setEmailVal(""); setPhoneVal("");
      setVisible(true);
    }, 220);
  }

  const stepIndex = FORM_STEPS.indexOf(step as StepKey);
  const totalSteps = FORM_STEPS.length;
  const progressPct = stepIndex >= 0 ? ((stepIndex + 1) / totalSteps) * 100 : 100;

  return (
    <>
      {/* Progress bar — full width, outside opacity wrapper so it persists through transitions */}
      <div style={{ height: '3px', backgroundColor: 'rgba(255,255,255,0.15)', flexShrink: 0 }}>
        <div style={{ height: '100%', backgroundColor: 'white', width: `${progressPct}%`, transition: 'width 600ms cubic-bezier(0.16, 1, 0.3, 1)' }} />
      </div>
      <div
        className="flex-1 flex flex-col"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 200ms ease" }}
      >
      <div key={step} className={`flex-1 flex flex-col ${direction === "forward" ? "form-enter-forward" : "form-enter-backward"}`}>
      {step === "name" && (
        <StepShell question={`Let's get started. What's your name?`}>
          <input
            autoFocus
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitName()}
            placeholder="Jane Smith"
            className={inputClass}
          />
          <div className="flex items-center justify-end mt-14">
            <NextBtn onClick={submitName} disabled={!nameVal.trim()} />
          </div>
        </StepShell>
      )}

      {step === "company" && (
        <StepShell question={`Hi ${name.split(" ")[0]}. Is this for a business?`} hint="Enter a company name, or skip if this is for home.">
          <button
            onClick={() => submitCompany(true)}
            className="mb-8 px-5 py-2.5 border border-white/20 text-white/60 rounded-full text-sm font-medium hover:border-white/40 hover:text-white transition-all cursor-pointer bg-transparent"
          >
            Skip — this is for my home
          </button>
          <input
            autoFocus
            value={companyVal}
            onChange={(e) => setCompanyVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitCompany()}
            placeholder="Company name..."
            className={inputClass}
          />
          <div className="flex items-center justify-between mt-14">
            <BackBtn onClick={() => go("name", "backward")} />
            <NextBtn onClick={() => submitCompany()} disabled={!companyVal.trim()} />
          </div>
        </StepShell>
      )}

      {step === "address" && (
        <StepShell question="What address will we be coming to?" hint="We'll use this to calculate travel from Banyo.">
          <div ref={addressWrapRef} className="relative" style={{ zIndex: 10 }}>
            <input
              autoFocus
              autoComplete="off"
              value={addressVal}
              onChange={(e) => { setAddressVal(e.target.value); fetchSuggestions(e.target.value); }}
              onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
              onKeyDown={(e) => e.key === "Enter" && submitAddress()}
              placeholder="Start typing your address..."
              className={inputClass}
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute top-full mt-3 w-full rounded-2xl overflow-hidden" style={{ zIndex: 9999, backgroundColor: 'white', boxShadow: '0 24px 64px rgba(0,0,0,0.25)' }}>
                {suggestions.map((place) => (
                  <li
                    key={place}
                    onMouseDown={(e) => { e.preventDefault(); setAddressVal(place); setShowSuggestions(false); setSuggestions([]); }}
                    className="px-6 py-5 text-base cursor-pointer border-b last:border-0 transition-all font-sans"
                    style={{ color: '#1a3a1a', borderColor: '#e8f0e8' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLLIElement).style.backgroundColor = '#f0f7f0'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLLIElement).style.backgroundColor = ''; }}
                  >
                    {place}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex items-center justify-between mt-14">
            <BackBtn onClick={() => go("company", "backward")} />
            <NextBtn onClick={submitAddress} disabled={!addressVal.trim()} />
          </div>
        </StepShell>
      )}

      {step === "issue" && (
        <StepShell question="Describe the issue you're having." hint="The more detail, the more accurate the estimate.">
          <textarea
            autoFocus
            value={issueVal}
            onChange={(e) => setIssueVal(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submitIssue(); } }}
            placeholder="e.g. My computer won't start, shows a blue screen with an error…"
            rows={4}
            className={`${inputClass} resize-none`}
          />
          <div className="flex items-center justify-between mt-14">
            <BackBtn onClick={() => go("address", "backward")} />
            <NextBtn onClick={submitIssue} disabled={!issueVal.trim()} />
          </div>
        </StepShell>
      )}

      {step === "priority" && (
        <StepShell question="How urgent is this?">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
            {PRIORITY_OPTIONS.map(({ value, label, rate, desc }) => (
              <button
                key={value}
                onClick={() => selectPriority(value)}
                className="p-6 rounded-2xl border border-white/20 bg-white/8 hover:border-white hover:bg-white/15 text-left transition-all duration-200 cursor-pointer group"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50 group-hover:text-white mb-3 transition-colors">
                  {label}
                </p>
                <p className="heading-serif text-[2.2rem] text-white">{rate}</p>
                <p className="text-white/50 text-sm mt-1.5">{desc}</p>
              </button>
            ))}
          </div>
          <div className="mt-10">
            <BackBtn onClick={() => go("issue", "backward")} />
          </div>
        </StepShell>
      )}

      {step === "discounts" && (
        <StepShell question="Any discounts that apply?" hint="Select all that match — we'll confirm eligibility when we get in touch.">
          <div className="flex flex-wrap gap-3 mt-2">
            {DISCOUNT_OPTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setDiscounts((prev) => prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id])}
                className={`px-5 py-3 rounded-full border text-sm font-medium transition-all duration-200 cursor-pointer ${
                  discounts.includes(id)
                    ? "border-white bg-white/20 text-white"
                    : "border-white/20 bg-white/8 text-white/50 hover:border-white/40 hover:text-white/80"
                }`}
              >
                {discounts.includes(id) && <span className="mr-2">&#10003;</span>}
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mt-14">
            <BackBtn onClick={() => go("priority", "backward")} />
            <NextBtn
              onClick={submitDiscounts}
              label={discounts.length === 0 ? "No discounts — get my estimate" : "Get my estimate"}
            />
          </div>
        </StepShell>
      )}

      {step === "calculating" && (
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="flex flex-col items-center" style={{ gap: '1.75rem' }}>
            <div style={{ display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
              <div className="form-dot" />
              <div className="form-dot form-dot-2" />
              <div className="form-dot form-dot-3" />
            </div>
            <div className="text-center">
              <p className="text-white font-medium" style={{ marginBottom: '0.35rem' }}>Calculating your estimate</p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>Checking travel from Banyo and analysing your issue…</p>
            </div>
          </div>
        </div>
      )}

      {step === "result" && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
          <div className="w-full max-w-2xl">
            {errorMsg ? (
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">Something went wrong</p>
                <p className="text-white/70 text-sm mb-8">{errorMsg}</p>
                <button onClick={reset} className="text-white px-8 py-3.5 rounded-full text-sm font-semibold transition-all cursor-pointer border-none" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                  Try Again
                </button>
              </div>
            ) : result ? (
              <ResultDisplay result={result} priority={priority} name={name} discounts={discounts} onReset={reset} onEdit={() => go("discounts", "backward")} onBook={() => go("contact")} />
            ) : null}
          </div>
        </div>
      )}
      {step === "contact" && (
        <StepShell question="Almost done. How can we reach you?" hint="We'll confirm your booking and send a summary.">
          <div className="space-y-6">
            <input
              autoFocus
              type="email"
              value={emailVal}
              onChange={(e) => setEmailVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitContact()}
              placeholder="your@email.com"
              className={inputClass}
            />
            <input
              type="tel"
              value={phoneVal}
              onChange={(e) => setPhoneVal(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitContact()}
              placeholder="Phone (optional)"
              className={inputClass}
            />
          </div>
          <div className="flex items-center justify-between mt-14">
            <BackBtn onClick={() => go("result", "backward")} />
            <NextBtn onClick={submitContact} disabled={!emailVal.trim()} label="Confirm Booking" />
          </div>
        </StepShell>
      )}

      {step === "booked" && (
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <div className="text-center max-w-md">
            <div className="mx-auto mb-8 flex items-center justify-center rounded-full bg-white/10" style={{ width: '4rem', height: '4rem' }}>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-4">Booking confirmed</p>
            <h2 className="heading-serif text-white mb-4 leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              You&apos;re all set, {name.split(" ")[0]}.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              We&apos;ll reach out to <span className="text-white">{email}</span> shortly to confirm your appointment and provide a final quote.
            </p>
            <button
              onClick={reset}
              className="text-white/50 text-sm font-medium border-b border-white/20 pb-0.5 transition-colors hover:text-white hover:border-white cursor-pointer bg-transparent border-x-0 border-t-0"
            >
              Start a new estimate
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
    </>
  );
}

// ── Shared sub-components ──────────────────────────────────

const inputClass =
  "w-full px-0 py-3 bg-transparent border-b border-white/30 text-white text-xl sm:text-2xl focus:outline-none focus:border-white placeholder:text-white/30 transition-colors duration-300 font-sans caret-white";

function StepShell({
  question, hint, children,
}: {
  question: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 md:px-16 py-10 sm:py-14 md:py-16">
      <div className="w-full max-w-xl mx-auto form-step-content">
        <h2 className="heading-serif text-white mb-3 leading-[1.1]" style={{ fontSize: "clamp(1.9rem, 5vw, 4.5rem)" }}>
          {question}
        </h2>
        {hint && <p className="text-white/50 text-sm sm:text-base mb-8 sm:mb-10">{hint}</p>}
        {!hint && <div className="mb-8 sm:mb-10" />}
        {children}
      </div>
    </div>
  );
}

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-4 bg-neutral-900 text-white pr-7 pl-2 py-2 rounded-full text-base font-semibold transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-0.5 cursor-pointer border-none group shrink-0"
    >
      <span className="flex items-center justify-center w-9 h-9">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
      </span>
      Back
    </button>
  );
}

function NextBtn({
  onClick, disabled = false, label = "Next", className = "",
}: {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} flex items-center gap-4 bg-neutral-900 text-white pl-7 pr-2 py-2 rounded-full text-base font-semibold disabled:opacity-30 transition-all duration-300 hover:bg-neutral-800 hover:-translate-y-0.5 cursor-pointer border-none group`}
    >
      {label}
      <span className="flex items-center justify-center w-9 h-9">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </button>
  );
}

function ResultDisplay({
  result, priority, name, discounts, onReset, onEdit, onBook,
}: {
  result: EstimateResult;
  priority: Priority;
  name: string;
  discounts: string[];
  onReset: () => void;
  onEdit: () => void;
  onBook: () => void;
}) {
  const priorityLabel = priority === "normal" ? "Normal" : priority === "urgent" ? "Urgent" : "Emergency";
  const priorityBadgeStyle =
    priority === "normal"
      ? { backgroundColor: '#dcfce7', color: '#166534', border: '1px solid #bbf7d0' }
      : priority === "urgent"
      ? { backgroundColor: '#fef9c3', color: '#854d0e', border: '1px solid #fde047' }
      : { backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fca5a5' };
  const complexityColor =
    result.complexity === "simple" ? '#16a34a'
    : result.complexity === "moderate" ? '#d97706'
    : '#dc2626';
  const discountLabels = discounts.map((id) => DISCOUNT_OPTIONS.find((d) => d.id === id)?.label).filter(Boolean);

  return (
    <div>
      {/* Header — on green */}
      <p className="text-sm font-semibold uppercase tracking-widest text-white/50" style={{ marginBottom: '1rem' }}>Your estimate</p>
      <h2 className="heading-serif text-white leading-[1.1]" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '2rem' }}>
        Here&apos;s what to expect,<br />{name.split(" ")[0]}.
      </h2>

      {/* White card */}
      <div style={{ backgroundColor: 'white', borderRadius: '1.5rem', overflow: 'hidden' }}>

        {/* Price hero */}
        <div style={{ padding: '2rem 2rem 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ ...priorityBadgeStyle, padding: '0.375rem 0.75rem', borderRadius: '999px' }}>
              {priorityLabel}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: complexityColor }}>
              {result.complexity}
            </span>
            <span className="text-xs" style={{ color: '#9ca3af', marginLeft: 'auto', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '240px' }}>
              {result.resolvedAddress}
            </span>
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9ca3af', marginBottom: '0.75rem' }}>Estimated total</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.75rem', flexWrap: 'wrap' }}>
            <p className="heading-serif" style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', color: '#111', lineHeight: 1 }}>
              ${Math.round(result.minTotal).toLocaleString()}
            </p>
            <p className="heading-serif" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: '#9ca3af', lineHeight: 1, paddingBottom: '0.25rem' }}>
              – ${Math.round(result.maxTotal).toLocaleString()}
            </p>
          </div>
          <p className="text-xs" style={{ color: '#9ca3af', marginTop: '0.75rem' }}>
            Conservative estimate · final price confirmed before work begins
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#f3f4f6', margin: '0 2rem' }} />

        {/* Breakdown */}
        <div style={{ padding: '1.5rem 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.25rem', borderBottom: '1px solid #f3f4f6' }}>
            <div>
              <p className="font-medium" style={{ color: '#111' }}>Labour</p>
              <p className="text-sm" style={{ color: '#6b7280', marginTop: '0.25rem' }}>{result.minHours}–{result.maxHours} hrs @ ${result.rate}/hr</p>
            </div>
            <p className="font-semibold font-sans" style={{ color: '#111' }}>${result.minLabour} – ${result.maxLabour}</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.25rem' }}>
            <div>
              <p className="font-medium" style={{ color: '#111' }}>Travel</p>
              <p className="text-sm" style={{ color: '#6b7280', marginTop: '0.25rem' }}>{result.travelDistanceKm} km · ~{result.travelTimeMinutes} min from Banyo</p>
            </div>
            <p className="font-semibold font-sans" style={{ color: '#111' }}>${result.travelCost.toFixed(2)}</p>
          </div>

          {discountLabels.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6' }}>
              <span className="text-sm" style={{ color: '#16a34a' }}>&#10003;</span>
              <p className="text-sm" style={{ color: '#16a34a' }}>
                {discountLabels.join(", ")} discount noted — confirmed on booking
              </p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#f3f4f6', margin: '0 2rem' }} />

        {/* AI reasoning */}
        <div style={{ padding: '1.5rem 2rem' }}>
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#9ca3af', marginBottom: '0.75rem' }}>AI assessment</p>
          <p className="text-sm leading-relaxed" style={{ color: '#374151' }}>{result.reasoning}</p>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#f3f4f6', margin: '0 2rem' }} />

        {/* Actions */}
        <div style={{ padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            onClick={onBook}
            className="flex items-center justify-between bg-brand-green text-white rounded-full font-semibold transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] cursor-pointer border-none"
            style={{ paddingLeft: '1.75rem', paddingRight: '0.5rem', height: '3.25rem' }}
          >
            Book This Job
            <span className="flex items-center justify-center" style={{ width: '2.25rem', height: '2.25rem', flexShrink: 0 }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={onEdit}
              className="text-sm font-medium transition-all cursor-pointer rounded-full"
              style={{ flex: 1, border: '1px solid #e5e7eb', color: '#6b7280', backgroundColor: 'transparent', height: '3.25rem' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#9ca3af'; e.currentTarget.style.color = '#111'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#6b7280'; }}
            >
              Edit Estimate
            </button>
            <button
              onClick={onReset}
              className="text-sm font-medium transition-all cursor-pointer rounded-full"
              style={{ flex: 1, border: '1px solid #e5e7eb', color: '#6b7280', backgroundColor: 'transparent', height: '3.25rem' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#9ca3af'; e.currentTarget.style.color = '#111'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#6b7280'; }}
            >
              New Estimate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
