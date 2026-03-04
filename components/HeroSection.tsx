"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import HeroHeadline from "./HeroHeadline";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [loaded, setLoaded] = useState(false);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const measure = useCallback(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setSectionTop(rect.top + window.scrollY);
      setSectionHeight(rect.height);
    }
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", measure);
    };
  }, [handleScroll, handleMouseMove, measure]);

  const vh = typeof window !== "undefined" ? window.innerHeight : 900;

  // How far we've scrolled through the hero section (0 → 1)
  const localScroll = Math.max(0, scrollY - sectionTop);
  const extraScroll = sectionHeight - vh;
  const progress = extraScroll > 0 ? Math.min(localScroll / extraScroll, 1) : 0;

  // Mouse-driven depth offsets
  const mx = (mouse.x - 0.5) * 2;
  const my = (mouse.y - 0.5) * 2;

  // Subtext reveal: starts at 50% progress (headline ~halfway up), fully visible at 80%
  const subReveal = Math.min(Math.max((progress - 0.5) / 0.3, 0), 1);

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface-dark"
      style={{ height: "250vh" }}
    >
      {/* Sticky viewport — stays pinned while scrolling through the section */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-end">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/images/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--foreground-val) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            transform: `translate(${mx * -8}px, ${my * -8}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Floating geometric shapes — mouse-reactive */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="hero-shape absolute -top-20 -right-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-brand-green/10"
            style={{
              transform: `translate(${mx * -30}px, ${my * -20}px)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.3s",
            }}
          />
          <div
            className="hero-shape absolute top-[30%] left-[8%] w-3 h-3 rounded-full bg-brand-green/30"
            style={{
              transform: `translate(${mx * 20}px, ${my * 15}px)`,
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.5s",
            }}
          />
          <div
            className="hero-shape absolute bottom-[20%] left-[15%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full border border-foreground/5"
            style={{
              transform: `translate(${mx * 15}px, ${my * 10}px)`,
              transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.7s",
            }}
          />
          <div
            className="hero-shape absolute top-[45%] right-[12%] w-px h-[120px] md:h-[200px] bg-linear-to-b from-brand-green/20 to-transparent origin-top"
            style={{
              transform: `rotate(25deg) translate(${mx * -12}px, ${my * 8}px)`,
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.6s",
            }}
          />
          <div
            className="hero-shape absolute top-[20%] right-[30%] w-2.5 h-2.5 bg-brand-green/15 rotate-45"
            style={{
              transform: `rotate(45deg) translate(${mx * 25}px, ${my * 18}px)`,
              transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.8s",
            }}
          />
          <div
            className="hero-shape absolute top-[15%] left-[25%] w-[80px] md:w-[140px] h-px bg-linear-to-r from-transparent via-foreground/8 to-transparent"
            style={{
              transform: `translate(${mx * -18}px, ${my * -10}px)`,
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              animationDelay: "0.9s",
            }}
          />
        </div>

        <HeroHeadline localScroll={localScroll} loaded={loaded}>
          Your IT problems don&apos;t wait for{" "}
          <span className="text-brand-green">Monday.</span>
        </HeroHeadline>

        {/* Subtext — fixed at bottom, revealed as headline scrolls away */}
        <div
          className="absolute bottom-20 md:bottom-32 left-0 right-0 z-10 max-w-7xl mx-auto w-full px-8 md:px-16"
          style={{
            opacity: subReveal,
            transform: `translateY(${(1 - subReveal) * 30}px)`,
          }}
        >
          <p className="text-white/80 text-[clamp(1.25rem,2.5vw,2rem)] font-light leading-relaxed max-w-xl">
            Weekend IT support for small businesses and families.
          </p>

          <div className="flex gap-5 items-center flex-wrap mt-10">
            <Link
              href="/get-started"
              className="group relative bg-brand-green text-white px-8 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-500 hover:bg-brand-green-dark hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(39,170,39,0.25)] overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-brand-green-dark scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
            <a
              href="#services"
              className="text-white/50 font-medium text-sm border-b border-white/20 pb-0.5 transition-all duration-500 hover:text-white hover:border-white/60"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll indicator — fades out as subtext reveals */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{
            transitionDelay: "1.4s",
            opacity: loaded ? Math.max(1 - subReveal * 2, 0) : 0,
          }}
        >
          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-foreground/25 font-medium">
            Scroll
          </span>
          <div className="w-px h-8 bg-foreground/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-brand-green animate-scroll-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
