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
          ¿Listo para equipar tu hogar con lo mejor?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Descubre la calidad, tecnología y diseño que solo{" "}
          {siteConfig.business.name} puede ofrecerte. Productos exclusivos al
          mejor precio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}>
              Llamar ahora
            </a>
          </Button>
          <ContactDialog />
        </div>
      </div>
    </section>
  );
}
