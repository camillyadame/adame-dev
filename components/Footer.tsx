import { siteConfig } from "@/data/site";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: siteConfig.instagram, label: "Instagram" },
    { href: siteConfig.github, label: "GitHub" },
    { href: `mailto:${siteConfig.email}`, label: "E-mail" },
  ];

  return (
    <footer className="bg-graphite py-10 text-offwhite">
      <div className="container-page flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <BrandLogo tone="light" className="text-lg" />
          <p className="mt-1.5 font-mono text-xs uppercase tracking-widest text-offwhite/45">
            Creative Technology Studio
          </p>
        </div>

        <nav aria-label="Links do rodapé" className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-offwhite/60 hover:text-offwhite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs text-offwhite/40">
          © {year} Adame.dev — Creative Technology Studio
        </p>
      </div>
    </footer>
  );
}
