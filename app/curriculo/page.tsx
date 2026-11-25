import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CvSheet from "@/components/CvSheet";
import { Pill } from "@/components/ui";
import { site } from "@/data/site";
import "./cv.css";

export const metadata: Metadata = {
  title: "Currículo",
  description: `Currículo de ${site.name}, ${site.role.toLowerCase()} e estudante de Ciência de Dados.`,
  alternates: { canonical: "/curriculo" },
};

/*
  Na tela, o currículo aparece como uma folha sobre o fundo do site. Na
  impressão (e no PDF gerado por scripts/cv-pdf.mjs) só a folha é impressa.
*/
export default function CvPage() {
  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>
      <main className="pb-20 pt-10 sm:pt-14 print:p-0">
        <div className="wrap mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <Link href="/" className="font-mono text-[13px] text-muted transition-colors hover:text-white">
            ← início
          </Link>
          <Pill href={site.cvPdf} tone="lime" external>
            baixar pdf
          </Pill>
        </div>
        <div className="px-4 sm:px-6 print:p-0">
          <CvSheet />
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
