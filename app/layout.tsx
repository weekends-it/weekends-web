import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import IntercomProvider from "@/components/IntercomProvider";
import JsonLd from "@/components/JsonLd";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wkends.com"),
  title: {
    default: "Weekends IT — Weekend IT Support Brisbane",
    template: "%s | Weekends IT",
  },
  description:
    "After-hours and weekend IT support for Brisbane homes and small businesses — weeknight evenings and all weekend, no waiting until Monday. Gympie to the Gold Coast.",
  openGraph: {
    siteName: "Weekends IT",
    locale: "en_AU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Weekends IT — Weekend IT Support Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SSMR4WTTSL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SSMR4WTTSL');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||p)}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} bg-surface-dark`}>
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        {children}
        <IntercomProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
