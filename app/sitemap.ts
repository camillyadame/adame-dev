import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adamedev.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projetos/studio-cm",
    "/projetos/ada-repair",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
