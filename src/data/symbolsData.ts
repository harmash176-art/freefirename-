// ==============================================================================
// Faster FF 08 - Decorative Unicode Symbols Library & Combiner
// Categorized collections of symbols for Free Fire gamertags
// ==============================================================================

export interface SymbolCategory {
  id: string;
  name: string;
  symbols: string[];
}

export const SYMBOL_CATEGORIES: SymbolCategory[] = [
  {
    id: "wings",
    name: "Wings & Frames",
    symbols: [
      "꧁", "꧂", "༺", "༻", "ʚ", "ɞ", "༒", "ஐ", "༄", "࿐", "༇", "᭄", "ʚϊɞ", "彡", "ミ"
    ],
  },
  {
    id: "crowns",
    name: "Crowns & Royalty",
    symbols: [
      "亗", "👑", "♛", "♚", "♕", "♔", "⚜", "🔱", "🎩", "💍"
    ],
  },
  {
    id: "combat",
    name: "Combat & Weapons",
    symbols: [
      "⚔️", "🎯", "☠️", "†", "💥", "🔫", "🏹", "🛡️", "⚡", "🔥", "☣️", "☢️", "🩸"
    ],
  },
  {
    id: "stars",
    name: "Stars & Sparkles",
    symbols: [
      "★", "☆", "✦", "✧", "✨", "✪", "✫", "✬", "✭", "✮", "✯", "✰", "✵", "✸"
    ],
  },
  {
    id: "kanji",
    name: "Kanji & Asian",
    symbols: [
      "么", "乂", "ツ", "〆", "神", "氣", "龍", "虎", "鬼", "死", "魔", "王", "武", "影", "道"
    ],
  },
  {
    id: "esports",
    name: "Esports & Shapes",
    symbols: [
      "✓", "✕", "×", "•", "●", "◆", "◇", "◈", "▲", "▼", "►", "◄", "»", "«", "♾️", "☯", "☬"
    ],
  },
  {
    id: "cute",
    name: "Hearts & Cute",
    symbols: [
      "♡", "♥", "❥", "🤍", "💖", "✿", "❀", "🌸", "🌹", "⚘", "🍭", "🧸", "☁️"
    ],
  },
  {
    id: "brackets",
    name: "Brackets & Borders",
    symbols: [
      "『", "』", "【", "】", "〖", "〗", "「", "」", "〔", "〕", "《", "》", "⟨", "⟩", "||", "//"
    ],
  },
];
