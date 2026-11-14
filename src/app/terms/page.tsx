
import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Universal Living Care Center website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Website Terms of Use"
      introduction="These terms describe the general conditions for accessing and using the Universal Living Care Center website."
      sections={[
        {
          heading: "1. Website Information",
          paragraphs: [
            "The information on this website is provided for general informational purposes about Universal Living Care Center and the services described by the organization.",
            "Website content is not a substitute for an individual assessment, professional advice, an official eligibility determination or a formal service agreement.",
          ],
        },
        {
          heading: "2. No Guarantee of Service Availability",
          paragraphs: [
            "Descriptions of programs and services do not guarantee that a particular service is available in every location or suitable for every individual.",
            "Service availability, eligibility, coverage and arrangements must be discussed directly with the organization and, where applicable, the relevant program authority.",
          ],
        },
        {
          heading: "3. Appropriate Website Use",
          paragraphs: [
            "Visitors agree not to misuse the website, attempt unauthorized access, interfere with its operation or use the website to submit unlawful, harmful or misleading material.",
          ],
        },
        {
          heading: "4. External Links",
          paragraphs: [
            "Links to external websites are provided for convenience or additional information. Universal Living Care Center is not responsible for the content, availability or practices of external websites.",
          ],
        },
        {
          heading: "5. Accuracy and Changes",
          paragraphs: [
            "The organization may update website content from time to time. Although reasonable care should be taken to keep information accurate, visitors should contact the organization to confirm current service details and arrangements.",
          ],
        },
        {
          heading: "6. Intellectual Property",
          paragraphs: [
            "Unless otherwise stated, website text, branding, design elements and other materials created for the organization are intended for its use. Visitors may not reproduce or commercially use protected materials without appropriate permission.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            "For questions about these terms or use of this website, contact Universal Living Care Center at ojiakucl09@yahoo.com or (713) 498-8039.",
          ],
        },
      ]}
    />
  );
}
