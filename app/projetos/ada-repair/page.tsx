import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { projects } from "@/data/projects";

const project = projects[1];

export const metadata: Metadata = {
  title: "ADA Repair — Case",
  description:
    "Case de sistema administrativo sob medida para assistência técnica, com clientes, aparelhos, ordens de serviço, estoque e outros fluxos operacionais.",
  alternates: {
    canonical: "/projetos/ada-repair",
  },
  openGraph: {
    title: "ADA Repair — Case | Adame.dev",
    description:
      "Sistema interno sob medida para centralizar a operação de uma assistência técnica.",
    url: "/projetos/ada-repair",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-graphite text-offwhite">
      <div className="container-page py-10 md:py-16">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-offwhite/55 hover:text-lime"
        >
          <ArrowLeft size={15} /> voltar aos projetos
        </Link>

        <div className="mt-14 flex items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-[.2em] text-pink">
            case_02
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-offwhite/15 px-2.5 py-1 font-mono text-[9px] uppercase text-offwhite/45">
            <LockKeyhole size={11} /> sistema interno
          </span>
        </div>

        <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
          ADA Repair
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-offwhite/60">
          Tecnologia feita para a operação real: um sistema administrativo sob medida para centralizar processos que antes precisavam ser controlados separadamente.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="border border-offwhite/10 p-6">
            <p className="font-mono text-xs text-lime">PROBLEMA_</p>
            <p className="mt-3 leading-relaxed text-offwhite/70">{project.problem}</p>
          </div>
          <div className="border border-offwhite/10 p-6">
            <p className="font-mono text-xs text-pink">SOLUÇÃO_</p>
            <p className="mt-3 leading-relaxed text-offwhite/70">{project.solution}</p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-offwhite/45">
          Este é um projeto privado. O portfólio apresenta apenas telas autorizadas e informações gerais sobre a solução; acesso, credenciais e dados operacionais não são expostos.
        </p>

        <div className="mt-12 space-y-5">
          {project.images.map((im, i) => (
            <div
              key={im.src}
              className="overflow-hidden border border-offwhite/10 bg-black/20 p-2"
            >
              <Image
                src={im.src}
                alt={im.alt}
                width={1920}
                height={1080}
                className="h-auto w-full"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {project.stack.map((x) => (
            <span
              key={x}
              className="rounded-full border border-offwhite/15 px-3 py-1 font-mono text-xs text-offwhite/50"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
