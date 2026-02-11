import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";
import { ImageN } from "../ui/image-with-skeleton";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog),
);

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background dark:bg-neutral-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Sobre <span className="text-primary">{siteConfig.business.name}</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {siteConfig.about.description}
            </p>

            <div className="space-y-4">
              {siteConfig.about.features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary dark:text-white" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <ContactDialog />
          </div>

          {/* Placeholder for About Image - In a real app, use a real image */}
          <ImageN
            width={1000}
            height={1000}
            src={siteConfig.about.image}
            alt="about"
            className="w-full border object-cover h-[400px] lg:h-[400px] rounded-2xl overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
