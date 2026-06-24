import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { posts, formatPostDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical IT tips and guides for Brisbane homes and small businesses — from weekend POS fixes to choosing the right support model.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Resources | Weekends IT",
    url: "/blog",
    images: ["/og-image.jpg"],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <PageHero image="/images/wkends-25.jpg" alt="Weekends IT resources and guides">
        Tips &amp; guides for{" "}
        <span className="text-brand-green">real-world tech.</span>
      </PageHero>

      {/* ===== POST LIST ===== */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
          <ScrollReveal>
            <div className="mb-16 md:mb-20 max-w-2xl">
              <p className="label-section mb-6">Resources</p>
              <h2 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground">
                Practical help, no jargon.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-foreground/3 border border-foreground/8 rounded-2xl p-8 md:p-10 h-full no-underline transition-all duration-500 hover:bg-foreground/6 hover:border-foreground/15"
                >
                  <p className="text-foreground/30 text-xs uppercase tracking-widest font-medium mb-4">
                    {formatPostDate(post.date)} · {post.readingMinutes} min read
                  </p>
                  <h3 className="heading-serif text-[1.5rem] md:text-[1.8rem] text-foreground mb-3 transition-colors duration-300 group-hover:text-brand-green">
                    {post.title}
                  </h3>
                  <p className="text-foreground/35 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-block mt-6 text-foreground/30 text-sm">
                    Read more →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
