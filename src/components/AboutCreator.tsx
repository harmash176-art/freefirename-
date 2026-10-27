"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { ConfettiSubscribeButton } from "./ConfettiButton";
import { Flame, Trophy, Crosshair, Users, Shield, Zap, Sparkles, Heart } from "lucide-react";

export function AboutCreator() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="gaming-card rounded-3xl p-8 sm:p-12 border border-red-500/30 relative overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Avatar / Crest Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative group">
                {/* Glowing Outer Ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-600 via-gaming-red to-orange-600 blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

                {/* Avatar Card */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-b from-zinc-900 to-black border-2 border-red-500/60 flex flex-col items-center justify-center p-6 text-center space-y-3 shadow-2xl">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-black border border-red-400/60 flex items-center justify-center shadow-neon-red">
                    <Flame className="w-10 h-10 text-white animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide">
                      FASTER <span className="text-gaming-red">FF 08</span>
                    </h3>
                    <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mt-1">
                      Free Fire Content Creator
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold font-code">
                    <Sparkles className="w-3 h-3 text-gaming-red" />
                    <span>{SITE_CONFIG.subscriberCount} YouTube Subscribers</span>
                  </div>
                </div>
              </div>

              {/* Verified Gamer Tag */}
              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Verified Gaming Creator</span>
              </div>
            </div>

            {/* Narrative & Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 text-gaming-red" />
                  <span>The Creator Behind The Channel</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                  DOMINATING <span className="text-gaming-red">FREE FIRE</span> WITH PASSION & PRECISION
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  Welcome to the official hub of <strong className="text-white">Faster FF 08</strong>. With a rapidly growing community of over <strong className="text-gaming-red">{SITE_CONFIG.subscriberCount} dedicated subscribers</strong>, our channel is built on one simple mission: delivering thrilling, high-tier Free Fire gameplay, impossible one-tap clutches, and pro tips to help players level up their game.
                </p>
                <p className="text-zinc-400 text-sm">
                  Whether you are looking to master the rotation drag for headshots, execute lightning-fast gloo wall placements, or discover the best Clash Squad strategies, Faster FF 08 is your home for intense gaming action and esports inspiration.
                </p>
              </div>

              {/* Creator Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-gaming-red font-bold text-sm">
                    <Trophy className="w-4 h-4" />
                    <span>6K+ Squad</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Active YouTube community</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1">
                  <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                    <Crosshair className="w-4 h-4 text-red-500" />
                    <span>One-Tap Specialist</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Desert Eagle & M1887</p>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-1 col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>High Energy</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Shorts & Full Gameplay</p>
                </div>
              </div>

              {/* Join the Community CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <ConfettiSubscribeButton size="lg">
                  Join the Community
                </ConfettiSubscribeButton>

                <span className="text-xs text-zinc-500 text-center sm:text-left">
                  Subscribe for weekly uploads, clutch highlights & custom room matches!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
