import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { btnPrimary, btnGhost } from "@/lib/styles";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center bg-surface px-8 pt-40 pb-24">
        <div className="max-w-xl text-center">
          <p className="text-brand-green font-mono text-sm tracking-widest uppercase mb-6">
            Error 404
          </p>
          <h1 className="heading-display text-[clamp(3rem,8vw,6rem)] text-foreground mb-6 leading-none">
            Page not found.
          </h1>
          <p className="text-foreground/40 text-base leading-relaxed mb-12 max-w-md mx-auto">
            That page has wandered off for the weekend. Let&apos;s get you back
            to something useful.
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            <Link href="/" className={`inline-block ${btnPrimary}`}>
              Back home
            </Link>
            <Link href="/services" className={`inline-block ${btnGhost}`}>
              Browse services →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
