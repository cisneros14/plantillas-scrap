import { siteConfig } from "@/config/site";
import { Shield, Target, Zap, Smile } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Entrega Inmediata",
    description:
      "Recibe tus productos en tiempo récord. Contamos con stock disponible para envío inmediato.",
  },
  {
    icon: Shield,
    title: "Garantía Oficial",
    description:
      "Todos nuestros productos cuentan con garantía directa de fábrica. Compra con total confianza.",
  },
  {
    icon: Target,
    title: "Asesoría Experta",
    description:
      "¿Dudas? Nuestro equipo de expertos te ayudará a elegir el electrodoméstico perfecto para ti.",
  },
  {
    icon: Smile,
    title: "Atención Post-Venta",
    description:
      "Estamos contigo incluso después de tu compra. Soporte técnico y atención dedicada.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="bg-muted/60">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            ¿Por qué elegir {siteConfig.business.name}?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos diferenciamos por ofrecer los mejores electrodomésticos
            importados, con precios competitivos y un servicio que prioriza tu
            satisfacción.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-gray-200 dark:bg-neutral-900 shadow dark:border-neutral-700  dark:hover:bg-neutral-700 transition-colors duration-300"
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
