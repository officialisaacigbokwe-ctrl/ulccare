
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  HandHeart,
  ShieldCheck,
  Phone,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Resources | Eligibility, Payment and Advocacy",
  description:
    "Find information about program eligibility, payment options, individual rights and advocacy at Universal Living Care Center.",
};

const eligibilityItems = [
  "Formal determination of intellectual disability or a recognized related condition.",
  "Established eligibility for Medicare and Supplemental Security Income (SSI).",
  "A valid and current Individual Plan of Care (IPC).",
  "Formal election of the HCS Program over ICF/IID institutional placement.",
];

const paymentOptions = [
  {
    title: "Medicare",
    description:
      "Medicare is listed among the payment options provided in the organization's materials. Contact the team to confirm applicable coverage.",
  },
  {
    title: "Medicaid Waiver Programs",
    description:
      "The organization identifies Medicaid Waiver programs as a payment option for applicable services.",
  },
  {
    title: "Private Pay",
    description:
      "Private payment options may be available. Contact the organization to discuss arrangements and applicable costs.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#1B365D] py-20 text-white md:py-28">
          <div className="container">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D99B26]">
              Helpful Information
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Information to Help You Make Informed Decisions.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Explore information about program eligibility, payment
              options, individual rights and advocacy.
            </p>
          </div>
        </section>

        {/* Eligibility */}
        <section id="eligibility" className="section-padding">
          <div className="container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="eyebrow">Program Information</span>

              <h2 className="section-heading mt-5">
                Understanding HCS Eligibility
              </h2>

              <p className="section-description mt-5">
                The following eligibility information was supplied in
                Universal Living Care Center's program materials. Individual
                eligibility is determined through the appropriate program
                processes and authorities.
              </p>

              <Link
                href="/contact"
                className="primary-button mt-8"
              >
                Discuss Eligibility <ArrowRight size={17} />
              </Link>
            </div>

            <div className="bg-[#F7F8F5] p-7 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center bg-[#1B365D] text-white">
                  <FileCheck2 size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#1B365D]">
                  HCS Eligibility Information
                </h3>
              </div>

              <div className="mt-8 space-y-6">
                {eligibilityItems.map((item, index) => (
                  <div key={item} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#387C44]/10 text-sm font-bold text-[#387C44]">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 border-t border-slate-200 pt-5 text-xs leading-6 text-slate-500">
                This is a summary of information supplied by the
                organization, not an official eligibility determination.
                Program requirements should be confirmed with the relevant
                Texas program authority.
              </p>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section id="payment" className="section-padding bg-[#F7F8F5]">
          <div className="container">
            <div className="max-w-2xl">
              <span className="eyebrow">Payment Information</span>
              <h2 className="section-heading mt-5">
                Understanding Payment Options
              </h2>
              <p className="section-description mt-5">
                The organization's materials identify the following
                payment options. Coverage and payment arrangements depend
                on the service, individual circumstances and applicable
                program requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {paymentOptions.map((option, index) => (
                <div
                  key={option.title}
                  className="border border-[#E5EAE5] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-[#1B365D] text-white">
                    {index === 0 && <CreditCard size={22} />}
                    {index === 1 && <HandHeart size={22} />}
                    {index === 2 && <ShieldCheck size={22} />}
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#1B365D]">
                    {option.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {option.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-between gap-5 border-l-4 border-[#D99B26] bg-white p-6 md:flex-row md:items-center">
              <p className="max-w-2xl text-sm leading-7 text-slate-600">
                Have questions about costs, coverage or payment
                arrangements? Speak directly with the organization before
                making a decision.
              </p>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#387C44]"
              >
                Ask About Payment <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Rights and advocacy */}
        <section id="rights" className="section-padding">
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Rights & Advocacy</span>

              <h2 className="section-heading mt-5">
                Every Individual Deserves Respect and Dignity.
              </h2>

              <p className="section-description mt-5">
                Respect for each person's humanity, dignity, choices and
                well-being is central to the care philosophy of Universal
                Living Care Center.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Respect for individual dignity and personal preferences.",
                  "Support for independence and community participation.",
                  "Attention to individual well-being and personal safety.",
                  "Access to information about rights and advocacy.",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#387C44]"
                    />
                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1B365D] p-8 text-white md:p-10">
              <div className="flex h-14 w-14 items-center justify-center bg-white/10 text-[#D99B26]">
                <ShieldCheck size={27} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#D99B26]">
                Advocacy Contact
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Consumer Services & Rights Protection
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                The organization's supplied materials list the following
                rights and advocacy contact.
              </p>

              <div className="mt-8 border-t border-white/15 pt-6">
                <p className="text-sm text-white/60">
                  Listed toll-free number
                </p>

                <a
                  href="tel:18002528154"
                  className="mt-2 inline-flex items-center gap-3 text-2xl font-bold text-white transition hover:text-[#D99B26]"
                >
                  <Phone size={22} />
                  1-800-252-8154
                </a>

                <p className="mt-5 text-xs leading-6 text-white/50">
                  The contact name and telephone number are reproduced
                  from the materials supplied for this website. Their
                  current accuracy and applicability must be confirmed
                  before publication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#F7F8F5] py-20">
          <div className="container text-center">
            <span className="eyebrow">Need More Information?</span>

            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#1B365D] md:text-4xl">
              Our Team Is Available to Discuss Your Questions.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Contact Universal Living Care Center to learn more about
              its services, program information and next steps.
            </p>

            <Link
              href="/contact"
              className="primary-button mt-8"
            >
              Contact Us <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer variant="compact" />
    </>
  );
}
