import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-20">
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href={siteConfig.hero.badge.href}>
              {siteConfig.hero.badge.text}{" "}
              <Icons.ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-6 max-w-[17ch] text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.1] tracking-tight">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
            {siteConfig.hero.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {siteConfig.hero.actions.map((action, index) => {
              const IconComponent = action.icon
                ? (Icons[action.icon as keyof typeof Icons] as LucideIcon) ||
                  Icons.ArrowRight
                : null;

              const isOutline = action.variant === "outline";

              return (
                <Link
                  key={index}
                  href={action.href}
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant={
                      action.variant as
                        | "default"
                        | "destructive"
                        | "outline"
                        | "secondary"
                        | "ghost"
                        | "link"
                    }
                    size="lg"
                    className={`w-full sm:w-auto rounded-full text-base ${!isOutline ? "shadow-lg hover:shadow-xl transition-shadow" : "shadow-sm hover:bg-accent/50"}`}
                  >
                    {isOutline && IconComponent && (
                      <IconComponent className="mr-2 h-5 w-5" />
                    )}
                    {action.label}
                    {!isOutline && IconComponent && (
                      <IconComponent className="ml-2 h-5 w-5" />
                    )}
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
          <Image
            width={1000}
            height={1000}
            src={siteConfig.branding.logo_hero}
            alt="hero"
            priority
            className="w-full max-w-sm mx-auto lg:max-w-md !rounded-xl !overflow-hidden h-auto object-contain animate-in fade-in zoom-in duration-700 delay-100"
          />
      </div>
    </div>
  );
}
