import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // To Do: Change this to your site's URL
      url: "",
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
