import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramsSection from "@/components/ProgramsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import TestimonialSection from "@/components/TestimonialSection";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutUsSection from "@/components/AboutUsSection";
import AboutOverviewSection from "@/components/AboutOverviewSection";
import WhyChooseSylvvesterSection from "@/components/WhyChooseSylvvesterSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import AdmissionCtaSection from "@/components/AdmissionCtaSection";
import { buildPageMetadata, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "About Us",
  description:
    "Learn about Sylvvester World School in Jaipur, our vision, mission, and child-first approach to early childhood education.",
  path: "/about",
  keywords: [
    "about sylvvester world school",
    "preschool philosophy",
    "early childhood education in jaipur",
  ],
};

export const metadata = buildPageMetadata(pageSeo);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(pageSeo)),
        }}
      />
      <Header stripeColor='#5b1c93'/>
      <AboutHeroSection />
      <AboutUsSection />
      <AboutOverviewSection />
      <WhyChooseSylvvesterSection />
      <AmenitiesSection />
      <WhyChooseUsSection />
      {/* <AdmissionCtaSection /> */}
      {/* <ProgramsSection />
      <AmenitiesSection /> */}
      {/* <TestimonialSection /> */}
      <Footer />
    </>
  );
}
