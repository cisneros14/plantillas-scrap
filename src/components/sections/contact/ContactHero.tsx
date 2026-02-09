import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 L100 0 L100 100 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      <div className="absolute inset-0 -z-10 opacity-5 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary via-background to-background"></div>

      <div className="container px-4 mx-auto text-center">
        <Badge variant="secondary" className="mb-4">
          {siteConfig.contact_page.hero.badge}
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
          {siteConfig.contact_page.hero.title_prefix}{" "}
          <br className="hidden sm:inline" />
          <span className="text-primary">
            {siteConfig.contact_page.hero.title_suffix}
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {siteConfig.contact_page.hero.description}
        </p>
      </div>
    </section>
  );
}
