import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay, MapPin } from "lucide-react";
import Link from "next/link";
import { ImageN } from "./ui/image-with-skeleton";
import { ContactDialog } from "./ContactDialog";

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
            <Link href="#nosotros">
              Más de 17 años de experiencia{" "}
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
            Y&L Estudio Jurídico
          </h1>
          <h3 className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary shrink-0" />
            Quito - Ecuador
          </h3>
          <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
            Somos un equipo altamente especializado en diversas ramas del
            derecho, comprometido con brindar un asesoramiento legal integral,
            estratégico y de la más alta calidad, enfocado en proteger sus
            intereses y ofrecer soluciones claras y efectivas.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <ContactDialog>
              <Button size="lg" className="rounded-full text-base">
                Agendar Cita <ArrowUpRight className="h-5! w-5!" />
              </Button>
            </ContactDialog>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
              asChild
            >
              <a href="#servicios">
                <CirclePlay className="h-5! w-5!" /> Ver Servicios
              </a>
            </Button>
          </div>
        </div>
        <ImageN
          width={1000}
          height={1000}
          src="/img2.png"
          alt="hero"
          priority
          className="w-full border max-h-[600px] rounded-xl overflow-hidden object-cover"
        />
      </div>
    </div>
  );
}
