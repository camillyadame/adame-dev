"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/*
  A mascote ganha vida sem trocar a ilustração original:
  - respira (escala vertical suave a partir dos pés);
  - pisca em intervalos aleatórios (camada mascot-blink.png com as pálpebras);
  - se inclina na direção do cursor e balança com a velocidade da rolagem;
  - ao clicar ou tocar, dá um pulinho, solta corações e fala uma frase nova.
  Com prefers-reduced-motion, fica parada e só o balão de fala funciona.
*/

const LINES = [
  "oi! eu sou a Camilly_",
  "construo sistemas do banco à interface",
  "o ADA Repair tem 12 tabelas, sabia?",
  "agora estou estudando dados e IA",
  "bora conversar? me chama no linkedin ↗",
];

type Heart = { id: number; x: number; c: string };

export default function Mascot() {
  const frame = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const [line, setLine] = useState(0);
  const [talking, setTalking] = useState(false);
  const [blink, setBlink] = useState(false);
  const [hop, setHop] = useState(0);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const reduce = useRef(false);
  const talkTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const say = useCallback((next?: boolean) => {
    if (next) setLine((l) => (l + 1) % LINES.length);
    setTalking(true);
    clearTimeout(talkTimer.current);
    talkTimer.current = setTimeout(() => setTalking(false), 4200);
  }, []);

  // inclinação seguindo o cursor + balanço com a rolagem
  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce.current) return;

    let target = 0;
    let angle = 0;
    let sway = 0;
    let lastY = window.scrollY;
    let raf = 0;
    let visible = false;

    const onMove = (e: PointerEvent) => {
      const el = frame.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      target = Math.max(-1, Math.min(1, dx / 500)) * 6;
    };
    const onScroll = () => {
      const y = window.scrollY;
      sway = Math.max(-8, Math.min(8, sway + (y - lastY) * 0.06));
      lastY = y;
    };
    const loop = () => {
      raf = requestAnimationFrame(loop);
      if (!visible || !tilt.current) return;
      sway *= 0.9;
      angle += (target + sway - angle) * 0.08;
      tilt.current.style.transform = `rotate(${angle.toFixed(2)}deg) translateX(${(angle * 0.6).toFixed(2)}px)`;
    };

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (e.isIntersecting && e.intersectionRatio > 0.6) say();
    }, { threshold: [0, 0.6] });
    if (frame.current) io.observe(frame.current);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [say]);

  // piscar em intervalos aleatórios, às vezes duas vezes seguidas
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let t: ReturnType<typeof setTimeout>;
    const once = (after: () => void) => {
      setBlink(true);
      t = setTimeout(() => {
        setBlink(false);
        after();
      }, 130);
    };
    const schedule = () => {
      t = setTimeout(() => {
        once(() => {
          if (Math.random() < 0.25) t = setTimeout(() => once(schedule), 160);
          else schedule();
        });
      }, 2200 + Math.random() * 3800);
    };
    schedule();
    return () => clearTimeout(t);
  }, []);

  useEffect(() => () => clearTimeout(talkTimer.current), []);

  const onClick = () => {
    say(true);
    if (reduce.current) return;
    setHop((h) => h + 1);
    setBlink(true);
    setTimeout(() => setBlink(false), 160);
    const colors = ["text-pink", "text-lime", "text-lilac"];
    const batch = Array.from({ length: 4 }, (_, i) => ({
      id: Date.now() + i,
      x: i % 2 ? 68 + Math.random() * 20 : 8 + Math.random() * 20,
      c: colors[i % 3],
    }));
    setHearts((hs) => [...hs, ...batch]);
    setTimeout(() => setHearts((hs) => hs.filter((h) => !batch.includes(h))), 1400);
  };

  return (
    <div className="relative mx-auto w-48 md:mx-0 md:w-52">
      {/* balão de fala */}
      <div
        aria-live="polite"
        className={`absolute -top-3 left-1/2 z-20 w-max max-w-[15rem] -translate-x-1/2 -translate-y-full rounded-lg border border-line-strong bg-surface-2 px-3 py-2 font-mono text-[12px] leading-snug text-white shadow-lg transition-all duration-300 md:left-[70%] ${
          talking ? "opacity-100" : "pointer-events-none translate-y-[calc(-100%+6px)] opacity-0"
        }`}
      >
        {LINES[line]}
        <span
          aria-hidden="true"
          className="absolute -bottom-[5px] left-1/2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-line-strong bg-surface-2 md:left-[30%]"
        />
      </div>

      <button
        type="button"
        onClick={onClick}
        onMouseEnter={() => say()}
        aria-label="Avatar ilustrado da Camilly. Clique para ela dizer algo."
        className="group relative block h-64 w-full cursor-pointer overflow-hidden rounded-lg border border-line bg-gradient-to-b from-surface-2 to-surface md:h-72"
      >
        {/* sombra no chão */}
        <span aria-hidden="true" className="mascot-shadow absolute bottom-2 left-1/2 h-3 w-24 -translate-x-1/2 rounded-[50%] bg-black/40 blur-[3px]" />

        <div ref={frame} className="absolute inset-x-0 bottom-0 top-4 flex justify-center">
          <div ref={tilt} className="h-full origin-bottom will-change-transform">
            <div key={hop} className={`h-full origin-bottom ${hop ? "mascot-hop" : ""}`}>
              <div className="mascot-breathe relative h-full origin-bottom" style={{ aspectRatio: "631 / 1494" }}>
                <Image
                  src="/brand/mascot-transparent.png"
                  alt=""
                  fill
                  sizes="130px"
                  className="object-contain"
                  draggable={false}
                />
                <Image
                  src="/brand/mascot-blink.png"
                  alt=""
                  width={220}
                  height={115}
                  draggable={false}
                  className="absolute"
                  style={{
                    left: "40.41%",
                    top: "15.73%",
                    width: "34.87%",
                    height: "7.7%",
                    opacity: blink ? 1 : 0,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {hearts.map((h) => (
          <span
            key={h.id}
            aria-hidden="true"
            className={`mascot-heart pointer-events-none absolute bottom-[45%] font-mono text-lg ${h.c}`}
            style={{ left: `${h.x}%` }}
          >
            ♡
          </span>
        ))}
      </button>

      <p className="mt-2 text-center font-mono text-[11px] text-muted md:text-left">
        clique em mim_
      </p>
    </div>
  );
}
