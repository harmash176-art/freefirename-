// Channel and Site Configuration for Faster FF 08
// Real YouTube Channel URL: https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg

export const SITE_CONFIG = {
  channelName: "Faster FF 08",
  channelHandle: "@FasterFF08",
  subscriberCount: "6K+",
  subscribersRaw: "6,000+",
  gameTitle: "Garena Free Fire",
  realYoutubeUrl: "https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://faster-ff-08.vercel.app",
  // Google Search Console HTML Verification code (paste your content code here or set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION in .env)
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "1oSolSBlMqFW9satr0rGY1Gv7a4ai7cE1pxNL2hHWNI",
  creatorName: "Faster FF 08",
  tagline: "Free Fire Gaming. Epic Gameplay. Preset Gaming Tools.",
  description: "Official Faster FF 08 Free Fire Nick Finder. Generate 100+ stylish Unicode nicknames with crowns, wings, and esports fonts. Browse ready-made gamertags and combine symbols.",
  
  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Generator", href: "#generator" },
    { label: "Ready-Made", href: "#ready-made" },
    { label: "Symbols", href: "#symbols" },
    { label: "Videos", href: "#videos" },
    { label: "About", href: "#about" },
  ],

  // Social Media links:
  // Strictly adhering to requirements: YouTube is the real active channel.
  // Optional socials remain empty/configurable until provided by the creator.
  socials: {
    youtube: "https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg",
    // Configurable placeholders for future expansion:
    discord: null as string | null,
    instagram: null as string | null,
    twitter: null as string | null,
  },

  // Gaming Stats & Highlights
  stats: [
    { label: "Subscribers", value: "6K+", subtext: "Active Free Fire fans" },
    { label: "Game Focus", value: "Free Fire", subtext: "Ranked & Clash Squad" },
    { label: "Playstyle", value: "One-Tap Rusher", subtext: "Headshot Specialist" },
    { label: "Nick Finder", value: "100+ Styles", subtext: "10 Categories & Symbols" },
  ],

  // Google AdSense Configuration
  adsense: {
    publisherId: "pub-6711715804152191",
    client: "ca-pub-6711715804152191",
  },
};
