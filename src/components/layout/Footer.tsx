import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/">
              <Image
                src={siteConfig.branding.logo}
                alt={siteConfig.branding.logo_text}
                width={100}
                height={100}
                className="w-34 object-cover"
              />
            </Link>
            <p className="text-sm text-muted-foreground mt-3">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <Link
                href={siteConfig.social.facebook}
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.social.instagram}
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.social.twitter}
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">
              {siteConfig.footer.links_title}
            </h3>
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
            <h3 className="mb-4 text-sm font-semibold">
              {siteConfig.footer.contact_title}
            </h3>
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
            <h3 className="mb-4 text-sm font-semibold">
              {siteConfig.footer.hours_title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.business.operating_hours}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.business.name}.{" "}
            {siteConfig.footer.rights_text}
          </p>
        </div>
      </div>
    </footer>
  );
}
