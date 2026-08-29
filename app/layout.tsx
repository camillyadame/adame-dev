import type { Metadata } from "next";
import { Sora, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Sora({ subsets:["latin"], weight:["600","700","800"], variable:"--font-display", display:"swap" });
const sans = Inter({ subsets:["latin"], variable:"--font-sans", display:"swap" });
const mono = Space_Mono({ subsets:["latin"], weight:["400","700"], variable:"--font-mono", display:"swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://adamedev.com.br"),
  title: { default: "Adame.dev — Soluções digitais para negócios reais", template: "%s | Adame.dev" },
  description: "Sites, sistemas e automações pensados para o seu negócio funcionar melhor. Projetos online para todo o Brasil, com base em Presidente Epitácio — SP.",
  keywords: ["desenvolvimento de sites", "automação", "sistemas personalizados", "Presidente Epitácio", "Adame.dev", "desenvolvedora"],
  authors: [{ name: "Camilly Adame" }],
  creator: "Camilly Adame",
  openGraph: { title: "Adame.dev — Transformando problemas reais em soluções digitais", description: "Sites, sistemas e automações pensados para o seu negócio funcionar melhor.", type: "website", locale: "pt_BR", siteName: "Adame.dev" },
  twitter: { card: "summary_large_image", title: "Adame.dev — Soluções digitais para negócios reais", description: "Sites, sistemas e automações pensados para o seu negócio funcionar melhor." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{children:React.ReactNode}>) { return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}>{children}</body></html>; }
