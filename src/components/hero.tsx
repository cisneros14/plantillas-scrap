import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <div className="md:min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-6 py-12">
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href={siteConfig.hero.badge.href}>
              {siteConfig.hero.badge.text}{" "}
              <ArrowUpRight className="ml-1 size-4" />
            </Link>
          </Badge>
          <h1 className="mt-0 md:mt-4 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.7rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-4 md:mt-6 max-w-[60ch] sm:text-lg text-foreground/80">
            {siteConfig.hero.description}
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href={siteConfig.hero.primaryCta.href}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="rounded-full text-base shadow-none w-full sm:w-auto"
              >
                {siteConfig.hero.primaryCta.text}{" "}
                <ArrowUpRight className="h-5! w-5!" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none w-full sm:w-auto"
            >
              <CirclePlay className="h-5! w-5!" />{" "}
              {siteConfig.hero.secondaryCta.text}
            </Button>
          </div>
        </div>
        <Image
          width={1000}
          height={1000}
          src={siteConfig.hero.image.src}
          alt={siteConfig.hero.image.alt}
          priority
          className="w-full max-w-sm lg:max-w-xl h-auto object-contain animate-in fade-in zoom-in duration-700 delay-100"
        />
      </div>
    </div>
  );
}
