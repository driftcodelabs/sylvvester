import { FaEye } from "react-icons/fa";
import CommonButton from "@/components/CommonButton";

const galleryItems = [
  {
    id: 1,
    title: "Kids Climbing",
    subtitle: "School",
    classes: "lg:col-span-4 lg:row-span-1",
    color: "bg-[#d98b67]",
    height: "h-[200px] sm:h-[220px] md:h-[250px]",
  },
  {
    id: 2,
    title: "Kids Ground",
    subtitle: "School",
    classes: "lg:col-span-4 lg:row-span-1",
    color: "bg-[#d8c8ba]",
    height: "h-[200px] sm:h-[220px] md:h-[250px]",
  },
  {
    id: 3,
    title: "Creative Time",
    subtitle: "School",
    classes: "lg:col-span-4 lg:row-span-2",
    color: "bg-[#8c7cc0]",
    height: "h-[240px] sm:h-[320px] md:h-[420px] lg:h-[530px]",
  },
  {
    id: 4,
    title: "Happy Hands",
    subtitle: "School",
    classes: "lg:col-span-8 lg:row-span-1",
    color: "bg-[#715f8e]",
    height: "h-[200px] sm:h-[220px] md:h-[250px]",
  },
];

export default function SchoolGallerySection() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#7d7c90] sm:text-sm">
          School Gallery
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-[#232638] sm:text-4xl md:text-5xl lg:text-6xl">
          Our Gallery For Kids
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {galleryItems.map((item) => (
            <article
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl ${item.classes} ${item.height}`}
            >
              <div className={`h-full w-full ${item.color}`} />

              <div className="absolute inset-0 flex items-center justify-center bg-[#d18109]/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-center text-white">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#6c1ca0] text-2xl">
                    <FaEye />
                  </div>
                  <p className="mt-5 text-2xl uppercase tracking-[0.14em]">
                    {item.subtitle}
                  </p>
                  <p className="mt-1 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">{item.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <CommonButton label="View More" className="px-9 py-3 uppercase" />
        </div>
      </div>
    </section>
  );
}
