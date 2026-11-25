import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollFx from "@/components/ScrollFx";
import { Aurora, Button, Tag } from "@/components/ui";
import MonthExplorer, { type Mes } from "@/components/clima/MonthExplorer";
import HeatDays, { type Ano } from "@/components/clima/HeatDays";
import { verificadoEm } from "@/data/clima-roteiro";
import resumo from "@/data/clima-epitacio.json";

const REPO = "https://github.com/camillyadame/data-science/tree/main/clima-turismo-epitacio";
const summary =
  "Análise de 23 anos de dados do INMET para responder quando visitar Presidente Epitácio (SP) e a que horas ir à orla.";

export const metadata: Metadata = {
  title: "Clima e turismo em Presidente Epitácio",
  description: summary,
  alternates: { canonical: "/projetos/clima-turismo-epitacio" },
  openGraph: {
    title: "Clima e turismo em Presidente Epitácio · Camilly Adame",
    description: summary,
    url: "/projetos/clima-turismo-epitacio",
  },
};

const meses = resumo.mensal as Mes[];
const anos = resumo.anual as Ano[];

function faixa(chave: "bons_passeio" | "bons_praia", de: number, ate: number) {
  const v = meses.filter((m) => m.mes >= de && m.mes <= ate).map((m) => m[chave]);
  return `${Math.min(...v)}–${Math.max(...v)}%`;
}

function mediaCalor(de: number, ate: number) {
  const s = anos.filter((a) => a.completo && a.ano >= de && a.ano <= ate);
  return Math.round(s.reduce((t, a) => t + a.dias_35, 0) / s.length);
}

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section data-reveal className="border-t border-line py-16 sm:py-20">
      <p className="label">{label}</p>
      <h2 className="headline mt-3 max-w-[40rem] text-[32px] sm:text-[44px]">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function ClimaPage() {
  const achados = [
    {
      n: faixa("bons_passeio", 5, 8),
      t: "dos dias de maio a agosto são bons para passeio, pesca e eventos. É a estação seca.",
    },
    { n: "9h · 20h", t: "No verão, a orla é mais agradável até as 9h ou depois das 20h." },
    {
      n: `${mediaCalor(2005, 2013)} → ${mediaCalor(2019, 2025)}`,
      t: "dias por ano com 35 °C ou mais em Presidente Prudente, de 2005–2013 para 2019–2025.",
    },
  ];

  return (
    <>
      <ScrollFx />
      <Header />
      <main className="relative isolate">
        <div className="relative isolate overflow-hidden">
          <Aurora className="opacity-60" />
          <div className="wrap pb-6 pt-12 sm:pt-16">
            <Link href="/#projetos" className="text-link text-[14px]">
              ← projetos
            </Link>
            <p className="label mt-10">ciência de dados · análise exploratória</p>
            <h1 className="display mt-4 max-w-[52rem] text-[44px] sm:text-[72px]">
              Quando visitar <span className="grad-text">Presidente Epitácio?</span>
            </h1>
            <p className="mt-6 max-w-[40rem] text-[18px] leading-relaxed text-text">
              {summary} Cada dia recebe uma nota de conforto para dois perfis de visitante, numa adaptação do
              Holiday Climate Index.
            </p>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {["Python", "pandas", "NumPy", "Matplotlib", "Jupyter", "INMET"].map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={REPO} kind="primary" external>
                ver análise no GitHub
              </Button>
            </div>

            <ul className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
              {achados.map((a) => (
                <li key={a.n}>
                  <p className="headline text-[36px] sm:text-[40px]">{a.n}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-text/90">{a.t}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="wrap">
          <Block label="01 — calendário" title="Quantos dias do mês têm clima bom para o visitante">
            <p className="mb-10 max-w-[40rem] text-[16px] leading-relaxed text-text/90">
              Escolha o perfil e o mês. As sugestões de lugares são só de espaços públicos e eventos da cidade, cada
              um com a fonte oficial. A ligação entre o lugar e o mês é uma leitura dos dados, não uma recomendação
              da fonte.
            </p>
            <MonthExplorer meses={meses} />
            <p className="mt-10 text-[13px] text-muted">
              Lugares e eventos conferidos em {verificadoEm}. Seleção pessoal, sem patrocínio.
            </p>
          </Block>

          <Block label="02 — horário" title="A que horas a orla é mais agradável">
            <p className="mb-8 max-w-[40rem] text-[16px] leading-relaxed text-text/90">
              De dezembro a março, a sensação térmica média passa de 30 °C das 11h às 19h. De maio a agosto, o pico
              da tarde fica perto de 27 °C.
            </p>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src="/projects/clima-melhor-horario-orla.png"
                alt="Mapa de calor de mês por hora da sensação térmica média em Bataguassu. De dezembro a março passa de 30 °C entre 11h e 19h; de maio a agosto o pico da tarde fica perto de 27 °C."
                width={1968}
                height={1132}
                sizes="(max-width: 1200px) 100vw, 1120px"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-[13px] text-muted">Gráfico gerado na análise (Matplotlib).</p>
          </Block>

          <Block label="03 — tendência" title="Os dias de calor extremo triplicaram">
            <HeatDays anos={anos} />
          </Block>

          <Block label="04 — método" title="Como a nota é calculada">
            <div className="max-w-[44rem] space-y-4 text-[16px] leading-relaxed text-text">
              <pre className="overflow-x-auto rounded-xl border border-line bg-surface p-4 font-mono text-[13px] text-aqua">
                índice = 2 × conforto térmico + 4 × céu aberto + 3 × chuva + 1 × vento
              </pre>
              <p>
                Cada componente vai de 0 a 10, e o índice de 0 a 100. Dias com 70 ou mais contam como bons. O conforto
                térmico usa a sensação máxima do dia (índice de calor da NOAA), e o “céu aberto” compara a radiação
                solar com um dia limpo do mesmo mês, porque o INMET não mede nuvens.
              </p>
              <p>
                Os dados vêm de duas estações do INMET: Bataguassu (MS), a cerca de 37 km, de 2013 a 2025, para o
                calendário; e Presidente Prudente (SP), a cerca de 80 km, de 2003 a 2025, para a tendência de calor.
                As máximas das duas têm correlação de 0,95.
              </p>
            </div>
          </Block>

          <Block label="05 — limitações" title="O que estes dados não dizem">
            <ul className="max-w-[44rem] space-y-3 text-[16px] leading-relaxed text-text">
              {[
                "Presidente Epitácio não tem estação do INMET. A orla, ao lado da água, pode ser um pouco mais amena e úmida que Bataguassu.",
                "Bataguassu tem falhas entre 2019 e 2022, e 2021 não tem dados. Dias sem medição completa ficam fora das porcentagens.",
                "Treze anos mostram o padrão das estações, mas não substituem normais climatológicas de 30 anos.",
                "Não há dados de temperatura da água nem de nível do rio, que importam para quem vai nadar.",
                "As faixas de cada nota são escolhas do projeto, inspiradas no índice original.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[11px] h-1 w-3 shrink-0 rounded-full bg-aqua" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[14px] text-muted">
              Fonte dos dados:{" "}
              <a href="https://portal.inmet.gov.br/dadoshistoricos" target="_blank" rel="noreferrer" className="link">
                INMET, Dados Históricos
              </a>
              . Código e notebook no{" "}
              <a href={REPO} target="_blank" rel="noreferrer" className="link">
                repositório data-science
              </a>
              .
            </p>
          </Block>
        </div>
      </main>
      <Footer />
    </>
  );
}
