import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  DollarSign,
  HelpCircle,
  Package,
  Wrench,
  Network,
  Laptop,
  HardDrive,
  ShieldAlert,
  CreditCard,
  Code,
  Server,
  Printer,
  Shield,
  Phone,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Procurement & Purchasing - Weekends IT",
};

export default function ProcurementPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-14.jpg">
        Get better IT equipment at{" "}
        <span className="text-brand-green">better prices.</span>
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                Access competitive wholesale pricing on computers, networking
                equipment, and IT hardware — including brands like Ubiquiti,
                Lenovo, Dell, and many more.{" "}
                <strong>
                  Better-than-retail pricing through our supplier network — with
                  expert guidance and professional installation included.
                </strong>
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
                You&apos;re paying retail prices for IT equipment you need.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              {
                icon: DollarSign,
                title: "Paying full retail prices",
                description:
                  "You're buying computers and equipment at full retail price — more than what businesses with supplier relationships typically pay.",
              },
              {
                icon: HelpCircle,
                title: "Not sure what to buy",
                description:
                  "You're not certain which products are right for your needs, and big box store staff don't understand business IT requirements.",
              },
              {
                icon: Package,
                title: "Multiple vendors, multiple headaches",
                description:
                  "You're dealing with different suppliers, confusing warranties, and no single point of contact when something goes wrong.",
              },
              {
                icon: Wrench,
                title: "Equipment arrives — then what?",
                description:
                  "You buy equipment but still need someone to set it up, configure it, and integrate it with your existing systems.",
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
              Small businesses should have access to wholesale pricing and expert
              guidance on IT purchases — not just whatever&apos;s on the shelf
              at retail stores.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== IMAGE ===== */}
      <section className="bg-surface">
        <div className="max-w-screen-2xl mx-auto px-8 md:px-10">
          <div className="rounded-2xl border border-foreground/8 h-[40vh] min-h-[300px]" style={{ backgroundImage: "url('/images/wkends-15.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* ===== THE SOLUTION ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">The solution</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground max-w-3xl mb-4">
                Wholesale pricing + expert guidance.
              </h2>
              <p className="text-foreground/35 text-sm max-w-lg leading-relaxed">
                We leverage our partnerships with major IT manufacturers and
                distributors to get you wholesale pricing on the equipment you
                need. We help you choose the right products, handle procurement,
                and set everything up.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Tell us what you need",
                description:
                  "Share your requirements, budget, and timeline. We'll assess your actual needs and recommend the right solutions — no upselling.",
              },
              {
                step: "02",
                title: "We source at wholesale pricing",
                description:
                  "Using our wholesale distributor account, we source from major brands including Ubiquiti, Lenovo, Dell, and more — at better-than-retail pricing.",
              },
              {
                step: "03",
                title: "We deliver and set it up",
                description:
                  "Equipment arrives and we handle setup, configuration, and integration with your existing systems. You're up and running fast.",
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

      {/* ===== HOW MUCH CAN YOU SAVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Where you typically save.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Savings vary by product, brand, volume, and current supplier
                pricing. Contact us for a quote on your specific requirements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                item: "Networking Equipment",
                detail: "Routers, switches, access points, firewalls",
                note: "Business-grade gear at below-retail pricing",
              },
              {
                item: "Business Laptops & Desktops",
                detail: "Lenovo ThinkPad, Dell Latitude, HP Business",
                note: "Significant savings on multi-unit orders",
              },
              {
                item: "Servers & Storage",
                detail: "NAS, rack servers, backup appliances",
                note: "Wholesale pricing through distributor network",
              },
              {
                item: "Complete Office Refreshes",
                detail: "Full procurement, delivery & setup packages",
                note: "Best value when bundling hardware + installation",
              },
            ].map(({ item, detail, note }, i) => (
              <ScrollReveal key={item} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <h3 className="heading-serif text-[1.3rem] md:text-[1.5rem] text-foreground mb-2">
                    {item}
                  </h3>
                  <p className="text-foreground/35 text-sm mb-6">{detail}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-foreground/8">
                    <span className="text-brand-green text-sm">{note}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRAND PARTNERSHIPS ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Equipment we supply.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Sourced through our wholesale distributor network — below retail
                pricing for you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Network,
                title: "Networking & Infrastructure",
                brands:
                  "Ubiquiti (UniFi, EdgeRouter), Cisco, Netgear Business, TP-Link Business, Fortinet, Aruba",
              },
              {
                icon: Laptop,
                title: "Computers & Servers",
                brands:
                  "Lenovo (ThinkPad, ThinkCentre), Dell (Latitude, OptiPlex, PowerEdge), HP Business, Microsoft Surface, Apple Business",
              },
              {
                icon: HardDrive,
                title: "Storage & Backup",
                brands:
                  "Synology, QNAP, Western Digital, Seagate, Buffalo",
              },
              {
                icon: ShieldAlert,
                title: "Security & Surveillance",
                brands:
                  "Ubiquiti Protect, Hikvision, Axis Communications, Verkada",
              },
              {
                icon: CreditCard,
                title: "Point of Sale",
                brands: "Clover, Square, Toast, Lightspeed, Shopify POS",
              },
              {
                icon: Code,
                title: "Software & Licensing",
                brands:
                  "Microsoft 365, Windows Server, Adobe Creative Cloud, QuickBooks, antivirus & security, cloud storage, backup software",
              },
            ].map(({ icon: Icon, title, brands }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <Icon size={20} className="text-foreground/30 mb-5" />
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {brands}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE PROCURE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                What we procure.
              </h2>
              <p className="text-foreground/35 text-sm max-w-md leading-relaxed">
                Hardware, software, and everything in between — sourced at
                wholesale and set up professionally.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: Laptop,
                title: "Computers & Laptops",
                description:
                  "Business laptops, desktop workstations, all-in-one computers, mobile workstations, and thin clients.",
              },
              {
                icon: Server,
                title: "Servers & Storage",
                description:
                  "Small business servers, NAS devices, backup solutions, rack-mount equipment, and storage arrays.",
              },
              {
                icon: Network,
                title: "Networking Equipment",
                description:
                  "Business routers, managed switches, wireless access points, firewalls, and network security appliances.",
              },
              {
                icon: Printer,
                title: "Office Equipment",
                description:
                  "Multifunction printers, label printers, receipt printers, scanners, and barcode equipment.",
              },
              {
                icon: Shield,
                title: "Security Systems",
                description:
                  "Security cameras, NVR/DVR systems, access control, environmental sensors, and smart locks.",
              },
              {
                icon: Phone,
                title: "Communication",
                description:
                  "VoIP phones, conference room equipment, headsets, webcams, and video conferencing systems.",
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

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">What customers say</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground">
                Real savings, real results.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                quote:
                  "They upgraded our entire network with Ubiquiti equipment for almost half what another company quoted. Everything works flawlessly and our WiFi finally reaches the whole store.",
                name: "Maria",
                role: "Retail Store Owner",
              },
              {
                quote:
                  "Saved over $3,000 on 8 new Lenovo laptops compared to buying from a big box store. They set everything up and migrated all our data. Couldn't be happier.",
                name: "Tom",
                role: "Small Business Owner",
              },
              {
                quote:
                  "They helped us choose the right POS system for our needs and got us pricing we couldn't find anywhere else. Setup was professional and our staff was trained properly.",
                name: "Sarah",
                role: "Restaurant Manager",
              },
            ].map(({ quote, name, role }, i) => (
              <ScrollReveal key={name} delay={i * 80}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                  <p className="text-foreground/50 text-sm leading-relaxed flex-1 mb-8">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-foreground text-sm font-medium">{name}</p>
                    <p className="text-foreground/30 text-xs mt-1">{role}</p>
                  </div>
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
                With smart IT procurement.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                <p className="label-section mb-8 text-red-400/70">Instead of</p>
                <ul className="space-y-5">
                  {[
                    "Paying full retail prices at big box stores",
                    "Buying the wrong equipment for your actual needs",
                    "Wasting hours researching and comparing vendors",
                    "Dealing with incompatible equipment",
                    "Equipment sitting in boxes because setup is unclear",
                    "Paying separately for purchase, delivery, and installation",
                    "Making expensive mistakes on technology purchases",
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
                    "Better-than-retail pricing through our supplier network",
                    "Expert guidance on choosing the right products",
                    "Professional installation and setup included",
                    "Single point of contact for everything",
                    "Equipment properly configured and tested",
                    "Ongoing support from people who know your systems",
                    "Future upgrade planning and budgeting",
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

      {/* ===== FAQ ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Common questions.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                q: "How much do you charge for procurement?",
                a: "Our procurement service is free when you purchase equipment through us. We make a small margin on the wholesale pricing but still save you significantly compared to retail. Installation is quoted separately based on complexity.",
              },
              {
                q: "Can you get any brand or product?",
                a: "We can source most business-grade IT equipment. If we can't get something through our direct partnerships, we can usually source it through our distributor network.",
              },
              {
                q: "What if I find it cheaper elsewhere?",
                a: "Let us know — we'll do our best to match or beat legitimate pricing. Our quotes are based on current supplier pricing, which varies by product and volume.",
              },
              {
                q: "Do you handle warranties?",
                a: "Yes. We register all warranties and serve as your liaison with manufacturers for any warranty claims. One call to us instead of navigating manufacturer support.",
              },
              {
                q: "Can I buy equipment without installation?",
                a: "Absolutely. We're happy to procure equipment at wholesale pricing without installation services if you prefer to handle setup yourself.",
              },
              {
                q: "How long does procurement take?",
                a: "Most items ship within 1–3 business days. Custom-configured servers or specialized equipment may take 1–2 weeks. We'll give you a timeline upfront.",
              },
            ].map(({ q, a }, i) => (
              <ScrollReveal key={q} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full">
                  <h3 className="heading-serif text-[1.3rem] md:text-[1.4rem] text-foreground mb-4">
                    {q}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-surface border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Stop paying retail prices for IT equipment.
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Get wholesale pricing, expert guidance, and professional
                installation — all in one place.
              </p>
              <div className="flex gap-5 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-block bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-block text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60"
                >
                  Call to Discuss
                </Link>
              </div>
              <p className="text-foreground/25 text-xs mt-10 max-w-md leading-relaxed">
                Mention this page and receive a free network assessment (valued
                at $250) with any equipment purchase over $2,500.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
