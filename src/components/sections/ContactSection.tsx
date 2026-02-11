"use client";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { isValidEcuadorianID } from "@/lib/validation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor introduce un email válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
  identification: z.string().refine(isValidEcuadorianID, {
    message: "Cédula o RUC inválido.",
  }),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      identification: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to your API
    console.log(values);
    toast.success(siteConfig.contact_form.success_message, {
      description: siteConfig.contact_form.success_description,
    });
    form.reset();
  }

  return (
    <section id="contacto" className="dark:bg-neutral-900 py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="dark:bg-background">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Encuéntranos en nuestras oficinas o contáctanos directamente.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0 dark:text-white" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.business.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0 dark:text-white" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <a
                      href={`tel:${siteConfig.business.phone.replace(
                        /\s+/g,
                        "",
                      )}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.business.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0 dark:text-white" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href={`mailto:${siteConfig.business.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.business.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0 dark:text-white" />
                  <div>
                    <h3 className="font-medium">Horario</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.business.operating_hours}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <h3 className="font-medium mb-4">
                    Síguenos en redes sociales
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={siteConfig.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href={siteConfig.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="dark:bg-background">
              <CardHeader>
                <CardTitle>{siteConfig.contact_form.title}</CardTitle>
                <CardDescription>
                  {siteConfig.contact_form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {siteConfig.contact_form.name_label}
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-neutral-900"
                              placeholder={
                                siteConfig.contact_form.name_placeholder
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="identification"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {siteConfig.contact_form.id_label}
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-neutral-900"
                              placeholder={
                                siteConfig.contact_form.id_placeholder
                              }
                              {...field}
                              onChange={(e) => {
                                const value = e.target.value.replace(
                                  /[^0-9]/g,
                                  "",
                                );
                                field.onChange(value);
                              }}
                              maxLength={13}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {siteConfig.contact_form.email_label}
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="dark:bg-neutral-900"
                              placeholder={
                                siteConfig.contact_form.email_placeholder
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {siteConfig.contact_form.message_label}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              className="dark:bg-neutral-900 min-h-[120px]"
                              placeholder={
                                siteConfig.contact_form.message_placeholder
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      {siteConfig.contact_form.submit_button}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
