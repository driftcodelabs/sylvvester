import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import ContactMapSection from "@/components/ContactMapSection";

export const metadata = {
  title: "Contact Us | Sylvvester World School",
  description:
    "Get in touch with Sylvvester World School. Send a message, find contact details, and locate us on the map.",
};

export default function ContactPage() {
  return (
    <>
      <Header stripeColor="#fff8ef" />
      <ContactSection />
      <ContactMapSection />
      <Footer />
    </>
  );
}

