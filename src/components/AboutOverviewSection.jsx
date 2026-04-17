const pillars = [
  {
    title: "Our Vision",
    color: "bg-[#7a31be]",
    text: "Our vision is to build a safe and loving space where children and parents feel supported at every step. We aim to raise the bar in early education through a multi-skill, cross-disciplinary and growth-centered approach that nurtures confident, adaptable and resilient global citizens.",
  },
  {
    title: "Our Mission",
    color: "bg-[#d18109]",
    text: "Our mission is to nurture children in a culturally meaningful environment and open doors to experiences that empower them to discover who they are and what they can achieve.",
  },
];

export default function AboutOverviewSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8effa] py-18">
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 md:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className={`${pillar.color} rounded-3xl p-7 text-white shadow-lg`}
            >
              <h2 className="text-3xl font-extrabold">{pillar.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/95">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
