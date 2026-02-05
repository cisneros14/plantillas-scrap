"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Search, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "apple", label: "Apple", count: 56 },
  { id: "microsoft", label: "Microsoft", count: 45 },
  { id: "logitech", label: "Logitech", count: 97 },
  { id: "sony", label: "Sony", count: 234 },
  { id: "asus", label: "Asus", count: 97 },
  { id: "dell", label: "Dell", count: 56 },
  { id: "msi", label: "MSI", count: 97 },
  { id: "canon", label: "Canon", count: 49 },
  { id: "benq", label: "BenQ", count: 23 },
  { id: "razor", label: "Razor", count: 49 },
];

const shippingRegions = [
  { id: "na", label: "Norteamérica" },
  { id: "sa", label: "Sudamérica" },
  { id: "asia", label: "Asia" },
  { id: "aus", label: "Australia" },
  { id: "eur", label: "Europa" },
];

export function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [rating, setRating] = useState<string>("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [shipping, setShipping] = useState<string[]>([]);

  // Sync with URL
  useEffect(() => {
    setSelectedCategories(searchParams.getAll("category"));
    setRating(searchParams.get("rating") || "");
    setMinPrice(searchParams.get("minPrice") || "");
    setMaxPrice(searchParams.get("maxPrice") || "");
    setShipping(searchParams.getAll("shipping"));
  }, [searchParams]);

  // Update URL helper
  const updateUrl = (
    newCategories: string[],
    newRating: string,
    newMin: string,
    newMax: string,
    newShipping: string[],
  ) => {
    const params = new URLSearchParams();
    newCategories.forEach((c) => params.append("category", c));
    newShipping.forEach((s) => params.append("shipping", s));
    if (newRating) params.set("rating", newRating);
    if (newMin) params.set("minPrice", newMin);
    if (newMax) params.set("maxPrice", newMax);
    router.push(`/catalogo?${params.toString()}`);
  };

  const handleCategoryChange = (id: string, checked: boolean) => {
    const next = checked
      ? [...selectedCategories, id]
      : selectedCategories.filter((c) => c !== id);
    setSelectedCategories(next);
    updateUrl(next, rating, minPrice, maxPrice, shipping);
  };

  const handleShippingChange = (id: string, checked: boolean) => {
    const next = checked ? [...shipping, id] : shipping.filter((s) => s !== id);
    setShipping(next);
    updateUrl(selectedCategories, rating, minPrice, maxPrice, next);
  };

  const handleRatingChange = (val: string) => {
    const next = rating === val ? "" : val; // toggle
    setRating(next);
    updateUrl(selectedCategories, next, minPrice, maxPrice, shipping);
  };

  const clearAll = () => {
    router.push("/catalogo");
  };

  return (
    <Card className="w-full lg:w-72 bg-muted/60 border-gray-200 dark:border-neutral-700 shadow-sm p-4 !h-fit">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Filtros
        </h2>
        <div className="flex gap-2">
          <button className="text-sm font-medium text-primary hover:text-primary/80">
            Guardar
          </button>
          <button
            onClick={clearAll}
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            Limpiar
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar..."
          className="pl-9 bg-background border-input"
        />
      </div>

      <Accordion
        type="multiple"
        defaultValue={["category", "price", "shipping", "rating"]}
        className="w-full"
      >
        {/* Category */}
        <AccordionItem value="category" className="border-border">
          <AccordionTrigger className="text-gray-900 dark:text-gray-200 hover:text-primary hover:no-underline">
            Categoría
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={`cat-${cat.id}`}
                    checked={selectedCategories.includes(cat.id)}
                    onChange={(e) =>
                      handleCategoryChange(cat.id, e.target.checked)
                    }
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor={`cat-${cat.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300"
                  >
                    {cat.label}{" "}
                    <span className="text-gray-500">({cat.count})</span>
                  </label>
                </div>
              ))}
              <button className="text-sm text-primary hover:text-primary/80 mt-2 font-medium">
                Ver todo
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price */}
        <AccordionItem value="price" className="border-border">
          <AccordionTrigger className="text-gray-900 dark:text-gray-200 hover:text-primary hover:no-underline">
            Precio
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <select
                  value={minPrice}
                  onChange={(e) => {
                    setMinPrice(e.target.value);
                    updateUrl(
                      selectedCategories,
                      rating,
                      e.target.value,
                      maxPrice,
                      shipping,
                    );
                  }}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Desde</option>
                  <option value="100">$100</option>
                  <option value="500">$500</option>
                  <option value="1000">$1000</option>
                </select>
              </div>
              <div className="flex-1">
                <select
                  value={maxPrice}
                  onChange={(e) => {
                    setMaxPrice(e.target.value);
                    updateUrl(
                      selectedCategories,
                      rating,
                      minPrice,
                      e.target.value,
                      shipping,
                    );
                  }}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Hasta</option>
                  <option value="500">$500</option>
                  <option value="1000">$1000</option>
                  <option value="5000">$5000</option>
                </select>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Worldwide Shipping */}
        <AccordionItem value="shipping" className="border-border">
          <AccordionTrigger className="text-gray-900 dark:text-gray-200 hover:text-primary hover:no-underline">
            Envío Global
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {shippingRegions.map((region) => (
                <div
                  key={region.id}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {region.label}
                  </span>
                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      checked={shipping.includes(region.id)}
                      onChange={(e) =>
                        handleShippingChange(region.id, e.target.checked)
                      }
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 dark:bg-gray-700 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/30"></div>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Rating */}
        <AccordionItem value="rating" className="border-none">
          <AccordionTrigger className="text-gray-900 dark:text-gray-200 hover:text-primary hover:no-underline">
            Calificación
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((starCount) => (
                <div key={starCount} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="rating_filter"
                    id={`rating-${starCount}`}
                    checked={rating === starCount.toString()}
                    onChange={() => handleRatingChange(starCount.toString())}
                    className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor={`rating-${starCount}`}
                    className="flex cursor-pointer items-center"
                  >
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < starCount
                              ? "fill-current"
                              : "text-gray-300 fill-gray-300 dark:text-gray-600 dark:fill-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                      o más
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
