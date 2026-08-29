import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import SectionLabel from "./SectionLabel";

export default function Services() {
  return (
    <section id="servicos" className="bg-graphite py-20 text-offwhite md:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel index="03" label="SERVIÇOS" tone="light" />
            <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
              O que podemos construir
            </h2>
          </div>
          <span className="font-mono text-xs text-offwhite/35">catálogo_</span>
        </div>

        <div className="mt-12 border-t border-offwhite/10">
          {services.map((service, i) => (
            <div
              key={service.id}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-offwhite/10 py-7 transition-colors hover:bg-offwhite/[0.03] sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-x-8"
            >
              <span className="font-mono text-xs text-lime">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="flex items-center gap-2.5">
                  <h3 className="font-display text-lg font-bold sm:text-xl">
                    {service.name}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-offwhite/0 transition-colors group-hover:text-pink"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-offwhite/55">
                  {service.description}
                </p>
              </div>

              <div className="col-span-2 mt-4 sm:col-span-1 sm:mt-0 sm:text-right">
                <p className="font-mono text-[10px] uppercase tracking-widest text-offwhite/35">
                  a partir de
                </p>
                <p className="font-display text-xl font-bold text-offwhite">
                  {service.priceFrom}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-offwhite/40">
          Valores iniciais para projetos de escopo essencial. O investimento
          final varia conforme funcionalidades, integrações e complexidade.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-offwhite/60 sm:flex-row">
          <span>Não encontrou o que precisa?</span>
          <a
            href="#contato"
            className="underline-draw group inline-flex items-center gap-1.5 font-medium text-lime"
          >
            me conta o problema
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
