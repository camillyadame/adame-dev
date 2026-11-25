"use client";

import { useState } from "react";
import { eventos, lugares, piracema, type Fonte } from "@/data/clima-roteiro";

export type Mes = {
  mes: number;
  bons_praia: number;
  bons_passeio: number;
  dias_avaliados: number;
  temp_max: number;
  temp_min: number;
  sensacao_max: number;
  chuva_mm: number;
  dias_chuva: number;
};

type Perfil = "passeio" | "praia";

export const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const MESES_LONGOS = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
];

const PERFIS: { id: Perfil; label: string; ideal: string }[] = [
  { id: "passeio", label: "passeio, pesca e eventos", ideal: "sensação máxima ideal de 22 a 28 °C" },
  { id: "praia", label: "praia e rio", ideal: "sensação máxima ideal de 28 a 33 °C" },
];

const fmt = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

/** Dicas tiradas só dos números do mês. As regras ficam aqui, visíveis no código. */
function dicas(m: Mes): string[] {
  const out: string[] = [];
  if (m.sensacao_max >= 33) {
    out.push(
      `Sensação máxima média de ${fmt(m.sensacao_max)} °C. Na orla, prefira até as 9h ou depois das 20h: das 11h às 19h a sensação passa de 30 °C.`,
    );
  } else if (m.sensacao_max <= 28) {
    out.push(`Sensação máxima média de ${fmt(m.sensacao_max)} °C: dá para ficar na orla em qualquer horário.`);
  } else {
    out.push(
      `Sensação máxima média de ${fmt(m.sensacao_max)} °C: o começo da tarde ainda pesa, manhã e fim de tarde são mais confortáveis.`,
    );
  }
  if (m.dias_chuva >= 9) {
    out.push(`Mês chuvoso: cerca de ${Math.round(m.dias_chuva)} dias com chuva de 1 mm ou mais.`);
  } else if (m.dias_chuva <= 4) {
    out.push(`Estação seca: cerca de ${Math.round(m.dias_chuva)} dias com chuva no mês.`);
  }
  return out;
}

function Fontes({ fontes }: { fontes: Fonte[] }) {
  return (
    <span className="text-[13px] text-muted">
      fonte:{" "}
      {fontes.map((f, i) => (
        <span key={f.href}>
          {i > 0 && " · "}
          <a href={f.href} target="_blank" rel="noreferrer" className="link">
            {f.label}
          </a>
        </span>
      ))}
    </span>
  );
}

export default function MonthExplorer({ meses }: { meses: Mes[] }) {
  const [perfil, setPerfil] = useState<Perfil>("passeio");
  const [sel, setSel] = useState(7);
  const m = meses[sel - 1];
  const chave = perfil === "praia" ? "bons_praia" : "bons_passeio";
  const max = 100;
  const lugaresMes = lugares.filter((l) => l.meses.includes(sel));
  const eventosMes = eventos.filter((e) => e.meses.includes(sel));
  const atual = PERFIS.find((p) => p.id === perfil)!;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="label">perfil</span>
        <div className="inline-flex rounded-full border border-line-strong p-1" role="group" aria-label="Perfil do visitante">
          {PERFIS.map((p) => (
            <button
              key={p.id}
              type="button"
              aria-pressed={perfil === p.id}
              onClick={() => setPerfil(p.id)}
              className={`rounded-full px-4 py-1.5 text-[14px] transition-colors ${
                perfil === p.id ? "bg-aqua text-void" : "text-text/80 hover:text-white"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <span className="text-[13px] text-muted">{atual.ideal}</span>
      </div>

      {/* barras: cada uma é um botão que escolhe o mês */}
      <div className="mt-10" role="group" aria-label="Escolha um mês">
        <div className="relative grid h-56 grid-cols-12 items-end gap-1.5 sm:h-64 sm:gap-3">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 border-t border-dashed border-line-strong"
            style={{ bottom: "80%" }}
          />
          {meses.map((x) => {
            const v = x[chave];
            const ativo = x.mes === sel;
            return (
              <button
                key={x.mes}
                type="button"
                aria-pressed={ativo}
                aria-label={`${MESES_LONGOS[x.mes - 1]}: ${v}% dos dias bons`}
                onClick={() => setSel(x.mes)}
                className="group flex h-full flex-col items-center justify-end"
              >
                <span className={`mb-1.5 font-mono text-[11px] sm:text-[12px] ${ativo ? "text-white" : "text-muted"}`}>
                  {v}
                </span>
                <span
                  className={`clima-bar w-full rounded-t-md ${
                    ativo ? "bg-gradient-to-t from-navy-glow to-aqua" : "bg-navy-glow/45 group-hover:bg-navy-glow/70"
                  }`}
                  style={{ height: `${(v / max) * 100}%` }}
                />
              </button>
            );
          })}
        </div>
        <div className="mt-2 grid grid-cols-12 gap-1.5 sm:gap-3" aria-hidden="true">
          {meses.map((x) => (
            <span
              key={x.mes}
              className={`text-center font-mono text-[11px] sm:text-[12px] ${x.mes === sel ? "text-aqua" : "text-muted"}`}
            >
              {MESES[x.mes - 1]}
            </span>
          ))}
        </div>
        <p className="mt-3 text-[13px] text-muted">% dos dias com índice de conforto 70 ou mais (bom ou excelente). A linha tracejada marca 80%.</p>
      </div>

      {/* detalhe do mês escolhido */}
      <div aria-live="polite" className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <p className="label">{MESES_LONGOS[sel - 1]}</p>
          <p className="headline mt-3 text-[56px] sm:text-[72px]">
            {m[chave]}
            <span className="text-[0.5em] text-muted">%</span>
          </p>
          <p className="text-[15px] text-text/90">dos dias bons para {atual.label}</p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-[15px]">
            {[
              ["máxima média", `${fmt(m.temp_max)} °C`],
              ["mínima média", `${fmt(m.temp_min)} °C`],
              ["sensação máxima", `${fmt(m.sensacao_max)} °C`],
              ["chuva no mês", `${m.chuva_mm} mm`],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-mono text-[12px] text-muted">{k}</dt>
                <dd className="mt-1 text-white">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-[13px] text-muted">{m.dias_avaliados} dias com dados completos neste mês, de 2013 a 2025.</p>
        </div>

        <div className="space-y-8">
          <ul className="space-y-3 text-[16px] leading-relaxed text-text">
            {dicas(m).map((t) => (
              <li key={t} className="flex gap-3">
                <span aria-hidden="true" className="mt-[11px] h-1 w-3 shrink-0 rounded-full bg-aqua" />
                {t}
              </li>
            ))}
            {piracema.meses.includes(sel) && (
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-[11px] h-1 w-3 shrink-0 rounded-full bg-aqua" />
                <span>
                  {piracema.texto}{" "}
                  <a href={piracema.fonte.href} target="_blank" rel="noreferrer" className="link text-[13px]">
                    {piracema.fonte.label}
                  </a>
                </span>
              </li>
            )}
          </ul>

          <div>
            <h3 className="label">lugares públicos que combinam com {MESES_LONGOS[sel - 1]}</h3>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {lugaresMes.map((l) => (
                <li key={l.nome} className="py-4">
                  <p className="text-white">
                    {l.nome} <span className="ml-1 font-mono text-[12px] text-muted">{l.tipo}</span>
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-text/90">{l.descricao}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-aqua/90">{l.porque}</p>
                  <p className="mt-1.5">
                    <Fontes fontes={l.fontes} />
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {eventosMes.length > 0 && (
            <div>
              <h3 className="label">eventos em {MESES_LONGOS[sel - 1]}</h3>
              <ul className="mt-4 space-y-3">
                {eventosMes.map((e) => (
                  <li key={e.nome}>
                    <p className="text-white">
                      {e.nome} <span className="ml-1 font-mono text-[12px] text-muted">{e.quando}</span>
                    </p>
                    <p className="mt-1 text-[15px] text-text/90">{e.descricao}</p>
                    <p className="mt-1">
                      <Fontes fontes={e.fontes} />
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
