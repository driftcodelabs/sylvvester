"use client";

import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function Input({ label, placeholder, type = "text", Icon }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#343549]">
        {label}
      </label>
      <div className="relative mt-1">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#8b8da0]">
          <Icon />
        </span>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-[#e4deee] bg-white py-2.5 pl-9 pr-3 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
        />
      </div>
    </div>
  );
}

function Textarea({ label, placeholder, Icon }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#343549]">
        {label}
      </label>
      <div className="relative mt-1">
        <span className="pointer-events-none absolute left-3 top-3 text-sm text-[#8b8da0]">
          <Icon />
        </span>
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full rounded-xl border border-[#e4deee] bg-white py-2.5 pl-9 pr-3 text-sm text-[#232638] outline-none ring-[#d18109]/40 focus:border-[#d18109] focus:ring-2"
        />
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="bg-[#fff8ef] py-18">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a88a63]">
              Contact Us
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-[#232638] md:text-6xl">
              Let&apos;s Talk
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5e6074] md:text-base">
              Share your details and our team will connect with you shortly.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rounded-4xl border border-[#efe6fb] bg-white p-7 shadow-[0_18px_45px_rgba(26,29,46,0.08)] md:p-9">
            <h2 className="text-2xl font-extrabold text-[#232638] md:text-3xl">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-[#6b6d7f]">
              We&apos;d love to hear from you.
            </p>

            <form className="mt-6 space-y-4">
              <Input
                label="Full Name"
                placeholder="Enter your full name"
                Icon={FaUser}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  Icon={FaEnvelope}
                />
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="Enter your phone"
                  Icon={FaPhoneAlt}
                />
              </div>
              <Textarea
                label="Message"
                placeholder="Write your message"
                Icon={FaMessage}
              />

              <button
                type="submit"
                className="cta-button mt-3 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg"
              >
                <span className="cta-button__fill" />
                <span className="cta-button__inner-border" />
                <span className="cta-button__label">Send Message</span>
              </button>
            </form>
          </div>

          <div className="rounded-4xl bg-[#f8effa] p-7 shadow-[0_18px_45px_rgba(26,29,46,0.06)] md:p-9">
            <h2 className="text-2xl font-extrabold text-[#232638] md:text-3xl">
              Contact Details
            </h2>
            <p className="mt-1 text-sm text-[#6b6d7f]">
              Reach us directly using the details below.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d18109] bg-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e89f5d] text-xl text-white">
                    ☎
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold text-[#344e67]">
                    Mobile
                  </p>
                  <p className="mt-1 text-2xl font-extrabold text-[#344e67]">
                    9799366138 / 6375975479
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#5b248f] bg-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5b248f] text-xl text-white">
                    ✉
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold text-[#344e67]">Email</p>
                  <p className="mt-1 text-xl font-extrabold text-[#344e67] break-all">
                    sylvvesterworldschool@gmail.com
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 text-sm leading-relaxed text-[#5e6074]">
                <p className="text-base font-extrabold text-[#232638]">
                  Address
                </p>
                <p className="mt-2">
                  A-89, Ganga Path, Vaishali Nagar, Jaipur - 302021 Rajasthan
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

