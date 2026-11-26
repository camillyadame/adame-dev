# adame.dev

Portfólio da **Camilly Adame**, desenvolvedora full-stack e estudante de Ciência de Dados.

🌐 [adamedev.com.br](https://adamedev.com.br) · [LinkedIn](https://www.linkedin.com/in/camilly-adame) · [GitHub](https://github.com/camillyadame)

## Stack

`Next.js 16` (App Router, páginas estáticas) · `React 19` · `TypeScript` · `Tailwind CSS 4` · `Vercel Analytics`

## Estrutura

```
app/
  page.tsx                 home: abertura, projetos, sobre, stack, contato
  projetos/[slug]/page.tsx estudos de caso, gerados a partir de data/projects.ts
  projetos/clima-turismo-epitacio/page.tsx  página interativa do projeto de dados
  curriculo/               currículo em HTML (e cv.css para impressão)
  opengraph-image.tsx      imagem de compartilhamento gerada no build
  sitemap.ts, robots.ts    /sitemap.xml e /robots.txt
components/
  ParticleField.tsx        nuvem de partículas animada em <canvas> do hero
  ScrollFx.tsx             revelação ao rolar, paralaxe e barra de progresso
  Mascot.tsx               mascote da marca
  clima/                   gráficos interativos da página do clima
  Header.tsx, Footer.tsx, CvSheet.tsx, ui.tsx
data/
  projects.ts              conteúdo dos projetos e estudos de caso
  site.ts                  links, contato e stack
  clima-epitacio.json      resumo exportado do repositório data-science
scripts/
  cv-pdf.mjs               gera o PDF do currículo com Playwright
```

O conteúdo fica em `data/`: para adicionar um projeto, basta incluir um item em `projects.ts` e a página do estudo de caso, o sitemap e a home são atualizados.

### Hero

O fundo do hero é uma nuvem de milhares de pequenos triângulos em órbita, nas cores da marca, desenhada em um `<canvas>` (`components/ParticleField.tsx`). Ela roda a até 30 fps, agrupa as partículas por cor para desenhar menos, pausa fora da tela ou com a aba oculta, reage ao ponteiro e à rolagem e desenha um único quadro parado quando o sistema pede movimento reduzido.

## Rodando localmente

```bash
npm install
npm run dev
```

## Currículo

O conteúdo do currículo fica em `components/CvSheet.tsx` e o visual em `app/curriculo/cv.css`. Depois de mudar, gere o PDF de novo com o site rodando:

```bash
npm run build && npm start
npm run cv:pdf   # grava public/camilly-adame-curriculo.pdf
```
