/*
  Currículo no visual que a Camilly já usava (cabeçalho azul-marinho,
  coluna lateral clara, títulos com sublinhado ciano). O mesmo componente
  aparece na página /curriculo e gera o PDF em /public (npm run cv:pdf).
*/

type Chip = string;

const stack: { label: string; items: Chip[] }[] = [
  { label: "Front-end", items: ["TypeScript", "JavaScript", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Back-end e dados", items: ["Node.js", "Express", "PostgreSQL", "SQL", "Prisma", "NextAuth"] },
  { label: "Ferramentas", items: ["Git", "GitHub", "VS Code", "Vercel", "Cloudinary"] },
  { label: "IA generativa", items: ["ChatGPT", "Claude", "Gemini"] },
  { label: "Em estudo", items: ["Python", "Pandas", "scikit-learn", "Java"] },
];

const projects = [
  {
    name: "ADA Repair",
    badge: "EM USO",
    subtitle: "Sistema de gestão para assistência técnica",
    link: null as string | null,
    text: "Adotado por uma loja, substituiu os registros em papel por um sistema centralizado com acesso remoto e permitiu que outra integrante da equipe passasse a abrir ordens de serviço. Funcionalidades de clientes, aparelhos, ordens de serviço, estoque e fornecedores, além de permissões de acesso, fotografias e códigos QR.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth", "Cloudinary"],
  },
  {
    name: "StudioCM",
    badge: "EM USO",
    subtitle: "Plataforma de agendamento online",
    link: "studio-cm.vercel.app",
    text: "Site de agendamento para um estúdio de beleza com duas profissionais de serviços e horários diferentes. Consulta a disponibilidade na agenda real via Google Calendar e conduz o cliente da vitrine até o agendamento. Responsivo e publicado.",
    stack: ["React", "Node.js", "Express", "Google Calendar API", "Vercel"],
  },
];

const experience = [
  {
    org: "Adame.dev",
    role: "Desenvolvedora full-stack freelance",
    when: "ago. 2026 – atual",
    text: "Desenvolvimento de sistemas e sites para negócios reais: levantamento do problema, desenvolvimento, integrações e entrega. Projetos: ADA Repair e Studio CM.",
  },
  {
    org: "IFSP",
    role: "Estágio administrativo",
    when: "set. 2026 – atual",
    text: "Uso de sistemas institucionais, incluindo o SUAP; organização e atualização de informações; gerenciamento de documentos e apoio à padronização de processos.",
  },
  {
    org: "BIGFARMA",
    role: "Atendimento e vendas",
    when: "2024 – 2026",
    text: "Atendimento presencial e digital, identificação de necessidades dos clientes, resolução de problemas e suporte às operações comerciais.",
  },
];

function SideTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="cvp-side-title">{children}</h2>;
}

function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="cvp-main-title">
      <span>{children}</span>
    </h2>
  );
}

function Chips({ items }: { items: Chip[] }) {
  return (
    <ul className="cvp-chips">
      {items.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}

export default function CvSheet() {
  return (
    <article className="cvp" lang="pt-BR">
      <header className="cvp-head">
        <p className="cvp-kicker">
          <span aria-hidden="true">&lt;/&gt;</span> PORTFÓLIO ONLINE <a href="https://adamedev.com.br">adamedev.com.br</a>
        </p>
        <h1>Camilly Adame da Silva</h1>
        <p className="cvp-role">DESENVOLVIMENTO DE SOFTWARE · CIÊNCIA DE DADOS</p>
        <p className="cvp-contact">
          <span>Presidente Epitácio, SP</span>
          <a href="mailto:cadame.dev@gmail.com">cadame.dev@gmail.com</a>
          <a href="https://www.linkedin.com/in/camilly-adame">linkedin.com/in/camilly-adame</a>
          <a href="https://github.com/camillyadame">github.com/camillyadame</a>
        </p>
      </header>
      <div className="cvp-bar" aria-hidden="true" />

      <div className="cvp-body">
        <aside className="cvp-side">
          <section>
            <SideTitle>Disponibilidade</SideTitle>
            <p>
              Remoto ou híbrido. Aberta a mudança de cidade, com{" "}
              <strong>residência disponível em São José do Rio Preto – SP</strong>.
            </p>
          </section>

          <section>
            <SideTitle>Stack</SideTitle>
            {stack.map((g) => (
              <div key={g.label} className="cvp-stack-group">
                <h3>{g.label}</h3>
                <Chips items={g.items} />
              </div>
            ))}
          </section>

          <section>
            <SideTitle>Como trabalho</SideTitle>
            <ul className="cvp-dots">
              <li>Levantamento de requisitos</li>
              <li>Prototipação</li>
              <li>Depuração</li>
              <li>Integração de serviços</li>
            </ul>
          </section>

          <section>
            <SideTitle>Formação</SideTitle>
            <p>
              <strong>Graduação em Ciência de Dados</strong>
              <span className="cvp-muted cvp-block">UNIVESP · conclusão prevista dez. 2028</span>
            </p>
            <p className="cvp-small">
              Estruturas de dados, programação orientada a objetos, sistemas computacionais, estatística e
              probabilidade.
            </p>
          </section>

          <section>
            <SideTitle>Idiomas</SideTitle>
            <p>
              Português nativo
              <span className="cvp-muted cvp-block">Inglês básico, em estudo</span>
            </p>
          </section>
        </aside>

        <div className="cvp-main">
          <section>
            <MainTitle>Perfil</MainTitle>
            <p>
              Desenvolvedora e graduanda em Ciência de Dados que já <strong>colocou software em uso real</strong>:
              construo sistemas e plataformas web para necessidades concretas de negócios, do levantamento de
              requisitos à implementação. Atuo com <strong>Next.js, TypeScript e PostgreSQL</strong>, uso IA
              generativa para acelerar o desenvolvimento e estou ampliando minha base em dados e machine learning.
              Perfil analítico, proativo e orientado à resolução de problemas.
            </p>
          </section>

          <section>
            <MainTitle>Projetos selecionados</MainTitle>
            {projects.map((p) => (
              <div key={p.name} className="cvp-project">
                <h3>
                  {p.name} <span className="cvp-badge">{p.badge}</span>
                </h3>
                <p className="cvp-sub">
                  <span>{p.subtitle}</span>
                  {p.link && <a href={`https://${p.link}`}>{p.link}</a>}
                </p>
                <p>{p.text}</p>
                <Chips items={p.stack} />
              </div>
            ))}
            <div className="cvp-building">
              <p className="cvp-building-title">EM CONSTRUÇÃO</p>
              <p>
                <strong>SEIVA</strong> · produto autoral de estudos com IA e gamificação
              </p>
              <p>
                <strong>FoodWise AI</strong> · análise e previsão de demanda (Python, Pandas, scikit-learn)
              </p>
            </div>
          </section>

          <section>
            <MainTitle>Experiência</MainTitle>
            {experience.map((e) => (
              <div key={e.org} className="cvp-job">
                <p className="cvp-job-head">
                  <span>
                    <strong>{e.org}</strong> <span className="cvp-sep">|</span>{" "}
                    <span className="cvp-muted">{e.role}</span>
                  </span>
                  <span className="cvp-muted">{e.when}</span>
                </p>
                <p>{e.text}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}
