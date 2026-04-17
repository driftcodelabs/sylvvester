"use client";

import { useState } from "react";
import {
  FaArrowRight,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaUserCheck,
  FaUserNurse,
  FaUtensils,
  FaVideo,
  FaBook 
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const amenities = [
  { title: "Well Designed Safe Infrastructure", Icon: FaShieldAlt },
  { title: "100% Female Staff", Icon: FaUserNurse },
  { title: "Live CCTV Survelliance", Icon: FaVideo },
  {
    title: "Nutritious and Balanced Meals freshly cooked and served to children",
    Icon: FaUtensils,
  },
  { title: "Experienced and Trained Staff", Icon: FaUserCheck },
  { title: "Well Defined Safety Policies", Icon: FaShieldAlt },
  {
    title: "On Demand Remedial Classes/Academic Assistance",
    Icon: FaBook ,
  },
  { title: "Well Defined Medical Policies", Icon: FaChalkboardTeacher },
];

export default function AmenitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f6f1e4]">
    <div
      className="relative overflow-x-hidden py-12 sm:py-16 md:py-20 lg:py-24"
      style={{
        backgroundImage: "url('/activity-bg-h4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute right-6 top-1/3 h-20 w-20 rounded-full bg-[#8a2f96]/40 blur-[1px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-white/80 sm:text-xs">
          Our Amenities
        </p>
        <h2 className="mx-auto mt-2 max-w-2xl text-center text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Your kids Are 100% Safe
          <span className="block">At Our School.</span>
        </h2>

        <div className="mx-auto mt-8 max-w-6xl sm:mt-10 md:mt-12">
          <Swiper
            loop
            spaceBetween={16}
            slidesPerView="auto"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { spaceBetween: 16 },
              900: { spaceBetween: 16 },
              1200: { spaceBetween: 18 },
            }}
            className="px-1 pb-14"
          >
            {amenities.map((item) => {
              const Icon = item.Icon;

              return (
              <SwiperSlide
                key={item.title}
                className="h-auto w-[min(17rem,calc(100vw-2.5rem))]! pb-4 sm:w-[170px]!"
              >
                <article className="group flex w-full flex-col items-center">
                  <div className="relative w-full pb-5">
                    <div className="min-h-[140px] rounded-lg bg-white px-2 pt-3 text-center shadow-sm transition-colors duration-300 group-hover:bg-[#cf8605] group-hover:text-white sm:min-h-0 sm:h-[150px] sm:px-3 sm:pt-4">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center text-2xl text-[#7d2a95] transition-colors duration-300 group-hover:text-white">
                        {Icon ? (
                          <Icon />
                        ) : (
                          <div className="h-7 w-7 rounded-sm bg-red-500" aria-hidden="true" />
                        )}
                      </div>
                      <div className="mx-auto mt-2 h-[2px] w-8 bg-[#a982bb] transition-colors duration-300 group-hover:bg-white/90" />
                      <p className="mt-2 line-clamp-4 text-xs font-bold leading-tight text-[#27253c] transition-colors duration-300 group-hover:text-white sm:mt-3 sm:line-clamp-3 sm:text-[13px]">
                        {item.title}
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-1/2 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-[#8f1f9f] bg-[#cf8605] text-sm text-white transition-colors duration-300 group-hover:bg-[#8f1f9f]">
                      <FaArrowRight />
                    </div>
                  </div>
                </article>
              </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mt-2 flex items-center justify-center gap-2">
            {amenities.map((_, index) => (
              <span
                key={`dot-${index}`}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-5 bg-[#f0c128]" : "w-[11px] bg-white/65"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
