import { Suspense } from "react";
import Hero from "@/components/hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import dynamic from "next/dynamic";

// Dynamic imports for heavy below-the-fold sections
const CTASection = dynamic(
  () =>
    import("@/components/sections/CTASection").then((mod) => mod.CTASection),
  { loading: () => <SectionSkeleton /> },
);
const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (mod) => mod.TestimonialsSection,
    ),
  { loading: () => <SectionSkeleton /> },
);
const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
  { loading: () => <SectionSkeleton /> },
);
const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (mod) => mod.ContactSection,
    ),
  { loading: () => <SectionSkeleton /> },
);

function SectionSkeleton() {
  return (
    <div className="h-96 w-full bg-muted/20 animate-pulse my-12 rounded-lg" />
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Static Shell: Immediate LCP */}
      <Hero />
      <ValuePropositionSection />

      {/* Streaming Content */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
