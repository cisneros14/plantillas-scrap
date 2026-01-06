import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          ¿Listo para transformar tu negocio?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Únete a cientos de clientes satisfechos que han confiado en{" "}
          {siteConfig.business.name} para llevar sus proyectos al siguiente
          nivel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}>
              Llamar ahora
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href="#contacto">Solicitar Presupuesto</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
