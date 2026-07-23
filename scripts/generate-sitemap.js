import { writeFileSync } from "node:fs";
import { rubros, productos } from "../src/data/mockData.js";

const SITE_URL = "https://inna-profesionales.web.app";
const today = new Date().toISOString().split("T")[0];

const staticUrls = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/nosotros", priority: "0.6", changefreq: "monthly" },
  { loc: "/contacto", priority: "0.6", changefreq: "monthly" },
  { loc: "/terminos-y-condiciones", priority: "0.3", changefreq: "yearly" },
  { loc: "/politica-de-privacidad", priority: "0.3", changefreq: "yearly" },
];

const rubroUrls = rubros.map((r) => ({
  loc: `/catalogo/${r.id}`,
  priority: "0.9",
  changefreq: "daily",
}));

const productoUrls = productos.map((p) => ({
  loc: `/producto/${p.id}`,
  priority: "0.7",
  changefreq: "weekly",
}));

const urls = [...staticUrls, ...rubroUrls, ...productoUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml generado con ${urls.length} URLs`);
