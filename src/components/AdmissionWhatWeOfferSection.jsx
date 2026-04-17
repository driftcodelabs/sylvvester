import { FaChalkboardTeacher, FaLightbulb, FaPalette, FaShieldAlt } from "react-icons/fa";

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

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="w-full max-w-xs space-y-8 text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#cf8605] text-white">
                  <FaLightbulb />
                </span>
                <h3 className="text-2xl font-extrabold text-[#232638]">
                  Activity Based Learning
                </h3>
              </div>
              <p className="mt-2 text-base leading-relaxed text-[#5e6074]">
                Pre-school has open door & also offer free trial sessions.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#cf8605] text-white">
                  <FaPalette />
                </span>
                <h3 className="text-2xl font-extrabold text-[#232638]">
                  Creative Learning
                </h3>
              </div>
              <p className="mt-2 text-base leading-relaxed text-[#5e6074]">
                We provide creative learning environment for children.
              </p>
            </div>
          </div>

          <div className="flex h-[300px] w-full max-w-md items-center justify-center rounded-3xl bg-[#ece6f7]">
            <div className="rounded-2xl bg-[#6c1ca0] px-8 py-6 text-center text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                Placeholder
              </p>
              <p className="mt-2 text-4xl font-extrabold">Image</p>
            </div>
          </div>

          <div className="w-full max-w-xs space-y-8 text-center lg:text-right">
            <div>
              <div className="flex items-center justify-center gap-3 lg:justify-end">
                <h3 className="text-2xl font-extrabold text-[#232638]">
                  Safe Environment
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#cf8605] text-white">
                  <FaShieldAlt />
                </span>
              </div>
              <p className="mt-2 text-base leading-relaxed text-[#5e6074]">
                We ensure safe and secure environment for all children.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-3 lg:justify-end">
                <h3 className="text-2xl font-extrabold text-[#232638]">
                  Expert Teachers
                </h3>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#cf8605] text-white">
                  <FaChalkboardTeacher />
                </span>
              </div>
              <p className="mt-2 text-base leading-relaxed text-[#5e6074]">
                Our teachers are highly qualified and experienced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

