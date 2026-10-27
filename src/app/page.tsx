"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NicknameGenerator } from "@/components/NicknameGenerator";
import { ReadyMadeNicknames } from "@/components/ReadyMadeNicknames";
import { SymbolsLibrary } from "@/components/SymbolsLibrary";
import { AiGamingLab } from "@/components/AiGamingLab";
import { VideoGrid } from "@/components/VideoGrid";
import { AboutCreator } from "@/components/AboutCreator";
import { CommunityCta } from "@/components/CommunityCta";
import { Footer } from "@/components/Footer";
import { AdSenseBanner } from "@/components/AdSenseBanner";
import { SITE_CONFIG } from "@/data/config";
import { Flame } from "lucide-react";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";

export default function HomePage() {
  const [showFloatingBar, setShowFloatingBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingBar(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#07070b]">
      {/* Primary Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Feature: 100+ Stylish Name Generator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl mx-auto">
        <div className="gaming-card p-6 sm:p-10 rounded-3xl border-2 border-red-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Cyber Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gaming-red pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gaming-red pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gaming-red pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gaming-red pointer-events-none" />

          <NicknameGenerator />
        </div>
      </section>

      {/* Responsive AdSense Slot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner />
      </div>

      {/* Ready-Made Free Fire Nicknames Collection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReadyMadeNicknames />
      </div>

      {/* Decorative Unicode Symbols Library & Combiner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SymbolsLibrary />
      </div>

      {/* Responsive AdSense Slot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner />
      </div>

      {/* Pro Creator Tools: YouTube SEO & Aim Drills */}
      <AiGamingLab />

      {/* YouTube Gameplay & Highlights Video Grid */}
      <VideoGrid />

      {/* About the Creator */}
      <AboutCreator />

      {/* Subscribe & Community CTA Section */}
      <CommunityCta />

      {/* Responsive AdSense Slot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSenseBanner />
      </div>

      {/* Footer with verified channel link and copyright */}
      <Footer />

      {/* Floating Subscribe Pill on Scroll */}
      {showFloatingBar && (
        <aside
          aria-label="Quick channel subscribe bar"
          className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-3 p-2 pr-4 rounded-full bg-black/90 border border-red-500/60 shadow-neon-red backdrop-blur-md animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-neon-red">
            <Flame className="w-4 h-4" />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-bold text-white font-heading tracking-wide">
              FASTER FF 08
            </span>
            <span className="text-[10px] text-red-400 font-semibold">
              {SITE_CONFIG.subscriberCount} YouTube Subs
            </span>
          </div>

          <a
            href={SITE_CONFIG.realYoutubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gaming-red hover:bg-red-500 text-white text-xs font-bold font-heading tracking-wider transition-colors shadow-neon-red"
          >
            <Youtube className="w-3.5 h-3.5" />
            <span>Subscribe</span>
          </a>
        </aside>
      )}
    </main>
  );
}
