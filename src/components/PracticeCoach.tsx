"use client";

import React, { useState } from "react";
import { useToast } from "./Toast";
import { COACHING_ROUTINES, CoachRoutine } from "@/data/coachingData";
import {
  Copy,
  Check,
  Crosshair,
  Target,
  ShieldCheck,
  Flame,
  Sparkles,
  ChevronRight,
  BookOpen,
} from "lucide-react";

export function PracticeCoach() {
  const { showToast } = useToast();
  const [selectedRoutineId, setSelectedRoutineId] = useState<string>("drag-headshots");
  const [copied, setCopied] = useState(false);

  const activeRoutine: CoachRoutine =
    COACHING_ROUTINES.find((r) => r.id === selectedRoutineId) || COACHING_ROUTINES[0];

  const copyFullRoutine = async () => {
    const routineText = `=== FASTER FF 08 PRO GAMING COACH ===\nTopic: ${activeRoutine.topic}\nCategory: ${activeRoutine.category}\n\n[PRO SUMMARY]\n${activeRoutine.summary}\n\n[CORE MECHANICAL SECRET]\n${activeRoutine.coreTechnique}\n\n[STEP-BY-STEP TRAINING DRILLS]\n${activeRoutine.drills
      .map((d) => `Step ${d.step}: ${d.title}\n${d.instructions}`)
      .join("\n\n")}\n\n[SENSITIVITY & HUD TIP]\n${activeRoutine.sensitivityTip}\n\n[MISTAKES TO AVOID]\n${activeRoutine.commonMistakes
      .map((m) => `• ${m}`)
      .join("\n")}`;

    try {
      await navigator.clipboard.writeText(routineText);
      setCopied(true);
      showToast("Copied full training routine to clipboard!", "success");
      setTimeout(() => setCopied(false), 2000);
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
            <Target className="w-6 h-6 text-gaming-red" />
            <span>Preset Gaming Practice Coach & Drills</span>
          </h3>
          <p className="text-xs text-zinc-400 mt-0.5">
            Curated Free Fire Aim Drills, Crouch Gloo Wall Masterclass & Sensitivity Calculators
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-bold font-code">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Local Guide (Zero API / Free)</span>
        </div>
      </div>

      {/* Routine Selection Cards */}
      <div className="space-y-2">
        <label className="text-xs uppercase font-bold tracking-wider text-zinc-300 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-gaming-red" />
          <span>Select Training Module</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {COACHING_ROUTINES.map((routine) => {
            const isSelected = routine.id === selectedRoutineId;
            return (
              <button
                key={routine.id}
                type="button"
                onClick={() => {
                  setSelectedRoutineId(routine.id);
                  showToast(`Loaded ${routine.category} training routine!`, "info");
                }}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                  isSelected
                    ? "bg-red-950/80 border-gaming-red text-white shadow-neon-red"
                    : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-red-400">
                      {routine.category}
                    </span>
                    {isSelected && <span className="text-xs font-bold text-gaming-red">Active</span>}
                  </div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">{routine.topic}</h4>
                </div>
                <span className="text-[11px] text-zinc-500 line-clamp-1">{routine.summary}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Routine Details */}
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gaming-red" />
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              Pro Coach Breakdown & Step-by-Step Drills
            </h4>
          </div>

          <button
            type="button"
            onClick={copyFullRoutine}
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-red-500/50 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Routine Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Full Routine</span>
              </>
            )}
          </button>
        </div>

        {/* Coach Overview */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-zinc-950/90 border border-red-500/30">
          <span className="text-[10px] uppercase font-bold text-gaming-red tracking-wider">
            Coach Assessment & Core Philosophy
          </span>
          <p className="text-sm text-zinc-200 mt-1 leading-relaxed">{activeRoutine.summary}</p>
        </div>

        {/* Core Technique */}
        <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-1">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Core Mechanical Secret</span>
          </div>
          <p className="text-sm text-zinc-300 pl-6 leading-relaxed">{activeRoutine.coreTechnique}</p>
        </div>

        {/* Step-by-Step Training Drills */}
        <div className="space-y-3">
          <span className="text-xs uppercase font-bold text-zinc-400 tracking-wider">
            Step-by-Step Training Ground Drills
          </span>
          <div className="grid grid-cols-1 gap-3">
            {activeRoutine.drills.map((drill) => (
              <div
                key={drill.step}
                className="p-4 rounded-xl bg-zinc-950/90 border border-zinc-800 hover:border-red-500/40 transition-colors flex items-start gap-3.5"
              >
                <div className="shrink-0 w-8 h-8 rounded-lg bg-red-950 border border-red-500/50 text-red-400 font-bold flex items-center justify-center font-heading text-sm shadow-neon-red">
                  0{drill.step}
                </div>
                <div className="space-y-1">
                  <h5 className="text-sm font-bold text-white">{drill.title}</h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">{drill.instructions}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensitivity & Common Mistakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Crosshair className="w-4 h-4" />
              <span>Sensitivity & HUD Optimization</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">{activeRoutine.sensitivityTip}</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Common Mistakes to Avoid</span>
            </div>
            <ul className="space-y-1.5">
              {activeRoutine.commonMistakes.map((mistake, i) => (
                <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
