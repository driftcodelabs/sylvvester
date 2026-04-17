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

const items = [
  { title: "Established curriculum\nSystem", Icon: FaBookOpen },
  { title: "Trusted brand\nrecognition", Icon: FaShieldAlt },
  { title: "Operational guidance\nincluded", Icon: FaClipboardCheck },
  { title: "Marketing and\nbranding", Icon: FaBullhorn },
  { title: "Proven business\nmodel", Icon: FaChartLine },
  { title: "Staff training\nsupport", Icon: FaChalkboardTeacher },
  { title: "Structured quality\ncontrol", Icon: FaTasks },
  { title: "Infrastructure\ndesigning", Icon: FaDraftingCompass },
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
          {items.map(({ title, Icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-[#f8effa] text-4xl text-[#d18109] shadow-sm ring-1 ring-[#f0e2c8]">
                <Icon />
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

