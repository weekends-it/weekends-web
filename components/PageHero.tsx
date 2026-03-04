"use client";

import { ReactNode, useEffect, useState } from "react";
import HeroHeadline from "./HeroHeadline";

interface PageHeroProps {
  children: ReactNode;
  image?: string;
}

export default function PageHero({ children, image = "/images/hero.jpg" }: PageHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-surface-dark">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />

      <HeroHeadline loaded={loaded}>
        {children}
      </HeroHeadline>
    </section>
  );
}
