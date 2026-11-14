
import type { Metadata } from "next";
import { Users } from "lucide-react";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Texas Home Living (TxHmL)",
  description:
    "Explore Texas Home Living services and community-based support through Universal Living Care Center.",
};

export default function TxHmLPage() {
  return (
    <ServiceDetail
      acronym="TxHmL"
      title="Texas Home Living"
      introduction="Community-based support designed to help eligible individuals live more independently in their own homes or family homes."
      description="Texas Home Living (TxHmL) is a Medicaid waiver program that provides essential community-based services to eligible individuals residing in their own homes or family homes. Its focus is to support daily living, community participation and individual development."
      icon={Users}
      features={[
        "Community Support Services",
        "Day Habilitation Services",
        "Respite Care",
        "Supported Employment",
      ]}
      additionalInfo="TxHmL services are subject to program eligibility, available service arrangements and applicable Texas requirements. Contact Universal Living Care Center for information about the services and next steps."
    />
  );
}
