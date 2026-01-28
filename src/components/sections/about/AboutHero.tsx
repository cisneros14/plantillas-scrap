import { Badge } from "@/components/ui/badge";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-16">
      <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary via-background to-background"></div>
      <div className="container px-4 mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Nuestra Historia
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Impulsando el futuro de <br className="hidden sm:inline" />
          <span className="text-primary">Tu Negocio</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Conoce a las personas y los valores que hacen posible nuestra misión
          de transformar ideas en realidades digitales exitosas.
        </p>
      </div>
    </section>
  );
}
