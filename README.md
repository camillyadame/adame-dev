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
  opengraph-image.tsx      imagem de compartilhamento gerada no build
components/
  AsciiField.tsx           campo de caracteres animado em <canvas> do hero
  Header.tsx, Footer.tsx, ui.tsx
data/
  projects.ts              conteúdo dos projetos e estudos de caso
  site.ts                  links, contato e stack
```

O conteúdo fica em `data/`: para adicionar um projeto, basta incluir um item em `projects.ts` e a página do estudo de caso, o sitemap e a home são atualizados.

### Hero

O fundo do hero é um campo de ondas (soma de senos com uma ondulação radial) desenhado como texto em um `<canvas>`. Ele roda a 24 fps, pausa quando sai da tela, reage ao ponteiro e desenha um único quadro estático quando o sistema pede movimento reduzido.

## Rodando localmente

```bash
npm install
npm run dev
```
