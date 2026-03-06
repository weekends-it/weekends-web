import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  Laptop,
  Clock,
  Home,
  DollarSign,
  Settings,
  SlidersHorizontal,
  Gauge,
  Shield,
  GraduationCap,
  RefreshCw,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Remote Support - Weekends IT",
};

export default function RemoteSupportPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-5.jpg">
        Fast tech help.{" "}
        <span className="text-brand-green">No driving required.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Many problems can be solved without anyone setting foot in your
                home or office.{" "}
                <strong>
                  With secure screen sharing, we can see and fix most issues
                  remotely
                </strong>{" "}
                &mdash; saving you time and money.
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
                Why wait days for an on-site visit?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Laptop,
                title: "You need help right now",
                description:
                  "Your software isn't working and you need help immediately — not in three days when the next available appointment opens up.",
              },
              {
                icon: Clock,
                title: "Waiting feels excessive",
                description:
                  "Waiting days for a tech to drive out seems like overkill for what might be a simple software issue.",
              },
              {
                icon: Home,
                title: "You'd rather not rearrange your day",
                description:
                  "You'd prefer to get help at your desk without scheduling an appointment window and waiting around all day.",
              },
              {
                icon: DollarSign,
                title: "Travel fees add up fast",
                description:
                  "On-site visit fees add up quickly for what often turns out to be a quick fix that could have been done remotely.",
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
              Most tech problems can be fixed remotely and quickly — you
              shouldn&apos;t have to wait days or pay travel fees.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-6.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                Most issues can be solved remotely.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                With secure screen sharing, we can see exactly what you see and
                fix most software, configuration, and connectivity issues without
                ever leaving our desk. Faster help, lower cost, same expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Contact us",
                description:
                  "Call, email, or message us with your issue. We\u2019ll determine if it can be solved remotely (most can).",
              },
              {
                step: "02",
                title: "Secure connection",
                description:
                  "We\u2019ll send you a secure link to share your screen. You stay in control the entire time.",
              },
              {
                step: "03",
                title: "Problem solved",
                description:
                  "We fix the issue while you watch. You learn what happened and how to prevent it next time.",
              },
            ].map(({ step, title, description }, i) => (
              <ScrollReveal key={step} delay={i * 80}>
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

      {/* ===== WHAT WE FIX REMOTELY ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                More than you&apos;d think.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Most issues can be solved remotely — faster help, lower cost.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Settings,
                title: "Software Troubleshooting",
                description:
                  "Applications crashing, error messages, installation problems, and software configuration issues.",
              },
              {
                icon: SlidersHorizontal,
                title: "Configuration Help",
                description:
                  "Setting up email, configuring printers, adjusting settings, and connecting devices to your network.",
              },
              {
                icon: Gauge,
                title: "Performance Issues",
                description:
                  "Slow computers, high CPU usage, startup problems, and system optimisation.",
              },
              {
                icon: Shield,
                title: "Security & Updates",
                description:
                  "Installing security software, running virus scans, applying updates, and password resets.",
              },
              {
                icon: GraduationCap,
                title: "Training & Walkthroughs",
                description:
                  "Learn how to use new software, navigate your system, or perform tasks you\u2019re unfamiliar with.",
              },
              {
                icon: RefreshCw,
                title: "Follow-Up Support",
                description:
                  "Quick check-ins after on-site visits to ensure everything still works perfectly.",
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
                With remote support.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Waiting days for an appointment for a 10-minute fix",
                    "Paying travel fees on top of service costs",
                    "Taking time off work to be home for the tech",
                    "Problem getting worse while you wait",
                    "Lost productivity during the wait",
                    "Simple issues becoming major headaches",
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
                    "Help in minutes, not days",
                    "No waiting around for appointment windows",
                    "Lower cost than on-site visits",
                    "Learn by watching the fix happen in real time",
                    "Available anywhere you have internet",
                    "Perfect for quick questions and simple issues",
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
                Need help right now?
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Let&apos;s see if we can solve it remotely.
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
