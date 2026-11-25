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
        background: "linear-gradient(180deg, #0b1233 0%, #07061a 70%)",
        color: "#cdd5e3",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#f6f4fa" }}>
          <span>adame</span>
          <span style={{ color: "#ff4fa3" }}>.</span>
          <span>dev</span>
          <span style={{ color: "#b8ff5a" }}>_</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, color: "#f6f4fa" }}>Camilly Adame</div>
          <div style={{ display: "flex", marginTop: 20, fontSize: 30, color: "#cdd5e3" }}>
            Desenvolvedora full-stack · Ciência de Dados
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 22 }}>
          <span style={{ display: "flex", padding: "10px 22px", borderRadius: 999, background: "rgba(184,255,90,0.14)", color: "#e4ffc2" }}>
            TypeScript · React · Next.js
          </span>
          <span style={{ display: "flex", padding: "10px 22px", borderRadius: 999, background: "rgba(255,79,163,0.16)", color: "#ffe1ef" }}>
            Node.js · PostgreSQL
          </span>
        </div>
      </div>
    </div>,
    size,
  );
}
