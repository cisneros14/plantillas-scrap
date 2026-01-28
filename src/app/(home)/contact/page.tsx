import dynamic from "next/dynamic";
import { Metadata } from "next";

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contacto",
  description:
    "Ponte en contacto con nosotros. Estamos aquí para responder tus preguntas.",
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
