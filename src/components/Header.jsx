"use client";

import CommonButton from "@/components/CommonButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admission", href: "/admission" },
  { label: "Franchise", href: "/franchise" },
  { label: "Blog", href: "/blog" },
];

/** Scroll past this many pixels to hide the bottom scalloped stripe. */
const STRIPE_HIDE_SCROLL_Y = 20;

export default function Header({ stripeColor = "#f8effa" }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBottomStripe, setShowBottomStripe] = useState(true);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      setShowBottomStripe(window.scrollY < STRIPE_HIDE_SCROLL_Y);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="min-h-[96px] shrink-0 lg:h-[120px]" aria-hidden="true" />
      <header className="fixed inset-x-0 top-0 z-40 min-h-[96px] bg-white lg:h-[120px]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10">
        <Link
          href="/"
          aria-label="Go to home page"
          className="shrink-0 leading-none text-[#70167e] select-none cursor-pointer"
        >
          <p className="text-2xl font-extrabold uppercase sm:text-3xl md:text-4xl">
            Sylvvester
          </p>
          <p className="text-center text-xl font-bold sm:text-2xl md:text-3xl">
            World School
          </p>
        </Link>

        <nav
          className="hidden items-center gap-5 text-sm font-bold text-black xl:gap-7 xl:text-base lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-[#d18109]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <CommonButton
            label="Contact Us"
            href="/contact"
            className="hidden px-5 py-2.5 text-sm lg:inline-flex"
          />

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#70167e]/20 text-[#70167e] transition hover:bg-[#f8effa] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-main-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-200 lg:hidden" id="mobile-main-nav">
          <button
            type="button"
            className="absolute inset-0 bg-[#1a1d2e]/50 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-[#70167e]/10 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-[#eee] px-4 py-3">
              <span className="text-sm font-bold text-[#70167e]">Menu</span>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#70167e] hover:bg-[#f8effa]"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-4 py-3 text-base font-bold text-black transition hover:bg-[#f8effa] hover:text-[#d18109]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-[#eee] p-4 sm:hidden">
              <CommonButton
                label="Contact Us"
                href="/contact"
                className="w-full py-3 text-base"
              />
            </div>
          </div>
        </div>
      )}

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 scale-y-[-1] overflow-hidden transition-[height,opacity] duration-200 ease-out sm:duration-300 ${
          showBottomStripe ? "h-6 opacity-100 sm:h-8" : "h-0 opacity-0"
        }`}
        style={{
          backgroundImage: `radial-gradient(circle at 32px 46px, white 36px, ${stripeColor} 37px)`,
          backgroundSize: "64px 40px",
          backgroundRepeat: "repeat-x",
        }}
      />
    </header>
    </>
  );
}
