import {
  ShieldCheck,
  UserCheck,
  BadgeCheck,
  Award,
  MapPin,
  type LucideIcon,
} from "lucide-react";

const badges: { icon: LucideIcon; label: string }[] = [
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: UserCheck, label: "Police checked" },
  { icon: BadgeCheck, label: "Blue Card registered" },
  { icon: Award, label: "Satisfaction guaranteed" },
  { icon: MapPin, label: "Locally owned, Brisbane" },
];

// Row of trust badges. Pass className to control the wrapping section's spacing.
export default function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex flex-wrap justify-center gap-x-8 gap-y-4 list-none ${className}`}
    >
      {badges.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-2.5 text-foreground/60 text-sm font-medium"
        >
          <Icon size={18} className="text-brand-green shrink-0" aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  );
}
