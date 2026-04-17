"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const cloudMaskSvg =
  "url(\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc4IiBoZWlnaHQ9IjE4OCIgdmlld0JveD0iMCAwIDI3OCAxODgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xOTUuODk0IDE2Ny42NzZDMTk0LjkyNSAxNjcuNjc2IDE5My45NDcgMTY3Ljc2MSAxOTIuOTg4IDE2Ny42NjNDMTgyLjczOSAxNjYuNjE2IDE3NC43NDYgMTY5LjAzIDE2Ni42OTMgMTc2LjkxNEMxNTAuNzY5IDE5Mi41MDQgMTI2Ljk2NCAxOTEuMzgyIDExMC4wMTIgMTc1LjI0MkMxMDMuODM3IDE2OS4zNjQgOTcuODAyNSAxNjcuMjcgODkuNTQzMiAxNjcuNDkzQzc1Ljg1ODQgMTY3Ljg2MiA2Mi4xNjIxIDE2OC42MDkgNDguNzA0NyAxNjMuNzc4QzE4LjEwMTIgMTUyLjc5IC0yLjExNTkzIDEyMi43NyAwLjE3Njc3NSA5MC40NDMxQzIuNjc0NTYgNTUuMjI2MyAyNi4zNjY4IDI3Ljg0NSA1OS40NDYyIDIxLjYzODFDNzEuOTc0MiAxOS4yODc0IDg0LjU2MDMgMjAuODU4NyA5Ny4xMTMyIDIwLjUyNzNDMTAxLjAxMiAyMC40MjQyIDEwMy43NTYgMTkuMzk5OCAxMDYuNTI4IDE2LjU1OUMxMjcuOTQzIC01LjM4NDMyIDE1MS4xMTMgLTUuNTMzMjIgMTcyLjYwNCAxNi4xOThDMTc1Ljc5MSAxOS40MjA4IDE3OC45NTQgMjAuNDc4MSAxODMuMzUyIDIwLjUzMjhDMTk2Ljg0MSAyMC43MDE3IDIxMC40NSAxOS4wMDEgMjIzLjc1NCAyMi44MDQ0QzI1OC4yNDkgMzIuNjY2NSAyNzguODU1IDYwLjc3NjIgMjc3Ljk3MyA5Ni44Nzk5QzI3Ny4xNDQgMTMwLjgxNCAyNTcuMDMzIDE1Ni41ODUgMjI0LjY4NyAxNjUuMzcyQzIxNS4yMDUgMTY3Ljk0OCAyMDUuNTU4IDE2Ny43MjYgMTk1Ljg5NCAxNjcuNjc2WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==\")";

const programItems = [
  {
    title: "Playgroup",
    description:
      "Our Playgroup program is designed for young children taking their first step into a structured learning environment. It introduces children to a safe, nurturing environment where learning happens through play.",
  },
  {
    title: "Nursery",
    description:
      "Nursery marks the new beginning of your child’s educational journey. At this age, children become more curious, independent and eager to explore. Our curriculum is designed to support their growing skills thereby laying a strong foundation for future schooling.",
  },
  {
    title: "KG",
    description:
      "As your child embarks on their learning adventure, our teachers turn every day into an exciting journey! Here in KG from weaving words into magical stories to discovering the wonders of numbers, and creating art that sparks imagination, learning is always hands-on and joyful. Our flexible learning spaces are designed to embrace every child’s uniqueness, keeping curiosity alive while fostering creativity, confidence, and connection.",
  },
  {
    title: "Prep",
    description:
      "In Prep, learning comes alive! Our dedicated teachers create hands-on experiences that spark curiosity and creativity. Our Prep program cultivates a strong foundation for lifelong learning. Expert teachers guide children through interactive lessons that enhance literacy, numeracy and creative thinking. Hands-on projects, collaborative activities, and artistic expression encourage problem-solving, empathy, and confidence. This holistic approach ensures that every child develops academically, socially and emotionally, emerging as a well-prepared, enthusiastic learner ready for the next stage of education.",
  },
  {
    title: "Daycare",
    description:
      "Our daycare is a home away from home. Here, children feel safe, cared for, and free to explore. Through creative play, stories, music, and hands-on activities, they develop social skills, independence, and confidence while having fun every day.",
  },
  {
    title: "After School Activities",
    description:
      "Our preschool offers a vibrant and enriching environment that extends beyond the regular school hours. Our after-school activities are designed to support academic growth, creativity, and physical development. Children can benefit from tuitions up to Grade 8, improving their understanding and confidence in core subjects. We also offer handwriting enhancement classes, dance lessons, and a variety of other fun, engaging activities that nurture creativity, coordination, and social skills. These programs ensure that every child has the opportunity to explore new interests, develop talents, and grow holistically in a safe and supportive setting.",
  },
];

function ProgramCard({ title, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="relative mx-auto h-[155px] w-full min-w-[220px] max-w-[240px] bg-white px-6 pb-8 pt-10 text-center transition-transform duration-200 hover:scale-[1.02] sm:h-[170px] sm:min-w-[250px] sm:max-w-[260px] sm:px-8 sm:pt-12 md:h-[190px] md:min-w-[275px] md:max-w-[275px] md:px-10 md:pb-10 md:pt-[50px]"
      style={{
        WebkitMaskImage: cloudMaskSvg,
        maskImage: cloudMaskSvg,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "top center",
        maskPosition: "top center",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-2 text-[#222638]">
        <p className="text-lg font-bold uppercase tracking-[0.04em] sm:text-xl md:text-2xl">{title}</p>
        <p className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.08em] text-[#cf9b3d] sm:text-xs">
          View details
          <FaArrowRight className="text-[10px]" />
        </p>
      </div>
    </button>
  );
}

export default function ProgramsSection() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const topRow = programItems.slice(0, 4);
  const bottomRow = programItems.slice(4);

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 md:py-20"
      style={{
        backgroundImage: "url('/home/course-banner-h6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <h2 className="mx-auto mt-2 max-w-3xl text-center text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Our Programs
        </h2>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:mt-12 lg:grid-cols-4">
          {topRow.map((item) => (
            <ProgramCard
              key={item.title}
              title={item.title}
              onOpen={() => setSelectedProgram(item)}
            />
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-5 sm:mt-6 sm:gap-6">
          {bottomRow.map((item) => (
            <ProgramCard
              key={item.title}
              title={item.title}
              onOpen={() => setSelectedProgram(item)}
            />
          ))}
        </div>
      </div>

      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#0e1022]/70 p-0 sm:items-center sm:p-4">
          <div className="max-h-[90dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-xl sm:p-6 md:p-8">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="pr-2 text-xl font-bold text-[#222638] sm:text-2xl">{selectedProgram.title}</h3>
              <button
                type="button"
                onClick={() => setSelectedProgram(null)}
                className="rounded-md border border-[#d7d8de] px-3 py-1 text-sm font-semibold text-[#222638] hover:bg-[#f6f7fb]"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#4b5168] sm:text-base">
              {selectedProgram.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
