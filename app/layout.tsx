import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { MotionManager } from "@/components/motion/MotionManager";
import { Analytics, AnalyticsNoScript } from "@/components/site/Analytics";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { JsonLd } from "@/components/shared/JsonLd";
import { isProduction } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Xelerate | Oracle NetSuite Partner for Egypt, Saudi Arabia & the Middle East",
    template: "%s | Xelerate",
  },
  description:
    "Xelerate is a business transformation partner that implements, integrates, optimizes and supports Oracle NetSuite for growing companies across Egypt, Saudi Arabia and the Middle East.",
  applicationName: site.legalName,
  authors: [{ name: site.legalName, url: site.url }],
  openGraph: { siteName: site.legalName, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image" },
  // Preview deployments must never be indexed.
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: "#071c24",
  width: "device-width",
  initialScale: 1,
};

const organizationLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      logo: `${site.url}/images/brand/xelerate-logo.png`,
      email: site.email,
      slogan: site.tagline,
      parentOrganization: { "@type": "Organization", name: site.parent.name },
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.line,
        addressLocality: site.address.locality,
        addressRegion: site.address.region,
        addressCountry: site.address.countryCode,
      },
      areaServed: ["Egypt", "Saudi Arabia", "Middle East"],
      knowsAbout: ["Oracle NetSuite", "ERP implementation", "NetSuite integration", "Cloud ERP"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.legalName,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh">
        <AnalyticsNoScript />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MotionManager />
        <JsonLd data={organizationLd} />
        <Analytics />
      </body>
    </html>
  );
}
