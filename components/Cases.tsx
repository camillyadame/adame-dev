import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Sprout } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import SectionLabel from "./SectionLabel";

export default function Cases() {
  return (
    <section id="projetos" className="bg-graphite py-20 text-offwhite md:py-24">
      <div className="container-page">
        <SectionLabel index="05" label="PROJETOS" tone="light" />
        <div className="mt-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div><h2 className="font-display text-3xl font-bold sm:text-4xl">Projetos reais, problemas reais</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-offwhite/55">Cada projeto começa entendendo o que precisa funcionar melhor — e termina com tecnologia aplicada à rotina real.</p></div>
          <span className="font-mono text-xs text-offwhite/35">portfolio_vivo</span>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, i) => <CaseCard key={project.id} project={project} index={i + 1} />)}
        </div>
        <div className="mt-8 grid gap-5 border-t border-offwhite/10 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex gap-4"><span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-lime/30 bg-lime/10"><Sprout size={16} className="text-lime" /></span><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-pink">em desenvolvimento_</p><p className="mt-1 font-display text-lg font-bold">SEIVA</p><p className="mt-1 max-w-xl text-sm text-offwhite/50">Produto digital autoral de estudos com IA e gamificação. Em construção — porque o portfólio também pode mostrar o que está nascendo.</p></div></div>
          <span className="font-mono text-xs text-offwhite/35">produto autoral_</span>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ project, index }: { project: Project; index: number }) {
  return <article className="group">
    <div className="mb-4 flex items-baseline gap-3"><span className="font-mono text-xs text-lime">{String(index).padStart(2,"0")}</span><p className="font-mono text-[11px] uppercase tracking-widest text-pink">{project.category}</p></div>
    <div className="corner-ticks overflow-hidden border border-offwhite/10 bg-offwhite/[0.03] p-2 transition-colors group-hover:border-offwhite/20 sm:p-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-black/20"><Image src={project.images[0].src} alt={project.images[0].alt} fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]" /></div>
      <div className="mt-2 grid grid-cols-2 gap-2">{project.images.slice(1).map(image=><div key={image.src} className="relative aspect-[16/9] overflow-hidden rounded-sm bg-black/20"><Image src={image.src} alt={image.alt} fill sizes="(max-width:1024px) 50vw,25vw" className="object-cover object-top" /></div>)}</div>
    </div>
    <div className="mt-6"><div className="flex items-center gap-3"><h3 className="font-display text-xl font-bold">{project.name}</h3>{project.private && <span className="rounded-full border border-offwhite/15 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-offwhite/40">interno</span>}</div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2"><div><p className="text-[11px] font-medium uppercase tracking-wide text-offwhite/35">Problema</p><p className="mt-1.5 text-sm leading-relaxed text-offwhite/70">{project.problem}</p></div><div><p className="text-[11px] font-medium uppercase tracking-wide text-offwhite/35">Solução</p><p className="mt-1.5 text-sm leading-relaxed text-offwhite/70">{project.solution}</p></div></div>
      <ul className="mt-6 flex flex-wrap gap-2">{project.stack.map(tech=><li key={tech} className="rounded-full border border-offwhite/15 px-2.5 py-1 font-mono text-[10px] text-offwhite/50">{tech}</li>)}</ul>
      <div className="mt-6 flex flex-wrap gap-3">{project.caseHref && <Link href={project.caseHref} className="inline-flex items-center gap-2 rounded-full border border-offwhite/20 px-4 py-2 text-xs font-medium transition hover:border-lime hover:text-lime">ver case <ArrowRight size={13}/></Link>}{project.liveHref && <a href={project.liveHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-pink px-4 py-2 text-xs font-semibold text-graphite transition hover:-translate-y-0.5">visitar projeto <ExternalLink size={13}/></a>}</div>
    </div>
  </article>;
}
