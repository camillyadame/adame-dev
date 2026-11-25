import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AsciiField from "@/components/AsciiField";
import ScrollFx from "@/components/ScrollFx";
import { Glyphs, Ticker } from "@/components/Decor";
import { Pill, SectionTitle, Tag } from "@/components/ui";
import { projects, inProgress, type Project } from "@/data/projects";
import { site, stack } from "@/data/site";

export default function Home() {
  return (
    <>
      <ScrollFx />
      <Header />
      <main>
        <Hero />
        <Ticker items={stack.flatMap((g) => g.items)} />
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
      <AsciiField className="absolute inset-0 -z-10 h-full w-full" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#07061a]"
      />
      <div className="wrap flex min-h-[calc(80svh-3.5rem)] flex-col justify-end pb-16 pt-40 sm:justify-center sm:pb-20 sm:pt-24">
        <p data-reveal className="font-mono text-[13px] text-muted">
          <span className="text-lime">~</span>/camilly-adame
        </p>
        <h1 data-reveal style={{ "--d": "90ms" } as React.CSSProperties} className="mt-4 font-mono text-[40px] font-normal leading-[1.1] tracking-tight text-white sm:text-[56px]">
          Camilly Adame
        </h1>
        <p data-reveal style={{ "--d": "180ms" } as React.CSSProperties} className="mt-4 max-w-[34rem] text-lg leading-relaxed text-text sm:text-xl">
          Desenvolvedora full-stack e estudante de Ciência de Dados. Construo
          sistemas web de ponta a ponta, do banco de dados à interface.
        </p>
        <p data-reveal style={{ "--d": "270ms" } as React.CSSProperties} className="mt-6 flex items-center gap-2.5 font-mono text-[13px] text-muted">
          <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_rgba(184,255,90,0.7)]" aria-hidden="true" />
          aberta a oportunidades · {site.location}
        </p>
        <div data-reveal style={{ "--d": "360ms" } as React.CSSProperties} className="mt-8 flex flex-wrap gap-3">
          <Pill href="/#projetos" tone="lime">
            ver projetos ↓
          </Pill>
          <Pill href={site.linkedin} tone="pink" external>
            linkedin
          </Pill>
          <Pill href={site.github} tone="lilac" external>
            github
          </Pill>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projetos" className="relative isolate py-20 sm:py-24">
      <Glyphs
        items={[
          { c: "{ }", top: "6%", right: "6%", speed: -0.12, spin: 0.02, tone: "lilac", size: 22 },
          { c: "+", top: "22%", left: "4%", speed: -0.3, spin: 0.15, tone: "lime", size: 20, mobile: true },
          { c: "</>", top: "44%", right: "3%", speed: -0.2, tone: "pink", size: 18 },
          { c: "*", top: "63%", left: "5%", speed: -0.08, spin: -0.1, tone: "mist", size: 26 },
          { c: "a._", top: "82%", right: "8%", speed: -0.25, tone: "mist", size: 16, mobile: true },
        ]}
      />
      <div className="wrap">
        <SectionTitle note={`${projects.length} projetos em uso real`}>projetos</SectionTitle>
        <div className="space-y-20 sm:space-y-24">
          {projects.map((p, i) => (
            <ProjectBlock key={p.slug} project={p} index={i + 1} />
          ))}
        </div>

        <div data-reveal className="mt-20 rounded-lg border border-dashed border-line-strong p-6 sm:p-8">
          <p className="font-mono text-[13px] text-pink">{inProgress.kind}</p>
          <h3 className="mt-2 font-mono text-xl text-white">{inProgress.name}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-text/90">{inProgress.summary}</p>
        </div>
      </div>
    </section>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  return (
    <article data-reveal>
      <Link
        href={`/projetos/${project.slug}`}
        className="group block overflow-hidden rounded-lg border border-line bg-surface"
        aria-label={`Ler o estudo de caso de ${project.name}`}
      >
        <div className="relative aspect-[16/9]">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            sizes="(max-width: 960px) 100vw, 900px"
            className="pan-img object-cover object-top"
          />
        </div>
      </Link>

      <div className="mt-7 grid gap-8 md:grid-cols-[1fr_15rem] md:gap-12">
        <div>
          <p className="font-mono text-[13px] text-muted">
            <span className="text-lime">{String(index).padStart(2, "0")}</span> · {project.kind}
          </p>
          <h3 className="mt-2 font-mono text-2xl text-white">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-text">{project.summary}</p>
          <ul className="mt-5 space-y-2 text-[15px] text-text/90">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden="true" className="font-mono text-lime">›</span>
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <Pill href={`/projetos/${project.slug}`} tone="lime">
              estudo de caso →
            </Pill>
            {project.links.map((l, i) => (
              <Pill key={l.href} href={l.href} tone={i === 0 ? "pink" : "lilac"} external>
                {l.label}
              </Pill>
            ))}
          </div>
        </div>

        <dl className="space-y-5 border-t border-line pt-6 font-mono text-[13px] md:border-l md:border-t-0 md:pl-6 md:pt-0">
          <div>
            <dt className="text-muted">papel</dt>
            <dd className="mt-1 text-text">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted">status</dt>
            <dd className="mt-1 text-text">{project.status}</dd>
          </div>
          <div>
            <dt className="text-muted">stack</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

function About() {
  return (
    <section id="sobre" className="relative isolate border-t border-line py-20 sm:py-24">
      <Glyphs
        items={[
          { c: "♡", top: "14%", right: "7%", speed: -0.18, spin: 0.05, tone: "pink", size: 22, mobile: true },
          { c: "~/", top: "70%", left: "3%", speed: -0.25, tone: "lilac", size: 18 },
          { c: "·  ·  ·", top: "88%", right: "12%", speed: -0.1, tone: "mist", size: 18 },
        ]}
      />
      <div className="wrap">
        <SectionTitle tone="pink">sobre</SectionTitle>
        <div className="grid gap-10 md:grid-cols-[13rem_1fr] md:gap-14">
          <div data-reveal className="float relative mx-auto h-64 w-48 overflow-hidden rounded-lg border border-line bg-gradient-to-b from-surface-2 to-surface md:mx-0 md:h-72 md:w-52">
            <Image
              src="/brand/mascot-transparent.png"
              alt="Avatar ilustrado da Camilly"
              fill
              sizes="208px"
              className="object-contain object-bottom pt-4"
            />
          </div>
          <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties} className="max-w-[38rem] space-y-5 text-[17px] leading-relaxed text-text">
            <p>
              Sou a Camilly, desenvolvedora e estudante de Ciência de Dados. Meus
              primeiros projetos foram para negócios reais: um sistema de gestão
              para uma assistência técnica e o agendamento online de um estúdio
              de beleza.
            </p>
            <p>
              Foi construindo esses sistemas que descobri a parte do trabalho de
              que mais gosto: entender como um processo funciona, transformar
              isso em um modelo de dados e fazer o sistema aguentar o uso do dia a
              dia, com regras no servidor, validação e cuidado com segurança.
            </p>
            <p>
              Agora estou aprofundando a parte de dados e IA, na faculdade e no{" "}
              <span className="text-white">SEIVA</span>, meu projeto autoral.
              Procuro uma oportunidade em um time onde eu possa crescer como
              desenvolvedora e contribuir com produtos de verdade.
            </p>
            <p className="font-mono text-[13px] text-muted">
              {site.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="relative isolate border-t border-line py-20 sm:py-24">
      <Glyphs
        items={[
          { c: "[ ]", top: "10%", left: "5%", speed: -0.22, spin: -0.03, tone: "lime", size: 20 },
          { c: "=>", top: "55%", right: "4%", speed: -0.3, tone: "lilac", size: 20, mobile: true },
        ]}
      />
      <div className="wrap">
        <SectionTitle tone="lilac" note="o que usei nos projetos acima">
          stack
        </SectionTitle>
        <dl className="divide-y divide-line border-y border-line">
          {stack.map((g, i) => (
            <div
              key={g.label}
              data-reveal
              style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
              className="grid gap-3 py-5 sm:grid-cols-[10rem_1fr] sm:items-center">
              <dt className="font-mono text-[13px] text-muted">{g.label}</dt>
              <dd>
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
    <section id="contato" className="relative isolate overflow-hidden border-t border-line py-20 sm:py-28">
      <Glyphs
        items={[
          { c: "a._", top: "18%", right: "8%", speed: -0.2, tone: "lime", size: 64, mobile: true },
          { c: "@", top: "62%", right: "26%", speed: -0.35, spin: 0.08, tone: "pink", size: 26 },
          { c: "+", top: "80%", left: "46%", speed: -0.15, spin: 0.2, tone: "mist", size: 22 },
        ]}
      />
      <div className="wrap" data-reveal>
        <SectionTitle>contato</SectionTitle>
        <p className="max-w-[36rem] text-[17px] leading-relaxed text-text">
          Estou aberta a vagas como desenvolvedora. Se você está contratando ou
          quer conversar sobre algum dos projetos, o caminho mais rápido é o
          e-mail ou o LinkedIn.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block break-all font-mono text-xl text-white underline decoration-line-strong underline-offset-8 transition-colors hover:decoration-lime sm:text-[28px]"
        >
          {site.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-3">
          <Pill href={site.linkedin} tone="pink" external>
            linkedin
          </Pill>
          <Pill href={site.github} tone="lilac" external>
            github
          </Pill>
        </div>
        <p className="mt-10 text-[15px] text-muted">
          Também aceito projetos freelance pontuais, quando o prazo permite.
        </p>
      </div>
    </section>
  );
}
