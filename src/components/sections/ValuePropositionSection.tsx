import { siteConfig } from "@/config/site";
import { Shield, Target, Heart, Award } from "lucide-react";

const valueProps = [
  {
    icon: Shield,
    title: "Ética y Confidencialidad",
    description:
      "Manejo responsable y reservado de su información, garantizando la máxima discreción en cada caso.",
  },
  {
    icon: Heart,
    title: "Trato Humano",
    description:
      "Acompañamiento cercano y personalizado, entendiendo las necesidades específicas de cada cliente.",
  },
  {
    icon: Target,
    title: "Soluciones Efectivas",
    description:
      "Enfoque orientado a resultados claros y resolución de conflictos de manera ágil.",
  },
  {
    icon: Award,
    title: "Experiencia",
    description:
      "Más de 17 años de trayectoria profesional y liderazgo en estudios jurídicos respaldan nuestro servicio.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="py-24 bg-blue-500/2">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            ¿Por qué elegir Y&L Estudios?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos diferenciamos por ofrecer un servicio jurídico integral basado
            en valores sólidos y resultados comprobados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border transition-colors duration-300"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <prop.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{prop.title}</h3>
              <p className="text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
