
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  House,
  ShieldCheck,
  Users,
  Clock3,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    number: "01",
    title: "Home & Community Based Services",
    shortName: "HCS",
    description:
      "Support designed to help individuals pursue personal goals, develop independence and participate in their communities.",
    href: "/hcs",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Healthcare professionals providing patient care",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Texas Home Living",
    shortName: "TxHmL",
    description:
      "Community-based support for eligible individuals living in their own homes or with their families.",
    href: "/txhml",
    image:
      "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Care professional providing personal support",
    icon: Users,
  },
  {
    number: "03",
    title: "Licensed Assisted Living Homes",
    shortName: "Assisted Living",
    description:
      "Person-centered residential care that supports daily living while respecting individual dignity and independence.",
    href: "/assisted-living",
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Comfortable and welcoming residential interior",
    icon: House,
  },
];

const commitments = [
  {
    title: "Optimal Independence",
    description:
      "Supporting individuals to reach their goals and participate in community life.",
    icon: Users,
  },
  {
    title: "Person-Centered Care",
    description:
      "Recognising each person's individual needs, strengths and preferences.",
    icon: HeartHandshake,
  },
  {
    title: "Safety & Well-Being",
    description:
      "Keeping dignity, personal safety and well-being at the centre of care.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Support",
    description:
      "Providing reliable, round-the-clock care and support.",
    icon: Clock3,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#F7F8F5]">
          <div className="container grid items-center gap-12 py-16 md:min-h-[650px] md:grid-cols-2 md:gap-8 md:py-20">
            <div className="relative z-10 max-w-[650px]">
              <span className="eyebrow">
                Universal Living Care Center
              </span>

              <h1 className="mt-7 text-5xl font-extrabold leading-[1.08] tracking-[-0.055em] text-[#1B365D] sm:text-6xl lg:text-[68px]">
                Empowering Independence
                <span className="text-[#387C44]">
                  {" "} & Quality Care
                </span>
                <span className="block">Across Texas</span>
              </h1>

              <p className="mt-7 max-w-[540px] text-base leading-8 text-slate-600 sm:text-lg">
                Community-Based Services (HCS & TxHmL) and Licensed
                Assisted Living Homes.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="primary-button">
                  Explore Our Services
                  <ArrowRight size={17} />
                </Link>

                <Link href="/contact" className="secondary-button">
                  Speak With Our Team
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Program Director
                  </p>
                  <p className="mt-1 font-bold text-[#1B365D]">
                    Tina Ojiaku
                  </p>
                </div>

                <div className="hidden h-9 w-px bg-slate-200 sm:block" />

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Call Our Team
                  </p>
                  <a
                    href="tel:+17134988039"
                    className="mt-1 block font-bold text-[#1B365D] transition hover:text-[#387C44]"
                  >
                    (713) 498-8039
                  </a>
                </div>
              </div>
            </div>

            {/* HEALTHCARE HERO IMAGE */}
            <div className="relative mx-auto w-full max-w-[600px] md:ml-auto">
              <div className="absolute -right-4 -top-4 hidden h-full w-full border-2 border-[#D99B26] md:block" />

              <div className="relative aspect-[5/4] overflow-hidden bg-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85"
                  alt="Healthcare professionals providing attentive patient care"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>

              <div className="absolute -bottom-5 left-4 max-w-[270px] bg-[#387C44] p-5 text-white shadow-lg sm:left-8">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                  Our Commitment
                </p>
                <p className="mt-2 text-lg font-bold leading-snug">
                  Care that respects dignity and encourages independence.
                </p>
              </div>
            </div>
          </div>

          {/* BRAND COLOUR STRIP */}
          <div className="flex h-1 w-full">
            <div className="w-1/3 bg-[#387C44]" />
            <div className="w-1/3 bg-[#D99B26]" />
            <div className="w-1/3 bg-[#A62B2B]" />
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="section-padding bg-white">
          <div className="container grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
              <span className="eyebrow">Care With Purpose</span>

              <h2 className="section-heading mt-5">
                Every individual deserves care that respects who they are.
              </h2>
            </div>

            <div>
              <p className="section-description">
                Universal Living Care Center is committed to making a
                difference in the lives of individuals with
                developmental/intellectual disabilities and related
                conditions by providing high-quality care in supportive
                environments that promote independence, ensuring each
                person's humanity and dignity are respected.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#387C44] transition hover:text-[#1B365D]"
              >
                Discover Our Mission
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-padding bg-[#F7F8F5]">
          <div className="container">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <span className="eyebrow">What We Do</span>

                <h2 className="section-heading mt-5">
                  Support for different needs and stages of life.
                </h2>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#387C44] transition hover:text-[#1B365D]"
              >
                View all services
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex gap-5 overflow-x-auto pb-5 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="group flex min-w-[280px] snap-start flex-col overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#387C44]/40 hover:shadow-xl md:min-w-0"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-7 sm:p-8">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold tracking-widest text-[#D99B26]">
                          {service.number}
                        </span>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1F5EF] text-[#387C44]">
                          <Icon size={23} strokeWidth={1.7} />
                        </div>
                      </div>

                      <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.13em] text-[#387C44]">
                        {service.shortName}
                      </p>

                      <h3 className="mt-3 text-xl font-bold leading-snug text-[#1B365D]">
                        {service.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-500">
                        {service.description}
                      </p>

                      <Link
                        href={service.href}
                        className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-[#1B365D] transition group-hover:text-[#387C44]"
                      >
                        Learn more
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR COMMITMENTS */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <span className="eyebrow">Our Commitments</span>

              <h2 className="section-heading mx-auto mt-5">
                The principles behind the care we provide.
              </h2>

              <p className="section-description mx-auto mt-5">
                Our approach is guided by the individual, with a focus on
                independence, dignity, safety and dependable support.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-9 sm:gap-9 lg:grid-cols-4">
              {commitments.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border-t-2 border-[#D99B26] pt-7"
                  >
                    <Icon
                      size={28}
                      strokeWidth={1.6}
                      className="text-[#387C44]"
                    />

                    <h3 className="mt-5 text-lg font-bold text-[#1B365D]">
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
          <div className="container flex flex-col justify-between gap-9 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="eyebrow !text-[#D99B26]">
                Let's Talk
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Looking for care and support for yourself or someone you love?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                Contact Universal Living Care Center to discuss our
                services and learn about the next steps.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 bg-[#387C44] px-7 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#D99B26] hover:text-[#1B365D]"
            >
              Contact Our Team
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
