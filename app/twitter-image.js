import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Inaya Estates — Buy or Sell Land in NCR's Fastest Growing Development Corridor";

function getMarkDataUri() {
  const filePath = join(process.cwd(), "public", "inaya-estates-mark.png");
  const base64 = readFileSync(filePath).toString("base64");
  return `data:image/png;base64,${base64}`;
}

export default function TwitterImage() {
  const markSrc = getMarkDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #081C42 0%, #0F3D91 55%, #124A9E 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={markSrc} width={64} height={64} alt="" />
          </div>
          <div style={{ display: "flex", fontSize: 32, fontWeight: 700, color: "#ffffff" }}>
            Inaya <span style={{ color: "#D4AF37", marginLeft: 8 }}>Estates</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 58,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Buy or Sell Land in NCR&apos;s Fastest Growing Development Corridor
        </div>

        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "rgba(255,255,255,0.75)" }}>
          Bhiwadi · Tijara · Tapukara · Khushkhera · Neemrana · Alwar
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 22,
            color: "#D4AF37",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          YOUR TRUSTED LAND INVESTMENT PARTNER
        </div>
      </div>
    ),
    { ...size }
  );
}
