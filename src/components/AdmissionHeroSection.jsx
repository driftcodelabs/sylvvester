import CommonButton from "@/components/CommonButton";

export default function AdmissionHeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="relative min-h-[540px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/about/hero-banner-bg-h8.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#3a1462]/20" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-24 pt-20 md:px-10 lg:flex-row lg:items-center">
          <div className="max-w-xl text-white">
            <p className="text-base font-bold uppercase tracking-[0.16em] text-[#ffd67d] md:text-lg">
              Admissions Open
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Begin Your Child&apos;s
              <span className="block">Joyful Learning Journey</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-white/95">
              Sylvvester World School offers a warm, safe and playful
              environment where every child is encouraged to explore, discover
              and grow at their own pace.
            </p>
            <p className="mt-3 text-base text-white/90">
              Share a few details and our team will connect with you to guide
              you through the simple admission process.
            </p>

            
          </div>

          <div
            id="admission-enquiry-form"
            className="scroll-mt-24 w-full max-w-md rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm"
          >
            <h2 className="text-2xl font-extrabold text-[#232638] md:text-3xl">
              Enquiry Form
            </h2>
            <p className="mt-1 text-sm text-[#6b6d7f]">
              Fill in the details below and we&apos;ll get back to you shortly.
            </p>

            <form className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[#343549]">
                    Parent Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-xl border border-[#e4deee] bg-white px-3 py-2.5 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#343549]">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-xl border border-[#e4deee] bg-white px-3 py-2.5 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-[#343549]">
                    Child Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-xl border border-[#e4deee] bg-white px-3 py-2.5 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                    placeholder="Enter child name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#343549]">
                    Class Interested In
                  </label>
                  <select
                    className="mt-1 w-full rounded-xl border border-[#e4deee] bg-white px-3 py-2.5 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select class
                    </option>
                    <option>Playgroup</option>
                    <option>Nursery</option>
                    <option>KG</option>
                    <option>Prep</option>
                    <option>Daycare</option>
                    <option>After School</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#343549]">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-[#e4deee] bg-white px-3 py-2.5 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#343549]">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-xl border border-[#e4deee] bg-white px-3 py-2.5 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
                  placeholder="Share any specific query or requirement"
                />
              </div>

              <button
                type="submit"
                className="cta-button mt-3 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg"
              >
                <span className="cta-button__fill" />
                <span className="cta-button__inner-border" />
                <span className="cta-button__label">Submit Enquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

