import { MessageCircle, Clock, Globe, Table2, HelpCircle, ArrowRight } from "lucide-react";
import SectionLabel from "./SectionLabel";

const statements = [
  { icon: MessageCircle, text: "Minha agenda é toda pelo WhatsApp." },
  { icon: Clock, text: "Tenho que fazer isso manualmente toda vez." },
  { icon: Globe, text: "Meu negócio nem aparece direito na internet." },
  { icon: Table2, text: "Uso várias planilhas para conseguir me organizar." },
  {
    icon: HelpCircle,
    text: "Precisava de um sistema, mas nem sei por onde começar.",
  },
];

export default function Problems() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute -right-4 top-10 h-24 w-24 text-graphite/10"
      />

      <div className="container-page">
        <SectionLabel index="02" label="PROBLEMAS" dot="pink" />

        <h2 className="mt-6 max-w-lg font-display text-3xl font-bold leading-tight sm:text-4xl">
          Isso parece com o seu negócio?
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {statements.map(({ icon: Icon, text }, i) => (
            <li
              key={i}
              className="group relative rounded-2xl border border-graphite/10 bg-white/60 p-6 pt-7 text-sm leading-relaxed text-graphite/85 transition-colors hover:border-pink/40"
            >
              <span
                aria-hidden="true"
                className="absolute left-6 top-0 h-[3px] w-8 -translate-y-px bg-pink/0 transition-colors group-hover:bg-pink"
              />
              <span
                aria-hidden="true"
                className="mb-4 block font-mono text-2xl leading-none text-pink/70"
              >
                “
              </span>
              <Icon size={18} className="mb-4 text-graphite/35" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 max-w-xl border-t border-graphite/10 pt-6 text-center">
          <p className="text-graphite/60">
            Você não precisa saber qual tecnologia contratar.
          </p>
          <p className="mt-1 font-display text-lg font-bold text-graphite">
            Só precisa saber o que gostaria que funcionasse melhor.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#contato"
            className="underline-draw group inline-flex items-center gap-2 text-sm font-medium text-graphite"
          >
            me conta o problema
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
