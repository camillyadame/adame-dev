import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import Cursor from "./Cursor";
import SectionLabel from "./SectionLabel";

export default function FinalCTA() {
  const primaryHref = siteConfig.whatsapp || siteConfig.instagram;

  return (
    <section id="contato" className="relative overflow-hidden bg-graphite py-20 text-offwhite md:py-24">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute -left-6 top-10 h-28 w-28 text-offwhite/10"
      />
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute -right-6 bottom-10 h-28 w-28 text-offwhite/10"
      />

      <div className="container-page relative">
        <SectionLabel index="09" label="VAMOS COMEÇAR" tone="light" />

        <div className="mt-9 overflow-hidden rounded-[32px] border border-offwhite/10 bg-offwhite/[0.025]">
          <div className="grid items-stretch lg:grid-cols-[190px_minmax(0,1fr)_auto]">
            <div className="flex min-h-40 items-center justify-center border-b border-offwhite/10 px-7 py-8 lg:border-b-0 lg:border-r">
              <span className="font-mono text-5xl font-bold text-offwhite sm:text-6xl" aria-label="a ponto cursor">
                a<span className="text-pink">.</span><span className="text-lime">_</span>
              </span>
            </div>

            <div className="px-7 py-9 sm:px-10 lg:py-10">
              <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.85rem]">
                Tem alguma coisa no seu negócio que poderia{" "}
                <span className="text-lime">
                  funcionar melhor
                  <Cursor animate className="text-lime" />
                </span>
                ?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-offwhite/55 sm:text-base">
                Você não precisa chegar com a solução pronta. Me conte o problema e eu te ajudo a entender o próximo passo.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-offwhite/50">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-draw inline-flex items-center gap-2 hover:text-offwhite"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  WhatsApp
                </a>

                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="underline-draw hover:text-offwhite"
                >
                  Instagram
                </a>

                {siteConfig.email && (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="underline-draw inline-flex items-center gap-2 hover:text-offwhite"
                  >
                    <Mail size={15} aria-hidden="true" />
                    {siteConfig.email}
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center border-t border-offwhite/10 px-7 py-8 lg:border-l lg:border-t-0 lg:px-9">
              <a
                href={primaryHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-lime px-7 py-3.5 text-sm font-semibold text-graphite transition-transform hover:-translate-y-0.5 lg:w-auto"
              >
                me conta o problema
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
