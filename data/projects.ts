export type Project = {
  id: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  stack: string[];
  images: { src: string; alt: string }[];
  caseHref?: string;
  liveHref?: string;
  private?: boolean;
};

export const projects: Project[] = [
  {
    id: "studio-cm",
    name: "Studio CM",
    category: "Site + agendamento + integração",
    problem: "Duas profissionais com serviços e horários diferentes precisavam organizar agendamentos sem perder o controle de suas agendas.",
    solution: "Site integrado ao Google Calendar, com consulta de disponibilidade e fluxo de agendamento conectado à rotina real do estúdio.",
    stack: ["React", "Node.js", "Google Calendar API", "Deploy"],
    images: [
      { src: "/projects/studio-cm-home.png", alt: "Página inicial do site Studio CM" },
      { src: "/projects/studio-cm-booking.png", alt: "Fluxo de agendamento do Studio CM" },
      { src: "/projects/studio-cm-cta.png", alt: "Chamada para agendamento e contatos do Studio CM" },
    ],
    caseHref: "/projetos/studio-cm",
    liveHref: "https://studio-cm.vercel.app/",
  },
  {
    id: "ada-repair",
    name: "ADA Repair",
    category: "Sistema personalizado · projeto privado",
    problem: "Organizar clientes, aparelhos, ordens de serviço, estoque e processos internos em um só lugar.",
    solution: "Sistema sob medida para gestão da assistência técnica, incluindo ordens, estoque, fornecedores, clientes, aparelhos e controle de usuários.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Cloudinary"],
    images: [
      { src: "/projects/ada-repair-login.png", alt: "Tela de acesso administrativo do ADA Repair" },
      { src: "/projects/ada-repair-dashboard.png", alt: "Painel administrativo do ADA Repair" },
      { src: "/projects/ada-repair-store.png", alt: "Controle de aparelhos da loja no ADA Repair" },
    ],
    caseHref: "/projetos/ada-repair",
    private: true,
  },
];
