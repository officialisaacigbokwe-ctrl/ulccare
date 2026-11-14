
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  LucideIcon,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export type ServiceDetailProps = {
  acronym: string;
  title: string;
  introduction: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  additionalInfo: string;
};

export default function ServiceDetail({
  acronym,
  title,
  introduction,
  description,
  icon: Icon,
  features,
  additionalInfo,
}: ServiceDetailProps) {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#1B365D] py-20 text-white md:py-28">
          <div className="container relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D99B26]">
              Our Services / {acronym}
            </span>

            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {introduction}
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex min-h-[52px] items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-bold text-[#1B365D] transition hover:bg-[#D99B26]"
            >
              Enquire About This Service
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -right-10 h-96 w-96 rounded-full border border-white/10" />
        </section>

        {/* Introduction */}
        <section className="section-padding">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Understanding the Service</span>

              <h2 className="section-heading mt-5">
                Support Designed Around Individual Needs
              </h2>

              <p className="section-description mt-5">
                {description}
              </p>
            </div>

            <div className="bg-[#F7F8F5] p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center bg-[#1B365D] text-white">
                <Icon size={27} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1B365D]">
                A Person-Centered Approach
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                Universal Living Care Center is committed to respecting
                each person's dignity, preferences and individual
                circumstances while supporting independence and well-being.
              </p>

              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#387C44] hover:text-[#1B365D]"
              >
                Learn About ULCC <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-[#F7F8F5]">
          <div className="container">
            <div className="max-w-2xl">
              <span className="eyebrow">Service Details</span>

              <h2 className="section-heading mt-5">
                Services and Support
              </h2>

              <p className="section-description mt-5">
                The following services are included in the information
                provided by Universal Living Care Center. Actual services
                depend on the applicable program, individual plan and
                availability.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 border border-[#E5EAE5] bg-white p-6 transition hover:border-[#387C44] hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#387C44]/10">
                    <CheckCircle2
                      size={19}
                      className="text-[#387C44]"
                    />
                  </div>

                  <div>
                    <span className="text-xs font-bold tracking-wider text-[#D99B26]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-sm font-semibold leading-6 text-[#1B365D]">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 border-l-4 border-[#D99B26] bg-white p-6">
              <p className="text-sm leading-7 text-slate-600">
                {additionalInfo}
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding">
          <div className="container">
            <div className="flex flex-col gap-8 bg-[#1B365D] p-8 text-white md:flex-row md:items-center md:justify-between md:p-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D99B26]">
                  Let's Talk
                </span>

                <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl">
                  Would You Like to Know More About {acronym}?
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  Contact Universal Living Care Center to discuss the
                  service, ask questions and understand possible next steps.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 bg-white px-6 text-sm font-bold text-[#1B365D] transition hover:bg-[#D99B26]"
                >
                  Contact Us <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:+17134988039"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 border border-white/30 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Phone size={16} />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="compact" />
    </>
  );
}
