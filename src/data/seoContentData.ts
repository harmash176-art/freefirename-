// SEO and Content Data for Faster FF 08 Free Fire Nickname Generator
// Original, helpful gaming reference data: Pro Players, Bios, Unique Names, Guides & FAQs

export interface ProPlayerItem {
  id: string;
  name: string;
  playerOrClan: string;
  role: string;
  category: "India" | "Global" | "Clan & Tags";
  style: string;
  length: number;
}

export interface BioItem {
  id: string;
  title: string;
  category: "V-Badge & Colors" | "Attitude & Savage" | "Ranked & Rusher" | "Duo & Squad";
  rawBio: string;
  previewText: string;
  tags: string[];
}

export interface UniqueNameItem {
  id: string;
  name: string;
  category: "Solo Rusher" | "Royalty & King" | "Mythic & Dark" | "Short & Clean" | "Duo & Squad";
  vibe: string;
  length: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// ------------------------------------------------------------------------------
// Pro Player Names & Esports Gamertag Styles
// ------------------------------------------------------------------------------
export const PRO_PLAYER_NAMES: ProPlayerItem[] = [
  {
    id: "pro-1",
    name: "• R A I S T A R •",
    playerOrClan: "Raistar",
    role: "Speed & Movement King",
    category: "India",
    style: "Spaced Out Dot",
    length: 15,
  },
  {
    id: "pro-2",
    name: "⚡RAISTAR⚡亗",
    playerOrClan: "Raistar",
    role: "Headshot Specialist",
    category: "India",
    style: "Lightning & Crown",
    length: 11,
  },
  {
    id: "pro-3",
    name: "『TG』ᴀᴊᴊᴜʙʜᴀɪ",
    playerOrClan: "Ajjubhai (Total Gaming)",
    role: "Most Subscribed Gamer",
    category: "India",
    style: "Clan Tag & Small Caps",
    length: 13,
  },
  {
    id: "pro-4",
    name: "꧁༺AJJU•BHAI༻꧂",
    playerOrClan: "Ajjubhai",
    role: "Total Gaming Leader",
    category: "India",
    style: "Royal Wings",
    length: 16,
  },
  {
    id: "pro-5",
    name: "NOBRU 么 777",
    playerOrClan: "Nobru (Fluxo)",
    role: "World Champion & Pro",
    category: "Global",
    style: "Kanji & Lucky 777",
    length: 11,
  },
  {
    id: "pro-6",
    name: "亗 N O B R U 亗",
    playerOrClan: "Nobru",
    role: "Esports Legend",
    category: "Global",
    style: "Double Crown",
    length: 13,
  },
  {
    id: "pro-7",
    name: "『B2K』B O S S",
    playerOrClan: "Born2Kill (B2K)",
    role: "Sniper God & Rusher",
    category: "Global",
    style: "Esports Tag & Spaced",
    length: 13,
  },
  {
    id: "pro-8",
    name: "꧁B2K༒FROST꧂",
    playerOrClan: "B2K Moe / Ali",
    role: "Montage Specialist",
    category: "Global",
    style: "Wings & Cross",
    length: 12,
  },
  {
    id: "pro-9",
    name: "✓INCENZO⚡",
    playerOrClan: "Vincenzo",
    role: "M1014 Shotgun Legend",
    category: "Global",
    style: "Checkmark & Lightning",
    length: 9,
  },
  {
    id: "pro-10",
    name: "亗 V I N C E N Z O 亗",
    playerOrClan: "Vincenzo",
    role: "Headshot Montage Pro",
    category: "Global",
    style: "Imperial Crowns",
    length: 19,
  },
  {
    id: "pro-11",
    name: "WHITE • 444 亗",
    playerOrClan: "White444",
    role: "Desert Eagle Specialist",
    category: "Global",
    style: "Dot & Crown",
    length: 13,
  },
  {
    id: "pro-12",
    name: "꧁༺WHITE444༻꧂",
    playerOrClan: "White444",
    role: "One-Tap Legend",
    category: "Global",
    style: "Angel Wings",
    length: 14,
  },
  {
    id: "pro-13",
    name: "『B99』• BADGE 99",
    playerOrClan: "Badge 99",
    role: "Custom Room Rusher",
    category: "India",
    style: "Badge Bracket",
    length: 16,
  },
  {
    id: "pro-14",
    name: "亗 BADGE 99 亗",
    playerOrClan: "Badge 99",
    role: "High Kill Gameplays",
    category: "India",
    style: "Double Crown",
    length: 14,
  },
  {
    id: "pro-15",
    name: "『PG』P A H A D I",
    playerOrClan: "Pahadi Gaming",
    role: "Esports Sniper Champion",
    category: "India",
    style: "Esports Clan Bracket",
    length: 17,
  },
  {
    id: "pro-16",
    name: "SK•SABIR亗BOSS",
    playerOrClan: "SK Sabir Boss",
    role: "Classic FF Leader",
    category: "India",
    style: "Dot & Crown",
    length: 13,
  },
  {
    id: "pro-17",
    name: "『TSG』J A S H",
    playerOrClan: "Two Side Gamers",
    role: "TSG Army Co-founder",
    category: "India",
    style: "Guild Tag & Spaced",
    length: 13,
  },
  {
    id: "pro-18",
    name: "『ELITE』亗 G O D",
    playerOrClan: "Elite Esports Clan",
    role: "Clan Leader",
    category: "Clan & Tags",
    style: "Elite Clan Tag",
    length: 16,
  },
  {
    id: "pro-19",
    name: "父 CLAN • LEADER 父",
    playerOrClan: "Competitive Guild",
    role: "Guild Master",
    category: "Clan & Tags",
    style: "Kanji Sword Clan",
    length: 17,
  },
  {
    id: "pro-20",
    name: "『777』• V I P E R",
    playerOrClan: "Tournament Squad",
    role: "Main Entry Rusher",
    category: "Clan & Tags",
    style: "Number Bracket",
    length: 17,
  },
];

// ------------------------------------------------------------------------------
// Free Fire Bio Ideas with Color Codes & Signature Syntaxes
// ------------------------------------------------------------------------------
export const FREE_FIRE_BIOS: BioItem[] = [
  {
    id: "bio-1",
    title: "Golden V-Badge Creator Signature",
    category: "V-Badge & Colors",
    rawBio: "[b][c][ffd700]Ⓥ[ffffff] Faster FF 08 Official",
    previewText: "Ⓥ Faster FF 08 Official",
    tags: ["V-Badge", "Gold", "Verified", "Creator"],
  },
  {
    id: "bio-2",
    title: "V-Badge Headshot Master",
    category: "V-Badge & Colors",
    rawBio: "[b][c][ffd700]Ⓥ[ff0000] Headshot Master [ffffff]⚡",
    previewText: "Ⓥ Headshot Master ⚡",
    tags: ["V-Badge", "Red", "Headshot"],
  },
  {
    id: "bio-3",
    title: "Neon Cyan Esports Pro",
    category: "V-Badge & Colors",
    rawBio: "[b][c][00ffff]🏆 Esports Athlete [ffffff]| CS Grandmaster",
    previewText: "🏆 Esports Athlete | CS Grandmaster",
    tags: ["Cyan", "Esports", "Ranked"],
  },
  {
    id: "bio-4",
    title: "Rainbow Gradient Style Bio",
    category: "V-Badge & Colors",
    rawBio: "[b][c][ff0000]F[ff7700]A[ffff00]S[00ff00]T[00ffff]E[0000ff]R [ffffff]FF 08",
    previewText: "FASTER FF 08 (Multicolor Text)",
    tags: ["Rainbow", "Gradient", "Custom"],
  },
  {
    id: "bio-5",
    title: "One Tap Headshot King",
    category: "Ranked & Rusher",
    rawBio: "❤️ One Tap Headshot King 👑 | M1887 & Desert Eagle Rusher",
    previewText: "❤️ One Tap Headshot King 👑 | M1887 & Desert Eagle Rusher",
    tags: ["One Tap", "M1887", "Rusher"],
  },
  {
    id: "bio-6",
    title: "Solo vs Squad Specialist",
    category: "Ranked & Rusher",
    rawBio: "🔥 Solo vs Squad Specialist 💀 | Never back down from a 1v4 clutch.",
    previewText: "🔥 Solo vs Squad Specialist 💀 | Never back down from a 1v4 clutch.",
    tags: ["1v4", "Solo vs Squad", "Clutch"],
  },
  {
    id: "bio-7",
    title: "Grandmaster Rank Pusher",
    category: "Ranked & Rusher",
    rawBio: "⚔️ Grandmaster Rank Pusher • Clash Squad Win Streak 25+ 🏆",
    previewText: "⚔️ Grandmaster Rank Pusher • Clash Squad Win Streak 25+ 🏆",
    tags: ["Grandmaster", "Rank", "Win Streak"],
  },
  {
    id: "bio-8",
    title: "Savage Conqueror Attitude",
    category: "Attitude & Savage",
    rawBio: "“I don't play to participate; I play to conquer. 亗”",
    previewText: "“I don't play to participate; I play to conquer. 亗”",
    tags: ["Attitude", "Royalty", "Quotes"],
  },
  {
    id: "bio-9",
    title: "Red Numbers Only",
    category: "Attitude & Savage",
    rawBio: "“Red numbers speak louder than words. 🎯 One Tap, Game Over.”",
    previewText: "“Red numbers speak louder than words. 🎯 One Tap, Game Over.”",
    tags: ["Red Numbers", "Headshot", "Savage"],
  },
  {
    id: "bio-10",
    title: "Royalty Attitude Bio",
    category: "Attitude & Savage",
    rawBio: "“My rank is Grandmaster; my attitude is Royalty. 👑”",
    previewText: "“My rank is Grandmaster; my attitude is Royalty. 👑”",
    tags: ["Royalty", "Grandmaster", "King"],
  },
  {
    id: "bio-11",
    title: "Free Fire Gamer Duo Bio",
    category: "Duo & Squad",
    rawBio: "He protects, She revives. 💑 The Unbeatable Free Fire Duo.",
    previewText: "He protects, She revives. 💑 The Unbeatable Free Fire Duo.",
    tags: ["Duo", "Couple", "Revive"],
  },
  {
    id: "bio-12",
    title: "Lobby King & Squad Queen",
    category: "Duo & Squad",
    rawBio: "King of the Lobby 亗 | Queen of my Squad 👸 | Inseparable Duo",
    previewText: "King of the Lobby 亗 | Queen of my Squad 👸 | Inseparable Duo",
    tags: ["King & Queen", "Squad", "Duo"],
  },
];

// ------------------------------------------------------------------------------
// Unique Gaming Names Categorized for High-Rank FF Players
// ------------------------------------------------------------------------------
export const UNIQUE_GAMING_NAMES: UniqueNameItem[] = [
  // Solo Rusher
  { id: "un-1", name: "VortexViper", category: "Solo Rusher", vibe: "Fast & Lethal", length: 11 },
  { id: "un-2", name: "GhostRider08", category: "Solo Rusher", vibe: "Silent Hunter", length: 12 },
  { id: "un-3", name: "ShadowStrike", category: "Solo Rusher", vibe: "One-Tap Rusher", length: 12 },
  { id: "un-4", name: "NeonPhantom", category: "Solo Rusher", vibe: "Cyber Specialist", length: 11 },
  { id: "un-5", name: "FatalBullet", category: "Solo Rusher", vibe: "Sniper God", length: 11 },
  { id: "un-6", name: "SilentReaper", category: "Solo Rusher", vibe: "Stealth Assassin", length: 12 },

  // Royalty & King
  { id: "un-7", name: "亗 KingSlayer 亗", category: "Royalty & King", vibe: "Imperial Leader", length: 15 },
  { id: "un-8", name: "👑 Majesty08 👑", category: "Royalty & King", vibe: "Crown Royalty", length: 14 },
  { id: "un-9", name: "亗 RoyalBlood 亗", category: "Royalty & King", vibe: "Clan King", length: 15 },
  { id: "un-10", name: "GrandMonarch", category: "Royalty & King", vibe: "Sovereign Ruler", length: 12 },
  { id: "un-11", name: "CrownedBeast", category: "Royalty & King", vibe: "Fierce Emperor", length: 12 },

  // Mythic & Dark
  { id: "un-12", name: "EclipseKnight", category: "Mythic & Dark", vibe: "Shadow Warrior", length: 13 },
  { id: "un-13", name: "AetherVoid", category: "Mythic & Dark", vibe: "Cosmic Enigma", length: 10 },
  { id: "un-14", name: "FrostNova", category: "Mythic & Dark", vibe: "Subzero Freeze", length: 9 },
  { id: "un-15", name: "ThunderGod", category: "Mythic & Dark", vibe: "Lightning Strike", length: 10 },
  { id: "un-16", name: "GrimScythe", category: "Mythic & Dark", vibe: "Underworld Legend", length: 10 },
  { id: "un-17", name: "NetherFiend", category: "Mythic & Dark", vibe: "Demonic Power", length: 11 },

  // Short & Clean
  { id: "un-18", name: "Z E U S", category: "Short & Clean", vibe: "Greek God Style", length: 7 },
  { id: "un-19", name: "V E X", category: "Short & Clean", vibe: "Minimal Gamer", length: 5 },
  { id: "un-20", name: "A X E L", category: "Short & Clean", vibe: "Clean & Punchy", length: 7 },
  { id: "un-21", name: "N O V A", category: "Short & Clean", vibe: "Explosive Star", length: 7 },
  { id: "un-22", name: "B L I T Z", category: "Short & Clean", vibe: "High Speed", length: 9 },
  { id: "un-23", name: "L Y N X", category: "Short & Clean", vibe: "Fast Predator", length: 7 },

  // Duo & Squad
  { id: "un-24", name: "Bonnie & Clyde", category: "Duo & Squad", vibe: "Classic Partner", length: 14 },
  { id: "un-25", name: "Thunder & Lightning", category: "Duo & Squad", vibe: "Storm Squad", length: 19 },
  { id: "un-26", name: "FireGod & IceQueen", category: "Duo & Squad", vibe: "Elemental Couple", length: 18 },
  { id: "un-27", name: "AlphaWolf & OmegaWolf", category: "Duo & Squad", vibe: "Pack Leaders", length: 21 },
];

// ------------------------------------------------------------------------------
// Comprehensive Step-by-Step Name Changing & Generation Guide
// ------------------------------------------------------------------------------
export const GENERATOR_STEPS = [
  {
    step: 1,
    title: "Type Your Desired Gamertag",
    description:
      "Enter your nickname, clan initials, or real name into the Free Fire stylish name generator input box above. You can also click 'Random' for instant inspiration.",
  },
  {
    step: 2,
    title: "Explore 100+ Unicode Styles & Symbols",
    description:
      "Our local styling engine immediately generates 100+ creative font transformations decorated with angel wings (꧁༺ ༻꧂), crowns (亗), Japanese kanji (么), and esports clan brackets.",
  },
  {
    step: 3,
    title: "Click 1-Click Copy & Check Length",
    description:
      "Click the Copy button next to any generated design. Our generator includes a built-in character counter so you know immediately whether your gamertag fits within Free Fire's 12-character limit.",
  },
  {
    step: 4,
    title: "Paste & Confirm In Free Fire",
    description:
      "Open Free Fire on your Android or iOS device, navigate to your Profile banner -> Edit Nickname, paste your copied stylish name, and confirm using a Name Change Card or 390 Diamonds.",
  },
];

export const IN_GAME_CHANGE_STEPS = [
  {
    step: "01",
    title: "Open Garena Free Fire",
    text: "Launch Free Fire or Free Fire MAX on your smartphone or emulator and log in to your account.",
  },
  {
    step: "02",
    title: "Tap Profile Banner",
    text: "In the main lobby, look at the top-left corner and tap on your character avatar/profile banner.",
  },
  {
    step: "03",
    title: "Click The Edit Icon",
    text: "Tap the yellow pencil or notebook edit icon located directly next to your current In-Game Name (IGN).",
  },
  {
    step: "04",
    title: "Paste Your Copied Stylish Name",
    text: "A dialog box will appear saying 'Change Nickname'. Tap the text input box and paste your styled name from this website.",
  },
  {
    step: "05",
    title: "Confirm With Diamonds or Card",
    text: "Confirm your selection using 390 Diamonds or 1 Name Change Card (available in the Guild Shop for 39 Diamonds + 200 Guild Tokens).",
  },
];

// ------------------------------------------------------------------------------
// SEO FAQs for Ranking on Google
// ------------------------------------------------------------------------------
export const FAQ_LIST: FaqItem[] = [
  {
    question: "How do I generate a stylish nickname for Free Fire?",
    answer:
      "To generate a stylish Free Fire nickname, enter your preferred name in the generator box on this page. Our tool transforms your text into over 100+ stylized Unicode fonts with decorative wings, royal crowns, kanji symbols, and esports clan tags. Simply click the 'Copy' button on any variation you like.",
  },
  {
    question: "How do I change my nickname inside Garena Free Fire?",
    answer:
      "Open Free Fire, click on your profile banner in the top-left corner of the lobby screen, and tap the yellow notebook/pencil edit icon next to your name. Paste your copied stylish nickname into the text box and confirm using either 390 Diamonds or a Name Change Card.",
  },
  {
    question: "What is the character limit for Free Fire nicknames?",
    answer:
      "Garena Free Fire allows in-game nicknames to have a length of up to 12 characters. Keep in mind that certain complex decorative Unicode symbols (like wings or Chinese glyphs) count as multiple bytes, so always check the real-time character counter in our generator before copying.",
  },
  {
    question: "Will my account get banned for using stylish symbols or fonts?",
    answer:
      "No. Using Unicode fonts, decorative symbols (such as 亗, ꧁, ꧂, 么, ⚡), and brackets in your nickname is 100% safe and compliant with Garena Free Fire's terms of service. Millions of players, verified creators, and esports professionals use custom Unicode names daily.",
  },
  {
    question: "How do I create an invisible space in my Free Fire name?",
    answer:
      "Free Fire does not allow pressing the standard spacebar on your keyboard. To add a space between words or symbols, use the Hangul Filler Unicode character (U+3164) commonly known as the 'invisible space' (ㅤ). Simply copy the invisible symbol from our Symbols Library section and paste it between your words.",
  },
  {
    question: "Why do some symbols appear as a blank square (□) on my phone?",
    answer:
      "A square (□) or question mark symbol appears when an operating system or game build does not support that specific Unicode glyph. To avoid this, our generator uses widely compatible symbols that render correctly on modern Android and iOS devices. You can also test your chosen name in Free Fire's preview window before confirming.",
  },
  {
    question: "How do I get the golden V-Badge (Ⓥ) in my Free Fire bio?",
    answer:
      "The official in-game V-Badge next to your nickname is awarded exclusively by Garena to creators enrolled in the official Free Fire Partner Program. However, you can add a stylish golden V-Badge symbol to your profile signature/bio using the color code [b][c][ffd700]Ⓥ[ffffff] from our Bio Ideas section.",
  },
];

