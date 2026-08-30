import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Adame.dev — Transformando problemas reais em soluções digitais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#101014",
          color: "#F7F3EF",
          fontFamily: "Arial, Helvetica, sans-serif",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(247,243,239,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(247,243,239,.045) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#B8FF5A",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            zIndex: 2,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 34, fontWeight: 800 }}>adame</span>
              <span style={{ fontSize: 36, fontWeight: 800, color: "#FF4FA3" }}>.</span>
              <span style={{ fontSize: 34, fontWeight: 800 }}>dev</span>
              <span style={{ fontSize: 36, fontWeight: 800, color: "#B8FF5A" }}>_</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: "1px solid rgba(247,243,239,.15)",
                borderRadius: 999,
                padding: "12px 18px",
                fontSize: 18,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(247,243,239,.65)",
              }}
            >
              creative technology studio
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 44 }}>
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <div
                style={{
                  fontSize: 69,
                  lineHeight: 1.02,
                  fontWeight: 800,
                  letterSpacing: -2.5,
                  maxWidth: 760,
                }}
              >
                Transformando{" "}
                <span style={{ color: "#FF4FA3" }}>problemas reais</span>
                <br />
                em soluções{" "}
                <span style={{ color: "#B8FF5A", fontFamily: "monospace" }}>
                  digitais_
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: 32,
                  fontSize: 24,
                  color: "rgba(247,243,239,.65)",
                }}
              >
                Sites, sistemas e automações pensados para o seu negócio funcionar melhor.
              </div>
            </div>

            <div
              style={{
                width: 270,
                height: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "1px solid rgba(247,243,239,.14)",
                borderRadius: 28,
                background: "rgba(16,16,20,.86)",
                padding: 26,
                boxShadow: "0 24px 70px rgba(0,0,0,.35)",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: 999, background: "#FF4FA3" }} />
                <span style={{ width: 12, height: 12, borderRadius: 999, background: "rgba(247,243,239,.35)" }} />
                <span style={{ width: 12, height: 12, borderRadius: 999, background: "#B8FF5A" }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontFamily: "monospace", color: "rgba(247,243,239,.45)", fontSize: 17 }}>
                  solução_digital_
                </span>
                <span style={{ fontSize: 28, lineHeight: 1.12, fontWeight: 700 }}>
                  tecnologia com propósito.
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#B8FF5A" }} />
                <span style={{ fontFamily: "monospace", fontSize: 16, color: "rgba(247,243,239,.55)" }}>
                  adamedev.com.br
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
