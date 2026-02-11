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
import { Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import dynamic from "next/dynamic";
import Image from "next/image";

const ContactDialog = dynamic(
  () => import("../ContactDialog").then((mod) => mod.ContactDialog),
  {
    loading: () => (
      <div className="w-24 h-10 bg-muted/20 animate-pulse rounded-md" />
    ), // Optional: Skeleton for the button
    ssr: false, // Optional: If we don't need it on server
  },
);

export function NavbarDesktop() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:flex">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src={siteConfig.branding.logo}
              alt={siteConfig.branding.logo_text}
              width={0}
              height={0}
              sizes="100vw"
              className="w-32 h-auto object-contain rounded-md"
            />
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
            <FaWhatsapp className="h-4 w-4 text-muted-foreground" />
          </a>

          <ContactDialog />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
