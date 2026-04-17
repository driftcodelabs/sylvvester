import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Admission", href: "/admission" },
  { label: "Franchise", href: "/franchise" },
  { label: "Blog", href: "/blog" },
];

const galleryPlaceholders = [
  "bg-[#d98b67]",
  "bg-[#87b2c9]",
  "bg-[#9a8ac7]",
  "bg-[#c88f5e]",
  "bg-[#6f7fe8]",
  "bg-[#54b9b2]",
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1d2e] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-10">
          <div>
            <div className="leading-none text-[#d18109]">
              <p className="text-2xl font-extrabold uppercase sm:text-3xl md:text-4xl">
                Sylvvester
              </p>
              <p className="text-xl font-bold sm:text-2xl md:text-3xl">World School</p>
            </div>
            <div className="mt-6 space-y-2 text-sm leading-relaxed text-white/85 md:text-base">
              <p>
                <span className="font-semibold text-white">Phone:</span>{" "}
                72101-01234
              </p>
              <p>
                <span className="font-semibold text-white">Email:</span>{" "}
                hello@sylvvesterworldschool.com
              </p>
              <p className="pt-1">
                <span className="font-semibold text-white">Address:</span>{" "}
                123 Learning Lane, Education City — Your City, State 302001
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-[#d18109]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-[#25D366]"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Quick links
            </p>
            <nav className="flex flex-col gap-3 text-base font-semibold">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white/90 transition hover:text-[#d18109]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Gallery
            </p>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {galleryPlaceholders.map((bg, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-lg ${bg}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#12141f] py-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Sylvvester World School. All rights reserved.
      </div>
    </footer>
  );
}
