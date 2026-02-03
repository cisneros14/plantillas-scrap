"use client";

import { useState, useMemo, useEffect } from "react";
import { getAllTVs, marcas } from "@/data/tvs";
import { TVCard } from "./TVCard";
import { Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CatalogSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMarca, setSelectedMarca] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [minPrice, setMinPrice] = useState<string>("");

  const allTVs = useMemo(() => getAllTVs(), []);

  // Extract available sizes for filter
  const sizes = useMemo(() => {
    const s = new Set(allTVs.map((tv) => tv.pulgadas));
    return Array.from(s).sort((a, b) => a - b);
  }, [allTVs]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const filteredTVs = useMemo(() => {
    return allTVs.filter((tv) => {
      const matchesSearch =
        tv.marca.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tv.televisor.descripcion
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        tv.resolucion.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesMarca =
        selectedMarca === "all" || tv.marca.id.toString() === selectedMarca;

      const matchesSize =
        selectedSize === "all" || tv.pulgadas.toString() === selectedSize;

      const matchesPrice = minPrice === "" || tv.precio >= Number(minPrice);

      return matchesSearch && matchesMarca && matchesSize && matchesPrice;
    });
  }, [searchTerm, selectedMarca, selectedSize, minPrice, allTVs]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedMarca, selectedSize, minPrice]);

  const totalPages = Math.ceil(filteredTVs.length / itemsPerPage);
  const paginatedTVs = filteredTVs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedMarca("all");
    setSelectedSize("all");
    setMinPrice("");
    setCurrentPage(1);
  };

  return (
    <section id="catalogo" className="bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900 dark:text-white mb-2">
              Nuestro Catálogo
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-[50ch]">
              Explora nuestra selección exclusiva de televisores
              internacionales.
            </p>
          </div>
          <div className="text-zinc-400 text-sm font-medium bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 rounded-full">
            {filteredTVs.length} resultados
          </div>
        </div>

        {/* Filters Bar */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 mb-8 sticky md:top-20 z-30 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <Input
                placeholder="Buscar modelo, sistema, tecnología..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
              />
            </div>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 items-center w-full lg:w-auto">
              <select
                value={selectedMarca}
                onChange={(e) => setSelectedMarca(e.target.value)}
                className="h-10 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                <option value="all">Todas las Marcas</option>
                {marcas.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.nombre}
                  </option>
                ))}
              </select>

              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="h-10 px-3 rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-500"
              >
                <option value="all">Todas las Pulgadas</option>
                {sizes.map((s) => (
                  <option key={s} value={s}>
                    {s}&quot;
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-2 col-span-2 sm:col-span-auto sm:w-auto">
                <Input
                  type="number"
                  placeholder="Precio Mínimo $"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full sm:w-32 bg-zinc-50 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                />
              </div>

              {(searchTerm ||
                selectedMarca !== "all" ||
                selectedSize !== "all" ||
                minPrice) && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={clearFilters}
                  className="bg-red-50 text-red-500 hover:bg-red-100 hover:text-red-600 dark:bg-red-900/10"
                  title="Limpiar filtros"
                >
                  <X size={18} />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        {paginatedTVs.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {paginatedTVs.map((tv) => (
                <TVCard key={tv.id} tv={tv} />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                >
                  Anterior
                </Button>
                <div className="flex items-center gap-1 mx-4">
                  <span className="text-sm font-medium">
                    Página {currentPage} de {totalPages}
                  </span>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                >
                  Siguiente
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="py-20 text-center text-zinc-500">
            <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p className="text-xl font-medium">No se encontraron resultados</p>
            <p className="text-sm">Intenta ajustar tus filtros de búsqueda</p>
            <Button variant="link" onClick={clearFilters} className="mt-4">
              Limpiar todos los filtros
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
