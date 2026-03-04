import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import {
  Building2,
  ShoppingCart,
  Home,
  Heart,
  Monitor,
  Shield,
  Wrench,
  Package,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Weekends IT",
};

const services = [
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
];

export default function ServicesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-18.jpg">
        IT support{" "}
        <span className="text-brand-green">when and how</span> you need it.
      </PageHero>

      {/* ===== NARRATIVE ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                From one-time repairs to full managed services &mdash;{" "}
                <strong>
                  flexible IT support for small businesses, retail, and home
                  users
                </strong>
                . No rigid contracts, no corporate budgets required.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                Everything we offer.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {services.map(({ icon: Icon, title, description, href }, i) => (
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

      {/* ===== DETAILED SERVICES ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20">
              <p className="label-section mb-6">In detail</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-4">
                What we handle for each client.
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              {
                title: "For Small Businesses",
                items: [
                  "Proactive monitoring and maintenance",
                  "Regular system updates and security patches",
                  "Computer and network troubleshooting",
                  "Server maintenance and setup",
                  "Email and communication systems",
                  "Help desk support for your team",
                ],
              },
              {
                title: "For Retail Shops",
                items: [
                  "Cash register and POS repair",
                  "Receipt printer troubleshooting",
                  "Barcode scanner configuration",
                  "Inventory system support",
                  "Customer WiFi setup",
                  "Payment processing issues",
                ],
              },
              {
                title: "For Home & Family",
                items: [
                  "Computer repair and optimization",
                  "Virus and malware removal",
                  "Home network setup and troubleshooting",
                  "Smart home device configuration",
                  "Printer setup and support",
                  "Software installation and training",
                ],
              },
              {
                title: "For Seniors",
                items: [
                  "Patient, jargon-free explanations",
                  "Email and video call setup",
                  "Photo management and backup",
                  "Scam identification and protection",
                  "New device setup and training",
                  "Written step-by-step instructions",
                ],
              },
              {
                title: "Security & Backup",
                items: [
                  "Backup solutions and regular testing",
                  "Disaster recovery planning",
                  "Cybersecurity setup and monitoring",
                  "Password management systems",
                  "Ransomware protection",
                  "Compliance support",
                ],
              },
              {
                title: "Procurement & IT Purchasing",
                items: [
                  "Wholesale hardware pricing",
                  "Software licensing at volume rates",
                  "Multi-vendor sourcing",
                  "Device setup and deployment",
                  "Warranty and support management",
                  "Budget planning and consulting",
                ],
              },
            ].map(({ title, items }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10">
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-6">
                    {title}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
                    {items.map((item) => (
                      <p
                        key={item}
                        className="text-foreground/40 text-sm flex gap-3"
                      >
                        <Check size={14} className="text-brand-green shrink-0 mt-0.5" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-surface-dark border-t border-foreground/5">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
                Transparent pricing that makes sense.
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                From $85/hr break-fix to $499/mo managed IT. No contracts, no
                surprises.
              </p>
              <div className="flex gap-5 flex-wrap">
                <Link
                  href="/pricing"
                  className="bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
                >
                  View Pricing
                </Link>
                <Link
                  href="/contact"
                  className="text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
