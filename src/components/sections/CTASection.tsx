import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog),
);

export function CTASection() {
  return (
    <section className="">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          {siteConfig.cta.title}
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          {siteConfig.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}>
              {siteConfig.cta.buttonText}
            </a>
          </Button>
          <ContactDialog />
        </div>
      </div>
    </section>
  );
}
