"use client";

import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import HeroHeadline from "./HeroHeadline";

interface PageHeroProps {
  children: ReactNode;
  image?: string;
  alt?: string;
}

export default function PageHero({ children, image = "/images/hero.jpg", alt = "" }: PageHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-surface-dark">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <HeroHeadline loaded={loaded}>
        {children}
      </HeroHeadline>
    </section>
  );
}
