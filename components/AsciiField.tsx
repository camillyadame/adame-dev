"use client";

import { useEffect, useRef } from "react";

/*
  Campo de dados em ASCII.
  Uma superfície de ondas (soma de senos + ondulação radial) amostrada em
  uma grade de caracteres. A massa de texto fica concentrada numa elipse
  suave e reage de leve ao ponteiro. Respeita prefers-reduced-motion
  (desenha um único quadro) e pausa quando sai da tela.
*/

const RAMP = " .·:;-=+*%#";
const CELL_W = 9;
const CELL_H = 15;
const FPS = 24;

export default function AsciiField({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -9999, y: -9999, k: 0 };
    let w = 0;
    let h = 0;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let last = 0;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / CELL_W);
      rows = Math.ceil(h / CELL_H);
      ctx.font = `12px ${getComputedStyle(document.body).getPropertyValue("--font-mono") || "monospace"}, monospace`;
      ctx.textBaseline = "top";
    };

    const draw = (time: number) => {
      const t = (time - start) / 1000;
      ctx.clearRect(0, 0, w, h);

      const wide = w >= 768;
      const cx = wide ? w * 0.7 : w * 0.5;
      const cy = wide ? h * 0.5 : h * 0.19;
      const rx = wide ? w * 0.36 : w * 0.62;
      const ry = wide ? h * 0.46 : h * 0.18;

      // agrupa por camada para trocar estilo de pintura poucas vezes
      const layers: Record<string, { x: number; y: number; c: string }[]> = {};

      for (let j = 0; j < rows; j++) {
        const y = j * CELL_H;
        const ny = (y - cy) / ry;
        for (let i = 0; i < cols; i++) {
          const x = i * CELL_W;
          const nx = (x - cx) / rx;
          const d = nx * nx + ny * ny;
          if (d > 1.15) continue;
          const mask = Math.max(0, 1 - d) ** 0.8;

          const r = Math.sqrt(d);
          let v =
            Math.sin(nx * 3.1 + t * 0.6) +
            Math.sin(ny * 4.3 - t * 0.45) +
            Math.sin((nx + ny) * 2.4 + t * 0.35) +
            Math.sin(r * 9 - t * 1.2) * 0.9;

          if (pointer.k > 0.01) {
            const px = x - pointer.x;
            const py = y - pointer.y;
            const pd = Math.sqrt(px * px + py * py);
            v += Math.sin(pd * 0.06 - t * 4) * Math.exp(-pd / 140) * 1.6 * pointer.k;
          }

          const n = (v + 3.9) / 7.8; // ~0..1
          const level = Math.min(RAMP.length - 1, Math.max(0, Math.floor(n * mask * RAMP.length * 1.15)));
          if (level === 0) continue;
          const ch = RAMP[level];

          let key: string;
          const hash = (i * 73856093) ^ (j * 19349663);
          if (level >= RAMP.length - 2 && (hash & 15) === 0) key = "lime";
          else if (level >= RAMP.length - 3 && (hash & 63) === 5) key = "pink";
          else key = `m${Math.min(5, Math.floor(mask * 6))}`;

          (layers[key] ||= []).push({ x, y, c: ch });
        }
      }

      for (const key in layers) {
        if (key === "lime") {
          ctx.fillStyle = "rgba(184,255,90,0.75)";
        } else if (key === "pink") {
          ctx.fillStyle = "rgba(255,79,163,0.8)";
        } else {
          const m = Number(key.slice(1));
          ctx.fillStyle = `rgba(205,213,227,${(0.08 + m * 0.07) * (wide ? 1 : 0.6)})`;
        }
        for (const p of layers[key]) ctx.fillText(p.c, p.x, p.y);
      }
    };

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || time - last < 1000 / FPS) return;
      last = time;
      pointer.k *= 0.96;
      draw(time);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.k = 1;
    };

    resize();
    draw(start + 4000);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(start + 4000);
    });
    ro.observe(canvas);

    let io: IntersectionObserver | undefined;
    if (!reduce) {
      io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      io.observe(canvas);
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io?.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
