import type { Metadata } from "next";
import { Sora, Inter, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

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
<<<<<<< HEAD

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adamedev.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
=======

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://adamedev.com.br"
  ),

>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
  title: {
    default: "Adame.dev — Soluções digitais para negócios reais",
    template: "%s | Adame.dev",
  },
<<<<<<< HEAD
  description:
    "Sites, sistemas e automações pensados para o seu negócio funcionar melhor. Projetos online para todo o Brasil, com base em Presidente Epitácio — SP.",
=======

  description:
    "Sites, sistemas e automações pensados para o seu negócio funcionar melhor. Projetos online para todo o Brasil, com base em Presidente Epitácio — SP.",

>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
  keywords: [
    "desenvolvimento de sites",
    "automação",
    "sistemas personalizados",
    "Presidente Epitácio",
    "Adame.dev",
    "desenvolvedora",
  ],
<<<<<<< HEAD
  authors: [{ name: "Camilly Adame" }],
  creator: "Camilly Adame",
  publisher: "Adame.dev",
=======

  authors: [{ name: "Camilly Adame" }],
  creator: "Camilly Adame",

  alternates: {
    canonical: "/",
  },

>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
  openGraph: {
    title: "Adame.dev — Transformando problemas reais em soluções digitais",
    description:
      "Sites, sistemas e automações pensados para o seu negócio funcionar melhor.",
<<<<<<< HEAD
    url: siteUrl,
=======
    url: "/",
>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
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
<<<<<<< HEAD
=======

>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
  twitter: {
    card: "summary_large_image",
    title: "Adame.dev — Soluções digitais para negócios reais",
    description:
      "Sites, sistemas e automações pensados para o seu negócio funcionar melhor.",
    images: ["/opengraph-image"],
  },
<<<<<<< HEAD
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
=======

  robots: {
    index: true,
    follow: true,
>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
  },
};

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{ children: React.ReactNode }>) {
=======
}: Readonly<{
  children: React.ReactNode;
}>) {
>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
  return (
    <html lang="pt-BR">
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {children}
<<<<<<< HEAD
      </body>
    </html>
  );
}
=======
        <Analytics />
      </body>
    </html>
  );
}
>>>>>>> 3ff9b6a (feat: enable Vercel Web Analytics)
