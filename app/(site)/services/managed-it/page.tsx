import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  Flame,
  DollarSign,
  ShieldAlert,
  UserX,
  Activity,
  Settings,
  Headphones,
  Shield,
  HardDrive,
  Map,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Managed IT Services - Weekends IT",
};

export default function ManagedITPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-10.jpg">
        Proactive IT management for{" "}
        <span className="text-brand-green">growing businesses.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                You&apos;re constantly putting out IT fires instead of preventing
                them.{" "}
                <strong>
                  Surprise repair bills, unknown security gaps, and no one who
                  really knows your systems
                </strong>{" "}
                — small businesses deserve better than reactive break-fix chaos.
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
                You need IT to just work — not add to your stress.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Flame,
                title: "Always fighting fires",
                description:
                  "You're constantly reacting to IT problems instead of preventing them — and it's exhausting and expensive.",
              },
              {
                icon: DollarSign,
                title: "Surprise bills at the worst time",
                description:
                  "IT costs spike unpredictably when things break, making it impossible to budget and plan properly.",
              },
              {
                icon: ShieldAlert,
                title: "Not sure if your data is safe",
                description:
                  "You're not certain your backups work, your systems are secure, or what's actually vulnerable to attack.",
              },
              {
                icon: UserX,
                title: "No one knows your systems",
                description:
                  "Every time something breaks, you start from scratch explaining your setup to whoever picks up the phone.",
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
              Small businesses deserve enterprise-level IT support with proactive
              management — without enterprise-level costs or complexity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-11.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                Proactive IT management scaled for your business.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                Our managed IT services give you the proactive support,
                monitoring, and expertise that larger companies have — but
                scaled and priced for small and medium businesses. We&apos;ve
                helped dozens of growing businesses transition from reactive
                break-fix to proactive management.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Assessment and onboarding",
                description:
                  "We assess your current IT infrastructure, understand your business needs, and create a customised management plan.",
              },
              {
                step: "02",
                title: "Proactive management",
                description:
                  "We monitor your systems 24/7, perform regular maintenance, apply security updates, and fix small issues before they become big problems.",
              },
              {
                step: "03",
                title: "Ongoing partnership",
                description:
                  "You get predictable monthly costs, priority support including weekends, and a trusted partner who knows your systems inside and out.",
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

      {/* ===== SERVICE PLANS ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Service plans.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Find the right level of support for your business size and needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            <ScrollReveal delay={0}>
              <div className="h-full bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 flex flex-col">
                <p className="label-section mb-6">Essential</p>
                <p className="text-foreground/35 text-sm leading-relaxed mb-8 flex-1">
                  Perfect for 1–5 users with basic support needs.
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "Help desk support during business hours",
                    "Weekend emergency support included",
                    "Remote monitoring and maintenance",
                    "Monthly system updates",
                    "Basic backup monitoring",
                    "Security patch management",
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
                  href="/contact"
                  className="block text-center border border-foreground/15 text-foreground/70 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-400 hover:bg-brand-green hover:border-brand-green hover:text-white"
                >
                  Get a Quote
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="h-full bg-brand-green rounded-2xl p-8 md:p-10 relative flex flex-col transition-all duration-500 hover:shadow-[0_25px_60px_rgba(39,170,39,0.25)] hover:-translate-y-1">
                <span className="absolute top-6 right-6 bg-black/20 text-white text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  Most Popular
                </span>
                <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-6">
                  Professional
                </p>
                <p className="text-white/80 text-sm leading-relaxed mb-8 flex-1">
                  Everything in Essential, plus advanced tools for growing
                  businesses with 5–15 users.
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "Priority response times",
                    "Proactive system monitoring",
                    "Advanced security management",
                    "Quarterly technology reviews",
                    "On-site visits included",
                    "Strategic IT planning",
                    "Vendor management",
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
                  Get a Quote
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="h-full bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 flex flex-col">
                <p className="label-section mb-6">Custom Enterprise</p>
                <p className="text-foreground/35 text-sm leading-relaxed mb-8 flex-1">
                  For larger organisations or specialised compliance and security
                  needs.
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "Customised support plans",
                    "Dedicated account management",
                    "Advanced security and compliance",
                    "24/7 monitoring and support",
                    "Strategic IT roadmap",
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
                  href="/contact"
                  className="block text-center border border-foreground/15 text-foreground/70 px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-400 hover:bg-brand-green hover:border-brand-green hover:text-white"
                >
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                What&apos;s included in all plans.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Activity,
                title: "Proactive Monitoring",
                description:
                  "24/7 system monitoring, automated alerts, issue detection, performance tracking, and uptime monitoring.",
              },
              {
                icon: Settings,
                title: "Regular Maintenance",
                description:
                  "System updates, security patches, performance optimisation, cleanup and tuning, and preventive care.",
              },
              {
                icon: Headphones,
                title: "Help Desk Support",
                description:
                  "Phone and email support, ticket management, remote assistance, problem resolution, and user training.",
              },
              {
                icon: Shield,
                title: "Security Management",
                description:
                  "Antivirus management, firewall monitoring, security updates, threat detection, and vulnerability scanning.",
              },
              {
                icon: HardDrive,
                title: "Backup & Recovery",
                description:
                  "Automated backups, backup monitoring, regular testing, recovery planning, and data protection.",
              },
              {
                icon: Map,
                title: "Strategic Planning",
                description:
                  "Technology roadmap, budget planning, upgrade recommendations, vendor management, and growth planning.",
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
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What success looks like</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                With managed IT services.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Constant fire-fighting and reactive emergency responses",
                    "Unpredictable IT costs that spike when things break",
                    "Security vulnerabilities you don't know about until too late",
                    "Backup systems that fail when you actually need them",
                    "No one who really knows your systems",
                    "Technology decisions made in crisis mode",
                    "Sleepless nights worrying about what might break next",
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
                    "Systems monitored 24/7 with issues caught before you notice",
                    "Predictable monthly costs instead of surprise repair bills",
                    "Priority support with fast response, especially weekends",
                    "Regular backups that are tested and verified",
                    "Proactive security protecting your business",
                    "Strategic IT planning aligned with business goals",
                    "Peace of mind knowing experts are watching your systems",
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
      <section className="bg-surface-dark border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Ready for proactive IT management?
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Let&apos;s discuss how managed services can support your business
                growth.
              </p>
              <div className="flex gap-5 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/pricing"
                  className="inline-block text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60"
                >
                  Compare Plans
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
