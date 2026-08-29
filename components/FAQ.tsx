import { Plus } from "lucide-react";
import { faq } from "@/data/faq";
import SectionLabel from "./SectionLabel";

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-14 md:py-16">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute -left-4 bottom-10 h-24 w-24 text-graphite/10"
      />

      <div className="container-page">
        <SectionLabel index="08" label="FAQ" dot="pink" />

        <div className="mt-5 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Tire as dúvidas antes de começar.
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-graphite/60">
              Sem letra miúda: aqui estão as respostas para as dúvidas que mais
              costumam aparecer antes de um projeto.
            </p>
          </div>

          <div className="divide-y divide-graphite/10 border-y border-graphite/10">
            {faq.map((item, index) => (
              <details
                key={item.id}
                open={index === 0}
                className="group border-l-2 border-l-transparent pl-5 open:border-l-lime"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left focus-visible:outline-none [&::-webkit-details-marker]:hidden">
                  <span className="text-sm font-medium text-graphite sm:text-base">
                    {item.question}
                  </span>
                  <Plus
                    size={18}
                    aria-hidden="true"
                    className="shrink-0 text-graphite/40 transition-all duration-200 group-open:rotate-45 group-open:text-pink"
                  />
                </summary>
                <div className="faq-answer pr-8 pb-5">
                  <p className="text-sm leading-relaxed text-graphite/65">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
