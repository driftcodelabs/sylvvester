"use client";

import { useId, useMemo, useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa";

const galleryItems = [
  {
    id: 1,
    title: "Play Zone Fun",
    subtitle: "School",
    color: "bg-[#d98b67]",
  },
  {
    id: 2,
    title: "Reading Circle",
    subtitle: "School",
    color: "bg-[#87b2c9]",
  },
  {
    id: 3,
    title: "Happy Art Time",
    subtitle: "School",
    color: "bg-[#9a8ac7]",
  },
  {
    id: 4,
    title: "Outdoor Activity",
    subtitle: "School",
    color: "bg-[#54b9b2]",
  },
  {
    id: 5,
    title: "Music & Dance",
    subtitle: "School",
    color: "bg-[#c88f5e]",
  },
  {
    id: 6,
    title: "Team Games",
    subtitle: "School",
    color: "bg-[#6f7fe8]",
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

export default function GalleryGridSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = useMemo(
    () => (activeIndex === null ? null : galleryItems[activeIndex]),
    [activeIndex]
  );

  const showPrevious = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryItems.length);
  };

  return (
    <section className="bg-[#f8effa] py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#7d7c90]">
          School Gallery
        </p>
        <h1 className="mt-2 text-center text-5xl font-bold text-[#232638] md:text-6xl">
          Our Gallery For Kids
        </h1>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl text-left"
            >
              <div className={`h-full w-full transition duration-300 group-hover:scale-105 ${item.color}`} />
              <div className="absolute inset-0 flex items-center justify-center bg-[#d18109]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center text-white">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6c1ca0] text-2xl">
                    <FaEye />
                  </div>
                  <p className="mt-5 text-2xl uppercase tracking-[0.14em]">
                    {item.subtitle}
                  </p>
                  <p className="mt-1 text-3xl font-bold">{item.title}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#141420]/75 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-[#2b305d] p-2 text-white transition hover:bg-[#d18109]"
              aria-label="Close gallery preview"
            >
              <FaTimes />
            </button>

            <div className="grid items-center gap-6 p-6 md:grid-cols-[80px_1fr_80px] md:p-10">
              <button
                type="button"
                onClick={showPrevious}
                className="hidden justify-self-center text-[#232638] transition hover:text-[#d18109] md:block"
                aria-label="Previous image"
              >
                <ArrowIcon flipped />
              </button>

              <div className="relative">
                <div
                  className={`h-[380px] rounded-3xl md:h-[480px] ${activeItem.color}`}
                />
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-white">
                  <p className="text-xl uppercase tracking-[0.2em]">
                    {activeItem.subtitle}
                  </p>
                  <p className="mt-2 text-3xl font-bold md:text-4xl">
                    {activeItem.title}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={showNext}
                className="hidden justify-self-center text-[#232638] transition hover:text-[#d18109] md:block"
                aria-label="Next image"
              >
                <ArrowIcon />
              </button>

              <div className="mt-2 flex items-center justify-between md:hidden">
                <button
                  type="button"
                  onClick={showPrevious}
                  className="text-[#232638] transition hover:text-[#d18109]"
                  aria-label="Previous image"
                >
                  <ArrowIcon flipped />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="text-[#232638] transition hover:text-[#d18109]"
                  aria-label="Next image"
                >
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
