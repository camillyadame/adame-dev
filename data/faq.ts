export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: "preciso-saber",
    question: "Preciso saber exatamente o que quero?",
    answer:
      "Não. Você só precisa saber o que gostaria que funcionasse melhor no seu negócio. A partir do problema, eu entendo o processo e defino a solução e a tecnologia mais adequadas.",
  },
  {
    id: "quanto-custa",
    question: "Quanto custa um projeto?",
    answer:
      "Depende do escopo. Os valores da seção de serviços são o ponto de partida para projetos de escopo essencial — o investimento final varia conforme funcionalidades, integrações e complexidade.",
  },
  {
    id: "pagamento",
    question: "Como funciona o pagamento?",
    answer:
      "As condições de pagamento são definidas na proposta de acordo com o escopo e o investimento do projeto. Assim, tudo fica combinado antes do desenvolvimento começar.",
  },
  {
    id: "quanto-tempo",
    question: "Quanto tempo leva?",
    answer:
      "Varia com o tamanho do projeto. Depois de entender o problema e definir o escopo, eu te passo um prazo realista antes de começar — sem promessas genéricas.",
  },
  {
    id: "alteracoes",
    question: "Posso pedir alterações?",
    answer:
      "Sim. Ajustes fazem parte do processo, principalmente nas etapas de teste e validação antes da entrega final.",
  },
  {
    id: "manutencao",
    question: "A Adame.dev oferece manutenção?",
    answer:
      "Sim, é possível contratar manutenção contínua após a entrega, dependendo da natureza do projeto (site, sistema ou automação).",
  },
  {
    id: "dominio-hospedagem",
    question: "Domínio e hospedagem estão inclusos?",
    answer:
      "Domínio, hospedagem, licenças e outros serviços pagos de terceiros não estão inclusos no valor-base, salvo quando isso estiver explícito na proposta. Eu oriento e faço a configuração necessária, mas sempre que possível esses serviços ficam contratados em nome do próprio cliente.",
  },
  {
    id: "ja-tenho-site",
    question: "E se eu já tiver um site?",
    answer:
      "Sem problema. Posso avaliar o que já existe e propor melhorias, uma reconstrução ou uma automação que se conecte ao que você já usa.",
  },
  {
    id: "ia-nao-consegue",
    question: "A IA não consegue fazer isso?",
    answer:
      "Hoje existem ferramentas excelentes para criar soluções simples com IA. A Adame.dev é para quem prefere trazer o problema e receber uma solução planejada, personalizada, testada e colocada para funcionar — sem precisar aprender ferramentas ou resolver sozinho as questões técnicas do caminho.",
  },
];
