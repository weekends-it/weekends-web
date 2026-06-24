import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import ImageBand from "@/components/ImageBand";
import CtaSection from "@/components/CtaSection";
import ContactButton from "@/components/ContactButton";
import { btnPrimary, btnGhost } from "@/lib/styles";
import { CHAT } from "@/lib/chat";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import {
  Gauge,
  WifiOff,
  ShieldAlert,
  HelpCircle,
  Laptop,
  Wifi,
  Home,
  HardDrive,
  MessageSquare,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Home & Family IT Support Brisbane",
  description:
    "Weeknight and weekend IT support for Brisbane homes — computer repairs, home networks, smart devices, printers and more, when your family is actually home.",
  alternates: { canonical: "/services/home-family" },
  openGraph: { title: "Home & Family IT Support Brisbane | Weekends IT", url: "/services/home-family", images: ["/og-image.jpg"] },
};

export default function HomeFamilyPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd({ name: "Home & Family IT Support Brisbane", description: "Weeknight and weekend IT support for Brisbane homes — computer repairs, home networks, smart devices, printers and more, when your family is actually home.", path: "/services/home-family" })} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: "Home & Family IT Support Brisbane", path: "/services/home-family" }])} />
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-20.jpg" alt="Home and family tech support in Brisbane">
        Technology that{" "}
        <span className="text-brand-green">just works</span> for your family.
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Your computer is running slower than ever, the WiFi keeps
                dropping, and you got a virus warning you&apos;re not sure about.{" "}
                <strong>
                  Your home tech should make life easier, not more frustrating
                </strong>
                . We provide friendly, jargon-free help when you need it.
              </p>
              <ScrollReveal delay={200}>
                <div className="mt-10">
                  <ContactButton className={btnGhost} message={CHAT.quote}>
                    Get a quote →
                  </ContactButton>
                </div>
              </ScrollReveal>
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
                Technology shouldn&apos;t be this complicated.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Gauge,
                title: "Your computer is painfully slow",
                description:
                  "Your computer is running slower than ever and you don't know why — or how to fix it without making things worse.",
              },
              {
                icon: WifiOff,
                title: "WiFi keeps dropping",
                description:
                  "The WiFi keeps cutting out and the kids need it for homework. Connection issues are becoming a daily battle.",
              },
              {
                icon: ShieldAlert,
                title: "Scary virus warnings",
                description:
                  "You got a virus warning and you're not sure if it's real or a scam — and either way, you don't know what to do.",
              },
              {
                icon: HelpCircle,
                title: "Tech people make you feel lost",
                description:
                  "Tech companies use confusing jargon and make you feel dumb for asking questions. You just want clear, honest help.",
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
              Home technology should make family life easier, not harder.
              Everyone deserves patient, jargon-free tech help.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-10">
              <ContactButton className={btnGhost} message={CHAT.question}>
                Get help now →
              </ContactButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <ImageBand src="/images/wkends-26.jpg" alt="Helping a family with home technology" />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                We make tech simple and stress-free.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                We&apos;ve helped hundreds of families solve their technology
                problems with clear explanations and patient support. No
                judgment, no jargon — just friendly help that gets your tech
                working again.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Tell us what's wrong",
                description:
                  "Describe the problem in plain English. We'll listen and ask questions to understand exactly what's happening.",
              },
              {
                step: "02",
                title: "We fix it and explain",
                description:
                  "We'll solve the problem and explain what happened in simple terms. No tech jargon, just clear communication.",
              },
              {
                step: "03",
                title: "You're back online",
                description:
                  "Everything works again. Plus, we'll show you how to avoid the problem in the future.",
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

          <ScrollReveal delay={200}>
            <div className="mt-10">
              <Link href="/get-started" className={`inline-block ${btnGhost}`}>
                Get an estimate →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Simple, stress-free support.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                No jargon, no judgment — just friendly help that works.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Laptop,
                title: "Computer Problems",
                description:
                  "Slow computers, crashes, error messages, and strange behaviour. We diagnose and fix it all.",
              },
              {
                icon: ShieldAlert,
                title: "Virus & Malware",
                description:
                  "Got a virus warning? We\u2019ll clean your computer completely and set up protection to prevent future infections.",
              },
              {
                icon: Wifi,
                title: "WiFi & Network",
                description:
                  "Weak signal, dropped connections, or can\u2019t connect at all? We\u2019ll get your whole house covered with strong, reliable WiFi.",
              },
              {
                icon: Home,
                title: "Smart Home Setup",
                description:
                  "New smart TV, thermostat, or security camera? We\u2019ll set it up and show you how to use it.",
              },
              {
                icon: HardDrive,
                title: "Data Backup",
                description:
                  "Protect your photos, documents, and important files with automatic backup solutions.",
              },
              {
                icon: MessageSquare,
                title: "Patient Explanations",
                description:
                  "We explain everything in plain English. Ask as many questions as you want \u2014 that\u2019s what we\u2019re here for.",
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

          <ScrollReveal delay={200}>
            <div className="mt-10">
              <Link href="/get-started" className={`inline-block ${btnPrimary}`}>
                Get an estimate
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SENIORS CROSS-LINK ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 pb-28 md:pb-40">
          <ScrollReveal>
            <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <p className="label-section mb-4">For the whole family</p>
                <h2 className="heading-serif text-[1.8rem] md:text-[2.4rem] text-foreground mb-3">
                  Got older parents or grandparents?
                </h2>
                <p className="text-foreground/40 text-sm md:text-base leading-relaxed max-w-xl">
                  We also offer patient, jargon-free tech help made just for
                  seniors — at their pace, clearly explained, with senior
                  discounts and group sessions for retirement villages.
                </p>
              </div>
              <Link
                href="/services/seniors"
                className={`inline-block shrink-0 ${btnPrimary}`}
              >
                Tech help for seniors
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT SUCCESS LOOKS LIKE ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What success looks like</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                With tech that works.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Wasting entire weekends trying to fix tech problems",
                    "Kids frustrated because internet keeps dropping",
                    "Worry about losing precious family photos",
                    "Falling for scams because you're not sure what's real",
                    "Feeling talked down to by tech people",
                    "Technology causing stress instead of making life easier",
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
                    "Your computer runs fast and reliably",
                    "WiFi reaches every room in the house",
                    "Kids can do homework without connection issues",
                    "Your photos and files are safely backed up",
                    "You understand how your technology works",
                    "Weekends are for family, not fighting with computers",
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

          <ScrollReveal delay={200}>
            <div className="mt-10">
              <Link href="/get-started" className={`inline-block ${btnGhost}`}>
                Get an estimate →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <CtaSection
        heading={<>Ready to get your tech working?</>}
        body={<>Let&apos;s make technology stress-free for your family.</>}
        className="bg-surface border-t border-foreground/5"
      >
        <Link href="/get-started" className={`inline-block ${btnPrimary}`}>
          Get an Estimate
        </Link>
      </CtaSection>
    </>
  );
}
