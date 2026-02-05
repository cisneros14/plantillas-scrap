"use client";

import Link from "next/link";
import {
  Laptop,
  Tv,
  Tablet,
  Headphones,
  Printer,
  Keyboard,
  Wifi,
  Tag,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  href: string;
}

const categories: Category[] = [
  {
    id: "laptops",
    name: "Laptops & Computers",
    icon: (
      <Laptop className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
  {
    id: "tv",
    name: "TV",
    icon: (
      <Tv className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
  {
    id: "tablets",
    name: "Tablets",
    icon: (
      <Tablet className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
  {
    id: "audio",
    name: "Audio",
    icon: (
      <Headphones className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
  {
    id: "printers",
    name: "Printers",
    icon: (
      <Printer className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
  {
    id: "accessories",
    name: "Computer Accessories",
    icon: (
      <Keyboard className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
  {
    id: "security",
    name: "Security & Wi-Fi",
    icon: (
      <Wifi className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
  {
    id: "deals",
    name: "Deals",
    icon: (
      <Tag className="h-8 w-8 mb-4 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
    ),
    href: "#",
  },
];

export function CategorySection() {
  return (
    <section className="bg-muted/60">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Categories that might interest you
          </h2>
          <Link
            href="#"
            className="flex items-center text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
          >
            See all categories
            <svg
              className="ms-1 h-5 w-5"
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
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-8 text-center hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {category.icon}
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
