"use client";

import { siteConfig } from "@/config/site";
import { Phone } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-[#25D366] text-white rounded-md shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl group"
      aria-label="Contactar por WhatsApp"
    >
      <Phone size={20} className="fill-current" />
      <span className="absolute right-full mr-4 bg-white text-zinc-800 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm border pointer-events-none">
        ¿Necesitas ayuda?
      </span>
    </a>
  );
}
