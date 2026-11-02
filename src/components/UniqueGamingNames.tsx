"use client";

import React, { useState, useMemo } from "react";
import { useToast } from "./Toast";
import { UNIQUE_GAMING_NAMES, UniqueNameItem } from "@/data/seoContentData";
import {
  Sparkles,
  Copy,
  Check,
  Search,
  Filter,
  Wand2,
  Zap,
  Users,
} from "lucide-react";

type UniqueCategory = "All" | "Solo Rusher" | "Royalty & King" | "Mythic & Dark" | "Short & Clean" | "Duo & Squad";

export function UniqueGamingNames() {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<UniqueCategory>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: UniqueCategory[] = [
    "All",
    "Solo Rusher",
    "Royalty & King",
    "Mythic & Dark",
    "Short & Clean",
    "Duo & Squad",
  ];

  const filteredList = useMemo(() => {
    let list = [...UNIQUE_GAMING_NAMES];

    if (selectedCategory !== "All") {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.vibe.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const handleCopy = async (name: string, id: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedId(id);
      showToast(`Copied unique name "${name}"!`, "success");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  const scrollToGenerator = (name: string) => {
    const generatorSection = document.getElementById("generator");
    if (generatorSection) {
      generatorSection.scrollIntoView({ behavior: "smooth" });
      showToast(`Scroll up to style "${name}" with 100+ fonts!`, "info");
    }
  };

  return (
    <section
      id="unique-names"
      className="py-16 space-y-8"
      aria-labelledby="unique-names-heading"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-red-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Zap className="w-3.5 h-3.5 text-gaming-red" />
            <span>Original Gamer Tags</span>
          </div>
          <h2
            id="unique-names-heading"
            className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight"
          >
            Unique Gaming Names & Free Fire Aliases
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Looking for a standout gaming tag? Discover fresh, non-cliché names categorized for aggressive solo rushers, royal clan leaders, dark mythic gamers, and duo partners.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400">
          Showing <span className="text-gaming-red font-bold">{filteredList.length}</span> unique names
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        <div className="md:col-span-8 relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search unique names (e.g. Viper, King, Shadow, Duo)..."
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

      {/* Names Grid */}
      {filteredList.length === 0 ? (
        <div className="p-10 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-2">
          <p className="text-zinc-300 font-heading font-bold text-base">
            No unique names matched &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="text-xs text-zinc-500">
            Try a different search term or select &ldquo;All&rdquo;.
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
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-gaming-red transition-colors tracking-wide break-words select-all font-heading">
                    {item.name}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 mt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-red-300">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {item.vibe}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(item.name, item.id);
                    }}
                    className={`px-3 py-2 rounded-lg border text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                      isCopied
                        ? "bg-emerald-600 text-white border-emerald-500 shadow-neon-red"
                        : "bg-zinc-900 group-hover:bg-gaming-red group-hover:text-white text-zinc-300 border-zinc-700 group-hover:border-gaming-red"
                    }`}
                    aria-label={`Copy unique name ${item.name}`}
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
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

