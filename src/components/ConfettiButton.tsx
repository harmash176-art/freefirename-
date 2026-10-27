"use client";

import React from "react";
import confetti from "canvas-confetti";
import { SITE_CONFIG } from "@/data/config";
import { YoutubeIcon as Youtube } from "@/components/icons/YoutubeIcon";

interface ConfettiButtonProps {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  icon?: boolean;
}

export function ConfettiSubscribeButton({
  children = "Subscribe on YouTube",
  className = "",
  size = "md",
  variant = "primary",
  icon = true,
}: ConfettiButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#ff0844", "#ff4757", "#ffffff", "#ffd700", "#ff1e40"],
      });
    } catch {
      // Confetti fallback safely ignored
    }
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold gap-1.5",
    md: "px-6 py-3 text-sm font-bold gap-2",
    lg: "px-8 py-4 text-base font-extrabold gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-red-600 via-gaming-red to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-500 text-white shadow-neon-red hover:shadow-neon-red-lg border border-red-400/40",
    secondary:
      "bg-zinc-900/90 hover:bg-zinc-800 text-white border border-red-500/30 hover:border-red-500/70 hover:shadow-neon-red",
    outline:
      "bg-transparent hover:bg-red-950/40 text-red-400 hover:text-white border border-red-500/50 hover:border-red-500",
  };

  return (
    <a
      href={SITE_CONFIG.realYoutubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`inline-flex items-center justify-center uppercase tracking-wider transition-all duration-300 clip-esports-sm active:scale-95 group relative overflow-hidden ${
        sizeStyles[size]
      } ${variantStyles[variant]} ${className}`}
    >
      {/* Laser glow highlight reflection */}
      <span className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />

      {icon && (
        <Youtube className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110 shrink-0" />
      )}
      <span className="font-heading text-lg font-bold tracking-wide">{children}</span>
    </a>
  );
}
