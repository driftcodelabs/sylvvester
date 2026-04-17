import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const posts = [
  {
    id: "1",
    category: "After School",
    date: "Jul 29, 2025",
    title:
      "Kids Hised sedaugue felis Phasellus gravida lacus quis eros. aenean sapien tornt sed diam className efficit...",
    color: "bg-[#c88f5e]",
  },
  {
    id: "2",
    category: "Kindergarten",
    date: "Jul 29, 2025",
    title:
      "Kids Hised sedaugue felis Phasellus gravida lacus quis eros. aenean sapien tornt sed diam className efficit...",
    color: "bg-[#87b2c9]",
  },
  {
    id: "3",
    category: "Uncategorized",
    date: "Oct 31, 2025",
    title:
      "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
    color: "bg-[#2b3b4f]",
  },
];

export const metadata = {
  title: "Blog | Sylvvester World School",
  description: "Read the latest updates and stories from Sylvvester World School.",
};

function BlogCard({ post, featured = false }) {
  return (
    <Link
      href="/blog/blog-dettail"
      className={`group block ${featured ? "lg:col-span-2" : ""}`}
      aria-label={`Read blog: ${post.category}`}
    >
      <div className="overflow-hidden rounded-4xl bg-white shadow-[0_18px_45px_rgba(26,29,46,0.08)]">
        <div className={`aspect-video w-full ${post.color}`} />

        <div className="px-6 pb-8 pt-5">
          <div className="flex items-center gap-4">
            <span className="rounded-md bg-[#fff3dc] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#d18109]">
              {post.category}
            </span>
            <span className="text-sm font-semibold text-[#8a96b2]">
              {post.date}
            </span>
          </div>

          <p className="mt-6 text-lg font-semibold leading-relaxed text-[#8a96b2] transition group-hover:text-[#232638]">
            {post.title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <>
      <Header stripeColor="#f8effa" />

      <section className="bg-[#f8effa] py-18">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#7d7c90]">
                Exploring the wonders of early childhood education, one story at a time.
              </p>
              <h1 className="mt-3 text-4xl font-extrabold text-[#232638] md:text-6xl">
                Blog
              </h1>
            </div>

            <div className="w-full max-w-md">
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
                  className="w-full rounded-full border border-[#ece6f6] bg-[#f8effa] py-3 pl-11 pr-4 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <BlogCard post={posts[2]} featured />
            <BlogCard post={posts[0]} />
            <BlogCard post={posts[1]} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

