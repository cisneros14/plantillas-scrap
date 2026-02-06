"use client";

import { Star, Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Product } from "@/components/product-card";
import { useState } from "react";

interface ProductContentProps {
  product: Product;
}

export default function ProductContent({ product }: ProductContentProps) {
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.imageLight || "",
  );
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(
    product?.capacities?.[0],
  );
  const [selectedPickup, setSelectedPickup] = useState("shipping");
  const [selectedWarranty, setSelectedWarranty] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Ensure we have a valid initial image
  if (!selectedImage && (product.imageLight || product.images?.[0])) {
    setSelectedImage(product.images?.[0] || product.imageLight || "");
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column - Image Gallery */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {product.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 border rounded-lg p-2 flex items-center justify-center bg-white dark:bg-gray-800 transition-all ${
                  selectedImage === img
                    ? "border-primary ring-2 ring-primary/20"
                    : "border-gray-200 dark:border-gray-700 hover:border-primary/50"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-8 flex items-center justify-center min-h-[500px]">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-contain max-h-[500px]"
            />
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              {product.discountBadge && (
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                  {product.discountBadge}
                </span>
              )}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-sm text-blue-600 hover:underline ml-1 cursor-pointer">
                  {product.reviewsCount} Reviews
                </span>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-6">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Deliver to Bonnie Green- Sacramento 23647
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
             
            </div>

            <div className="flex flex-col gap-3 mb-6">
              
              <Button className="w-full justify-center gap-2 h-11 bg-blue-600 hover:bg-blue-700 text-white">
                <ShoppingCart className="w-5 h-5" />
                Comprar
              </Button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Also available at competitive prices from{" "}
              <a href="#" className="text-blue-600 hover:underline">
                authorized retailers
              </a>
              , with optional Premium delivery for expedited shipping.
            </p>

            <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />

            {/* Config Options */}
            <div className="space-y-6">
              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    Colour
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                          selectedColor === color
                            ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                            : "border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Capacities */}
              {product.capacities && product.capacities.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                    SSD capacity
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.capacities.map((capacity) => (
                      <button
                        key={capacity}
                        onClick={() => setSelectedCapacity(capacity)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                          selectedCapacity === capacity
                            ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
                            : "border-gray-200 dark:border-gray-700 text-gray-500 hover:border-gray-300 dark:hover:border-gray-600"
                        }`}
                      >
                        {capacity}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Pickup / Shipping */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Pickup
                </h3>
                <div className="space-y-3">
                  <div
                    className={`p-4 rounded-lg border cursor-pointer ${selectedPickup === "shipping" ? "border-primary bg-primary/5" : "border-gray-200 dark:border-gray-700"}`}
                    onClick={() => setSelectedPickup("shipping")}
                  >
                    <div className="flex items-start">
                      <input
                        type="radio"
                        checked={selectedPickup === "shipping"}
                        onChange={() => setSelectedPickup("shipping")}
                        className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <div className="ml-3">
                        <span className="block text-sm font-medium text-gray-900 dark:text-white">
                          Shipping - $19
                        </span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                          Arrives Nov 17
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg border cursor-pointer ${selectedPickup === "flowbox" ? "border-primary bg-primary/5" : "border-gray-200 dark:border-gray-700"}`}
                    onClick={() => setSelectedPickup("flowbox")}
                  >
                    <div className="flex items-start">
                      <input
                        type="radio"
                        checked={selectedPickup === "flowbox"}
                        onChange={() => setSelectedPickup("flowbox")}
                        className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <div className="ml-3">
                        <span className="block text-sm font-medium text-gray-900 dark:text-white">
                          Pickup from Flowbox- $9
                        </span>
                        <span className="block text-xs text-blue-600 hover:underline">
                          Pick a Flowbox near you
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-lg border cursor-pointer ${selectedPickup === "store" ? "border-primary bg-primary/5" : "border-gray-200 dark:border-gray-700"}`}
                    onClick={() => setSelectedPickup("store")}
                  >
                    <div className="flex items-start">
                      <input
                        type="radio"
                        checked={selectedPickup === "store"}
                        disabled
                        className="mt-1 w-4 h-4 text-gray-300 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 cursor-not-allowed"
                      />
                      <div className="ml-3 opacity-50">
                        <span className="block text-sm font-medium text-gray-900 dark:text-white">
                          Pickup from our store
                        </span>
                        <span className="block text-xs text-gray-500 dark:text-gray-400">
                          Not available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warranty */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Add extra warranty
                </h3>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="warranty"
                      value="1year"
                      checked={selectedWarranty === "1year"}
                      onChange={() => setSelectedWarranty("1year")}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      1 year - $39
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="warranty"
                      value="2years"
                      checked={selectedWarranty === "2years"}
                      onChange={() => setSelectedWarranty("2years")}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      2 years - $69
                    </span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="warranty"
                      value="3years"
                      checked={selectedWarranty === "3years"}
                      onChange={() => setSelectedWarranty("3years")}
                      className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      3 years - $991
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="mt-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="details"
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white hover:no-underline hover:text-primary">
              Product Details
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 dark:text-gray-400">
              {product.description || "No description available."}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="specs"
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white hover:no-underline hover:text-primary">
              Specifications
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {product.specs ? (
                  product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-2 gap-4 py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
                    >
                      <dt className="text-gray-500 dark:text-gray-400 font-medium">
                        {spec.label}
                      </dt>
                      <dd className="text-gray-900 dark:text-white">
                        {spec.value}
                      </dd>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">
                    No specifications available.
                  </p>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="warranty"
            className="border-b border-gray-200 dark:border-gray-700"
          >
            <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white hover:no-underline hover:text-primary">
              Warranty
            </AccordionTrigger>
            <AccordionContent className="text-gray-500 dark:text-gray-400">
              <p>
                Standard warranty includes 1 year of coverage for hardware
                defects. Extended warranty options available for purchase.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
