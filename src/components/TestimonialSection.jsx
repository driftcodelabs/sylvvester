"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/** Quotes longer than this show a truncated preview and “Read more” → modal. */
const LONG_QUOTE_THRESHOLD = 220;

const testimonials = [
  {
    name: "Naina Sharma",
    role: "Arjun's mother",
    quote: `From playgroup to KG… what a beautiful journey it has been. I still remember those early days when I would quietly sit in my car outside the school, just to make sure he was okay, just to feel close.

But soon I realized, inside those gates, he wasn't alone for even a moment. He wasn't just cared for by teachers… he was held, guided, and loved like a child at home.

It was never just a "school" it was didi, and an entire team who became his mentors, his protectors, his second mothers.

A heartfelt thank you to Sujata Ma'am for making his first step into the outside world so gentle and comforting. To Monika Ma'am and Usha Ma'am, for listening to his endless little stories, feeding him his tiffin with patience, teaching him values, and protecting him like their own.

There are some bonds you can never fully put into words… only feel with gratitude.

Forever thankful to this school and these wonderful teachers for being such an important part of his growing years. ❤️`,
    imageColor: "bg-[#c88f5e]",
    avatarColor: "bg-[#f5d6bd]",
  },
  {
    name: "Advocate Anjali Mathur",
    role: "Atharv Mathur's mother",
    quote: `Thank you so much ma'am for making Atharv what he is today🥰 Pre-School is the school from where a child's base is made strong and will always miss the Sylvvester family and miss all the teachers who made efforts in making my kid this talented❣️ Spcl thanks to you for everything you do for these kids💗 Will miss you all..`,
    imageColor: "bg-[#87b2c9]",
    avatarColor: "bg-[#d7ebf7]",
  },
];

function chunkPairs(items) {
  const pairs = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }
  return pairs;
}

const testimonialPairs = chunkPairs(testimonials);

function TestimonialCard({ item, singleInRow, onReadMore }) {
  const isLong = item.quote.length > LONG_QUOTE_THRESHOLD;

  return (
    <div
      className={`flex h-full min-h-0 ${singleInRow ? "md:col-span-2 md:mx-auto md:max-w-xl" : ""}`}
    >
      <div
        className={`flex h-full min-h-[260px] w-full flex-col rounded-3xl ${item.imageColor} p-3 shadow-sm sm:min-h-[280px] sm:p-4 md:min-h-[300px]`}
      >
        <div className="flex h-full min-h-0 flex-col rounded-2xl bg-white/95 p-5 text-black shadow-[0_8px_28px_rgba(26,29,46,0.08)] sm:rounded-[1.35rem] sm:p-6 md:p-7">
          <div className="shrink-0">
            <div className="flex flex-wrap items-start gap-3 sm:gap-4">
              <div
                className={`h-11 w-11 shrink-0 rounded-full ${item.avatarColor} border-2 border-white/90 sm:h-12 sm:w-12 md:h-14 md:w-14`}
              />
              <div className="min-w-0 flex-1">
                <p className="text-lg font-bold leading-tight sm:text-xl md:text-2xl">{item.name}</p>
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#f0b73f] sm:text-xs">
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
              <div className="ml-auto shrink-0 rounded-full bg-[#d18109] p-2 text-base text-white sm:p-2.5 sm:text-lg">
                <FaQuoteRight />
              </div>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col pt-4 sm:pt-5">
            <div
              className={`min-h-0 flex-1 ${isLong ? "overflow-hidden" : ""}`}
            >
              <p
                className={`whitespace-pre-line text-sm leading-relaxed text-black/90 sm:text-base ${isLong ? "line-clamp-7" : ""}`}
              >
                &quot;{item.quote}&quot;
              </p>
            </div>

            {isLong ? (
              <div className="flex shrink-0 justify-end pt-3">
                <button
                  type="button"
                  className="text-sm font-semibold text-[#d18109] underline decoration-[#d18109]/40 underline-offset-4 transition hover:text-[#b56d08] hover:decoration-[#b56d08]"
                  onClick={() => onReadMore(item)}
                >
                  Read more
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="testimonial-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative z-10 flex max-h-[min(90vh,900px)] w-full max-w-2xl flex-col rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-black/5 px-5 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0">
            <p id="testimonial-modal-title" className="text-lg font-bold text-black sm:text-xl">
              {item.name}
            </p>
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#f0b73f] sm:text-sm">
              {item.role}
            </p>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/70 transition hover:bg-black/5 hover:text-black"
            aria-label="Close"
            onClick={onClose}
          >
            <FaTimes className="text-lg" />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6 sm:py-5">
          <p className="whitespace-pre-line text-sm leading-relaxed text-black/90 sm:text-base">
            &quot;{item.quote}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const swiperRef = useRef(null);
  const [modalItem, setModalItem] = useState(null);

  const closeModal = useCallback(() => setModalItem(null), []);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <section className="relative overflow-hidden bg-[#f6f1e4] py-8 sm:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/70 sm:text-xs">
            FAQ Feedback
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl lg:text-5xl">
            Parent&apos;s <span className="text-[#d18109]">Feedbacks</span>
          </h2>
        </header>

        <div className="flex min-w-0 flex-col items-stretch gap-4 md:flex-row md:items-center md:gap-3">
          <button
            type="button"
            className="order-2 hidden h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-black/10 bg-white text-[#d18109] shadow-sm transition hover:bg-[#f6f1e4] md:order-0 md:flex md:h-12 md:w-12"
            aria-label="Previous testimonials"
            onClick={goPrev}
          >
            <FaChevronLeft className="text-base md:text-lg" />
          </button>

          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={16}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="testimonial-swiper min-w-0 w-full flex-1 pb-10 md:pb-12 [&_.swiper-slide]:h-auto"
          >
            {testimonialPairs.map((pair, slideIndex) => (
              <SwiperSlide key={slideIndex} className="h-auto">
                <div className="grid h-full grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
                  {pair.map((item) => (
                    <TestimonialCard
                      key={item.name}
                      item={item}
                      singleInRow={pair.length === 1}
                      onReadMore={setModalItem}
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="order-3 hidden h-11 w-11 shrink-0 items-center justify-center self-center rounded-full border border-black/10 bg-white text-[#d18109] shadow-sm transition hover:bg-[#f6f1e4] md:order-0 md:flex md:h-12 md:w-12"
            aria-label="Next testimonials"
            onClick={goNext}
          >
            <FaChevronRight className="text-base md:text-lg" />
          </button>
        </div>

        <div className="mt-2 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#d18109] shadow-sm transition hover:bg-white/80"
            aria-label="Previous testimonials"
            onClick={goPrev}
          >
            <FaChevronLeft className="text-base" />
          </button>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#d18109] shadow-sm transition hover:bg-white/80"
            aria-label="Next testimonials"
            onClick={goNext}
          >
            <FaChevronRight className="text-base" />
          </button>
        </div>
      </div>

      <TestimonialModal item={modalItem} onClose={closeModal} />
    </section>
  );
}
