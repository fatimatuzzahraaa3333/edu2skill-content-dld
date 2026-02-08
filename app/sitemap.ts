import { MetadataRoute } from "next";
import { readdirSync } from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://edu2skill.com";

  /* 1. Static Pages */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
    },
  ];

  /* 2. Dynamic Tutorial Pages (from MDX files) */
  const tutorialsDir = path.join(
    process.cwd(),
    "app/(website)/content/tutorials"
  );

  const tutorialSlugs = readdirSync(tutorialsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      url: `${baseUrl}/tutorials/${file.replace(".mdx", "")}`,
      lastModified: new Date(),
    }));

  /* 3. Combine Everything */
  return [...staticPages, ...tutorialSlugs];
}
