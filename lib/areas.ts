// Local service-area landing pages. Each entry powers /it-support/[slug] and
// targets "IT support <region>" searches with unique, non-duplicate copy.

export interface Area {
  slug: string;
  name: string; // e.g. "Sunshine Coast"
  metaTitle: string;
  metaDescription: string;
  headline: string; // shown after "Weekend IT support on the / in the"
  connector: string; // "in" | "on the" — grammar before the name in copy
  intro: string;
  localNote: string;
  heroImage: string;
}

export const areas: Area[] = [
  {
    slug: "brisbane",
    name: "Brisbane",
    connector: "in",
    metaTitle: "IT Support Brisbane — Weekend On-Site & Remote | Weekends IT",
    metaDescription:
      "After-hours and weekend IT support across Brisbane for homes and small businesses. On-site or remote, weeknight evenings and all weekend — no waiting until Monday.",
    headline: "Brisbane",
    intro:
      "Weekends IT is based right here in Brisbane — so when something breaks on a Saturday, you're not stuck waiting until Monday. We cover homes and small businesses across the greater Brisbane area, on-site or remote, weeknight evenings and right through the weekend.",
    localNote:
      "From the CBD to the bayside suburbs near our Banyo base, and out across the northern and southern suburbs, we keep Brisbane locals connected — POS systems, home networks, computer repairs, and ongoing managed IT.",
    heroImage: "/images/area-brisbane.jpg",
  },
  {
    slug: "sunshine-coast",
    name: "Sunshine Coast",
    connector: "on the",
    metaTitle: "IT Support Sunshine Coast — Weekend Help | Weekends IT",
    metaDescription:
      "Weekend IT support on the Sunshine Coast — Caloundra to Noosa. On-site help for homes, holiday lets and small businesses when most IT shops are closed.",
    headline: "Sunshine Coast",
    intro:
      "Reliable weekend IT support across the Sunshine Coast — from Caloundra and Maroochydore up to Noosa. Whether you run a café in Mooloolaba or you're a retiree who just wants the iPad to behave, we come to you evenings and weekends, when most IT shops are shut.",
    localNote:
      "We regularly travel the Bruce Highway to support Sunshine Coast homes, holiday lets and small businesses — retail and hospitality tech, home networks, patient senior tech help, and group sessions for local retirement villages.",
    heroImage: "/images/area-sunshine-coast.jpg",
  },
  {
    slug: "gold-coast",
    name: "Gold Coast",
    connector: "on the",
    metaTitle: "IT Support Gold Coast — Weekend On-Site Help | Weekends IT",
    metaDescription:
      "Weekend IT support on the Gold Coast — Southport, Surfers Paradise, Burleigh and the hinterland. POS, networks and repairs when your business is busiest.",
    headline: "Gold Coast",
    intro:
      "Weekend IT support across the Gold Coast — Southport, Surfers Paradise, Burleigh and the hinterland. Tourism and retail never sleep, and neither does your tech's habit of failing at the worst possible time. We're available exactly when your business is busiest.",
    localNote:
      "From beachfront retail and hospitality venues to home offices up in the hinterland, we handle POS and payment systems, networks, repairs and ongoing managed IT — weeknight evenings and all weekend.",
    heroImage: "/images/area-gold-coast.jpg",
  },
  {
    slug: "gympie",
    name: "Gympie",
    connector: "in",
    metaTitle: "IT Support Gympie — Weekend & Regional Help | Weekends IT",
    metaDescription:
      "Weekend IT support in Gympie and the surrounding region. On-site visits for homes and small businesses, plus remote support — without the drive to the coast.",
    headline: "Gympie",
    intro:
      "Regional towns often get the short end of the stick on IT support — so we travel. Weekends IT covers Gympie and the surrounding region for homes and small businesses that would otherwise have to drive to the coast just to get help.",
    localNote:
      "On-site visits weeknight evenings and weekends for computer repairs, networks, POS and small-business systems, plus remote support any time. If you're north of the Sunshine Coast, we've got you covered.",
    heroImage: "/images/area-gympie.jpg",
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}
