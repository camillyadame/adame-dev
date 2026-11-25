import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Pill } from "@/components/ui";
import { inProgress, projects } from "@/data/projects";
import { education, experience, site, stack } from "@/data/site";

export const metadata: Metadata = {
  title: "Currículo",
  description: `Currículo de ${site.name}, ${site.role.toLowerCase()} e estudante de Ciência de Dados.`,
  alternates: { canonical: "/curriculo" },
};

/*
  A mesma página serve para leitura na tela e para impressão: no print o
  fundo fica branco, o texto escuro e cabeçalho/rodapé somem. O PDF em
  /public é gerado a partir dela (scripts/cv-pdf.mjs).
*/

const host = site.url.replace(/^https?:\/\//, "");

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section grid gap-3 border-t border-line py-8 md:grid-cols-[10rem_1fr] md:gap-8 print:py-4">
      <h2 className="font-mono text-[13px] font-normal uppercase tracking-wider text-lime print:text-black">
        {title}
      </h2>
      <div className="space-y-5 text-[15px] leading-relaxed text-text print:space-y-3 print:text-black">
        {children}
      </div>
    </section>
  );
}

export default function CvPage() {
  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>
      <main className="cv wrap pb-20 pt-12 sm:pt-16">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link href="/" className="font-mono text-[13px] text-muted transition-colors hover:text-white">
            ← início
          </Link>
          <Pill href={site.cvPdf} tone="lime" external>
            baixar pdf
          </Pill>
        </div>

        <header className="pb-8 print:pb-4">
          <h1 className="font-mono text-[34px] font-normal leading-tight text-white sm:text-[42px] print:text-[20pt] print:text-black">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-text print:text-[12pt] print:text-black">
            {site.role} · estudante de Ciência de Dados
          </p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[13px] text-text/90 print:mt-3 print:text-[9.5pt] print:text-black">
            <li>
              <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a className="link" href={site.linkedin}>linkedin.com/in/camilly-adame</a>
            </li>
            <li>
              <a className="link" href={site.github}>github.com/camillyadame</a>
            </li>
            <li>
              <a className="link" href={site.url}>{host}</a>
            </li>
          </ul>
          <p className="mt-2 font-mono text-[13px] text-muted print:text-[9.5pt] print:text-neutral-600">
            {site.location} · {site.modality}
          </p>
          <p className="mt-1 font-mono text-[13px] text-muted print:text-[9.5pt] print:text-neutral-600">
            {site.relocation}
          </p>
        </header>

        <Section title="resumo">
          <p>
            Desenvolvedora full-stack com dois sistemas em uso por negócios reais, construídos de ponta a
            ponta: modelagem de dados, API, regras de acesso no servidor, interface e deploy. Trabalho
            principalmente com TypeScript, React, Next.js, Node.js e PostgreSQL. Curso Ciência de Dados
            na Univesp e busco uma vaga para crescer em um time de produto.
          </p>
        </Section>

        <Section title="projetos">
          {projects.map((p) => (
            <article key={p.slug} className="cv-item">
              <h3 className="font-mono text-[15px] font-normal text-white print:text-[10.5pt] print:font-bold print:text-black">
                {p.name} <span className="text-muted print:text-neutral-600">· {p.kind}</span>
              </h3>
              <p className="mt-0.5 font-mono text-[12px] text-muted print:text-[9pt] print:text-neutral-600">
                {p.status} · {p.stack.join(", ")}
              </p>
              <p className="mt-2">{p.summary}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-lime print:marker:text-black">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <p className="mt-2 font-mono text-[12px] print:text-[9pt]">
                <a className="link" href={`${site.url}/projetos/${p.slug}`}>
                  {host}/projetos/{p.slug}
                </a>
                {p.links.map((l) => (
                  <span key={l.href}>
                    {" · "}
                    <a className="link" href={l.href}>
                      {l.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                  </span>
                ))}
              </p>
            </article>
          ))}
          <p className="text-[14px] print:text-[10pt]">
            <span className="font-mono text-[12px] text-pink print:text-[9pt] print:text-black">em construção: </span>
            {inProgress.map((p, i) => (
              <span key={p.name}>
                {i > 0 && "; "}
                <span className="text-white print:font-bold print:text-black">{p.name}</span> ({p.kind})
              </span>
            ))}
            .
          </p>
        </Section>

        <Section title="experiência">
          {experience.map((e) => (
            <article key={e.org} className="cv-item">
              <h3 className="font-mono text-[15px] font-normal text-white print:text-[10.5pt] print:font-bold print:text-black">
                {e.org} <span className="text-muted print:font-normal print:text-neutral-600">· {e.role}</span>
              </h3>
              <p className="mt-0.5 font-mono text-[12px] text-muted print:text-[9pt] print:text-neutral-600">{e.when}</p>
              <p className="mt-1.5">{e.text}</p>
            </article>
          ))}
        </Section>

        <Section title="formação">
          <p>
            <span className="text-white print:font-bold print:text-black">{education.course}</span> ·{" "}
            {education.school}
            <span className="block font-mono text-[12px] text-muted print:text-[9pt] print:text-neutral-600">
              {education.status}
            </span>
          </p>
          <p>{education.topics}</p>
        </Section>

        <Section title="tecnologias">
          <dl className="space-y-1.5">
            {stack.map((g) => (
              <div key={g.label} className="flex flex-wrap gap-x-2">
                <dt className="font-mono text-[13px] text-muted print:text-[9.5pt] print:text-neutral-600">{g.label}:</dt>
                <dd>{g.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
