import { Badge } from "@/components/ui/badge";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 L100 0 L100 100 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary via-background to-background"></div>

      <div className="container px-4 mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Contáctanos
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Estamos aquí para <br className="hidden sm:inline" />
          <span className="text-primary">Ayudarte</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o necesitas más información? Envíanos un
          mensaje o visítanos.
        </p>
      </div>
    </section>
  );
}
