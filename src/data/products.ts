import { Product } from "@/components/product-card";

export const products: Product[] = [
  {
    id: "1",
    name: "Encimera a Gas Indurama 4 Quemadores (Negra)",
    price: 270.00,
    rating: 4.9,
    reviewsCount: 15,
    imageLight: "/productos/EncimaVidrioTemplado.png",
    imageDark: "/productos/EncimaVidrioTemplado.png",
    discountBadge: "Ahorra $60",
    features: [
      { label: "Vidrio Templado", iconType: "default" },
      { label: "Modelo EGI-604VDNE", iconType: "best-seller" },
    ],
    images: ["/productos/EncimaVidrioTemplado.png"],
    description: "Encimera a gas de 60cm con vidrio templado negro. Diseño elegante y moderno para tu cocina. Precio Normal: $330.",
    specs: [{ label: "Dimensiones", value: "60 cm" }]
  },
  {
    id: "2",
    name: "Encimera a Gas Indurama 4 Quemadores (Acero)",
    price: 169.00,
    rating: 4.8,
    reviewsCount: 22,
    imageLight: "/productos/encimaPlanoAcero.png",
    imageDark: "/productos/encimaPlanoAcero.png",
    discountBadge: "Ahorra $26",
    features: [
      { label: "Acero Inoxidable", iconType: "default" },
      { label: "Durabilidad", iconType: "best-price" },
    ],
    images: ["/productos/encimaPlanoAcero.png"],
    description: "Plano de acero inoxidable, duradero y fácil de limpiar. Modelo de 60cm perfecto para tu hogar. Precio Normal: $195.",
    specs: [{ label: "Material", value: "Acero Inox" }]
  },
  {
    id: "3",
    name: "Aires Acondicionados Split Ecológicos",
    price: 190.00,
    rating: 4.9,
    reviewsCount: 45,
    imageLight: "/productos/aireAcondiSplit.png",
    imageDark: "/productos/aireAcondiSplit.png",
    discountBadge: "Alta Eficiencia",
    features: [
      { label: "Tecnología Inverter", iconType: "fast-delivery" },
      { label: "Multimarca", iconType: "default" },
    ],
    images: ["/productos/aireAcondiSplit.png"],
    description: "Disponibles en marcas CHiQ, mabe, TCL, Libera, RCA, Midea, Hamilton Beach. Modelos de alta eficiencia e Inverter.",
    specs: [{ label: "Tipo", value: "Split / Inverter" }]
  },
  {
    id: "4",
    name: "Lavadora LG Automática 19 KG",
    price: 420.00,
    rating: 5.0,
    reviewsCount: 28,
    imageLight: "/productos/LavadoraLG.png",
    imageDark: "/productos/LavadoraLG.png",
    discountBadge: "Regalo Sorpresa",
    features: [
      { label: "Smart Inverter", iconType: "best-seller" },
      { label: "Turbo Drum", iconType: "default" },
    ],
    images: ["/productos/LavadoraLG.png"],
    description: "Modelo WT19WVTM. Panel digital, lavado inteligente, filtro atrapapelusas y tambor de acero inoxidable. Precio Normal: $500.",
    specs: [{ label: "Capacidad", value: "19 KG" }]
  },
  {
    id: "5",
    name: "Lavadora MC Automática 13 KG",
    price: 299.00,
    rating: 4.7,
    reviewsCount: 12,
    imageLight: "/productos/lavadoraMC.png",
    imageDark: "/productos/lavadoraMC.png",
    discountBadge: "Regalo Sorpresa",
    features: [
      { label: "Smart Wash", iconType: "fast-delivery" },
      { label: "Eco Clean", iconType: "best-price" },
    ],
    images: ["/productos/lavadoraMC.png"],
    description: "Modelo SMCLV13SL03. Poderosas corrientes de agua, dispensador de detergente y sensor de carga. Precio Normal: $355.",
    specs: [{ label: "Capacidad", value: "13 KG" }]
  },
  {
    id: "6",
    name: "PlayStation 5 - Consola Standard",
    price: 499.00,
    rating: 5.0,
    reviewsCount: 156,
    imageLight: "/productos/ps5.png",
    imageDark: "/productos/ps5.png",
    discountBadge: "Stock Limitado",
    features: [
        { label: "4K 120Hz", iconType: "default" },
        { label: "HDR", iconType: "best-seller" }
    ],
    images: ["/productos/ps5.png"],
    description: "Experimenta una velocidad sorprendente con una SSD de velocidad ultrarrápida, una inmersión más profunda con soporte para respuesta háptica.",
    specs: [{ label: "Almacenamiento", value: "825GB SSD" }]
  }
];
