import { ProductCard } from "@/components/product-card";
import { FilterSidebar } from "@/components/catalog/FilterSidebar";
import { siteConfig } from "@/config/site";
import { Suspense } from "react";
import { getBestBuyProducts } from "@/data/bestbuy";
import { CatalogPagination } from "@/components/catalog/CatalogPagination";

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
  const page =
    typeof resolvedSearchParams.page === "string"
      ? parseInt(resolvedSearchParams.page)
      : 1;
  // const category =
  //   typeof resolvedSearchParams.category === "string"
  //     ? resolvedSearchParams.category
  //     : undefined;
  // Note: category logic in sidebar uses IDs like "apple", but Best Buy needs category IDs.
  // The sidebar needs to be updated to map these IDs to Best Buy IDs if we want category filtering to work with the API.
  // For now, we'll pass the category param, buy getBestBuyProducts defaults to abcat0900000 if not provided or just a keyword.
  // Actually, let's keep it simple for now and rely on the default category if none is valid,
  // or pass the category if it matches Best Buy format.
  // The user asked for "electrodomesticos" which is abcat0900000.

  // Fetch Best Buy products with filters
  const { products, currentPage, totalPages } = await getBestBuyProducts({
    page,
    minPrice,
    maxPrice,
    rating,
    // category: category // TODO: Map local category IDs to Best Buy IDs
  });

  return (
    <div className="bg-background py-8 antialiased md:py-12">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <div>
            <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              {siteConfig.ui.catalogo.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <Suspense
            fallback={
              <div className="w-full lg:w-72 h-screen bg-muted/20 animate-pulse rounded-lg" />
            }
          >
            <FilterSidebar />
          </Suspense>

          <div className="flex-1">
            {products.length > 0 ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
                <CatalogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                />
              </>
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
                  {siteConfig.ui.catalogo.no_products_title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {siteConfig.ui.catalogo.no_products_desc}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
