export type Ano = { ano: number; dias_validos: number; dias_35: number; completo: boolean };

/**
 * Barras de dias com máxima de 35 °C ou mais por ano. Anos incompletos
 * (menos de 330 dias com dado) aparecem só com contorno, para não serem
 * lidos como anos frios.
 */
export default function HeatDays({ anos }: { anos: Ano[] }) {
  const dados = anos.filter((a) => a.ano >= 2005);
  const W = 720;
  const H = 260;
  const pad = { t: 24, r: 8, b: 28, l: 30 };
  const max = 60;
  const bw = (W - pad.l - pad.r) / dados.length;
  const y = (v: number) => pad.t + (H - pad.t - pad.b) * (1 - v / max);
  const media = (de: number, ate: number) => {
    const s = dados.filter((a) => a.completo && a.ano >= de && a.ano <= ate);
    return Math.round(s.reduce((t, a) => t + a.dias_35, 0) / s.length);
  };
  const faixas = [
    { de: 2005, ate: 2013, v: media(2005, 2013) },
    { de: 2019, ate: 2025, v: media(2019, 2025) },
  ];
  const x = (ano: number) => pad.l + (ano - dados[0].ano) * bw;

  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-auto w-full"
        role="img"
        aria-labelledby="heat-title heat-desc"
      >
        <title id="heat-title">Dias por ano com máxima de 35 °C ou mais em Presidente Prudente</title>
        <desc id="heat-desc">
          {`Média de ${faixas[0].v} dias por ano entre 2005 e 2013 e de ${faixas[1].v} entre 2019 e 2025. Anos incompletos: ${dados
            .filter((a) => !a.completo)
            .map((a) => a.ano)
            .join(", ")}.`}
        </desc>
        {[0, 20, 40, 60].map((v) => (
          <g key={v}>
            <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} stroke="var(--line)" />
            <text x={pad.l - 6} y={y(v) + 4} textAnchor="end" fontSize="11" fill="var(--muted)" fontFamily="var(--font-mono)">
              {v}
            </text>
          </g>
        ))}
        {dados.map((a) => (
          <g key={a.ano}>
            <rect
              x={x(a.ano) + 3}
              y={y(a.dias_35)}
              width={bw - 6}
              height={y(0) - y(a.dias_35)}
              rx="3"
              fill={a.completo ? "var(--magenta-soft)" : "none"}
              fillOpacity={a.completo ? 0.75 : 0}
              stroke={a.completo ? "none" : "var(--muted)"}
              strokeDasharray="3 3"
            />
            {(a.ano % 2 === 1 || !a.completo) && (
              <text
                x={x(a.ano) + bw / 2}
                y={H - 8}
                textAnchor="middle"
                fontSize="10.5"
                fill={a.completo ? "var(--muted)" : "var(--aqua)"}
                fontFamily="var(--font-mono)"
              >
                {String(a.ano).slice(2)}
              </text>
            )}
          </g>
        ))}
        {faixas.map((f) => (
          <g key={f.de}>
            <line
              x1={x(f.de)}
              x2={x(f.ate) + bw}
              y1={y(f.v)}
              y2={y(f.v)}
              stroke="var(--aqua)"
              strokeWidth="2"
            />
            <text
              x={x(f.de) + 2}
              y={y(f.v) - 7}
              fontSize="12"
              fill="var(--aqua)"
              fontFamily="var(--font-mono)"
              stroke="var(--void)"
              strokeWidth="4"
              paintOrder="stroke"
            >
              média {f.v}/ano
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-3 text-[13px] leading-relaxed text-muted">
        Estação INMET Presidente Prudente (A707), a cerca de 80 km. Barras tracejadas: anos com menos de 330 dias
        válidos, que ficam fora das médias. Eixo: anos de 2005 a 2025.
      </figcaption>
    </figure>
  );
}
