import { ServicesHero } from "@/components/sections/services/ServicesHero";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "Descubre cómo podemos ayudarte a potenciar tu negocio con nuestros servicios especializados.",
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
      <CTASection />
      <ContactSection className="bg-background/50 border-none dark:bg-neutral-900/50" />
    </div>
  );
}
