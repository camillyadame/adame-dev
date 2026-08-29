import Image from "next/image";

type Props = {
  size?: "sm" | "lg";
  variant?: "about" | "cta";
  className?: string;
};

export default function MascotPlaceholder({
  size = "lg",
  variant = "about",
  className = "",
}: Props) {
  const compact = size === "sm";

  if (variant === "cta") {
    return (
      <div
        className={`relative ${compact ? "h-56 w-44" : "h-[430px] w-[310px] xl:h-[500px] xl:w-[360px]"} ${className}`}
        aria-hidden="true"
      >
        <div className="absolute inset-x-5 bottom-3 top-20 rounded-[48%_52%_42%_58%/55%_45%_55%_45%] border border-pink/25 bg-pink/[0.06]" />
        <div className="absolute right-1 top-20 h-3 w-3 rounded-full bg-pink" />
        <div className="absolute right-8 top-8 h-10 w-1 bg-lime" />
        <div className="absolute -left-1 bottom-24 font-mono text-xs text-offwhite/35">a<span className="text-pink">.</span><span className="text-lime">_</span></div>
        <Image
          src="/brand/mascot-transparent.png"
          alt=""
          fill
          priority={size === "lg"}
          sizes={size === "lg" ? "360px" : "176px"}
          className="relative z-10 object-contain object-bottom drop-shadow-[0_26px_30px_rgba(0,0,0,0.28)]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${compact ? "h-56 w-44" : "h-[430px] w-[320px] sm:h-[500px] sm:w-[370px]"} ${className}`}
    >
      <div className="absolute inset-x-8 bottom-7 top-16 rounded-[46%_54%_50%_50%/57%_47%_53%_43%] bg-pink/[0.08]" aria-hidden="true" />
      <div className="absolute left-5 top-24 h-px w-16 bg-pink/70" aria-hidden="true" />
      <div className="absolute left-5 top-[5.85rem] h-2 w-2 rounded-full bg-pink" aria-hidden="true" />
      <div className="absolute bottom-12 right-4 h-12 w-12 border-b border-r border-lime/70" aria-hidden="true" />
      <span className="absolute bottom-8 right-7 z-20 font-mono text-xs font-semibold text-graphite/60" aria-hidden="true">
        a<span className="text-pink">.</span><span className="text-lime">_</span>
      </span>
      <Image
        src="/brand/mascot-transparent.png"
        alt="Mascote oficial da Adame.dev"
        fill
        priority={size === "lg"}
        sizes={size === "lg" ? "370px" : "176px"}
        className="relative z-10 object-contain object-bottom drop-shadow-[0_20px_28px_rgba(16,16,20,0.12)]"
      />
    </div>
  );
}
