import { AboutHero } from "@/components/sections/about/AboutHero";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce nuestra historia, misión y el equipo detrás de nuestros servicios.",
};

// Dynamic imports for optimized loading
const StorySection = dynamic(
  () =>
    import("@/components/sections/about/StorySection").then(
      (mod) => mod.StorySection,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const ValuesSection = dynamic(
  () =>
    import("@/components/sections/about/ValuesSection").then(
      (mod) => mod.ValuesSection,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (mod) => mod.TestimonialsSection,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const TeamSection = dynamic(
  () =>
    import("@/components/sections/about/TeamSection").then(
      (mod) => mod.TeamSection,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const FAQSection = dynamic(
  () =>
    import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
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

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollAnimationWrapper>
        <AboutHero />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <StorySection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <ValuesSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <FAQSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TestimonialsSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <TeamSection />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <CTASection />
      </ScrollAnimationWrapper>
    </div>
  );
}
