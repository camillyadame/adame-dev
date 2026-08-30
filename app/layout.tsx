import type { Metadata } from "next";
import { Sora, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adamedev.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adame.dev — Soluções digitais para negócios reais",
    template: "%s | Adame.dev",
  },
  description:
    "Sites, sistemas e automações pensados para o seu negócio funcionar melhor. Projetos online para todo o Brasil, com base em Presidente Epitácio — SP.",
  keywords: [
    "desenvolvimento de sites",
    "automação",
    "sistemas personalizados",
    "Presidente Epitácio",
    "Adame.dev",
    "desenvolvedora",
  ],
  authors: [{ name: "Camilly Adame" }],
  creator: "Camilly Adame",
  publisher: "Adame.dev",
  openGraph: {
    title: "Adame.dev — Transformando problemas reais em soluções digitais",
    description:
      "Sites, sistemas e automações pensados para o seu negócio funcionar melhor.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Adame.dev",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Adame.dev — Transformando problemas reais em soluções digitais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adame.dev — Soluções digitais para negócios reais",
    description:
      "Sites, sistemas e automações pensados para o seu negócio funcionar melhor.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {children}
        <body>
  {children}
  <Analytics />
</body>
      </body>
    </html>
  );
}
