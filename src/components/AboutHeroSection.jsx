import Image from "next/image";
import CommonButton from "@/components/CommonButton";

export default function AboutHeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="relative min-h-[520px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about/hero-banner-bg-h8.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#3a1462]/10" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-center flex-col gap-8 px-6 pb-28 pt-18 text-center md:px-10  lg:text-left">
          <div className="text-white">
            <p className="text-base font-bold uppercase tracking-[0.16em] text-[#ffd67d] md:text-lg">
              Kid&apos;s Playground
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Welcome To Kid&apos;s
              <span className="block">Indoor Playground</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-white/90">
              Our passion is childhood, and we are in kindergarten.
            </p>

          </div>


        </div>

        <Image
          src="/about/banner-shape.svg"
          alt=""
          width={1920}
          height={204}
          className="pointer-events-none absolute -bottom-1 left-0 z-20 w-full"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
