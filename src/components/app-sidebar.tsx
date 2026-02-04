import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Settings,
  Tv,
} from "lucide-react";

const navItems = [
  {
    title: "General",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      {
        title: "Inventario",
        url: "/dashboard/inventario",
        icon: Tv,
      },
      {
        title: "Pedidos",
        url: "/dashboard/pedidos",
        icon: ShoppingCart,
      },
      {
        title: "Clientes",
        url: "/dashboard/clientes",
        icon: Users,
      },
    ],
  },
  {
    title: "Configuración",
    items: [
      {
        title: "Ajustes",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border flex items-center px-4 justify-center">
        <Link href="/" className="flex items-center! space-x-2">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={100}
            height={100}
            className="w-10 h-10"
          />
          <span className="text-xl font-bold text-primary mt-2">
            {siteConfig.branding.logo_text}
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {navItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      tooltip={item.title}
                    >
                      <a
                        href={item.url}
                        className={
                          item.isActive ? "text-primary font-medium" : ""
                        }
                      >
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
