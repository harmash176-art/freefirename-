"use client";

import React from "react";
import { SITE_CONFIG } from "@/data/config";
import { Flame, ArrowUp, Heart, Sparkles } from "lucide-react";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-red-500/20 bg-black/95 relative z-10 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href={SITE_CONFIG.realYoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group focus:outline-none inline-flex"
              title="Faster FF 08 Official YouTube Channel"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-black border border-red-500/60 shadow-neon-red">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading text-2xl font-black tracking-wider text-white group-hover:text-gaming-red transition-colors">
                FASTER <span className="text-gaming-red">FF 08</span>
              </span>
            </a>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Official Free Fire Nick Finder and gaming destination for Faster FF 08. Delivering 100+ stylish Unicode nicknames, ready-made gamertags, and gaming tools to over 6,000+ passionate gamers.
            </p>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.realYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-red-950/80 hover:bg-red-900 border border-red-500/50 text-white text-xs font-bold transition-all shadow-neon-red"
              >
                <Youtube className="w-4 h-4 text-gaming-red" />
                <span>Visit YouTube ({SITE_CONFIG.subscriberCount} Subs)</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {SITE_CONFIG.navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-gaming-red transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={SITE_CONFIG.realYoutubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gaming-red text-red-400 transition-colors flex items-center gap-1 font-semibold"
                >
                  <span>Official YouTube Channel</span>
                  <Youtube className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Real Channel Verification Box */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-white font-heading">
              Verified Channel Link
            </h4>
            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
              <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold block">
                Primary YouTube Channel:
              </span>
              <a
                href={SITE_CONFIG.realYoutubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-white font-mono text-[11px] break-all block underline"
              >
                {SITE_CONFIG.realYoutubeUrl}
              </a>
              <span className="text-[10px] text-zinc-500 block">
                All YouTube buttons on this website point directly to this real URL.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Faster FF 08. All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-600">
              Disclaimer: Garena Free Fire is a trademark of Garena International. This fan and community platform is not affiliated with or endorsed by Garena.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 hover:border-red-500/50 transition-colors flex items-center gap-1.5 text-xs"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-heading uppercase tracking-wider font-bold">Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
