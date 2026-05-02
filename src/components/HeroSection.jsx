import Image from "next/image";
import CommonButton from "@/components/CommonButton";

export default function HeroSection() {
  return (
    <main className="relative isolate overflow-hidden bg-[#f8effa]">
      <section className="mx-auto flex min-h-[min(100dvh,36rem)] w-full max-w-7xl items-center px-4 pb-8 pt-10 sm:min-h-[32rem] sm:px-6 sm:pb-10 sm:pt-12 md:px-10 lg:h-[660px] lg:min-h-0 lg:pb-0 lg:pt-14">
        <div className="flex w-full flex-col-reverse items-center justify-between gap-8 sm:gap-10 lg:flex-row lg:gap-12">
          <div className="relative z-10 w-full max-w-xl text-center lg:max-w-none lg:w-[55%] lg:text-left">
            <p className="mb-3 text-sm font-medium text-[#70167e]/80 sm:mb-4 sm:text-base md:text-lg">
            Preschool &amp; Day Care ✨
            </p>
            <h1 className="text-2xl font-bold leading-tight text-black sm:text-3xl md:text-4xl md:leading-tight lg:text-5xl">
              Where Little Minds Begin <span className="text-[#70167e]">Extraordinary </span> Journeys.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-black/80 sm:mt-5 sm:text-lg md:text-xl lg:mx-0 lg:mr-auto">
              World class early childhood education.
            </p>
            <div className="mt-8 flex justify-center lg:mt-10 lg:justify-start">
              <CommonButton label="Know More" className="py-3 text-base sm:py-4 sm:text-lg" />
            </div>
          </div>

          <div className="relative flex w-full max-w-md shrink-0 items-end justify-center sm:max-w-lg lg:max-w-none lg:w-[45%] lg:justify-end">
            <div className="absolute -left-4 top-6 h-12 w-12 rounded-full bg-[#a08de4]/40 blur-sm sm:-left-8 sm:top-10 sm:h-16 sm:w-16" />
            <div className="absolute -right-2 top-1/4 h-10 w-10 rotate-12 rounded-xl bg-[#ffd166]/40 sm:-right-4 sm:h-12 sm:w-12" />
            <div className="absolute bottom-8 left-[15%] h-14 w-14 rounded-full border-4 border-[#f2a764]/60 sm:bottom-12 sm:left-1/4 sm:h-20 sm:w-20" />
            <Image
              src="/home/heroimagea.png"
              alt="Running school child"
              width={350}
              height={300}
              priority
              className="relative z-10 max-w-xl object-contain"
            />
          </div>
        </div>
      </section>

      <div className="pointer-events-none absolute left-4 top-8 h-8 w-8 rounded-full bg-[#47b8d6]/45 sm:left-12 sm:top-10 sm:h-10 sm:w-10 md:left-20 md:top-12" />
      <div className="pointer-events-none absolute right-4 top-16 h-10 w-10 rounded-2xl bg-[#b8a6ef]/40 sm:right-12 sm:top-20 sm:h-12 sm:w-12 md:right-20 md:top-24" />
      <div className="pointer-events-none absolute bottom-12 left-4 h-10 w-10 rotate-45 rounded-lg bg-[#f2a764]/35 sm:bottom-16 sm:left-8 md:bottom-20 md:left-10 md:h-12 md:w-12" />
      <div
        className="absolute inset-x-0 bottom-0 h-10 z-999"
        style={{
          backgroundImage:
            "radial-gradient(circle at 32px 46px, #ffffff 45px, transparent 35px)",
          backgroundSize: "64px 40px",
          backgroundRepeat: "repeat-x",
        }}
      />
    </main>
  );
}
