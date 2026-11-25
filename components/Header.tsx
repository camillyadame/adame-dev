import Link from "next/link";
import { Logo } from "./ui";

const links = [
  { href: "/#projetos", label: "projetos" },
  { href: "/#sobre", label: "sobre" },
  { href: "/#stack", label: "stack", hideOnSmall: true },
  { href: "/#contato", label: "contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#07061a]/75 backdrop-blur-md">
      <div className="wrap flex h-14 items-center justify-between gap-4">
        <Link href="/" aria-label="Início">
          <Logo />
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-4 font-mono text-[13px] sm:gap-7 sm:text-sm">
            {links.map((l) => (
              <li key={l.href} className={l.hideOnSmall ? "hidden min-[420px]:block" : ""}>
                <Link href={l.href} className="text-text/80 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
