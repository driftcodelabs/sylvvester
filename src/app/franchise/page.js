import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FranchiseHeroSection from "@/components/FranchiseHeroSection";
import FranchiseWhyChooseSection from "@/components/FranchiseWhyChooseSection";
import FranchiseLegacySection from "@/components/FranchiseLegacySection";
import FranchiseWhyStartPreschoolSection from "@/components/FranchiseWhyStartPreschoolSection";
import FranchiseSupportSection from "@/components/FranchiseSupportSection";
import FranchiseRoadmapSection from "@/components/FranchiseRoadmapSection";
import FaqSection from "@/components/FaqSection";

export const metadata = {
  title: "Franchise | Sylvvester World School",
  description:
    "Explore franchise opportunities with Sylvvester World School. Share your details to receive information and connect with our team.",
};

export default function FranchisePage() {
  return (
    <>
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

