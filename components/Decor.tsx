import type { CSSProperties } from "react";

/*
  Símbolos soltos que flutuam em velocidades diferentes conforme a página
  rola (paralaxe via --scroll). Puramente decorativos: aria-hidden e sem
  interceptar cliques.
*/

type Glyph = {
  c: string;
  top: string;
  left?: string;
  right?: string;
  speed: number; // deslocamento por px de rolagem (negativo sobe mais rápido que o conteúdo)
  spin?: number; // graus por px rolado
  tone: "lime" | "pink" | "lilac" | "mist";
  size?: number;
  mobile?: boolean;
};

const tones = {
  lime: "text-lime/55",
  pink: "text-pink/55",
  lilac: "text-lilac/50",
  mist: "text-text/25",
};

export function Glyphs({ items }: { items: Glyph[] }) {
  return (
    <div aria-hidden="true" data-parallax className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {items.map((g, i) => (
        <span
          key={i}
          className={`glyph absolute font-mono ${tones[g.tone]} ${g.mobile ? "" : "hidden md:block"}`}
          style={
            {
              top: g.top,
              left: g.left,
              right: g.right,
              fontSize: g.size ?? 18,
              "--speed": g.speed,
              "--spin": g.spin ?? 0,
            } as CSSProperties
          }
        >
          {g.c}
        </span>
      ))}
    </div>
  );
}

/** Faixa de tecnologias que desliza na horizontal conforme a rolagem. */
export function Ticker({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-line py-4">
      <div className="ticker flex w-max gap-8 whitespace-nowrap font-mono text-[15px] text-text/60">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t}
            <span className={i % 3 === 0 ? "text-lime" : i % 3 === 1 ? "text-pink" : "text-lilac"}>
              {i % 2 ? "✦" : "_"}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
