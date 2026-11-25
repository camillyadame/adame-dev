export type Decision = { title: string; text: string };

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  role: string;
  status: string;
  stack: string[];
  highlights: string[];
  cover: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
  links: { label: string; href: string }[];
  context: string[];
  built: string[];
  decisions: Decision[];
  next?: string[];
  privateNote?: string;
};

export const projects: Project[] = [
  {
    slug: "ada-repair",
    name: "ADA Repair",
    kind: "sistema de gestão",
    summary:
      "Sistema interno para uma assistência técnica de celulares: clientes, aparelhos, ordens de serviço, orçamentos, estoque, fornecedores e aparelhos à venda em um só lugar.",
    role: "Desenvolvimento full-stack, do modelo de dados ao deploy",
    status: "Em uso na loja · acesso restrito por segurança",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "Cloudinary"],
    highlights: [
      "Substituiu os registros em papel da loja por um sistema central com acesso remoto",
      "Banco relacional com 12 entidades modelado em Prisma",
      "Ordem de serviço com 8 estados, da avaliação à entrega",
      "Perfis de acesso (admin e técnico) checados no servidor",
      "QR code por ordem para o cliente acompanhar o conserto",
    ],
    cover: {
      src: "/projects/ada-repair-dashboard.png",
      alt: "Painel administrativo do ADA Repair com indicadores de clientes, ordens de serviço, estoque baixo e aparelhos prontos",
    },
    gallery: [
      { src: "/projects/ada-repair-dashboard.png", alt: "Painel administrativo com indicadores da operação" },
      { src: "/projects/ada-repair-store.png", alt: "Controle de aparelhos à venda na loja" },
      { src: "/projects/ada-repair-login.png", alt: "Tela de acesso administrativo" },
    ],
    links: [],
    context: [
      "A assistência controlava clientes, aparelhos em conserto, peças e vendas em lugares diferentes. Saber em que pé estava um reparo, ou se uma peça tinha acabado, dependia de procurar em várias fontes.",
      "O objetivo era um sistema único, usado no balcão e pela equipe técnica, que também desse ao cliente um jeito simples de acompanhar o próprio aparelho.",
      "Hoje o ADA Repair está em uso na loja: os registros em papel foram substituídos por um sistema central, acessível de qualquer lugar, e outra integrante da equipe passou a abrir ordens de serviço sozinha.",
    ],
    built: [
      "Cadastro de clientes e aparelhos, com histórico de ordens por cliente.",
      "Ordens de serviço com checklist de entrada, fotos, orçamento, pagamento e um fluxo de status (aguardando avaliação, em análise, aguardando aprovação, em conserto, aguardando peça, pronto, entregue, cancelado).",
      "Estoque de peças com alerta de estoque baixo e cadastro de fornecedores.",
      "Controle de aparelhos à venda (em estoque, reservado, vendido) e margem comercial visível só para administradores.",
      "Etiqueta com QR code para cada ordem e uma página pública de consulta, onde o cliente vê o status do conserto.",
      "Gestão de usuários com primeiro acesso obrigatório e redefinição de senha por e-mail.",
    ],
    decisions: [
      {
        title: "Next.js com Server Actions em vez de uma API separada",
        text: "Como o sistema tem um único cliente (a própria interface), manter leitura e escrita no servidor do Next.js reduziu a quantidade de código e deixou as regras de acesso perto dos dados.",
      },
      {
        title: "Prisma + PostgreSQL para um domínio muito relacional",
        text: "Cliente, aparelho, ordem, orçamento, pagamento e fotos se referenciam o tempo todo. Um banco relacional com tipos gerados pelo Prisma tornou essas relações explícitas e seguras no TypeScript.",
      },
      {
        title: "Permissões verificadas no servidor",
        text: "Cada página e ação passa por funções como exigirAutenticacao e exigirAdmin antes de tocar no banco. Esconder um botão na interface não basta: a regra vale mesmo se alguém chamar a ação diretamente.",
      },
      {
        title: "Upload assinado para o Cloudinary",
        text: "As fotos das ordens são enviadas pelo servidor, com validação de tipo e tamanho (até 5 MB), usando a API REST do Cloudinary. As credenciais nunca chegam ao navegador.",
      },
      {
        title: "Consulta do cliente sem login",
        text: "O QR code leva a uma página pública da ordem. O acesso é validado e guardado em um cookie assinado com HMAC, para que o cliente acompanhe o reparo sem precisar criar conta.",
      },
    ],
    privateNote:
      "O sistema está em uso na loja e, por segurança, não tem acesso público nem código aberto. Mostro aqui apenas telas autorizadas, sem dados reais de clientes.",
  },
  {
    slug: "studio-cm",
    name: "Studio CM",
    kind: "site + agendamento",
    summary:
      "Site de um estúdio de beleza com agendamento online integrado ao Google Calendar das duas profissionais, cada uma com serviços, durações e horários próprios.",
    role: "Desenvolvimento full-stack: interface, API e integração",
    status: "Em uso pelo estúdio · no ar",
    stack: ["React", "TypeScript", "Vite", "Node.js", "Express", "Google Calendar API"],
    highlights: [
      "Disponibilidade calculada em tempo real a partir das agendas",
      "Pré-reserva que expira sozinha se o sinal não for pago",
      "Rate limiting, campo-isca e validação contra abuso",
      "Testes automatizados das proteções da API",
    ],
    cover: {
      src: "/projects/studio-cm-booking.png",
      alt: "Fluxo de agendamento do Studio CM, na etapa de escolha da especialista e do serviço",
    },
    gallery: [
      { src: "/projects/studio-cm-booking.png", alt: "Fluxo de agendamento em quatro etapas" },
      { src: "/projects/studio-cm-home.png", alt: "Página inicial do Studio CM" },
      { src: "/projects/studio-cm-cta.png", alt: "Chamada para agendamento e contatos" },
    ],
    links: [
      { label: "ver no ar", href: "https://studio-cm.vercel.app/" },
      { label: "código", href: "https://github.com/camillyadame/StudioCM" },
    ],
    context: [
      "O estúdio tem duas profissionais, com serviços, durações e dias de trabalho diferentes. Os agendamentos chegavam pelo WhatsApp e eram conferidos manualmente na agenda de cada uma.",
      "Elas já usavam o Google Calendar no dia a dia. Em vez de criar uma agenda nova para elas aprenderem, a ideia foi fazer o site conversar com a ferramenta que já funcionava.",
    ],
    built: [
      "Site responsivo com apresentação das profissionais, serviços e galeria.",
      "Fluxo de agendamento em quatro etapas: serviço, data e hora, dados e confirmação.",
      "API em Node.js/Express que lê a agenda de cada profissional e devolve só os horários realmente livres.",
      "Pré-reservas gravadas como eventos no Google Calendar, com os dados do cliente em metadados privados.",
      "Rotina que roda a cada minuto e expira pré-reservas cujo sinal não foi confirmado no prazo.",
    ],
    decisions: [
      {
        title: "Integrar em vez de reinventar a agenda",
        text: "O Google Calendar continua sendo a fonte da verdade. A profissional vê e edita os horários onde já está acostumada, e o site nunca oferece um horário que ela bloqueou manualmente.",
      },
      {
        title: "Cálculo de disponibilidade no servidor",
        text: "A API cruza jornada de trabalho, duração de cada serviço e eventos já existentes em intervalos de 15 minutos, no fuso America/Sao_Paulo. Assim a regra fica em um lugar só e não pode ser burlada pelo navegador.",
      },
      {
        title: "Confirmação pelo próprio calendário",
        text: "Enquanto o pagamento automático não existe, a profissional confirma o sinal só editando o título do evento. A rotina de expiração reconhece essa edição e não mexe mais no horário.",
      },
      {
        title: "Proteção contra abuso sem infraestrutura extra",
        text: "Limite de requisições por IP e por telefone, limite de pré-reservas pendentes por número, campo-isca para robôs e normalização de telefone. O limitador fica em memória, o que é simples e suficiente para um único processo.",
      },
    ],
    next: [
      "Pagamento do sinal via Pix automático, para reduzir o prazo da pré-reserva de 24 horas para poucos minutos.",
      "Mover o rate limiting para um armazenamento compartilhado caso a API passe a rodar em mais de uma instância.",
    ],
  },
];

export type InProgress = { name: string; kind: string; summary: string };

export const inProgress: InProgress[] = [
  {
    name: "SEIVA",
    kind: "produto autoral",
    summary:
      "Plataforma de estudos que combina IA e gamificação para ajudar a manter foco e constância. É onde estou juntando o que aprendo em desenvolvimento com o que estudo em Ciência de Dados.",
  },
  {
    name: "FoodWise AI",
    kind: "ciência de dados",
    summary:
      "Análise e previsão de demanda com Python, Pandas e scikit-learn. É o projeto em que estou aplicando o que aprendo na graduação em Ciência de Dados.",
  },
];
