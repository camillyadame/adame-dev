import { ArrowRight, MapPin } from "lucide-react";
import Cursor from "./Cursor";
import SectionLabel from "./SectionLabel";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-graphite py-12 text-offwhite md:py-14"
    >
      <HeroGrid />

      <div className="container-page relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(440px,1.08fr)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(500px,1.05fr)]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-4">
              <SectionLabel index="01" label="HERO" tone="light" />
              <span className="inline-flex items-center rounded-full border border-offwhite/25 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-offwhite/70">
                creative technology studio
              </span>
            </div>

            <h1 className="mt-6 max-w-[700px] font-display text-[2.85rem] font-extrabold leading-[1.01] tracking-tight sm:text-6xl lg:text-[4rem] xl:text-[4.35rem]">
              <span className="text-offwhite">Transformando</span>
              <br />
              <span className="text-pink">problemas reais</span>
              <br />
              <span className="text-offwhite">em soluções</span>
              <br />
              <span className="font-mono text-lime">
                digitais
                <Cursor animate className="text-lime" />
              </span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-relaxed text-offwhite/65 sm:text-lg">
              Sites, sistemas e automações pensados para o seu negócio funcionar
              melhor.
            </p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-graphite transition-transform hover:-translate-y-0.5"
              >
                tenho um problema para resolver
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#projetos"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-offwhite/20 px-6 py-3.5 text-sm font-medium text-offwhite/75 transition-colors hover:border-offwhite/45 hover:text-offwhite"
              >
                ver meus projetos
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <div className="mt-5 grid max-w-[620px] gap-3 sm:grid-cols-[auto_1fr]">
              <div className="inline-flex items-center gap-2 rounded-2xl border border-offwhite/15 px-4 py-3 font-mono text-[11px] text-offwhite/55">
                <span
                  className="status-dot h-2 w-2 rounded-full bg-lime"
                  aria-hidden="true"
                />
                disponível para novos projetos_
              </div>

              <div className="inline-flex items-center gap-2 rounded-2xl border border-offwhite/15 px-4 py-3 font-mono text-[11px] leading-relaxed text-offwhite/45">
                <MapPin size={14} className="shrink-0 text-pink" aria-hidden="true" />
                <span>Projetos online para todo o Brasil · baseada em Presidente Epitácio — SP</span>
              </div>
            </div>
          </div>

          <HeroInterface />
        </div>
      </div>
    </section>
  );
}

function HeroInterface() {
  return (
    <div className="relative mx-auto w-full max-w-[610px] lg:mx-0 lg:justify-self-end">
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[44px] bg-[radial-gradient(circle_at_55%_45%,rgba(255,79,163,0.12),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-7 -top-5 h-24 w-24 rounded-full border border-dashed border-lime/20"
      />
      <div
        aria-hidden="true"
        className="absolute -left-4 bottom-14 h-2.5 w-2.5 rounded-full bg-pink shadow-[0_0_24px_rgba(255,79,163,0.75)]"
      />

      <div className="relative pr-0 sm:pr-24 lg:pr-20 xl:pr-24">
        <div className="overflow-hidden rounded-[28px] border border-offwhite/15 bg-[#0B0B10]/95 shadow-[0_30px_100px_rgba(0,0,0,0.48)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-offwhite/10 px-5 py-4">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-pink" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D889FF]" />
              <span className="h-2.5 w-2.5 rounded-full bg-lime" />
            </div>
            <BrandMark className="text-lg" />
          </div>

          <div className="grid gap-5 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-offwhite/35">
                  solução digital_
                </p>
                <p className="mt-2 max-w-[300px] font-display text-xl font-semibold leading-tight text-offwhite sm:text-2xl">
                  Tecnologia com propósito, não só presença online.
                </p>
              </div>
              <span className="hidden rounded-2xl border border-pink/30 bg-pink/5 px-3 py-2 font-mono text-sm text-pink sm:block">
                &lt;/&gt;
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["01", "entender", "o problema"],
                ["02", "planejar", "a solução"],
                ["03", "construir", "para funcionar"],
              ].map(([number, title, text]) => (
                <div key={number} className="rounded-2xl border border-offwhite/10 bg-offwhite/[0.025] p-4">
                  <span className="font-mono text-[10px] text-lime">{number}</span>
                  <p className="mt-2 font-display text-sm font-semibold text-offwhite">{title}</p>
                  <p className="mt-1 text-xs text-offwhite/40">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative ml-auto -mt-20 w-[48%] min-w-[190px] max-w-[245px] sm:absolute sm:-right-1 sm:bottom-7 sm:mt-0 sm:w-[210px] lg:-right-3 xl:-right-5">
          <div className="overflow-hidden rounded-[28px] border border-offwhite/15 bg-[#0E0E13] shadow-[0_24px_70px_rgba(0,0,0,0.52)]">
            <div className="flex items-center justify-between border-b border-offwhite/10 px-4 py-4">
              <BrandMark className="text-xl" />
              <div className="space-y-1" aria-hidden="true">
                <span className="block h-px w-4 bg-offwhite/55" />
                <span className="block h-px w-4 bg-offwhite/55" />
              </div>
            </div>

            <div className="space-y-3 p-4">
              <div className="rounded-2xl border border-offwhite/10 bg-offwhite/[0.035] p-4">
                <p className="font-mono text-[10px] text-offwhite/40">projeto_</p>
                <p className="mt-1 font-display text-lg font-semibold text-offwhite">entregue<span className="text-lime">_</span></p>
                <div className="mt-5 flex h-12 items-end gap-1" aria-hidden="true">
                  {[20, 34, 28, 46, 58, 72, 88].map((height, index) => (
                    <span
                      key={`${height}-${index}`}
                      className={`w-full rounded-t-sm ${index === 6 ? "bg-lime" : "bg-pink/70"}`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-right font-mono text-xs text-lime">100%</p>
              </div>

              <div className="rounded-2xl border border-offwhite/10 px-4 py-3">
                <p className="font-mono text-[10px] text-offwhite/40">processo</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-offwhite/10">
                  <div className="h-full w-[92%] rounded-full bg-lime" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-mono font-bold text-offwhite ${className}`} aria-label="a ponto cursor">
      a<span className="text-pink">.</span><span className="text-lime">_</span>
    </span>
  );
}

function HeroGrid() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1180 640"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[78%] w-full opacity-90 md:h-[88%]"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
    >
      <g stroke="#F7F3EF" strokeOpacity="0.032">
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={64 * (i + 1)} x2="1180" y2={64 * (i + 1)} />
        ))}
        {Array.from({ length: 17 }).map((_, i) => (
          <line key={`v${i}`} x1={70 * (i + 1)} y1="0" x2={70 * (i + 1)} y2="640" />
        ))}
      </g>

      <path
        d="M 180 210 C 390 155, 535 405, 850 350"
        stroke="#F7F3EF"
        strokeOpacity="0.10"
        strokeWidth="1.5"
        strokeDasharray="3 8"
      />
    </svg>
  );
}
