import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-18">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:px-10 lg:grid-cols-2">
        <article>
          <h2 className="text-4xl font-extrabold text-[#5b248f]">About Us</h2>
          <div className="mt-2 h-1 w-24 rounded-full bg-[#d18109]" />

          <p className="mt-6 text-lg leading-relaxed text-[#2d2347]/90">
            Sylvvester World School is a premier preschool and daycare centre in
            the Jaipur that was established in 2018 under the aegis of Smart
            Leaders Education Society. It is an initiative taken by a determined
            and dedicated team of experts in education, child care and
            development sector, working tirelessly for excellence since last 15
            years.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#2d2347]/90">
            The school emphasizes on the holistic development of the learners
            with the beautifully designed infrastructure and world-class
            curriculum designed by the expert team of researchers.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#2d2347]/90">
            The school provides the best hands on experience of the new age
            learning pedagogies through fun activities and is dedicated to
            providing young children with a joyful introduction to learning. The
            school&apos;s environment is safe and inspiring where every child
            feels respected, supported and encouraged to explore the world
            around them.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#2d2347]/90">
            We believe that early childhood education lays the foundation of
            lifelong success and our dedicated teachers are committed to create
            memorable learning experiences for each child.
          </p>
        </article>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative  overflow-hidden rounded-4xl border-8 border-[#f2e7fb] bg-[#f8effa] shadow-xl">
            <Image
              src="/about/kids-group.jpg"
              alt="Happy child at Sylvvester World School"
              width={420}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
