"use client";

import React, { useState, useMemo } from "react";
import { useToast } from "./Toast";
import { PRO_PLAYER_NAMES, ProPlayerItem } from "@/data/seoContentData";
import {
  Trophy,
  Copy,
  Check,
  Search,
  Filter,
  Flame,
  Sparkles,
  ExternalLink,
  Crown,
} from "lucide-react";

type CategoryFilter = "All" | "India" | "Global" | "Clan & Tags";

export function ProPlayerNames() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: CategoryFilter[] = ["All", "India", "Global", "Clan & Tags"];

  const filteredList = useMemo(() => {
    let list = [...PRO_PLAYER_NAMES];

    if (selectedCategory !== "All") {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.playerOrClan.toLowerCase().includes(q) ||
          item.role.toLowerCase().includes(q) ||
          item.style.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const handleCopy = async (name: string, id: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedId(id);
      showToast(`Copied pro name "${name}"!`, "success");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  return (
    <section
      id="pro-names"
      className="py-16 space-y-8"
      aria-labelledby="pro-names-heading"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-red-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Esports & Creators</span>
          </div>
          <h2
            id="pro-names-heading"
            className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight"
          >
            Pro Player Free Fire Names & Clan Tags
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Get the exact stylish font layouts, crown insignias (亗), and guild brackets used by famous Free Fire pros like Raistar, Ajjubhai (Total Gaming), Nobru, B2K, White444, and Badge 99.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400">
          Showing <span className="text-gaming-red font-bold">{filteredList.length}</span> pro styles
        </div>
      </div>

      {/* Search and Category Filter */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-8 relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search pro player names (e.g. Raistar, Nobru, Total Gaming, B2K)..."
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

        <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none" role="tablist">
          <Filter className="w-4 h-4 text-zinc-500 shrink-0 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gaming-red border-red-400 text-white shadow-neon-red font-black"
                  : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Pro Names Grid */}
      {filteredList.length === 0 ? (
        <div className="p-10 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-2">
          <p className="text-zinc-300 font-heading font-bold text-base">
            No pro names matched &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-zinc-500">
            Try searching for another player or switch to &ldquo;All&rdquo;.
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
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-300">
                      {item.playerOrClan}
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      {item.role}
                    </span>
                  </div>
                </div>

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
                  aria-label={`Copy pro name ${item.name}`}
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

      {/* Pro Styler Cross-Link Box */}
      <div className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-white font-heading font-bold text-sm">
            <Sparkles className="w-4 h-4 text-gaming-red" />
            <span>Want to create your own pro clan tag with these fonts?</span>
          </div>
          <p className="text-xs text-zinc-400">
            Use our interactive Free Fire Nickname Generator at the top of the page to generate 100+ custom designs for your personal clan tag or squad name.
          </p>
        </div>

        <a
          href="#generator"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-gaming-red border border-zinc-700 hover:border-red-500 text-white text-xs font-heading font-bold uppercase tracking-wider transition-colors"
        >
          <span>Open Generator</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

