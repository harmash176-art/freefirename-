"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { ConfettiSubscribeButton } from "./ConfettiButton";
import { Bell, Users, Flame, ShieldAlert, Sparkles, ExternalLink } from "lucide-react";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";

export function CommunityCta() {
  return (
    <section id="community" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-red-950/60 via-zinc-950 to-black border-2 border-red-500/50 p-8 sm:p-14 text-center shadow-2xl pulse-aura">
          {/* Background Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-red-600/20 rounded-full blur-[140px] pointer-events-none -z-10" />

          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/90 border border-red-500/60 text-red-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-neon-red">
            <Flame className="w-4 h-4 text-gaming-red animate-pulse" />
            <span>Faster FF 08 Army</span>
            <span className="w-1 h-1 rounded-full bg-red-400" />
            <span className="text-white font-extrabold">{SITE_CONFIG.subscriberCount} YouTube Subscribers</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            BE PART OF THE <span className="text-gaming-red neon-text">6K+ SQUAD</span>
          </h2>

          <p className="text-sm sm:text-lg text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hit subscribe on YouTube and ring the bell 🔔 so you never miss a new Free Fire clutch montage, secret sensitivity breakdown, or community custom match.
          </p>

          {/* Main Subscribe CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <ConfettiSubscribeButton size="lg" className="w-full sm:w-auto">
              Subscribe on YouTube
            </ConfettiSubscribeButton>

            <a
              href={SITE_CONFIG.realYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-none clip-esports-sm bg-zinc-900/90 hover:bg-zinc-800 text-white font-heading text-base font-bold uppercase tracking-wider border border-zinc-700 hover:border-red-500 transition-all group"
            >
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-white" />
              <span>Visit Channel Page</span>
            </a>
          </div>

          {/* Community Perks Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-red-500/20 text-left">
            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-gaming-red font-bold text-sm">
                <Bell className="w-4 h-4" />
                <span>Instant Alerts</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Be the first to watch new Free Fire shorts, one-tap highlights, and game updates.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Free Gaming Tools</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Free access to our 85+ stylish nickname generator, YouTube SEO suite, and aim practice drills.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-1.5">
              <div className="flex items-center gap-2 text-gaming-red font-bold text-sm">
                <Users className="w-4 h-4" />
                <span>Custom Rooms</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Play alongside Faster FF 08 in subscriber custom rooms and squad tournaments.
              </p>
            </div>
          </div>

          {/* Configurable Optional Social Links Note */}
          <div className="mt-10 pt-6 border-t border-zinc-800/80 max-w-xl mx-auto text-xs text-zinc-500 space-y-2">
            <p>
              Official YouTube channel:{" "}
              <a
                href={SITE_CONFIG.realYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-white underline font-mono break-all"
              >
                {SITE_CONFIG.realYoutubeUrl}
              </a>
            </p>
            <p className="text-[11px] text-zinc-600">
              (Additional social media links like Discord or Instagram remain configurable in <code className="bg-black/60 px-1 py-0.5 rounded text-zinc-400">src/data/config.ts</code> and will be activated once provided.)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
