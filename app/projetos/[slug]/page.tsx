import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";
import { Pill, Tag } from "@/components/ui";
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
    <section data-reveal className="grid gap-4 border-t border-line py-12 md:grid-cols-[11rem_1fr] md:gap-10">
      <h2 className="font-mono text-[15px] font-normal text-white">
        <span className="text-lime" aria-hidden="true">
          ▍{" "}
        </span>
        {label}
      </h2>
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
      <main className="wrap pb-20 pt-12 sm:pt-16">
        <Link href="/#projetos" className="font-mono text-[13px] text-muted transition-colors hover:text-white">
          ← projetos
        </Link>

        <header data-reveal className="mt-10">
          <p className="font-mono text-[13px] text-muted">
            estudo de caso · <span className="text-lime">{project.kind}</span>
          </p>
          <h1 className="mt-3 font-mono text-[36px] font-normal leading-tight text-white sm:text-[48px]">
            {project.name}
          </h1>
          <p className="mt-4 max-w-[40rem] text-lg leading-relaxed text-text sm:text-xl">{project.summary}</p>
        </header>

        <dl className="mt-10 grid gap-6 border-y border-line py-6 font-mono text-[13px] sm:grid-cols-3">
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

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l, i) => (
              <Pill key={l.href} href={l.href} tone={i === 0 ? "pink" : "lilac"} external>
                {l.label}
              </Pill>
            ))}
          </div>
        )}

        <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-lg border border-line bg-surface">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            priority
            sizes="(max-width: 960px) 100vw, 900px"
            className="pan-img object-cover object-top"
          />
        </div>

        <div className="mt-12">
          <Block label="contexto">
            {project.context.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Block>

          <Block label="o que construí">
            <ul className="space-y-3">
              {project.built.map((b) => (
                <li key={b} className="flex gap-3">
                  <span aria-hidden="true" className="font-mono text-lime">›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block label="decisões técnicas">
            <div className="space-y-8">
              {project.decisions.map((d) => (
                <div key={d.title}>
                  <h3 className="font-mono text-[15px] font-normal text-white">{d.title}</h3>
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
                    <span aria-hidden="true" className="font-mono text-pink">›</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </Block>
          )}

          <Block label="telas">
            <div className="space-y-4">
              {project.gallery.filter((g) => g.src !== project.cover.src).map((g) => (
                <figure key={g.src}>
                  <div className="relative aspect-[1850/966] overflow-hidden rounded-lg border border-line bg-surface">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 960px) 100vw, 640px" className="object-cover object-top" />
                  </div>
                  <figcaption className="mt-2 font-mono text-[12px] text-muted">{g.alt}</figcaption>
                </figure>
              ))}
              {project.privateNote && <p className="text-[15px] text-muted">{project.privateNote}</p>}
            </div>
          </Block>
        </div>

        <nav className="mt-4 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/projetos/${nextProject.slug}`}
            className="group font-mono text-white"
          >
            <span className="block text-[13px] text-muted">próximo projeto</span>
            <span className="mt-1 block text-xl transition-colors group-hover:text-lime">{nextProject.name} →</span>
          </Link>
          <Pill href={`mailto:${site.email}`} tone="pink">
            falar comigo
          </Pill>
        </nav>
      </main>
      <Footer />
    </>
  );
}
