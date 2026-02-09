import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { ImageN } from "./ui/image-with-skeleton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="md:min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 py-12">
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border text-white"
            asChild
          >
            <Link href="#">
              Distribuidora ELCA <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
            Importadores Directos de las Mejores Marcas para tu Hogar
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
            Ser una empresa líder en comercialización de electrodomésticos, para
            satisfacer las necesidades de nuestros clientes, con productos de
            alta calidad a través de una atención personalizada y oportuna, con
            personal capacitado y motivado.
          </p>
          <div className="mt-12 flex flex-col md:flex-row items-center gap-4">
            <Link href="/catalogo" className="w-full md:w-auto">
              <Button
                size="lg"
                className="rounded-full text-base shadow-none w-full md:w-auto"
              >
                Ver Productos <ArrowUpRight className="h-5! w-5!" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none w-full md:w-auto"
            >
              <CirclePlay className="h-5! w-5!" /> Cotizar al Por Mayor
            </Button>
          </div>
        </div>
        <Image
          width={1000}
          height={1000}
          src="/logoEE.png"
          alt="hero"
          priority
          className="w-full max-w-full lg:max-w-lg h-auto m-auto rounded-xl overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
