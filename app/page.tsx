import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import ScrollFx from "@/components/ScrollFx";
import Mascot from "@/components/Mascot";
import { Aurora, Button, Frame, SectionHead, Tag } from "@/components/ui";
import { projects, inProgress, type Project } from "@/data/projects";
import { education, experience, languages, site, stack } from "@/data/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  return (
    <>
      <ScrollFx />
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Aurora />
      <ParticleField className="absolute inset-0 -z-10 h-full w-full" />
      {/* escurece o lado do texto para a nuvem nunca competir com a leitura */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_30%,rgb(4_5_26/0.85)_55%,var(--void)_80%)] md:bg-[linear-gradient(90deg,var(--void)_8%,rgb(4_5_26/0.7)_42%,transparent_70%),linear-gradient(180deg,transparent_70%,var(--void))]"
      />
      <div className="wrap flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-14 pt-[46svh] md:justify-center md:pb-24 md:pt-24">
        <p data-reveal className="label">
          desenvolvedora full-stack · ciência de dados
        </p>
        <h1 data-reveal style={d(90)} className="display mt-5 text-[60px] sm:text-[96px] lg:text-[124px]">
          Camilly
          <br />
          <span className="grad-text">Adame</span>
        </h1>
        <p data-reveal style={d(180)} className="mt-7 max-w-[32rem] text-lg leading-relaxed text-text sm:text-xl">
          Construo sistemas web de ponta a ponta, do banco de dados à
          interface. Dois deles estão em uso todos os dias por negócios reais.
        </p>
        <div data-reveal style={d(270)} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href="/#projetos" kind="primary">
            ver projetos <span aria-hidden="true">↓</span>
          </Button>
          <Button href={site.cv}>currículo</Button>
          <span className="flex gap-5">
            <Button href={site.linkedin} kind="text" external>
              LinkedIn
            </Button>
            <Button href={site.github} kind="text" external>
              GitHub
            </Button>
          </span>
        </div>
        <p data-reveal style={d(360)} className="mt-10 flex items-start gap-2.5 text-[14px] text-muted">
          <span
            aria-hidden="true"
            className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-aqua shadow-[0_0_14px_rgb(163_215_223/0.9)]"
          />
          <span>
            Aberta a vagas · {site.modality}
            <span className="block sm:inline">
              <span className="hidden sm:inline"> · </span>
              {site.location}
            </span>
          </span>
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="relative isolate py-24 sm:py-36">
      <div className="wrap">
        <SectionHead
          index="01"
          label="projetos"
          title={
            <>
              Sistemas que saíram
              <br className="hidden sm:block" /> do papel e <span className="grad-text">estão em uso</span>
            </>
          }
          note="Cada um resolve um problema de um negócio real. Os estudos de caso contam o contexto e as decisões técnicas."
        />
        <div className="space-y-28 sm:space-y-40">
          {projects.map((p, i) => (
            <ProjectBlock key={p.slug} project={p} index={i + 1} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-28 border-t border-line pt-12 sm:mt-36">
          <p data-reveal className="label">
            em construção
          </p>
          <div className="mt-8 grid gap-12 md:grid-cols-2 md:gap-16">
            {inProgress.map((p, i) => (
              <div key={p.name} data-reveal style={d(i * 120)}>
                <h3 className="headline text-[30px] sm:text-[36px]">{p.name}</h3>
                <p className="mt-1 text-[14px] text-muted">{p.kind}</p>
                <p className="mt-4 max-w-[30rem] leading-relaxed text-text/90">{p.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectBlock({ project, index, flip }: { project: Project; index: number; flip: boolean }) {
  const [live, code] = project.links;
  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      <Link
        href={`/projetos/${project.slug}`}
        aria-label={`Ler o estudo de caso de ${project.name}`}
        className={`tilt-in block lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
      >
        <Frame src={project.cover.src} alt={project.cover.alt} url={project.url} />
      </Link>

      <div data-reveal className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="label">
          {String(index).padStart(2, "0")} · {project.kind}
        </p>
        <h3 className="headline mt-3 text-[40px] sm:text-[52px]">{project.name}</h3>
        <p className="mt-5 text-[17px] leading-relaxed text-text">{project.summary}</p>
        <ul className="mt-6 space-y-2.5 text-[15px] text-text/90">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden="true" className="mt-[9px] h-1 w-3 shrink-0 rounded-full bg-gradient-to-r from-magenta to-aqua" />
              {h}
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>
        <p className="mt-6 flex items-start gap-2.5 text-[14px] text-muted">
          <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
          {project.status}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href={`/projetos/${project.slug}`}>estudo de caso →</Button>
          {live && (
            <Button href={live.href} kind="text" external>
              {live.label}
            </Button>
          )}
          {code && (
            <Button href={code.href} kind="text" external>
              {code.label}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

function About() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden border-t border-line py-24 sm:py-36">
      <Aurora className="opacity-60" />
      <div className="wrap">
        <SectionHead
          index="02"
          label="sobre"
          title={
            <>
              Do processo do negócio
              <br className="hidden sm:block" /> ao <span className="grad-text">modelo de dados</span>
            </>
          }
        />
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div data-reveal className="flex flex-col items-center gap-10 pt-10 lg:col-span-4 lg:items-start">
            <Mascot />
          </div>

          <div className="lg:col-span-8">
            <div data-reveal style={d(100)} className="max-w-[40rem] space-y-5 text-[17px] leading-relaxed text-text">
              <p>
                Sou a Camilly, desenvolvedora e estudante de Ciência de Dados. Meus
                primeiros projetos foram para negócios reais, e foi construindo
                esses sistemas que descobri a parte de que mais gosto: entender
                como um processo funciona e transformar isso em um sistema que
                aguenta o uso do dia a dia, com regras no servidor e cuidado com
                segurança.
              </p>
              <p>
                Agora estou aprofundando dados e IA, na faculdade, no{" "}
                <span className="text-white">FoodWise AI</span> e no{" "}
                <span className="text-white">SEIVA</span>. Procuro um time onde eu
                possa crescer e contribuir com produtos de verdade.
              </p>
            </div>

            <dl data-reveal style={d(160)} className="mt-10 grid gap-6 border-t border-line pt-8 text-[15px] sm:grid-cols-3">
              <div>
                <dt className="label">formação</dt>
                <dd className="mt-2 text-text">
                  {education.course}, {education.school}
                  <span className="mt-1 block text-[14px] text-muted">{education.status}</span>
                </dd>
              </div>
              <div>
                <dt className="label">onde trabalho</dt>
                <dd className="mt-2 text-text">
                  {site.modality}
                  <span className="mt-1 block text-[14px] text-muted">hoje em {site.location}</span>
                </dd>
              </div>
              <div>
                <dt className="label">idiomas</dt>
                <dd className="mt-2 space-y-1 text-text">
                  {languages.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <h3 data-reveal className="label mt-16">
              trajetória
            </h3>
            <ol className="relative mt-8 space-y-10 pl-8">
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-magenta via-navy-glow to-aqua"
              />
              {experience.map((t, i) => (
                <li key={t.org} data-reveal style={d(i * 90)} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-8 top-[7px] h-[11px] w-[11px] rounded-full border-2 border-void ${
                      i === 0 ? "bg-magenta shadow-[0_0_14px_rgb(227_28_121/0.8)]" : "bg-aqua"
                    }`}
                  />
                  <p className="text-[13px] text-aqua">{t.when}</p>
                  <h4 className="mt-1.5 text-[22px] font-light tracking-tight text-white sm:text-[26px]">
                    {t.org} <span className="text-muted">· {t.role}</span>
                  </h4>
                  <p className="mt-2 max-w-[36rem] text-[15px] leading-relaxed text-text/90">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="relative isolate border-t border-line py-24 sm:py-36">
      <div className="wrap">
        <SectionHead
          index="03"
          label="stack"
          title="Ferramentas do dia a dia"
          note="O que usei nos projetos acima e o que estou estudando agora."
        />
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((g, i) => (
            <div key={g.label} data-reveal style={d(i * 70)} className="bg-void p-6 sm:p-8">
              <dt className="label">{g.label}</dt>
              <dd className="mt-4">
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contato" className="relative isolate overflow-hidden border-t border-line">
      <Aurora />
      <ParticleField
        variant="ring"
        density={0.55}
        cx={0.74}
        cy={0.5}
        mobileCx={0.5}
        mobileCy={0.22}
        radius={0.46}
        className="absolute inset-0 -z-10 h-full w-full opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent_25%,rgb(4_5_26/0.85)_60%)] md:bg-[linear-gradient(90deg,var(--void)_10%,rgb(4_5_26/0.6)_50%,transparent_80%)]"
      />
      <div className="wrap pb-24 pt-[38svh] sm:pb-36 md:pt-36">
        <p data-reveal className="label">
          04 — contato
        </p>
        <h2 data-reveal style={d(80)} className="display mt-5 text-[56px] sm:text-[88px] lg:text-[112px]">
          Vamos
          <br />
          <span className="grad-text">conversar?</span>
        </h2>
        <p data-reveal style={d(160)} className="mt-8 max-w-[32rem] text-[17px] leading-relaxed text-text">
          Estou aberta a vagas como desenvolvedora, remotas ou híbridas, e
          avalio propostas com mudança de cidade. O caminho mais rápido é o
          e-mail ou o LinkedIn.
        </p>
        <a
          data-reveal
          style={d(220)}
          href={`mailto:${site.email}`}
          className="mt-10 inline-block break-all text-[22px] font-light text-white underline decoration-magenta/50 decoration-1 underline-offset-[10px] transition-colors hover:decoration-aqua sm:text-[34px]"
        >
          {site.email}
        </a>
        <div data-reveal style={d(280)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Button href={`mailto:${site.email}`} kind="primary">
            enviar e-mail
          </Button>
          <Button href={site.linkedin} external>
            LinkedIn
          </Button>
          <Button href={site.cvPdf} kind="text">
            currículo em PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
