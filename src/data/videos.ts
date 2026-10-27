// ==============================================================================
// YouTube Videos Configuration for Faster FF 08
// Real YouTube Channel: https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg
// ==============================================================================
// HOW TO ADD YOUR OWN YOUTUBE VIDEOS:
// 1. Copy any video or short link from your channel:
//    e.g. "https://www.youtube.com/watch?v=VIDEO_ID" or "https://youtu.be/VIDEO_ID"
// 2. Add an item to the `USER_YOUTUBE_VIDEOS` array below:
//    {
//      urlOrId: "https://www.youtube.com/watch?v=VIDEO_ID",
//      title: "My Free Fire 1v4 Clutch",
//      category: "Clash Squad",
//      duration: "08:24", // optional
//    }
// 3. Thumbnails and watch links are generated automatically from real video IDs.
//    No YouTube API key required!
// ==============================================================================

import { SITE_CONFIG } from "./config";

export type VideoCategory =
  | "Headshots"
  | "Clash Squad"
  | "Rank Push"
  | "Shorts"
  | "Tutorial"
  | "Gameplay";

export interface VideoItem {
  /**
   * YouTube video URL or 11-character video ID from your channel.
   * Supported formats:
   * - https://www.youtube.com/watch?v=XXXXXXXXXXX
   * - https://youtu.be/XXXXXXXXXXX
   * - https://www.youtube.com/shorts/XXXXXXXXXXX
   * - XXXXXXXXXXX (raw 11-character ID)
   */
  urlOrId: string;
  title: string;
  description?: string;
  category?: VideoCategory;
  duration?: string;
}

export interface VerifiedVideo {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  duration: string;
  watchUrl: string;
  thumbnailUrl: string;
}

/**
 * PASTE YOUR REAL YOUTUBE VIDEOS HERE:
 * When this array is empty, the website shows a clean status:
 * "My latest videos will appear here soon" with a button to your real YouTube channel.
 * Once you paste your video links below, valid video cards with thumbnails will display automatically.
 */
export const USER_YOUTUBE_VIDEOS: VideoItem[] = [
  // Examples to uncomment when adding your uploads:
  // {
  //   urlOrId: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  //   title: "Your Video Title",
  //   description: "Video description",
  //   category: "Headshots",
  //   duration: "05:30",
  // },
];

/**
 * Extracts a valid 11-character YouTube video ID from various URL formats or plain IDs.
 * Rejects any placeholder or non-compliant string.
 */
export function extractYoutubeVideoId(urlOrId: string): string | null {
  if (!urlOrId || typeof urlOrId !== "string") return null;

  const trimmed = urlOrId.trim();

  // Exclude placeholder tags
  if (trimmed.toUpperCase().includes("PLACEHOLDER")) {
    return null;
  }

  // Raw 11-character YouTube video ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  // URL patterns: watch?v=, youtu.be/, shorts/, embed/
  const urlRegex =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([a-zA-Z0-9_-]{11})/;
  const match = trimmed.match(urlRegex);

  return match && match[1] ? match[1] : null;
}

/**
 * Returns only videos that have a verified, valid YouTube video ID.
 * Never returns demo or placeholder videos.
 */
export function getVerifiedVideos(): VerifiedVideo[] {
  const verified: VerifiedVideo[] = [];

  for (const item of USER_YOUTUBE_VIDEOS) {
    const videoId = extractYoutubeVideoId(item.urlOrId);
    if (!videoId) continue;

    verified.push({
      id: videoId,
      title: item.title?.trim() || "Faster FF 08 Gameplay",
      description: item.description?.trim() || "Watch this gameplay directly on the Faster FF 08 YouTube channel.",
      category: item.category || "Gameplay",
      duration: item.duration?.trim() || "Video",
      watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    });
  }

  return verified;
}

/**
 * Backward compatibility export
 */
export const FEATURED_VIDEOS = getVerifiedVideos();
