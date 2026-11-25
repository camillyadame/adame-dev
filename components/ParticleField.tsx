"use client";

import { useEffect, useRef } from "react";

/*
  Nuvem de partículas fluida, nas cores da marca.

  Milhares de pequenos triângulos vazados giram em torno de um centro, em
  órbitas com velocidades diferentes (as de dentro andam mais rápido), o que
  dá a sensação de líquido em movimento. A forma da nuvem é orgânica, com
  lóbulos que respiram devagar. O ponteiro empurra as partículas, e a rolagem
  espalha a nuvem enquanto ela sai da tela.

  Desempenho: até 30 fps, partículas agrupadas por cor (um traço por cor por
  quadro), pausa fora da tela ou com a aba oculta. Com prefers-reduced-motion,
  desenha um único quadro parado.
*/

type Variant = "cloud" | "ring";

type Props = {
  className?: string;
  variant?: Variant;
  /** centro da nuvem em fração da largura/altura do canvas */
  cx?: number;
  cy?: number;
  mobileCx?: number;
  mobileCy?: number;
  /** raio em fração do menor lado */
  radius?: number;
  density?: number;
};

// azul-marinho (clareado para aparecer no escuro) → magenta → água
const STOPS: [number, number, number][] = [
  [92, 98, 220],
  [140, 70, 200],
  [227, 28, 121],
  [255, 120, 170],
  [163, 215, 223],
];
const BUCKETS = 20;

function mix(t: number) {
  const x = Math.max(0, Math.min(0.9999, t)) * (STOPS.length - 1);
  const i = Math.floor(x);
  const f = x - i;
  const a = STOPS[i];
  const b = STOPS[i + 1];
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * f)} ${Math.round(a[1] + (b[1] - a[1]) * f)} ${Math.round(
    a[2] + (b[2] - a[2]) * f,
  )})`;
}
const COLORS = Array.from({ length: BUCKETS }, (_, i) => mix(i / (BUCKETS - 1)));

type P = {
  a: number; // ângulo atual
  r: number; // raio base (0..1)
  w: number; // velocidade angular
  z: number; // profundidade (0..1)
  s: number; // tamanho
  rot: number;
  vr: number;
  ph: number;
  c: number; // balde de cor
  ox: number; // deslocamento pelo ponteiro
  oy: number;
  amb: boolean; // partícula ambiente, espalhada pela tela
  ax: number;
  ay: number;
};

function rand(seed: number) {
  // gerador simples e determinístico, para a nuvem ser sempre igual
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export default function ParticleField({
  className,
  variant = "cloud",
  cx = 0.68,
  cy = 0.48,
  mobileCx = 0.55,
  mobileCy = 0.25,
  radius = 0.4,
  density = 1,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rnd = rand(variant === "ring" ? 7 : 42);
    let w = 0;
    let h = 0;
    let dpr = 1;
    let parts: P[] = [];
    let mobile = false;

    const build = () => {
      mobile = w < 768;
      const n = Math.round((mobile ? 650 : 1500) * density);
      const amb = Math.round((mobile ? 50 : 120) * density);
      parts = [];
      for (let i = 0; i < n + amb; i++) {
        const isAmb = i >= n;
        let r: number;
        if (variant === "ring") r = 0.62 + (rnd() - 0.5) * 0.5 * rnd();
        else r = Math.pow(rnd(), 0.62);
        const a = rnd() * Math.PI * 2;
        const z = rnd();
        parts.push({
          a,
          r,
          w: (0.05 + (1 - r) * 0.16) * (rnd() < 0.5 ? 1 : 1) * (0.7 + rnd() * 0.6),
          z,
          s: 1.6 + z * 2.8 + (rnd() < 0.06 ? 2 : 0),
          rot: rnd() * Math.PI * 2,
          vr: (rnd() - 0.5) * 1.4,
          ph: rnd() * Math.PI * 2,
          c: 0,
          ox: 0,
          oy: 0,
          amb: isAmb,
          ax: rnd(),
          ay: rnd(),
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const wasMobile = mobile;
      mobile = w < 768;
      if (!parts.length || wasMobile !== mobile) build();
    };

    let px = -9999;
    let py = -9999;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      px = e.clientX - rect.left;
      py = e.clientY - rect.top;
    };
    const onLeave = () => {
      px = py = -9999;
    };

    // contorno orgânico: lóbulos que respiram com o tempo
    const shape = (a: number, t: number) =>
      1 +
      0.16 * Math.sin(3 * a + t * 0.35) +
      0.09 * Math.sin(5 * a - t * 0.22 + 1.3) +
      0.05 * Math.sin(8 * a + t * 0.5);

    const paths: Path2D[] = COLORS.map(() => new Path2D());

    const draw = (t: number) => {
      const rect = canvas.getBoundingClientRect();
      // quanto a seção já saiu pelo topo da tela (0 = inteira, 1 = fora)
      const out = Math.max(0, Math.min(1, -rect.top / Math.max(1, rect.height)));
      const ccx = w * (mobile ? mobileCx : cx);
      const ccy = h * (mobile ? mobileCy : cy);
      const R = Math.min(w, h) * (mobile ? radius * 0.92 : radius) * (1 + out * 0.7);

      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < BUCKETS; i++) paths[i] = new Path2D();
      const faint: Path2D[] = COLORS.map(() => new Path2D());

      for (const p of parts) {
        let x: number;
        let y: number;
        if (p.amb) {
          x = ((p.ax * w + t * 6 * (0.3 + p.z)) % (w + 40)) - 20;
          y = p.ay * h + Math.sin(t * 0.4 + p.ph) * 12;
        } else {
          const a = p.a + t * p.w;
          const rr = p.r * shape(a, t) * (1 + 0.035 * Math.sin(t * 0.9 + p.ph));
          // achatada na vertical e levemente inclinada, para não parecer um círculo
          x = ccx + Math.cos(a) * rr * R * 1.18;
          y = ccy + Math.sin(a) * rr * R * 0.82 + Math.cos(a * 2 + t * 0.3) * R * 0.04;
          // espalha com a rolagem
          x += (x - ccx) * out * 0.6;
          y += (y - ccy) * out * 0.6;
        }

        // o ponteiro empurra
        const dx = x - px;
        const dy = y - py;
        const d2 = dx * dx + dy * dy;
        const rad = mobile ? 90 : 140;
        if (d2 < rad * rad) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d / rad) * 26;
          p.ox += ((dx / d) * f - p.ox) * 0.15;
          p.oy += ((dy / d) * f - p.oy) * 0.15;
        } else {
          p.ox *= 0.93;
          p.oy *= 0.93;
        }
        x += p.ox;
        y += p.oy;

        // cor pela posição: diagonal da esquerda-alto (marinho) à direita-baixo (água)
        const tc = (x - ccx) / (R * 2.1) + (y - ccy) / (R * 4) + 0.5 + Math.sin(t * 0.25 + p.ph) * 0.08;
        const c = Math.max(0, Math.min(BUCKETS - 1, Math.round(tc * (BUCKETS - 1))));

        const s = p.s;
        const rot = p.rot + t * p.vr;
        const target = p.amb || p.z < 0.35 ? faint[c] : paths[c];
        target.moveTo(x + Math.cos(rot) * s, y + Math.sin(rot) * s);
        target.lineTo(x + Math.cos(rot + 2.094) * s, y + Math.sin(rot + 2.094) * s);
        target.lineTo(x + Math.cos(rot + 4.189) * s, y + Math.sin(rot + 4.189) * s);
        target.closePath();
      }

      const fade = 1 - out * 0.85;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.32 * fade;
      for (let i = 0; i < BUCKETS; i++) {
        ctx.strokeStyle = COLORS[i];
        ctx.stroke(faint[i]);
      }
      ctx.globalAlpha = 0.85 * fade;
      for (let i = 0; i < BUCKETS; i++) {
        ctx.strokeStyle = COLORS[i];
        ctx.stroke(paths[i]);
      }
      ctx.globalAlpha = 1;
    };

    resize();

    if (reduce) {
      draw(8);
      const onResize = () => {
        resize();
        draw(8);
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    let raf = 0;
    let last = 0;
    let visible = true;
    const start = performance.now();
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || document.hidden) return;
      if (now - last < 1000 / 30) return;
      last = now;
      draw((now - start) / 1000 + 8);
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    });
    io.observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [variant, cx, cy, mobileCx, mobileCy, radius, density]);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
