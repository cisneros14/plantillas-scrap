"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, MoveLeft } from "lucide-react";
import { NavbarDesktop } from "@/components/layout/NavbarDesktop";
import { MobileBottomBar } from "@/components/layout/MobileBottomBar";
import { Footer } from "@/components/layout/Footer";

import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <>
      <NavbarDesktop />
      <main className="flex-1">
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center space-y-8">
          <div className="space-y-4 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-muted">
                <FileQuestion className="h-12 w-12 text-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-medium text-muted-foreground">
                {siteConfig.metadata.title}
              </h2>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Página no encontrada
              </h1>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              Lo sentimos, no pudimos encontrar la página que estás buscando.
              Puede que haya sido movida o eliminada.
            </p>
          </div>

          <Button asChild size="lg" className="gap-2">
            <Link href="/">
              <MoveLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
