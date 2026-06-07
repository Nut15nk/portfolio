import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE = "https://nut15nk.github.io/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/projects/blackdiamond/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/projects/e-sign/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
