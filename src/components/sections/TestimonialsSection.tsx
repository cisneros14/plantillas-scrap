import { siteConfig } from "@/config/site";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestimonialsSection() {
  return (
    <section className="bg-blue-500/2">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de
            presentación.
          </p>
        </div>

        <div className="mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {siteConfig.testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border h-full">
                      <CardHeader>
                        <Quote className="h-8 w-8 text-primary/40 mb-4" />
                        <p className="text-lg italic text-muted-foreground mb-6">
                          &quot;{testimonial.content}&quot;
                        </p>
                      </CardHeader>
                      <CardContent className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
