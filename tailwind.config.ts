import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gaming: {
          darkest: "#050508",
          dark: "#0b0b12",
          surface: "#12121e",
          card: "#181826",
          border: "#292940",
          red: {
            DEFAULT: "#ff0844",
            glow: "#ff2a5f",
            bright: "#ff4757",
            dark: "#8b0000",
            deep: "#400406",
          },
          gold: "#f5a623",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gaming-gradient": "linear-gradient(135deg, #0b0b12 0%, #150a12 50%, #0b0b12 100%)",
        "red-glow-radial": "radial-gradient(circle at center, rgba(255, 8, 68, 0.25) 0%, transparent 70%)",
      },
      boxShadow: {
        "neon-red": "0 0 15px rgba(255, 8, 68, 0.5), 0 0 30px rgba(255, 8, 68, 0.2)",
        "neon-red-lg": "0 0 25px rgba(255, 8, 68, 0.7), 0 0 50px rgba(255, 8, 68, 0.35)",
        "card-glow": "0 4px 20px -2px rgba(255, 8, 68, 0.15)",
      },
      animation: {
        "pulse-glow": "pulseGlow 2.5s infinite ease-in-out",
        "laser-scan": "laserScan 4s linear infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        laserScan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
