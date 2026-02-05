"use client";

import { ProductCard, Product } from "@/components/product-card";

const products: Product[] = [
  {
    id: "1",
    name: 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max',
    price: 1699,
    rating: 5.0,
    reviewsCount: 455,
    imageLight:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
    imageDark:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
    discountBadge: "Up to 35% off",
    features: [
      { label: "Fast Delivery", iconType: "fast-delivery" },
      { label: "Best Price", iconType: "best-price" },
    ],
  },
  {
    id: "2",
    name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
    price: 1199,
    rating: 4.9,
    reviewsCount: 1233,
    imageLight:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg",
    imageDark:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg",
    discountBadge: "Up to 15% off",
    features: [
      { label: "Best Seller", iconType: "best-seller" },
      { label: "Best Price", iconType: "best-price" },
    ],
  },
  {
    id: "3",
    name: "PlayStation®5 Console – 1TB, PRO Controller",
    price: 499,
    rating: 4.8,
    reviewsCount: 4263,
    imageLight:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg",
    imageDark:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg",
    discountBadge: "Up to 10% off",
    features: [
      { label: "Best Seller", iconType: "best-seller" },
      { label: "Best Price", iconType: "best-price" },
    ],
  },
];

export function ProductDemoSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          Product Card Demo
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
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
