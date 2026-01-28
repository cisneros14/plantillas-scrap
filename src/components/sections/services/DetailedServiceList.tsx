import { siteConfig } from "@/config/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { LucideIcon, ArrowRight } from "lucide-react";

export function DetailedServiceList() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const IconComponent =
              (Icons[service.icon as keyof typeof Icons] as LucideIcon) ||
              Icons.HelpCircle;

            return (
              <Card
                key={index}
                className="group border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="h-2 w-full bg-primary/80 group-hover:bg-primary transition-colors" />
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="group/btn p-0 hover:bg-transparent text-primary"
                  >
                    Más información
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
