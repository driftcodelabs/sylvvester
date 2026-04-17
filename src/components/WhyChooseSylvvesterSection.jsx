import Image from "next/image";
import CommonButton from "@/components/CommonButton";

const reasons = [
  "A happy place where little minds grow",
  "Safe, caring and child-friendly environment",
  "Learning through play, fun and exploration",
  "Loving teachers and individual attention",
  "Building confidence, creativity and values",
  "A joyful home away from home",
];

export default function WhyChooseSylvvesterSection() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <div className="relative mx-auto h-[430px] w-full max-w-[460px] rounded-4xl bg-[#f4ecfa] p-4 shadow-lg">
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              src="/bgRemovedKids/IMG_6257.png"
              alt="Kids enjoying activities"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-4 h-[180px] w-[180px] overflow-hidden rounded-3xl border-4 border-white shadow-xl md:right-0">
            <Image
              src="/bgRemovedKids/stu.png"
              alt="Happy child smiling"
              fill
              className="bg-[#f8effa] object-contain p-2"
            />
          </div>
        </div>

        <article className="pt-8 lg:pt-0">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d18109]">
            Welcome to
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-[#22253a] md:text-5xl">
            Why Choose
            <span className="block text-[#5b248f]">Sylvvester World School</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#52556a]">
            We create a nurturing and joyful learning journey where every child
            feels safe, inspired and ready to grow.
          </p>

          <ul className="mt-7 grid gap-3">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex items-start gap-3 rounded-2xl border border-[#ece6f6] bg-[#f8effa] px-4 py-3 text-lg font-semibold text-[#2b2f46]"
              >
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d18109] text-xs text-white">
                  ✓
                </span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CommonButton label="Read More" className="px-9 py-3" />
          </div>
        </article>
      </div>
    </section>
  );
}
