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
  modality: "remoto, híbrido ou mudança de cidade",
  relocation: "Aberta a mudança de cidade, com residência disponível em São José do Rio Preto — SP.",
  cv: "/curriculo",
  cvPdf: "/camilly-adame-curriculo.pdf",
};

export const education = {
  course: "Bacharelado em Ciência de Dados",
  school: "Univesp",
  status: "cursando · conclusão prevista em dez/2028",
  topics: "Estruturas de dados, programação orientada a objetos, sistemas computacionais, estatística e probabilidade.",
};

export type Experience = { when: string; org: string; role: string; text: string };

export const experience: Experience[] = [
  {
    when: "ago/2026 — atual",
    org: "adame.dev",
    role: "Desenvolvedora full-stack freelance",
    text: "Desenvolvimento de sistemas para negócios reais, do levantamento de requisitos ao deploy: ADA Repair (gestão de assistência técnica) e Studio CM (agendamento online integrado ao Google Calendar).",
  },
  {
    when: "set/2026 — atual",
    org: "IFSP",
    role: "Estágio administrativo",
    text: "Uso de sistemas institucionais, incluindo o SUAP; organização e atualização de informações, gestão de documentos e apoio à padronização de processos.",
  },
  {
    when: "2024 — 2026",
    org: "Bigfarma",
    role: "Atendimento e vendas",
    text: "Atendimento presencial e digital, identificação de necessidades dos clientes, resolução de problemas e suporte às operações comerciais.",
  },
];

export type StackGroup = { label: string; items: string[] };

export const stack: StackGroup[] = [
  { label: "frontend", items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { label: "backend", items: ["Node.js", "Express", "NextAuth", "APIs REST"] },
  { label: "dados", items: ["PostgreSQL", "SQL", "Prisma"] },
  { label: "integrações", items: ["Google Calendar API", "Cloudinary"] },
  { label: "ferramentas", items: ["Git", "GitHub", "Vercel", "Vite", "VS Code"] },
  { label: "em estudo", items: ["Python", "Pandas", "scikit-learn", "Java"] },
];
