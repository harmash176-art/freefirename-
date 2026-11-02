"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { ConfettiSubscribeButton } from "./ConfettiButton";
import { Flame, Sparkles, Crosshair, ChevronDown, Wand2, Trophy, BookOpen, Layers } from "lucide-react";

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-grid"
    >
      {/* Background Cinematic Red Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Cyber Corner Crosshairs */}
      <div className="absolute top-28 left-8 text-red-500/20 hidden lg:block">
        <Crosshair className="w-8 h-8" />
      </div>
      <div className="absolute top-28 right-8 text-red-500/20 hidden lg:block">
        <Crosshair className="w-8 h-8" />
      </div>

      <div className="max-w-5xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Creator Channel Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-neon-red backdrop-blur-md animate-float">
          <Flame className="w-4 h-4 text-gaming-red animate-pulse" />
          <span>Faster FF 08 • Free Fire Nick Finder</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <span className="text-white font-bold">{SITE_CONFIG.subscriberCount} Subscribers</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mb-6 leading-none">
          FREE FIRE{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-gaming-red to-orange-500 neon-text">
            NICKNAME GENERATOR
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl md:text-3xl font-heading font-semibold text-zinc-200 tracking-wide mb-4 max-w-3xl">
          100+ Stylish Unicode Names, Pro Player Tags & Symbols Finder
        </p>

        {/* Supporting description */}
        <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mb-8 leading-relaxed">
          The ultimate name styler for Free Fire players. Type any gamertag to instantly generate 100+ variations with crowns, wings, and esports fonts, or browse pro player names, profile bios, and gaming symbols with instant 1-click copy.
        </p>

        {/* Quick Jump Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mr-1">
            Quick Jump:
          </span>
          <a
            href="#generator"
            onClick={(e) => scrollToSection(e, "generator")}
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 text-xs font-semibold transition-colors"
          >
            Generator
          </a>
          <a
            href="#ready-made"
            onClick={(e) => scrollToSection(e, "ready-made")}
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 text-xs font-semibold transition-colors"
          >
            Ready-Made
          </a>
          <a
            href="#symbols"
            onClick={(e) => scrollToSection(e, "symbols")}
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 text-xs font-semibold transition-colors"
          >
            Symbols
          </a>
          <a
            href="#pro-names"
            onClick={(e) => scrollToSection(e, "pro-names")}
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 text-xs font-semibold transition-colors"
          >
            Pro Player Names
          </a>
          <a
            href="#bio-ideas"
            onClick={(e) => scrollToSection(e, "bio-ideas")}
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 text-xs font-semibold transition-colors"
          >
            FF Bios
          </a>
          <a
            href="#unique-names"
            onClick={(e) => scrollToSection(e, "unique-names")}
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 text-xs font-semibold transition-colors"
          >
            Unique Names
          </a>
          <a
            href="#name-guide"
            onClick={(e) => scrollToSection(e, "name-guide")}
            className="px-3 py-1 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 hover:border-red-500/50 text-xs font-semibold transition-colors"
          >
            Name Guide & FAQ
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-16">
          <a
            href="#generator"
            onClick={(e) => scrollToSection(e, "generator")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none clip-esports-sm bg-gradient-to-r from-red-600 via-gaming-red to-red-600 hover:from-red-500 hover:to-red-500 text-white font-heading text-lg font-bold uppercase tracking-wider shadow-neon-red transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <Wand2 className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span>Style Your Name</span>
          </a>

          <a
            href="#ready-made"
            onClick={(e) => scrollToSection(e, "ready-made")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none clip-esports-sm bg-zinc-900/90 hover:bg-zinc-800 text-white font-heading text-lg font-bold uppercase tracking-wider border border-red-500/40 hover:border-red-500 transition-all duration-300 hover:shadow-neon-red active:scale-95 group cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-gaming-red group-hover:scale-110 transition-transform" />
            <span>Ready-Made Names</span>
          </a>

          <a
            href="#symbols"
            onClick={(e) => scrollToSection(e, "symbols")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none clip-esports-sm bg-black/80 hover:bg-zinc-900 text-zinc-300 hover:text-white font-heading text-lg font-bold uppercase tracking-wider border border-zinc-700 hover:border-red-500 transition-all duration-300 active:scale-95 group cursor-pointer"
          >
            <Layers className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>Symbols Combiner</span>
          </a>
        </div>

        {/* Stats and Feature Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-red-500/20">
          <div className="p-4 rounded-xl bg-zinc-950/60 border border-red-500/20 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-gaming-red font-black text-2xl sm:text-3xl font-heading">
              <Sparkles className="w-5 h-5 text-red-500" />
              <span>100+</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">
              Unicode Styles
            </span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/60 border border-red-500/20 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-white font-black text-2xl sm:text-3xl font-heading">
              <Layers className="w-5 h-5 text-orange-500" />
              <span>10</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">
              Style Categories
            </span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/60 border border-red-500/20 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-gaming-red font-black text-2xl sm:text-3xl font-heading">
              <BookOpen className="w-5 h-5 text-red-500" />
              <span>Ready-Made</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">
              Curated Presets
            </span>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/60 border border-red-500/20 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 text-white font-black text-2xl sm:text-3xl font-heading">
              <Trophy className="w-5 h-5 text-amber-400" />
              <span>1-Click</span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">
              Instant Copy
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#generator"
          onClick={(e) => scrollToSection(e, "generator")}
          className="mt-12 text-zinc-500 hover:text-red-400 transition-colors animate-bounce flex flex-col items-center gap-1 text-xs uppercase tracking-widest cursor-pointer"
          aria-label="Scroll to Nickname Generator"
        >
          <span>Start Generating Below</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
