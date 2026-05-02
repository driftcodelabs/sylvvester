export default function AdmissionLocationSection() {
  return (
    <section className="bg-[#f6f1e4] py-16">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a88a63]">
            Visit Us
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#232638] md:text-4xl">
            Locate Sylvvester World School
          </h2>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-[#5e6074]">
            Plan a campus visit to experience our joyful learning spaces and
            meet our team in person.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-[#e5dccb] shadow-sm">

          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3557.6611377503796!2d75.73171617543943!3d26.91424747664636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzUxLjMiTiA3NcKwNDQnMDMuNSJF!5e0!3m2!1sen!2sin!4v1777754605144!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

