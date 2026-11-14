
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Explore the Texas counties served by Universal Living Care Center.",
};

const counties = [
  "Harris County",
  "Fort Bend County",
  "Galveston County",
  "Brazoria County",
  "Colorado County",
  "Dallas County",
  "Denton County",
  "Austin-Travis County",
  "Matagorda County",
  "Wharton County",
  "Waller County",
];

export default function ServiceAreasPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#1B365D] py-24 text-white md:py-32">
          <div className="container relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D99B26]">
              Where We Serve
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Supporting Individuals and Families Across Texas
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Universal Living Care Center provides community-based support
              and assisted living services across selected counties in Texas.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-white px-7 py-4 text-sm font-bold text-[#1B365D] transition hover:bg-[#D99B26]"
            >
              Ask About Service Availability
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -bottom-40 -right-10 h-96 w-96 rounded-full border border-white/10" />
        </section>

        <section className="section-padding bg-[#F7F8F5]">
          <div className="container">
            <div className="max-w-2xl">
              <span className="eyebrow">Our Coverage</span>
              <h2 className="section-heading mt-5">
                Communities We Currently Serve
              </h2>
              <p className="section-description mt-5">
                Our stated service coverage includes the following Texas
                counties and surrounding areas. Contact our team to confirm
                availability for a particular service and location.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {counties.map((county) => (
                <div
                  key={county}
                  className="flex items-center gap-4 border border-[#E5EAE5] bg-white p-6 transition hover:border-[#387C44] hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#387C44]/10 text-[#387C44]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B365D]">{county}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Texas service area
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="eyebrow">Local Support</span>
              <h2 className="section-heading mt-5">
                Let’s Discuss Your Location and Care Needs
              </h2>
              <p className="section-description mt-5">
                Service availability may differ depending on the program,
                location and individual circumstances. Our team can help
                explain the services offered and discuss the next steps.
              </p>

              <Link
                href="/contact"
                className="primary-button mt-8"
              >
                Contact Our Team <ArrowRight size={17} />
              </Link>
            </div>

            <div className="bg-[#F7F8F5] p-8 md:p-10">
              <h3 className="text-xl font-bold text-[#1B365D]">
                What You Can Ask Us
              </h3>

              <div className="mt-7 space-y-5">
                {[
                  "Whether your county is within our service coverage",
                  "Which programs are available in your area",
                  "How to discuss eligibility and service requirements",
                  "What information may be needed to get started",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#387C44]"
                      size={20}
                    />
                    <p className="text-sm leading-7 text-slate-600">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="compact" />
    </>
  );
}
