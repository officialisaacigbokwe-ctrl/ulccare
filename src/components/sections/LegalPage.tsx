
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  introduction: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  introduction,
  sections,
}: LegalPageProps) {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="relative overflow-hidden bg-[#1B365D] py-16 text-white md:py-24">
          <div className="container relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D99B26]">
              Universal Living Care Center
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/75 md:text-base">
              {introduction}
            </p>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -right-10 h-96 w-96 rounded-full border border-white/10" />
        </section>

        {/* Legal Content */}
        <section className="section-padding">
          <div className="container max-w-4xl">
            <div className="mb-10 border-b border-slate-200 pb-6">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Document Information
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Last updated: November 2026
              </p>
            </div>

            <div className="space-y-10 md:space-y-12">
              {sections.map((section, index) => (
                <section
                  key={section.heading}
                  className="scroll-mt-28"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#387C44]/10 text-sm font-bold text-[#387C44]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <h2 className="text-lg font-bold leading-7 text-[#1B365D] md:text-xl">
                        {section.heading}
                      </h2>

                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraphIndex}
                            className="text-sm leading-8 text-slate-600"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* Contact Information */}
            <div className="mt-14 border-t border-slate-200 pt-8">
              <h2 className="text-lg font-bold text-[#1B365D]">
                Need Further Information?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                If you have questions about this information, contact
                Universal Living Care Center.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:gap-6">
                <a
                  href="mailto:ojiakucl09@yahoo.com"
                  className="text-sm font-semibold text-[#387C44] hover:text-[#1B365D]"
                >
                  ojiakucl09@yahoo.com
                </a>

                <a
                  href="tel:+17134988039"
                  className="text-sm font-semibold text-[#387C44] hover:text-[#1B365D]"
                >
                  (713) 498-8039
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
