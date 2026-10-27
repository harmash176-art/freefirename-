"use client";

import React, { useState } from "react";
import { YoutubeMetadataGenerator } from "./YoutubeMetadataGenerator";
import { PracticeCoach } from "./PracticeCoach";
import { Target, Zap } from "lucide-react";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";

type TabType = "youtube" | "coach";

export function AiGamingLab() {
  const [activeTab, setActiveTab] = useState<TabType>("youtube");

  return (
    <section id="creator-tools" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" aria-labelledby="creator-tools-heading">
      {/* Decorative Red Laser Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider shadow-neon-red">
            <Zap className="w-3.5 h-3.5 text-gaming-red animate-pulse" />
            <span>Faster FF 08 Pro Suite</span>
            <span className="w-1 h-1 rounded-full bg-red-400" />
            <span className="text-white">100% Free • No API Key Needed</span>
          </div>

          <h2 id="creator-tools-heading" className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-heading">
            CREATOR SEO & <span className="text-gaming-red">AIM DRILLS</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Complement your stylish nickname with high-CTR YouTube metadata templates and pro Free Fire training ground routines.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="gaming-glass p-2 rounded-2xl border border-red-500/20 mb-8 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("youtube")}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-heading text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "youtube"
                  ? "bg-gradient-to-r from-red-600 via-gaming-red to-red-600 text-white shadow-neon-red"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <Youtube className="w-4 h-4 shrink-0" />
              <span>YouTube SEO</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("coach")}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-heading text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === "coach"
                  ? "bg-gradient-to-r from-red-600 via-gaming-red to-red-600 text-white shadow-neon-red"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
              }`}
            >
              <Target className="w-4 h-4 shrink-0" />
              <span>Aim Drills</span>
            </button>
          </div>
        </div>

        {/* Active Tool Container */}
        <div className="gaming-card p-6 sm:p-8 rounded-2xl border border-red-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Cyber Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gaming-red pointer-events-none" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gaming-red pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gaming-red pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gaming-red pointer-events-none" />

          {activeTab === "youtube" && <YoutubeMetadataGenerator />}
          {activeTab === "coach" && <PracticeCoach />}
        </div>
      </div>
    </section>
  );
}
