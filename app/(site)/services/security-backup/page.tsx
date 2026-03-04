import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  HardDrive,
  Lock,
  ShieldAlert,
  HelpCircle,
  RefreshCw,
  Shield,
  KeyRound,
  FileCheck,
  Activity,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Security & Backup - Weekends IT",
};

export default function SecurityBackupPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-7.jpg">
        Protect your business from{" "}
        <span className="text-brand-green">data loss and cyber threats.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Your data isn&apos;t backed up — or you&apos;re not sure if your
                backups actually work.{" "}
                <strong>
                  One ransomware attack, hardware failure, or disaster could
                  wipe out everything
                </strong>
                . Get practical, effective protection before it&apos;s too late.
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
                You know you should have better protection — but where do you
                start?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: HardDrive,
                title: "Backups you can't trust",
                description:
                  "Your data isn't backed up — or if it is, you've never actually tested whether those backups can be restored.",
              },
              {
                icon: Lock,
                title: "Ransomware keeps you up at night",
                description:
                  "You've heard the horror stories about businesses losing everything to ransomware. You're worried yours could be next.",
              },
              {
                icon: ShieldAlert,
                title: "Unknown vulnerabilities",
                description:
                  "Your systems might have security gaps you don't know about — until an attacker finds them first.",
              },
              {
                icon: HelpCircle,
                title: "Overwhelmed by conflicting advice",
                description:
                  "Security advice is everywhere but it's contradictory, technical, and makes it hard to know what you actually need.",
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
              Data security and backup shouldn&apos;t be complicated or only
              accessible to large enterprises. Everyone deserves effective
              protection.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-9.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                Practical security and backup that actually works.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                We help businesses and individuals implement practical, effective
                security and backup solutions that match their real needs and
                risks. We focus on what works, test everything, and explain it
                all in plain English.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Security assessment",
                description:
                  "We assess your current situation, identify real vulnerabilities, and recommend practical solutions that match your actual risk level and budget.",
              },
              {
                step: "02",
                title: "Implementation",
                description:
                  "We set up backup systems that actually work, implement appropriate security measures, and test everything to make sure it functions when you need it.",
              },
              {
                step: "03",
                title: "Ongoing protection",
                description:
                  "Regular backup verification, security updates, and monitoring to ensure your protection stays effective as threats evolve.",
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

      {/* ===== PROTECTION SERVICES ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Protection services.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Tested, practical protection — not fear-mongering.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: HardDrive,
                title: "Backup Solutions",
                description:
                  "Automated backup setup, cloud and local backup, backup monitoring, regular testing, and quick recovery procedures.",
              },
              {
                icon: RefreshCw,
                title: "Disaster Recovery",
                description:
                  "Recovery planning, system imaging, business continuity, recovery testing, documented procedures, and fast restoration.",
              },
              {
                icon: Shield,
                title: "Cybersecurity",
                description:
                  "Security assessments, antivirus and anti-malware, firewall configuration, security updates, and threat monitoring.",
              },
              {
                icon: KeyRound,
                title: "Password Management",
                description:
                  "Password manager setup, multi-factor authentication, secure password policies, and team security training.",
              },
              {
                icon: FileCheck,
                title: "Compliance Support",
                description:
                  "Regulation guidance, security documentation, audit preparation, policy creation, and risk assessment.",
              },
              {
                icon: Activity,
                title: "Ongoing Monitoring",
                description:
                  "Regular security reviews, update management, backup verification, security patches, and annual assessments.",
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
                With proper security and backup.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Catastrophic data loss from hardware failure, ransomware, or disaster",
                    "Finding out backups don't work only when you desperately need them",
                    "Business shutdown or major disruption from data loss",
                    "Paying ransomware demands with no guarantee of recovery",
                    "Losing years of photos, financial records, or business data",
                    "Vulnerability to cyber attacks from outdated security",
                    "Regulatory fines from data breaches",
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
                    "Sleep better knowing your data is safely backed up and tested",
                    "Protection from ransomware and cyber threats",
                    "Quick recovery if disaster strikes — hours not weeks",
                    "Compliance with regulations or client requirements",
                    "Confidence that backups actually work when needed",
                    "Regular security updates protecting against new threats",
                    "Clear understanding of your protection status",
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
                Don&apos;t wait for disaster to strike.
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Let&apos;s protect your business with tested backup and security.
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
