"use client";

import {
  FaBriefcase,
  FaChevronDown,
  FaCity,
  FaEnvelope,
  FaListAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRupeeSign,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

function SingleLineField({ label, placeholder, Icon, type = "text" }) {
  return (
    <div className="relative border-b border-[#d9d0e4] pb-2">
      <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[16px] text-[#6a2ea1]">
        <Icon />
      </span>
      <input
        type={type}
        className="h-8 w-full bg-transparent pl-8 pr-1 text-[18px] font-semibold text-[#6f3d93] placeholder:text-[#6f3d93] placeholder:opacity-95 outline-none"
        placeholder={label || placeholder}
        aria-label={label || placeholder}
      />
    </div>
  );
}

function DropdownField({ label, Icon }) {
  return (
    <div className="relative border-b border-[#d9d0e4] pb-2">
      <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-[16px] text-[#6a2ea1]">
        <Icon />
      </span>
      <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[#7a6494]">
        <FaChevronDown />
      </span>
      <select
        defaultValue=""
        className="h-8 w-full appearance-none bg-transparent pl-8 pr-6 text-[18px] font-semibold text-[#6f3d93] outline-none"
        aria-label={label}
      >
        <option value="" disabled>
          {label}
        </option>
        <option>General Query</option>
        <option>Franchise Details</option>
        <option>Investment Discussion</option>
      </select>
    </div>
  );
}

function TextareaField() {
  return (
    <div className="relative rounded-lg border border-[#dcd2e7] bg-white px-3 pb-3 pt-2">
      <div className="flex items-center gap-2 text-[18px] font-semibold text-[#6f3d93]">
        <span className="text-[#6a2ea1]">
          <FaCommentDots />
        </span>
        <span>Message</span>
      </div>
      <textarea
        rows={3}
        className="mt-2 w-full resize-none bg-transparent text-sm text-[#4d3d62] placeholder:text-[#9d8ab6] outline-none"
        placeholder="Write your message..."
        aria-label="Message details"
      />
    </div>
  );
}

export default function FranchiseHeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#6a2ea1] py-12 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(236,217,255,0.36),transparent_28%),radial-gradient(circle_at_85%_24%,rgba(210,175,255,0.38),transparent_35%),radial-gradient(circle_at_78%_70%,rgba(176,121,240,0.3),transparent_28%),linear-gradient(120deg,#52207e_0%,#6a2ea1_34%,#7d3eb5_56%,#9d55cf_78%,#b96ce1_100%)]" />
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_15%_15%,rgba(255,255,255,.64)_0_3px,transparent_4px),radial-gradient(circle_at_82%_22%,rgba(232,211,255,.55)_0_4px,transparent_5px),radial-gradient(circle_at_75%_70%,rgba(215,186,250,.45)_0_5px,transparent_7px)] bg-size-[260px_260px,320px_320px,300px_300px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-5xl text-center text-white">
          <h1 className="text-balance text-[34px] font-extrabold leading-tight drop-shadow-[0_2px_4px_rgba(64,17,80,0.35)] md:text-[52px]">
            Where Your Journey with a
            <span className="block">Premium Preschool Brand Begins</span>
          </h1>
          {/* <p className="mx-auto mt-4  text-balance text-base font-medium text-white/95 md:text-[30px]/[1.15]">
            Interested in starting your own premium preschool franchise? Please
            fill out the form below and our franchise team will contact you
            shortly.
          </p> */}
        </div>

        <div className="relative mx-auto mt-8 max-w-5xl rounded-[28px] border border-[#e1cff7] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(252,248,255,0.97)_100%)] p-4 shadow-[0_0_0_3px_rgba(122,66,191,0.88),0_0_0_8px_rgba(233,219,252,0.7),0_22px_50px_rgba(69,30,118,0.3)] md:p-7">
          <div className="grid gap-x-8 gap-y-4 md:grid-cols-2">
            <SingleLineField label="Full Name" Icon={FaUser} />
            <SingleLineField label="Email Address" Icon={FaEnvelope} type="email" />
            <SingleLineField label="Phone Number" Icon={FaPhoneAlt} type="tel" />
            <SingleLineField label="City" Icon={FaCity} />
            <SingleLineField label="Current Profession" Icon={FaBriefcase} />
            <SingleLineField label="Preferred Location" Icon={FaMapMarkerAlt} />
            <SingleLineField label="Investment Budget" Icon={FaRupeeSign} />
            <DropdownField label="Message" Icon={FaListAlt} />
          </div>

          <div className="mt-4">
            <TextareaField />
          </div>

          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-linear-to-b from-[#9d55cf] to-[#6a2ea1] px-8 py-2.5 text-[34px] font-extrabold uppercase tracking-[0.03em] text-white shadow-[0_3px_0_#4f227f,0_8px_20px_rgba(73,34,122,0.42)] transition hover:brightness-105"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

