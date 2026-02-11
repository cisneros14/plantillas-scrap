import { ProductCard } from "@/components/product-card";
import { FilterSidebar } from "@/components/catalog/FilterSidebar";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import { siteConfig } from "@/config/site";

import { Suspense } from "react";

export default async function CatalogoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;

  // Parse search params for filtering
  const minPrice =
    typeof resolvedSearchParams.minPrice === "string"
      ? parseFloat(resolvedSearchParams.minPrice)
      : undefined;
  const maxPrice =
    typeof resolvedSearchParams.maxPrice === "string"
      ? parseFloat(resolvedSearchParams.maxPrice)
      : undefined;
  const rating =
    typeof resolvedSearchParams.rating === "string"
      ? parseFloat(resolvedSearchParams.rating)
      : undefined;

  // Filter products
  const filteredProducts = siteConfig.products.filter((product) => {
    if (minPrice !== undefined && product.price < minPrice) return false;
    if (maxPrice !== undefined && product.price > maxPrice) return false;
    if (rating !== undefined && product.rating < rating) return false;
    return true;
  });

  return (
    <div className="bg-background py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Catálogo de Electrónica
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <ScrollAnimationWrapper className="w-full lg:w-72">
            <Suspense
              fallback={
                <div className="w-full lg:w-72 h-screen bg-muted/20 animate-pulse rounded-lg" />
              }
            >
              <FilterSidebar />
            </Suspense>
          </ScrollAnimationWrapper>

          <div className="flex-1">
            <ScrollAnimationWrapper>
              {filteredProducts.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white p-12 text-center dark:border-gray-700 dark:bg-gray-800">
                  <svg
                    className="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <h3 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                    No se encontraron productos
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Intenta ajustar tus filtros para encontrar lo que buscas.
                  </p>
                </div>
              )}
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
