// Gera public/camilly-adame-curriculo.pdf a partir da página /curriculo.
// Uso: npm run build && npm start (em outro terminal) && node scripts/cv-pdf.mjs [url]
import { createRequire } from "node:module";

// Usa o Playwright do projeto ou, se não houver, o instalado globalmente.
const require = createRequire(import.meta.url);
let pw;
try {
  pw = require("playwright");
} catch {
  pw = require(require("node:child_process").execSync("npm root -g").toString().trim() + "/playwright");
}
const { chromium } = pw;

const base = process.argv[2] || "http://localhost:3000";
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`${base}/curriculo`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: "public/camilly-adame-curriculo.pdf",
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
});
await browser.close();
console.log("PDF gerado em public/camilly-adame-curriculo.pdf");
