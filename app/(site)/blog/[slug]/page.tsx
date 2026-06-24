import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactButton from "@/components/ContactButton";
import JsonLd from "@/components/JsonLd";
import { CHAT } from "@/lib/chat";
import { btnPrimary, btnGhost } from "@/lib/styles";
import { SITE, articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { posts, getPost, formatPostDate } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: { absolute: `${post.title} | Weekends IT` },
    description: post.description,
    alternates: { canonical: path },
    openGraph: {
      title: post.title,
      description: post.description,
      url: path,
      type: "article",
      publishedTime: post.date,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const path = `/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path,
          datePublished: post.date,
          image: `${SITE.url}${post.heroImage}`,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/blog" },
          { name: post.title, path },
        ])}
      />

      {/* ===== ARTICLE HEADER ===== */}
      <section className="bg-surface-dark border-b border-foreground/5">
        <div className="max-w-3xl mx-auto px-8 md:px-16 pt-40 md:pt-52 pb-16 md:pb-20">
          <Link
            href="/blog"
            className="inline-block text-foreground/40 text-sm mb-8 hover:text-foreground transition-colors"
          >
            ← All resources
          </Link>
          <p className="text-foreground/30 text-xs uppercase tracking-widest font-medium mb-6">
            {formatPostDate(post.date)} · {post.readingMinutes} min read
          </p>
          <h1 className="heading-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <section className="bg-surface">
        <div className="max-w-3xl mx-auto px-8 md:px-16 py-20 md:py-28">
          <div className="space-y-6">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="heading-serif text-[1.6rem] md:text-[2rem] text-foreground pt-6"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="text-foreground/60 text-base leading-relaxed flex gap-3"
                      >
                        <span className="text-brand-green shrink-0">&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="text-foreground/70 text-base md:text-lg leading-[1.8]"
                >
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* ===== POST CTA ===== */}
          <div className="mt-16 pt-10 border-t border-foreground/8">
            <p className="heading-serif text-[1.4rem] md:text-[1.6rem] text-foreground mb-6">
              Need a hand with this?
            </p>
            <div className="flex gap-5 flex-wrap">
              <Link href="/get-started" className={`inline-block ${btnPrimary}`}>
                Get an estimate
              </Link>
              <ContactButton
                className={`inline-block ${btnGhost}`}
                message={CHAT.question}
              >
                Chat with us now →
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
