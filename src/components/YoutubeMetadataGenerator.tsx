"use client";

import React, { useState } from "react";
import { useToast } from "./Toast";
import { generateLocalYoutubeMetadata, GeneratedMetadata } from "@/data/youtubeTemplates";
import { Copy, Check, Wand2, Hash, FileText, Sparkles, Tag, CheckCheck, RefreshCw } from "lucide-react";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";

type VideoCategory = "Headshots" | "Clash Squad" | "Rank Push" | "Tutorial" | "Shorts";
type VideoTone = "Hype" | "Pro Guide" | "Montage" | "Viral";

export function YoutubeMetadataGenerator() {
  const { showToast } = useToast();
  const [topic, setTopic] = useState("1v4 Desert Eagle Clutch in Clash Squad");
  const [category, setCategory] = useState<VideoCategory>("Clash Squad");
  const [tone, setTone] = useState<VideoTone>("Hype");
  const [data, setData] = useState<GeneratedMetadata>(() =>
    generateLocalYoutubeMetadata("1v4 Desert Eagle Clutch in Clash Squad", "Clash Squad", "Hype")
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const categories: VideoCategory[] = ["Clash Squad", "Headshots", "Rank Push", "Tutorial", "Shorts"];
  const tones: VideoTone[] = ["Hype", "Pro Guide", "Montage", "Viral"];

  const presets = [
    "1v4 Desert Eagle Clutch",
    "Grandmaster Rank Push Solo",
    "Secret One-Tap Sensitivity",
    "Super Fast Gloo Wall Drill",
    "M1887 Shotgun Highlights",
    "7-0 Clash Squad Clean Sweep",
  ];

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!topic.trim()) {
      showToast("Please enter a video topic or highlight description.", "info");
      return;
    }

    const generated = generateLocalYoutubeMetadata(topic, category, tone);
    setData(generated);
    showToast("Generated viral YouTube titles & description instantly!", "success");
  };

  const copyText = async (text: string, key: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKey(key);
      showToast(`Copied ${label} to clipboard!`, "success");
      setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      showToast("Unable to copy to clipboard", "error");
    }
  };

  return (
    <div className="space-y-8">
      {/* Tool Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2 border-b border-zinc-800">
        <div>
          <h3 className="font-heading font-black text-2xl text-white flex items-center gap-2">
            <Youtube className="w-6 h-6 text-gaming-red" />
            <span>Preset YouTube SEO & Title Generator</span>
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Instant High-CTR Titles, Retention Hooks, Ready-to-Paste Descriptions & Hashtags
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold font-code">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Local Generator (Zero API / Free)</span>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleGenerate} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="topic-input" className="text-xs uppercase font-bold tracking-wider text-zinc-300 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Youtube className="w-4 h-4 text-gaming-red" />
              <span>Video Topic or Clutch Moment</span>
            </span>
            <span className="text-[10px] text-zinc-500 font-normal">Max 150 chars</span>
          </label>
          <input
            id="topic-input"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            maxLength={150}
            placeholder="e.g. 1v4 Impossible Clutch with Desert Eagle..."
            className="w-full bg-zinc-950/90 border border-zinc-800 focus:border-gaming-red focus:ring-1 focus:ring-gaming-red rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 transition-colors outline-none font-medium text-base"
          />
        </div>

        {/* Quick Topic Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider mr-1">
            Quick Topics:
          </span>
          {presets.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setTopic(preset);
                const generated = generateLocalYoutubeMetadata(preset, category, tone);
                setData(generated);
              }}
              className="text-xs px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/40 transition-colors"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Category & Tone Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs uppercase font-bold tracking-wider text-zinc-300">
              Content Category
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => {
                    setCategory(c);
                    const generated = generateLocalYoutubeMetadata(topic, c, tone);
                    setData(generated);
                  }}
                  className={`px-2.5 py-2 text-xs font-bold rounded-lg border transition-all text-center ${
                    category === c
                      ? "bg-red-950/80 border-gaming-red text-white shadow-neon-red"
                      : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-bold tracking-wider text-zinc-300">
              Tone & Energy
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => {
                    setTone(t);
                    const generated = generateLocalYoutubeMetadata(topic, category, t);
                    setData(generated);
                  }}
                  className={`px-2.5 py-2 text-xs font-bold rounded-lg border transition-all text-center ${
                    tone === t
                      ? "bg-red-950/80 border-gaming-red text-white shadow-neon-red"
                      : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <button
          type="submit"
          className="w-full py-4 clip-esports-sm bg-gradient-to-r from-red-600 via-gaming-red to-red-600 hover:from-red-500 hover:to-red-500 text-white font-heading text-lg font-bold uppercase tracking-wider shadow-neon-red transition-all flex items-center justify-center gap-2 active:scale-[0.99] cursor-pointer"
        >
          <Wand2 className="w-5 h-5" />
          <span>Generate Free Fire YouTube Metadata</span>
        </button>
      </form>

      {/* Generated Results */}
      <div className="space-y-6 pt-2">
        {/* Titles */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gaming-red" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              High CTR Titles (Click card to copy)
            </h4>
          </div>

          <div className="space-y-2.5">
            {data.titles.map((titleText, idx) => {
              const key = `title-${idx}`;
              const isCopied = copiedKey === key;
              return (
                <div
                  key={idx}
                  onClick={() => copyText(titleText, key, "Title")}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                    isCopied
                      ? "bg-red-950/60 border-gaming-red"
                      : "bg-zinc-950/80 border-zinc-800 hover:border-red-500/70 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-red-950 border border-red-500/40 text-red-400 font-bold text-xs flex items-center justify-center font-heading">
                      #{idx + 1}
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-gaming-red transition-colors">
                      {titleText}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={`shrink-0 p-2 rounded-lg border transition-colors ${
                      isCopied
                        ? "bg-emerald-600 text-white border-emerald-500"
                        : "bg-zinc-900 group-hover:bg-gaming-red text-zinc-400 group-hover:text-white border-zinc-700"
                    }`}
                    aria-label="Copy title"
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hook */}
        <div className="p-4 rounded-xl bg-zinc-950/60 border border-red-500/20 space-y-1">
          <span className="text-[10px] uppercase font-bold text-gaming-red tracking-wider">
            First 10-Second Viewer Retention Hook
          </span>
          <p className="text-sm text-zinc-300 italic">&ldquo;{data.hook}&rdquo;</p>
        </div>

        {/* Ready-to-paste Description */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-gaming-red" />
              <span>Full Description Template (With Timestamps & Official Channel URL)</span>
            </span>
            <button
              type="button"
              onClick={() => copyText(data.description, "desc", "Description")}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-red-500/50 transition-colors"
            >
              {copiedKey === "desc" ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Description</span>
                </>
              )}
            </button>
          </div>

          <textarea
            readOnly
            value={data.description}
            rows={7}
            className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl p-3.5 text-xs text-zinc-300 font-mono leading-relaxed resize-none focus:outline-none"
          />
        </div>

        {/* Hashtags & Tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-zinc-300 flex items-center gap-1">
                <Hash className="w-3.5 h-3.5 text-gaming-red" />
                <span>Targeted Free Fire Hashtags</span>
              </span>
              <button
                type="button"
                onClick={() => copyText(data.hashtags.join(" "), "hashtags", "Hashtags")}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {data.hashtags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded bg-red-950/40 border border-red-500/30 text-red-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-zinc-300 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5 text-gaming-red" />
                <span>YouTube Tags (Comma-Separated)</span>
              </span>
              <button
                type="button"
                onClick={() => copyText(data.tags, "tags", "SEO Tags")}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
              >
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </button>
            </div>
            <p className="text-xs text-zinc-400 line-clamp-3 font-mono leading-relaxed">
              {data.tags}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
