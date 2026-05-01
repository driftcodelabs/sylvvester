import {
  FaBullhorn,
  FaChartLine,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaDraftingCompass,
  FaShieldAlt,
  FaTasks,
} from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import Image from "next/image";

const items = [
  { title: "Established curriculum\nSystem", iconpath: '/book.png' },
  { title: "Trusted brand\nrecognition", iconpath: '/trust.png' },
  { title: "Operational guidance\nincluded", iconpath: '/plan.png' },
  { title: "Marketing and\nbranding", iconpath: '/marketing.png' },
  { title: "Proven business\nmodel", iconpath: '/business.png' },
  { title: "Staff training\nsupport", iconpath: '/trainging.png' },
  { title: "Structured quality\ncontrol", iconpath: '/quality.png' },
  { title: "Infrastructure\ndesigning", iconpath: '/infra.png' },
];

export default function FranchiseWhyChooseSection() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h2 className="text-center text-3xl font-extrabold text-[#232638] md:text-5xl">
          Why Choose{" "}
          <span className="text-[#5b248f]">Sylvvester</span> as your Franchise
          Partner ?
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10">
          {items.map(({ title, iconpath }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl text-4xl text-[#d18109]">
                <Image
                  src={iconpath || '/Gemini_Generated_Image_qcoag8qcoag8qco-removebg-preview.png'}
                  alt="Established curriculum System"
                  width={100}
                  height={100}
                  style={{
                    filter: "drop-shadow(0 0 2px lightgray)"
                  }}
                />
              </div>
              <p className="mt-4 whitespace-pre-line text-lg font-bold leading-snug text-[#232638]">
                {title}
              </p>
        
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

