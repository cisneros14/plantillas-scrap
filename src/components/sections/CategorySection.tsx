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
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Categorías que podrían interesarte
          </h2>
          <Link
            href="/services"
            className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
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
                className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-background dark:bg-neutral-900 px-4 py-8 text-center dark:border-neutral-700  dark:hover:bg-neutral-700"
              >
                <span className="text-primary!">
                  <IconComponent className="h-8 w-8 mb-4 text-primary/60" />
                </span>
                <span className="text-lg font-bold text-gray-900 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-500">
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
