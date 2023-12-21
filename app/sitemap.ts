import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://laundry.abrasoft.com/",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://laundry.abrasoft.com/login",
      lastModified: new Date("2023-11-17T01:23:23+00:00"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
