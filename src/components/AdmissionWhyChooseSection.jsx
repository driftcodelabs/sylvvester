"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaChild,
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaSmile,
  FaUsers,
} from "react-icons/fa";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const reasons = [
  {
    title: "Programs",
    description:
      "Playgroup, Nursery, KG, Prep, Daycare and After School activities tailored to every age.",
    tag: "Holistic Programs",
  },
  {
    title: "Amenities",
    description:
      "Live CCTV surveillance, child-safe infrastructure and 100% female staff for complete care.",
    tag: "Safe & Secure",
  },
  {
    title: "Parent's Perspective",
    description:
      "Transparent communication, regular updates and meaningful parent–school partnerships.",
    tag: "Open Communication",
  },
  {
    title: "Balanced Learning",
    description:
      "A joyful blend of academics, play and real-world experiences that build strong foundations.",
    tag: "Playful Learning",
  },
  {
    title: "Expert Teachers",
    description:
      "Caring and trained educators who nurture confidence, values and curiosity in every child.",
    tag: "Loving Educators",
  },
  {
    title: "Happy Environment",
    description:
      "A warm home-away-from-home where children feel loved, respected and excited to come back.",
    tag: "Joyful Campus",
  },
];

const icons = {
  Programs: FaChild,
  Amenities: FaShieldAlt,
  "Parent's Perspective": FaUsers,
};

export default function AdmissionWhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f6f1e4] py-18">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a88a63]">
              Why Choose Sylvvester
            </p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#232638] md:text-5xl">
              Why Parents{" "}
              <span className="text-[#d18109]">
                Choose Us
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base leading-relaxed text-[#5e6074]">
            A balanced approach to learning through play, activities and
            age-appropriate curriculum that keeps children happy and parents
            confident.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            className="admission-why-prev hidden h-11 w-11 items-center justify-center rounded-full bg-white text-[#232638] shadow-sm transition hover:bg-[#d18109] hover:text-white md:flex"
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".admission-why-prev",
              nextEl: ".admission-why-next",
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            centeredSlides={false}
            spaceBetween={18}
            slidesPerView={1.15}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              900: { slidesPerView: 2.8 },
              1200: { slidesPerView: 3.1 },
            }}
            className="w-full pb-8 pt-1"
          >
            {reasons.map((item, index) => {
              const Icon = icons[item.title] || FaSmile;
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={item.title} className="h-auto">
                  <article
                    className={`relative flex h-full flex-col justify-between rounded-3xl border bg-white px-6 pb-6 pt-7 shadow-sm transition-transform duration-300 ${
                      isActive
                        ? "border-[#e19a2f] shadow-lg -translate-y-1"
                        : "border-[#f0e2c8]"
                    }`}
                  >
                    <div className="absolute inset-y-6 right-0 w-2 rounded-l-full bg-[#e19a2f]" />

                    <div className="flex items-center gap-3 pr-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4e2] text-xl text-[#d18109]">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a88a63]">
                          {item.tag}
                        </p>
                        <h3 className="text-xl font-extrabold text-[#232638]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 pr-6 text-sm leading-relaxed text-[#5e6074]">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#232638] hover:text-[#d18109]"
                    >
                      Read More
                      <FaArrowRight className="text-[11px]" />
                    </button>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <button
            type="button"
            className="admission-why-next hidden h-11 w-11 items-center justify-center rounded-full bg-white text-[#232638] shadow-sm transition hover:bg-[#d18109] hover:text-white md:flex"
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

