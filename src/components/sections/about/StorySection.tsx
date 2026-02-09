import { siteConfig } from "@/config/site";
import { CheckCircle2 } from "lucide-react";
import { ImageN } from "@/components/ui/image-with-skeleton";

export function StorySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -z-10 rotate-3"></div>
            <ImageN
              width={800}
              height={600}
              src={siteConfig.about.story.image}
              alt={siteConfig.about.story.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {siteConfig.about.story.title}
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                En <strong>{siteConfig.business.name}</strong>,{" "}
                {siteConfig.about.story.description1}
              </p>
              <p>{siteConfig.about.story.description2}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {siteConfig.about.story.features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
