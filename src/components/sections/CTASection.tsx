import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold text-[var(--secondary)] tracking-tight sm:text-4xl mb-6">
          ¿Buscando el mejor entretenimiento para tu hogar?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Encuentra el televisor perfecto con la mejor tecnología y garantía.
          Asesoría personalizada y envíos seguros a todo el Ecuador.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" asChild>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat en WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/catalogo">Ver Catálogo</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
