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

export const metadata = {
  title: "About Us | Sylvvester World School",
  description:
    "Learn about Sylvvester World School, our vision, mission, and child-first learning approach.",
};

export default function AboutPage() {
  return (
    <>
      <Header stripeColor='#5b1c93'/>
      <AboutHeroSection />
      <AboutUsSection />
      <AboutOverviewSection />
      <WhyChooseSylvvesterSection />
      <WhyChooseUsSection />
      <AdmissionCtaSection />
      {/* <ProgramsSection />
      <AmenitiesSection /> */}
      {/* <TestimonialSection /> */}
      <Footer />
    </>
  );
}
