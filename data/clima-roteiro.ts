/*
  Roteiro da página do projeto de clima: só lugares públicos e eventos.
  Cada item tem uma fonte oficial que dá para conferir. Os meses ligam o
  lugar ao que os dados mostram, e essa ligação é uma interpretação do
  projeto, não da fonte. Ao revisar, atualize `verificadoEm`.
*/

export const verificadoEm = "novembro de 2026";

const fontes = {
  viva: {
    label: "Viva Presidente Epitácio (prefeitura)",
    href: "https://vivapresidenteepitacio.sp.gov.br/item-artigo/sobre-presidente-epitacio/",
  },
  pontos: {
    label: "Viva Presidente Epitácio, pontos turísticos",
    href: "https://vivapresidenteepitacio.sp.gov.br/visite/coisas-para-fazer/pontos-turisticos/",
  },
  sp: {
    label: "Secretaria de Turismo de SP",
    href: "https://plataforma.turismo.sp.gov.br/conheca-o-municipio-turistico-de-presidente-epitacio",
  },
  piracema: {
    label: "Semil-SP, piracema",
    href: "https://semil.sp.gov.br/11/piracema-comeca-hoje-e-vai-ate-o-fim-de-fevereiro/",
  },
} as const;

export type Fonte = { label: string; href: string };

export type Lugar = {
  nome: string;
  tipo: string;
  descricao: string;
  /** Meses (1 a 12) em que os dados favorecem a visita. */
  meses: number[];
  /** Por que esses meses, em uma frase, com base nos dados. */
  porque: string;
  fontes: Fonte[];
};

const TODOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const lugares: Lugar[] = [
  {
    nome: "Parque da Orla e Mirante da Orla",
    tipo: "orla e pôr do sol",
    descricao:
      "Orla fluvial de cerca de 7 km, com pista de skate, quadras, academia ao ar livre e o mirante do pôr do sol.",
    meses: TODOS,
    porque:
      "Vale o ano todo. De dezembro a março, prefira até as 9h ou depois das 20h; de maio a agosto, qualquer horário é confortável.",
    fontes: [fontes.sp, fontes.pontos],
  },
  {
    nome: "Píer Turístico",
    tipo: "orla",
    descricao: "Píer sobre o Rio Paraná, usado para caminhar, pescar e fotografar.",
    meses: TODOS,
    porque: "Como na orla, o horário importa mais que o mês no verão.",
    fontes: [fontes.sp],
  },
  {
    nome: "Parque O Figueiral",
    tipo: "praia de água doce",
    descricao:
      "Balneário municipal a cerca de 5 km do centro, com praia de água doce, quadras e área de recreação.",
    meses: [4, 9],
    porque:
      "Para entrar na água, abril e setembro juntam muitos dias bons com sensação máxima média perto de 30 °C, sem o calor do verão. O projeto não tem dados da temperatura da água.",
    fontes: [fontes.sp, fontes.viva],
  },
  {
    nome: "Horto Florestal Edson Valim",
    tipo: "parque",
    descricao: "Área verde de 24 mil m² com mata, pássaros e sete esculturas de dinossauros.",
    meses: [5, 6, 7, 8],
    porque: "Passeio a pé rende mais na estação seca, quando a sensação máxima fica entre 26 e 28 °C.",
    fontes: [fontes.viva],
  },
  {
    nome: "Igreja Santo Estêvão e Colônia Árpád",
    tipo: "história",
    descricao:
      "Igreja de madeira de cerca de 1921, construída pela colônia húngara, a 10 km do centro.",
    meses: [4, 5, 6, 7, 8, 9],
    porque: "Passeio de carro e a pé: os meses de passeio com mais dias bons são os mais indicados.",
    fontes: [fontes.sp, fontes.viva],
  },
];

export type Evento = {
  nome: string;
  meses: number[];
  quando: string;
  descricao: string;
  fontes: Fonte[];
};

export const eventos: Evento[] = [
  {
    nome: "Carnaval",
    meses: [2, 3],
    quando: "fevereiro ou março",
    descricao: "Desfiles de escolas de samba e blocos no sambódromo montado na orla.",
    fontes: [fontes.viva, fontes.sp],
  },
  {
    nome: "Fogueirão de São Pedro",
    meses: [6],
    quando: "junho",
    descricao: "Festa junina em homenagem ao padroeiro da cidade.",
    fontes: [fontes.viva],
  },
  {
    nome: "Torneio de Pesca Amadora Esportiva ao Tucunaré",
    meses: [11],
    quando: "novembro",
    descricao: "Torneio de pesca com gastronomia regional e música.",
    fontes: [fontes.viva],
  },
  {
    nome: "Réveillon na orla",
    meses: [12],
    quando: "31 de dezembro",
    descricao: "Queima de fogos na orla na virada do ano.",
    fontes: [fontes.sp],
  },
];

/** Defeso da piracema: pesca de espécies nativas restrita de novembro a fevereiro. */
export const piracema = {
  meses: [11, 12, 1, 2],
  texto:
    "Piracema: de novembro a fevereiro, a pesca de espécies nativas tem restrições nos rios de SP. Confira as regras antes de pescar.",
  fonte: fontes.piracema,
};
