import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";
import { ImageN } from "../ui/image-with-skeleton";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog),
);

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="bg-background/50 dark:bg-neutral-900 py-12 md:py-20"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block border-b-2 border-primary pb-1 mb-2">
              <span className="text-primary uppercase tracking-widest font-semibold text-sm">
                El Bufete
              </span>
            </div>
            <h2 className="text-4xl font-serif font-medium tracking-tight sm:text-5xl">
              {siteConfig.about.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {siteConfig.about.description}
            </p>

            <div className="space-y-4">
              {siteConfig.about.features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <ContactDialog />
          </div>

          <ImageN
            width={1000}
            height={1000}
            src={siteConfig.about.image}
            alt="about"
            className="w-full object-cover h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
