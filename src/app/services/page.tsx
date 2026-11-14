
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  House,
  Users,
  Stethoscope,
  BriefcaseBusiness,
  Utensils,
  ShieldCheck,
  Activity,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    number: "01",
    acronym: "HCS",
    title: "Home & Community Based Services",
    description:
      "Support designed to help individuals with intellectual and developmental disabilities pursue personal goals, build independence and participate in their communities.",
    features: [
      "Adaptive Aids & Minor Home Modifications",
      "Professional Nursing & Case Coordination",
      "Day Habilitation & Respite Care",
      "Residential Assistance, Supported Home Living & Supervised Living",
      "Supported Employment",
      "Specialized Therapies and Social Work",
      "Dental Treatment & Counseling Services",
      "Daily Grooming, Feeding & Personal Care Assistance",
      "Foster Care Supports",
    ],
    href: "/hcs",
    icon: HeartHandshake,
  },
  {
    number: "02",
    acronym: "TxHmL",
    title: "Texas Home Living",
    description:
      "A Medicaid waiver program providing community-based services to eligible individuals living in their own homes or with their families.",
    features: [
      "Community Support Services",
      "Day Habilitation Services",
      "Respite Care",
      "Supported Employment",
    ],
    href: "/txhml",
    icon: Users,
  },
  {
    number: "03",
    acronym: "ASSISTED LIVING",
    title: "Licensed Assisted Living Homes",
    description:
      "Person-centered residential living for seniors and young adults who need assistance with daily activities while maintaining personal independence.",
    features: [
      "24/7 Trained Staffing Coverage",
      "Custom Individual Service Plans (ISP)",
      "Three Nutritious Meals Daily Plus Healthy Snacks",
      "Complete Housekeeping & Laundry Services",
      "Comprehensive Medication Management",
      "In-Home Social Activities & Resident Meetings",
      "Dedicated Medical Transportation",
    ],
    href: "/assisted-living",
    icon: House,
  },
];

const supportHighlights = [
  {
    icon: ShieldCheck,
    title: "Safety & Dignity",
    description: "Respectful support that places personal well-being at the centre.",
  },
  {
    icon: Activity,
    title: "Individual Goals",
    description: "Services shaped around personal needs, strengths and preferences.",
  },
  {
    icon: Stethoscope,
    title: "Coordinated Support",
    description: "A range of support services to address different individual needs.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F7F8F5] py-24 md:py-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[50px] border-[#387C44]/5" />

        <div className="container relative">
          <span className="eyebrow">Our Services</span>

          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.12] tracking-[-0.05em] text-[#1B365D] md:text-6xl">
            Support that puts
            <span className="text-[#387C44]"> people first.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Explore the community-based and residential services offered by
            Universal Living Care Center, designed to support individual
            independence, dignity and quality of life.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-sm font-medium text-slate-500">
            <a href="/" className="hover:text-[#387C44]">Home</a>
            <span>/</span>
            <span className="text-[#1B365D]">Our Services</span>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow">How We Help</span>
            <h2 className="section-heading mt-5">
              Three service areas. A commitment to individual care.
            </h2>
            <p className="section-description mt-5">
              Every service has its own focus and support structure. Explore
              each programme to understand the services and assistance
              available.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="grid overflow-hidden border border-slate-200 bg-white md:grid-cols-[0.75fr_1.25fr]"
                >
                  <div className="flex flex-col justify-between bg-[#1B365D] p-8 text-white md:p-10">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#D99B26]">
                          {service.number}
                        </span>
                        <Icon size={30} strokeWidth={1.5} className="text-[#D99B26]" />
                      </div>

                      <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-[#D99B26]">
                        {service.acronym}
                      </p>

                      <h3 className="mt-4 text-2xl font-bold leading-snug md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-sm leading-7 text-white/70">
                        {service.description}
                      </p>
                    </div>

                    <a
                      href={service.href}
                      className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#D99B26]"
                    >
                      Explore this service <ArrowUpRight size={17} />
                    </a>
                  </div>

                  <div className="p-8 md:p-10">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-[#387C44]">
                      Services and support include
                    </h4>

                    <div className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F1F5EF] text-[#387C44]">
                            <ArrowRight size={12} />
                          </span>
                          <p className="text-sm leading-6 text-slate-600">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section-padding bg-[#F7F8F5]">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Approach</span>
            <h2 className="section-heading mt-5">
              What matters in every aspect of care.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {supportHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t-2 border-[#D99B26] bg-white p-8">
                  <Icon size={29} strokeWidth={1.6} className="text-[#387C44]" />
                  <h3 className="mt-6 text-lg font-bold text-[#1B365D]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#1B365D] py-20 text-white">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D99B26]">
              Need More Information?
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-4xl">
              Let's discuss the services and support you are looking for.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Reach out to our team to discuss your questions and possible
              next steps.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 bg-white px-7 text-sm font-bold text-[#1B365D] transition hover:bg-[#D99B26]"
          >
            Contact Our Team <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <Footer variant="compact" />
    </main>
  );
}
