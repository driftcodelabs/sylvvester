import { getCanonicalUrl, SITE_URL } from "@/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/blog/blog-dettail"],
    },
    sitemap: getCanonicalUrl("/sitemap.xml"),
    host: SITE_URL,
  };
}
