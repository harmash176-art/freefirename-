// ==============================================================================
// Preset-based YouTube Title, Description & SEO Generator for Faster FF 08
// 100% Local JavaScript - Zero API / Backend dependencies
// ==============================================================================

import { SITE_CONFIG } from "./config";

export interface GeneratedMetadata {
  titles: string[];
  hook: string;
  description: string;
  hashtags: string[];
  tags: string;
}

export function generateLocalYoutubeMetadata(
  topic: string,
  category: "Clash Squad" | "Headshots" | "Rank Push" | "Tutorial" | "Shorts",
  tone: "Hype" | "Pro Guide" | "Montage" | "Viral"
): GeneratedMetadata {
  const cleanTopic = topic.trim() || "1v4 Impossible Clutch with Desert Eagle";
  const upperTopic = cleanTopic.toUpperCase();

  // Dynamic High-CTR Title Templates based on category & tone
  let titles: string[] = [];

  switch (category) {
    case "Headshots":
      titles = [
        `🔥 100% HEADSHOT RATE! ${upperTopic} (Faster FF 08 Gameplay)`,
        `⚡ NO ONE CAN SURVIVE THIS ONE-TAP! ${cleanTopic} | Free Fire`,
        `💀 INSANE RED NUMBERS ONLY! ${cleanTopic} (Best Sensitivity)`,
        `🎯 HOW I HIT CONTINUOUS HEADSHOTS WITH ${cleanTopic} | Pro Guide`,
      ];
      break;
    case "Clash Squad":
      titles = [
        `🔥 1v4 IMPOSSIBLE CLUTCH IN CLASH SQUAD! (${cleanTopic})`,
        `⚡ CLASH SQUAD 7-0 CLEAN SWEEP! ${upperTopic} | Faster FF 08`,
        `💀 ENEMY TEAM RAGE QUIT! ${cleanTopic} in Grandmaster Lobby`,
        `🏆 CLUTCH OR KICK? ${cleanTopic} (Fastest Free Fire Movement)`,
      ];
      break;
    case "Rank Push":
      titles = [
        `🔥 ROAD TO GRANDMASTER! ${cleanTopic} (Solo vs Squad)`,
        `⚡ 500+ RANK POINTS IN 1 HOUR! ${cleanTopic} Full Strategy`,
        `💀 SOLO VS SQUAD SURVIVAL: ${upperTopic} | Free Fire Highlights`,
        `🏆 HOW TO REACH GRANDMASTER IN 24 HOURS! (${cleanTopic})`,
      ];
      break;
    case "Tutorial":
      titles = [
        `🔥 SECRET SENSITIVITY FOR DRAG HEADSHOTS! ${cleanTopic}`,
        `⚡ MASTER THIS FAST GLOO WALL TRICK IN 5 MINUTES! (${cleanTopic})`,
        `🎯 TOP 3 PRO MISTAKES YOU MAKE IN FREE FIRE! (${cleanTopic})`,
        `📱 BEST CUSTOM HUD & DPI SETTINGS FOR 2026: ${cleanTopic}`,
      ];
      break;
    case "Shorts":
      titles = [
        `⚡ FASTEST MOVEMENT IN FREE FIRE?! #shorts #${cleanTopic.replace(/\s+/g, "")}`,
        `💀 1 TAP HEADSHOT GOD! #shorts #freefire #fasterff08`,
        `🔥 WAIT FOR THE ENDING! ${cleanTopic} #shorts #ffhighlights`,
        `🎯 1v4 CLUTCH IN 15 SECONDS! #shorts #freefireshorts`,
      ];
      break;
  }

  // Hook based on category
  const hooks: Record<string, string> = {
    Headshots: `In this match, I unlocked the secret rotation drag timing. Watch how every single bullet lands as a clean red number headshot!`,
    "Clash Squad": `My entire squad got knocked out in the first 20 seconds. Watch how fast reaction time and gloo wall placement turned the round into a 1v4 victory!`,
    "Rank Push": `When you're pushing Grandmaster solo vs squad, one wrong rotation means elimination. Here is the exact endgame strategy that secured the Booyah!`,
    Tutorial: `Most players drag their fire button way too hard. Today I'll show you the exact crosshair reset and sensitivity that pros like Faster FF 08 use!`,
    Shorts: `You won't believe how fast this clutch happened! Watch until the final second and subscribe for more daily shorts!`,
  };

  // Structured YouTube Description
  const description = `Welcome back to FASTER FF 08! In today's video: ${cleanTopic} 🎮🔥

If you enjoyed the gameplay, hit that LIKE button and SUBSCRIBE for more daily Free Fire one-taps and clutch moments!

🔔 SUBSCRIBE to Faster FF 08:
${SITE_CONFIG.realYoutubeUrl}

⏱️ VIDEO TIMESTAMPS:
0:00 - Epic Highlights & Intro
0:45 - The Impossible Matchup
2:30 - Rotation Drag & 1-Tap Clutches
5:15 - Fast Gloo Wall Reflexes
7:40 - Final Circle & Booyah!

📱 DEVICE & SETTINGS:
• Device: Pro High-Refresh Rate Gaming Setup
• Custom HUD: 4-Finger Claw Fast Movement
• Sensitivity: General (98), Red Dot (94), 2X (90)

💬 COMMENT QUESTION:
What is your go-to weapon for close range clutches? Let me know below!

#FreeFire #FasterFF08 #FreeFireHighlights #OneTapHeadshot #GarenaFreeFire`;

  const hashtags = [
    "#FreeFire",
    "#FasterFF08",
    "#FreeFireHighlights",
    "#OneTapHeadshot",
    "#ClashSquad",
    "#GarenaFreeFire",
    "#FFShorts",
    "#FreeFireIndia",
    "#FreeFirePro",
  ];

  const tags =
    "free fire, faster ff 08, free fire headshot, desert eagle 1 tap, clash squad ranked, free fire highlights, ff pro gameplay, one tap headshot tricks, free fire montage, grandmaster rank push, gloo wall fast placement";

  return {
    titles,
    hook: hooks[category] || hooks["Headshots"],
    description,
    hashtags,
    tags,
  };
}
