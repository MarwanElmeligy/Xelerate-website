import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Branded Open Graph card. Text is real typography, never baked into imagery. */
export async function renderOg({ title, kicker, accent = "#4fd18b" }: { title: string; kicker: string; accent?: string }) {
  const logo = await readFile(join(process.cwd(), "public/images/brand/xelerate-logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #04121a 0%, #071c24 55%, #0b2f35 100%)",
          padding: 72,
          color: "white",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -160,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: `radial-gradient(circle, ${accent}55 0%, transparent 65%)`,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", background: "white", borderRadius: 18, padding: "14px 22px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={196} height={72} alt="" />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, letterSpacing: 3, textTransform: "uppercase", color: accent, marginBottom: 22 }}>
            {kicker}
          </div>
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>{title}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#a9bac0" }}>
          <span>Oracle NetSuite Solution Provider Partner</span>
          <span>xelerate.org</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
