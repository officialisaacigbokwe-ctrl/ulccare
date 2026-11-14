
import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Accessibility information for the Universal Living Care Center website.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      introduction="Universal Living Care Center aims to make its website accessible and usable by as many people as possible, including individuals who use assistive technologies."
      sections={[
        {
          heading: "1. Our Commitment",
          paragraphs: [
            "We aim to present website information in a clear, readable and organized manner and to make the website usable across common desktop, tablet and mobile devices.",
            "Accessibility is an ongoing process. We will continue reviewing the website and making improvements where reasonably possible.",
          ],
        },
        {
          heading: "2. Accessibility Features",
          paragraphs: [
            "The website is being developed with responsive layouts, readable text, structured headings, descriptive links and keyboard-accessible navigation in mind.",
            "Images and interactive elements should include appropriate alternative text or accessible labels where needed.",
          ],
        },
        {
          heading: "3. Ongoing Improvements",
          paragraphs: [
            "We recognize that some parts of a website may not yet meet every accessibility need. We welcome feedback that helps us identify and address barriers.",
            "This statement is not a claim of formal certification or full compliance with a particular accessibility standard.",
          ],
        },
        {
          heading: "4. Contact Us About Accessibility",
          paragraphs: [
            "If you experience difficulty accessing information on this website, please contact us so that we can understand the issue and discuss an alternative way to provide the information.",
            "Email: ojiakucl09@yahoo.com. Phone: (713) 498-8039.",
          ],
        },
      ]}
    />
  );
}
