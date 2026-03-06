import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-16 pb-16">
        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-5">Services</p>
            <ul className="space-y-3">
              <li><Link href="/services/small-business" className="text-white/80 no-underline text-sm hover:text-white transition-colors">Small Business</Link></li>
              <li><Link href="/services/retail" className="text-white/80 no-underline text-sm hover:text-white transition-colors">Retail</Link></li>
              <li><Link href="/services/home-family" className="text-white/80 no-underline text-sm hover:text-white transition-colors">Home &amp; Family</Link></li>
              <li><Link href="/services/remote-support" className="text-white/80 no-underline text-sm hover:text-white transition-colors">Remote Support</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-5">Company</p>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/80 no-underline text-sm hover:text-white transition-colors">About</Link></li>
              <li><Link href="/pricing" className="text-white/80 no-underline text-sm hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="text-white/80 no-underline text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-5">Contact</p>
            <ul className="space-y-3">
              <li><a href="mailto:hello@wkends.com" className="text-white/80 no-underline text-sm hover:text-white transition-colors">hello@wkends.com</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-5">Hours</p>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm">Fri 6pm–2am</li>
              <li className="text-white/80 text-sm">Sat 4am–2am</li>
              <li className="text-white/80 text-sm">Sun 4am–2am</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/20 pt-8 flex items-center justify-between text-white/40 text-xs">
          <span>&copy; 2026 Weekends IT. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/weekendsit/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Weekends IT on Instagram"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/Weekends-It/61585016303512/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Weekends IT on Facebook"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
