const steps = [
  {
    number: "01",
    title: "Market Analysis & Feasibility Study",
    bullets: [
      "Evaluate local demand and demographics for early childhood education.",
      "Assess competition and identify your unique value proposition.",
      "Understand potential enrolment and revenue forecasts.",
    ],
    side: "left",
  },
  {
    number: "02",
    title: "Franchise Onboarding & Licensing Support",
    bullets: [
      "Step-by-step guidance on registering the franchise under local legal requirements.",
      "Assistance with obtaining necessary permits, approvals and compliance with education regulations.",
    ],
    side: "right",
  },
  {
    number: "03",
    title: "Location Selection & Infrastructure Planning",
    bullets: [
      "Criteria for choosing a safe, accessible and child-friendly location.",
      "Recommended classroom layouts, furniture, learning zones and play areas.",
      "Standardized branding and design guidelines to maintain franchise identity.",
    ],
    side: "left",
  },
  {
    number: "04",
    title: "Curriculum & Pedagogical Framework",
    bullets: [
      "Access to a proven curriculum aligned with your educational philosophy.",
      "Guidelines for age-appropriate learning activities, teaching aids and digital resources.",
      "Training on fostering holistic child development: cognitive, emotional, social and physical growth.",
    ],
    side: "right",
  },
  {
    number: "05",
    title: "Staff Recruitment & Training",
    bullets: [
      "Hiring standards for teachers and support staff.",
      "Comprehensive onboarding and ongoing professional development programs.",
      "Techniques to maintain teaching quality and student engagement across franchise centres.",
    ],
    side: "left",
  },
  {
    number: "06",
    title: "Operational Guidelines & Standard Processes",
    bullets: [
      "Standard operating procedures (SOPs) for daily classroom and administrative operations.",
      "Policies for student enrolment, fee collection, parent engagement and safety protocols.",
      "Monitoring and reporting systems to ensure consistent quality across centres.",
    ],
    side: "right",
  },
  {
    number: "07",
    title: "Marketing & Admissions Strategy",
    bullets: [
      "Branding support and promotional materials.",
      "Localized marketing strategies to attract and retain students.",
      "Guidance on admissions, open houses and parent outreach programs.",
    ],
    side: "left",
  },
  {
    number: "08",
    title: "Launch Support & Continuous Guidance",
    bullets: [
      "Assistance during soft launch and grand opening events.",
      "Access to ongoing operational support, curriculum updates and best practices.",
      "Continuous evaluation and improvement mechanisms to maintain franchise standards.",
    ],
    side: "right",
  },
  {
    number: "09",
    title: "Financial Planning & ROI Guidance",
    bullets: [
      "Estimated initial investment and operational costs.",
      "Revenue projection models and guidance for maximizing profitability.",
      "Financial management best practices for franchise operations.",
    ],
    side: "left",
  },
];

function StepBlock({ step }) {
  const isLeft = step.side === "left";

  return (
    <div
      className={`w-full text-left md:w-[42%] ${
        isLeft ? "md:text-right" : "md:text-left"
      }`}
    >
      <h3 className="text-lg font-extrabold text-[#5b248f] sm:text-xl md:text-2xl">
        {step.number}. {step.title}
      </h3>
      <ul
        className={`mt-2 space-y-1 text-sm leading-relaxed text-[#5e6074] md:text-base ${
          isLeft
            ? "pl-5 text-left md:pl-0 md:pr-5 md:text-right"
            : "pl-5 text-left"
        }`}
      >
        {step.bullets.map((bullet) => (
          <li
            key={bullet}
            className={
              isLeft ? "md:flex md:justify-end" : undefined
            }
          >
            {isLeft ? (
              <span className="text-left md:inline-block md:text-right">{bullet}</span>
            ) : (
              bullet
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FranchiseRoadmapSection() {
  return (
    <section className="py-12 sm:py-14 md:py-18">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-[#232638] sm:text-3xl md:text-5xl">
            How to start a Preschool
          </h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12 md:mt-14">
          <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-[#b28bd0]/40 md:block" />

          <div className="space-y-10 sm:space-y-12 md:space-y-14">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8 ${
                  step.side === "left"
                    ? "md:justify-between"
                    : "md:flex-row-reverse md:justify-between"
                }`}
              >
                <StepBlock step={step} />

                <div className="relative z-10 hidden shrink-0 items-center justify-center md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6c1ca0] text-sm font-extrabold text-white shadow-md">
                    {parseInt(step.number, 10)}
                  </div>
                </div>

                <div className="hidden md:block md:w-[42%]" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
