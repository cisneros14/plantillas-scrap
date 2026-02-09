"use client";

import Link from "next/link";
import {
  Utensils,
  Wind,
  Snowflake,
  Sparkles,
  Tv,
  Gamepad2,
  Tag,
  ArrowRight,
  Monitor,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
}

const categories: Category[] = [
  {
    id: "refrigeration",
    name: "Refrigeración",
    icon: <Snowflake className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=refrigeracion",
  },
  {
    id: "kitchen",
    name: "Cocina",
    icon: <Utensils className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=cocina",
  },
  {
    id: "cleaning",
    name: "Lavado y Limpieza",
    icon: <Sparkles className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=limpieza",
  },
  {
    id: "climate",
    name: "Climatización",
    icon: <Wind className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=climatizacion",
  },
  {
    id: "tv-audio",
    name: "Audio y Video",
    icon: <Tv className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=tv-audio",
  },
  {
    id: "technology",
    name: "Tecnología",
    icon: <Monitor className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=tecnologia",
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: <Gamepad2 className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=gaming",
  },
  {
    id: "deals",
    name: "Ofertas",
    icon: <Tag className="h-8 w-8 mb-4 text-primary" />,
    href: "/catalogo?category=ofertas",
  },
];

export function CategorySection() {
  return (
    <section className="bg-muted/60">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Categorías que podrían interesarte
          </h2>
          <Link
            href="#"
            className="flex gap-2 items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
          >
            Ver todas las categorías
            <ArrowRight />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-background dark:bg-neutral-900 px-4 py-8 text-center dark:border-neutral-700  dark:hover:bg-neutral-700"
            >
              <span className="!text-primary">{category.icon}</span>
              <span className="text-lg font-bold text-gray-900 group-hover:text-primary-700 dark:text-white dark:group-hover:text-primary-500">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
