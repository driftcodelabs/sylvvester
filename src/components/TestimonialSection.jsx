"use client";

import { FaQuoteRight, FaStar } from "react-icons/fa";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
  {
    name: "Parker Johnson",
    role: "Google CEO",
    quote:
      "We look forward to developing the long-term relationship with children and parents and will welcome children into our after-school service.",
    imageColor: "bg-[#c88f5e]",
    avatarColor: "bg-[#f5d6bd]",
  },
  {
    name: "Mia Anderson",
    role: "Product Designer",
    quote:
      "The staff creates a warm and inspiring environment where children build confidence, creativity, and social skills every single day.",
    imageColor: "bg-[#87b2c9]",
    avatarColor: "bg-[#d7ebf7]",
  },
  {
    name: "Liam Carter",
    role: "Education Consultant",
    quote:
      "Their balanced approach to academics and play gives children a joyful learning journey with strong foundational growth.",
    imageColor: "bg-[#9a8ac7]",
    avatarColor: "bg-[#e5ddf7]",
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e4] py-8 sm:py-10">
      <div className="mx-auto w-full max-w-7xl px-0 sm:px-4 md:px-10">
        <Swiper
          modules={[EffectFade, Pagination, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="grid min-h-[280px] w-full grid-cols-1 sm:min-h-[320px] lg:min-h-[420px] lg:grid-cols-2">
                <div
                  className={`relative min-h-[200px] ${item.imageColor} flex items-center justify-center sm:min-h-[240px] lg:min-h-[420px]`}
                >
                  <div className="h-[65%] w-[65%] max-h-[280px] rounded-3xl bg-white/30 sm:h-[70%] sm:w-[70%] sm:max-h-none" />
                </div>

                <div className="relative flex flex-col justify-center bg-[#f6f1e4] px-5 py-8 text-black sm:px-8 sm:py-10 md:px-12 lg:px-14">
                  <div className="pointer-events-none absolute right-4 top-6 h-12 w-20 rounded-full border border-white/80 bg-white/10 sm:right-8 sm:top-8 sm:h-16 sm:w-24" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 sm:text-xs">
                    FAQ Feedback
                  </p>
                  <h2 className="mt-2 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Customer <span className="text-[#d18109]">Feedback</span>
                    <span className="block">For School</span>
                  </h2>

                  <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                    <div
                      className={`h-12 w-12 shrink-0 rounded-full ${item.avatarColor} border-2 border-white/80 sm:h-14 sm:w-14 md:h-16 md:w-16`}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xl font-bold sm:text-2xl md:text-3xl">{item.name}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#f0b73f] sm:text-sm">
                        {item.role}
                      </p>
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-[#f0b73f] sm:text-xs">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                    <div className="ml-auto shrink-0 rounded-full bg-[#d18109] p-2.5 text-lg text-white sm:ml-2 sm:p-3 sm:text-xl">
                      <FaQuoteRight />
                    </div>
                  </div>

                  <p className="mt-4 max-w-xl text-base leading-relaxed text-black/90 sm:mt-5 sm:text-lg">
                    &quot;{item.quote}&quot;
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
