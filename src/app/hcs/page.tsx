
import type { Metadata } from "next";
import { HeartHandshake } from "lucide-react";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Home and Community-Based Services (HCS)",
  description:
    "Learn about Home and Community-Based Services offered by Universal Living Care Center in Texas.",
};

export default function HCSPage() {
  return (
    <ServiceDetail
      acronym="HCS"
      title="Home and Community-Based Services"
      introduction="Supporting individuals with intellectual and developmental disabilities through services designed to encourage independence, personal growth and participation in their communities."
      description="Home and Community-Based Services (HCS) are designed to assist individuals in achieving personal goals for independent living. The program information supplied by Universal Living Care Center describes support for individuals across different ages, backgrounds and specialized needs."
      icon={HeartHandshake}
      features={[
        "Adaptive Aids and Minor Home Modifications",
        "Professional Nursing and Case Coordination",
        "Day Habilitation and Respite Care",
        "Residential Assistance",
        "Supported Home Living and Supervised Living",
        "Supported Employment",
        "Speech Therapy",
        "Psychological Services",
        "Audiology and Social Work",
        "Dental Treatment and Counseling Services",
        "Daily Grooming, Feeding and Personal Care Assistance",
        "Foster Care Supports",
      ]}
      additionalInfo="HCS participation is subject to program eligibility, individual planning and applicable Texas requirements. Contact the organization to discuss the program and confirm the appropriate eligibility process."
    />
  );
}
