import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-20">
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">
              Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.1] tracking-tight">
            Importadores Directos de las Mejores Marcas para tu Hogar
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
            ¿Buscas calidad y buen precio? Somos la solución que estabas
            esperando. Electrodomésticos de alta gama al por mayor y menor,
            directo a tus manos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/catalogo" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full text-base shadow-lg hover:shadow-xl transition-shadow"
              >
                Ver Productos <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full text-base shadow-sm hover:bg-accent/50"
            >
              <CirclePlay className="mr-2 h-5 w-5" /> Cotizar al Por Mayor
            </Button>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 flex justify-center">
          <Image
            width={1000}
            height={1000}
            src="/logoR2.png"
            alt="hero"
            priority
            className="w-full max-w-sm lg:max-w-md h-auto object-contain animate-in fade-in zoom-in duration-700 delay-100"
          />
        </div>
      </div>
    </div>
  );
}
