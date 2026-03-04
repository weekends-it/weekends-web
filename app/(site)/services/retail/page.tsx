import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  Monitor,
  CreditCard,
  Clock,
  TrendingDown,
  Banknote,
  Printer,
  Package,
  Wifi,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retail Solutions - Weekends IT",
};

export default function RetailPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-12.jpg">
        Keep your store{" "}
        <span className="text-brand-green">running smoothly.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                When your POS goes down, you lose money.{" "}
                <strong>
                  Every minute of downtime during the Saturday rush costs you
                  real revenue
                </strong>
                . Most IT companies don&apos;t understand retail and aren&apos;t
                available on weekends. We are.
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
                Downtime means lost revenue.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Monitor,
                title: "POS crashes during rush hour",
                description:
                  "Your POS crashes during Saturday rush and customers are waiting — every second is money walking out the door.",
              },
              {
                icon: CreditCard,
                title: "Can't process payments",
                description:
                  "You can't process credit cards and you're losing sales by the minute while customers lose patience.",
              },
              {
                icon: Clock,
                title: "No one understands retail urgency",
                description:
                  "Most IT companies don't understand retail and aren't available on weekends — when you need help most.",
              },
              {
                icon: TrendingDown,
                title: "Every minute costs real money",
                description:
                  "Downtime isn't just inconvenient — it's lost revenue, lost customers, and reputation damage happening in real time.",
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
              Retail businesses need fast weekend support from people who
              understand that every second counts.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-13.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                We understand retail. Every second counts.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                We&apos;ve worked with dozens of retail shops and understand the
                pressure you&apos;re under. Fast response times, weekend
                availability, and expertise in POS systems — that&apos;s what
                you need, and that&apos;s what we deliver.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Call us immediately",
                description:
                  "We answer fast, especially on weekends. Describe the problem and we'll start troubleshooting right away.",
              },
              {
                step: "02",
                title: "We get you running",
                description:
                  "Remote support or on-site visit — whatever gets you back in business fastest. We move fast because we know time is money.",
              },
              {
                step: "03",
                title: "Back to business",
                description:
                  "Your POS works, customers are happy, and you're making sales again. Plus, we make sure it doesn't happen again.",
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

      {/* ===== WHAT WE SUPPORT ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Retail tech we handle.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Fast response because we know every second counts.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: CreditCard,
                title: "POS Systems",
                description:
                  "Installation, troubleshooting, and repair for all major POS systems. We get your register working fast.",
              },
              {
                icon: Banknote,
                title: "Payment Processing",
                description:
                  "Credit card terminals, payment processors, and integration issues. If it handles payments, we can fix it.",
              },
              {
                icon: Printer,
                title: "Printers & Scanners",
                description:
                  "Printer won\u2019t print? Scanner won\u2019t scan? We handle all the peripheral equipment that keeps your store running.",
              },
              {
                icon: Package,
                title: "Inventory Systems",
                description:
                  "Barcode systems, inventory software, and stock management tools. Keep accurate track of what you have.",
              },
              {
                icon: Wifi,
                title: "Customer WiFi",
                description:
                  "Setup and management of guest WiFi networks with proper security. Keep customers happy while protecting your business network.",
              },
              {
                icon: Clock,
                title: "Weekend Priority",
                description:
                  "Saturday and Sunday are your busiest days. That\u2019s exactly when we\u2019re available. Fast response when you need it most.",
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
                With reliable retail IT.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Losing hundreds in sales during your busiest hours",
                    "Frustrated customers walking out when POS is down",
                    "Scrambling to find help on Saturday afternoon",
                    "Paying emergency rates for last-minute fixes",
                    "Missing card sales when payment processing fails",
                    "Reputation damage from looking unprofessional",
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
                    "POS that works reliably so customers check out quickly",
                    "Fast response when something goes wrong — especially weekends",
                    "No more losing sales due to tech problems",
                    "A tech partner who understands retail urgency",
                    "Customer WiFi that actually works",
                    "Peace of mind during your busiest seasons",
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
                Don&apos;t let tech problems cost you sales.
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Get fast, reliable support for your retail business.
              </p>
              <Link
                href="/get-started"
                className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
              >
                Get an Estimate
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
