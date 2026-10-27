import { ImageResponse } from "next/og";

export const alt = "Faster FF 08 | Free Fire Gaming & Stylish Nickname Generator";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07070b",
          backgroundImage: "radial-gradient(circle at 50% 40%, rgba(255, 8, 68, 0.25) 0%, transparent 60%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 24px",
            borderRadius: "9999px",
            backgroundColor: "rgba(127, 29, 29, 0.6)",
            border: "1px solid rgba(255, 8, 68, 0.5)",
            color: "#fca5a5",
            fontSize: "20px",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Official Gaming Platform • 6K+ YouTube Subscribers
        </div>

        <div
          style={{
            fontSize: "72px",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "-1px",
            display: "flex",
            gap: "16px",
          }}
        >
          <span>FASTER FF 08</span>
          <span style={{ color: "#ff0844" }}>NICK FINDER</span>
        </div>

        <div
          style={{
            fontSize: "26px",
            color: "#d4d4d8",
            marginTop: "20px",
            maxWidth: "920px",
            fontWeight: "500",
          }}
        >
          100+ Stylish Free Fire Names • Ready-Made Gamertags • Symbols Combiner
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "40px",
            fontSize: "18px",
            color: "#ff0844",
            fontWeight: "bold",
          }}
        >
          youtube.com/channel/UCtKpS3-K9DL74w-xT4p5ffg
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
