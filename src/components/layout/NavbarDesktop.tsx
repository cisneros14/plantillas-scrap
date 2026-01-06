"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { ContactDialog } from "../ContactDialog";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function NavbarDesktop() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:flex">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              {siteConfig.branding.logo_text}
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {siteConfig.nav_items.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle({
                      className: "bg-transparent text-muted-foreground",
                    })}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4 ">
          {/* redes sociales iconos */}
          <a href={siteConfig.social.facebook}><Facebook className="h-4 w-4 text-muted-foreground"/></a>
          <a href={siteConfig.social.instagram}><Instagram className="h-4 w-4 text-muted-foreground"/></a>
          <a href={siteConfig.social.whatsapp}><FaWhatsapp className="h-4 w-4 text-muted-foreground"/></a>

          <ContactDialog />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
