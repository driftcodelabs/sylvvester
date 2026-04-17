"use client";

import {
  FaBriefcase,
  FaBullseye,
  FaCity,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRupeeSign,
  FaUser,
} from "react-icons/fa";

function Field({ label, placeholder, type = "text", Icon, as = "input" }) {
  const Control = as;

  return (
    <div>
      <label className="block text-sm font-semibold text-[#343549]">
        {label}
      </label>
      <div className="relative mt-1">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#8b8da0]">
          <Icon />
        </span>
        <Control
          type={as === "input" ? type : undefined}
          rows={as === "textarea" ? 3 : undefined}
          className="w-full rounded-xl border border-[#e4deee] bg-white py-2.5 pl-9 pr-3 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default function FranchiseHeroSection() {
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
              Franchise Opportunity
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-6xl">
              Partner With Us
              <span className="block">Grow With Sylvvester</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-white/95">
              Bring a joyful, child-first learning experience to your city. We
              support franchise partners with curriculum, training and
              operational guidance to build a trusted pre-primary school.
            </p>
            <p className="mt-3 text-base text-white/90">
              Share your details to receive franchise information and speak with
              our team.
            </p>
          </div>

          <div className="w-full max-w-md rounded-3xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-extrabold text-[#232638] md:text-3xl">
              Franchise Enquiry
            </h2>
            <p className="mt-1 text-sm text-[#6b6d7f]">
              Fill in the details below and we&apos;ll connect with you.
            </p>

            <form className="mt-5 space-y-4">
              <Field
                label="Full Name"
                placeholder="Enter full name"
                Icon={FaUser}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Email"
                  placeholder="Enter email"
                  type="email"
                  Icon={FaEnvelope}
                />
                <Field
                  label="Phone"
                  placeholder="Enter phone"
                  type="tel"
                  Icon={FaPhoneAlt}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="City" placeholder="Enter city" Icon={FaCity} />
                <Field
                  label="Current Profession"
                  placeholder="Your profession"
                  Icon={FaBriefcase}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Preferred Location"
                  placeholder="Area / location"
                  Icon={FaMapMarkerAlt}
                />
                <Field
                  label="Investment Budget"
                  placeholder="Approx budget"
                  Icon={FaRupeeSign}
                />
              </div>

              <Field
                label="Message"
                placeholder="Tell us a bit about your interest"
                Icon={FaBullseye}
                as="textarea"
              />

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

