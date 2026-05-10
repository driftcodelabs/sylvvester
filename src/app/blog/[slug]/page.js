import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getBlogBySlug } from "@/content/blogs";
import {
  buildPageMetadata,
  enforceSeoDescriptionLength,
  enforceSeoTitleLength,
  getBlogPostingSchema,
  getCanonicalUrl,
  getWebPageSchema,
} from "@/lib/seo";
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

async function resolveSlug(params) {
  const resolvedParams = await params;
  return decodeURIComponent(resolvedParams?.slug || "");
}

export async function generateMetadata({ params }) {
  const slug = await resolveSlug(params);
  const post = getBlogBySlug(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
      path: "/blog",
    });
  }

  const seoTitle = enforceSeoTitleLength(post.title);
  const seoDescription = enforceSeoDescriptionLength(
    post.seoDescription || post.excerpt,
    [post.excerpt, ...(post.blocks || []).map((block) => block.content || "")],
  );

  return buildPageMetadata({
    title: seoTitle,
    description: seoDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: [post.category, "preschool blog", "early childhood education blog"],
  });
}

function BlogBlock({ block }) {
  if (block.type === "h2") {
    return (
      <h2 className="mt-10 text-2xl font-extrabold leading-tight text-[#232638] md:text-3xl">
        {block.content}
      </h2>
    );
  }

  if (block.type === "h3") {
    return (
      <h3 className="mt-7 text-xl font-bold leading-tight text-[#232638] md:text-2xl">
        {block.content}
      </h3>
    );
  }

  if (block.type === "list") {
    return (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#5e6074]">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="mt-5 text-base leading-relaxed text-[#5e6074]">{block.content}</p>
  );
}

export default async function BlogDetailPage({ params }) {
  const slug = await resolveSlug(params);
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const seoTitle = enforceSeoTitleLength(post.title);
  const seoDescription = enforceSeoDescriptionLength(
    post.seoDescription || post.excerpt,
    [post.excerpt, ...(post.blocks || []).map((block) => block.content || "")],
  );

  const pageSeo = {
    title: seoTitle,
    description: seoDescription,
    path: `/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            getWebPageSchema(pageSeo),
            {
              ...getBlogPostingSchema(post),
              datePublished: new Date(post.date).toISOString(),
              dateModified: new Date(post.date).toISOString(),
              url: getCanonicalUrl(`/blog/${post.slug}`),
            },
          ]),
        }}
      />
      <Header stripeColor="#f8effa" />

      <article className="bg-[#f8effa] py-18">
        <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d18109]">
            {post.category} | {post.date}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#232638] md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-10 rounded-4xl bg-white px-6 py-8 shadow-[0_18px_45px_rgba(26,29,46,0.08)] md:px-8 md:py-10">
            {post.image ? (
              <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-3xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 768px, 100vw"
                />
              </div>
            ) : null}
            {post.blocks.map((block, index) => (
              <BlogBlock key={`${block.type}-${index}`} block={block} />
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
