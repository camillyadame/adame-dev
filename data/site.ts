export const site = {
  name: "Camilly Adame",
  handle: "adame.dev",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://adamedev.com.br",
  role: "Desenvolvedora full-stack",
  email: "cadame.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/camilly-adame",
  github: "https://github.com/camillyadame",
  repo: "https://github.com/camillyadame/adame-dev",
  location: "Presidente Epitácio — SP",
};

export type StackGroup = { label: string; items: string[] };

export const stack: StackGroup[] = [
  { label: "frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { label: "backend", items: ["Node.js", "Express", "NextAuth", "APIs REST"] },
  { label: "dados", items: ["PostgreSQL", "Prisma", "Python"] },
  { label: "integrações", items: ["Google Calendar API", "Cloudinary"] },
  { label: "ferramentas", items: ["Git", "Linux", "Vercel", "Vite"] },
];
