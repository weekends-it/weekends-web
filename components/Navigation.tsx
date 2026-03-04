"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

function getPageName(pathname: string): string {
  const p = pathname.replace(/\/+$/, "") || "/";
  if (p === "/") return "Home";
  if (p === "/services/home-family") return "Home & Family";
  if (p === "/services/small-business") return "Small Business";
  if (p === "/services/retail") return "Retail";
  if (p === "/services/remote-support") return "Remote Support";
  if (p.startsWith("/services")) return "Services";
  if (p === "/about") return "About";
  if (p === "/pricing") return "Pricing";
  if (p === "/contact") return "Contact";
  if (p === "/get-started") return "Get a Quote";
  return "";
}

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const pageName = getPageName(pathname);

  return (
    <header className="fixed top-6 left-0 right-0 z-500 flex justify-center px-6 pointer-events-none">
      <div
        className="relative pointer-events-auto"
        ref={wrapperRef}
        onMouseEnter={() => setMenuOpen(true)}
        onMouseLeave={() => setMenuOpen(false)}
      >
        {/* Waabi-style: dark glass outer → themed inner pill */}
        <div className="relative overflow-visible border border-foreground/10 transition-colors duration-300"
          style={{ borderRadius: '12px' }}>
          <div className="relative overflow-hidden bg-surface-dark transition-colors duration-300"
            style={{ borderRadius: '11px' }}>
            <div className="flex items-center justify-between gap-16 pl-5 pr-4 py-3.5">
              {/* Left: logo + page name */}
              <div className="flex items-center gap-5">
                <Link
                  href="/"
                  className="text-[1.35rem] font-bold text-brand-green lowercase tracking-tight leading-none no-underline shrink-0"
                >
                  weekends.
                </Link>
                {pageName && (
                  <span className="text-[1.1rem] text-foreground/40 leading-none font-normal transition-colors duration-300">
                    {pageName}
                  </span>
                )}
              </div>

              {/* Right: hamburger */}
              <button
                className="flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 shrink-0"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-[18px] h-[2px] bg-foreground rounded-full transition-transform duration-200 origin-center ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
                <span className={`block w-[18px] h-[2px] bg-foreground rounded-full transition-transform duration-200 origin-center ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
              </button>
            </div>

            {/* Scroll progress indicator line */}
            <div
              className="absolute bottom-0 left-0 h-[2px] bg-brand-green rounded-full"
              style={{ width: `${scrollProgress * 100}%`, transition: 'width 100ms linear' }}
            />
          </div>
        </div>

        {/* Dropdown */}
        <div
          className={`absolute top-full left-0 w-full pt-2 transition-all duration-200 ${menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-1"}`}
        >
          <div className="bg-surface-dark border border-foreground/10 px-5 py-5 transition-colors duration-300" style={{ borderRadius: '14px' }}>
            <nav className="flex flex-col gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="heading-serif text-[1.8rem] text-foreground no-underline py-1.5 transition-colors duration-200 hover:text-brand-green"
                >
                  {label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-foreground/8">
                <Link
                  href="/get-started"
                  className="inline-flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-brand-green-dark"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
