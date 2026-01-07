import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog)
);

export function CTASection() {
  return (
    <section className="bg-blue-500/2">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          ¿Necesita Asesoría Legal Confiable?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Confíe en Y&L Estudios para proteger sus intereses y
          resolver sus conflictos con profesionalismo y eficacia.
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
