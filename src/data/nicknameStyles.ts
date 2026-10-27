// ==============================================================================
// Faster FF 08 - Free Fire Nick Finder: 100+ Stylish Unicode Transformation Engine
// 100% Local Browser Engine - Zero external APIs or keys
// Categories: Popular, Stylish, Gaming, Pro, King, Queen, Cute, Cool, Symbols, Minimal
// ==============================================================================

export type NickCategory =
  | "popular"
  | "stylish"
  | "gaming"
  | "pro"
  | "king"
  | "queen"
  | "cute"
  | "cool"
  | "symbols"
  | "minimal";

export interface NicknameStyle {
  id: string;
  name: string;
  category: NickCategory;
  transform: (text: string) => string;
}

// ------------------------------------------------------------------------------
// Unicode Alphabets Mapping Tables
// ------------------------------------------------------------------------------
const BOLD_MAP: Record<string, string> = {
  a: "𝐚", b: "𝐛", c: "𝐜", d: "𝐝", e: "𝐞", f: "𝐟", g: "𝐠", h: "𝐡", i: "𝐢", j: "𝐣", k: "𝐤", l: "𝐥", m: "𝐦",
  n: "𝐧", o: "𝐨", p: "𝐩", q: "𝐪", r: "𝐫", s: "𝐬", t: "𝐭", u: "𝐮", v: "𝐯", w: "𝐰", x: "𝐱", y: "𝐲", z: "𝐳",
  A: "𝐀", B: "𝐁", C: "𝐂", D: "𝐃", E: "𝐄", F: "𝐅", G: "𝐆", H: "𝐇", I: "𝐈", J: "𝐉", K: "𝐊", L: "𝐋", M: "𝐌",
  N: "𝐍", O: "𝐎", P: "𝐏", Q: "𝐐", R: "𝐑", S: "𝐒", T: "𝐓", U: "𝐔", V: "𝐕", W: "𝐖", X: "𝐗", Y: "𝐘", Z: "𝐙",
  "0": "𝟎", "1": "𝟏", "2": "𝟐", "3": "𝟑", "4": "𝟒", "5": "𝟓", "6": "𝟔", "7": "𝟕", "8": "𝟖", "9": "𝟗"
};

const BOLD_ITALIC_MAP: Record<string, string> = {
  a: "𝒂", b: "𝒃", c: "𝒄", d: "𝒅", e: "𝒆", f: "𝒇", g: "𝒈", h: "𝒉", i: "𝒊", j: "𝒋", k: "𝒌", l: "𝒍", m: "𝒎",
  n: "𝒏", o: "𝒐", p: "𝒑", q: "𝒒", r: "𝒓", s: "𝒔", t: "𝒕", u: "𝒖", v: "𝒗", w: "𝒘", x: "𝒙", y: "𝒚", z: "𝒛",
  A: "𝑨", B: "𝑩", C: "𝑪", D: "𝑫", E: "𝑬", F: "𝑭", G: "𝑮", H: "𝑯", I: "𝑰", J: "𝑱", K: "𝑲", L: "𝑳", M: "𝑴",
  N: "𝑵", O: "𝑶", P: "𝑷", Q: "𝑸", R: "𝑹", S: "𝑺", T: "𝑻", U: "𝑼", V: "𝑽", W: "𝑾", X: "𝑿", Y: "𝒀", Z: "𝒁"
};

const SANS_BOLD_MAP: Record<string, string> = {
  a: "𝗮", b: "𝗯", c: "𝗰", d: "𝗱", e: "𝗲", f: "𝗳", g: "𝗴", h: "𝗵", i: "𝗶", j: "𝗷", k: "𝗸", l: "𝗹", m: "𝗺",
  n: "𝗻", o: "𝗼", p: "𝗽", q: "𝗾", r: "𝗿", s: "𝘀", t: "𝘁", u: "𝘂", v: "𝘃", w: "𝘄", x: "𝘅", y: "𝘆", z: "𝘇",
  A: "𝗔", B: "𝗕", C: "𝗖", D: "𝗗", E: "𝗘", F: "𝗙", G: "𝗚", H: "𝗛", I: "𝗜", J: "𝗝", K: "𝗞", L: "𝗟", M: "𝗠",
  N: "𝗡", O: "𝗢", P: "𝗣", Q: "𝗤", R: "𝗥", S: "𝗦", T: "𝗧", U: "𝗨", V: "𝗩", W: "𝗪", X: "𝗫", Y: "𝗬", Z: "𝗭",
  "0": "𝟬", "1": "𝟭", "2": "𝟮", "3": "𝟯", "4": "𝟰", "5": "𝟱", "6": "𝟲", "7": "𝟳", "8": "𝟴", "9": "𝟵"
};

const SANS_ITALIC_MAP: Record<string, string> = {
  a: "𝘢", b: "𝘣", c: "𝘤", d: "𝘥", e: "𝘦", f: "𝘧", g: "𝘨", h: "𝘩", i: "𝘪", j: "𝘫", k: "𝘬", l: "𝘭", m: "𝘮",
  n: "𝘯", o: "𝘰", p: "𝘱", q: "𝘲", r: "𝘳", s: "𝘴", t: "𝘵", u: "𝘶", v: "𝘷", w: "𝘸", x: "𝘹", y: "𝘺", z: "𝘻",
  A: "𝘈", B: "𝘉", C: "𝘊", D: "𝘋", E: "𝘌", F: "𝘍", G: "𝘎", H: "𝘏", I: "𝘐", J: "𝑑", K: "𝘒", L: "𝘓", M: "𝘔",
  N: "𝘕", O: "𝘖", P: "𝘗", Q: "𝘘", R: "𝘙", S: "𝘚", T: "𝘛", U: "𝘜", V: "𝘝", W: "𝘞", X: "𝘟", Y: "𝘠", Z: "𝘡"
};

const SCRIPT_BOLD_MAP: Record<string, string> = {
  a: "𝓪", b: "𝓫", c: "𝓬", d: "𝓭", e: "𝓮", f: "𝓯", g: "𝓰", h: "𝓱", i: "𝓲", j: "𝓳", k: "𝓴", l: "𝓵", m: "𝓶",
  n: "𝓷", o: "𝓸", p: "𝓹", q: "𝓺", r: "𝓻", s: "𝓼", t: "𝓽", u: "𝓾", v: "𝓿", w: "𝔀", x: "𝔁", y: "𝔂", z: "𝔃",
  A: "𝓐", B: "𝓑", C: "𝓒", D: "𝓓", E: "𝓔", F: "𝓕", G: "𝓖", H: "𝓗", I: "𝓘", J: "𝓙", K: "𝓚", L: "𝓛", M: "𝓜",
  N: "𝓝", O: "𝓞", P: "𝓟", Q: "𝓠", R: "𝓡", S: "𝓢", T: "𝓣", U: "𝓤", V: "𝓥", W: "𝓦", X: "𝓧", Y: "𝓨", Z: "𝓩"
};

const FRAKTUR_BOLD_MAP: Record<string, string> = {
  a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍", i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒",
  n: "𝖓", o: "𝖔", p: "𝖕", q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝", y: "𝖞", z: "𝖟",
  A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳", I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸",
  N: "𝕹", O: "𝕺", P: "𝕻", Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃", Y: "𝖄", Z: "𝖅"
};

const DOUBLE_STRUCK_MAP: Record<string, string> = {
  a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙", i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞",
  n: "𝕟", o: "𝕠", p: "𝕡", q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩", y: "𝕪", z: "𝕫",
  A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ", I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄",
  N: "ℕ", O: "𝕆", P: "ℙ", Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏", Y: "𝕐", Z: "ℤ",
  "0": "𝟘", "1": "𝟙", "2": "𝟚", "3": "𝟛", "4": "𝟜", "5": "𝟝", "6": "𝟞", "7": "𝟟", "8": "𝟠", "9": "𝟡"
};

const SMALLCAPS_MAP: Record<string, string> = {
  a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ꜰ", g: "ɢ", h: "ʜ", i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ",
  n: "ɴ", o: "ᴏ", p: "ᴘ", q: "ǫ", r: "ʀ", s: "ꜱ", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x", y: "ʏ", z: "ᴢ",
  A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ꜰ", G: "ɢ", H: "ʜ", I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ",
  N: "ɴ", O: "ᴏ", P: "ᴘ", Q: "ǫ", R: "ʀ", S: "ꜱ", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x", Y: "ʏ", Z: "ᴢ"
};

const BUBBLE_MAP: Record<string, string> = {
  a: "ⓐ", b: "ⓑ", c: "ⓒ", d: "ⓓ", e: "ⓔ", f: "ⓕ", g: "ⓖ", h: "ⓗ", i: "ⓘ", j: "ⓙ", k: "ⓚ", l: "ⓛ", m: "ⓜ",
  n: "ⓝ", o: "ⓞ", p: "ⓟ", q: "ⓠ", r: "ⓡ", s: "ⓢ", t: "ⓣ", u: "ⓤ", v: "ⓥ", w: "ⓦ", x: "ⓧ", y: "ⓨ", z: "ⓩ",
  A: "Ⓐ", B: "Ⓑ", C: "Ⓒ", D: "Ⓓ", E: "Ⓔ", F: "Ⓕ", G: "Ⓖ", H: "Ⓗ", I: "Ⓘ", J: "Ⓙ", K: "Ⓚ", L: "Ⓛ", M: "Ⓜ",
  N: "Ⓝ", O: "Ⓞ", P: "Ⓟ", Q: "Ⓠ", R: "Ⓡ", S: "Ⓢ", T: "Ⓣ", U: "Ⓤ", V: "Ⓥ", W: "Ⓦ", X: "Ⓧ", Y: "Ⓨ", Z: "Ⓩ",
  "0": "⓪", "1": "①", "2": "②", "3": "③", "4": "④", "5": "⑤", "6": "⑥", "7": "⑦", "8": "⑧", "9": "⑨"
};

const BLACK_BUBBLE_MAP: Record<string, string> = {
  a: "🅐", b: "🅑", c: "🅒", d: "🅓", e: "🅔", f: "🅕", g: "🅖", h: "🅗", i: "🅘", j: "🅙", k: "🅚", l: "🅛", m: "🅜",
  n: "🅝", o: "🅞", p: "🅟", q: "🅠", r: "🅡", s: "🅢", t: "🅣", u: "🅤", v: "🅥", w: "🅦", x: "🅧", y: "🅨", z: "🅩",
  A: "🅐", B: "🅑", C: "🅒", D: "🅓", E: "🅔", F: "🅕", G: "🅖", H: "🅗", I: "🅘", J: "🅙", K: "🅚", L: "🅛", M: "🅜",
  N: "🅝", O: "🅞", P: "🅟", Q: "🅠", R: "🅡", S: "🅢", T: "🅣", U: "🅤", V: "🅥", W: "🅦", X: "🅧", Y: "🅨", Z: "🅩"
};

export function mapChars(text: string, map: Record<string, string>): string {
  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}

// ------------------------------------------------------------------------------
// 100+ Curated, Brand-Original Nickname Styles Across 10 Categories
// ------------------------------------------------------------------------------
export const NICKNAME_STYLES: NicknameStyle[] = [
  // 1. POPULAR (12 styles)
  {
    id: "pop-wings-crest",
    name: "Wings of Victory",
    category: "popular",
    transform: (t) => `꧁༺${t.toUpperCase()}༻꧂`,
  },
  {
    id: "pop-crown-king",
    name: "Grandmaster Crown",
    category: "popular",
    transform: (t) => `亗 ${t.toUpperCase()} 亗`,
  },
  {
    id: "pop-thunder-rusher",
    name: "Thunderbolt 1-Tap",
    category: "popular",
    transform: (t) => `⚡${t.toUpperCase()}⚡`,
  },
  {
    id: "pop-shuriken-shadow",
    name: "Ninja Shuriken",
    category: "popular",
    transform: (t) => `༄ᶦᶰᵈ᭄${t.toUpperCase()}࿐`,
  },
  {
    id: "pop-boss-ff08",
    name: "Boss FF08",
    category: "popular",
    transform: (t) => `亗 BOSS • ${t.toUpperCase()}`,
  },
  {
    id: "pop-angel-pure",
    name: "Angelic Wings",
    category: "popular",
    transform: (t) => `꧁${t.toUpperCase()}꧂`,
  },
  {
    id: "pop-fire-red",
    name: "Red Number 999",
    category: "popular",
    transform: (t) => `🔥 ${mapChars(t.toUpperCase(), SANS_BOLD_MAP)} 🔥`,
  },
  {
    id: "pop-kanji-cross",
    name: "Kanji Slayer",
    category: "popular",
    transform: (t) => `乂 ${t.toUpperCase()} 乂`,
  },
  {
    id: "pop-smallcaps-wings",
    name: "Smallcaps Mythic",
    category: "popular",
    transform: (t) => `꧁༺${mapChars(t.toLowerCase(), SMALLCAPS_MAP)}༻꧂`,
  },
  {
    id: "pop-op-verified",
    name: "OP Verified Gamer",
    category: "popular",
    transform: (t) => `OP • ${t.toUpperCase()} ✓`,
  },
  {
    id: "pop-trident-lord",
    name: "Trident Master",
    category: "popular",
    transform: (t) => `🔱 ${t.toUpperCase()} 🔱`,
  },
  {
    id: "pop-esports-bracket",
    name: "Esports Tournament",
    category: "popular",
    transform: (t) => `『${t.toUpperCase()}』`,
  },

  // 2. STYLISH (11 styles)
  {
    id: "sty-script-royal",
    name: "Royal Script",
    category: "stylish",
    transform: (t) => `✦ ${mapChars(t, SCRIPT_BOLD_MAP)} ✦`,
  },
  {
    id: "sty-double-struck",
    name: "Double-Struck Aesthetic",
    category: "stylish",
    transform: (t) => mapChars(t, DOUBLE_STRUCK_MAP),
  },
  {
    id: "sty-serif-bold-italic",
    name: "Italic Elegance",
    category: "stylish",
    transform: (t) => `✧ ${mapChars(t, BOLD_ITALIC_MAP)} ✧`,
  },
  {
    id: "sty-fraktur-demon",
    name: "Gothic Demon",
    category: "stylish",
    transform: (t) => mapChars(t, FRAKTUR_BOLD_MAP),
  },
  {
    id: "sty-smallcaps-spaced",
    name: "Clean Smallcaps",
    category: "stylish",
    transform: (t) => mapChars(t.toLowerCase(), SMALLCAPS_MAP).split("").join(" "),
  },
  {
    id: "sty-bubble-outline",
    name: "Bubble Circled",
    category: "stylish",
    transform: (t) => mapChars(t.toLowerCase(), BUBBLE_MAP),
  },
  {
    id: "sty-bubble-dark",
    name: "Dark Inverted Bubbles",
    category: "stylish",
    transform: (t) => mapChars(t.toUpperCase(), BLACK_BUBBLE_MAP),
  },
  {
    id: "sty-feather-crest",
    name: "Phoenix Crest",
    category: "stylish",
    transform: (t) => `༺${mapChars(t, SANS_BOLD_MAP)}༻`,
  },
  {
    id: "sty-infinity-glow",
    name: "Infinite Style",
    category: "stylish",
    transform: (t) => `♾️ ${mapChars(t.toUpperCase(), SANS_BOLD_MAP)} ♾️`,
  },
  {
    id: "sty-celestial-stars",
    name: "Celestial Stars",
    category: "stylish",
    transform: (t) => `★彡[${t.toUpperCase()}]彡★`,
  },
  {
    id: "sty-wave-tilda",
    name: "Tilda Mirage",
    category: "stylish",
    transform: (t) => `~* ${mapChars(t, SCRIPT_BOLD_MAP)} *~`,
  },

  // 3. GAMING (11 styles)
  {
    id: "gam-faster-squad",
    name: "Faster FF 08 Tag",
    category: "gaming",
    transform: (t) => `𝘍𝘈𝘚𝘛𝘌𝘙 × ${t.toUpperCase()}`,
  },
  {
    id: "gam-1tap-god",
    name: "One-Tap Headshot",
    category: "gaming",
    transform: (t) => `[1-TAP] ${t.toUpperCase()}`,
  },
  {
    id: "gam-awm-sniper",
    name: "AWM Sniper King",
    category: "gaming",
    transform: (t) => `🎯 AWM // ${t.toUpperCase()}`,
  },
  {
    id: "gam-cs-ranked",
    name: "Clash Squad Beast",
    category: "gaming",
    transform: (t) => `CS•7-0 // ${t.toUpperCase()}`,
  },
  {
    id: "gam-m1887-shotty",
    name: "M1887 Rusher",
    category: "gaming",
    transform: (t) => `💥 M1887 • ${t.toUpperCase()}`,
  },
  {
    id: "gam-gloo-wall",
    name: "Fast Gloo 360",
    category: "gaming",
    transform: (t) => `🛡️ GLOO • ${t.toUpperCase()}`,
  },
  {
    id: "gam-toxic-skull",
    name: "Toxic Rusher",
    category: "gaming",
    transform: (t) => `☠️ ${t.toUpperCase()} ☠️`,
  },
  {
    id: "gam-blade-combat",
    name: "Katana Blade",
    category: "gaming",
    transform: (t) => `⚔️ ${t.toUpperCase()} ⚔️`,
  },
  {
    id: "gam-rusher-badge",
    name: "Rush Entry Frag",
    category: "gaming",
    transform: (t) => `⚡ RUSHER • ${mapChars(t.toUpperCase(), SANS_BOLD_MAP)}`,
  },
  {
    id: "gam-grandmaster-star",
    name: "Grandmaster 5-Star",
    category: "gaming",
    transform: (t) => `[GM★] ${t.toUpperCase()}`,
  },
  {
    id: "gam-ff08-number",
    name: "Faster Army 08",
    category: "gaming",
    transform: (t) => `${t.toUpperCase()} • 08 亗`,
  },

  // 4. PRO (10 styles)
  {
    id: "pro-brackets-esports",
    name: "Pro Esports Tag",
    category: "pro",
    transform: (t) => `【PRO】${t.toUpperCase()}`,
  },
  {
    id: "pro-slash-clean",
    name: "Pro Division Slash",
    category: "pro",
    transform: (t) => `TEAM // ${t.toUpperCase()}`,
  },
  {
    id: "pro-entry-arrow",
    name: "Apex Rusher Arrow",
    category: "pro",
    transform: (t) => `» ${t.toUpperCase()} «`,
  },
  {
    id: "pro-sans-bold-clean",
    name: "Pro Minimal Bold",
    category: "pro",
    transform: (t) => mapChars(t.toUpperCase(), SANS_BOLD_MAP),
  },
  {
    id: "pro-leader-bracket",
    name: "Esports Captain",
    category: "pro",
    transform: (t) => `『PRO』${mapChars(t.toUpperCase(), SANS_BOLD_MAP)}`,
  },
  {
    id: "pro-pipe-separator",
    name: "Pipe Separated Pro",
    category: "pro",
    transform: (t) => `PRO | ${t.toUpperCase()} 亗`,
  },
  {
    id: "pro-tournament-gold",
    name: "Champion Tier",
    category: "pro",
    transform: (t) => `🏆 ${t.toUpperCase()} 🏆`,
  },
  {
    id: "pro-vip-badge",
    name: "VIP Roster",
    category: "pro",
    transform: (t) => `『VIP』${t.toUpperCase()} ✓`,
  },
  {
    id: "pro-corner-bracket",
    name: "Corner Focus",
    category: "pro",
    transform: (t) => `「 ${t.toUpperCase()} 」`,
  },
  {
    id: "pro-godmode-777",
    name: "God Mode 777",
    category: "pro",
    transform: (t) => `${t.toUpperCase()} 亗 777`,
  },

  // 5. KING (10 styles)
  {
    id: "king-crown-heavy",
    name: "King of Free Fire",
    category: "king",
    transform: (t) => `👑 K I N G 👑 ${t.toUpperCase()}`,
  },
  {
    id: "king-monarch-crest",
    name: "Monarch Wings",
    category: "king",
    transform: (t) => `👑 ꧁${t.toUpperCase()}꧂ 👑`,
  },
  {
    id: "king-emperor-double",
    name: "Emperor Throne",
    category: "king",
    transform: (t) => `༒ ♛ ${t.toUpperCase()} ♛ ༒`,
  },
  {
    id: "king-black-crown",
    name: "Dark King",
    category: "king",
    transform: (t) => `♚ ${t.toUpperCase()} ♚`,
  },
  {
    id: "king-lord-tag",
    name: "Lord Title",
    category: "king",
    transform: (t) => `LORD • ${t.toUpperCase()} 亗`,
  },
  {
    id: "king-sovereign-script",
    name: "Sovereign Script",
    category: "king",
    transform: (t) => `👑 ${mapChars(t, SCRIPT_BOLD_MAP)} 👑`,
  },
  {
    id: "king-gothic-ruler",
    name: "Iron Ruler",
    category: "king",
    transform: (t) => `亗 ${mapChars(t.toUpperCase(), FRAKTUR_BOLD_MAP)} 亗`,
  },
  {
    id: "king-supreme-bracket",
    name: "Supreme Ruler",
    category: "king",
    transform: (t) => `【KING】${t.toUpperCase()}`,
  },
  {
    id: "king-gold-crown",
    name: "Golden Crown Solo",
    category: "king",
    transform: (t) => `👑 ${t.toUpperCase()} 👑`,
  },
  {
    id: "king-ruler-cross",
    name: "King Cross",
    category: "king",
    transform: (t) => `† 👑 ${t.toUpperCase()} 👑 †`,
  },

  // 6. QUEEN (10 styles)
  {
    id: "queen-heart-crown",
    name: "Queen of Hearts",
    category: "queen",
    transform: (t) => `👸 QUEEN • ${t}`,
  },
  {
    id: "queen-winged-heart",
    name: "Winged Empress",
    category: "queen",
    transform: (t) => `♡ ꧁${t}꧂ ♡`,
  },
  {
    id: "queen-sparkle-monarch",
    name: "Sparkle Princess",
    category: "queen",
    transform: (t) => `✨ ♛ ${t} ♛ ✨`,
  },
  {
    id: "queen-butterfly-wings",
    name: "Butterfly Queen",
    category: "queen",
    transform: (t) => `ʚ ${t} ɞ`,
  },
  {
    id: "queen-script-heart",
    name: "Heart Script",
    category: "queen",
    transform: (t) => `❥ ${mapChars(t, SCRIPT_BOLD_MAP)} ❥`,
  },
  {
    id: "queen-flower-lotus",
    name: "Lotus Empress",
    category: "queen",
    transform: (t) => `✿ ꧁${t}꧂ ✿`,
  },
  {
    id: "queen-rose-tag",
    name: "Rose Thorn",
    category: "queen",
    transform: (t) => `🌹 ${t} 🌹`,
  },
  {
    id: "queen-glamour-star",
    name: "Glamour Star",
    category: "queen",
    transform: (t) => `★ Q U E E N ★ ${t}`,
  },
  {
    id: "queen-tiara-diamond",
    name: "Tiara Diamond",
    category: "queen",
    transform: (t) => `💎 ${t} 💎`,
  },
  {
    id: "queen-white-heart",
    name: "Soft Queen",
    category: "queen",
    transform: (t) => `🤍 ${mapChars(t.toLowerCase(), SMALLCAPS_MAP)} 🤍`,
  },

  // 7. CUTE (10 styles)
  {
    id: "cute-bear-paws",
    name: "Teddy Bear",
    category: "cute",
    transform: (t) => `ʕ•ᴥ•ʔ ${t}`,
  },
  {
    id: "cute-cat-whiskers",
    name: "Kitty Whiskers",
    category: "cute",
    transform: (t) => `=^•^= ${t}`,
  },
  {
    id: "cute-sparkle-bubble",
    name: "Bubble Puff",
    category: "cute",
    transform: (t) => `(｡♥‿♥｡) ${t}`,
  },
  {
    id: "cute-sparkle-stars",
    name: "Little Star",
    category: "cute",
    transform: (t) => `✧･ﾟ:* ${t} *:･ﾟ✧`,
  },
  {
    id: "cute-cherry-blossom",
    name: "Cherry Blossom",
    category: "cute",
    transform: (t) => `🌸 ${t} 🌸`,
  },
  {
    id: "cute-soft-cloud",
    name: "Pastel Cloud",
    category: "cute",
    transform: (t) => `☁️ ${t} ☁️`,
  },
  {
    id: "cute-chibi-heart",
    name: "Chibi Angel",
    category: "cute",
    transform: (t) => `(っ˘з˘)っ ${t}`,
  },
  {
    id: "cute-sparkle-wings",
    name: "Fairy Wings",
    category: "cute",
    transform: (t) => `ʚϊɞ ${t} ʚϊɞ`,
  },
  {
    id: "cute-lollipop",
    name: "Sweet Candy",
    category: "cute",
    transform: (t) => `🍭 ${t} 🍭`,
  },
  {
    id: "cute-kawaii-smile",
    name: "Kawaii Rusher",
    category: "cute",
    transform: (t) => `(◕‿◕) ${t}`,
  },

  // 8. COOL (10 styles)
  {
    id: "cool-matrix-hacker",
    name: "Matrix Glitch",
    category: "cool",
    transform: (t) => `[0x0] ${t.toUpperCase()}`,
  },
  {
    id: "cool-ghost-phantom",
    name: "Ghost Phantom",
    category: "cool",
    transform: (t) => `👻 ${mapChars(t.toUpperCase(), SANS_BOLD_MAP)} 👻`,
  },
  {
    id: "cool-ice-frost",
    name: "Subzero Frost",
    category: "cool",
    transform: (t) => `❄️ ${t.toUpperCase()} ❄️`,
  },
  {
    id: "cool-lightning-strike",
    name: "Lightning Strike",
    category: "cool",
    transform: (t) => `⚡ ${mapChars(t.toUpperCase(), SANS_ITALIC_MAP)} ⚡`,
  },
  {
    id: "cool-shadow-hunter",
    name: "Shadow Hunter",
    category: "cool",
    transform: (t) => `𝕾𝖍𝖆𝖉𝖔𝖜 • ${t.toUpperCase()}`,
  },
  {
    id: "cool-bio-hazard",
    name: "Biohazard Vector",
    category: "cool",
    transform: (t) => `☣ ${t.toUpperCase()} ☣`,
  },
  {
    id: "cool-demon-cross",
    name: "Demon Cross",
    category: "cool",
    transform: (t) => `† ${t.toUpperCase()} †`,
  },
  {
    id: "cool-nuclear-hazard",
    name: "Nuclear Blast",
    category: "cool",
    transform: (t) => `☢️ ${t.toUpperCase()} ☢️`,
  },
  {
    id: "cool-samurai-katana",
    name: "Samurai Clan",
    category: "cool",
    transform: (t) => `⚔️ 𝘚𝘈𝘔𝘜𝘙𝘈𝘐 • ${t.toUpperCase()}`,
  },
  {
    id: "cool-wolf-lone",
    name: "Lone Wolf",
    category: "cool",
    transform: (t) => `🐺 ${t.toUpperCase()} 🐺`,
  },

  // 9. SYMBOLS (10 styles)
  {
    id: "sym-kanji-me",
    name: "Kanji Me Frame",
    category: "symbols",
    transform: (t) => `么 ${t.toUpperCase()} 么`,
  },
  {
    id: "sym-smiley-face",
    name: "Smiley Headshot",
    category: "symbols",
    transform: (t) => `ツ ${t.toUpperCase()} ツ`,
  },
  {
    id: "sym-shime-mark",
    name: "Closing Shime Mark",
    category: "symbols",
    transform: (t) => `〆 ${t.toUpperCase()} 〆`,
  },
  {
    id: "sym-khanda-chakra",
    name: "Khanda Emblem",
    category: "symbols",
    transform: (t) => `☬ ${t.toUpperCase()} ☬`,
  },
  {
    id: "sym-four-point-star",
    name: "Four-Pointed Star",
    category: "symbols",
    transform: (t) => `✦ ${t.toUpperCase()} ✦`,
  },
  {
    id: "sym-yin-yang",
    name: "Yin Yang Balance",
    category: "symbols",
    transform: (t) => `☯ ${t.toUpperCase()} ☯`,
  },
  {
    id: "sym-flower-crest",
    name: "Petal Crest",
    category: "symbols",
    transform: (t) => `ஐ ${t} ஐ`,
  },
  {
    id: "sym-cloud-dragon",
    name: "Dragon Cloud",
    category: "symbols",
    transform: (t) => `༄ ${t.toUpperCase()} ༄`,
  },
  {
    id: "sym-circle-target",
    name: "Bulls Eye Target",
    category: "symbols",
    transform: (t) => `◎ ${t.toUpperCase()} ◎`,
  },
  {
    id: "sym-multi-cross",
    name: "Multiplied Cross",
    category: "symbols",
    transform: (t) => `× ${t.toUpperCase()} ×`,
  },

  // 10. MINIMAL (10 styles)
  {
    id: "min-spaced-letters",
    name: "Spaced Wide Clean",
    category: "minimal",
    transform: (t) => t.toUpperCase().split("").join(" "),
  },
  {
    id: "min-bullet-dots",
    name: "Bullet Dot Separator",
    category: "minimal",
    transform: (t) => t.toUpperCase().split("").join(" • "),
  },
  {
    id: "min-clean-bars",
    name: "Single Vertical Bars",
    category: "minimal",
    transform: (t) => `| ${t.toUpperCase()} |`,
  },
  {
    id: "min-double-column",
    name: "Double Column Minimal",
    category: "minimal",
    transform: (t) => `|| ${t.toUpperCase()} ||`,
  },
  {
    id: "min-brackets-hollow",
    name: "Hollow Corner Angles",
    category: "minimal",
    transform: (t) => `『 ${t.toUpperCase()} 』`,
  },
  {
    id: "min-underbars",
    name: "Underline Stealth",
    category: "minimal",
    transform: (t) => `_${t.toUpperCase()}_`,
  },
  {
    id: "min-dash-bracket",
    name: "Dash Enclosure",
    category: "minimal",
    transform: (t) => `- ${t.toUpperCase()} -`,
  },
  {
    id: "min-slash-forward",
    name: "Double Forward Slash",
    category: "minimal",
    transform: (t) => `// ${t.toUpperCase()} //`,
  },
  {
    id: "min-aesthetic-lower",
    name: "Aesthetic Chill Lower",
    category: "minimal",
    transform: (t) => t.toLowerCase().split("").join(" "),
  },
  {
    id: "min-colon-simple",
    name: "Colon Dot Accent",
    category: "minimal",
    transform: (t) => `: ${t.toUpperCase()} :`,
  },
];

// Preset random gamertag generator pool
export const RANDOM_GAMER_TAGS = [
  "FASTER",
  "AMAN",
  "VIPER",
  "SHADOW",
  "PHOENIX",
  "GHOST",
  "REAPER",
  "BEAST",
  "SNIPER",
  "DRAGON",
  "TITAN",
  "BLAZE",
  "FROST",
  "THUNDER",
  "HUNTER",
  "NEXUS",
  "RAVEN",
  "STORM",
  "VALKYRIE",
  "WARRIOR",
  "APEX",
  "LEGEND",
  "VENOM",
  "CYBER",
  "ECHO",
  "SAVAGE",
  "KNIGHT",
  "HYDRA",
  "CHAMPION",
  "COBRA",
];
