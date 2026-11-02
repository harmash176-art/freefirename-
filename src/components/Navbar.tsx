"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/data/config";
import { Flame, Menu, X, Sparkles } from "lucide-react";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";
import { ConfettiSubscribeButton } from "./ConfettiButton";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-red-500/20 shadow-lg py-3 shadow-red-950/20"
          : "bg-gradient-to-b from-black/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Real YouTube Link */}
          <a
            href={SITE_CONFIG.realYoutubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group focus:outline-none"
            title="Visit Faster FF 08 Official YouTube Channel"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-red-600 via-gaming-red to-black border border-red-500/60 shadow-neon-red group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 text-white animate-pulse" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-black tracking-wider text-white group-hover:text-gaming-red transition-colors">
                  FASTER <span className="text-gaming-red font-black">FF 08</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-950/80 text-red-400 border border-red-500/40">
                  <Sparkles className="w-2.5 h-2.5" />
                  {SITE_CONFIG.subscriberCount}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-zinc-200">
                Nick Finder & Free Fire
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {SITE_CONFIG.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs xl:text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors relative py-1 group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gaming-red transition-all duration-300 group-hover:w-full shadow-neon-red" />
              </a>
            ))}
          </nav>

          {/* Desktop Action & Subscribe Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ConfettiSubscribeButton size="sm">
              Subscribe
            </ConfettiSubscribeButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:text-white hover:border-red-500 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-red-500/30 px-6 py-6 animate-in slide-in-from-top-4 duration-200 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {SITE_CONFIG.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold uppercase tracking-wider text-zinc-300 hover:text-gaming-red py-2 border-b border-zinc-900"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                <span>Free Fire Channel</span>
                <span className="text-gaming-red font-bold">{SITE_CONFIG.subscriberCount} Subscribers</span>
              </div>
              <ConfettiSubscribeButton size="md" className="w-full">
                Subscribe on YouTube
              </ConfettiSubscribeButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
