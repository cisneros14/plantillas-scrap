"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";

interface MobileSheetProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export function MobileSheet({ isOpen, onClose }: MobileSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="text-left mb-8">
          <SheetTitle className="text-xl font-bold text-primary">
            {siteConfig.branding.logo_text}
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col space-y-4 mb-8">
          {siteConfig.nav_items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => onClose(false)}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-4 pt-8 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Tema</span>
            <ModeToggle />
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{siteConfig.business.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            <a href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}>
              {siteConfig.business.phone}
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${siteConfig.business.email}`}>
              {siteConfig.business.email}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
