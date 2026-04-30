import {
  FaBalanceScale,
  FaBookOpen,
  FaBriefcase,
  FaChartLine,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const sections = [
  {
    title: "Market and Demand",
    icon: FaChartLine,
    accent: "text-[#cf8605]",
    bg: "bg-[#fbf2e6]",
    checks: "text-[#cf8605]",
    items: [
      "Rapid growth of the preschool education market",
      "Increasing demand for early childhood education",
      "Large number of children still need quality preschools",
      "Parents prefer structured learning over only daycare",
    ],
  },
  {
    title: "Social and Demographic Factors",
    icon: FaUsers,
    accent: "text-[#7b2aa1]",
    bg: "bg-[#f6effb]",
    checks: "text-[#7b2aa1]",
    items: [
      "Increase in working parents and nuclear families",
      "Urbanisation and higher family incomes",
      "Parents are more aware of early learning benefits",
      "Education seen as an investment in child’s future",
    ],
  },
  {
    title: "Educational Research",
    icon: FaLightbulb,
    accent: "text-[#5b248f]",
    bg: "bg-[#f7eef4]",
    checks: "text-[#5b248f]",
    items: [
      "Early years are crucial for brain development",
      "Preschool improves social, emotional and thinking skills",
      "Helps in better school readiness and confidence",
      "Builds strong foundation for lifelong learning",
    ],
  },
  {
    title: "Business and Entrepreneurship",
    icon: FaBriefcase,
    accent: "text-[#cf8605]",
    bg: "bg-[#fbf7e9]",
    checks: "text-[#cf8605]",
    items: [
      "Stable and recurring income model",
      "High demand every year (new batch of kids)",
      "Can start with moderate investment",
      "Franchise models reduce risk and provide support",
    ],
  },
  {
    title: "Policy and Government Support",
    icon: FaBalanceScale,
    accent: "text-[#5b248f]",
    bg: "bg-[#eef2ff]",
    checks: "text-[#5b248f]",
    items: [
      "NEP 2020 promotes Early Childhood Care and Education (ECCE)",
      "Increasing focus on foundational learning",
      "More awareness and acceptance of preschool education",
    ],
  },
  {
    title: "Quality Gap and Opportunity",
    icon: FaBookOpen,
    accent: "text-[#3a7a4e]",
    bg: "bg-[#eefaf1]",
    checks: "text-[#3a7a4e]",
    items: [
      "Many areas lack good quality preschools",
      "Opportunity to offer better infrastructure and teaching methods",
      "Parents seek safe, caring and learning-focused schools",
    ],
  },
];

function Card({ title, icon: Icon, items, bg, accent, checks }) {
  return (
    <div className={`rounded-3xl ${bg} p-8 shadow-[0_18px_45px_rgba(26,29,46,0.08)]`}>
      <div className={`flex h-9 w-9 items-center justify-center ${accent}`}>
        <Icon />
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-[#5b248f]">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[#3b3d50]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className={`mt-[3px] ${checks}`}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FranchiseWhyStartPreschoolSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold text-[#232638] md:text-6xl">
            Why Start a Preschool?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5e6074] md:text-base">
            Early childhood education is one of the fastest-growing and most impactful sectors,
            combining social contribution with strong business potential.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}

