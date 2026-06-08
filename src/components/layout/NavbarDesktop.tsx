"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Facebook, Instagram, Sparkles } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() => import("../ContactDialog").then(mod => mod.ContactDialog), {
  loading: () => <div className="w-24 h-10 bg-muted/20 animate-pulse rounded-md" />, // Optional: Skeleton for the button
  ssr: false // Optional: If we don't need it on server
});

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
          <a href={siteConfig.social.facebook}>
            <Facebook className="h-4 w-4 text-muted-foreground" />
          </a>
          <a href={siteConfig.social.instagram}>
            <Instagram className="h-4 w-4 text-muted-foreground" />
          </a>
          <a href={siteConfig.social.whatsapp}>
            <WhatsappIcon className="h-4 w-4 text-muted-foreground" />
          </a>

          <Link href="/early-access" passHref>
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10 text-primary gap-1.5 cursor-pointer">
              <Sparkles className="w-4 h-4 text-primary" />
              Gana Recompensas
            </Button>
          </Link>
          <ContactDialog />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
