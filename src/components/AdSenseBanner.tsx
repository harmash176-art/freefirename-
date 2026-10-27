"use client";

import React, { useEffect } from "react";
import { SITE_CONFIG } from "@/data/config";

interface AdSenseBannerProps {
  slot?: string;
  format?: "auto" | "fluid" | "rectangle" | "horizontal";
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

/**
 * AdSenseBanner:
 * Compliant with Google AdSense policies:
 * - Only renders ad tags if a valid ad slot ID is provided.
 * - Does not invent ad slot IDs or render fake ads.
 * - Auto Ads handled automatically via the official head script.
 */
export function AdSenseBanner({
  slot,
  format = "auto",
  responsive = true,
  className = "",
}: AdSenseBannerProps) {
  useEffect(() => {
    // Only attempt to push when a valid slot exists and window is available
    if (slot && typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // Suppress AdSense push errors before approval/ad blockers
      }
    }
  }, [slot]);

  // If no manual slot is configured, do not render fake or broken ad blocks
  if (!slot) {
    return null;
  }

  return (
    <div
      className={`w-full overflow-hidden my-8 flex flex-col items-center justify-center ${className}`}
      aria-label="Sponsored Advertisement"
    >
      <span className="text-[10px] uppercase tracking-widest text-zinc-600 mb-1.5 font-semibold">
        Advertisement
      </span>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-client={SITE_CONFIG.adsense.client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
