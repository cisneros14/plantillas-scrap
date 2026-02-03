import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import { ImageN } from "./ui/image-with-skeleton";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
          <Badge
            variant="default"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#ofertas">
              HOGAR TECH COMPANY OFICIAL{" "}
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge> 
          <h1 className="max-w-[20ch] text-[var(--secondary)] text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
            Tecnología de Punta a Precios de Oferta 🇪🇨
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
            Descubre la mejor selección de televisores inteligentes con garantía
            real. Calidad, confianza y los mejores precios del mercado. Envíos
            seguros a todo el Ecuador.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base" asChild>
              <Link href="/catalogo">
                Ver Catálogo <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
              asChild
            >
              <Link href="https://wa.me/593987834918" target="_blank">
                <CirclePlay className="mr-2 h-5 w-5" /> Contactar Asesor
              </Link>
            </Button>
          </div>
        </div>
        <Image
          width={1000}
          height={1000}
          src="/logo2.png"
          alt="hero"
          priority
          className="w-full max-w-[400px] mx-auto rounded-xl overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
