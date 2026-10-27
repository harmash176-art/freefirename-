"use client";

import React, { useState, useMemo } from "react";
import { useToast } from "./Toast";
import { SYMBOL_CATEGORIES, SymbolCategory } from "@/data/symbolsData";
import {
  Copy,
  Check,
  RotateCcw,
  Sparkles,
  Wand2,
  Plus,
  Shield,
  Layers,
  Crown,
  Flame,
} from "lucide-react";

export function SymbolsLibrary() {
  const { showToast } = useToast();
  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const [workbenchText, setWorkbenchText] = useState("FASTER");
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);
  const [copiedWorkbench, setCopiedWorkbench] = useState(false);

  // Filter symbols by category
  const filteredCategories = useMemo(() => {
    if (activeCategoryId === "all") return SYMBOL_CATEGORIES;
    return SYMBOL_CATEGORIES.filter((c) => c.id === activeCategoryId);
  }, [activeCategoryId]);

  // Insert symbol into workbench
  const handleInsertSymbol = (symbol: string) => {
    setWorkbenchText((prev) => prev + symbol);
    showToast(`Added "${symbol}" to your nickname combiner!`, "info");
  };

  // Copy individual symbol
  const handleCopySymbol = async (symbol: string) => {
    try {
      await navigator.clipboard.writeText(symbol);
      setCopiedSymbol(symbol);
      showToast(`Copied symbol "${symbol}" to clipboard!`, "success");
      setTimeout(() => setCopiedSymbol(null), 1500);
    } catch {
      showToast("Unable to copy symbol", "error");
    }
  };

  // Copy workbench text
  const handleCopyWorkbench = async () => {
    if (!workbenchText.trim()) {
      showToast("Enter or combine a nickname first.", "info");
      return;
    }
    try {
      await navigator.clipboard.writeText(workbenchText);
      setCopiedWorkbench(true);
      showToast(`Copied combined nickname "${workbenchText}"!`, "success");
      setTimeout(() => setCopiedWorkbench(false), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  // Quick preset wrappers
  const wrapWith = (left: string, right: string) => {
    setWorkbenchText((prev) => `${left}${prev.trim()}${right}`);
    showToast("Wrapped nickname with symbols!", "info");
  };

  // Clear all in workbench
  const handleClearAll = () => {
    setWorkbenchText("");
    showToast("Combiner cleared.", "info");
  };

  const charLength = Array.from(workbenchText).length;

  return (
    <section id="symbols" className="py-16 space-y-8" aria-labelledby="symbols-heading">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-red-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gaming-red" />
            <span>Unicode Symbols & Styler</span>
          </div>
          <h2 id="symbols-heading" className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
            Free Fire Symbols Library & Combiner
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Click any symbol to copy it or combine decorative wings, crowns, crosshairs, and kanji directly with your nickname.
          </p>
        </div>
      </div>

      {/* Interactive Nickname Combiner Workbench */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border-2 border-red-500/40 shadow-2xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
          <div className="flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-gaming-red" />
            <h3 className="font-heading font-black text-lg sm:text-xl text-white uppercase tracking-wide">
              Nickname Combiner Workbench
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>Length: <strong className="text-white">{charLength}</strong> chars</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              charLength <= 12 ? "bg-emerald-950 text-emerald-400 border border-emerald-500/40" : "bg-amber-950 text-amber-400 border border-amber-500/40"
            }`}>
              {charLength <= 12 ? "Free Fire Safe" : "Check in-game limit"}
            </span>
          </div>
        </div>

        {/* Workbench Input */}
        <div className="relative">
          <input
            type="text"
            value={workbenchText}
            onChange={(e) => setWorkbenchText(e.target.value)}
            placeholder="Type your name or click symbols below to insert..."
            className="w-full bg-black/90 border-2 border-zinc-700 focus:border-gaming-red focus:ring-2 focus:ring-gaming-red/50 rounded-xl px-4 py-3.5 text-lg sm:text-2xl font-bold font-heading text-white placeholder-zinc-600 outline-none transition-all shadow-inner"
          />
        </div>

        {/* Quick Style Wrappers & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mr-1">
              Quick Wrap:
            </span>
            <button
              type="button"
              onClick={() => wrapWith("꧁༺", "༻꧂")}
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 hover:text-white border border-zinc-700 hover:border-red-500 transition-colors"
            >
              ꧁༺ Wings ༻꧂
            </button>
            <button
              type="button"
              onClick={() => wrapWith("亗 ", " 亗")}
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 hover:text-white border border-zinc-700 hover:border-red-500 transition-colors"
            >
              亗 Crown 亗
            </button>
            <button
              type="button"
              onClick={() => wrapWith("『", "』")}
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 hover:text-white border border-zinc-700 hover:border-red-500 transition-colors"
            >
              『 Brackets 』
            </button>
            <button
              type="button"
              onClick={() => wrapWith("么 ", " 么")}
              className="px-2.5 py-1 rounded bg-zinc-900 hover:bg-zinc-800 text-xs text-zinc-300 hover:text-white border border-zinc-700 hover:border-red-500 transition-colors"
            >
              么 Kanji 么
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleClearAll}
              className="px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>

            <button
              type="button"
              onClick={handleCopyWorkbench}
              disabled={!workbenchText.trim()}
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-red-600 to-gaming-red hover:from-red-500 hover:to-red-500 text-white font-heading text-xs font-bold uppercase tracking-wider shadow-neon-red flex items-center gap-1.5 transition-all disabled:opacity-40 cursor-pointer"
            >
              {copiedWorkbench ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Combined Name</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Symbol Category Filter */}
      <div className="space-y-4">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Symbol Categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategoryId === "all"}
            onClick={() => setActiveCategoryId("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
              activeCategoryId === "all"
                ? "bg-gaming-red border-red-400 text-white shadow-neon-red font-black"
                : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
            }`}
          >
            All Symbols
          </button>
          {SYMBOL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategoryId === cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                activeCategoryId === cat.id
                  ? "bg-gaming-red border-red-400 text-white shadow-neon-red font-black"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Symbols Showcase Display */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="space-y-3">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2">
                <h4 className="text-xs uppercase font-bold tracking-wider text-red-300 font-heading">
                  {cat.name} ({cat.symbols.length})
                </h4>
                <span className="text-[11px] text-zinc-500">
                  Click symbol to insert, or click Copy
                </span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2.5">
                {cat.symbols.map((sym, index) => {
                  const isCopied = copiedSymbol === sym;

                  return (
                    <div
                      key={index}
                      className="group p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-red-500/60 transition-all flex flex-col items-center justify-between gap-2 shadow-sm"
                    >
                      {/* Clickable symbol to insert */}
                      <button
                        type="button"
                        onClick={() => handleInsertSymbol(sym)}
                        className="w-full text-center py-2 text-2xl text-white group-hover:text-gaming-red group-hover:scale-110 transition-all select-none cursor-pointer"
                        title={`Click to insert ${sym} into combiner`}
                        aria-label={`Insert symbol ${sym}`}
                      >
                        {sym}
                      </button>

                      {/* Mini Copy Button */}
                      <button
                        type="button"
                        onClick={() => handleCopySymbol(sym)}
                        className={`w-full py-1 px-1.5 rounded text-[10px] font-heading font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 ${
                          isCopied
                            ? "bg-emerald-600 text-white"
                            : "bg-zinc-900 group-hover:bg-red-950 group-hover:text-red-300 text-zinc-400 border border-zinc-800"
                        }`}
                        title="Copy single symbol to clipboard"
                        aria-label={`Copy symbol ${sym}`}
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-2.5 h-2.5" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-2.5 h-2.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
