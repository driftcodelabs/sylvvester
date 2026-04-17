import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog Detail | Sylvvester World School",
  description: "Blog post details from Sylvvester World School.",
};

export default function BlogDetailPage() {
  return (
    <>
      <Header stripeColor="#f8effa" />

      <section className="bg-[#f8effa] py-18">
        <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
          <h1 className="text-center text-4xl font-extrabold leading-tight text-[#232638] md:text-6xl">
            A Sample Blog Heading
          </h1>

          <div className="prose mx-auto mt-10 max-w-none text-[#5e6074] prose-headings:text-[#232638] prose-strong:text-[#232638]">
            <p>
              This is dummy content for the blog detail page. Replace this with
              your actual blog content when ready.
            </p>
            <p>
              At Sylvvester World School, we believe early learning should feel
              joyful, meaningful and confidence-building. Our classrooms blend
              play-based discovery with strong foundational skills.
            </p>
            <h2>What you can include here</h2>
            <ul>
              <li>Key takeaways and tips for parents</li>
              <li>Updates from classrooms and activities</li>
              <li>Announcements, events and celebrations</li>
            </ul>
            <p>
              You can structure posts using headings, bullet lists, images and
              quotes for a clean reading experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

