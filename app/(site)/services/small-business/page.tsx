import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  Clock,
  FileX,
  AlertTriangle,
  Flame,
  Monitor,
  Network,
  Wrench,
  Shield,
  CalendarDays,
  TrendingUp,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Small Business IT Support Brisbane",
  description:
    "Weekend IT support for Brisbane small businesses. Break/fix repairs, managed IT, network setup, and more — without disrupting your business hours.",
  openGraph: { title: "Small Business IT Support Brisbane | Weekends IT", url: "/services/small-business" },
};

export default function SmallBusinessPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-1.jpg">
        Reliable IT for your{" "}
        <span className="text-brand-green">growing business.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Your network goes down on a Saturday and you&apos;re scrambling
                to find help.{" "}
                <strong>
                  You can&apos;t afford expensive IT contracts designed for big
                  companies
                </strong>
                , but you need someone reliable who won&apos;t disappear after
                the first fix. We built our service around exactly this problem.
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
                Running a business is hard enough without tech problems.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Clock,
                title: "Help isn't there when you need it",
                description:
                  "Your network goes down on Saturday and you're scrambling to find help that isn't available on weekends.",
              },
              {
                icon: FileX,
                title: "Contracts built for big companies",
                description:
                  "You can't afford expensive IT contracts designed for enterprises — you need flexible support that fits your budget.",
              },
              {
                icon: AlertTriangle,
                title: "The worst possible timing",
                description:
                  "Systems break on weekends, evenings, and during busy season — never during normal business hours.",
              },
              {
                icon: Flame,
                title: "Tech problems eat your time",
                description:
                  "You're wasting hours on tech issues instead of running and growing your business.",
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
              Small businesses deserve professional IT support without being
              forced into expensive contracts or going without reliable help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-2.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                We get it. You need IT support that actually works.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                We&apos;ve helped hundreds of small businesses solve their
                technology challenges with flexible, affordable support. Whether
                you need one-time help or ongoing managed services, we&apos;re
                here when you need us most — including weekends.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Choose your service model",
                description:
                  "One-time fixes, pay-as-you-go support, or full managed IT services. Pick what works for your business.",
              },
              {
                step: "02",
                title: "We fix it fast",
                description:
                  "Weekend availability, fast response times, and clear communication. We get you back up and running quickly.",
              },
              {
                step: "03",
                title: "Your business runs smoothly",
                description:
                  "Reliable technology, predictable costs, and a partner who's here for the long haul. Focus on your business, not your IT.",
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

      {/* ===== WHAT YOU GET ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Complete business IT support.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Flexible options from pay-as-you-go to full managed services.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Monitor,
                title: "Managed IT Services",
                description:
                  "Proactive monitoring, regular maintenance, help desk support, and priority weekend access. Predictable monthly pricing.",
              },
              {
                icon: Network,
                title: "Network & Infrastructure",
                description:
                  "Setup, optimisation, and ongoing management of your business network. WiFi, servers, security, and everything in between.",
              },
              {
                icon: Wrench,
                title: "Break / Fix Support",
                description:
                  "Don\u2019t need ongoing support? Get expert help when you need it with our flexible pay-as-you-go service.",
              },
              {
                icon: Shield,
                title: "Security & Backup",
                description:
                  "Regular backups, security updates, and disaster recovery planning. Sleep better knowing your data is safe.",
              },
              {
                icon: CalendarDays,
                title: "Weekend Availability",
                description:
                  "We work Saturdays and Sundays because that\u2019s when problems actually happen. Get help when other IT companies are closed.",
              },
              {
                icon: TrendingUp,
                title: "Scalable Support",
                description:
                  "Start small and grow. Add services as your business expands. We scale with you, not the other way around.",
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

      {/* ===== MANAGED IT PLANS ===== */}
      <section id="managed-it" className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">Managed IT services</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                Proactive management scaled for your business.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed mb-8">
                Get enterprise-level IT support without enterprise costs. Ongoing
                monitoring, maintenance, and support that keeps your business
                running smoothly — with weekend coverage included.
              </p>
              <Link
                href="/services/managed-it"
                className="text-brand-green text-sm font-medium border-b border-brand-green/30 pb-0.5 transition-all duration-300 hover:border-brand-green"
              >
                Learn more about managed IT →
              </Link>
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

      {/* ===== WHAT SUCCESS LOOKS LIKE ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What success looks like</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                With reliable IT support.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Losing entire weekends fighting with technology",
                    "Missing deadlines because systems went down",
                    "Wasting money on expensive contracts you don't need",
                    "Scrambling to find help during emergencies",
                    "Risking data loss from inadequate backups",
                    "Falling behind competitors who have IT figured out",
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
                    "Systems that work reliably so you can focus on your business",
                    "A trusted partner available when problems happen",
                    "Predictable IT costs that fit your budget",
                    "Fast response times, especially on weekends",
                    "Peace of mind knowing your data is backed up and secure",
                    "Technology that helps you grow, not holds you back",
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
                Ready to get your IT handled?
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Let&apos;s talk about how we can support your business.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
              >
                Schedule a Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
