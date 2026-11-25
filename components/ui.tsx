import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "lime" | "pink" | "lilac";

export function Pill({
  href,
  tone,
  children,
  external = false,
}: {
  href: string;
  tone: Tone;
  children: ReactNode;
  external?: boolean;
}) {
  const className = `pill pill-${tone}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
        <span aria-hidden="true">↗</span>
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
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

/** Assinatura da marca: adame.dev com o ponto rosa e o cursor verde. */
export function Logo({ short = false }: { short?: boolean }) {
  return (
    <span className="font-mono text-[15px] text-white" aria-label="adame.dev">
      {short ? "a" : "adame"}
      <span className="-mx-[0.22em] text-pink">.</span>
      {short ? "" : "dev"}
      <span className="cursor text-lime">_</span>
    </span>
  );
}

const glyphs: Record<Tone, string> = { lime: "text-lime", pink: "text-pink", lilac: "text-lilac" };

export function SectionTitle({
  children,
  tone = "lime",
  note,
}: {
  children: ReactNode;
  tone?: Tone;
  note?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h2 className="flex items-baseline gap-3 font-mono text-[26px] font-normal leading-tight text-white sm:text-[30px]">
        <span aria-hidden="true" className={`text-base ${glyphs[tone]}`}>
          ▍
        </span>
        {children}
      </h2>
      {note && <p className="font-mono text-[13px] text-muted">{note}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[12px] text-text/85">
      {children}
    </li>
  );
}
