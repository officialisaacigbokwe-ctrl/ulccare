
import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for visitors to the Universal Living Care Center website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      introduction="This page explains how information may be handled when you visit the Universal Living Care Center website or contact the organization through its published contact details."
      sections={[
        {
          heading: "1. Information You Provide",
          paragraphs: [
            "You may choose to provide information such as your name, email address, telephone number and the contents of an enquiry when contacting the organization.",
            "Please do not submit sensitive medical information, government identification numbers, financial account details or private health records through the website's general enquiry form.",
          ],
        },
        {
          heading: "2. How Information May Be Used",
          paragraphs: [
            "Information you voluntarily provide may be used to respond to your enquiry, communicate with you, provide information about services or follow up on a request.",
            "The website's current enquiry form prepares a message in your email application. It does not itself transmit or store the information on a website server.",
          ],
        },
        {
          heading: "3. Information Sharing",
          paragraphs: [
            "Personal information should only be accessed or shared by the organization where appropriate for responding to an enquiry, providing a requested service, meeting a legal obligation or another permitted purpose.",
            "The organization should review its actual business practices and applicable legal obligations before publishing a final statement about information sharing.",
          ],
        },
        {
          heading: "4. Cookies and Website Technologies",
          paragraphs: [
            "The website may use essential technologies required for its operation. If analytics, advertising, embedded third-party services or additional tracking technologies are introduced, this policy should be updated to explain them.",
          ],
        },
        {
          heading: "5. External Websites",
          paragraphs: [
            "The website may contain links to external websites. Universal Living Care Center does not control the privacy practices or content of those third-party websites.",
          ],
        },
        {
          heading: "6. Data Security and Retention",
          paragraphs: [
            "Reasonable safeguards should be used to protect personal information handled by the organization. Information should only be retained for as long as necessary for the purpose for which it was collected or as required by applicable law.",
            "This website page does not by itself establish that the organization or its systems are HIPAA compliant. Any applicable privacy and security obligations should be reviewed separately.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [
            "For questions about privacy or information submitted to the organization, contact Universal Living Care Center at ojiakucl09@yahoo.com or (713) 498-8039.",
          ],
        },
      ]}
    />
  );
}
