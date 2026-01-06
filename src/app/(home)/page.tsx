import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import Hero from "@/components/hero";

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
