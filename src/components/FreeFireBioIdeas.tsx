"use client";

import React, { useState, useMemo } from "react";
import { useToast } from "./Toast";
import { FREE_FIRE_BIOS, BioItem } from "@/data/seoContentData";
import {
  FileText,
  Copy,
  Check,
  Palette,
  Sparkles,
  Info,
  ShieldCheck,
  Flame,
} from "lucide-react";

type BioCategory = "All" | "V-Badge & Colors" | "Ranked & Rusher" | "Attitude & Savage" | "Duo & Squad";

export function FreeFireBioIdeas() {
  const { showToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<BioCategory>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: BioCategory[] = [
    "All",
    "V-Badge & Colors",
    "Ranked & Rusher",
    "Attitude & Savage",
    "Duo & Squad",
  ];

  const filteredList = useMemo(() => {
    if (selectedCategory === "All") return FREE_FIRE_BIOS;
    return FREE_FIRE_BIOS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleCopy = async (rawText: string, id: string) => {
    try {
      await navigator.clipboard.writeText(rawText);
      setCopiedId(id);
      showToast("Copied bio signature code to clipboard!", "success");
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  return (
    <section
      id="bio-ideas"
      className="py-16 space-y-8"
      aria-labelledby="bio-ideas-heading"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-red-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Palette className="w-3.5 h-3.5 text-gaming-red" />
            <span>Profile Customization</span>
          </div>
          <h2
            id="bio-ideas-heading"
            className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight"
          >
            Free Fire Bio Ideas & Color Code Signatures
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Enhance your in-game profile with stylish colored signatures, golden V-Badge symbols (Ⓥ), savage attitude quotes, and duo couple bios. Simply copy the code and paste it into your Free Fire profile signature box.
          </p>
        </div>

        <div className="text-xs font-mono text-zinc-400">
          Showing <span className="text-gaming-red font-bold">{filteredList.length}</span> bio designs
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
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

      {/* Bios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredList.map((item) => {
          const isCopied = copiedId === item.id;

          return (
            <div
              key={item.id}
              className={`p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-4 ${
                isCopied
                  ? "bg-red-950/70 border-gaming-red shadow-neon-red"
                  : "bg-zinc-950/90 border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900/80"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-heading font-bold text-sm text-white">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
                    {item.category}
                  </span>
                </div>

                {/* Live Preview Box */}
                <div className="p-3 rounded-xl bg-black/80 border border-zinc-800/80 text-xs text-zinc-200">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block mb-1">
                    In-Game Signature Preview:
                  </span>
                  <p className="font-semibold text-sm text-white">
                    {item.previewText}
                  </p>
                </div>

                {/* Raw Code Snippet */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block">
                    Copyable Bio Code:
                  </span>
                  <code className="block p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-red-300 break-all select-all">
                    {item.rawBio}
                  </code>
                </div>
              </div>

              {/* Action & Tags */}
              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(item.rawBio, item.id)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 ${
                    isCopied
                      ? "bg-emerald-600 text-white border-emerald-500 shadow-neon-red"
                      : "bg-zinc-900 hover:bg-gaming-red text-zinc-200 hover:text-white border-zinc-700 hover:border-gaming-red"
                  }`}
                  aria-label={`Copy bio code for ${item.title}`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guide Note on How Color Codes Work */}
      <div className="p-5 rounded-2xl bg-zinc-950/90 border border-zinc-800 flex items-start gap-3.5 text-xs text-zinc-300">
        <Info className="w-5 h-5 text-gaming-red shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="text-white font-bold block">
            How to use Color Codes in your Free Fire Profile Signature:
          </strong>
          <p className="text-zinc-400 leading-relaxed">
            Free Fire uses BBCode style tags in the signature field. <code>[b]</code> makes the text bold, <code>[c]</code> centers the text, and <code>[RRGGBB]</code> (hexadecimal color codes such as <code>[ffd700]</code> for gold, <code>[ff0000]</code> for bright red, and <code>[00ffff]</code> for cyan) paints subsequent words in that vibrant hue. Copy the code above, open your Free Fire profile, click the edit pencil on your Signature/Bio box, and paste it.
          </p>
        </div>
      </div>
    </section>
  );
}

