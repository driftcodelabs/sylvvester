import Image from "next/image";

export default function AboutSection() {
  const featureCards = [
    {
      title: "Safe and Caring Space",
      description:
        "We create a safe and loving space for every child and parent.",
      bgColor: "bg-[#4f830e]",
      accentColor: "#4F830E",
      icon: "🔤",
    },
    {
      title: "Multi-Skill Growth",
      description:
        "Our multi-skill approach nurtures growth through guided activities.",
      bgColor: "bg-[#6d1a8d]",
      accentColor: "#6D1A8D",
      icon: "🏅",
    },
    {
      title: "Global Citizen Mindset",
      description:
        "We shape confident, adaptable and resilient young global citizens.",
      bgColor: "bg-[#d18109]",
      accentColor: "#D18109",
      icon: "🚌",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 md:gap-14 md:px-10 lg:grid-cols-2">
        <div className="relative flex justify-center lg:justify-start">
          <div className="absolute -bottom-8 -left-2 h-48 w-48 rounded-full bg-white/55" />
          <div className="absolute -left-6 top-14 h-12 w-12 rounded-full border-2 border-dashed border-[#70167e]/35" />
          <div className="relative mx-auto h-[260px] w-[260px] overflow-hidden rounded-[48%] border-[6px] border-white/70 shadow-lg sm:h-[300px] sm:w-[300px] sm:border-8 md:h-[340px] md:w-[340px] lg:h-[380px] lg:w-[380px]">
            <Image
              src="/bgRemovedKids/IMG_6257.png"
              alt="Student in school uniform"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative z-10 text-[#291f3e]">
          <p className="text-center text-3xl font-bold text-[#70167e] sm:text-4xl lg:text-left">
            About Us
          </p>
          <div className="mx-auto mt-2 h-[2px] w-24 bg-[#70167e]/40 sm:w-28 lg:mx-0" />

          <h2 className="mt-5 text-center text-2xl font-semibold text-[#1f2235] sm:mt-6 sm:text-3xl lg:text-left">
            Nurturing Confident Global Citizens
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#2b2e47]/90 sm:text-lg">
            Sylvvester World School is a premier preschool and daycare centre in
            the Jaipur that was established in 2018 under the aegis of Smart
            Leaders Education Society.
          </p>
          {/* <p className="mt-4 text-lg leading-relaxed text-[#2b2e47]/90">
            It is an initiative taken by a determined and dedicated team of
            experts in education, child care and development sector, working
            tirelessly for excellence since last 15 years.
          </p> */}
          <p className="mt-4 text-base leading-relaxed text-[#2b2e47]/90 sm:text-lg">
            The school emphasizes on the holistic development of the learners
            with the beautifully designed infrastructure and world-class
            curriculum designed by the expert team of researchers.
          </p>
          {/* <p className="mt-4 text-lg leading-relaxed text-[#2b2e47]/90">
            The school provides the best hands on experience of the new age
            learning pedagogies through fun activities and is dedicated to
            providing young children with a joyful introduction to learning. The
            school&apos;s environment is safe and inspiring where every child
            feels respected, supported and encouraged to explore the world around
            them.
          </p> */}
          <p className="mt-4 text-base leading-relaxed text-[#2b2e47]/90 sm:text-lg">
            We believe that early childhood education lays the foundation of
            lifelong success and our dedicated teachers are committed to create
            memorable learning experiences for each child.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5 lg:justify-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d18109] bg-white sm:h-20 sm:w-20">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e89f5d] text-xl text-white sm:h-14 sm:w-14 sm:text-2xl">
                ☎
              </div>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl font-medium text-[#344e67] sm:text-2xl md:text-3xl">Call Us Now</p>
              <p className="mt-1 text-2xl font-bold tracking-tight text-[#344e67] sm:text-3xl md:text-4xl">
                9799366138
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-10 h-10 w-10 rotate-12 rounded-md border-2 border-[#70167e]/25" />
      <div className="pointer-events-none absolute bottom-8 right-1/2 h-9 w-9 -translate-x-1/2 rounded-full border-2 border-[#70167e]/35" />

      <div className="mx-auto mt-12 grid w-full max-w-7xl gap-5 px-4 sm:mt-16 sm:gap-6 sm:px-6 md:mt-20 md:gap-7 md:px-10 lg:grid-cols-3">
        {featureCards.map((card) =>(
          <article
            key={card.title}
            className={`relative rounded-2xl border border-white/30 p-5 text-white shadow-md sm:p-6 ${card.bgColor}`}
          >
            <span className="pointer-events-none absolute -top-6 left-4">
              <svg
                width="51"
                height="25"
                viewBox="0 0 51 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22334 5.96216C-2.80791 4.16304 4.56635 -0.155225 6.66735 0.0125662C9.56929 0.24275 11.4149 2.05692 10.614 6.14164C10.1961 8.27957 12.3436 11.0964 13.9067 13.1524C16.2476 16.2384 19.165 18.8641 21.6955 21.8096C23.4947 23.9047 27.5419 23.8813 29.465 21.7121C32.5719 18.2125 35.8918 14.8964 38.8788 11.2991L38.8865 11.303C39.6488 10.2066 39.8693 8.81775 39.4902 7.53425C38.4145 5.09589 39.3044 3.93324 41.4905 2.96964C45.53 1.19454 48.7956 1.59245 49.7436 4.22198C50.7263 6.94908 49.1322 8.40037 46.7024 9.2665C40.0821 11.623 33.5052 22.32 34.6341 23.2657C35.464 23.9609 38.0209 24.2114 38.1012 24.2513C29.5541 24.2114 19.5821 24.2253 13.9857 24.2513C13.9145 24.2516 17.1281 23.5893 18.265 23.4549C21.4636 23.0766 8.86433 9.37229 1.22334 5.96216Z"
                  fill={card.accentColor}
                />
              </svg>
            </span>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-xl sm:h-14 sm:w-14 sm:text-2xl">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">{card.title}</h3>
                <p className="mt-2 max-w-none text-base leading-relaxed text-white/95 sm:max-w-[230px] sm:text-lg">
                  {card.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
