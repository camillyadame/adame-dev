import { ImageResponse } from "next/og";

export const alt = "Adame.dev — Transformando problemas reais em soluções digitais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#101014",
        color: "#F7F3EF",
        padding: "68px 76px",
        fontFamily: "sans-serif",
        borderTop: "8px solid #B8FF5A",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 800 }}>
          <span>adame</span>
          <span style={{ color: "#FF4FA3" }}>.</span>
          <span>dev</span>
          <span style={{ color: "#B8FF5A" }}>_</span>
        </div>
        <div
          style={{
            display: "flex",
            border: "1px solid #3A3A40",
            borderRadius: 999,
            padding: "12px 20px",
            fontSize: 16,
            letterSpacing: 2,
            color: "#A9A7A5",
          }}
        >
          CREATIVE TECHNOLOGY STUDIO
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.02, fontWeight: 800, letterSpacing: -2 }}>
          <span>Transformando</span>
          <span style={{ color: "#FF4FA3" }}>problemas reais</span>
          <span>
            em soluções <span style={{ color: "#B8FF5A", fontFamily: "monospace" }}>digitais_</span>
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 24, color: "#A9A7A5" }}>
          Sites, sistemas e automações pensados para o seu negócio funcionar melhor.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 17 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, color: "#A9A7A5" }}>
          <span style={{ display: "flex", width: 10, height: 10, borderRadius: 10, backgroundColor: "#B8FF5A" }} />
          <span>tecnologia com propósito, não só presença online.</span>
        </div>
        <span style={{ color: "#B8FF5A", fontFamily: "monospace" }}>adamedev.com.br</span>
      </div>
    </div>,
    size,
  );
}
