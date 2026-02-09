import { siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export function ValuesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {siteConfig.about.values.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.about.values.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.about.values.items.map((item, index) => {
            const IconComponent =
              (Icons[item.icon as keyof typeof Icons] as LucideIcon) ||
              Icons.HelpCircle;

            return (
              <Card
                key={index}
                className="text-center border-none shadow-md hover:shadow-lg transition-shadow bg-muted/20"
              >
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
