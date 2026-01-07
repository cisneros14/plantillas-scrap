import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import Hero from "@/components/hero";
import dynamic from "next/dynamic";

// Dynamic imports for below-the-fold sections
const CTASection = dynamic(
  () =>
    import("@/components/sections/CTASection").then((mod) => mod.CTASection),
  {
    loading: () => <div className="h-96 w-full bg-muted/20 animate-pulse" />,
  }
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (mod) => mod.TestimonialsSection
    ),
  {
    loading: () => <div className="h-96 w-full bg-muted/20 animate-pulse" />,
  }
);
const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
  {
    loading: () => <div className="h-96 w-full bg-muted/20 animate-pulse" />,
  }
);
const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (mod) => mod.ContactSection
    ),
  {
    loading: () => <div className="h-96 w-full bg-muted/20 animate-pulse" />,
  }
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      <ValuePropositionSection />
      <ServicesSection />
      <CTASection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
