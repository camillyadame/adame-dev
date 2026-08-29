"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import BrandLogo from "./BrandLogo";

const links = [
  { href: "#servicos", label: "serviços" },
  { href: "#projetos", label: "projetos" },
  { href: "#como-funciona", label: "como funciona" },
  { href: "#sobre", label: "sobre" },
  { href: "#faq", label: "faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite/10 bg-offwhite/90 backdrop-blur-sm">
      <div className="h-[3px] w-full bg-gradient-to-r from-lime via-lime/40 to-transparent" />
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="tracking-tight"
          onClick={() => setOpen(false)}
        >
          <BrandLogo animate className="text-xl md:text-2xl" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-graphite/75 transition-colors hover:text-graphite"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group hidden items-center gap-2 rounded-full border border-graphite px-5 py-2.5 text-sm font-medium text-graphite transition-colors hover:bg-graphite hover:text-offwhite md:inline-flex"
        >
          me conta o problema
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-graphite/20 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-graphite/10 bg-offwhite px-6 pb-8 pt-2 md:hidden"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-graphite/10 py-4 text-base text-graphite/85"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-graphite px-5 py-3.5 text-sm font-medium text-offwhite"
          >
            me conta o problema
            <ArrowRight size={15} />
          </a>
        </div>
      )}
    </header>
  );
}
