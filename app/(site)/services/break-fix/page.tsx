import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  Laptop,
  DollarSign,
  ClipboardList,
  Unlock,
  Network,
  Settings,
  Search,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Break/Fix Support - Weekends IT",
};

export default function BreakFixPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-3.jpg">
        Expert IT help when you need it.{" "}
        <span className="text-brand-green">No contracts required.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Your computer crashed and you need it fixed.{" "}
                <strong>
                  You don&apos;t want to pay monthly fees for support you
                  rarely use
                </strong>{" "}
                — you just want quality help when problems happen, without
                being locked into anything.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 pb-28 md:pb-40">
          <ScrollReveal>
            <div className="mb-12">
              <p className="label-section mb-6">The problem</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                You don&apos;t need monthly contracts — you just need help when
                things break.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Laptop,
                title: "Your computer crashed",
                description:
                  "Something broke and you need it fixed — not a monthly subscription, just expert help to get back on track.",
              },
              {
                icon: DollarSign,
                title: "Monthly fees for support you rarely use",
                description:
                  "You don't need ongoing managed IT — paying every month for support you barely use doesn't make sense.",
              },
              {
                icon: ClipboardList,
                title: "Forced into bad options",
                description:
                  "You feel trapped between expensive contracts you don't need and having no reliable help when emergencies arise.",
              },
              {
                icon: Unlock,
                title: "You want flexibility",
                description:
                  "You want fair pricing, no commitments, and the freedom to call when you need help without any strings attached.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <Icon size={22} className="text-foreground/40 mb-4" />
                  <h3 className="heading-serif text-[1.3rem] md:text-[1.5rem] text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-foreground/50 text-base leading-relaxed max-w-xl">
              <strong className="text-foreground">The real challenge?</strong>{" "}
              Not everyone needs ongoing IT management — you just need expert
              help when problems arise, without monthly commitments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-4.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                Quality IT support without the commitment.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                Our break/fix service gives you access to the same expertise and
                professionalism as our managed service clients — but on a
                pay-as-you-go basis. You get quality support when you need it,
                without paying for support when you don&apos;t.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Contact us when issues arise",
                description:
                  "Call, email, or message when you need help. No account setup, no contracts — just tell us what's wrong.",
              },
              {
                step: "02",
                title: "We fix it",
                description:
                  "On-site or remote support to diagnose and solve your problem quickly, with clear communication about costs.",
              },
              {
                step: "03",
                title: "Pay for what you use",
                description:
                  "You pay only for the time we worked. No monthly fees, no minimums, no surprises.",
              },
            ].map(({ step, title, description }, i) => (
              <ScrollReveal key={step} delay={i * 100}>
                <div className="border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <span className="font-mono text-xs text-brand-green mb-6 block">
                    {step}
                  </span>
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE FIX ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                What we fix.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                One-time expert help — no contract needed.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Laptop,
                title: "Computer Issues",
                description:
                  "Hardware failures, software problems, performance issues, upgrades, and replacements.",
              },
              {
                icon: Network,
                title: "Network Problems",
                description:
                  "WiFi issues, connection problems, router setup, and network optimisation.",
              },
              {
                icon: Settings,
                title: "Installation & Setup",
                description:
                  "Software installation, hardware setup, device configuration, and system migration.",
              },
              {
                icon: Search,
                title: "Troubleshooting",
                description:
                  "Error diagnosis, problem solving, system repair, and data recovery.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <Icon size={20} className="text-foreground/30 mb-5" />
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT SUCCESS LOOKS LIKE ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What success looks like</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                With flexible break/fix support.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Being forced into monthly contracts for IT you rarely need",
                    "Paying for services month after month you're not using",
                    "Having no reliable option when problems arise",
                    "Wasting time finding trustworthy help in emergencies",
                    "Paying premium emergency rates with no go-to provider",
                    "Getting locked into long-term agreements",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-foreground/35 text-sm leading-relaxed flex gap-3"
                    >
                      <X size={14} className="text-red-400/50 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="bg-brand-green/5 border border-brand-green/15 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-brand-green/70">
                  You get
                </p>
                <ul className="space-y-5">
                  {[
                    "Expert help available when you need it, no monthly commitment",
                    "Pay only for actual time worked",
                    "Same weekend availability and fast response",
                    "Freedom to use us as much or as little as needed",
                    "Professional service without being locked into contracts",
                    "Transparent pricing with no hidden fees",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-foreground/50 text-sm leading-relaxed flex gap-3"
                    >
                      <Check size={14} className="text-brand-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-surface border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Need help now? No contract required.
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Get expert IT support when you need it.
              </p>
              <div className="flex gap-5 flex-wrap">
                <Link
                  href="/get-started"
                  className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
                >
                  Get an Estimate
                </Link>
                <Link
                  href="/pricing"
                  className="inline-block text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60"
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
