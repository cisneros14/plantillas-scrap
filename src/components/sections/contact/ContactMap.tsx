import { siteConfig } from "@/config/site";

export function ContactMap() {
  // Uses coordinates from siteConfig, or defaults to a standard view if not specific enough
  // For a template, we can use a generic embed or rely on address.
  // Here we construct a generic google maps embed URL based on coordinates.

  const { lat, long } = siteConfig.business.coordinates;
  const mapsUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15000.0000!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2s!4v1620000000000!5m2!1ses!2s`;

  return (
    <section className="relative w-full h-[500px] mt-0">
      {/* Map styling: grayscale for elegance, full width */}
      <iframe
        src={mapsUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
      />

      {/* Premium Overlay Card */}
      <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-12 md:right-auto md:w-[400px]">
        <div className="bg-background/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border/50">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-primary mb-1">
              {siteConfig.business.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {siteConfig.business.address}
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span className="font-medium">Teléfono:</span>
              <span className="text-muted-foreground">
                {siteConfig.business.phone}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-2">
              <span className="font-medium">Horario:</span>
              <span className="text-muted-foreground">
                {siteConfig.business.operating_hours}
              </span>
            </div>
            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${long}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium flex items-center gap-1"
              >
                {siteConfig.ui.how_to_get_there}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
