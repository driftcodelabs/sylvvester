import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryGridSection from "@/components/GalleryGridSection";

export const metadata = {
  title: "Gallery | Sylvvester World School",
  description:
    "Explore moments from Sylvvester World School in our colorful school gallery.",
};

export default function GalleryPage() {
  return (
    <>
      <Header stripeColor='#f8effa' />
      <GalleryGridSection />
      <Footer />
    </>
  );
}
