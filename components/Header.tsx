import Link from "next/link";
import { Logo } from "./ui";

const links = [
  { href: "/#projetos", label: "projetos" },
  { href: "/#sobre", label: "sobre" },
  { href: "/#contato", label: "contato", hideOnSmall: true },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/70 backdrop-blur-xl">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Início">
          <Logo />
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-5 text-[14px] sm:gap-8">
            {links.map((l) => (
              <li key={l.href} className={l.hideOnSmall ? "hidden min-[420px]:block" : ""}>
                <Link href={l.href} className="text-text/75 transition-colors hover:text-aqua">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/curriculo"
                className="rounded-full border border-line-strong px-3.5 py-1.5 text-white transition-colors hover:border-aqua hover:bg-aqua/5"
              >
                currículo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
