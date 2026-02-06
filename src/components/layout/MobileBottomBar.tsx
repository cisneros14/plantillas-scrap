"use client";

import { Home, Phone, MessageCircle, Menu, CirclePlay } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { MobileSheet } from "./MobileSheet";
import { Button } from "@/components/ui/button";

export function MobileBottomBar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/80 backdrop-blur-lg pb-safe md:hidden">
        <div className="flex h-16 items-center justify-around px-2">
          <Button
            variant="ghost"
            asChild
            className="flex-1 flex flex-col items-center justify-center gap-1 h-auto py-2 hover:bg-transparent hover:text-primary rounded-none"
          >
            <Link href="/">
              <Home className="h-5 w-5" />
              <span className="text-[10px] font-normal">Inicio</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            asChild
            className="flex-1 flex flex-col items-center justify-center gap-1 h-auto py-2 hover:bg-transparent hover:text-primary rounded-none"
          >
            <Link href={`/catalogo`}>
              <CirclePlay className="h-5 w-5" />
              <span className="text-[10px] font-normal">Catalogo</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            asChild
            className="flex-1 flex flex-col items-center justify-center gap-1 h-auto py-2 hover:bg-transparent hover:text-primary rounded-none"
          >
            <Link
              href={`https://wa.me/${siteConfig.business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-[10px] font-normal">WhatsApp</span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            onClick={() => setIsSheetOpen(true)}
            className="flex-1 flex flex-col items-center justify-center gap-1 h-auto py-2 hover:bg-transparent hover:text-primary rounded-none"
          >
            <Menu className="h-5 w-5" />
            <span className="text-[10px] font-normal">Menú</span>
          </Button>
        </div>
      </nav>

      <MobileSheet isOpen={isSheetOpen} onClose={setIsSheetOpen} />
    </>
  );
}
