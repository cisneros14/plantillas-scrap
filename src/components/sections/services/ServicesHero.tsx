import { Badge } from "@/components/ui/badge";

export function ServicesHero() {
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

      <div className="container relative px-4 mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          Nuestros Servicios
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Soluciones integrales para <br className="hidden sm:inline" />
          <span className="text-primary">Tu Crecimiento</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora nuestra gama completa de servicios diseñados para potenciar
          cada aspecto de tu negocio, desde la estrategia hasta la ejecución.
        </p>
      </div>
    </section>
  );
}
