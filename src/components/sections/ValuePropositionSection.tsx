import { siteConfig } from "@/config/site";
import { Shield, Target, Zap, Smile } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Precios Bajos",
    description:
      "Mejoramos cualquier cotización para cuidar tu economía. Los mejores precios del mercado.",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description:
      "Productos 100% originales con garantía oficial de fábrica para tu tranquilidad.",
  },
  {
    icon: Target,
    title: "Asesoría Experta",
    description:
      "Te guiamos personalmente para que elijas el televisor perfecto para tu espacio.",
  },
  {
    icon: Smile,
    title: "Compras Seguras",
    description:
      "Tu compra es segura con nosotros. Cientos de clientes satisfechos nos respaldan.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="py-24 bg-muted/60">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[var(--secondary)] tracking-tight sm:text-4xl mb-4">
            ¿Por qué elegir {siteConfig.business.name}?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nos diferenciamos por ofrecer un servicio integral que combina
            tecnología, experiencia y compromiso para impulsar tu crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-background shadow transition-colors duration-300"
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
