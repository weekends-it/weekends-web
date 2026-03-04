import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Pricing - Weekends IT",
};

export default function PricingPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-22.jpg">
        Transparent pricing that{" "}
        <span className="text-brand-green">makes sense.</span>
      </PageHero>

      {/* ===== INTRO ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Whether you need a one-time fix or ongoing support,{" "}
                <strong>
                  our pricing is straightforward and fair
                </strong>
                . No hidden fees, no surprise charges.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRICING CARDS ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">Service options</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground">
                Choose what fits your needs.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15">
                <p className="label-section mb-8">Break / Fix</p>
                <div className="mb-4">
                  <span className="heading-serif text-[3.5rem] md:text-[4.5rem] text-foreground">
                    $85
                  </span>
                  <span className="text-foreground/30 text-sm ml-2">/hr</span>
                </div>
                <p className="text-foreground/35 text-sm leading-relaxed mb-10 flex-1">
                  Perfect for one-time repairs and occasional support. No
                  contracts required.
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "On-site or remote diagnosis",
                    "Repair and configuration",
                    "Testing to ensure everything works",
                    "Clear explanation of issue and solution",
                    "Follow-up support if needed",
                  ].map((f) => (
                    <li
                      key={f}
                      className="text-foreground/40 border-t border-foreground/6 py-3 text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-started"
                  className="block text-center border border-foreground/15 text-foreground/70 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-400 hover:bg-brand-green hover:border-brand-green hover:text-white"
                >
                  Get an Estimate
                </Link>
              </div>

              <div className="bg-brand-green rounded-2xl p-8 md:p-10 relative flex flex-col transition-all duration-500 hover:shadow-[0_25px_60px_rgba(39,170,39,0.25)] hover:-translate-y-1">
                <span className="absolute top-6 right-6 bg-black/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  Most Popular
                </span>
                <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-8">
                  Managed IT
                </p>
                <div className="mb-4">
                  <span className="heading-serif text-[3.5rem] md:text-[4.5rem] text-white">
                    $499
                  </span>
                  <span className="text-white/60 text-sm ml-2">/mo</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-10 flex-1">
                  Ongoing partnership for businesses that need reliable,
                  proactive IT support.
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "Proactive monitoring & maintenance",
                    "Priority response times",
                    "Regular system updates & patches",
                    "Help desk support for your team",
                    "Weekend coverage included",
                    "Quarterly technology reviews",
                  ].map((f) => (
                    <li
                      key={f}
                      className="text-white/80 border-t border-white/20 py-3 text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-brand-green px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-400 hover:bg-white/90"
                >
                  Get Started
                </Link>
              </div>

              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15">
                <p className="label-section mb-8">Emergency</p>
                <div className="mb-4">
                  <span className="heading-serif text-[3.5rem] md:text-[4.5rem] text-foreground">
                    $150
                  </span>
                  <span className="text-foreground/30 text-sm ml-2">/hr</span>
                </div>
                <p className="text-foreground/35 text-sm leading-relaxed mb-10 flex-1">
                  Same-day guaranteed response for critical business issues that
                  can&apos;t wait.
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "Guaranteed same-day response",
                    "Critical system priority",
                    "After-hours availability",
                    "Weekend & holiday service",
                    "Fast turnaround",
                  ].map((f) => (
                    <li
                      key={f}
                      className="text-foreground/40 border-t border-foreground/6 py-3 text-sm"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-started"
                  className="block text-center border border-foreground/15 text-foreground/70 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-400 hover:bg-brand-green hover:border-brand-green hover:text-white"
                >
                  Get an Estimate
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10 pb-28 md:pb-40">
          <div className="rounded-2xl border border-foreground/8 h-[35vh] min-h-[250px]" style={{ backgroundImage: "url('/images/wkends-24.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== ONE-TIME PACKAGES ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">Service packages</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                One-time service packages.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Fixed-scope packages for common needs. No ongoing commitment
                required.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Quick Fix",
                description:
                  "Single computer issues, software installation, basic troubleshooting.",
                features: [
                  "Up to 2 hours of work",
                  "Same-day or next-day service",
                  "One device or issue",
                ],
              },
              {
                title: "Small Business Support",
                description:
                  "Network issues, multiple devices, POS systems.",
                features: [
                  "Up to 4 hours of work",
                  "Multiple devices covered",
                  "Priority weekend scheduling",
                ],
              },
              {
                title: "Remote Support",
                description:
                  "Software troubleshooting, configuration, quick diagnostics.",
                features: [
                  "30-minute sessions",
                  "No on-site visit needed",
                  "Screen sharing support",
                ],
              },
            ].map(({ title, description, features }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed mb-6">
                    {description}
                  </p>
                  <ul className="space-y-3">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="text-foreground/50 text-sm flex gap-3"
                      >
                        <span className="text-brand-green shrink-0">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="bg-surface-dark border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm text-foreground/50">
              {[
                "Weekend availability",
                "Clear communication throughout",
                "No hidden fees or surprise charges",
                "Honest recommendations",
                "Follow-up support",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-brand-green">&#10003;</span>
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PAYMENT OPTIONS ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <ScrollReveal>
              <div>
                <p className="label-section mb-6">Payment</p>
                <h2 className="heading-serif text-[clamp(2rem,3.5vw,3rem)] text-foreground mb-8">
                  Payment options.
                </h2>
                <div className="space-y-6 text-foreground/50 text-sm leading-relaxed">
                  <div>
                    <p className="text-foreground font-medium mb-2">
                      We accept
                    </p>
                    <p>
                      Cash, checks, all major credit/debit cards, and ACH/bank
                      transfer for MSP clients.
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-2">
                      Payment terms
                    </p>
                    <p>
                      Break/fix services are due upon completion. MSP contracts
                      are billed monthly.
                    </p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-2">
                      Discounts available
                    </p>
                    <p>
                      Nonprofits, educational institutions, senior citizens,
                      multi-location businesses, and annual MSP commitments.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ===== FAQ ===== */}
            <ScrollReveal delay={120}>
              <div>
                <p className="label-section mb-6">FAQ</p>
                <h2 className="heading-serif text-[clamp(2rem,3.5vw,3rem)] text-foreground mb-8">
                  Common questions.
                </h2>
                <div className="space-y-0">
                  {[
                    {
                      q: "Do I need a contract for one-time support?",
                      a: "No. Our break/fix and hourly services are available without any contract. You pay for the time we work.",
                    },
                    {
                      q: "What if a repair takes longer than expected?",
                      a: "We'll always communicate before exceeding quoted time. You approve any additional work before we proceed.",
                    },
                    {
                      q: "What if you can't fix the problem?",
                      a: "You only pay for diagnostic time, and we'll recommend the best path forward — whether that's specialized support or hardware replacement.",
                    },
                    {
                      q: "Can I switch from hourly to MSP later?",
                      a: "Absolutely. Many clients start with break/fix support and transition to MSP as their needs grow. We make it easy.",
                    },
                    {
                      q: "What's included in MSP contracts?",
                      a: "MSP agreements include ongoing monitoring, maintenance, help desk support, and regular check-ins. We'll customize a plan based on your specific needs.",
                    },
                  ].map(({ q, a }) => (
                    <div
                      key={q}
                      className="border-t border-foreground/8 py-5"
                    >
                      <p className="text-foreground text-sm font-medium mb-2">
                        {q}
                      </p>
                      <p className="text-foreground/40 text-sm leading-relaxed">
                        {a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-surface-dark border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Get your custom quote.
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Every business is different. Let&apos;s talk about what you need
                and find the right solution for your budget.
              </p>
              <div className="flex gap-5 flex-wrap">
                <Link
                  href="/get-started"
                  className="bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
                >
                  Get an Estimate
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
