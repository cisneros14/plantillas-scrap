import { Suspense } from "react";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import Hero from "@/components/hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";
import { ProductDemoSection } from "@/components/sections/ProductDemoSection";
import { CategorySection } from "@/components/sections/CategorySection";
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
      <ScrollAnimationWrapper>
        <Hero />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <CategorySection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <ProductDemoSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <ValuePropositionSection />
      </ScrollAnimationWrapper>

      {/* Streaming Content */}
      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimationWrapper>
          <ServicesSection />
        </ScrollAnimationWrapper>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimationWrapper>
          <CTASection />
        </ScrollAnimationWrapper>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimationWrapper>
          <AboutSection />
        </ScrollAnimationWrapper>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimationWrapper>
          <TestimonialsSection />
        </ScrollAnimationWrapper>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimationWrapper>
          <FAQSection />
        </ScrollAnimationWrapper>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ScrollAnimationWrapper>
          <ContactSection />
        </ScrollAnimationWrapper>
      </Suspense>
    </div>
  );
}
