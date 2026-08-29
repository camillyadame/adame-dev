import Cursor from "./Cursor";

type BrandLogoProps = {
  variant?: "full" | "reduced";
  tone?: "dark" | "light";
  animate?: boolean;
  className?: string;
};

/**
 * variant "full"    -> adame.dev_
 * variant "reduced"  -> a._  (avatar / favicon / selos)
 * tone "dark"  = texto principal grafite (usado sobre fundo off-white)
 * tone "light" = texto principal off-white (usado sobre fundo grafite)
 */
export default function BrandLogo({
  variant = "full",
  tone = "dark",
  animate = false,
  className = "",
}: BrandLogoProps) {
  const base = tone === "dark" ? "text-graphite" : "text-offwhite";

  if (variant === "reduced") {
    return (
      <span
        className={`font-mono font-bold ${base} ${className}`}
        aria-label="adame.dev"
      >
        a<span className="text-pink">.</span>
        <Cursor animate={animate} />
      </span>
    );
  }

  return (
    <span className={`font-mono font-bold ${base} ${className}`} aria-label="adame.dev">
      adame<span className="text-pink">.</span>dev
      <Cursor animate={animate} />
    </span>
  );
}
