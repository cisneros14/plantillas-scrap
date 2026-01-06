import { siteConfig } from "@/config/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.business.name,
    image: siteConfig.seo.openGraph.images[0].url,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address,
      addressCountry: "ES", // Assuming Spain based on example, should be configurable or parsed
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.business.coordinates.lat,
      longitude: siteConfig.business.coordinates.long,
    },
    url: siteConfig.seo.canonicalUrl,
    openingHoursSpec: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
