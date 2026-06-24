import {
  Building2,
  ShoppingCart,
  Home,
  Heart,
  Monitor,
  Shield,
  Wrench,
  Package,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

// Canonical list of services, shared by the homepage grid and the /services index.
export const services: ServiceItem[] = [
  {
    icon: Building2,
    title: "Small Business IT",
    description:
      "Managed IT, network setup, server support & email systems.",
    href: "/services/small-business",
  },
  {
    icon: ShoppingCart,
    title: "Retail Solutions",
    description:
      "POS systems, payment terminals, inventory & customer WiFi.",
    href: "/services/retail",
  },
  {
    icon: Home,
    title: "Home & Family",
    description:
      "Computer repair, virus removal, smart home & data backup.",
    href: "/services/home-family",
  },
  {
    icon: Heart,
    title: "Seniors",
    description:
      "Patient, jargon-free tech help at your pace. Senior discounts available.",
    href: "/services/seniors",
  },
  {
    icon: Monitor,
    title: "Remote Support",
    description:
      "Screen sharing, software troubleshooting & configuration help.",
    href: "/services/remote-support",
  },
  {
    icon: Shield,
    title: "Security & Backup",
    description:
      "Backup solutions, disaster recovery & cybersecurity setup.",
    href: "/services/security-backup",
  },
  {
    icon: Wrench,
    title: "Break / Fix",
    description:
      "One-time repairs with no contracts, no fuss, fast help.",
    href: "/services/break-fix",
  },
  {
    icon: Package,
    title: "Procurement & IT Purchasing",
    description:
      "Wholesale pricing on hardware & software — 20–40% below retail.",
    href: "/services/procurement",
  },
];
