import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildPageMetadata, getWebPageSchema } from "@/lib/seo";

const pageSeo = {
  title: "School Policies",
  description:
    "Read Sylvvester World School policies on safety, fees, parent communication, and preschool guidelines.",
  path: "/policies",
  keywords: ["preschool policies", "school safety policy", "admission and fee policy"],
};

export const metadata = buildPageMetadata(pageSeo);

export default function PoliciesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebPageSchema(pageSeo)),
        }}
      />
      <Header stripeColor="#ffffff" />

      <main className="bg-[#f8f2ff]">
        <section className="relative overflow-hidden bg-[#6a2ea1] py-14 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(214,181,255,0.24),transparent_34%),linear-gradient(125deg,#52207e_0%,#6a2ea1_50%,#9d55cf_100%)]" />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Policies
            </h1>
            <p className="mt-3 max-w-3xl text-base text-white/90 md:text-lg">
              Clear guidelines to support strong Parent-School collaboration and
              a safe, structured learning environment for every child.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8 md:py-16">
          <div className="space-y-8 rounded-3xl border border-[#e5d7f7] bg-white p-6 shadow-[0_10px_30px_rgba(73,34,122,0.08)] md:p-10">
            <div>
              <h2 className="text-2xl font-extrabold text-[#5b1c93] md:text-3xl">
                Rules and Regulations
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#433458]">
                Over the years, parents have become active contributors to their
                child&apos;s educational journey. Being the closest influence in a
                child&apos;s life, parents play a vital role in shaping their
                attitude towards learning. When families remain involved in
                school activities, children are more likely to develop
                curiosity, responsibility and a lifelong love for learning.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#433458]">
                To ensure smooth and effective Parent-School Collaboration, we
                request parents to kindly follow the guidelines mentioned below:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#433458] marker:text-[#6a2ea1]">
                <li>
                  Punctuality helps children develop strong time-management
                  skills. Please ensure your child arrives at school and is
                  picked up strictly as per the prescribed timings.
                </li>
                <li>
                  Remain connected with your child&apos;s school routine by
                  checking the school bag and diary daily for notices, circulars
                  or other instructions.
                </li>
                <li>
                  Inform the school in writing if your child is absent, helping
                  children learn responsibility and accountability.
                </li>
                <li>
                  Encourage your child to complete homework and class related
                  tasks regularly and independently.
                </li>
                <li>
                  If your child is unwell, please allow them adequate rest and
                  avoid sending them to school.
                </li>
                <li>
                  Parents are requested to motivate and ensure their child&apos;s
                  active participation in school activities, events and
                  competitions as they support overall development of children.
                </li>
                <li>
                  Stay informed about the upcoming school programs and events
                  through Monthly Curriculum and Planner attached in diary at
                  every month&apos;s beginning.
                </li>
                <li>
                  Regular attendance at Parent Teacher Meeting is essential to
                  understand your child&apos;s progress and areas for growth.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#5b1c93] md:text-2xl">
                Safety policies
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#433458]">
                As a home away from home, Little Leaders School is committed to
                ensuring the highest level of care and safety for every child.
                To help us maintain a secure and nurturing environment, we seek
                your active cooperation as parents.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#433458] marker:text-[#6a2ea1]">
                <li>
                  Kindly ensure that only authorized individuals come for your
                  child&apos;s pick-up and drop-off.
                </li>
                <li>
                  Support the school in helping your child learn and remember
                  important emergency contact numbers.
                </li>
                <li>
                  Partner with us in educating your child about personal safety,
                  including understanding the difference between appropriate and
                  inappropriate touch. The school regularly conducts
                  age-appropriate sessions to reinforce this awareness, and we
                  value your continued involvement at home.
                </li>
                <li>
                  Should you have any concerns or queries, please feel free to
                  communicate with the school. Your voice matters, and we are
                  always here to listen.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#5b1c93] md:text-2xl">
                Fee policies
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#433458] marker:text-[#6a2ea1]">
                <li>
                  School fees are required to be paid within the first week of
                  each quarter, i.e. between 1st and 7th of April, July,
                  October, and January.
                </li>
                <li>
                  Payments made after the 7th will attract a late fee penalty of
                  INR 10 per day until the dues are cleared.
                </li>
                <li>
                  If the fees remain unpaid till the last working day of the
                  month, the child&apos;s name will be removed from the school
                  records, and re-admission will be mandatory.
                </li>
                <li>
                  In case of withdrawal, parents must provide one month&apos;s
                  prior written notice. Failing this, one month&apos;s tuition fee
                  along with transport charges (if applicable) will be payable.
                </li>
                <li>All fees once paid are strictly non-refundable.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-[#5b1c93] md:text-2xl">
                Parent Interaction &amp; Communication Guidelines
              </h3>
              <ol className="mt-4 list-decimal space-y-3 pl-6 text-base leading-relaxed text-[#433458] marker:font-semibold marker:text-[#6a2ea1]">
                <li>
                  Parents may meet school officials as per the schedule mentioned
                  below. Kindly adhere to the specified timings to ensure smooth
                  and effective communication:
                  <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-[#6a2ea1]">
                    <li>
                      Principal: On all working days, with prior appointment
                    </li>
                    <li>
                      Class Teacher: Monday to Wednesday (with prior appointment)
                    </li>
                    <li>Accounts Department: With prior appointment</li>
                    <li>
                      For admission related query: On all working days (9 am to 3
                      pm)
                    </li>
                  </ul>
                </li>
                <li>
                  Parents are requested not to visit classrooms directly to meet
                  teachers.
                </li>
                <li>
                  Casual visits to observe school activities are not permitted,
                  as they may disturb classroom teaching.
                </li>
                <li>
                  Parents must inform the school immediately of any change in
                  their residential address or contact numbers.
                </li>
                <li>
                  All written communication from parents/guardians should be
                  addressed to the Principal. The application must clearly
                  mention the student&apos;s name, address, contact number,
                  admission number, class and conveyance facility, if opted.
                </li>
                <li>
                  For inquiries related to fees, transport or other
                  administrative matters, parents may contact the concerned
                  department at 9799366138.
                </li>
                <li>
                  Requests for official documents from the school should be made
                  at least one week in advance, except for Transfer Certificates
                  (TC) and Report Cards.
                </li>
              </ol>
            </div>

            <div className="rounded-2xl border border-[#e8dcf8] bg-[#faf6ff] p-6">
              <h2 className="text-2xl font-extrabold text-[#5b1c93] md:text-3xl">
                6. Play School Admission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#433458]">
                Sylvvester World School is a trusted and well-known play school
                dedicated to the overall development of young children. Our kids&apos;
                friendly infrastructure, NCF 2023 aligned curriculum and high
                quality education make us stand out. Our aim is to build a
                strong academic base, nurture young minds and develop essential
                skills needed for the future. Through a balanced approach of
                activity-based and experiential learning, we encourage children
                to enjoy learning and grow with confidence.
              </p>
              <p className="mt-4 text-base font-semibold text-[#5b1c93]">
                Join hands with best preschool for your child.
              </p>
              <p className="mt-2 text-base leading-relaxed text-[#433458]">
                Every parent wishes to choose the best play school for their
                child. Understanding the admission age criteria is an important
                step before enrolment.
              </p>

              <div className="mt-6">
                <Link
                  href="/admission"
                  className="inline-flex items-center rounded-lg bg-linear-to-b from-[#9d55cf] to-[#6a2ea1] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-white shadow-[0_3px_0_#4f227f,0_8px_20px_rgba(73,34,122,0.28)] transition hover:brightness-105"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
