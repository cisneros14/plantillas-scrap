import { AboutHero } from "@/components/sections/about/AboutHero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.pages.about.title,
  description: siteConfig.pages.about.description,
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
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <FAQSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
