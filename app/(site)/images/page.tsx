import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "Image Carousel Variations - Weekends IT",
};

interface VariationProps {
  title: string;
  slots?: number;
  direction?: "left" | "right";
  spread?: number;
  frontScale?: number;
  backScale?: number;
  landscape?: boolean;
  interval?: number;
  height: string;
}

const VARIATIONS: VariationProps[] = [
  {
    title: "2 Slots · Portrait · Left",
    slots: 2,
    direction: "left",
    height: "h-[300px] md:h-[450px] lg:h-[524px]",
  },
  {
    title: "2 Slots · Portrait · Right",
    slots: 2,
    direction: "right",
    height: "h-[300px] md:h-[450px] lg:h-[524px]",
  },
  {
    title: "4 Slots · Portrait · Left",
    slots: 4,
    direction: "left",
    height: "h-[300px] md:h-[500px] lg:h-[700px]",
  },
  {
    title: "4 Slots · Portrait · Right",
    slots: 4,
    direction: "right",
    height: "h-[300px] md:h-[500px] lg:h-[700px]",
  },
  {
    title: "2 Slots · Landscape · Left",
    slots: 2,
    direction: "left",
    landscape: true,
    height: "h-[250px] md:h-[350px] lg:h-[450px]",
  },
  {
    title: "4 Slots · Landscape · Left",
    slots: 4,
    direction: "left",
    landscape: true,
    height: "h-[250px] md:h-[350px] lg:h-[450px]",
  },
  {
    title: "3 Slots · Portrait · Left",
    slots: 3,
    direction: "left",
    spread: 150,
    height: "h-[300px] md:h-[450px] lg:h-[600px]",
  },
  {
    title: "Custom Scales (subtle)",
    slots: 2,
    direction: "left",
    frontScale: 1.2,
    backScale: 0.8,
    height: "h-[300px] md:h-[450px] lg:h-[524px]",
  },
  {
    title: "Custom Scales (dramatic)",
    slots: 2,
    direction: "left",
    frontScale: 2.0,
    backScale: 0.5,
    height: "h-[300px] md:h-[450px] lg:h-[524px]",
  },
  {
    title: "Fast Interval (3s)",
    slots: 2,
    direction: "left",
    interval: 3000,
    height: "h-[300px] md:h-[450px] lg:h-[524px]",
  },
];

function PropBadge({ label, value }: { label: string; value: string | number }) {
  return (
    <span className="inline-flex items-center gap-1 bg-foreground/5 border border-foreground/8 rounded-md px-2 py-0.5 text-xs font-mono">
      <span className="text-foreground/40">{label}:</span>
      <span className="text-foreground/70">{value}</span>
    </span>
  );
}

export default function ImagesPage() {
  return (
    <div className="bg-surface">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-28 md:py-40 space-y-24">
        <h1 className="heading-serif text-[clamp(2.5rem,4.5vw,4.5rem)] text-foreground">
          Carousel Variations
        </h1>

        {VARIATIONS.map((v) => {
          const slots = v.slots ?? 2;
          const direction = v.direction ?? "left";
          const spread = v.spread ?? 200;
          const frontScale = v.frontScale ?? 1.5;
          const backScale = v.backScale ?? 0.65;
          const interval = v.interval ?? 6000;
          const landscape = v.landscape ?? false;

          return (
            <section key={v.title}>
              <h2 className="heading-serif text-2xl text-foreground mb-3">
                {v.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <PropBadge label="slots" value={slots} />
                <PropBadge label="direction" value={direction} />
                <PropBadge label="spread" value={spread} />
                <PropBadge label="frontScale" value={frontScale} />
                <PropBadge label="backScale" value={backScale} />
                <PropBadge label="interval" value={`${interval / 1000}s`} />
                <PropBadge label="landscape" value={landscape ? "true" : "false"} />
                <PropBadge label="height" value={v.height} />
              </div>
              <ImageCarousel
                slots={slots}
                direction={direction}
                spread={spread}
                frontScale={frontScale}
                backScale={backScale}
                interval={interval}
                landscape={landscape}
                height={v.height}
              />
            </section>
          );
        })}
      </div>
    </div>
  );
}
