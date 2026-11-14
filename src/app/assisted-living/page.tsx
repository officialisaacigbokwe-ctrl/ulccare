
import type { Metadata } from "next";
import { House } from "lucide-react";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Assisted Living Homes",
  description:
    "Learn about assisted living services and residential support at Universal Living Care Center.",
};

export default function AssistedLivingPage() {
  return (
    <ServiceDetail
      acronym="Assisted Living"
      title="Assisted Living Homes"
      introduction="Person-centered residential living designed to support individuals who need assistance with daily activities while preserving their independence, dignity and quality of life."
      description="Universal Living Care Center's supplied materials describe assisted living homes for seniors and young adults who may need daily living assistance. The approach emphasizes supportive residential environments, individual service planning and opportunities for social connection."
      icon={House}
      features={[
        "24/7 Trained Staffing Coverage",
        "Customized Individual Service Plans (ISP)",
        "Three Nutritious Meals Daily Plus Healthy Snacks",
        "Housekeeping and Laundry Services",
        "Medication Management",
        "In-Home Social Activities and Resident Meetings",
        "Dedicated Medical Transportation",
      ]}
      additionalInfo="Specific residential arrangements, licensing, services, admission requirements and availability should be confirmed directly with Universal Living Care Center before making a placement decision."
    />
  );
}
