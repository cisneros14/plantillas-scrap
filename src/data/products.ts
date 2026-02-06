import { Product } from "@/components/product-card";

export const products: Product[] = [
  {
    id: "1",
    name: 'Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM',
    price: 1249.99,
    rating: 5.0,
    reviewsCount: 345,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
    discountBadge: "the last 2 products",
    features: [
      { label: "Fast Delivery", iconType: "fast-delivery" },
      { label: "Best Price", iconType: "best-price" },
    ],
    // Mock Details
    images: [
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg",
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg",
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg", // Just to have 4
    ],
    description: "The product is a high-quality, durable solution designed to meet the needs of modern consumers. It features advanced technology and ergonomic design for optimal performance and comfort.\n\nKey features include a sleek interface, customizable settings, and compatibility with various devices. It is ideal for professionals and enthusiasts alike.",
    colors: ["Green", "Pink", "Silver", "Blue"],
    capacities: ["256GB", "512GB", "1TB"],
    specs: [
        { label: "Processor", value: "Apple M1 chip" },
        { label: "Memory", value: "8GB unified memory" },
        { label: "Storage", value: "256GB SSD" },
        { label: "Display", value: '24-inch 4.5K Retina display' },
    ]
  },
  {
    id: "2",
    name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
    price: 1199,
    rating: 4.9,
    reviewsCount: 1233,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg",
    discountBadge: "Up to 15% off",
    features: [
      { label: "Best Seller", iconType: "best-seller" },
      { label: "Best Price", iconType: "best-price" },
    ],
    images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"],
    description: "Experience the ultimate iPhone with Titanium design and A17 Pro chip.",
    colors: ["Blue Titanium", "Natural Titanium", "Black Titanium"],
    capacities: ["256GB", "512GB", "1TB"],
    specs: [
        { label: "Screen", value: "6.7 inch Super Retina XDR" },
        { label: "Chip", value: "A17 Pro" }
    ]
  },
  {
    id: "3",
    name: "PlayStation®5 Console – 1TB, PRO Controller",
    price: 499,
    rating: 4.8,
    reviewsCount: 4263,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg",
    discountBadge: "Up to 10% off",
    features: [
      { label: "Best Seller", iconType: "best-seller" },
      { label: "Best Price", iconType: "best-price" },
    ],
    images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"],
    description: "Play Has No Limits with the PS5 console.",
    specs: [{ label: "Storage", value: "1TB SSD" }]
  },
  {
    id: "4",
    name: "Microsoft Xbox Series X 1TB Gaming Console",
    price: 499,
    rating: 4.8,
    reviewsCount: 2957,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg",
    discountBadge: "Up to 10% off",
    features: [
        { label: "Fast Delivery", iconType: "fast-delivery" },
        { label: "Best Price", iconType: "best-price" },
    ],
     images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"],
     description: "Power your dreams with Xbox Series X.",
     specs: [{ label: "Resolution", value: "True 4K Gaming" }]
  },
  {
    id: "5",
    name: "Apple MacBook PRO Laptop with M2 chip",
    price: 2599,
    rating: 4.9,
    reviewsCount: 1076,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg",
    discountBadge: "Up to 5% off",
    features: [
        { label: "Fast Delivery", iconType: "fast-delivery" },
        { label: "Best Price", iconType: "best-price" },
    ],
     images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"],
     description: "MacBook Pro with M2. Supercharged for pros.",
     colors: ["Space Gray", "Silver"],
     capacities: ["512GB", "1TB", "2TB"]
  },
  {
    id: "6",
    name: "Apple Watch SE [GPS 40mm], Smartwatch",
    price: 699,
    rating: 4.7,
    reviewsCount: 387,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg",
    discountBadge: "Up to 20% off",
    features: [
        { label: "Fast Delivery", iconType: "fast-delivery" },
        { label: "Best Price", iconType: "best-price" },
    ],
     images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"],
  },
  {
    id: "7",
    name: "Microsoft Surface Pro, Copilot+ PC, 13 Inch",
    price: 899,
    rating: 4.5,
    reviewsCount: 154,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg",
    discountBadge: "Up to 10% off",
    features: [
        { label: "Fast Delivery", iconType: "fast-delivery" },
        { label: "Best Seller", iconType: "best-seller" },
    ],
     images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"],
  },
  {
    id: "8",
    name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
    price: 799,
    rating: 4.9,
    reviewsCount: 879,
    imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg",
    imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg",
    discountBadge: "Up to 35% off",
    features: [
        { label: "Shipping Today", iconType: "default" }, // Using default as fallback/mock
        { label: "Best Price", iconType: "best-price" },
    ],
     images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"],
  },
];
