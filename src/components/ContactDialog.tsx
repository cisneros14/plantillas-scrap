import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/config/site";
import { FaWhatsapp } from "react-icons/fa";


export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Contáctanos</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Métodos de Contacto</DialogTitle>
          <DialogDescription>
            Elige tu forma preferida para comunicarte con nosotros.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="justify-start gap-3 h-auto py-4"
            asChild
          >
            <a href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}>
              <Phone className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">Llamar por teléfono</span>
                <span className="text-xs text-muted-foreground">
                  {siteConfig.business.phone}
                </span>
              </div>
            </a>
          </Button>

          <Button
            variant="outline"
            className="justify-start gap-3 h-auto py-4"
            asChild
          >
            <a
              href={`https://wa.me/${siteConfig.business.whatsapp.replace(
                /\+/g,
                "",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">WhatsApp</span>
                <span className="text-xs text-muted-foreground">
                  Chatea con nosotros
                </span>
              </div>
            </a>
          </Button>

          <Button
            variant="outline"
            className="justify-start gap-3 h-auto py-4"
            asChild
          >
            <a href={`mailto:${siteConfig.business.email}`}>
              <Mail className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-medium">Correo Electrónico</span>
                <span className="text-xs text-muted-foreground">
                  {siteConfig.business.email}
                </span>
              </div>
            </a>
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="justify-start gap-3" asChild>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span>Instagram</span>
              </a>
            </Button>
            <Button variant="outline" className="justify-start gap-3" asChild>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
