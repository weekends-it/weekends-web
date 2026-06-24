import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import ContactButton from "@/components/ContactButton";
import JsonLd from "@/components/JsonLd";
import { CHAT } from "@/lib/chat";
import { SITE, breadcrumbJsonLd } from "@/lib/seo";
import { areas, getArea } from "@/lib/areas";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  const path = `/it-support/${area.slug}`;
  return {
    title: { absolute: area.metaTitle },
    description: area.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: path,
      images: ["/og-image.jpg"],
    },
  };
}

const SERVICES = [
  { title: "Break / Fix Repairs", href: "/services/break-fix" },
  { title: "Small Business IT", href: "/services/small-business" },
  { title: "Managed IT", href: "/services/managed-it" },
  { title: "Home & Family", href: "/services/home-family" },
  { title: "Tech Help for Seniors", href: "/services/seniors" },
  { title: "Remote Support", href: "/services/remote-support" },
];

export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const path = `/it-support/${area.slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `IT Support in ${area.name}`,
    serviceType: "IT Support",
    description: area.metaDescription,
    url: `${SITE.url}${path}`,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: { "@type": "AdministrativeArea", name: area.name },
  };

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: `IT Support ${area.name}`, path },
        ])}
      />

      {/* ===== HERO ===== */}
      <PageHero
        image={area.heroImage}
        alt={`Weekend IT support ${area.connector} ${area.name}`}
      >
        Weekend IT support{" "}
        <span className="text-brand-green">
          {area.connector} {area.name}.
        </span>
      </PageHero>

      {/* ===== INTRO ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="label-section mb-6">
                IT support {area.connector} {area.name}
              </p>
              <p className="text-foreground text-[clamp(1.1rem,1.8vw,1.35rem)] leading-[1.8]">
                {area.intro}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHAT WE HELP WITH ===== */}
      <section className="bg-surface-dark">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20 max-w-2xl">
              <p className="label-section mb-6">What we help with</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground mb-6">
                Weekend tech support for {area.name} homes &amp; businesses.
              </h2>
              <p className="text-foreground/35 text-sm leading-relaxed">
                {area.localNote}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map(({ title, href }, i) => (
              <ScrollReveal key={href} delay={i * 60}>
                <Link
                  href={href}
                  className="group block bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full no-underline transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15"
                >
                  <h3 className="heading-serif text-[1.3rem] md:text-[1.5rem] text-foreground mb-2 transition-colors duration-300 group-hover:text-brand-green">
                    {title}
                  </h3>
                  <span className="text-foreground/30 text-sm">
                    Available {area.connector} {area.name}
                  </span>
                </Link>
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
                Need a hand this weekend?
              </h2>
              <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
                Tell us what&apos;s going on {area.connector} {area.name} and
                we&apos;ll sort it — on-site or remote, Friday night through
                Sunday.
              </p>
              <div className="flex gap-5 flex-wrap">
                <ContactButton
                  className="bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)]"
                  message={CHAT.getInTouch}
                >
                  Chat with us now
                </ContactButton>
                <Link
                  href="/get-started"
                  className="inline-block text-foreground/50 font-medium text-sm border-b border-foreground/20 pb-0.5 transition-all duration-500 hover:text-foreground hover:border-foreground/60"
                >
                  Get an estimate
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
