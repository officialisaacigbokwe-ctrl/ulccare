
import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Universal Living Care Center to enquire about HCS, TxHmL and assisted living services in Texas.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#1B365D] py-20 text-white md:py-28">
          <div className="container">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D99B26]">
              Contact Universal Living Care Center
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              We’re Here to Help You Take the Next Step.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Have a question about our programs or services? Get in touch
              with our team to discuss your enquiry.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#F7F8F5]">
          <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="eyebrow">Get in Touch</span>

              <h2 className="section-heading mt-5">
                Contact Information
              </h2>

              <p className="section-description mt-5">
                Reach out to Universal Living Care Center using the
                contact details below.
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#1B365D] text-white">
                    <MapPin size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D]">
                      Office Address
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      15722 Amapola Drive,
                      <br />
                      Houston, TX 77083
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#387C44] text-white">
                    <Phone size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D]">
                      Phone
                    </h3>
                    <a
                      href="tel:+17134988039"
                      className="mt-2 block text-sm text-slate-600 hover:text-[#387C44]"
                    >
                      (713) 498-8039
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#A62B2B] text-white">
                    <Mail size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D]">
                      Email
                    </h3>
                    <a
                      href="mailto:ojiakucl09@yahoo.com"
                      className="mt-2 block break-all text-sm text-slate-600 hover:text-[#387C44]"
                    >
                      ojiakucl09@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#D99B26] text-white">
                    <Printer size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D]">
                      Fax
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      (281) 561-7592
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-200 bg-white text-[#1B365D]">
                    <Clock size={21} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1B365D]">
                      Program Director
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      Tina Ojiaku
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=15722+Amapola+Drive+Houston+TX+77083"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 text-sm font-bold text-[#387C44] hover:text-[#1B365D]"
              >
                Find our office <ArrowUpRight size={16} />
              </a>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer variant="compact" />
    </>
  );
}
