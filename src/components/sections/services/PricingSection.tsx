import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PricingSection() {
  const plans = siteConfig.pricing || [];

  if (plans.length === 0) return null;

  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {siteConfig.services_page.pricing.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {siteConfig.services_page.pricing.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map(
            (
              plan: {
                name: string;
                description: string;
                price: string;
                features: string[];
                cta: string;
                popular: boolean;
              },
              index: number,
            ) => (
              <Card
                key={index}
                className={`flex flex-col relative ${
                  plan.popular
                    ? "border-primary shadow-lg scale-105 z-10"
                    : "border-border shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full shadow-sm">
                      Más Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Consultar" && (
                      <span className="text-muted-foreground">/proyecto</span>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
