import Image from "next/image";
import {
  FaFemale,
  FaShieldAlt,
  FaSchool,
  FaUtensils,
  FaUserTie,
  FaVideo,
} from "react-icons/fa";

const leftPointers = [
  { text: "Well Designed Safe Infrastructure", icon: FaSchool },
  { text: "100% Female Staff", icon: FaFemale },
  { text: "Live CCTV Survelliance", icon: FaVideo },
];

const rightPointers = [
  {
    text: "Nutritious and Balanced Meals",
    icon: FaUtensils,
  },
  { text: "Experienced and Trained Staff", icon: FaUserTie },
  { text: "Well Defined Safety Policies", icon: FaShieldAlt },
];

export default function AdmissionWhatWeOfferSection() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a88a63]">
            What We Offer
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#232638] md:text-5xl">
            We Are Here To Guide
          </h2>
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full max-w-xs space-y-8 text-center lg:text-left">
            {leftPointers.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text}>
                  <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#cf8605] text-white">
                      <Icon />
                    </span>
                    <p className="text-lg font-extrabold leading-snug text-[#232638] md:text-xl">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center rounded-3xl bg-[#ece6f7] p-2 px-0">
            <Image src="/admission/kids-groupa.png" alt="What We Offer" width={380} height={300} className="object-cover rounded-2xl" />

          </div>

          <div className="w-full max-w-xs space-y-8 text-center lg:text-left">
            {rightPointers.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text}>
                  <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#cf8605] text-white">
                      <Icon />
                    </span>
                    <p className="text-lg font-extrabold leading-snug text-[#232638] md:text-xl">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

