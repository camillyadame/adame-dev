export type Service = {
  id: string;
  name: string;
  priceFrom: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "landing-page",
    name: "Landing page",
    priceFrom: "R$ 850",
    description:
      "Páginas focadas em apresentar e converter visitantes em clientes.",
  },
  {
    id: "site-profissional",
    name: "Site profissional",
    priceFrom: "R$ 1.800",
    description:
      "Sites completos para apresentar seu negócio com credibilidade.",
  },
  {
    id: "automacao",
    name: "Automação",
    priceFrom: "R$ 1.500",
    description:
      "Conectamos ferramentas e eliminamos tarefas manuais do dia a dia.",
  },
  {
    id: "site-automacao",
    name: "Site + automação",
    priceFrom: "R$ 2.000",
    description:
      "Sites com agendamentos, integrações e fluxos automáticos.",
  },
  {
    id: "sistema-personalizado",
    name: "Sistema personalizado",
    priceFrom: "R$ 2.900",
    description:
      "Sistemas sob medida para organizar e escalar seu negócio.",
  },
];
