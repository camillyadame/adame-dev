import { Boxes, GraduationCap, MessagesSquare, Workflow } from "lucide-react";
import SectionLabel from "./SectionLabel";

const differentials = [
  {
    title: "Feito para o seu negócio",
    text: "A solução parte da sua rotina e do problema real — não de um template ao qual você precisa se adaptar.",
    icon: Boxes,
  },
  {
    title: "Tudo pode conversar",
    text: "Site, sistema, agenda e automações podem ser integrados quando isso realmente simplifica o seu processo.",
    icon: Workflow,
  },
  {
    title: "Kit do projeto + treinamento",
    text: "Na entrega, você recebe acessos e orientações organizados, material de apoio e treinamento para usar a solução com autonomia.",
    icon: GraduationCap,
  },
  {
    title: "Sem tecnologuês",
    text: "Você me conta o que precisa funcionar melhor. Eu traduzo o problema em uma solução possível e explico cada decisão.",
    icon: MessagesSquare,
  },
];

export default function Value() {
  return (
    <section className="py-14 md:py-16">
      <div className="container-page">
        <SectionLabel index="04" label="DIFERENCIAL" dot="pink" />

        <div className="mt-5 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-14">
          <h2 className="max-w-xl font-display text-3xl font-bold leading-[1.06] sm:text-4xl">
            Tecnologia por si só não resolve um negócio.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-graphite/60 sm:text-base">
            Uma ferramenta pode gerar uma página. Meu trabalho começa antes: entender o que está atrapalhando sua rotina e transformar isso em uma solução que faça sentido para o seu negócio.
          </p>
        </div>

        <div className="mt-8 grid border-l border-t border-graphite/10 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map(({ title, text, icon: Icon }, index) => (
            <article key={title} className="border-b border-r border-graphite/10 p-5 md:p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-lime">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={18} className="text-pink" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-base font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/60">{text}</p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-graphite/45">
          Treinamento e material de entrega fazem parte do encerramento do projeto. Suporte contínuo e manutenção, quando necessários, são combinados separadamente.
        </p>
      </div>
    </section>
  );
}
