// ==============================================================================
// Preset-based Free Fire Aim Drills & Coaching Knowledge Base
// 100% Local JavaScript - Zero API / External Backend dependencies
// ==============================================================================

export interface CoachRoutine {
  id: string;
  topic: string;
  category: "Headshots" | "Gloo Wall" | "Sensitivity" | "Clash Squad" | "Sniper";
  summary: string;
  coreTechnique: string;
  drills: {
    step: number;
    title: string;
    instructions: string;
  }[];
  sensitivityTip: string;
  commonMistakes: string[];
}

export const COACHING_ROUTINES: CoachRoutine[] = [
  {
    id: "drag-headshots",
    topic: "One-Tap Headshot Drag Mechanics (Desert Eagle & M1887)",
    category: "Headshots",
    summary:
      "Consistent one-taps come from reading your opponent's movement vector and applying a controlled 'Rotation Drag' rather than frantically flicking your fire button upwards.",
    coreTechnique:
      "Lock your crosshair at neck/upper chest level before firing. For stationary enemies, use a clean straight vertical drag. For enemies running sideways, drag your fire button in a smooth 'J-curve' towards their direction.",
    drills: [
      {
        step: 1,
        title: "Training Bot 10m Headshot Calibration (10 mins)",
        instructions:
          "Pick Desert Eagle with no attachments. Stand exactly 10 meters away from the training bot. Practice pulling the fire button smoothly until you hit 15 consecutive 1-tap headshots.",
      },
      {
        step: 2,
        title: "Combat Zone Peek & Shot Reset (15 mins)",
        instructions:
          "Enter combat zone without vest or helmet. Practice peek -> single drag shot -> instant sprint reset. Never spray more than 1 bullet at a time with shotguns.",
      },
      {
        step: 3,
        title: "Close-Range Jumping Drag (15 mins)",
        instructions:
          "Practice jump shot timing: Wait until your character reaches the peak of the jump before initiating the downward-to-upward drag motion for max accuracy.",
      },
    ],
    sensitivityTip:
      "Set General sensitivity to 95–100 for swift camera rotations. Set Red Dot sensitivity between 92–96. Maintain fire button size between 40%–48% placed in the lower-middle quadrant.",
    commonMistakes: [
      "Dragging the fire button too hard or too fast, throwing the crosshair way above the enemy's head.",
      "Firing while in full sprint before the crosshair resets to default spread.",
    ],
  },
  {
    id: "fast-gloo-wall",
    topic: "Lightning Fast Crouch Gloo Wall (360 Degree Defense)",
    category: "Gloo Wall",
    summary:
      "Crouching before deploying your gloo wall reduces hit box exposure by 40% and places the wall significantly closer to your character model.",
    coreTechnique:
      "The Golden 4-Step Sequence: (1) Fire Drag -> (2) Pull crosshair down to character's feet -> (3) Press Gloo Wall + Crouch simultaneously -> (4) Tap Left Fire Button. Complete this sequence under 0.35 seconds.",
    drills: [
      {
        step: 1,
        title: "Gloo Wall Training School (10 mins)",
        instructions:
          "Go to the Gloo Wall training zone. Focus on zero-damage runs by strictly placing walls within 1 meter of your character model.",
      },
      {
        step: 2,
        title: "360-Degree Double Wall Reflex (15 mins)",
        instructions:
          "In custom room or training zone, practice turning your screen 180 degrees while holding the gloo wall button to build a protective shield on both front and rear.",
      },
      {
        step: 3,
        title: "Rush & Wall Entry Fragging (15 mins)",
        instructions:
          "Practice rushing an open field by deploying staggered gloo walls every 5 meters without breaking your sprint momentum.",
      },
    ],
    sensitivityTip:
      "Increase General sensitivity to 100 to execute the downward camera flick instantly without lifting your thumb twice.",
    commonMistakes: [
      "Deploying the gloo wall while looking straight ahead, placing it 5 meters too far forward.",
      "Forgetting to tap the crouch button, leaving your head vulnerable over the barrier.",
    ],
  },
  {
    id: "sensitivity-guide",
    topic: "Pro Sensitivity & Custom HUD Setup (Low vs High End Devices)",
    category: "Sensitivity",
    summary:
      "There is no single magic sensitivity, but there is an optimal baseline calculated based on your screen refresh rate (60Hz vs 90Hz/120Hz) and touch sampling rate.",
    coreTechnique:
      "Keep General high for close range drag and Gloo Wall, but lower your 2X and 4X scopes slightly to eliminate crosshair jitter at medium and long ranges.",
    drills: [
      {
        step: 1,
        title: "Screen Friction Warm-Up (5 mins)",
        instructions:
          "Clean your screen and thumb tips with powder or gaming sleeves for zero-stick drag consistency.",
      },
      {
        step: 2,
        title: "DPI & Button Size Harmony (10 mins)",
        instructions:
          "For phones with 4GB RAM or less: Keep fire button size at 50%–55%. For 6GB/8GB+ high-end devices: Keep fire button size at 42%–48% for larger drag space.",
      },
      {
        step: 3,
        title: "Scope Recoil Tracking (15 mins)",
        instructions:
          "Equip SCAR or M4A1 with 2x Scope. Practice spraying 15 bullets into distant moving targets while gently pulling down on the right thumb.",
      },
    ],
    sensitivityTip:
      "Recommended Baseline: General 98, Red Dot 92, 2X Scope 88, 4X Scope 84, Sniper Scope 55, Free Look 70.",
    commonMistakes: [
      "Changing your sensitivity every day after losing a match instead of sticking to one setting for muscle memory.",
      "Placing the fire button too high up on the screen, leaving zero room for upward drag.",
    ],
  },
  {
    id: "clash-squad-tactics",
    topic: "Clash Squad Ranked 1v4 Clutch & Entry Strategy",
    category: "Clash Squad",
    summary:
      "Clutching a 1v4 is never about fighting 4 enemies at once; it's about isolating each opponent into consecutive 1v1 duels using hard cover and fast repositioning.",
    coreTechnique:
      "Never stay in the same corner after knocking an enemy. Immediately throw a gloo wall or rotate through the secondary route so the remaining 3 players hold crosshairs on an empty position.",
    drills: [
      {
        step: 1,
        title: "High Ground Angle Control (10 mins)",
        instructions:
          "Always prioritize roof access and container tops in Clash Squad maps (Factory, Clock Tower, Mill) to shoot down into enemy cover.",
      },
      {
        step: 2,
        title: "Grenade Cooking Mastery (15 mins)",
        instructions:
          "Practice cooking grenades for 2.5 seconds before throwing so they explode mid-air above enemy gloo walls with zero reaction time.",
      },
      {
        step: 3,
        title: "Entry Rusher Smoke Flank (15 mins)",
        instructions:
          "Deploy smoke grenades in the primary lane while sneaking through the opposite flank with a silenced weapon.",
      },
    ],
    sensitivityTip:
      "Ensure your quick weapon switch button is enabled and placed in your top-left claw position for instant shotgun-to-fist swaps.",
    commonMistakes: [
      "Thirsting a knocked enemy in the open while their teammates have clear line-of-sight on you.",
      "Peeking the exact same doorway twice after taking 100+ damage.",
    ],
  },
  {
    id: "sniper-mastery",
    topic: "AWM & M82B Double Sniper Fast Switch Mastery",
    category: "Sniper",
    summary:
      "Double sniper loadouts can wipe an entire squad in seconds by eliminating the reload animation entirely through instant weapon swap mechanics.",
    coreTechnique:
      "The Sniper Swap Rhythm: (1) Scope & Fire -> (2) Immediately tap Secondary Sniper -> (3) Scope & Fire. Repeat with a rhythmic 0.4s heartbeat tempo.",
    drills: [
      {
        step: 1,
        title: "No-Scope Custom Pet Emote Crosshair (10 mins)",
        instructions:
          "Place your pet emote icon dead-center in your HUD settings to act as a permanent crosshair for no-scope snipers.",
      },
      {
        step: 2,
        title: "Dual AWM Target Swap (15 mins)",
        instructions:
          "In the training ground, practice eliminating 5 moving targets consecutively without a single reload animation triggering.",
      },
      {
        step: 3,
        title: "Gloo Wall Penetration (M82B Drill) (15 mins)",
        instructions:
          "Practice tracking enemy shadow markers behind gloo walls and shooting straight through using the Barrett M82B.",
      },
    ],
    sensitivityTip:
      "Set Sniper Scope sensitivity to 50–58 for smooth micro-adjustments without jerking past the enemy's head.",
    commonMistakes: [
      "Holding the fire button down continuously, which interrupts the swap cadence.",
      "Standing in open terrain without placing a defensive barrier before taking the first sniper shot.",
    ],
  },
];
