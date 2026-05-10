import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdmissionHeroSection from "@/components/AdmissionHeroSection";
import AdmissionWhyChooseSection from "@/components/AdmissionWhyChooseSection";
import AdmissionWhatWeOfferSection from "@/components/AdmissionWhatWeOfferSection";
import AdmissionCtaSection from "@/components/AdmissionCtaSection";
import AdmissionLocationSection from "@/components/AdmissionLocationSection";
import { buildPageMetadata, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "Admission Open",
  description:
    "Apply for preschool admission at Sylvvester World School, Jaipur. Explore our admission process, programs, and child-friendly learning environment.",
  path: "/admission",
  keywords: [
    "preschool admission in jaipur",
    "nursery admission jaipur",
    "play school admission",
  ],
};

export const metadata = buildPageMetadata(pageSeo);

export default function AdmissionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(pageSeo)),
        }}
      />
      <Header stripeColor="#5b1c93" />
      <AdmissionHeroSection />
      <AdmissionWhyChooseSection />
      <AdmissionWhatWeOfferSection />
      <AdmissionCtaSection ctaHref="#admission-enquiry-form" />
      <AdmissionLocationSection />
      <Footer />
    </>
  );
}

