"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonButton from "@/components/CommonButton";

const slides = [
  {
    title: "Physical and Mental Well-being",
    subtitle: "Promoting healthy bodies and resilient minds",
    detailPoints: [
      "Daily movement time through guided play, dance, and outdoor exploration",
      "Healthy routines for handwashing, rest, hydration, and nutrition awareness",
      "Mindful moments to help children identify emotions and feel calm and safe",
      "Warm teacher support that builds resilience and positive self-image",
    ],
    icon: "💪",
    color: "bg-[#e45b5b]",
  },
  {
    title: "Social and Emotional Growth",
    subtitle: "Building empathy, teamwork, and self-confidence",
    detailPoints: [
      "Circle-time activities that teach sharing, kindness, and active listening",
      "Role-play and storytelling to understand feelings and respect others",
      "Small-group projects that nurture teamwork and friendships",
      "Positive encouragement that helps every child feel valued and confident",
    ],
    icon: "🤝",
    color: "bg-[#54b9b2]",
  },
  {
    title: "Inquiry-Based Learning",
    subtitle: "Encouraging curiosity, questioning, and discovery",
    detailPoints: [
      "Hands-on learning corners for science, sensory play, and exploration",
      "Question-led lessons where children ask 'why' and test simple ideas",
      "Nature walks and observation tasks to build curiosity about the world",
      "Teacher-guided discovery that turns everyday moments into learning",
    ],
    icon: "🔍",
    color: "bg-[#6f7fe8]",
  },
  {
    title: "Effective Communication",
    subtitle: "Enhancing speaking, listening, and writing skills",
    detailPoints: [
      "Storytelling, rhyme time, and show-and-tell to build expressive language",
      "Guided conversations that develop listening and turn-taking skills",
      "Pre-writing activities through tracing, drawing, and creative mark-making",
      "Language-rich classrooms that support vocabulary in meaningful contexts",
    ],
    icon: "🗣️",
    color: "bg-[#f0a550]",
  },
  {
    title: "Creative and Critical Thinking",
    subtitle: "Developing problem-solving and innovative thinking",
    detailPoints: [
      "Open-ended art and construction tasks that inspire imagination",
      "Puzzles and classroom challenges that develop reasoning skills",
      "Opportunities to plan, try, improve, and celebrate effort",
      "Creative expression through music, movement, and dramatic play",
    ],
    icon: "💡",
    color: "bg-[#8a6de9]",
  },
  {
    title: "Digital & Technology Awareness",
    subtitle: "Introducing age-appropriate tech skills",
    detailPoints: [
      "Safe and guided use of interactive tools for early learning",
      "Screen-time activities focused on creativity, not passive viewing",
      "Introduction to simple digital habits like care, sharing, and responsibility",
      "Balanced learning that blends technology with hands-on experiences",
    ],
    icon: "💻",
    color: "bg-[#3fa77d]",
  },
  {
    title: "Striving for Excellence",
    subtitle: "Inspiring children to achieve their personal best",
    detailPoints: [
      "Individual encouragement based on each child's unique pace and strengths",
      "Small milestones that build motivation and pride in progress",
      "Growth-focused feedback that values effort, persistence, and improvement",
      "A joyful culture where every child is supported to shine",
    ],
    icon: "🌟",
    color: "bg-[#e07a5f]",
  },
];

function ArrowIcon({ flipped = false }) {
  const svgId = useId().replace(/:/g, "");
  const maskId = `mask-${svgId}`;
  const patternId = `pattern-${svgId}`;
  const imageId = `image-${svgId}`;

  return (
    <svg
      width="57"
      height="20"
      viewBox="0 0 57 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={flipped ? "scale-x-[-1]" : ""}
      aria-hidden="true"
    >
      <mask
        id={maskId}
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="57"
        height="20"
      >
        <rect width="57" height="20" fill={`url(#${patternId})`} />
      </mask>
      <g mask={`url(#${maskId})`}>
        <rect x="-13" y="-14" width="84" height="42" fill="currentColor" />
      </g>
      <defs>
        <pattern
          id={patternId}
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref={`#${imageId}`} transform="scale(0.0175439 0.05)" />
        </pattern>
        <image
          id={imageId}
          width="57"
          height="20"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default function WhyChooseUsSection() {
  const [activeSlide, setActiveSlide] = useState(null);
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [isNarrowViewport, setIsNarrowViewport] = useState(false);

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
      { threshold: 0.12, rootMargin: "0px 0px 0px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const showMobileScreenNav =
    isNarrowViewport && sectionInView && !activeSlide;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f3efe7] py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage: "url('/home/service-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image
        src="/service-ele-1.svg"
        alt=""
        width={155}
        height={430}
        className="pointer-events-none absolute left-0 top-1/2 hidden h-auto -translate-y-1/2 opacity-90 lg:block"
      />
      <Image
        src="/service-ele-1.svg"
        alt=""
        width={155}
        height={430}
        className="pointer-events-none absolute right-0 top-1/2 hidden h-auto -translate-y-1/2 scale-x-[-1] opacity-90 lg:block"
      />

      <div className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 md:px-10 md:pb-0">
        <h2 className="mt-2 text-center text-2xl font-bold leading-tight text-[#232638] sm:text-3xl md:text-4xl lg:text-6xl">
          The Seven Key
          <span className="block text-[#d18109]">Dimensions of Learning</span>
        </h2>

        <div className="mt-8 flex min-w-0 flex-col gap-4 sm:mt-10 md:mt-12 md:flex-row md:items-center md:gap-5">
          <button
            type="button"
            className="hidden shrink-0 text-[#232638] transition hover:text-[#d18109] md:flex"
            aria-label="Previous slide"
            onClick={goPrev}
          >
            <ArrowIcon flipped />
          </button>

          <Swiper
            onSwiper={(instance) => {
              swiperRef.current = instance;
            }}
            loop
            slidesPerView={1}
            spaceBetween={18}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="min-w-0 w-full pb-2 md:flex-1 md:pb-8!"
          >
            {slides.map((slide) => (
              <SwiperSlide key={`${slide.title}-${slide.color}`} className="h-auto">
                <article className="relative flex h-full min-h-[380px] flex-col rounded-[1.7rem] border border-[#ece5d9] bg-white px-3 pb-14 pt-3 shadow-sm sm:min-h-[400px] sm:px-4 sm:pb-16 sm:pt-4 md:min-h-[420px]">
                  <div className={`relative h-[140px] rounded-3xl sm:h-[160px] md:h-[170px] ${slide.color}`}>
                    <div className="absolute inset-0 m-auto h-24 w-24 rounded-2xl bg-white/35" />
                    <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-[#9f2694] p-4 text-2xl text-white">
                      {slide.icon}
                    </div>
                  </div>
                  <div className="flex-1 px-1 pt-10 text-center sm:px-2 sm:pt-12">
                    <p className="text-xl font-bold text-[#232638] sm:text-2xl md:text-3xl">{slide.title}</p>
                    <p className="mt-2 text-base leading-relaxed text-[#57596c] sm:mt-3 sm:text-lg md:text-xl">
                      {slide.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveSlide(slide)}
                    className="relative md:absolute bottom-0 left-1/2 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-black text-xl text-white transition hover:bg-[#d18109]"
                    aria-label={`Open details for ${slide.title}`}
                  >
                    <FaArrowRight />
                  </button>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="hidden shrink-0 text-[#232638] transition hover:text-[#d18109] md:flex"
            aria-label="Next slide"
            onClick={goNext}
          >
            <ArrowIcon />
          </button>
        </div>

        <div className="mt-10 flex justify-center">
          <CommonButton label="Explore Our Programs" className="px-9 py-3" />
        </div>
      </div>

      {showMobileScreenNav && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-40 md:hidden"
          aria-label="Carousel controls"
        >
          <div className="pointer-events-auto mx-auto flex max-w-7xl justify-center gap-10 border-t border-[#ece5d9]/90 bg-[#f3efe7]/95 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm supports-backdrop-filter:bg-[#f3efe7]/85">
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#232638]/15 bg-white text-[#232638] shadow-md transition hover:border-[#d18109] hover:text-[#d18109]"
              aria-label="Previous slide"
              onClick={goPrev}
            >
              <ArrowIcon flipped />
            </button>
            <button
              type="button"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#232638]/15 bg-white text-[#232638] shadow-md transition hover:border-[#d18109] hover:text-[#d18109]"
              aria-label="Next slide"
              onClick={goNext}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      )}

      {activeSlide && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#111]/55 p-0 sm:items-center sm:p-4">
          <div className="relative grid max-h-[95dvh] w-full max-w-5xl gap-0 overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:max-h-[90dvh] sm:overflow-hidden sm:rounded-3xl md:grid-cols-2">
            <button
              type="button"
              className="absolute right-4 top-4 z-10 rounded-full bg-[#2b305d] p-2 text-white transition hover:bg-[#d18109]"
              onClick={() => setActiveSlide(null)}
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            <div className={`min-h-[200px] ${activeSlide.color} flex items-center justify-center p-6 sm:min-h-[260px] md:min-h-[290px] md:p-8`}>
              <div className="h-32 w-32 rounded-3xl bg-white/35 sm:h-40 sm:w-40 md:h-44 md:w-44" />
            </div>

            <div className="flex flex-col justify-center px-5 py-8 text-[#232638] sm:px-8 sm:py-10 md:px-10">
              <p className="text-sm uppercase tracking-[0.2em] text-[#9f2694] sm:text-base md:text-lg">
                Learning Dimension
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {activeSlide.title}
              </h3>
              <p className="mt-3 text-base font-medium text-[#57596c] sm:mt-4 sm:text-lg md:text-xl">{activeSlide.subtitle}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#57596c] sm:mt-5 sm:space-y-3 sm:pl-6 sm:text-base md:text-lg">
                {activeSlide.detailPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
