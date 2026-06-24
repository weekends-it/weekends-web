import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

// The recurring bottom-of-page call-to-action band: big display heading, a short
// blurb, and one or more buttons (passed as children). `className` sets the
// section background (defaults to the dark variant most pages use).
export default function CtaSection({
  heading,
  body,
  children,
  className = "bg-surface-dark border-t border-foreground/5",
}: {
  heading: ReactNode;
  body: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h2 className="heading-display text-[clamp(3rem,6vw,6.5rem)] text-foreground mb-10 max-w-3xl">
              {heading}
            </h2>
            <p className="text-foreground/35 text-base max-w-lg mb-14 leading-relaxed">
              {body}
            </p>
            <div className="flex gap-5 flex-wrap">{children}</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
