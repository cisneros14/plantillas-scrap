import { siteConfig } from "@/config/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dynamic from "next/dynamic";

const ContactDialog = dynamic(() =>
  import("../ContactDialog").then((mod) => mod.ContactDialog),
);

export function FAQSection() {
  return (
    <section className="bg-background/50 dark:bg-neutral-900/50 py-12 md:py-20">
      <div className="container px-4 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {siteConfig.sectionTitles.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {siteConfig.sectionTitles.faq.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {siteConfig.faq.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center flex flex-col items-center justify-center gap-4">
          <p className="text-muted-foreground">
            ¿Tiene más dudas? Estamos a su disposición.
          </p>
          <ContactDialog />
        </div>
      </div>
    </section>
  );
}
