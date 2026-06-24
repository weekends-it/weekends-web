import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import ContactButton from "@/components/ContactButton";
import { CHAT } from "@/lib/chat";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import ImageBand from "@/components/ImageBand";
import { btnPrimary, btnGhost } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Weekends IT — after-hours weeknights (Mon–Thu 6pm–2am) and weekends. On-site IT support across Brisbane, Gympie to the Gold Coast.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Weekends IT", url: "/contact", images: ["/og-image.jpg"] },
};

export default function ContactPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-19.jpg" alt="Get in touch with Weekends IT">
        Let&apos;s{" "}
        <span className="text-brand-green">get started.</span>
      </PageHero>

      {/* ===== CONTACT ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <ScrollReveal>
              <div>
                <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8] mb-16">
                  Whether you need immediate help or want to discuss ongoing
                  support, <strong>we&apos;re here to listen</strong>.
                </p>
                <div className="space-y-10">
                  <div>
                    <p className="text-foreground/30 text-xs uppercase tracking-widest font-medium mb-4">
                      Email
                    </p>
                    <a
                      href="mailto:hello@wkends.com"
                      className="heading-serif text-[2rem] md:text-[2.5rem] text-foreground no-underline transition-colors duration-300 hover:text-brand-green block"
                    >
                      hello@wkends.com
                    </a>
                  </div>
                  <div>
                    <p className="text-foreground/30 text-xs uppercase tracking-widest font-medium mb-4">
                      Live chat
                    </p>
                    <ContactButton className={`inline-block ${btnPrimary}`}>
                      Chat with us now
                    </ContactButton>
                  </div>
                  <div>
                    <p className="text-foreground/30 text-xs uppercase tracking-widest font-medium mb-4">
                      Hours
                    </p>
                    <div className="space-y-2 text-sm text-foreground/50">
                      <p>
                        <span className="text-foreground/70">Mon–Thu:</span>{" "}
                        6pm–2am <span className="text-foreground/30">(after hours)</span>
                      </p>
                      <p>
                        <span className="text-foreground/70">Friday:</span>{" "}
                        6pm–2am
                      </p>
                      <p>
                        <span className="text-foreground/70">Saturday:</span>{" "}
                        4am–2am
                      </p>
                      <p>
                        <span className="text-foreground/70">Sunday:</span>{" "}
                        4am–2am
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <Suspense>
                <ContactForm />
              </Suspense>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO EXPECT ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What to expect</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Here&apos;s how we work.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Initial Contact",
                description:
                  "Reach out via live chat, email, or our form with details about your situation.",
              },
              {
                step: "02",
                title: "Consultation",
                description:
                  "We'll discuss your needs and recommend the best solution — whether that's a one-time visit or ongoing support.",
              },
              {
                step: "03",
                title: "Service Delivery",
                description:
                  "We arrive on time, resolve your issue efficiently, and keep you informed throughout.",
              },
              {
                step: "04",
                title: "Follow-Up",
                description:
                  "We ensure everything is working properly and you're satisfied with the results.",
              },
            ].map(({ step, title, description }, i) => (
              <ScrollReveal key={step} delay={i * 80}>
                <div className="border border-foreground/8 rounded-2xl p-6 md:p-8 h-full">
                  <span className="font-mono text-xs text-brand-green mb-4 block">
                    {step}
                  </span>
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

      {/* ===== SERVICE AREA ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Service area.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={60}>
            <ImageBand src="/images/wkends-21.jpg" alt="Weekend IT support in Brisbane" className="h-[35vh] min-h-[250px] mb-16 md:mb-20" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Service Area",
                body: "Based in Brisbane, Australia. We provide on-site support from Gympie to the Gold Coast, including the Sunshine Coast.",
              },
              {
                title: "Extended Service",
                body: "Outside our standard area? Get in touch — we can often accommodate locations beyond our usual range.",
              },
              {
                title: "Remote Support",
                body: "Available anywhere with an internet connection for software and configuration support.",
              },
            ].map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15">
                  <h3 className="heading-serif text-[1.3rem] md:text-[1.5rem] text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="mt-10">
              <ContactButton className={btnGhost} message={CHAT.getInTouch}>
                Check your area &rarr;
              </ContactButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== EMERGENCY CTA ===== */}
      <section className="bg-surface-dark border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="label-section mb-6">Emergency support</p>
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Need urgent help?
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                We offer same-day emergency service for critical business issues
                that can&apos;t wait. Reach out via email or live chat.
              </p>
              <div className="flex gap-5 flex-wrap">
                <ContactButton
                  className={btnPrimary}
                  message={CHAT.question}
                >
                  Chat with us now
                </ContactButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
