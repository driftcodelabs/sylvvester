"use client";

import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Q1. What is the right age to join preschool ?",
    a: "Usually between 2 to 3 years, depending on the program.",
  },
  {
    q: "Q2. What are the school timings ?",
    a: "Mostly preschool duration is for 2.5 to 4 hours per day.",
  },
  {
    q: "Q3. What will my child learn in preschool ?",
    a: "Preschool is where child learn to love learning, gain confidence and develop foundation for lifelong success.",
  },
  {
    q: "Q4. Is my child safe in school ?",
    a: "Yes, safety measures, CCTV installed, secured entry and exit and child friendly infrastructure.",
  },
  {
    q: "Q5. Are teachers trained ?",
    a: "Yes, teachers are trained in Early Childhood Education and child handling.",
  },
  {
    q: "Q6. How many children are there in one class ?",
    a: "We follow 10:1 Student Teacher ratio, thereby ensuring small class size and individual attention to every child present in the class.",
  },
  {
    q: "Q7. What is teaching method ?",
    a: "Play way, Activity based and Child centred learning.",
  },
  {
    q: "Q8. Will my child get homework ?",
    a: "Very little or no homework depending on the grade child is into. Learning is mostly done through activities.",
  },
  {
    q: "Q9. What about toilet training and hygiene ?",
    a: "Teachers and caretaker support children in maintaining hygiene and habits.",
  },
  {
    q: "Q10. Do the school provide meals or snacks ?",
    a: "Meals and snacks are optional and provided to the children who opt for it.",
  },
  {
    q: "Q11. How is parent informed about child’s progress ?",
    a: "Through PTMs, reports, WhatsApp updates and regular feedback.",
  },
  {
    q: "Q12. What if child cries or does not adjust ?",
    a: "Teachers help child gradually settle with love, care and a settling period.",
  },
  {
    q: "Q13. What is the fee structure ?",
    a: "It depends on the program, facilities and duration.",
  },
  {
    q: "Q14. Can parent visit the school before admission ?",
    a: "Yes parent can visit the school before admission on prior appointment.",
  },
  {
    q: "Q15. Will the preschool prepare my child for big school ?",
    a: "Yes, absolutely! Preschool gently prepares your child for big school by building a strong foundation in confidence, independence and love for learning. Through play-based activities, stories, routines and social interaction, children learn how to listen, express themselves, follow instructions and work with others. More than letters and numbers, we help them develop curiosity, self belief, good habits and emotional strength – so when they step into big school, they don’t go prepared....... they go happy, confident and excited to learn.",
  },
  {
    q: "Q16. Does preschool offer after school activities ?",
    a: "Sylvvester World School have daycare facilities that offers different after-school activities. We have thoughtfully structured schedule tailored to a specific number of hours, designed to engage learners effectively while nurturing their curiosity and encouraging exploration of new concepts.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);
  const ids = useMemo(
    () =>
      faqs.map((_, i) => ({
        buttonId: `faq-btn-${i}`,
        panelId: `faq-panel-${i}`,
      })),
    []
  );

  return (
    <section className="bg-[#f8effa] py-18">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#a88a63]">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-extrabold leading-tight text-[#232638] md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#5e6074] md:text-base">
            Quick answers to common questions about preschool, learning approach and daily routine.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIdx;
            const { buttonId, panelId } = ids[idx];

            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border bg-white  shadow-sm transition ${
                  isOpen ? "border-[#d18109]/55" : "border-[#ece6f6]"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="text-base font-extrabold text-[#232638] md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#5b248f] transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <FaChevronDown />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-[#ece6f6] bg-white px-5 py-4 text-sm leading-relaxed text-[#5e6074] md:text-base">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

