import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGridSection from "@/components/GalleryGridSection";
import { buildPageMetadata, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "School Gallery",
  description:
    "Explore Sylvvester World School gallery to see classroom moments, activities, and preschool learning experiences in Jaipur.",
  path: "/gallery",
  keywords: ["preschool gallery", "school activities jaipur", "preschool classroom photos"],
};

export const metadata = buildPageMetadata(pageSeo);

export default async function GalleryPage({ searchParams }) {
  const sp = await searchParams;
  const continueFromHome = sp?.more === "1";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(pageSeo)),
        }}
      />
      <Header stripeColor='#f8effa' />
      <GalleryGridSection continueFromHome={continueFromHome} />
      <Footer />
    </>
  );
}
