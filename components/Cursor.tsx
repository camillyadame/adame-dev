type CursorProps = {
  className?: string;
  animate?: boolean;
};

/**
 * O "_" da marca. Funciona como assinatura e, sutilmente, como cursor
 * piscante — reforça o conceito de "código/UI como sotaque visual" sem
 * virar estética hacker (só pisca em contextos pontuais, nunca em bloco).
 */
export default function Cursor({ className = "", animate = false }: CursorProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block text-lime ${animate ? "brand-cursor" : ""} ${className}`}
    >
      _
    </span>
  );
}
