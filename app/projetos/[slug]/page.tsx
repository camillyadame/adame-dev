import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";
import { Aurora, Button, Frame, Tag } from "@/components/ui";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — estudo de caso`,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.name} — estudo de caso · Camilly Adame`,
      description: project.summary,
      url: `/projetos/${project.slug}`,
    },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section data-reveal className="grid gap-5 border-t border-line py-14 md:grid-cols-[13rem_1fr] md:gap-12">
      <h2 className="label pt-1.5">{label}</h2>
      <div className="max-w-[40rem] space-y-4 text-[17px] leading-relaxed text-text">{children}</div>
    </section>
  );
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];

  return (
    <>
      <ScrollFx />
      <Header />
      <main className="relative isolate">
        <div className="relative isolate overflow-hidden">
          <Aurora className="opacity-70" />
        <div className="wrap pb-4 pt-12 sm:pt-16">
        <Link href="/#projetos" className="text-[14px] text-muted transition-colors hover:text-aqua">
          ← projetos
        </Link>

        <header data-reveal className="mt-10">
          <p className="label">estudo de caso · {project.kind}</p>
          <h1 className="display mt-4 text-[52px] sm:text-[80px] lg:text-[96px]">
            {project.name}
          </h1>
          <p className="mt-6 max-w-[40rem] text-lg leading-relaxed text-text sm:text-xl">{project.summary}</p>
        </header>

        <dl className="mt-12 grid gap-6 border-y border-line py-7 text-[15px] sm:grid-cols-3">
          <div>
            <dt className="label">papel</dt>
            <dd className="mt-2 text-text">{project.role}</dd>
          </div>
          <div>
            <dt className="label">status</dt>
            <dd className="mt-2 text-text">{project.status}</dd>
          </div>
          <div>
            <dt className="label">stack</dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        {project.links.length > 0 && (
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
            {project.links.map((l, i) => (
              <Button key={l.href} href={l.href} kind={i === 0 ? "ghost" : "text"} external>
                {l.label}
              </Button>
            ))}
          </div>
        )}

        <div className="mt-14">
          <Frame src={project.cover.src} alt={project.cover.alt} url={project.url} priority pan={false} sizes="(max-width: 1240px) 100vw, 1120px" />
        </div>
        </div>
        </div>

        <div className="wrap pb-20">
        <div className="mt-16">
          <Block label="contexto">
            {project.context.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Block>

          <Block label="o que construí">
            <ul className="space-y-3">
              {project.built.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[11px] h-1 w-3 shrink-0 rounded-full bg-gradient-to-r from-magenta to-aqua" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="decisões técnicas">
            <div className="space-y-8">
              {project.decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="text-[20px] font-normal tracking-tight text-white">{d.title}</h3>
                  <p className="mt-2">{d.text}</p>
                </div>
              ))}
            </div>
          </Block>

          {project.next && (
            <Block label="próximos passos">
              <ul className="space-y-3">
                {project.next.map((n) => (
                  <li key={n} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[11px] h-1 w-3 shrink-0 rounded-full bg-aqua/60" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <Block label="telas">
            <div className="space-y-10">
              {project.gallery.filter((g) => g.src !== project.cover.src).map((g) => (
                <figure key={g.src} className="tilt-in">
                  <Frame src={g.src} alt={g.alt} url={project.url} pan={false} sizes="(max-width: 960px) 100vw, 760px" />
                  <figcaption className="mt-3 text-[14px] text-muted">{g.alt}</figcaption>
                </figure>
              ))}
              {project.privateNote && <p className="text-[15px] text-muted">{project.privateNote}</p>}
            </div>
          </Block>
        </div>

        <nav className="mt-4 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/projetos/${nextProject.slug}`}
            className="group text-white"
          >
            <span className="label block">próximo projeto</span>
            <span className="headline mt-2 block text-[34px] transition-colors group-hover:text-aqua sm:text-[44px]">
              {nextProject.name} →
            </span>
          </Link>
          <Button href={`mailto:${site.email}`} kind="primary">
            falar comigo
          </Button>
        </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
