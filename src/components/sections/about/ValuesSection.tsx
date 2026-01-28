import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ValuesSection() {
  const values = [
    {
      title: "Misión",
      description:
        "Empoderar a empresas de todos los tamaños con herramientas digitales accesibles, potentes y personalizadas.",
      icon: Target,
    },
    {
      title: "Visión",
      description:
        "Ser el referente líder en transformación digital, reconocidos por nuestra innovación y calidad humana.",
      icon: Eye,
    },
    {
      title: "Valores",
      description:
        "Integridad, pasión por la excelencia, aprendizaje continuo y un profundo respeto por nuestros clientes y equipo.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nuestros Pilares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lo que nos impulsa cada día a ser mejores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <Card
              key={index}
              className="text-center border-none shadow-md hover:shadow-lg transition-shadow bg-muted/20"
            >
              <CardHeader>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
