"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog),
);

export function CategorySection() {
  return (
    <section className="bg-background dark:bg-amber-950/20">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 md:mb-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl lg:text-4xl">
              Nuestras Áreas de Especialización
            </h2>
            <p className="mt-2 text-muted-foreground">
              Brindamos soluciones legales integrales adaptadas a su necesidad.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/services"
              className="flex items-center text-base font-semibold text-primary hover:underline"
            >
              Ver todos los servicios
              <Icons.ArrowRight className="ms-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.categories.map((category) => {
            const IconComponent =
              (Icons[category.icon as keyof typeof Icons] as LucideIcon) ||
              Icons.HelpCircle;

            return (
              <Dialog key={category.id}>
                <DialogTrigger asChild>
                  <div className="group flex flex-col items-center justify-center rounded-2xl border-none bg-card px-6 py-10 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Presione para ver detalles
                    </p>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px] overflow-hidden p-0 rounded-2xl">
                  <div className="relative h-48 w-full">
                    <Image
                      src={category.image as string}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <DialogTitle className="text-2xl font-bold text-foreground">
                        {category.name}
                      </DialogTitle>
                    </div>
                  </div>
                  <div className="p-6">
                    <DialogHeader>
                      <DialogDescription className="text-base text-muted-foreground leading-relaxed">
                        {category.description as string}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-8 flex justify-end gap-3">
                      <DialogTrigger asChild>
                        <Button variant="outline">Cerrar</Button>
                      </DialogTrigger>
                      <Link href={category.href}>
                        <Button className="font-semibold">
                          Ir a la página del servicio
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
        
      </div>
      <div className="mx-auto w-full flex justify-center items-center mt-6 md:mt-14">
          <ContactDialog />
          </div>
    </section>
  );
}
