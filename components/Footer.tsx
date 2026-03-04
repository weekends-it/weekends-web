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
              <li><a href="tel:+61404878087" className="text-white/80 no-underline text-sm hover:text-white transition-colors">+61 404 878 087</a></li>
              <li><a href="mailto:hello@wkends.com" className="text-white/80 no-underline text-sm hover:text-white transition-colors">hello@wkends.com</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/50 mb-5">Hours</p>
            <ul className="space-y-3">
              <li className="text-white/80 text-sm">Sat &amp; Sun 8am–6pm</li>
              <li className="text-white/80 text-sm">Mon–Fri 9am–5pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/20 pt-8 flex items-center justify-between text-white/40 text-xs">
          <span>&copy; 2026 Weekends IT. All rights reserved.</span>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
