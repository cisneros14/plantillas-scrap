import { ServicesHero } from "@/components/sections/services/ServicesHero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.pages.services.title,
  description: siteConfig.pages.services.description,
};

// Dynamic imports for optimized loading
const DetailedServiceList = dynamic(
  () =>
    import("@/components/sections/services/DetailedServiceList").then(
      (mod) => mod.DetailedServiceList,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const ProcessSection = dynamic(
  () =>
    import("@/components/sections/services/ProcessSection").then(
      (mod) => mod.ProcessSection,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const PricingSection = dynamic(
  () =>
    import("@/components/sections/services/PricingSection").then(
      (mod) => mod.PricingSection,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const CTASection = dynamic(
  () =>
    import("@/components/sections/CTASection").then((mod) => mod.CTASection),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ServicesHero />
      <DetailedServiceList />
      <ProcessSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
