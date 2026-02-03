"use client";

import { FullTVData } from "@/data/tvs";
import { BadgeCheck, Monitor, Zap, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

interface TVCardProps {
  tv: FullTVData;
}

export function TVCard({ tv }: TVCardProps) {
  const isOferta = tv.oferta;
  const whatsappUrl = `${siteConfig.social.whatsapp}?text=${encodeURIComponent(
    `Hola, estoy interesado en este televisor:
📺 Marca: ${tv.marca.nombre}
📏 Tamaño: ${tv.pulgadas}"
🖥 Resolución: ${tv.resolucion}
⚡ Sistema: ${tv.televisor.sistema}
💲 Precio: $${tv.precio}
ID: ${tv.id}`,
  )}`;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Badge de Oferta */}
      {isOferta && (
        <div className="absolute top-3 right-3 z-20 animate-pulse">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ¡OFERTA!
          </span>
        </div>
      )}

      {/* Imagen Visual (Simulada con CSS) - Fondo Blanco con efecto difuminado */}
      <div className="aspect-video w-full bg-zinc-50 dark:bg-zinc-800/50 relative flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500 overflow-visible">
        {/* Fondo difuminado detrás del TV */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-orange-500/20 to-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-75"></div>

        {/* TV Frame/Bezel */}
        <div className="w-full h-full bg-zinc-900 rounded-md shadow-2xl p-[3px] relative z-10 flex flex-col border-b-4 border-zinc-800">
          {/* Screen - Vivid Gradient */}
          <div className="flex-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-orange-500 relative overflow-hidden rounded-[1px] flex flex-col items-center justify-center">
            {/* Screen Glare */}
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/10 to-transparent skew-x-12 opacity-30 pointer-events-none"></div>

            {/* Corners Info */}
            <div className="absolute top-2 left-2 z-20">
              <span className="text-[9px] font-bold text-white/50">
                {tv.televisor.tecnologia}
              </span>
            </div>
            <div className="absolute top-2 right-2 z-20">
              <span className="text-[9px] font-bold text-white/50">
                {tv.resolucion}
              </span>
            </div>

            {/* Smart TV Text */}
            <div className="text-center z-10 mb-5 p-4">
              <h3 className="text-white font-bold text-lg sm:text-xl tracking-widest drop-shadow-md">
                {tv.marca.nombre}
              </h3>
              <div className="w-16 h-0.5 bg-white/80 mx-auto mt- rounded-full shadow-sm"></div>
              <p className="text-white/80 text-[10px] sm:text-xs mt-1 font-medium tracking-wide uppercase drop-shadow-sm">
                SMART TV
              </p>
            </div>

            {/* App Icons Dock */}
            <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center items-center gap-1.5 px-4">
              {/* Simulated Apps */}
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-blue-500 shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-yellow-400 shadow-sm flex items-center justify-center">
                <div className="w-2 h-1.5 border-2 border-black rounded-[1px]"></div>
              </div>
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-red-600 shadow-sm flex items-center justify-center">
                <div className="w-0 h-0 border-l-[3px] border-l-transparent border-b-[5px] border-b-white border-r-[3px] border-r-transparent rotate-90 ml-0.5"></div>
              </div>
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-red-600 shadow-sm flex items-center justify-center">
                <span className="text-[6px] font-bold text-white">TV</span>
              </div>
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-zinc-700 shadow-sm flex items-center justify-center">
                <div className="w-2 h-1 bg-white/50 rounded-[1px]"></div>
              </div>
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-teal-500 shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-green-500 shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-2 border border-white rounded-[1px]"></div>
              </div>
              <div className="!w-4 !h-4 !sm:w-5 !sm:h-5 rounded-md bg-purple-500 shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feet / Stand - Sleek Angle */}
        <div className="absolute bottom-5 w-auto flex justify-between gap-32 sm:gap-40 opacity-90 z-0">
          <div className="w-1.5 h-4 bg-zinc-800 -rotate-[25deg] rounded-bl-sm origin-top shadow-sm"></div>
          <div className="w-1.5 h-4 bg-zinc-800 rotate-[25deg] rounded-br-sm origin-top shadow-sm"></div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3">
        {/* Header */}
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-tight">
              {tv.marca.nombre} {tv.pulgadas}&quot;
            </h3>
            <span className="font-mono text-sm text-zinc-500">
              {tv.resolucion}
            </span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-2">
            {tv.televisor.descripcion} {tv.nota && `• ${tv.nota}`}
          </p>
        </div>

        {/* Specs Tags */}
        <div className="flex flex-wrap gap-2 my-1">
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            <Monitor size={12} /> {tv.televisor.tecnologia}
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            <Zap size={12} /> {tv.televisor.sistema}
          </span>
          <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
            <BadgeCheck size={12} /> {tv.televisor.garantia_anios} años garantía
          </span>
        </div>

        {/* Pricing & CTA */}
        <div className="mt-2 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-400 uppercase">
              Precio Efectivo
            </span>
            <span className="text-2xl font-black text-green-600 dark:text-green-500">
              ${tv.precio}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-[var(--primary)] border border-[var(--primary)] px-4 py-2 rounded-lg font-medium transition-colors text-sm"
          >
            <Phone size={16} /> Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
