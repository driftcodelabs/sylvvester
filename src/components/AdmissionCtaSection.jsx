import CommonButton from "@/components/CommonButton";

export default function AdmissionCtaSection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
     
    >
      <div className="absolute inset-0 bg-[#5b248f]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center md:px-10">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl">
          Admission Made Simple and Easy
        </h2>
        <p className="mx-auto mt-6 text-lg leading-relaxed text-white/95 md:text-xl">
          Sylvvester welcomes children from all backgrounds and provides them
          with the right learning tools to succeed in the future. We understand
          that the admission process can be time-consuming, so to make it
          convenient, we offer a simple and transparent admission process.
          Parents can easily check the play school admission age and complete
          the enrollment without difficulty.
        </p>
        <p className="mx-auto mt-4 text-lg leading-relaxed text-white/95 md:text-xl">
          Our helpful and friendly team of staff is always available to assist
          parents and answer their questions thereby ensuring a smooth and
          comfortable admission experience.
        </p>
        <div className="mt-10 flex justify-center">
          <CommonButton label="Take Admission" className="px-10 py-4" />
        </div>
      </div>
    </section>
  );
}
