import { site } from "@/data/site";
import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col gap-4 text-[14px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Logo short />
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
        <p>
          feito com Next.js e Tailwind ·{" "}
          <a href={site.repo} target="_blank" rel="noreferrer" className="link">
            ver o código
          </a>
        </p>
      </div>
    </footer>
  );
}
