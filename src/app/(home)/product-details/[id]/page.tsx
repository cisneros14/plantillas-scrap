import { siteConfig } from "@/config/site";
import { notFound } from "next/navigation";
import ProductContent from "./product-content";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = siteConfig.products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  return <ProductContent product={product} />;
}
