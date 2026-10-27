"use client";

import React, { useState, useMemo } from "react";
import { getVerifiedVideos, VerifiedVideo, VideoCategory } from "@/data/videos";
import { SITE_CONFIG } from "@/data/config";
import { ExternalLink, Play, Filter, Flame, Clock } from "lucide-react";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";
import { ConfettiSubscribeButton } from "./ConfettiButton";
import Image from "next/image";

export function VideoGrid() {
  const verifiedVideos = useMemo(() => getVerifiedVideos(), []);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>(["All"]);
    verifiedVideos.forEach((v) => set.add(v.category));
    return Array.from(set);
  }, [verifiedVideos]);

  const filteredVideos = useMemo(() => {
    if (selectedCategory === "All") return verifiedVideos;
    return verifiedVideos.filter((v) => v.category === selectedCategory);
  }, [selectedCategory, verifiedVideos]);

  const hasVideos = verifiedVideos.length > 0;

  return (
    <section id="videos" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10" aria-labelledby="videos-heading">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-red-500/20 pb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider">
              <Youtube className="w-3.5 h-3.5 text-gaming-red" />
              <span>Faster FF 08 Channel Uploads</span>
            </div>
            <h2 id="videos-heading" className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              LATEST <span className="text-gaming-red">GAMEPLAY & HIGHLIGHTS</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 max-w-xl">
              High-octane Free Fire clutch moments, one-tap headshot montages, and Grandmaster rank push gameplay.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={SITE_CONFIG.realYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Faster FF 08 official YouTube channel"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-none clip-esports-sm bg-gradient-to-r from-red-600 to-gaming-red hover:from-red-500 hover:to-red-500 text-white font-heading text-base font-bold uppercase tracking-wider shadow-neon-red transition-all group"
            >
              <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span>Visit Official Channel</span>
              <ExternalLink className="w-4 h-4 text-white/80" />
            </a>
          </div>
        </div>

        {/* State 1: Clean Message when no videos are yet configured */}
        {!hasVideos && (
          <div className="p-8 sm:p-14 rounded-2xl bg-zinc-950/80 border border-red-500/30 text-center space-y-6 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-red-950/90 border border-red-500/50 flex items-center justify-center mx-auto text-gaming-red shadow-neon-red">
                <Youtube className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide">
                My latest videos will appear here soon
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed">
                New Free Fire clutches, one-tap headshot montages, and custom room highlights are currently being edited. Visit our official YouTube channel to watch all existing uploads and subscribe for instant alerts.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={SITE_CONFIG.realYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-none clip-esports-sm bg-gradient-to-r from-red-600 to-gaming-red hover:from-red-500 hover:to-red-500 text-white font-heading text-sm font-bold uppercase tracking-wider shadow-neon-red transition-all"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Open YouTube Channel</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>

                <ConfettiSubscribeButton size="md" className="w-full sm:w-auto">
                  Subscribe on YouTube
                </ConfettiSubscribeButton>
              </div>
            </div>
          </div>
        )}

        {/* State 2: Verified Videos Display Grid */}
        {hasVideos && (
          <>
            {/* Category Filters (only shown when categories exist) */}
            {categories.length > 2 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Video Categories">
                <Filter className="w-4 h-4 text-zinc-500 mr-1 shrink-0" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-gaming-red text-white shadow-neon-red border border-red-400/50"
                        : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Video Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <article
                  key={video.id}
                  className="gaming-card rounded-2xl overflow-hidden border border-zinc-800/90 hover:border-red-500/60 group flex flex-col justify-between"
                >
                  {/* Thumbnail Container */}
                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video w-full bg-zinc-950 overflow-hidden block"
                    aria-label={`Watch ${video.title} on YouTube`}
                  >
                    {/* Real Video Thumbnail */}
                    <img
                      src={video.thumbnailUrl}
                      alt={`${video.title} - Free Fire video thumbnail`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-neon-red border border-red-400/60 group-hover:scale-110 group-hover:bg-gaming-red transition-all">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-black/80 text-red-300 px-2 py-0.5 rounded border border-red-500/40">
                      {video.category}
                    </span>

                    {/* Duration Badge */}
                    {video.duration && (
                      <span className="absolute bottom-3 right-3 text-[11px] font-bold font-code bg-black/90 text-zinc-200 px-2 py-0.5 rounded border border-zinc-700 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-red-400" />
                        <span>{video.duration}</span>
                      </span>
                    )}
                  </a>

                  {/* Video Info Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-lg text-white group-hover:text-gaming-red transition-colors line-clamp-2 leading-snug">
                        <a href={video.watchUrl} target="_blank" rel="noopener noreferrer">
                          {video.title}
                        </a>
                      </h3>
                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>

                    {/* Watch CTA Button linking to YouTube */}
                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between">
                      <span className="text-[11px] text-zinc-500 font-medium">
                        Free Fire Gaming
                      </span>

                      <a
                        href={video.watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-white group-hover:translate-x-1 transition-all"
                      >
                        <Youtube className="w-4 h-4 text-gaming-red" />
                        <span>Watch Video</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Bottom CTA Banner */}
        <div className="text-center pt-4">
          <p className="text-sm text-zinc-400 mb-4">
            Looking for more Free Fire clutches, shorts, and rank pushes?
          </p>
          <ConfettiSubscribeButton size="md">
            Subscribe to Faster FF 08 on YouTube
          </ConfettiSubscribeButton>
        </div>
      </div>
    </section>
  );
}
