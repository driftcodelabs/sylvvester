import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import SchoolGallerySection from "@/components/SchoolGallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import { buildPageMetadata, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "Best Preschool in Jaipur | Sylvvester World School",
  description:
    "Sylvvester World School is a leading preschool in Jaipur offering early childhood education through play-based learning, nurturing care, and strong foundational development.",
  path: "/",
  keywords: [
    "best preschool in jaipur",
    "play school in jaipur",
    "nursery admission jaipur",
    "early learning school in jaipur",
  ],
};

export const metadata = buildPageMetadata(pageSeo);

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(pageSeo)),
        }}
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <SchoolGallerySection />
      <WhyChooseUsSection />
      <AmenitiesSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
