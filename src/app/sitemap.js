import { blogPosts } from "@/content/blogs";
import { getCanonicalUrl } from "@/lib/seo";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/admission",
    "/contact",
    "/franchise",
    "/gallery",
    "/policies",
    "/blog",
  ].map((route) => ({
    url: getCanonicalUrl(route || "/"),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: getCanonicalUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
