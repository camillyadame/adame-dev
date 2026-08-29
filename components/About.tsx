import { Target, Wrench, MessageCircle, Heart, ArrowRight } from "lucide-react";
import MascotPlaceholder from "./MascotPlaceholder";
import SectionLabel from "./SectionLabel";

const pillars = [
  { icon: Target, text: "Foco no que precisa funcionar" },
  { icon: Wrench, text: "Tecnologia escolhida para cada projeto" },
  { icon: MessageCircle, text: "Comunicação clara durante o processo" },
  { icon: Heart, text: "Soluções pensadas para o seu negócio" },
];

export default function About() {
  return (
    <section id="sobre" className="border-y border-graphite/10 py-14 md:py-16">
      <div className="container-page grid gap-10 md:grid-cols-[minmax(220px,0.75fr)_1.25fr] md:items-center lg:gap-16">
        <div className="flex justify-center md:justify-start">
          <MascotPlaceholder size="lg" variant="about" />
        </div>

        <div>
          <SectionLabel index="07" label="SOBRE" dot="pink" />

          <h2 className="mt-6 font-display text-3xl font-bold sm:text-4xl">
            Prazer, <span className="text-pink">Camilly</span>
            <span className="font-mono text-graphite">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-graphite/70">
            Sou desenvolvedora, fundadora da Adame.dev e acadêmica de Ciência de Dados. Transformo problemas de rotina em sites, automações e sistemas personalizados — sempre começando pelo que precisa funcionar melhor no seu negócio.
          </p>

          <p className="mt-4 font-mono text-xs text-graphite/45">Projetos online para todo o Brasil · baseada em Presidente Epitácio — SP</p>

          <ul className="mt-8 grid gap-x-8 gap-y-5 border-t border-graphite/10 pt-7 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime/15">
                  <Icon size={15} className="text-graphite/70" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-graphite/80">{text}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-graphite px-6 py-3 text-sm font-medium text-graphite transition-colors hover:bg-graphite hover:text-offwhite"
          >
            me conta o problema
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
