"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface ImageCarouselProps {
  /** Time between transitions in ms. Default: 6000 */
  interval?: number;
  className?: string;
  /** Number of visible cards at once. Default: 2 */
  slots?: number;
  /** Slide direction. "left" = new cards enter from right. Default: "left" */
  direction?: "left" | "right";
  /** Manual spread (translateX % of card width). Ignored when autoSpread is true. Default: 200 */
  spread?: number;
  /** Scale of the front card. At this scale, card fills container height. Default: 1.5 */
  frontScale?: number;
  /** Scale of the back-most card. Default: 0.65 */
  backScale?: number;
  /** Container height. Default: "h-[380px] md:h-[524px]" */
  height?: string;
  /** Use landscape aspect ratio for cards. Default: false (portrait) */
  landscape?: boolean;
  /** Auto-calculate spread so back and front cards touch the container edges. Default: false */
  autoSpread?: boolean;
}

const IMAGES = [
  "/images/carousel-01.jpg",
  "/images/carousel-02.jpg",
  "/images/carousel-03.jpg",
  "/images/carousel-04.jpg",
  "/images/carousel-05.jpg",
  "/images/carousel-06.jpg",
  "/images/carousel-07.jpg",
  "/images/carousel-08.jpg",
  "/images/carousel-09.jpg",
  "/images/carousel-10.jpg",
];

const DURATION = 1000;
const EASING = "cubic-bezier(0.16, 1, 0.3, 1)";
const BORDER_RADIUS = 12;
const ASPECT_PORTRAIT = 320 / 427;
const ASPECT_LANDSCAPE = 427 / 320;
const MOBILE_BREAKPOINT = 768;
const ENTER_OVERSHOOT = 120; // tx% beyond front card for enter animation
const EXIT_SCALE = 0.6;      // back card scale multiplier for exit

type Role = number | "enter" | "exit";

interface Card {
  imageIndex: number;
  role: Role;
  key: number;
}

interface Pos {
  tx: number;
  scale: number;
  zIndex: number;
}

function computePositions(
  slots: number,
  direction: "left" | "right",
  spread: number,
  backScale: number,
  frontScale: number,
): { slots: Pos[]; enter: Pos; exit: Pos } {
  const frontTx = direction === "left" ? spread : -spread;
  const enterTx = direction === "left" ? frontTx + ENTER_OVERSHOOT : frontTx - ENTER_OVERSHOOT;

  const slotPos = Array.from({ length: slots }, (_, i) => {
    const t = slots === 1 ? 1 : i / (slots - 1);
    return {
      tx: frontTx * t,
      scale: backScale + (frontScale - backScale) * t,
      zIndex: i + 1,
    };
  });

  return {
    slots: slotPos,
    enter: { tx: enterTx, scale: frontScale, zIndex: slots + 1 },
    exit:  { tx: 0,       scale: backScale * EXIT_SCALE, zIndex: 0 },
  };
}

export default function ImageCarousel({
  interval = 6000,
  className = "",
  slots = 2,
  direction = "left",
  spread = 200,
  frontScale = 1.5,
  backScale = 0.65,
  height,
  landscape = false,
  autoSpread = false,
}: ImageCarouselProps) {
  const aspect = landscape ? ASPECT_LANDSCAPE : ASPECT_PORTRAIT;
  const baseHeight = 100 / frontScale;

  const [cards, setCards] = useState<Card[]>(() =>
    Array.from({ length: slots }, (_, i) => ({
      imageIndex: i % IMAGES.length,
      role: i as Role,
      key: i,
    }))
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  // Initialise directly from matchMedia to avoid a flash on the first render
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Refs instead of state — these are only read inside the interval callback,
  // never used in rendering, so they must not be effect dependencies.
  // Using state here caused the timer to restart on every single tick.
  const nextKeyRef      = useRef(slots);
  const nextImageIdxRef = useRef(slots % IMAGES.length);

  const effectiveSlots = dims.w > 0 && dims.w < MOBILE_BREAKPOINT
    ? landscape ? Math.min(slots, 1) : Math.min(slots, 2)
    : slots;

  const slotFactor = effectiveSlots <= 2 ? 0.4 : effectiveSlots <= 3 ? 0.65 : 1;

  // Shared base card width (px) consumed by both spread and layout memos
  const cardBaseWidth = useMemo(
    () => dims.h > 0 ? (dims.h / frontScale) * aspect : 0,
    [dims.h, frontScale, aspect]
  );

  const effectiveSpread = useMemo(() => {
    if (cardBaseWidth === 0 || dims.w === 0) return 60;
    if (autoSpread) {
      return Math.max(30, (dims.w / cardBaseWidth - (frontScale + backScale) / 2) * 100);
    }
    const maxSpread = (dims.w / cardBaseWidth - frontScale) * 100 - 20;
    return Math.max(30, Math.min(spread, maxSpread) * slotFactor);
  }, [autoSpread, dims.w, cardBaseWidth, spread, frontScale, backScale, slotFactor]);

  // Tight bounding box of the visible arrangement — wrapper is sized to this
  // and flex-centred by the parent container
  const { arrangementWidth, leftOffset } = useMemo(() => {
    if (cardBaseWidth === 0) return { arrangementWidth: undefined as number | undefined, leftOffset: 0 };
    const frontTxRaw = direction === "left" ? effectiveSpread : -effectiveSpread;

    // Visual edge formula: cbw * (0.5 ± scale/2 + tx/100)
    const backLeft   = cardBaseWidth * ((1 - backScale)  / 2);
    const frontLeft  = cardBaseWidth * ((1 - frontScale) / 2 + frontTxRaw / 100);
    const backRight  = cardBaseWidth * ((1 + backScale)  / 2);
    const frontRight = cardBaseWidth * ((1 + frontScale) / 2 + frontTxRaw / 100);

    const minLeft  = Math.min(backLeft, frontLeft);
    const maxRight = Math.max(backRight, frontRight);

    return { arrangementWidth: maxRight - minLeft, leftOffset: -minLeft };
  }, [cardBaseWidth, frontScale, backScale, direction, effectiveSpread]);

  const positions = useMemo(
    () => computePositions(effectiveSlots, direction, effectiveSpread, backScale, frontScale),
    [effectiveSlots, direction, effectiveSpread, backScale, frontScale]
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(([entry]) => {
      setDims({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = setInterval(() => {
      // Capture at tick time so the rAF chain uses the same slot count
      // even if a resize fires between now and when the rAF executes
      const currentSlots = effectiveSlots;
      const imageIdx     = nextImageIdxRef.current;
      const key          = nextKeyRef.current;

      setCards((prev) => [
        ...prev.map((c) => {
          if (c.role === "enter" || c.role === "exit") return c;
          const slot = c.role as number;
          return slot === 0
            ? { ...c, role: "exit" as const }
            : { ...c, role: (slot - 1) as Role };
        }),
        { imageIndex: imageIdx, role: "enter" as const, key },
      ]);

      nextImageIdxRef.current = (imageIdx + 1) % IMAGES.length;
      nextKeyRef.current      = key + 1;

      // Two rAFs ensure the "enter" card is painted at its off-screen position
      // before the transition to its final slot position is triggered
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.role === "enter" ? { ...c, role: (currentSlots - 1) as Role } : c
            )
          );
        });
      });

      setTimeout(() => {
        setCards((prev) => prev.filter((c) => c.role !== "exit"));
      }, DURATION + 100);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, reducedMotion, effectiveSlots]);

  const transition = reducedMotion ? "none" : `transform ${DURATION}ms ${EASING}`;

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={containerRef}
        className={`relative flex w-full justify-center items-center overflow-hidden ${height ?? "h-[380px] md:h-[524px]"}`}
      >
        <div
          className="relative flex items-center h-full"
          style={{ width: arrangementWidth ?? "100%" }}
        >
          {cards.map((card) => {
            const pos =
              card.role === "enter"
                ? positions.enter
                : card.role === "exit"
                  ? positions.exit
                  : positions.slots[card.role as number];

            if (!pos) return null;

            return (
              <div
                key={card.key}
                className="absolute bg-surface-light"
                style={{
                  left: leftOffset,
                  height: `${baseHeight}%`,
                  aspectRatio: `${aspect}`,
                  zIndex: pos.zIndex,
                  clipPath: `inset(0 round ${BORDER_RADIUS}px)`,
                  transform: `translateX(${pos.tx}%) scale(${pos.scale})`,
                  transition,
                  backgroundImage: `url(${IMAGES[card.imageIndex]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
