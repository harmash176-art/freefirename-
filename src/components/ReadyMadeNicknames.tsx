"use client";

import React, { useState, useMemo } from "react";
import { useToast } from "./Toast";
import {
  READY_MADE_NICKNAMES,
  ReadyMadeNick,
  ReadyMadeCategory,
} from "@/data/readyMadeNicknames";
import {
  Search,
  Copy,
  Check,
  Filter,
  ArrowUpDown,
  Sparkles,
  ShieldAlert,
  Flame,
  Tag,
} from "lucide-react";

type SortOption = "popular" | "az" | "za" | "shortest" | "longest";

export function ReadyMadeNicknames() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<ReadyMadeCategory>("All");
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: ReadyMadeCategory[] = [
    "All",
    "Pro & Esports",
    "King & Royalty",
    "Queen & Cute",
    "Mythic & Dark",
    "Sniper & Rusher",
    "Minimal & Short",
  ];

  // Filtering & Sorting
  const filteredList = useMemo(() => {
    let list = [...READY_MADE_NICKNAMES];

    // Category filter
    if (selectedCategory !== "All") {
      list = list.filter((item) => item.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Sorting
    list.sort((a, b) => {
      if (sortBy === "popular") return b.rating - a.rating;
      if (sortBy === "az") return a.name.localeCompare(b.name);
      if (sortBy === "za") return b.name.localeCompare(a.name);
      if (sortBy === "shortest") return a.length - b.length;
      if (sortBy === "longest") return b.length - a.length;
      return 0;
    });

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // Copy handler
  const handleCopy = async (name: string, id: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedId(id);
      showToast(`Copied ready-made nickname "${name}"!`, "success");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  return (
    <section id="ready-made" className="py-16 space-y-8" aria-labelledby="ready-made-heading">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-red-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gaming-red" />
            <span>Curated Collection</span>
          </div>
          <h2 id="ready-made-heading" className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
            Ready-Made Free Fire Nicknames
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Browse our hand-crafted collection of ready-to-use Free Fire gamertags for pros, clan leaders, rushers, and stylish players.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400">
          Showing <span className="text-gaming-red font-bold">{filteredList.length}</span> nicknames
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Search Input */}
        <div className="md:col-span-8 relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ready-made nicknames by name, clan or style..."
            className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-gaming-red focus:ring-1 focus:ring-gaming-red rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="md:col-span-4 relative flex items-center">
          <ArrowUpDown className="w-4 h-4 text-zinc-500 absolute left-3.5 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            aria-label="Sort ready-made nicknames"
            className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-gaming-red rounded-xl pl-10 pr-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-300 outline-none cursor-pointer appearance-none"
          >
            <option value="popular">Most Popular First</option>
            <option value="az">Name (A - Z)</option>
            <option value="za">Name (Z - A)</option>
            <option value="shortest">Shortest Length First</option>
            <option value="longest">Longest Length First</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Ready-Made Categories">
        <Filter className="w-4 h-4 text-zinc-500 shrink-0 mr-1" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            role="tab"
            aria-selected={selectedCategory === cat}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
              selectedCategory === cat
                ? "bg-gaming-red border-red-400 text-white shadow-neon-red font-black"
                : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Nicknames Grid */}
      {filteredList.length === 0 ? (
        <div className="p-10 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-2">
          <p className="text-zinc-300 font-heading font-bold text-base">
            No ready-made nicknames matched &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-zinc-500">
            Try a different search keyword or switch to &ldquo;All&rdquo; categories.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredList.map((item) => {
            const isCopied = copiedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => handleCopy(item.name, item.id)}
                className={`group p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 shadow-md ${
                  isCopied
                    ? "bg-red-950/70 border-gaming-red shadow-neon-red"
                    : "bg-zinc-950/90 border-zinc-800 hover:border-red-500/60 hover:bg-zinc-900/90 hover:shadow-neon-red"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-gaming-red transition-colors tracking-wide break-words select-all">
                    {item.name}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-red-300">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500">
                      {item.length} chars
                    </span>
                  </div>
                </div>

                {/* Working Copy Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(item.name, item.id);
                  }}
                  className={`shrink-0 px-3 py-2 rounded-lg border text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    isCopied
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-neon-red"
                      : "bg-zinc-900 group-hover:bg-gaming-red group-hover:text-white text-zinc-300 border-zinc-700 group-hover:border-gaming-red"
                  }`}
                  aria-label={`Copy ${item.name}`}
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
      )}

      {/* Game Compatibility Advisory Callout */}
      <div className="p-5 rounded-2xl bg-zinc-950/90 border border-amber-500/30 flex items-start gap-3.5 text-xs text-zinc-300">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-white font-bold block">
            Special Character Compatibility Advisory:
          </strong>
          <p className="text-zinc-400 leading-relaxed">
            While most Unicode symbols and stylistic fonts (wings ꧁ ꧂, crowns 亗, kanji 么) work perfectly inside Garena Free Fire, certain special symbols may not be supported by every smartphone OS or game patch (appearing as a box &ldquo;□&rdquo; or blank space). Always test in Free Fire nickname change preview before confirming your name change card.
          </p>
        </div>
      </div>
    </section>
  );
}
