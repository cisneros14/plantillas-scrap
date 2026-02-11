"use client";

import { siteConfig } from "@/config/site";
import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";

interface ProductFeature {
  label: string;
  iconType: string;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  imageLight: string;
  imageDark?: string;
  discountBadge?: string;
  features?: ProductFeature[];
  // New fields for details page from line 22
  images?: string[]; // Gallery images
  // description is already defined above
  colors?: string[]; // e.g. ["Green", "Pink", "Silver", "Blue"]
  capacities?: string[]; // e.g. ["256GB", "512GB", "1TB"]
  specs?: { label: string; value: string }[];
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onQuickLook?: (product: Product) => void;
  onToggleFavorite?: (product: Product) => void;
}

const StarIcon = () => (
  <svg
    className="h-4 w-4 text-yellow-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
  </svg>
);

const FeatureIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "fast-delivery":
      return (
        <svg
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
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
            d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
          />
        </svg>
      );
    case "best-price":
      return (
        <svg
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          />
        </svg>
      );
    case "best-seller":
      return (
        <svg
          className="h-4 w-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export function ProductCard({
  product,
  onAddToCart,
  onQuickLook,
  onToggleFavorite,
}: ProductCardProps) {
  const createWhatsAppLink = (productName: string) => {
    const phoneNumber = siteConfig.business.whatsapp;
    const message = `Hola, me interesa el producto: ${productName}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  const whatsappLink = createWhatsAppLink(product.name);

  return (
    <Card className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 p-6 shadow-sm dark:border-neutral-700 flex flex-col h-full">
      <div className="h-56 w-full relative">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          {/* Light Mode Image */}
          <img
            className={`mx-auto h-full ${product.imageDark ? "dark:hidden" : ""}`}
            src={product.imageLight}
            alt={product.name}
          />
          {/* Dark Mode Image */}
          {product.imageDark && (
            <img
              className="mx-auto hidden h-full dark:block"
              src={product.imageDark}
              alt={product.name}
            />
          )}
        </a>
      </div>

      <div className="pt-6 flex flex-col flex-1">
        <div className="mb-4 flex items-center justify-between gap-4">
          {product.discountBadge ? (
            <span className="me-2 rounded bg-primary-100 pe-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              {product.discountBadge}
            </span>
          ) : (
            <span /> /* Spacer if no badge */
          )}

          <div className="flex items-center justify-end gap-1">
            <button
              type="button"
              onClick={() => onQuickLook?.(product)}
              data-tooltip-target={`tooltip-quick-look-${product.id}`}
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">
                {siteConfig.product_card.quick_look}
              </span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <div
              id={`tooltip-quick-look-${product.id}`}
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              {siteConfig.product_card.quick_look}
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>

            <button
              type="button"
              onClick={() => onToggleFavorite?.(product)}
              data-tooltip-target={`tooltip-add-to-favorites-${product.id}`}
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">
                {siteConfig.product_card.add_to_favorites}
              </span>
              <svg
                className="h-5 w-5"
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
                  d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                />
              </svg>
            </button>
            <div
              id={`tooltip-add-to-favorites-${product.id}`}
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
              data-popper-placement="top"
            >
              {siteConfig.product_card.add_to_favorites}
              <div className="tooltip-arrow" data-popper-arrow=""></div>
            </div>
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
        >
          {product.name}
        </a>

        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          <p className="text-sm font-medium text-gray-900 dark:text-white">
            {product.rating}
          </p>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            ({product.reviewsCount})
          </p>
        </div>

        {product.features && product.features.length > 0 && (
          <ul className="mt-2 flex items-center gap-4">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <FeatureIcon type={feature.iconType} />
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {feature.label}
                </p>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 pt-4">
          <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
            ${product.price}
          </p>

          <Button
            size={"sm"}
            variant={"default"}
            asChild
            className="rounded-lg text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <svg
                className="me-1 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              {siteConfig.product_card.buy_button}
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
