import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:rounded-full focus:bg-brand-green focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main-content">{children}</main>
      <section className="bg-surface-dark border-t border-foreground/5 py-10">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <TrustBadges />
        </div>
      </section>
      <Footer />
    </>
  );
}
