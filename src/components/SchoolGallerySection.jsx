"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { FaEye } from "react-icons/fa";
import CommonButton from "@/components/CommonButton";
import GalleryLightbox from "@/components/GalleryLightbox";
import {
  GALLERY_IMAGE_PATHS,
  GALLERY_IMAGES_PER_LOAD,
} from "@/constants/galleryImages";

export default function SchoolGallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const previewPaths = useMemo(
    () => GALLERY_IMAGE_PATHS.slice(0, GALLERY_IMAGES_PER_LOAD),
    []
  );
  const activeItem = useMemo(
    () => (activeIndex === null ? null : GALLERY_IMAGE_PATHS[activeIndex]),
    [activeIndex]
  );

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
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#7d7c90] sm:text-sm">
          School Gallery
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-[#232638] sm:text-4xl md:text-5xl lg:text-6xl">
          Our Gallery For Kids
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 md:grid-cols-3 lg:grid-cols-4">
          {previewPaths.map((imagePath, idx) => (
            <button
              key={imagePath}
              type="button"
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

        <div className="mt-10 flex justify-center">
          <CommonButton
            label="View More"
            className="px-9 py-3 uppercase"
            href="/gallery?more=1"
          />
        </div>
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
