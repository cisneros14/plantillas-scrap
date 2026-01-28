import { siteConfig } from "@/config/site";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export function ProcessSection() {
  const processes = siteConfig.process || [];

  if (processes.length === 0) return null;

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un enfoque estructurado y transparente para garantizar el éxito de
            tu proyecto.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map(
              (
                step: { title: string; description: string; icon: string },
                index: number,
              ) => {
                const IconComponent =
                  (Icons[step.icon as keyof typeof Icons] as LucideIcon) ||
                  Icons.CircleDot;

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center bg-background"
                  >
                    <div className="relative mb-6">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg z-10">
                        <IconComponent className="h-10 w-10" />
                      </div>
                      {/* Number badge */}
                      <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background font-bold border-4 border-background">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
