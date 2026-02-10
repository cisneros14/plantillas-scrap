"use client";

import { ProductCard } from "@/components/product-card";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProductDemoSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 md:mb-8">
          <h2 className="mb-0 text-2xl font-bold text-gray-900 dark:text-white">
            {siteConfig.ui.featured_products.title}
          </h2>
          <Link
            href="/catalogo"
            className="flex gap-2 items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
          >
            {siteConfig.ui.featured_products.link_text}
            <ArrowRight />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {siteConfig.products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(p) => alert(`Added ${p.name} to cart`)}
              onQuickLook={(p) => alert(`Quick look for ${p.name}`)}
              onToggleFavorite={(p) => alert(`Toggled favorite for ${p.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
