import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionHeroSection from "@/components/AdmissionHeroSection";
import AdmissionWhyChooseSection from "@/components/AdmissionWhyChooseSection";
import AdmissionWhatWeOfferSection from "@/components/AdmissionWhatWeOfferSection";
import AdmissionCtaSection from "@/components/AdmissionCtaSection";
import AdmissionLocationSection from "@/components/AdmissionLocationSection";

export const metadata = {
  title: "Admission | Sylvvester World School",
  description:
    "Explore the simple admission process at Sylvvester World School. Discover our programs, facilities and how we support every child&apos;s joyful learning journey.",
};

export default function AdmissionPage() {
  return (
    <>
      <Header stripeColor="#5b1c93" />
      <AdmissionHeroSection />
      <AdmissionWhyChooseSection />
      <AdmissionWhatWeOfferSection />
      <AdmissionCtaSection />
      <AdmissionLocationSection />
      <Footer />
    </>
  );
}

