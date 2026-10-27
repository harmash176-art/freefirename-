# 🎮 Faster FF 08 - Official Free Fire Gaming Website & AI Lab

Welcome to the official repository for **Faster FF 08** — a high-performance, modern, fully responsive gaming website tailored for a Free Fire gaming YouTube channel with **6K+ subscribers**.

Official YouTube Channel: **[https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg](https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg)**

---

## ⚡ Features & Architecture

- **Next-Level Aesthetics**: Premium black & neon-red gaming theme inspired by Free Fire esports, cyberpunk angular cuts, glowing buttons, and confetti celebrations.
- **Official YouTube Integration**: Every Subscribe button, channel badge, video link, and footer points directly to your real YouTube channel URL.
- **Gemini AI Gaming Lab**: 3 functional AI tools powered by Google Gemini API using the official `@google/genai` SDK:
  1. **Gaming Nickname Generator**: Generate stylized Free Fire clan & player nicknames using cool symbols (亗, ⚡, 么, ☬, 𝕱𝕱, 𝘍𝘈𝘚𝘛, etc.).
  2. **YouTube Title & Description Generator**: Viral, high-CTR gaming titles, SEO hooks, complete video descriptions, and hashtags.
  3. **Gaming Practice Coach**: Aim-training drills, drag headshot mechanics (rotation drag), crouch gloo wall tutorials, and sensitivity setups.
- **YouTube Video Showcase Grid**: Clean showcase grid with category filters, duration badges, and instant links to your uploads.
- **Secure Gemini Backend**: Secure API endpoint at `/api/ai` reading `GEMINI_API_KEY` purely on the server. Never exposed to browser code.
- **100% Responsive**: Seamlessly optimized for mobile phones, tablets, and desktop displays.

---

## 🚀 Quick Start for Beginners

### 1. Prerequisites
- **Node.js** (v18.17 or higher recommended; v20+ LTS installed)
- A free **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com/)

### 2. Local Setup
1. Open terminal in the project directory:
   ```bash
   cd "my website"
   ```

2. Copy the `.env.example` file to create your `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

3. Open `.env.local` and add your Gemini API key:
   ```env
   GEMINI_API_KEY=AIzaSy...YourRealKeyHere
   GEMINI_MODEL=gemini-2.5-flash
   ```

4. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

5. Start the local development server:
   ```bash
   npm run dev
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 🎬 How to Add Your Real YouTube Video IDs

To replace the showcase video cards with your actual YouTube video uploads:

1. Open your YouTube Channel: [Faster FF 08](https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg)
2. Click any video and copy its 11-character video ID from the URL:
   - Example URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`
3. Open the file **`src/data/videos.ts`** in your code editor.
4. Replace the sample items:
   ```typescript
   {
     id: "YOUR_REAL_VIDEO_ID_HERE", // e.g. "dQw4w9WgXcQ"
     title: "My Insane 1v4 Clash Squad Clutch!",
     description: "Watch how I wiped the enemy team in Free Fire Grandmaster lobby.",
     category: "Headshots", // Headshots | Clash Squad | Rank Push | Tutorial | Shorts
     duration: "10:24",
     viewsEstimate: "15K",
     isPlaceholder: false, // <-- Set to false once you add your real ID
   }
   ```
5. Save the file. The site will automatically display your video thumbnails and open the exact video on YouTube!

---

## 🌐 Deploying to Vercel (Step-by-Step)

Deploying to Vercel is free and takes under 3 minutes:

### Option A: Using the Vercel Dashboard (Recommended)
1. Push your code to your GitHub repository (do **not** push `.env.local` — it is automatically ignored by `.gitignore`).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your GitHub repository (`faster-ff-08` or `my-website`).
5. Under **Environment Variables**, add:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: *(Paste your Gemini API key from Google AI Studio)*
   - **Key**: `GEMINI_MODEL`
   - **Value**: `gemini-2.5-flash`
6. Click **"Deploy"**. Vercel will build the project and provide your live URL (e.g., `https://faster-ff-08.vercel.app`)!

### Option B: Using Vercel CLI
```bash
npx vercel
# Follow the interactive prompts to link and deploy
# Set your environment variable:
npx vercel env add GEMINI_API_KEY
```

---

## 🎨 Integrating with Vercel v0

If you wish to iterate or modify components using **Vercel v0**:
1. All UI components are modular React TypeScript components in `src/components/`.
2. Each component is styled with standard Tailwind CSS and esports utility classes found in `src/app/globals.css`.
3. You can paste any component into [v0.dev](https://v0.dev) for quick UI tweaks, and paste the updated JSX right back into `src/components/`.

---

## 🔒 Security Best Practices

- **Never** expose `GEMINI_API_KEY` with `NEXT_PUBLIC_`.
- All AI calls are mediated through the server-side route `/api/ai`, which validates inputs, enforces length limits, whitelists allowed modes, and safely catches errors.
- Your API key remains protected on the Vercel server.

---

## 💰 Google AdSense Integration & Verification

Your Google AdSense Publisher ID (`pub-6711715804152191`) is already integrated into the site:
- **Verification Script**: Embedded in `src/app/layout.tsx` via Next.js `Script` (`ca-pub-6711715804152191`).
- **Site Ownership Meta Tag**: Added via `google-adsense-account` in `metadata.other`.
- **ads.txt**: Created at `public/ads.txt` containing your exact authorized seller declaration:
  ```
  google.com, pub-6711715804152191, DIRECT, f08c47fec0942fa0
  ```
- **Policy Compliance**: Ads are strictly separated from buttons, navigation, and interactive AI tools. No fake ads or invented ad slot IDs are displayed.

### How to Verify & Activate on Google AdSense:
1. **Deploy to Vercel**: Connect your custom domain (e.g. `fasterff08.com`) or live production URL in Vercel.
2. **Go to Google AdSense**: Open [Google AdSense Dashboard](https://adsense.google.com/).
3. **Add Your Site**:
   - Navigate to **Sites** -> **Add site**.
   - Enter your domain URL and click **Save**.
4. **Request Verification / Review**:
   - AdSense will scan for the verification code (`ca-pub-6711715804152191`) and `ads.txt`, both of which are already configured.
   - Click **"Verify"** / **"Request review"**.
5. **Turn On Auto Ads**:
   - Under **Ads** -> **By site**, enable **Auto Ads** for your domain. Google will automatically place responsive ads in optimal, non-intrusive areas without altering your design.
6. **(Optional) Manual Ad Units**:
   - When Google approves your account, you can create a Display Ad Unit in AdSense to get an Ad Slot ID.
   - Pass that ID into the `<AdSenseBanner slot="YOUR_SLOT_ID" />` component in `src/app/page.tsx`.

---

## 📞 Support & Community

- **Official Channel**: [https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg](https://www.youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg)
- **Content Focus**: Garena Free Fire Gameplay, One-Tap Montages, Rank Pushing, and Esports Strategy.
