import { ImageResponse } from "next/og";

export const alt = "Camilly Adame — Desenvolvedora full-stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        position: "relative",
        background: "#04051a",
        color: "#dde1f0",
        fontFamily: "sans-serif",
      }}
    >
      {/* luz da paleta: marinho, magenta e água */}
      <div style={{ position: "absolute", left: -160, top: -160, width: 760, height: 760, borderRadius: 999, display: "flex", background: "radial-gradient(circle, rgba(74,80,196,0.55), transparent 65%)" }} />
      <div style={{ position: "absolute", right: 80, top: 40, width: 560, height: 560, borderRadius: 999, display: "flex", background: "radial-gradient(circle, rgba(227,28,121,0.45), transparent 65%)" }} />
      <div style={{ position: "absolute", right: -140, bottom: -200, width: 620, height: 620, borderRadius: 999, display: "flex", background: "radial-gradient(circle, rgba(163,215,223,0.38), transparent 65%)" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#f8f8fc", fontFamily: "monospace" }}>
          <span>adame</span>
          <span style={{ color: "#e31c79" }}>.</span>
          <span>dev</span>
          <span style={{ color: "#a3d7df" }}>_</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 104, letterSpacing: -4, color: "#f8f8fc", lineHeight: 1 }}>Camilly Adame</div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 32, color: "#dde1f0" }}>
            Desenvolvedora full-stack · Ciência de Dados
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#a3d7df", fontFamily: "monospace" }}>
          TypeScript · React · Next.js · Node.js · PostgreSQL
        </div>
      </div>
    </div>,
    size,
  );
}
