import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Whitelisted modes for the AI Gaming Lab
const ALLOWED_MODES = ["nickname", "youtube_metadata", "gaming_coach"] as const;
type AiMode = (typeof ALLOWED_MODES)[number];

// Max character length for user inputs to prevent abuse and maintain fast latency
const MAX_INPUT_LENGTH = 500;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload. Expected JSON body." },
        { status: 400 }
      );
    }

    const { mode, input, style, clanTag, tone, tier } = body;

    // Validate mode
    if (!mode || !ALLOWED_MODES.includes(mode as AiMode)) {
      return NextResponse.json(
        {
          error: `Invalid AI mode. Allowed modes are: ${ALLOWED_MODES.join(
            ", "
          )}`,
        },
        { status: 400 }
      );
    }

    // Validate and trim main input
    const cleanInput = typeof input === "string" ? input.trim() : "";
    if (cleanInput.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
        {
          error: `Input is too long. Maximum allowed length is ${MAX_INPUT_LENGTH} characters.`,
        },
        { status: 400 }
      );
    }

    // Server-side Gemini API Key check
    const apiKey = process.env.GEMINI_API_KEY?.trim();
    const modelName = process.env.GEMINI_MODEL?.trim() || "gemini-3.8-flash";

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "GEMINI_API_KEY is not configured on the server. Please add your free GEMINI_API_KEY in your .env.local file or Vercel Project Settings.",
          isConfigError: true,
        },
        { status: 503 }
      );
    }

    // Initialize official @google/genai SDK
    const ai = new GoogleGenAI({ apiKey });

    // Construct specialized Free Fire prompt based on mode
    let systemInstruction = "";
    let prompt = "";

    switch (mode as AiMode) {
      case "nickname": {
        const baseName = cleanInput || "Faster";
        const selectedStyle = style || "esports";
        const clan = clanTag ? `with clan tag [${clanTag}]` : "";

        systemInstruction =
          "You are an expert Free Fire esports nickname designer and gaming font stylist for Faster FF 08's gaming lab. You design fierce, stylish, copy-pasteable names with popular Free Fire gaming symbols (such as 亗, ⚡, 么, ☬, 𝕱𝕱, 𝘍𝘈𝘚𝘛, ꧁, ꧂, ×, †, 〆). Keep them suitable for in-game Free Fire character length limits (12-14 characters max).";

        prompt = `Generate 8 unique, ultra-stylish Free Fire nicknames based on the name/keyword "${baseName}" ${clan}.
Selected Theme: ${selectedStyle}.
Requirements:
1. Return ONLY a JSON array of objects with the following format:
[
  { "name": "亗 FASTER 08 亗", "style": "Esports King", "meaning": "Aggressive rusher tag" },
  ...
]
2. Ensure each name uses cool gaming symbols, unicode styles, or brackets.
3. Keep character lengths practical for Free Fire name change cards.
4. Do not include markdown code block quotes other than standard JSON.`;
        break;
      }

      case "youtube_metadata": {
        const topic = cleanInput || "Epic 1v4 Clash Squad Clutch with Desert Eagle";
        const selectedTone = tone || "hype";

        systemInstruction =
          "You are a top-tier YouTube gaming SEO strategist and copywriter for Faster FF 08 (a 6K+ subscriber Free Fire gaming creator). You produce viral, high CTR titles, engaging YouTube descriptions with hooks and timestamps, and targeted gaming tags and hashtags.";

        prompt = `Generate YouTube SEO metadata for a Free Fire gaming video.
Video Topic / Highlight: "${topic}"
Tone / Style: ${selectedTone}
Channel Context: Faster FF 08 (Free Fire channel with 6K+ subscribers)

Return ONLY a valid JSON object matching this structure:
{
  "titles": [
    "Catchy high CTR title with emojis 1",
    "Catchy high CTR title with emojis 2",
    "Catchy high CTR title with emojis 3"
  ],
  "hook": "Compelling 2-sentence intro hook to keep viewers watching",
  "description": "Full ready-to-paste video description including timestamps, call to subscribe to Faster FF 08, and channel mentions",
  "hashtags": ["#FreeFire", "#FasterFF08", "#FreeFireHighlights", "#OneTapHeadshot", "#GarenaFreeFire"],
  "tags": "free fire, faster ff 08, ff highlights, one tap headshot, clash squad, free fire gameplay"
}`;
        break;
      }

      case "gaming_coach": {
        const query = cleanInput || "How to hit consistent one-tap headshots with Desert Eagle and M1887";
        const playerTier = tier || "Intermediate";

        systemInstruction =
          "You are the official Free Fire Gaming AI Coach for the Faster FF 08 community. You give precise, competitive advice: drag headshot mechanics (rotation drag, straight drag), fast crouch gloo wall techniques, crosshair placement, weapon recoil reset, and custom HUD sensitivity.";

        prompt = `Provide a pro gaming coach lesson for a Free Fire player.
Topic / Question: "${query}"
Player Skill Level: ${playerTier}

Return ONLY a valid JSON object matching this structure:
{
  "summary": "Brief encouraging pro overview of this skill",
  "coreTechnique": "Key mechanical secret used by top Free Fire players",
  "drills": [
    { "step": 1, "title": "Drill Title", "instructions": "Detailed practice steps in training ground" },
    { "step": 2, "title": "Drill Title", "instructions": "Detailed practice steps in training ground" },
    { "step": 3, "title": "Drill Title", "instructions": "Detailed practice steps in training ground" }
  ],
  "sensitivityTip": "Recommended sensitivity or button placement tip",
  "commonMistakes": [
    "Mistake to avoid 1",
    "Mistake to avoid 2"
  ]
}`;
        break;
      }
    }

    // Resilient generation with automatic model fallback if one is busy
    const candidateModels = Array.from(
      new Set([modelName, "gemini-2.5-flash", "gemini-2.5-pro"])
    );

    let lastError: Error | null = null;
    let outputText = "";
    let activeModelUsed = modelName;

    for (const currentModel of candidateModels) {
      try {
        const response = await ai.models.generateContent({
          model: currentModel,
          contents: prompt,
          config: {
            systemInstruction,
            responseMimeType: "application/json",
            temperature: 0.7,
          },
        });

        outputText = response.text?.trim() || "";
        activeModelUsed = currentModel;
        lastError = null;
        break; // Success!
      } catch (err: unknown) {
        lastError = err as Error;
        console.warn(`Model ${currentModel} error, trying fallback...`, lastError.message);
        // Continue to next candidate model
      }
    }

    if (lastError && !outputText) {
      throw lastError;
    }

    // Parse JSON result safely
    let parsedData = null;
    try {
      // Strip potential markdown code backticks if model wrapped JSON
      const sanitizedJson = outputText
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/i, "")
        .replace(/```$/i, "")
        .trim();
      parsedData = JSON.parse(sanitizedJson);
    } catch {
      // If parsing fails, pass raw text as fallback
      parsedData = { raw: outputText };
    }

    return NextResponse.json({
      success: true,
      mode,
      modelUsed: modelName,
      data: parsedData,
    });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("Gemini AI API Error:", error);

    // Provide friendly, non-leaking error messages
    let userMessage =
      "An unexpected error occurred while communicating with Gemini AI. Please try again shortly.";

    if (error.message?.includes("API_KEY_INVALID") || error.message?.includes("API key not valid")) {
      userMessage =
        "The configured GEMINI_API_KEY is invalid. Please verify your API key in Google AI Studio.";
    } else if (error.message?.includes("RESOURCE_EXHAUSTED") || error.message?.includes("quota")) {
      userMessage =
        "Gemini API rate limit or quota exceeded. Please wait a minute and try again.";
    }

    return NextResponse.json(
      {
        error: userMessage,
        details: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
