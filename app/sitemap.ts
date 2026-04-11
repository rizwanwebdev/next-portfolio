import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rizwan.one",
      lastModified: "2026-02-12T11:21:47.484Z",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
