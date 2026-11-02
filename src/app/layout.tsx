import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { ToastProvider } from "@/components/Toast";
import { SITE_CONFIG } from "@/data/config";
import { FAQ_LIST } from "@/data/seoContentData";

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
    default: "Free Fire Nickname Generator — 100+ Stylish FF Names & Symbols",
    template: "%s | Free Fire Nickname Generator",
  },
  description:
    "Free Fire Nickname Generator with 100+ stylish fonts, wings, crowns & esports symbols. Copy ready-made FF names, pro player tags, and stylish bios in 1 click.",
  keywords: [
    "Free Fire Nickname Generator",
    "Free Fire Stylish Name",
    "FF Nick Finder",
    "Free Fire Name Style",
    "Free Fire Symbols",
    "Free Fire Pro Player Names",
    "Free Fire Bio Ideas",
    "Free Fire Unique Names",
    "Free Fire Crown Names",
    "Free Fire Wings Symbol",
    "Raistar Name Style",
    "Ajjubhai Name Style",
    "Free Fire Name Change",
    "Free Fire Esports Names",
    "Faster FF 08",
  ],
  authors: [{ name: "Faster FF 08", url: SITE_CONFIG.realYoutubeUrl }],
  creator: "Faster FF 08",
  publisher: "Faster FF 08",
  alternates: {
    canonical: siteBaseUrl,
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
    title: "Free Fire Nickname Generator — 100+ Stylish FF Names & Symbols",
    description:
      "Generate 100+ stylish Free Fire nicknames with wings, crowns, and esports fonts. Find pro player names, FF bio ideas, and gaming symbols with instant 1-click copy.",
    siteName: "Free Fire Nickname Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fire Nickname Generator — 100+ Stylish FF Names & Symbols",
    description:
      "Generate 100+ stylish Free Fire nicknames with wings, crowns, and esports fonts. Free 1-click copy.",
    creator: "@FasterFF08",
  },
  verification: {
    google: "1oSolSBlMqFW9satr0rGY1Gv7a4ai7cE1pxNL2hHWNI",
  },
  other: {
    // Google AdSense Site Verification Meta Tag: <meta name="google-adsense-account" content="ca-pub-6711715804152191">
    "google-adsense-account": "ca-pub-6711715804152191",
  },
};

// Safe, honest structured data (Schema.org WebSite, WebApplication, FAQPage & Organization)
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteBaseUrl}/#website`,
      url: siteBaseUrl,
      name: "Free Fire Nickname Generator — Faster FF 08",
      alternateName: ["FF Nick Finder", "Free Fire Name Generator", "Faster FF 08"],
      description:
        "Generate 100+ stylish Free Fire nicknames with wings, crowns, and esports fonts. Copy pro player names, FF bio ideas, and gaming symbols in 1 click.",
      publisher: {
        "@id": `${siteBaseUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebApplication",
      "@id": `${siteBaseUrl}/#app`,
      name: "Free Fire Nickname Generator & FF Nick Finder",
      url: siteBaseUrl,
      applicationCategory: "GameApplication, UtilityApplication",
      operatingSystem: "Web, Android, iOS",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      description:
        "Online Free Fire nickname generator providing 100+ Unicode style transformations, decorative gaming symbols, ready-made gamertags, and profile bio codes.",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteBaseUrl}/#faq`,
      mainEntity: FAQ_LIST.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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
