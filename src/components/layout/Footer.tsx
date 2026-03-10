import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-background/50 dark:bg-neutral-900/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src={siteConfig.branding.logo_nav_url}
                alt={siteConfig.name}
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Enlaces</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {siteConfig.nav_items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.business.address}</li>
              <li>
                <a
                  href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="hover:text-foreground"
                >
                  {siteConfig.business.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Horario</h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.business.operating_hours}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.business.name}. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
