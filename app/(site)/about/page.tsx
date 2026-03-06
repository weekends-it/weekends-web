import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Weekends IT is Brisbane's weekend IT support service — available when others aren't. We show up Friday nights, Saturdays, and Sundays so you're never left waiting until Monday.",
  openGraph: { title: "About Us | Weekends IT", url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-16.jpg">
        IT support built around{" "}
        <span className="text-brand-green">real needs.</span>
      </PageHero>

      {/* ===== THE STORY ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The story</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl">
                Small businesses were stuck between two bad options.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            <ScrollReveal delay={60}>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <span className="font-mono text-xs text-red-400/60 mb-4 block">
                  Option 1
                </span>
                <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-4">
                  Enterprise IT
                </h3>
                <p className="text-foreground/35 text-sm leading-relaxed">
                  Pay thousands monthly for services designed for companies with
                  100+ employees. Rigid contracts, overkill features, and a
                  budget that doesn&apos;t make sense for a small team.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <span className="font-mono text-xs text-red-400/60 mb-4 block">
                  Option 2
                </span>
                <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-4">
                  Wing it alone
                </h3>
                <p className="text-foreground/35 text-sm leading-relaxed">
                  Hope nothing breaks on weekends when you actually need help.
                  Spend hours troubleshooting yourself instead of running your
                  business or enjoying your time off.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Neither option made sense. So I started Weekends IT with a
                simple mission:{" "}
                <strong>
                  provide professional IT support that&apos;s accessible,
                  affordable, and actually available when people need it most.
                </strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE + QUOTE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="relative rounded-2xl overflow-hidden h-[50vh] min-h-[400px]">
            <div className="absolute inset-0" style={{ backgroundImage: "url('/images/wkends-17.jpg')", backgroundSize: "cover", backgroundPosition: "center 30%" }} />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 h-full flex items-end justify-end p-8 md:p-12">
              <ScrollReveal direction="none">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 max-w-md border border-white/15">
                  <p className="text-white text-lg md:text-xl leading-relaxed font-light italic mb-4">
                    &ldquo;Technology problems don&apos;t follow a 9-to-5 schedule.
                    They happen Saturday afternoon when you&apos;re trying to close a
                    deal.&rdquo;
                  </p>
                  <p className="text-white/60 text-sm font-medium">
                    Weekends IT Team
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY WEEKENDS ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">Why weekends?</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                Technology problems don&apos;t follow a 9-to-5 schedule.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                Working weekends isn&apos;t just convenient &mdash; it&apos;s
                when you need help most. That&apos;s why weekend availability is
                built into everything we do.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Saturday afternoon when you're trying to close a deal",
              "Sunday during your busiest retail hours",
              "Late Friday when you need something ready for Monday",
              "Basically any time traditional IT support is unavailable",
            ].map((scenario, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="border border-foreground/8 rounded-2xl p-6 md:p-8 h-full">
                  <span className="font-mono text-xs text-brand-green mb-4 block">
                    0{i + 1}
                  </span>
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    {scenario}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">Our approach</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground">
                Support shaped to fit you.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "For Small Businesses",
                description:
                  "We offer both flexible pay-as-you-go support and managed IT services (MSP) partnerships. Your business needs might change, and your IT support should be able to change with you.",
              },
              {
                title: "For Retail Shops",
                description:
                  "We understand that downtime means lost revenue. Fast response and weekend availability aren't luxuries — they're necessities.",
              },
              {
                title: "For Families",
                description:
                  "Home technology should make life easier, not harder. We provide clear, jargon-free help that gets you back up and running.",
              },
            ].map(({ title, description }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
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

      {/* ===== WHAT MAKES US DIFFERENT ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <h2 className="heading-serif text-[clamp(2.8rem,5vw,5rem)] text-foreground leading-none mb-16 md:mb-20">
              What makes
              <br />
              us different.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ImageCarousel className="rounded-2xl mb-20 md:mb-28" slots={4} direction="left" height="h-[300px] md:h-[500px] lg:h-[700px]" />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "Weekend Availability",
                description:
                  "We work when problems actually happen — Saturdays and Sundays included.",
              },
              {
                title: "Flexible Options",
                description:
                  "One-time fix, pay-as-you-go, or ongoing MSP support — choose what fits your needs and budget.",
              },
              {
                title: "Local & Responsive",
                description:
                  "We're part of your community. Your success matters to us because we're invested in the same local economy.",
              },
              {
                title: "Clear Communication",
                description:
                  "No confusing technical jargon unless you want it. Just straightforward explanations and honest recommendations.",
              },
              {
                title: "Scalable Support",
                description:
                  "Start with basic support and add managed services as you grow. We scale with your needs.",
              },
            ].map(({ title, description }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="border border-foreground/8 rounded-2xl p-6 md:p-8 h-full">
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
        </div>
      </section>

      {/* ===== OUR COMMITMENT ===== */}
      <section className="bg-surface border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="label-section mb-6">Our commitment</p>
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                We show up on time, fix the problem efficiently, and communicate
                clearly throughout the process. Whether you need emergency
                weekend support or a long-term IT partnership,{" "}
                <strong>
                  we&apos;re here to make technology work for you &mdash; not the
                  other way around.
                </strong>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-surface border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Ready to work together?
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Let&apos;s solve your technology challenges and get you back to
                focusing on what matters most.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
