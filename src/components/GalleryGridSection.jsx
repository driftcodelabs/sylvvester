"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FaEye } from "react-icons/fa";
import CommonButton from "@/components/CommonButton";
import GalleryLightbox from "@/components/GalleryLightbox";
import {
  GALLERY_IMAGE_PATHS,
  GALLERY_IMAGES_PER_LOAD,
  GALLERY_MORE_ANCHOR_ID,
} from "@/constants/galleryImages";

export default function GalleryGridSection({ continueFromHome = false }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(() =>
    continueFromHome
      ? Math.min(GALLERY_IMAGES_PER_LOAD * 2, GALLERY_IMAGE_PATHS.length)
      : GALLERY_IMAGES_PER_LOAD
  );
  const visibleImages = useMemo(
    () => GALLERY_IMAGE_PATHS.slice(0, visibleCount),
    [visibleCount]
  );
  const activeItem = useMemo(
    () => (activeIndex === null ? null : GALLERY_IMAGE_PATHS[activeIndex]),
    [activeIndex]
  );
  const hasMoreImages = visibleCount < GALLERY_IMAGE_PATHS.length;

  useEffect(() => {
    if (!continueFromHome) return;
    if (visibleCount <= GALLERY_IMAGES_PER_LOAD) return;
    if (GALLERY_IMAGE_PATHS.length <= GALLERY_IMAGES_PER_LOAD) return;

    const scrollToMore = () => {
      const el = document.getElementById(GALLERY_MORE_ANCHOR_ID);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    requestAnimationFrame(() => requestAnimationFrame(scrollToMore));
  }, [continueFromHome, visibleCount]);

  const showPrevious = () => {
    if (activeIndex === null) return;
    setActiveIndex(
      (activeIndex - 1 + GALLERY_IMAGE_PATHS.length) % GALLERY_IMAGE_PATHS.length
    );
  };

  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % GALLERY_IMAGE_PATHS.length);
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
          {visibleImages.map((imagePath, idx) => (
            <button
              key={imagePath}
              type="button"
              id={
                idx === GALLERY_IMAGES_PER_LOAD &&
                visibleCount > GALLERY_IMAGES_PER_LOAD
                  ? GALLERY_MORE_ANCHOR_ID
                  : undefined
              }
              onClick={() => setActiveIndex(idx)}
              className="group relative aspect-4/3 overflow-hidden rounded-2xl text-left"
            >
              <Image
                src={imagePath}
                alt={`Gallery image ${idx + 1}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
                priority={idx < GALLERY_IMAGES_PER_LOAD}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#d18109]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6c1ca0] text-2xl text-white">
                  <FaEye />
                </div>
              </div>
            </button>
          ))}
        </div>
        {hasMoreImages && (
          <div className="mt-10 flex justify-center">
            <CommonButton
              label="Show More"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(
                    prev + GALLERY_IMAGES_PER_LOAD,
                    GALLERY_IMAGE_PATHS.length
                  )
                )
              }
            />
          </div>
        )}
      </div>

      <GalleryLightbox
        activeIndex={activeIndex}
        imageSrc={activeItem}
        total={GALLERY_IMAGE_PATHS.length}
        onClose={() => setActiveIndex(null)}
        onPrevious={showPrevious}
        onNext={showNext}
      />
    </section>
  );
}
