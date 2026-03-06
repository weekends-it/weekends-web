import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  Smartphone,
  MessageSquare,
  UserX,
  ShieldAlert,
  Phone,
  Tablet,
  BookOpen,
  Heart,
  Tv,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Support for Seniors Brisbane",
  description:
    "Patient, friendly technology help for Brisbane seniors. We explain everything clearly, move at your pace, and never make you feel bad for asking questions.",
  openGraph: { title: "Tech Support for Seniors Brisbane | Weekends IT", url: "/services/seniors" },
};

export default function SeniorsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-8.jpg">
        Patient tech help for seniors.{" "}
        <span className="text-brand-green">No judgment, no rush.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                You deserve technology help that&apos;s patient, respectful, and
                actually makes sense.{" "}
                <strong>
                  We take the time to explain things clearly — at your pace
                </strong>
                , without jargon, without rushing, and without ever making you
                feel foolish for asking.
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
                Technology keeps changing — and no one takes time to explain it.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: Smartphone,
                title: "Everything changed overnight",
                description:
                  "Your phone or computer updated and now everything looks different. The thing you knew how to use doesn't work the same way anymore.",
              },
              {
                icon: MessageSquare,
                title: "Tech people talk too fast",
                description:
                  "Tech support uses words you don't understand and rushes through explanations — leaving you more confused than before you called.",
              },
              {
                icon: UserX,
                title: "You feel rushed and talked down to",
                description:
                  "You feel like a burden when asking for help, rushed through things you don't fully understand, and judged for not knowing.",
              },
              {
                icon: ShieldAlert,
                title: "Worried about scams",
                description:
                  "Phone calls, pop-ups, and emails warn you of problems. You're not sure what's real, what's a scam, and who you can actually trust.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <Icon size={22} className="text-foreground/40 mb-4" />
                  <h3 className="heading-serif text-[1.3rem] md:text-[1.5rem] text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <p className="text-foreground/50 text-base leading-relaxed max-w-xl">
              <strong className="text-foreground">The real challenge?</strong>{" "}
              Seniors deserve technology help that&apos;s patient, respectful,
              and clearly explained — without being rushed or made to feel
              foolish.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-23.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                We take our time and explain everything clearly.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                We specialise in helping seniors feel confident with their
                technology. We speak clearly, move at your pace, and never make
                you feel bad for asking questions. That&apos;s literally what
                we&apos;re here for.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "You tell us what's wrong",
                description:
                  "Describe the problem however makes sense to you. We'll listen carefully and ask simple questions.",
              },
              {
                step: "02",
                title: "We fix it and show you",
                description:
                  "We solve the problem and explain each step in plain language. We'll repeat things as many times as you need.",
              },
              {
                step: "03",
                title: "You feel confident",
                description:
                  "Your tech works and you understand how to use it. Plus, we write down the steps so you can refer back later.",
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
                  <p className="text-foreground/35 text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                What we help with.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                No question is too small. No problem is too basic to ask about.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Phone,
                title: "Computer & Phone Help",
                description:
                  "Email setup, photo management, video calls with family (Zoom, FaceTime), internet browsing, app installation, and text messaging.",
              },
              {
                icon: Tablet,
                title: "Tablet & iPad Support",
                description:
                  "Device setup and basics, app navigation, photo viewing, social media help, adjusting settings, and accessibility features.",
              },
              {
                icon: ShieldAlert,
                title: "Scam & Security Protection",
                description:
                  "Identifying scam emails and calls, safe browsing, password management, account security, and fraud prevention education.",
              },
              {
                icon: BookOpen,
                title: "Technology Education",
                description:
                  "One-on-one training sessions, step-by-step written instructions, repeat visits to practice, and as many questions as you need.",
              },
              {
                icon: Heart,
                title: "Health & Safety Tech",
                description:
                  "Medical alert systems, health monitoring devices, medication reminder apps, video doctor visits, and health app navigation.",
              },
              {
                icon: Tv,
                title: "Entertainment & Connection",
                description:
                  "Streaming services (Netflix, etc.), digital photo sharing, email and messaging, social media basics, and video calls with grandchildren.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <Icon size={20} className="text-foreground/30 mb-5" />
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-base leading-relaxed">
                    {description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR PROMISE ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                How we&apos;re different.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                We provide extra time at no extra charge, written instructions
                you can keep, and follow-up phone support whenever you need it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-6">
                  We understand
                </h3>
                <ul className="space-y-4">
                  {[
                    "Vision or hearing challenges",
                    "Slower pace preferences",
                    "The need for repetition",
                    "Larger text and button preferences",
                    "Simplified explanations",
                    "Physical limitations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-foreground/50 text-base leading-relaxed flex gap-3"
                    >
                      <Check size={14} className="text-brand-green shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-6">
                  Our promise
                </h3>
                <ul className="space-y-4">
                  {[
                    "No judgment for any question",
                    "No pressure to buy anything",
                    "No confusing technical jargon",
                    "No making you feel foolish",
                    "No rushing through explanations",
                    "Always patient and kind",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-foreground/50 text-base leading-relaxed flex gap-3"
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

      {/* ===== SENIOR DISCOUNT ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Special pricing for seniors 65+
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                20% off our standard Break/Fix rate, plus free phone support
                between visits and no extra charge for the extra time you need.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-lg">
            <ScrollReveal>
              <div className="bg-brand-green rounded-2xl p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-[0_25px_60px_rgba(39,170,39,0.25)] hover:-translate-y-1">
                <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-8">
                  One-Time Visit
                </p>
                <div className="mb-4">
                  <span className="heading-serif text-[3.5rem] md:text-[4.5rem] text-white">
                    $68
                  </span>
                  <span className="text-white/60 text-sm ml-2">/hr</span>
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-10">
                  Perfect for initial setup, a specific problem, or getting
                  started with a new device. Take all the time you need.
                </p>
                <ul className="space-y-0 mb-10">
                  {[
                    "No rush — take the time you need",
                    "Written step-by-step guide included",
                    "Follow-up phone support included",
                    "20% senior discount applied",
                    "Background-checked technician",
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
                  href="/get-started"
                  className="block text-center bg-white text-brand-green px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-400 hover:bg-white/90"
                >
                  Get an Estimate
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What seniors say</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground">
                Trusted by seniors and their families.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                quote:
                  "He was so patient with me. I asked the same question three times and he just smiled and showed me again. Now I can video call my grandchildren!",
                name: "Margaret",
                age: "72",
              },
              {
                quote:
                  "I was scared I'd been hacked, but he explained everything calmly and helped me feel safe again. He even wrote down the steps for me.",
                name: "Robert",
                age: "68",
              },
              {
                quote:
                  "Finally someone who doesn't make me feel stupid for not knowing about computers. Best decision I made was calling them.",
                name: "Dorothy",
                age: "75",
              },
            ].map(({ quote, name, age }, i) => (
              <ScrollReveal key={name} delay={i * 80}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                  <p className="text-foreground/50 text-base leading-relaxed flex-1 mb-8">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      {name}
                    </p>
                    <p className="text-foreground/30 text-xs mt-1">Age {age}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAMILY MEMBERS ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-6">
                Arranging help for a parent?
              </h2>
              <p className="text-foreground/50 text-base leading-relaxed mb-8">
                We encourage family members to be present during visits, call
                with concerns, and arrange service for elderly parents. We can
                help your parent become more independent with technology while
                giving you peace of mind.
              </p>
              <p className="text-foreground/35 text-base leading-relaxed">
                We also provide in-home service to private residences, senior
                living communities, assisted living facilities, and retirement
                communities. We use the same technician for every visit so your
                parent sees a familiar face.
              </p>
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
                With patient, respectful tech help.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Feeling frustrated and helpless with technology",
                    "Being rushed or talked down to by impatient tech people",
                    "Missing out on photos and videos from grandchildren",
                    "Feeling isolated because you can't figure out video calls",
                    "Worrying constantly about being scammed",
                    "Depending on busy family members for every little thing",
                    "Giving up on technology because it's too confusing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-foreground/35 text-base leading-relaxed flex gap-3"
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
                    "Confidence using your phone, tablet, or computer",
                    "Ability to video call grandchildren whenever you want",
                    "Knowledge to spot scams and stay safe online",
                    "Email and photos working the way you need them to",
                    "Someone patient who explains things at your pace",
                    "Written instructions you can refer back to",
                    "Independence and connection with loved ones",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-foreground/50 text-base leading-relaxed flex gap-3"
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
                You deserve patient, respectful tech help.
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Let&apos;s make technology work for you — at your pace, with
                clear explanations every step of the way.
              </p>
              <div className="flex gap-5 flex-wrap">
                <Link
                  href="/get-started"
                  className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
                >
                  Get an Estimate
                </Link>
                <Link
                  href="/contact"
                  className="inline-block text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60"
                >
                  Call Us to Talk
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
