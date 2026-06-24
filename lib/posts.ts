// Blog / resources content. Add a new entry here to publish a post — the
// /blog index and /blog/[slug] pages, sitemap, and Article schema all read
// from this list. Body is a simple block model (no MDX dependency).

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export interface Post {
  slug: string;
  title: string;
  description: string; // meta description (~150 chars)
  date: string; // ISO yyyy-mm-dd
  readingMinutes: number;
  excerpt: string; // shown on the index
  heroImage: string;
  body: PostBlock[];
}

export const posts: Post[] = [
  {
    slug: "pos-system-down-on-a-weekend",
    title: "What to do when your POS system goes down on a weekend",
    description:
      "A calm, step-by-step checklist for Brisbane retailers when the point-of-sale fails mid-trade — and how to get back to taking payments fast.",
    date: "2026-06-20",
    readingMinutes: 4,
    excerpt:
      "Your busiest trading hours are exactly when a POS failure hurts most. Here's a practical checklist to keep taking payments and get back online fast.",
    heroImage: "/images/wkends-13.jpg",
    body: [
      {
        type: "p",
        text: "It always happens at the worst time — a queue at the counter, a full café, and the point-of-sale freezes. Before you panic, work through these steps. Most weekend POS outages are recoverable in minutes once you know where to look.",
      },
      { type: "h2", text: "1. Keep taking payments first" },
      {
        type: "p",
        text: "Your priority is not losing the sale. If your card terminal still works independently of the POS, switch it to standalone mode and key amounts in manually. Keep a paper pad handy to record sales you'll reconcile later. A backup payment method (a phone-based tap-to-pay app) is worth setting up before you ever need it.",
      },
      { type: "h2", text: "2. Rule out the quick fixes" },
      {
        type: "ul",
        items: [
          "Power-cycle the POS terminal and the network router — wait 30 seconds before turning them back on.",
          "Check the internet: if the WiFi is down, cloud POS systems will stall. Try a mobile hotspot as a stopgap.",
          "Confirm the payment provider isn't having an outage (their status page will say).",
          "Make sure it isn't simply a software update mid-install — let it finish rather than forcing a restart.",
        ],
      },
      { type: "h2", text: "3. Know when to call for help" },
      {
        type: "p",
        text: "If a power cycle and a network check don't bring it back within ten minutes, stop guessing — every minute of downtime during trade is lost revenue. That's exactly the kind of weekend emergency Weekends IT exists for: we can often diagnose POS and payment-terminal issues remotely and have you trading again without waiting for Monday.",
      },
      { type: "h2", text: "Prevent the next one" },
      {
        type: "p",
        text: "Most repeat outages trace back to flaky networking, an ageing terminal, or no failover plan. A short health-check on your setup — plus a documented backup payment method — turns a trading-day disaster into a two-minute hiccup.",
      },
    ],
  },
  {
    slug: "break-fix-vs-managed-it",
    title: "Break/fix vs managed IT: which is right for your small business?",
    description:
      "Pay-as-you-go repairs or a monthly managed plan? A plain-English comparison to help Brisbane small businesses pick the right IT support model.",
    date: "2026-06-12",
    readingMinutes: 5,
    excerpt:
      "Pay-as-you-go or a monthly plan? Here's how to tell which IT support model actually fits your business — without overpaying for either.",
    heroImage: "/images/wkends-2.jpg",
    body: [
      {
        type: "p",
        text: "Every small business needs IT support eventually. The question is whether you pay for it only when something breaks, or pay a predictable monthly fee to stop things breaking in the first place. Both are valid — it depends on your size, your risk, and how much downtime costs you.",
      },
      { type: "h2", text: "Break/fix: pay only when you need it" },
      {
        type: "p",
        text: "Break/fix is exactly what it sounds like: something goes wrong, you call us, you pay for the time it takes to fix it. No contract, no monthly commitment. It suits businesses with simple setups, a handful of devices, and the tolerance to wait a little when something fails.",
      },
      { type: "h2", text: "Managed IT: predictable cover that prevents problems" },
      {
        type: "p",
        text: "A managed plan is a flat monthly fee for proactive monitoring, maintenance, updates, and priority support. Instead of reacting to failures, we catch issues before they bite — and you get faster response when something does go wrong. It suits businesses where downtime genuinely costs money.",
      },
      { type: "h2", text: "How to choose" },
      {
        type: "ul",
        items: [
          "Fewer than ~5 devices and rare issues? Break/fix is usually the cheaper fit.",
          "Downtime costs you customers or revenue? Managed IT pays for itself in prevented outages.",
          "Want predictable budgeting and no surprise bills? Go managed.",
          "Not sure? Start with break/fix and switch to managed once the call-outs add up — we make the move easy.",
        ],
      },
      {
        type: "p",
        text: "There's no wrong answer, only the wrong fit. If you're weighing it up, tell us how your business runs and we'll recommend the option that actually saves you money — not the one that bills the most.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// Deterministic date formatter (e.g. "20 June 2026") — avoids passing Date objects around.
export function formatPostDate(iso: string): string {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}
