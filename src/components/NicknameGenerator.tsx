"use client";

import React, { useState, useMemo } from "react";
import { useToast } from "./Toast";
import {
  NICKNAME_STYLES,
  NicknameStyle,
  NickCategory,
  RANDOM_GAMER_TAGS,
} from "@/data/nicknameStyles";
import {
  Copy,
  Check,
  Sparkles,
  Shuffle,
  RotateCcw,
  Wand2,
  Filter,
  Info,
  CheckCheck,
  Flame,
  PlusCircle,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

type ActiveCategory = "all" | NickCategory;

export function NicknameGenerator() {
  const { showToast } = useToast();
  const [inputName, setInputName] = useState("FASTER");
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("all");
  const [displayCount, setDisplayCount] = useState<number>(24);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const MAX_INPUT_CHARS = 24;

  const categories: { id: ActiveCategory; label: string; count: number }[] = [
    { id: "all", label: "All Styles", count: NICKNAME_STYLES.length },
    { id: "popular", label: "Popular", count: NICKNAME_STYLES.filter((s) => s.category === "popular").length },
    { id: "stylish", label: "Stylish", count: NICKNAME_STYLES.filter((s) => s.category === "stylish").length },
    { id: "gaming", label: "Gaming", count: NICKNAME_STYLES.filter((s) => s.category === "gaming").length },
    { id: "pro", label: "Pro", count: NICKNAME_STYLES.filter((s) => s.category === "pro").length },
    { id: "king", label: "King", count: NICKNAME_STYLES.filter((s) => s.category === "king").length },
    { id: "queen", label: "Queen", count: NICKNAME_STYLES.filter((s) => s.category === "queen").length },
    { id: "cute", label: "Cute", count: NICKNAME_STYLES.filter((s) => s.category === "cute").length },
    { id: "cool", label: "Cool", count: NICKNAME_STYLES.filter((s) => s.category === "cool").length },
    { id: "symbols", label: "Symbols", count: NICKNAME_STYLES.filter((s) => s.category === "symbols").length },
    { id: "minimal", label: "Minimal", count: NICKNAME_STYLES.filter((s) => s.category === "minimal").length },
  ];

  // Filter styles by category
  const filteredStyles = useMemo(() => {
    if (activeCategory === "all") return NICKNAME_STYLES;
    return NICKNAME_STYLES.filter((style) => style.category === activeCategory);
  }, [activeCategory]);

  // Compute transformed results
  const allResults = useMemo(() => {
    const raw = inputName.trim();
    if (!raw) return [];
    return filteredStyles.map((style) => ({
      id: style.id,
      styleName: style.name,
      category: style.category,
      text: style.transform(raw),
      charLength: Array.from(style.transform(raw)).length,
    }));
  }, [inputName, filteredStyles]);

  // Paginated/limited view
  const visibleResults = useMemo(() => {
    return allResults.slice(0, displayCount);
  }, [allResults, displayCount]);

  const hasMore = allResults.length > displayCount;

  // Handle Random Name
  const handleRandomName = () => {
    const randomPick =
      RANDOM_GAMER_TAGS[Math.floor(Math.random() * RANDOM_GAMER_TAGS.length)];
    setInputName(randomPick);
    showToast(`Loaded random gamertag "${randomPick}"!`, "info");
  };

  // Handle Clear
  const handleClear = () => {
    setInputName("");
    showToast("Input cleared.", "info");
  };

  // Handle Generate More
  const handleGenerateMore = () => {
    setDisplayCount((prev) => Math.min(prev + 24, allResults.length));
    showToast("Loaded more stylish nickname variations!", "success");
  };

  // Handle Copy Single Card
  const handleCopySingle = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      showToast(`Copied "${text}"!`, "success");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  // Handle Copy All
  const handleCopyAll = async () => {
    if (allResults.length === 0) {
      showToast("Enter a nickname to generate styles first.", "info");
      return;
    }
    const allText = allResults.map((r) => r.text).join("\n");
    try {
      await navigator.clipboard.writeText(allText);
      setCopiedAll(true);
      showToast(`Copied all ${allResults.length} stylish nicknames!`, "success");
      setTimeout(() => setCopiedAll(false), 2500);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  // Length helper calculations for Free Fire
  const inputLength = Array.from(inputName).length;
  const isOptimalLength = inputLength > 0 && inputLength <= 12;
  const isNearLimit = inputLength > 12 && inputLength <= 14;
  const isOverLimit = inputLength > 14;

  return (
    <div className="space-y-8" id="generator">
      {/* Header & Status */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-red-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Flame className="w-3.5 h-3.5 text-gaming-red animate-pulse" />
            <span>Faster FF 08 • 100+ Unicode Styles</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight">
            Free Fire Stylish Name Generator
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Type your gamertag below to generate 100+ original variations with crowns, wings, esports fonts, and decorative Free Fire symbols instantly.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyAll}
            disabled={allResults.length === 0}
            className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 hover:border-emerald-500/50 transition-all font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2 disabled:opacity-40 cursor-pointer shadow-md"
            title="Copy all generated variations to clipboard"
          >
            {copiedAll ? (
              <>
                <CheckCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">All Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span>Copy Complete List ({allResults.length})</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Input Control Box */}
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-bold uppercase tracking-wider text-zinc-300">
            <label htmlFor="nickname-input-box" className="flex items-center gap-2 text-sm text-white">
              <span>Enter your nickname</span>
              <span className="text-gaming-red font-black">*</span>
            </label>

            {/* Free Fire Name Length Helper */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-zinc-400">Length: {inputLength} / {MAX_INPUT_CHARS}</span>
              {inputLength > 0 && (
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${
                    isOptimalLength
                      ? "bg-emerald-950/80 text-emerald-400 border border-emerald-500/40"
                      : isNearLimit
                      ? "bg-amber-950/80 text-amber-400 border border-amber-500/40"
                      : "bg-red-950/80 text-red-400 border border-red-500/40"
                  }`}
                >
                  {isOptimalLength && "✓ Free Fire Safe (≤12 chars)"}
                  {isNearLimit && "⚠️ Near Game Limit (12-14 chars)"}
                  {isOverLimit && "⛔ May exceed in-game limit (>14)"}
                </span>
              )}
            </div>
          </div>

          {/* Large Hero Input Field */}
          <div className="relative flex items-center">
            <input
              id="nickname-input-box"
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              maxLength={MAX_INPUT_CHARS}
              placeholder="Enter your nickname (e.g. FASTER, AMAN, VIPER)..."
              autoComplete="off"
              className="w-full bg-zinc-950 border-2 border-red-500/40 focus:border-gaming-red focus:ring-2 focus:ring-gaming-red/50 rounded-2xl px-5 py-4 text-white placeholder-zinc-600 transition-all outline-none font-heading font-bold text-lg sm:text-2xl shadow-neon-red"
            />
            {inputName && (
              <button
                type="button"
                onClick={handleClear}
                className="absolute right-4 px-3 py-1.5 text-xs text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-700 hover:border-red-500 transition-colors"
                title="Clear input"
                aria-label="Clear nickname input"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Action Row: Random, Generate More, Quick Presets */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleRandomName}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700 hover:border-gaming-red transition-all text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5 text-gaming-red" />
              <span>Random Name</span>
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 rounded-xl bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 transition-all text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* Quick Click Gamertags */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider shrink-0">
              Try:
            </span>
            {["FASTER", "AMAN", "VIPER", "SHADOW", "BEAST", "GHOST"].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setInputName(tag)}
                className={`text-xs px-2.5 py-1 rounded-md border font-mono transition-all ${
                  inputName === tag
                    ? "bg-red-950/80 border-gaming-red text-white"
                    : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Category Filter Tabs */}
        <div className="pt-2">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Style Categories">
            <Filter className="w-4 h-4 text-zinc-500 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setDisplayCount(24);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-red-600 to-gaming-red border-red-400 text-white shadow-neon-red font-black"
                    : "bg-zinc-950/80 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 text-[10px] opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {!inputName.trim() && (
        <div className="p-10 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-3">
          <Sparkles className="w-10 h-10 text-zinc-600 mx-auto" />
          <h3 className="font-heading font-black text-xl text-zinc-200 uppercase">
            Type Your Name Above To Preview 100+ Styles
          </h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
            Enter your gamertag or click the <strong className="text-white">Random Name</strong> button to generate instant Free Fire-compatible nicknames with crowns, wings, and Unicode styles.
          </p>
        </div>
      )}

      {/* Generated Cards Grid */}
      {inputName.trim() && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gaming-red" />
              <span className="font-bold uppercase tracking-wider text-zinc-200 font-heading">
                Showing {visibleResults.length} of {allResults.length} Styles
              </span>
            </div>
            <span className="text-[11px] text-zinc-500">
              Click any card or copy button to copy directly to clipboard
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {visibleResults.map((item) => {
              const isCopied = copiedId === item.id;
              const isSafeFF = item.charLength <= 14;

              return (
                <div
                  key={item.id}
                  onClick={() => handleCopySingle(item.text, item.id)}
                  className={`group p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 shadow-md ${
                    isCopied
                      ? "bg-red-950/70 border-gaming-red shadow-neon-red scale-[1.01]"
                      : "bg-zinc-950/90 border-zinc-800/90 hover:border-red-500/60 hover:bg-zinc-900/90 hover:shadow-neon-red"
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-base sm:text-lg font-bold text-white group-hover:text-gaming-red transition-colors tracking-wide break-words select-all">
                      {item.text}
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                        {item.styleName}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500">
                        {item.charLength} chars
                      </span>
                      {!isSafeFF && (
                        <span className="text-[9px] font-bold text-amber-400 bg-amber-950/60 px-1 rounded border border-amber-500/30">
                          Long
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySingle(item.text, item.id);
                    }}
                    className={`shrink-0 px-3 py-2 rounded-lg border text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      isCopied
                        ? "bg-emerald-600 text-white border-emerald-500 shadow-neon-red"
                        : "bg-zinc-900 group-hover:bg-gaming-red group-hover:text-white text-zinc-300 border-zinc-700 group-hover:border-gaming-red"
                    }`}
                    title="Copy to clipboard"
                    aria-label={`Copy ${item.text}`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Generate More Button */}
          {hasMore && (
            <div className="text-center pt-4">
              <button
                type="button"
                onClick={handleGenerateMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-none clip-esports-sm bg-gradient-to-r from-red-600 to-gaming-red hover:from-red-500 hover:to-red-500 text-white font-heading font-bold uppercase tracking-wider shadow-neon-red transition-all cursor-pointer"
              >
                <PlusCircle className="w-4 h-4" />
                <span>Generate More Styles ({allResults.length - visibleResults.length} remaining)</span>
              </button>
            </div>
          )}

          {/* In-Game Name Length Helper Note */}
          <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 flex items-start gap-3 text-xs text-zinc-400 mt-6">
            <Info className="w-4 h-4 text-gaming-red shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-zinc-200">Free Fire In-Game Character Limit Tip:</strong>
              <p className="leading-relaxed text-zinc-400">
                Garena Free Fire allows up to 12 characters (or 14 depending on specific symbols). If a generated style is too long for the game, try choosing a shorter root word or one of our <strong className="text-zinc-200">Minimal</strong> styles.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
