
"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(
      `Website enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService of interest: ${service}\n\nMessage:\n${message}`
    );

    setSubmitted(true);

    window.location.href =
      `mailto:ojiakucl09@yahoo.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="bg-white p-7 shadow-sm md:p-10">
      <div className="mb-8">
        <span className="eyebrow">Send an Enquiry</span>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B365D]">
          How Can We Help?
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-500">
          Complete the form below to prepare an enquiry using your
          device’s email application.
        </p>
      </div>

      {submitted ? (
        <div className="border border-[#387C44]/20 bg-[#387C44]/5 p-6">
          <CheckCircle2 className="text-[#387C44]" size={30} />
          <h3 className="mt-4 font-bold text-[#1B365D]">
            Your email application should open
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Review the prepared message and send it from your email
            application. The enquiry is not sent automatically by this
            website.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1B365D]">
                Full Name *
              </label>
              <input
                name="name"
                required
                placeholder="Your full name"
                className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#387C44]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1B365D]">
                Email Address *
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#387C44]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1B365D]">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Your phone number"
              className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#387C44]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1B365D]">
              Service of Interest *
            </label>
            <select
              name="service"
              required
              defaultValue=""
              className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#387C44]"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Home and Community-Based Services (HCS)">
                Home and Community-Based Services (HCS)
              </option>
              <option value="Texas Home Living (TxHmL)">
                Texas Home Living (TxHmL)
              </option>
              <option value="Assisted Living">
                Assisted Living
              </option>
              <option value="General Enquiry">
                General Enquiry
              </option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1B365D]">
              Your Message *
            </label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="How can our team assist you?"
              className="w-full resize-y border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#387C44]"
            />
          </div>

          <p className="text-xs leading-6 text-slate-500">
            Please do not include sensitive medical information,
            identification numbers or private health records in this form.
          </p>

          <button
            type="submit"
            className="primary-button w-full sm:w-auto"
          >
            Prepare Email Enquiry <ArrowRight size={17} />
          </button>
        </form>
      )}
    </div>
  );
}
