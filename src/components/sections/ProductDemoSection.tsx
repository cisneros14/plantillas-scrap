"use client";

import { ProductCard } from "@/components/product-card";
import { siteConfig } from "@/config/site";

export function ProductDemoSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 2xl:px-0">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Planes Destacados
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {siteConfig.featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(p) => alert(`Selected ${p.name}`)}
              onQuickLook={(p) => alert(`Quick look for ${p.name}`)}
              onToggleFavorite={(p) => alert(`Toggled favorite for ${p.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
