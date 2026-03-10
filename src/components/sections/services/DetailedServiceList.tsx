import { siteConfig } from "@/config/site";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { LucideIcon, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export function DetailedServiceList() {
  return (
    <section className="py-20 bg-background/70 border-y dark:bg-amber-950/20 dark:border-amber-900/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.services.map((service, index) => {
            const IconComponent =
              (Icons[service.icon as keyof typeof Icons] as LucideIcon) ||
              Icons.HelpCircle;

            const serviceImage =
              (service as { image?: string }).image || "/placeholder.webp";

            return (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group border-none shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer dark:bg-neutral-900 dark:border-neutral-800">
                    <div className="h-2 w-full bg-primary/80 group-hover:bg-primary transition-colors" />
                    <CardHeader>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <CardTitle className="text-2xl">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-6">
                        {service.description}
                      </CardDescription>
                      <Button
                        variant="ghost"
                        className="group/btn p-0 hover:bg-transparent text-primary"
                      >
                        Más información
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px] overflow-hidden p-0 rounded-2xl">
                  <div className="relative h-48 w-full">
                    <Image
                      src={serviceImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        {service.title}
                      </DialogTitle>
                    </div>
                  </div>
                  <div className="p-6">
                    <DialogHeader>
                      <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                        {service.description}
                        <br />
                        <br />
                        Nuestro equipo de especialistas en {service.title} está
                        preparado para brindarle la mejor asesoría legal,
                        protegiendo sus intereses con integridad y rigor
                        profesional.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-8 flex justify-end gap-3">
                      <DialogTrigger asChild>
                        <Button variant="outline">Cerrar</Button>
                      </DialogTrigger>
                      <Button className="font-semibold">
                        Agendar Consulta
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </div>
    </section>
  );
}
