"use client";

import React, { useState } from "react";
import {
  GENERATOR_STEPS,
  IN_GAME_CHANGE_STEPS,
  FAQ_LIST,
} from "@/data/seoContentData";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Sparkles,
  Gamepad2,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  Info,
} from "lucide-react";

export function NameGuideAndFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section
      id="name-guide"
      className="py-16 space-y-16"
      aria-labelledby="guide-heading"
    >
      {/* ---------------------------------------------------------------------- */}
      {/* 1. Guide: How to Generate and Copy Stylish Free Fire Names */}
      {/* ---------------------------------------------------------------------- */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-red-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-gaming-red" />
              <span>Step-by-Step Tutorial</span>
            </div>
            <h2
              id="guide-heading"
              className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight"
            >
              How to Generate & Copy Stylish Free Fire Names
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Follow this quick 4-step walkthrough to design your gaming alias with custom Unicode fonts, wings, and crown insignias.
            </p>
          </div>
        </div>

        {/* 4 Generation Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GENERATOR_STEPS.map((s) => (
            <div
              key={s.step}
              className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-red-500/40 transition-colors flex flex-col justify-between space-y-3 relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/40 text-gaming-red font-black text-lg flex items-center justify-center font-heading">
                  0{s.step}
                </span>
                <Sparkles className="w-4 h-4 text-zinc-600 group-hover:text-gaming-red transition-colors" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-base text-white">
                  {s.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-900 flex items-center gap-1 text-[11px] font-semibold text-red-400">
                <span>Next Step</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 2. In-Game Tutorial: How to Change Your IGN in Free Fire */}
      {/* ---------------------------------------------------------------------- */}
      <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/90 border-2 border-red-500/30 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gaming-red mb-1">
              <Gamepad2 className="w-4 h-4" />
              <span>In-Game Guide</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-tight">
              How to Change Your Name in Garena Free Fire
            </h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono">
            Requires 390 Diamonds or 1 Name Card
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {IN_GAME_CHANGE_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-black/60 border border-zinc-800 space-y-2"
            >
              <div className="text-xs font-mono font-bold text-gaming-red">
                STEP {step.step}
              </div>
              <h4 className="text-sm font-bold text-white font-heading">
                {step.title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* Free Name Card Pro Tip */}
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 flex items-start gap-3 text-xs text-zinc-300">
          <Info className="w-5 h-5 text-gaming-red shrink-0 mt-0.5" />
          <div>
            <strong className="text-white font-bold block mb-0.5">
              Pro Gamer Tip: Get a Free Name Change Card via Guild Store
            </strong>
            <p className="text-zinc-400 leading-relaxed">
              You don&apos;t need to spend 390 Diamonds! Join any active Free Fire Guild and visit the in-game Guild Store under the Store tab. You can buy a Name Change Card for only <span className="text-white font-semibold">39 Diamonds + 200 Guild Tokens</span>, saving over 350 Diamonds.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 3. Character Limits & Safety Rules Advisory */}
      {/* ---------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Rule: Character Length */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-heading font-bold text-base">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Character Limit & Unicode Byte Rules</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Free Fire strictly restricts usernames to a maximum length of <strong className="text-white">12 characters</strong>. Because elaborate Unicode decorative symbols (such as angel wings ꧁ ꧂ or Chinese kanji 么) utilize multiple bytes, always keep your core name around 5 to 7 letters if you plan on adding decorative symbols on both sides.
          </p>
        </div>

        {/* Rule: Safe & Ban-Free */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-heading font-bold text-base">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <span>Fair Play & Ban Safety Guaranteed</span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            All styles produced by this website utilize legitimate UTF-8 and Unicode characters. They do not inject game code, alter game memory, or violate Garena&apos;s Terms of Service. Millions of players, including verified Free Fire Partner Program creators, utilize these exact Unicode names safely every day.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 4. Frequently Asked Questions (SEO FAQs) */}
      {/* ---------------------------------------------------------------------- */}
      <div className="space-y-6" id="faq">
        <div className="pb-4 border-b border-red-500/20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-gaming-red" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl leading-relaxed">
            Everything you need to know about Free Fire nicknames, symbol compatibility, invisible names, and profile bios.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-zinc-800 bg-zinc-950/90 overflow-hidden transition-colors hover:border-zinc-700"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-zinc-400 p-1 rounded-lg bg-zinc-900 border border-zinc-800">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gaming-red" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-900 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 5. Clear Independent Fan-Made Disclaimer Notice */}
      {/* ---------------------------------------------------------------------- */}
      <div className="p-6 rounded-2xl bg-zinc-950/90 border border-red-500/30 flex items-start gap-4 text-xs">
        <AlertTriangle className="w-6 h-6 text-gaming-red shrink-0 mt-0.5" />
        <div className="space-y-1.5">
          <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
            Independent Fan-Made Website Disclaimer
          </h4>
          <p className="text-zinc-400 leading-relaxed">
            <strong className="text-zinc-300">Faster FF 08 (ffnickfinder.vercel.app)</strong> is an independent fan-made gaming tool and community resource created solely for the gaming community. This website and its creator are <strong className="text-zinc-200">not affiliated with, endorsed by, sponsored by, or officially associated with Garena International, Free Fire, Free Fire MAX, or Sea Ltd.</strong> All game titles, trademarks, and logos are the property of their respective owners.
          </p>
        </div>
      </div>
    </section>
  );
}

