import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import { SITE_CONFIG } from "@/data/config";

export const viewport: Viewport = {
  themeColor: "#ff0844",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteBaseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "Faster FF 08 — Free Fire Nick Finder | 100+ Stylish Names & Symbols",
    template: "%s | Faster FF 08 Nick Finder",
  },
  description:
    "Official Faster FF 08 Free Fire Nick Finder. Generate 100+ stylish Unicode nicknames with crowns, wings, and esports fonts. Browse ready-made gamertags and combine symbols with instant 1-click copy.",
  keywords: [
    "Faster FF 08",
    "Free Fire Nick Finder",
    "Free Fire Stylish Name",
    "Free Fire Name Generator",
    "Nick Finder Free Fire",
    "Free Fire 100 Stylish Names",
    "Free Fire Wings Symbols",
    "Free Fire Crown Names",
    "Free Fire Nicknames AMAN",
    "Free Fire Esports Names",
    "One Tap Headshot",
    "Free Fire YouTube SEO",
  ],
  authors: [{ name: "Faster FF 08", url: SITE_CONFIG.realYoutubeUrl }],
  creator: "Faster FF 08",
  publisher: "Faster FF 08",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteBaseUrl,
    title: "Faster FF 08 — Free Fire Nick Finder | 100+ Stylish Names & Symbols",
    description:
      "Generate 100+ stylish Free Fire nicknames with wings, crowns, and esports symbols. Browse curated ready-made names and combine decorative symbols with instant 1-click copy.",
    siteName: "Faster FF 08 Nick Finder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faster FF 08 — Free Fire Nick Finder | 100+ Stylish Names & Symbols",
    description:
      "Generate 100+ stylish Free Fire nicknames with wings, crowns, and esports symbols. Free 1-click copy.",
    creator: "@FasterFF08",
  },
  verification: SITE_CONFIG.googleSiteVerification
    ? {
        google: SITE_CONFIG.googleSiteVerification,
      }
    : undefined,
  other: {
    "google-adsense-account": SITE_CONFIG.adsense.client,
  },
};

// Safe, honest structured data (Schema.org WebSite & Organization)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteBaseUrl}/#website`,
      url: siteBaseUrl,
      name: "Faster FF 08 — Free Fire Nick Finder",
      description:
        "Official Faster FF 08 Free Fire Nick Finder featuring 100+ stylish Unicode nickname variations, browsable ready-made gamertags, and decorative symbol combiner.",
      publisher: {
        "@id": `${siteBaseUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${siteBaseUrl}/#organization`,
      name: "Faster FF 08",
      url: siteBaseUrl,
      sameAs: [SITE_CONFIG.realYoutubeUrl],
      description:
        "Official gaming platform for Faster FF 08 YouTube channel delivering Free Fire gameplay, highlights, and pro gaming tools with over 6,000 subscribers.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Official Google AdSense Integration */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE_CONFIG.adsense.client}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-[#07070b] text-[#f2f2f7] antialiased selection:bg-red-600 selection:text-white">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
