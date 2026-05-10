const FALLBACK_SITE_URL = "https://sylvvesterworldschool.com";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_SITE_URL
).replace(/\/+$/, "");

export const SCHOOL_NAME = "Sylvvester World School";
export const SCHOOL_TAGLINE =
  "Best Preschool in Jaipur for joyful early childhood education";

export const defaultSeoKeywords = [
  "Sylvvester World School",
  "preschool",
  "preschool in india",
  "preschool in jaipur",
  "best preschool in jaipur",
  "best preschools in jaipur",
  "early childhood education",
  "nursery school",
  "kindergarten school",
  "play school in jaipur",
  "child development",
  "admission open preschool",
];

export function getCanonicalUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}

function normalizeWhitespace(text = "") {
  return text.replace(/\s+/g, " ").trim();
}

export function enforceSeoTitleLength(title, max = 65) {
  const cleanTitle = normalizeWhitespace(title);
  if (cleanTitle.length <= max) {
    return cleanTitle;
  }

  const sliced = cleanTitle.slice(0, max + 1);
  const cutAt = sliced.lastIndexOf(" ");
  return normalizeWhitespace(
    `${(cutAt > 40 ? sliced.slice(0, cutAt) : cleanTitle.slice(0, max)).trim()}...`,
  );
}

export function enforceSeoDescriptionLength(
  primary,
  fallbacks = [],
  min = 120,
  max = 320,
) {
  const candidates = [primary, ...fallbacks]
    .map((value) => normalizeWhitespace(value || ""))
    .filter(Boolean);

  if (!candidates.length) {
    return "";
  }

  const firstLongEnough = candidates.find((value) => value.length >= min);
  const selected = firstLongEnough || candidates.join(" ");

  if (selected.length <= max) {
    return selected;
  }

  const sliced = selected.slice(0, max + 1);
  const cutAt = sliced.lastIndexOf(" ");
  const trimmed = cutAt > min ? sliced.slice(0, cutAt) : selected.slice(0, max);
  return `${trimmed.trim()}...`;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
}) {
  const canonical = getCanonicalUrl(path);
  const allKeywords = [...defaultSeoKeywords, ...keywords];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${title} | ${SCHOOL_NAME}`,
      description,
      url: canonical,
      siteName: SCHOOL_NAME,
      type,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SCHOOL_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: SCHOOL_NAME,
    url: SITE_URL,
    areaServed: ["Jaipur", "Rajasthan", "India"],
    knowsAbout: [
      "Preschool Education",
      "Early Childhood Education",
      "Play-based Learning",
      "Kindergarten Readiness",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SCHOOL_NAME,
    url: SITE_URL,
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getWebPageSchema({ title, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: getCanonicalUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: SCHOOL_NAME,
      url: SITE_URL,
    },
  };
}

export function getBlogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: post.image ? getCanonicalUrl(post.image) : undefined,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: getCanonicalUrl(`/blog/${post.slug}`),
    author: {
      "@type": "Organization",
      name: SCHOOL_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SCHOOL_NAME,
    },
    keywords: defaultSeoKeywords.join(", "),
  };
}
