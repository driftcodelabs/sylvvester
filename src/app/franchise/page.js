import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FranchiseHeroSection from "@/components/FranchiseHeroSection";
import FranchiseWhyChooseSection from "@/components/FranchiseWhyChooseSection";
import FranchiseLegacySection from "@/components/FranchiseLegacySection";
import FranchiseWhyStartPreschoolSection from "@/components/FranchiseWhyStartPreschoolSection";
import FranchiseSupportSection from "@/components/FranchiseSupportSection";
import FranchiseRoadmapSection from "@/components/FranchiseRoadmapSection";
import FaqSection from "@/components/FaqSection";
import { buildPageMetadata, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "Preschool Franchise in India",
  description:
    "Explore preschool franchise opportunities with Sylvvester World School. Partner with a trusted early childhood education brand in India.",
  path: "/franchise",
  keywords: [
    "preschool franchise in india",
    "play school franchise",
    "education franchise opportunity",
  ],
};

export const metadata = buildPageMetadata(pageSeo);

export default function FranchisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(pageSeo)),
        }}
      />
      <Header stripeColor="#ffffff" />
      <FranchiseHeroSection />
      <FranchiseWhyChooseSection />
      <FranchiseWhyStartPreschoolSection />
      <FranchiseSupportSection />
      <FranchiseRoadmapSection />
      <FaqSection />
      <FranchiseLegacySection />
      <Footer />
    </>
  );
}

