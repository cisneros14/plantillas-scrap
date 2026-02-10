import dynamic from "next/dynamic";
import { Metadata } from "next";

import { constructMetadata } from "@/lib/seo";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: siteConfig.pages.contact.title,
  description: siteConfig.pages.contact.description,
});

// Reuse the exact same section from the home page
const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then(
      (mod) => mod.ContactSection,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

const ContactMap = dynamic(
  () =>
    import("@/components/sections/contact/ContactMap").then(
      (mod) => mod.ContactMap,
    ),
  {
    loading: () => <div className="h-96 w-full animate-pulse bg-muted/20" />,
  },
);

import { ContactHero } from "@/components/sections/contact/ContactHero";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ContactHero />
      <ContactSection />
      <ContactMap />
    </div>
  );
}
