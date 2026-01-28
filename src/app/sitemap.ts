import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = siteConfig.nav_items.map((route) => ({
    url: `${siteConfig.url}${route.href === "/" ? "" : route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    ...routes,
    // Add dynamic routes here if any, e.g. from database
    // {
    //   url: `${siteConfig.url}/blog/example-post`,
    //   lastModified: new Date().toISOString(),
    // },
  ];
}
