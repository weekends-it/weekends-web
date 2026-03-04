import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/components/HeroSection";
import ImageCarousel from "@/components/ImageCarousel";
import BrandScroller from "@/components/BrandScroller";
import {
  Laptop,
  Store,
  Wifi,
  PhoneOff,
  CalendarDays,
  Zap,
  ThumbsUp,
  Banknote,
  Building2,
  ShoppingCart,
  Home,
  Heart,
  Monitor,
  Shield,
  Wrench,
  Package,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Weekends IT - Your IT Problems Don't Wait for Monday",
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <HeroSection />

      {/* ===== THE PROBLEM ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 pt-28 md:pt-40 pb-40 md:pb-56">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The problem</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                Technology breaks on weekends. IT support usually doesn&apos;t work then.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Laptop,
                title: "Saturday afternoon",
                description:
                  "Your computer crashes and Monday's deadline isn't moving.",
              },
              {
                icon: Store,
                title: "Weekend rush",
                description:
                  "Your POS system goes down when customers are lined up.",
              },
              {
                icon: Wifi,
                title: "Sunday evening",
                description:
                  "The home network quits and everyone needs it working.",
              },
              {
                icon: PhoneOff,
                title: "You need help",
                description:
                  "Most IT companies are closed or charge premium emergency rates.",
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
            <p className="text-foreground/50 text-base leading-relaxed max-w-xl mt-12">
              <strong className="text-foreground">The real challenge?</strong>{" "}
              Small businesses and families need reliable IT support
              that&apos;s both accessible and affordable &mdash; without
              breaking the bank or waiting days for help.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE CAROUSEL ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 pb-20 md:pb-28">
          <ScrollReveal>
            <ImageCarousel slots={4} height="h-[300px] md:h-[500px] lg:h-[700px]" autoSpread />
          </ScrollReveal>
        </div>
      </section>

      {/* ===== BRAND SCROLLER ===== */}
      <BrandScroller />

      {/* ===== THE SOLUTION / HOW IT WORKS ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                IT support that works around your schedule and budget.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                We provide expert IT support on weekends with flexible service
                options. Whether you need one-time help or ongoing managed
                support, we&apos;ve got you covered.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Choose your service model",
                description:
                  "One-time fixes, pay-as-you-go support, or ongoing MSP partnership — pick what makes sense for you.",
              },
              {
                step: "02",
                title: "We show up when you need us",
                description:
                  "Weekend availability means you get help when problems actually happen, not just during business hours.",
              },
              {
                step: "03",
                title: "Get back to what matters",
                description:
                  "Your tech works, your business runs smoothly, and you have reliable support going forward.",
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

          <ScrollReveal delay={350}>
            <div className="mt-14">
              <Link
                href="/get-started"
                className="bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
              >
                Get Started Today
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT SUCCESS LOOKS LIKE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What success looks like</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                Imagine having IT support that actually works for you.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Losing entire weekends to tech problems",
                    "Missing deadlines because systems went down at the wrong time",
                    "Paying for IT services you can't actually use when you need them",
                    "Scrambling to find help during your busiest hours",
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
                <p className="label-section mb-8 text-brand-green/70">You get</p>
                <ul className="space-y-5">
                  {[
                    "Reliable support available when problems actually happen",
                    "A partner who understands small business and home budgets",
                    "Flexible service options that scale with your needs",
                    "Clear communication without the technical jargon",
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

      {/* ===== STATS ===== */}
      <section className="bg-surface-dark border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: CalendarDays, value: "7/7", label: "Weekend Coverage" },
              { icon: Zap, value: "< 2hr", label: "Emergency Response" },
              { icon: ThumbsUp, value: "100%", label: "Satisfaction Rate" },
              { icon: Banknote, value: "$0", label: "Contract Fees" },
            ].map(({ icon: Icon, value, label }, i) => (
              <ScrollReveal key={label} delay={i * 80}>
                <div className="border border-foreground/8 rounded-2xl p-6 md:p-8 text-center">
                  <Icon size={18} className="text-brand-green/60 mb-3 mx-auto" />
                  <p className="heading-serif text-[2.5rem] md:text-[3rem] text-brand-green mb-2">
                    {value}
                  </p>
                  <p className="text-foreground/30 text-xs uppercase tracking-widest font-medium">
                    {label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                IT support when and how you need it.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                From one-time repairs to full managed services — flexible
                support for businesses and families.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Building2,
                title: "Small Business IT",
                description:
                  "Managed IT, network setup, server support & email systems.",
                href: "/services/small-business",
              },
              {
                icon: ShoppingCart,
                title: "Retail Solutions",
                description:
                  "POS systems, payment terminals, inventory & customer WiFi.",
                href: "/services/retail",
              },
              {
                icon: Home,
                title: "Home & Family",
                description:
                  "Computer repair, virus removal, smart home & data backup.",
                href: "/services/home-family",
              },
              {
                icon: Heart,
                title: "Seniors",
                description:
                  "Patient, jargon-free tech help at your pace. Senior discounts available.",
                href: "/services/seniors",
              },
              {
                icon: Monitor,
                title: "Remote Support",
                description:
                  "Screen sharing, software troubleshooting & configuration help.",
                href: "/services/remote-support",
              },
              {
                icon: Shield,
                title: "Security & Backup",
                description:
                  "Backup solutions, disaster recovery & cybersecurity setup.",
                href: "/services/security-backup",
              },
              {
                icon: Wrench,
                title: "Break / Fix",
                description:
                  "One-time repairs with no contracts, no fuss, fast help.",
                href: "/services/break-fix",
              },
              {
                icon: Package,
                title: "Procurement & IT Purchasing",
                description:
                  "Wholesale pricing on hardware & software — 20–40% below retail.",
                href: "/services/procurement",
              },
            ].map(({ icon: Icon, title, description, href }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <Link
                  href={href}
                  className="group block bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full no-underline transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15"
                >
                  <Icon size={20} className="text-foreground/30 mb-5 transition-colors duration-300 group-hover:text-brand-green" />
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-3 transition-colors duration-300 group-hover:text-brand-green">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {description}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Transparent pricing that makes sense.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            <ScrollReveal delay={0}>
              <div className="h-full bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15">
                <p className="label-section mb-8">Break / Fix</p>
                <div className="mb-4">
                  <span className="heading-serif text-[3.5rem] md:text-[4.5rem] text-foreground">
                    $85
                  </span>
                  <span className="text-foreground/30 text-sm ml-2">/hr</span>
                </div>
                <p className="text-foreground/35 text-sm leading-relaxed mb-10 flex-1">
                  Perfect for one-time repairs and occasional support
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "No contracts required",
                    "Same or next-day service",
                    "Weekend availability",
                    "On-site or remote",
                    "Pay only for time worked",
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
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="h-full bg-brand-green rounded-2xl p-8 md:p-10 relative flex flex-col transition-all duration-500 hover:shadow-[0_25px_60px_rgba(39,170,39,0.25)] hover:-translate-y-1">
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
                  Ongoing partnership for businesses that need reliable IT
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "Proactive monitoring",
                    "Priority response",
                    "Regular maintenance",
                    "Help desk support",
                    "Security updates",
                    "Weekend coverage",
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
                  Contact Us
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={240}>
              <div className="h-full bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15">
                <p className="label-section mb-8">Emergency</p>
                <div className="mb-4">
                  <span className="heading-serif text-[3.5rem] md:text-[4.5rem] text-foreground">
                    $150
                  </span>
                  <span className="text-foreground/30 text-sm ml-2">/hr</span>
                </div>
                <p className="text-foreground/35 text-sm leading-relaxed mb-10 flex-1">
                  Same-day response when you can&apos;t wait
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "Guaranteed same-day",
                    "Critical system priority",
                    "After-hours available",
                    "Weekend & holiday",
                    "Fast response time",
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">Testimonials</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground">
                Trusted by local businesses and families.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                quote:
                  "Our POS went down on a Saturday afternoon during our busiest hours. They had us back up and running in under an hour. Lifesaver.",
                name: "Local Retail Owner",
                role: "Retail Shop",
              },
              {
                quote:
                  "Finally, IT support that doesn't require a massive contract. We use them as-needed and it's exactly what our small team requires.",
                name: "Small Business Owner",
                role: "Professional Services",
              },
              {
                quote:
                  "Patient, clear explanations without the tech jargon. They set up our whole home network and showed us how everything works.",
                name: "Family Customer",
                role: "Home Support",
              },
            ].map(({ quote, name, role }, i) => (
              <ScrollReveal key={name} delay={i * 80}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                  <p className="text-foreground/50 text-sm leading-relaxed flex-1 mb-8">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {name}
                    </p>
                    <p className="text-foreground/30 text-xs mt-1">{role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="bg-surface border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Ready for IT support that fits your schedule?
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Whether you need a one-time fix or ongoing support, we&apos;re
                here to help. Get in touch today.
              </p>
              <div className="flex gap-5 flex-wrap mb-16">
                <a
                  href="mailto:hello@wkends.com"
                  className="text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60"
                >
                  Email Us
                </a>
              </div>
              <div className="text-foreground/30 text-sm space-y-1.5">
                <p>
                  <span className="text-foreground/55">Weekend Hours:</span>{" "}
                  Saturday &amp; Sunday 8am–6pm
                </p>
                <p>
                  <span className="text-foreground/55">Serving:</span> Greater
                  Metro Area
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
