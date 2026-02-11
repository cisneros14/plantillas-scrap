import { siteConfig } from "@/config/site";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export function ValuePropositionSection() {
  return (
    <section className="bg-white dark:bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            ¿Por qué elegir {siteConfig.business.name}?
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.value_proposition.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.value_proposition.items.map((prop, index) => {
            const IconComponent =
              (Icons[prop.icon as keyof typeof Icons] as LucideIcon) ||
              Icons.HelpCircle;

            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 md:p-6 rounded-2xl bg-background border border-gray-200 dark:bg-neutral-900 shadow dark:border-neutral-700  dark:hover:bg-neutral-700 transition-colors duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-primary/70 flex items-center justify-center mb-6 text-primary">
                  <IconComponent className="h-6 w-6 dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
                <p className="text-muted-foreground">{prop.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
