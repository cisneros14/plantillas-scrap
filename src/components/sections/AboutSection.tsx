import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ImageN } from "../ui/image-with-skeleton";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog),
);

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl text-[var(--secondary)] font-bold tracking-tight sm:text-4xl">
              Sobre {siteConfig.business.name}
            </h2>
            <p className="text-lg text-muted-foreground">
              Somos tu mejor opción en tecnología para el hogar. Nos dedicamos a
              ofrecer los mejores televisores del mercado con precios
              competitivos y garantía real. Nuestra misión es llevar el
              entretenimiento de calidad a cada hogar ecuatoriano.
            </p>

            <div className="space-y-4">
              {[
                "Las mejores marcas del mundo",
                "Precios inigualables en Ecuador",
                "Garantía oficial de fábrica",
                "Atención personalizada y amable",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <ContactDialog />
          </div>

          {/* Placeholder for About Image - In a real app, use a real image */}
          <ImageN
            width={1000}
            height={1000}
            src="/logo.png"
            alt="about"
            className="w-full border object-cover h-[400px] lg:h-[400px] rounded-2xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
