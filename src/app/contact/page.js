import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactMapSection from "@/components/ContactMapSection";
import { buildPageMetadata, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "Contact Us",
  description:
    "Contact Sylvvester World School in Jaipur for preschool admissions, fee details, programs, and campus visits.",
  path: "/contact",
  keywords: ["contact preschool in jaipur", "preschool admission enquiry", "school contact jaipur"],
};

export const metadata = buildPageMetadata(pageSeo);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(pageSeo)),
        }}
      />
      <Header stripeColor="#fff8ef" />
      <ContactSection />
      {/* <ContactMapSection /> */}
      <Footer />
    </>
  );
}

