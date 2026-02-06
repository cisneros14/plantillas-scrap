import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
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
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.7rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
            Mancasa: Electrodomésticos y Hogar para tu Familia
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
            Somos una empresa comercializadora de electrodomésticos, equipos de
            tecnología y productos para el hogar. Visítanos en Guayaquil o
            compra en línea.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Link href="/catalogo">
              <Button size="lg" className="rounded-full text-base shadow-none">
                Ver Productos <ArrowUpRight className="h-5! w-5!" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="h-5! w-5!" /> Cotizar al Por Mayor
            </Button>
          </div>
        </div>
        <Image
          width={1000}
          height={1000}
          src="/logoM.png"
          alt="hero"
          priority
          className="w-full max-w-lg h-fit m-auto bg-accent rounded-xl overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
