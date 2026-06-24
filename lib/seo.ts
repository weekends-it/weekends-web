// Central SEO constants + JSON-LD structured-data builders for Weekends IT.
// Structured data helps Google understand the business and can unlock rich
// results (local pack, sitelinks, breadcrumbs in search).

export const SITE = {
  name: "Weekends IT",
  url: "https://wkends.com",
  description:
    "Weekend IT support for Brisbane homes and small businesses. Available Friday night through Sunday — no waiting until Monday. Covering Gympie to the Gold Coast.",
  email: "hello@wkends.com",
  logo: "https://wkends.com/images/wkends_logo.png",
  ogImage: "https://wkends.com/og-image.jpg",
  sameAs: [
    "https://www.facebook.com/people/Weekends-It/61585016303512/",
  ],
  // Service-area business — no public street address.
  areaServed: ["Brisbane", "Gold Coast", "Sunshine Coast", "Gympie", "Queensland"],
} as const;

// LocalBusiness (ProfessionalService) — the primary entity for local SEO.
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  image: SITE.ogImage,
  logo: SITE.logo,
  priceRange: "$$",
  currenciesAccepted: "AUD",
  areaServed: SITE.areaServed.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  sameAs: SITE.sameAs,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "18:00",
      closes: "02:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "04:00",
      closes: "02:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "04:00",
      closes: "02:00",
    },
  ],
};

// WebSite entity — ties pages together under one site for Google.
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#business` },
};

// Per-service-page Service schema.
export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE.url}${path}`,
    provider: { "@id": `${SITE.url}/#business` },
    areaServed: SITE.areaServed.map((areaName) => ({
      "@type": "AdministrativeArea",
      name: areaName,
    })),
  };
}

// BreadcrumbList — gives Google the page hierarchy (shows breadcrumbs in results).
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
