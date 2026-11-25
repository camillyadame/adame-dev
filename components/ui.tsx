import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Kind = "primary" | "ghost" | "text";

/**
 * Ação do site. "primary" (magenta cheio) é a ação principal da tela e deve
 * aparecer uma vez por bloco; "ghost" é a secundária; "text" é um link solto.
 */
export function Button({
  href,
  kind = "ghost",
  children,
  external = false,
}: {
  href: string;
  kind?: Kind;
  children: ReactNode;
  external?: boolean;
}) {
  const className = kind === "text" ? "text-link" : `btn btn-${kind}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }
  if (href.startsWith("mailto:") || href.endsWith(".pdf")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Assinatura da marca: adame.dev com o ponto magenta e o cursor água. */
export function Logo({ short = false }: { short?: boolean }) {
  return (
    <span className="font-mono text-[15px] font-normal text-white" aria-label="adame.dev">
      {short ? "a" : "adame"}
      <span className="-mx-[0.12em] text-magenta">.</span>
      {short ? "" : "dev"}
      <span className="cursor text-aqua">_</span>
    </span>
  );
}

/** Cabeçalho de seção: rótulo numerado em mono e um título grande e leve. */
export function SectionHead({
  index,
  label,
  title,
  note,
}: {
  index: string;
  label: string;
  title: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div data-reveal className="mb-14 sm:mb-20">
      <p className="label">
        {index} — {label}
      </p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <h2 className="headline max-w-[46rem] text-[38px] sm:text-[56px] lg:text-[64px]">{title}</h2>
        {note && <p className="max-w-[22rem] text-[15px] leading-relaxed text-muted">{note}</p>}
      </div>
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <li className="tag">{children}</li>;
}

/** Luz de fundo em três manchas (marinho, magenta, água). */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`aurora ${className}`}>
      <span className="a1" />
      <span className="a2" />
      <span className="a3" />
    </div>
  );
}

/** Captura de tela dentro de uma moldura de navegador com borda em degradê. */
export function Frame({
  src,
  alt,
  url,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 720px",
  pan = true,
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
  sizes?: string;
  pan?: boolean;
}) {
  return (
    <div className="frame">
      <div className="frame-inner">
        <div className="frame-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <b>{url}</b>
        </div>
        <div className="relative aspect-[2160/1290] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`${pan ? "pan-img" : ""} object-cover object-top`}
          />
        </div>
      </div>
    </div>
  );
}
