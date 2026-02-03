"use client";

import { useMemo } from "react";
import { getAllTVs } from "@/data/tvs";
import { TVCard } from "./TVCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface SimpleTVGridProps {
  title: string;
  brandId?: number;
  modelName?: string; // Partial match for model or description
  minPrice?: number;
  maxPrice?: number;
  className?: string;
}

export function SimpleTVGrid({
  title,
  brandId,
  modelName,
  minPrice,
  maxPrice,
  className = "",
}: SimpleTVGridProps) {
  const allTVs = useMemo(() => getAllTVs(), []);

  const displayTVs = useMemo(() => {
    let filtered = allTVs;

    if (brandId) {
      filtered = filtered.filter((tv) => tv.marca.id === brandId);
    }

    if (modelName) {
      const lowerModel = modelName.toLowerCase();
      filtered = filtered.filter(
        (tv) =>
          tv.marca.nombre.toLowerCase().includes(lowerModel) ||
          (tv.modelo && tv.modelo.nombre.toLowerCase().includes(lowerModel)) ||
          tv.televisor.descripcion.toLowerCase().includes(lowerModel),
      );
    }

    if (minPrice !== undefined) {
      filtered = filtered.filter((tv) => tv.precio >= minPrice);
    }

    if (maxPrice !== undefined) {
      filtered = filtered.filter((tv) => tv.precio <= maxPrice);
    }

    // Return only top 8
    return filtered.slice(0, 8);
  }, [allTVs, brandId, modelName, minPrice, maxPrice]);

  if (displayTVs.length === 0) return null;

  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl text-[var(--secondary)] font-bold tracking-tight dark:text-white">
            {title}
          </h2>
          <Button variant="ghost" className="gap-2" asChild>
            <Link href="/catalogo">
              Ver todo <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTVs.map((tv) => (
            <TVCard key={tv.id} tv={tv} />
          ))}
        </div>
      </div>
    </section>
  );
}
