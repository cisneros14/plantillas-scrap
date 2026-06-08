"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";

export function CategorySection() {
  return (
    <section className="bg-muted/60">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            Categorías que podrían interesarte
          </h2>
          <Link
            href="/services"
            className="flex items-center text-base font-medium text-primary hover:underline"
          >
            Ver todas las categorías
            <Icons.ArrowRight className="ms-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.categories.map((category) => {
            const IconComponent =
              (Icons[category.icon as keyof typeof Icons] as LucideIcon) ||
              Icons.HelpCircle;

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group flex flex-col items-center justify-center rounded-lg border border-border bg-card px-4 py-8 text-center hover:bg-muted/50 transition-colors"
              >
                <span className="text-primary">
                  <IconComponent className="h-8 w-8 mb-4 text-primary/60" />
                </span>
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
