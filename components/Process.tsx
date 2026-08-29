import { ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

const steps = [
  "Você me conta o problema.",
  "Eu entendo seu processo e suas necessidades.",
  "Definimos a solução, o escopo e o investimento.",
  "Desenvolvimento do projeto.",
  "Testes, ajustes e validações.",
  "Sua solução entra no ar.",
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-14 md:py-16">
      <div className="container-page">
        <SectionLabel index="06" label="COMO FUNCIONA" dot="pink" />

        <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Como um projeto acontece
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-graphite/55">
            Um processo claro do primeiro contato até a solução funcionando.
          </p>
        </div>

        <ol className="mt-8 grid border-x border-t border-graphite/10 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="group relative min-h-36 border-b border-graphite/10 p-6 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-lime">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="text-graphite/20 transition-transform group-hover:translate-x-1 group-hover:text-pink"
                />
              </div>
              <p className="mt-7 max-w-[15rem] text-base leading-relaxed text-graphite/75">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
