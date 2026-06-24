import Image from "next/image";

// A full-width decorative photo band with rounded corners. Replaces the repeated
// `<div className="rounded-2xl border ..."><Image fill ... /></div>` pattern.
export default function ImageBand({
  src,
  alt,
  className = "h-[40vh] min-h-[300px]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-foreground/8 relative overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover"
      />
    </div>
  );
}
