import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import SchoolGallerySection from "@/components/SchoolGallerySection";
import TestimonialSection from "@/components/TestimonialSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
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
