import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { blogSummaries } from "@/content/blogs";
import { buildPageMetadata, getCanonicalUrl, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "Preschool Blog",
  description:
    "Read expert articles on preschool education, parenting tips, and early childhood development from Sylvvester World School.",
  path: "/blog",
  keywords: [
    "preschool blog india",
    "early childhood education blog",
    "parenting tips for preschoolers",
    "preschool in jaipur blog",
  ],
};

export const metadata = buildPageMetadata(pageSeo);

function BlogCard({ post, featured = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block h-fit ${featured ? "lg:col-span-2" : ""}`}
      aria-label={`Read blog: ${post.category}`}
    >
      <div
        className={`flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-[0_18px_45px_rgba(26,29,46,0.08)] transition ${
          featured ? "ring-1 ring-[#ece6f6]" : ""
        }`}
      >
        {post.image ? (
          <div className={`relative ${post.image ? "min-h-[300px]" : "min-h-unset"} w-full`}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes={featured ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            />
          </div>
        ) : (
          <div className={`min-h-unset w-full ${post.color}`} />
        )}

        <div className={`flex flex-1 flex-col px-6 pt-5 ${featured ? "pb-7" : "pb-8"}`}>
          <div className="flex items-center gap-4">
            <span className="rounded-md bg-[#fff3dc] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#d18109]">
              {post.category}
            </span>
            <span className="text-sm font-semibold text-[#8a96b2]">
              {post.date}
            </span>
          </div>

          <div className="mt-6 min-h-[110px]">
            <p className="font-semibold leading-relaxed text-[#8a96b2] transition group-hover:text-[#232638] text-lg">
              {post.title}
            </p>
            {post.excerpt ? (
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#8a96b2]">
                {post.excerpt}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const featuredPost = blogSummaries[0];
  const regularPosts = blogSummaries.slice(1);
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Sylvvester World School Blog",
    url: getCanonicalUrl("/blog"),
    blogPost: blogSummaries.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: getCanonicalUrl(`/blog/${post.slug}`),
      datePublished: post.date,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([getWebPageSchema(pageSeo), blogListSchema]),
        }}
      />
      <Header stripeColor="#f8effa" />

      <section className="bg-[#f8effa] py-18">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h1 className="mt-3 text-4xl font-extrabold text-[#232638] md:text-6xl">
                Blog
              </h1>
            </div>

            {/* <div className="w-full max-w-md">
              <label className="sr-only" htmlFor="blog-search">
                Search blog
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8b8da0]">
                  <FaSearch />
                </span>
                <input
                  id="blog-search"
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-full border border-[#ece6f6] bg-[#ffffff] py-3 pl-11 pr-4 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                />
              </div>
            </div> */}
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <BlogCard post={featuredPost} featured />
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

