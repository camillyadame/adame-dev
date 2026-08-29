type SectionLabelProps = {
  index: string;
  label: string;
  tone?: "dark" | "light";
  dot?: "pink" | "lime";
  className?: string;
};

/**
 * Label editorial discreto que abre cada seção: "01 / HERO", "02 /
 * PROBLEMAS"... Não é decoração — funciona como índice, reforçando que a
 * página é lida como uma sequência de blocos (referência direta ao
 * wireframe da marca).
 */
export default function SectionLabel({
  index,
  label,
  tone = "dark",
  dot = "lime",
  className = "",
}: SectionLabelProps) {
  const text = tone === "dark" ? "text-graphite/45" : "text-offwhite/50";
  const dotColor = dot === "pink" ? "bg-pink" : "bg-lime";

  return (
    <div className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.22em] ${text} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden="true" />
      <span>
        {index} / {label}
      </span>
    </div>
  );
}
