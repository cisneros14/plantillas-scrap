"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Mail,
  GraduationCap,
  Briefcase,
  Award,
} from "lucide-react";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog),
);

export function NuestroEquipoSection() {
  return (
    <section
      id="equipo"
      className="bg-background/50 dark:bg-neutral-900/50 py-12 md:py-20"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-primary">
            Nuestro Equipo de Expertos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contamos con profesionales de primer nivel dedicados a proteger sus
            intereses con integridad y excelencia técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.team.map((member, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative aspect-3/4 overflow-hidden rounded-2xl mb-4 border bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <p className="text-white text-sm font-medium">
                        Ver perfil detallado
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    {member.role}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-none rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                  <div className="md:col-span-2 relative h-[300px] md:h-full bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-3 p-8 flex flex-col bg-background">
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-3xl font-bold text-primary mb-1">
                        {member.name}
                      </DialogTitle>
                      <DialogDescription className="text-lg font-medium text-amber-600 dark:text-amber-500">
                        {member.role}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 flex-1 overflow-y-auto pr-2">
                      <p className="text-muted-foreground leading-relaxed italic">
                        &quot;{member.bio}&quot;
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <GraduationCap className="w-5 h-5 text-primary mt-1 shrink-0" />
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">
                              Educación
                            </h4>
                            <p className="text-sm">
                              {(member as { education?: string }).education}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Briefcase className="w-5 h-5 text-primary mt-1 shrink-0" />
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">
                              Experiencia
                            </h4>
                            <p className="text-sm">{member.experience}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Award className="w-5 h-5 text-primary mt-1 shrink-0" />
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-1">
                              Especialidades
                            </h4>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {(member.specialties || []).map(
                                (spec: string, i: number) => (
                                  <span
                                    key={i}
                                    className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium border border-primary/20"
                                  >
                                    {spec}
                                  </span>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t flex items-center justify-between">
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Twitter className="w-5 h-5" />
                        </a>
                        <a
                          href={`mailto:${member.name.toLowerCase().replace(" ", ".")}@garciayasociados.com`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      </div>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="rounded-lg">
                          Cerrar
                        </Button>
                      </DialogTrigger>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <div className="mx-auto w-full flex justify-center items-center mt-6 md:mt-14">
          <ContactDialog />
          </div>
      </div>
    </section>
  );
}
