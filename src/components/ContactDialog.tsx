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
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

export function ContactDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Contáctanos</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Métodos de Contacto
          </DialogTitle>
          <DialogDescription>
            Elige tu forma preferida para comunicarte con nosotros.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            className="justify-start gap-3 h-auto py-4 bg-[#efeadd] text-[#443126] hover:bg-white dark:bg-[#443126] dark:text-[#e6decb] dark:hover:bg-[#2b1f15] transition-colors rounded-xl"
            asChild
          >
            <a href={`tel:${siteConfig.business.phone.replace(/\s+/g, "")}`}>
              <Phone className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base">
                  Llamar por teléfono
                </span>
                <span className="text-sm opacity-80">
                  {siteConfig.business.phone}
                </span>
              </div>
            </a>
          </Button>

          <Button
            className="justify-start gap-3 h-auto py-4 bg-[#efeadd] text-[#443126] hover:bg-white dark:bg-[#443126] dark:text-[#e6decb] dark:hover:bg-[#2b1f15] transition-colors rounded-xl"
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
              <WhatsappIcon className="h-6 w-6 text-[#25D366]" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base">WhatsApp</span>
                <span className="text-sm opacity-80">Chatea con nosotros</span>
              </div>
            </a>
          </Button>

          <Button
            className="justify-start gap-3 h-auto py-4 bg-[#efeadd] text-[#443126] hover:bg-white dark:bg-[#443126] dark:text-[#e6decb] dark:hover:bg-[#2b1f15] transition-colors rounded-xl"
            asChild
          >
            <a href={`mailto:${siteConfig.business.email}`}>
              <Mail className="h-5 w-5" />
              <div className="flex flex-col items-start">
                <span className="font-semibold text-base">
                  Correo Electrónico
                </span>
                <span className="text-sm opacity-80">
                  {siteConfig.business.email}
                </span>
              </div>
            </a>
          </Button>

          <div className="grid grid-cols-2 gap-4">
            <Button
              className="justify-start gap-3 bg-[#efeadd] text-[#443126] hover:bg-white dark:bg-[#443126] dark:text-[#e6decb] dark:hover:bg-[#2b1f15] py-6 rounded-xl"
              asChild
            >
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
                <span className="font-semibold">Instagram</span>
              </a>
            </Button>
            <Button
              className="justify-start gap-3 bg-[#efeadd] text-[#443126] hover:bg-white dark:bg-[#443126] dark:text-[#e6decb] dark:hover:bg-[#2b1f15] py-6 rounded-xl"
              asChild
            >
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
                <span className="font-semibold">Facebook</span>
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
