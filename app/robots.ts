import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // To Do: Change this to your site's URL
    host: "",
    sitemap: "url/sitemap.xml",
  }
}
