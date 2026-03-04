"use client";

import { ReactNode } from "react";

interface HeroHeadlineProps {
  children: ReactNode;
  localScroll?: number;
  loaded: boolean;
}

export default function HeroHeadline({ children, localScroll = 0, loaded }: HeroHeadlineProps) {
  return (
    <div
      className="absolute bottom-20 md:bottom-32 left-0 right-0 z-10 max-w-7xl mx-auto w-full px-8 md:px-16"
      style={{
        transform: `translateY(${localScroll * -0.5}px)`,
      }}
    >
      <h1
        className={`heading-display text-[clamp(3rem,7vw,7.5rem)] text-white transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionDelay: "0.3s" }}
      >
        {children}
      </h1>
    </div>
  );
}
