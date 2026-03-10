"use client";

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
    const whatsappUrl = siteConfig.social.whatsapp;

    if (!whatsappUrl) return null;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                "fixed md:bottom-6 bottom-4 md:right-6 right-4 z-50 flex items-center justify-center",
                "md:w-14 md:h-14 w-10 h-10 rounded-xl bg-[#25D366] text-white shadow-lg",
                "hover:bg-[#21bc5a] transition-all duration-300"

            )}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
}
