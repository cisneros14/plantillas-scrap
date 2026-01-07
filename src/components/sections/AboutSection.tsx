import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ImageN } from "../ui/image-with-skeleton";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() => import("../ContactDialog").then(mod => mod.ContactDialog));

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sobre {siteConfig.business.name}
            </h2>
            <p className="text-lg text-muted-foreground">
              Somos una empresa comprometida con la excelencia y la satisfacción
              del cliente. Con años de experiencia en el sector, ofrecemos
              soluciones personalizadas que se adaptan a tus necesidades
              específicas.
            </p>

            <div className="space-y-4">
              {[
                "Equipo altamente cualificado",
                "Atención personalizada 24/7",
                "Garantía de satisfacción",
                "Tecnología de vanguardia",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <ContactDialog/>
          </div>

          {/* Placeholder for About Image - In a real app, use a real image */}
          <ImageN
            width={1000}
            height={1000}
            src="/placeholder.webp"
            alt="about"
            className="w-full border object-cover h-[400px] lg:h-[400px] rounded-2xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
