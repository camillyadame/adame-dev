"use client";

import { useEffect } from "react";

/*
  Motor de movimento da página, sem dependências.
  - Publica --scroll (px) e --progress (0..1) no <html>, e --local em cada
    [data-parallax], atualizados uma vez por quadro. Elementos decorativos
    usam essas variáveis no CSS.
  - Revela [data-reveal] quando entram na tela. O conteúdo só começa
    escondido depois que este script roda (classe .fx), então nada some
    sem JavaScript.
  - Com prefers-reduced-motion, não faz nada: tudo fica estático e visível.
*/
export default function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = Math.max(1, root.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll", y.toFixed(1));
      root.style.setProperty("--progress", (y / max).toFixed(4));
      // paralaxe local: distância do centro do bloco ao centro da tela
      const mid = window.innerHeight / 2;
      for (const el of layers) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > window.innerHeight + 200) continue;
        el.style.setProperty("--local", (mid - (r.top + r.height / 2)).toFixed(1));
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const initial: HTMLElement[] = [];
    els.forEach((el) => {
      // o que já está na tela ao carregar entra logo, em sequência
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) initial.push(el);
      else io.observe(el);
    });
    root.classList.add("fx");
    // espera dois quadros para o estado inicial ser pintado e a transição rodar
    let enter = requestAnimationFrame(() => {
      enter = requestAnimationFrame(() => initial.forEach((el) => el.classList.add("is-in")));
    });

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(enter);
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[2px]">
      <div className="progress-bar h-full origin-left bg-gradient-to-r from-navy-glow via-magenta to-aqua" />
    </div>
  );
}
