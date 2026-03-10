"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Facebook, Instagram } from "lucide-react";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(
  () => import("../ContactDialog").then((mod) => mod.ContactDialog),
  {
    loading: () => (
      <div className="w-24 h-10 bg-muted/20 animate-pulse rounded-md" />
    ), // Optional: Skeleton for the button
    ssr: false, // Optional: If we don't need it on server
  },
);

import { usePathname } from "next/navigation";

export function NavbarDesktop() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-backdrop-filter:bg-background/70 hidden md:flex">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={siteConfig.branding.logo_nav_url}
              alt={siteConfig.name}
              width={150}
              height={50}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {siteConfig.nav_items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      asChild
                      active={isActive}
                      className={navigationMenuTriggerStyle({
                        className: `bg-transparent hover:bg-background/80 text-muted-foreground ${isActive
                            ? "bg-background! text-primary! transition-colors"
                            : "transition-colors"
                          }`,
                      })}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
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

          <ContactDialog />
        </div>
      </div>
    </header>
  );
}
