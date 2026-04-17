import { FaGem } from "react-icons/fa";

function BulletList({ items }) {
  return (
    <div className="mt-4 space-y-2 text-sm leading-relaxed text-[#5e6074] md:text-base">
      {items.map((line) =>
        line === "" ? (
          <div key={`spacer-${Math.random()}`} className="h-2" />
        ) : (
          <p key={line}>{line}</p>
        )
      )}
    </div>
  );
}

function FranchiseCard({ title, bodyLines, flip = false }) {
  return (
    <div
      className={`flex flex-col gap-8 rounded-4xl bg-white p-6 shadow-[0_18px_45px_rgba(26,29,46,0.10)] md:flex-row md:items-center md:gap-10 md:p-10 ${
        flip ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:flex-1">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#cf8605] text-xl text-white">
            <FaGem />
          </div>
          <div>
            <h3 className="text-xl font-extrabold leading-snug text-[#232638] md:text-2xl">
              {title}
            </h3>
          </div>
        </div>

        <BulletList items={bodyLines} />
      </div>

      <div className="md:flex-1">
        <div className="h-[220px] w-full overflow-hidden rounded-3xl bg-linear-to-br from-[#d9c8ef] via-[#f8effa] to-[#ffe7c2] shadow-sm md:h-[260px]">
          <div className="h-full w-full bg-[#232638]/10" />
        </div>
      </div>
    </div>
  );
}

export default function FranchiseLegacySection() {
  return (
    <section className="bg-[#f6f1e4] py-18">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-[#232638] md:text-5xl">
            Partner with Excellence : Build a Legacy in Early Education
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5e6074] md:text-lg">
            Choosing the right preschool franchise is not just an investment - it
            is a statement of vision, values, and leadership.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          <FranchiseCard
            title="Partner with Excellence : Build a Legacy in Early Education"
            bodyLines={[
              "When you partner with Sylvvester, you align yourself with a name that stands for educational excellence, trust and",
              "refined learning experiences.",
              "Sylvvester don’t simply run preschools. We curate childhood.",
            ]}
          />

          <FranchiseCard
            flip
            title="A Curriculum Crafted with Purpose"
            bodyLines={[
              "Our meticulously designed curriculum blends:",
              "• International early-learning practices",
              "• Child psychology and neuroscience insights",
              "• Experiential, play-based and concept-driven learning",
              "Every child receives an education that nurtures intellect, confidence, creativity and emotional intelligence - creating a",
              "strong foundation for lifelong success.",
            ]}
          />

          <FranchiseCard
            title="A Brand Parents Aspire To"
            bodyLines={[
              "Our brand represents:",
              "• Trust. Prestige. Quality.",
              "• A refined learning environment",
              "• High standards in safety, pedagogy, and care",
              "• A reputation that commands confidence and loyalty",
              "This ensures faster enrolments, stronger word-of-mouth and long-term brand value in your city.",
            ]}
          />

          <FranchiseCard
            flip
            title="A Partnership, Not Just a Franchise"
            bodyLines={[
              "We offer:",
              "• End-to-end setup and launch consulting",
              "• Premium-quality academic and operational systems",
              "• Intensive leadership and teacher training programs",
              "• Ongoing strategic mentoring and performance support",
              "You operate with clarity, confidence and control, backed by a deeply experienced central team.",
            ]}
          />

          <FranchiseCard
            title="Designed for Sustainable Success"
            bodyLines={[
              "Our model is built to deliver:",
              "• High parent satisfaction",
              "",
              "• Strong retention and referrals",
              "• Operational excellence",
              "• Long-term profitability with purpose",
              "This is a future-ready education enterprise, not a short-term business.",
            ]}
          />

          <FranchiseCard
            flip
            title="For Those Who Seek to Build Something Exceptional"
            bodyLines={[
              "This partnership is ideal for leaders who:",
              "• Value quality over compromise",
              "• Seek brand distinction in their market",
              "• Want to create a respected institution",
              "• Believe in building a legacy, not just a venture",
            ]}
          />

          <FranchiseCard
            title="Begin Your Journey with a Brand That Reflects Your Vision"
            bodyLines={[
              "When you choose us, you choose:",
              "Elegance. Excellence. Trust. Impact. Growth.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

