
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Users,
  Clock3,
  Target,
  HandHeart,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const commitments = [
  {
    number: "01",
    title: "Optimal Independence",
    description:
      "Support individuals to reach optimal independence and full community integration.",
    icon: Target,
  },
  {
    number: "02",
    title: "Person-Centered Care",
    description:
      "Deliver tailored care matching unique needs, strengths, and personal preferences.",
    icon: HeartHandshake,
  },
  {
    number: "03",
    title: "Safety & Well-Being",
    description:
      "Guarantee maximum safety, dignity, and personal well-being at all times.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Continuous Support",
    description:
      "Provide reliable, round-the-clock 24-hour care and continuous support.",
    icon: Clock3,
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#F7F8F5] py-24 md:py-32">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border-[45px] border-[#387C44]/5" />
        <div className="container relative">
          <span className="eyebrow">Who We Are</span>

          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[1.12] tracking-[-0.05em] text-[#1B365D] md:text-6xl">
            Care that recognises the
            <span className="text-[#387C44]"> person,</span> not just the need.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            Learn about Universal Living Care Center, our mission and the
            principles that guide our approach to quality care and support.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-sm font-medium text-slate-500">
            <a href="/" className="hover:text-[#387C44]">Home</a>
            <span>/</span>
            <span className="text-[#1B365D]">About Us</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section-padding bg-white">
        <div className="container grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow">Our Organisation</span>
            <h2 className="section-heading mt-5">
              Universal Living Care Center
            </h2>
            <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-[#387C44]">
              We Stand Out Above The Rest
            </p>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              Universal Living Care Center is committed to making a difference
              in the lives of individuals with developmental/intellectual
              disabilities and related conditions by providing high-quality
              care in supportive environments that promote independence,
              ensuring each person's humanity and dignity are respected.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Our approach places the individual at the centre of care. We
              recognise that each person has their own needs, strengths,
              preferences and personal goals.
            </p>

            <div className="mt-8 border-l-4 border-[#D99B26] bg-[#F7F8F5] p-6">
              <p className="text-lg font-semibold leading-8 text-[#1B365D]">
                Our commitment is to support people in living with dignity,
                developing independence and remaining connected to their
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#1B365D] py-20 text-white">
        <div className="container grid gap-10 md:grid-cols-[0.6fr_1.4fr] md:items-center">
          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 text-[#D99B26]">
              <HandHeart size={31} strokeWidth={1.5} />
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#D99B26]">
              Our Mission
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-snug tracking-tight md:text-4xl">
              Making a meaningful difference through supportive environments,
              quality care and respect for every individual.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/65">
              We are committed to promoting independence while ensuring that
              each person's humanity and dignity remain respected.
            </p>
          </div>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="section-padding bg-[#F7F8F5]">
        <div className="container">
          <div className="max-w-2xl">
            <span className="eyebrow">What Guides Us</span>
            <h2 className="section-heading mt-5">
              Four commitments at the heart of our care.
            </h2>
            <p className="section-description mt-5">
              These core goals shape how Universal Living Care Center
              approaches individual support and well-being.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {commitments.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="border border-slate-200 bg-white p-8 transition hover:border-[#387C44]/40 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-[#D99B26]">
                      {item.number}
                    </span>
                    <Icon size={27} strokeWidth={1.6} className="text-[#387C44]" />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#1B365D]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="section-padding bg-white">
        <div className="container flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="eyebrow">How We Support</span>
            <h2 className="section-heading mt-5">
              Different services. One commitment to quality care.
            </h2>
            <p className="section-description mt-5">
              Explore our community-based services and residential support
              options to learn more about the care we provide.
            </p>
          </div>

          <a href="/services" className="primary-button shrink-0">
            Explore Our Services <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#F7F8F5] py-16">
        <div className="container flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#1B365D] md:text-3xl">
              Have questions about our organisation?
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              Contact our team to learn more about Universal Living Care Center.
            </p>
          </div>

          <a href="/contact" className="primary-button shrink-0">
            Contact Us <ArrowRight size={17} />
          </a>
        </div>
      </section>

      
      <Footer variant="compact" />
    </main>
  );
}
