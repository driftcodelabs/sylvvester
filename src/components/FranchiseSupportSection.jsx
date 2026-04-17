"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaBookOpen,
  FaBullhorn,
  FaChalkboardTeacher,
  FaChevronLeft,
  FaChevronRight,
  FaDraftingCompass,
  FaFlask,
  FaHandshake,
  FaShoppingCart,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const supportItems = [
  {
    title: "End-to-End Infrastructure & Setup Assistance:",
    description:
      "We provide comprehensive support for establishing your centre, including expert guidance on site selection, on- ground location evaluation and detailed space planning through professional architectural layouts with advanced 2D and 3D design concepts.",
    Icon: FaDraftingCompass,
    accent: "bg-[#f8effa] text-[#5b248f]",
  },
  {
    title: "Procurement & Vendor Enablement:",
    description:
      "We facilitate seamless sourcing of furniture, equipment, and learning resources by sharing a curated vendor ecosystem and procurement guidelines to ensure quality, consistency and cost efficiency.",
    Icon: FaShoppingCart,
    accent: "bg-[#fff4e2] text-[#d18109]",
  },
  {
    title: "Brand Development & Market Positioning:",
    description:
      "Our team extends strategic support in building a strong local brand presence through structured marketing initiatives, brand assets and promotional planning to ensure rapid visibility and credibility in your market.",
    Icon: FaBullhorn,
    accent: "bg-[#f8effa] text-[#5b248f]",
  },
  {
    title: "Academic Framework & Curriculum Execution:",
    description:
      "You gain access to our well-researched curriculum, enriched content libraries, structured activity frameworks and assessment methodologies, along with implementation guidance to deliver consistent academic excellence.",
    Icon: FaBookOpen,
    accent: "bg-[#fff4e2] text-[#d18109]",
  },
  {
    title: "Comprehensive Training & Capability Building:",
    description:
      "We conduct intensive and ongoing training programs for franchise owners, principals and teaching staffs, covering academics, business operations, ERP/software usage, transport coordination, admissions management and parent engagement.",
    Icon: FaChalkboardTeacher,
    accent: "bg-[#f8effa] text-[#5b248f]",
  },
  {
    title: "Continuous Academic Research & Innovation:",
    description:
      "Our dedicated academic team consistently upgrades curriculum frameworks, teaching methodologies and learning outcomes to ensure your centre stays aligned with global best practices in early childhood education.",
    Icon: FaFlask,
    accent: "bg-[#fff4e2] text-[#d18109]",
  },
  {
    title: "Local Marketing & PR Advisory:",
    description:
      "We provide strategic direction and ready-to-use frameworks for executing local marketing campaigns, community outreach programs and public relations initiatives to drive sustained admissions growth.",
    Icon: FaHandshake,
    accent: "bg-[#f8effa] text-[#5b248f]",
  },
];

export default function FranchiseSupportSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [isNarrowViewport, setIsNarrowViewport] = useState(false);

  const goToSlide = (index) => {
    swiperRef.current?.slideToLoop(index);
  };

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const syncMq = () => setIsNarrowViewport(mq.matches);
    syncMq();
    mq.addEventListener("change", syncMq);
    return () => mq.removeEventListener("change", syncMq);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const showMobileScreenNav = isNarrowViewport && sectionInView;

  return (
    <section ref={sectionRef} className='bg-[#8a2f96] md:bg-transparent'>
      <div
        className="relative overflow-x-hidden py-12 sm:py-16 md:py-20 lg:py-24"
        style={{
          backgroundImage: "url('/activity-bg-h4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="pointer-events-none absolute right-6 top-1/3 h-20 w-20 rounded-full bg-[#8a2f96]/40 blur-[1px]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 md:px-10 md:pb-0">
          <div className="text-center text-white">
            <h2 className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Support We Provide
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-xs leading-relaxed text-white/90 sm:mt-4 sm:text-sm md:text-base">
              Explore the complete support system we provide to help you set up,
              launch and grow your centre with confidence.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-6xl sm:mt-10 md:mt-12">
            <div className="flex min-w-0 flex-col gap-3 md:flex-row md:items-stretch md:gap-4">
              <button
                type="button"
                className="hidden h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-white/30 bg-white/15 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/25 md:flex md:h-11 md:w-11"
                aria-label="Previous slide"
                onClick={goPrev}
              >
                <FaChevronLeft className="text-sm md:text-base" />
              </button>

              <Swiper
                loop
                spaceBetween={12}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setActiveIndex(swiper.realIndex);
                }}
                breakpoints={{
                  480: { slidesPerView: 1.08, spaceBetween: 14 },
                  640: { slidesPerView: 1.35, spaceBetween: 16 },
                  900: { slidesPerView: 2.05, spaceBetween: 18 },
                  1200: { slidesPerView: 2.35, spaceBetween: 18 },
                }}
                className="min-w-0 w-full px-0 pb-2 md:flex-1 md:px-1 md:pb-10"
              >
                {supportItems.map(({ title, description, Icon, accent }) => (
                  <SwiperSlide key={title} className="h-auto">
                    <article className="flex h-full min-h-0 flex-col rounded-2xl border border-[#efe6fb] bg-white p-4 shadow-[0_12px_32px_rgba(26,29,46,0.1)] sm:min-h-[240px] sm:rounded-3xl sm:p-5 md:min-h-[280px] md:rounded-4xl md:p-7 lg:p-9">
                      <div className="flex min-h-0 flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg sm:h-12 sm:w-12 sm:text-xl md:h-14 md:w-14 md:rounded-2xl md:text-2xl ${accent}`}
                        >
                          <Icon />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[0.95rem] font-extrabold leading-snug text-[#232638] sm:text-base md:text-lg lg:text-xl">
                            {title}
                          </h3>
                          <p className="mt-2 text-xs leading-relaxed text-[#5e6074] sm:mt-3 sm:text-sm md:text-base">
                            {description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                className="hidden h-10 w-10 shrink-0 items-center justify-center self-center rounded-full border border-white/30 bg-white/15 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/25 md:flex md:h-11 md:w-11"
                aria-label="Next slide"
                onClick={goNext}
              >
                <FaChevronRight className="text-sm md:text-base" />
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-center gap-1 sm:mt-4 sm:gap-2 md:mt-2">
              {supportItems.map((_, index) => (
                <button
                  key={`support-dot-${index}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                  className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full p-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f0c128] md:min-h-0 md:min-w-0 md:p-0"
                >
                  <span
                    className={`block h-[6px] rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-6 bg-[#f0c128]"
                        : "w-3 bg-white/65 hover:bg-white/90"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {showMobileScreenNav && (
          <div
            className="pointer-events-none fixed inset-x-0 bottom-0 z-40 md:hidden"
            aria-label="Carousel controls"
          >
            <div className="pointer-events-auto mx-auto flex max-w-7xl justify-center gap-10 border-t border-white/20 bg-[#5b248f]/35 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md supports-backdrop-filter:bg-[#5b248f]/25">
              <button
                type="button"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white shadow-md transition hover:bg-white/30"
                aria-label="Previous slide"
                onClick={goPrev}
              >
                <FaChevronLeft className="text-base" />
              </button>
              <button
                type="button"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white shadow-md transition hover:bg-white/30"
                aria-label="Next slide"
                onClick={goNext}
              >
                <FaChevronRight className="text-base" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
