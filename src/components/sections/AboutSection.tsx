import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ImageN } from "../ui/image-with-skeleton";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog)
);

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestro Fundador
            </h2>
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-primary">
                Dr. David Yumiceba
              </span>
              , abogado y mediador con más de 17 años de experiencia, lidera
              nuestra firma con una visión clara: ofrecer justicia accesible y
              soluciones efectivas.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Su práctica se caracteriza por un enfoque ético, responsable y
              orientado a la resolución de conflictos, priorizando siempre el
              bienestar del cliente. consensuadas.
            </p>

            <div className="space-y-4">
              {[
                "Ética y confidencialidad",
                "Trato humano y cercano",
                "Soluciones legales claras y efectivas",
                "Amplia experiencia y respaldo profesional",
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
            src="/david.png"
            alt="about"
            className="w-full border object-cover rounded-2xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
