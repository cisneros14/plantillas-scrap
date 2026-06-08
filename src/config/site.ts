export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "BIOPEPHT",
  description: "Colágeno Hidrolizado de alta calidad para salud y belleza. Regeneración celular, pureza garantizada y solubilidad instantánea.",
  url: "https://biopepht.com",
  ogImage: "https://biopepht.com/og.jpg",
  author: {
    name: "BIOACTIVA",
    url: "https://bioactiva.com",
    twitter: "@bioactiva",
  },
  keywords: ["colageno", "hidrolizado", "biopepht", "salud", "belleza", "regeneracion celular", "sin azucar"],
  applicationName: "BiopephtStore",
  creator: "BIOACTIVA",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "BIOACTIVA S.A.",
    phone: "+593 900 000 000", // Marcador de posición, ajustar si es necesario
    whatsapp: "593900000000",
    address: "Quito, Ecuador", // Basado en el prefijo de la conversación anterior
    coordinates: {
      lat: -2.170222,
      long: -79.922308,
    },
    email: "info@bioactiva.com",
    operating_hours: "Lu-Vi 09:00-18:00",
  },

  // Navigation
  nav_items: [
    { label: "Inicio", href: "/" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Productos", href: "#productos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],

  // Branding & Design System
  branding: {
    primary: "#7c3aed", // Violeta con contraste óptimo
    primary_foreground: "262 80% 30%",
    secondary: "#4c1d95", // Púrpura oscuro
    secondary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "BIOPEPHT",
  },

  // Social Links
  social: {
    facebook: "https://facebook.com/bioactiva",
    instagram: "https://instagram.com/bioactiva",
    twitter: "https://twitter.com/bioactiva",
    linkedin: "https://linkedin.com/company/bioactiva",
    whatsapp: "https://wa.me/593900000000",
  },

  // Content Sections
  services: [
    {
      title: "Salud y Belleza",
      description: "Mejora la apariencia de tu piel, cabello y uñas desde el interior con colágeno de alta pureza.",
      icon: "Sparkles", 
    },
    {
      title: "Regeneración Celular",
      description: "Promueve la renovación de los tejidos y fortalece la estructura celular de todo el cuerpo.",
      icon: "Atom",
    },
    {
      title: "Fuerza y Flexibilidad",
      description: "Ideal para el mantenimiento de articulaciones, tendones y huesos resistentes.",
      icon: "Activity",
    },
    {
      title: "Fácil Digestión",
      description: "Formula hidrolizada que asegura una absorción rápida y eficiente sin pesadez estomacal.",
      icon: "ShieldCheck",
    },
  ],
  testimonials: [
    {
      name: "Valeria Herrera",
      role: "Atleta Profesional",
      content: "BIOPEPHT ha sido clave en mi recuperación. Mis articulaciones se sienten mucho más fuertes después de cada entrenamiento.",
      avatar: "/avatars/01.png",
    },
    {
      name: "Andrés Cevallos",
      role: "Nutricionista",
      content: "Es el colágeno hidrolizado más puro que he encontrado. Sin azúcar y con una solubilidad impecable.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Lucía Méndez",
      role: "Cuidado de la Piel",
      content: "Empecé a notar cambios en mi piel a las pocas semanas. Se ve más hidratada y con una textura increíble.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿Cómo debo tomar BIOPEPHT?",
      answer: "Se recomienda disolver una cucharada (10g) en tu bebida favorita, ya sea agua, jugo o batidos. Su sabor neutro hace que sea fácil de combinar.",
    },
    {
      question: "¿Contiene azúcar?",
      answer: "No, BIOPEPHT es totalmente libre de azúcar (Cero Azúcar) y carbohidratos, lo que lo hace apto para todo tipo de dietas.",
    },
    {
      question: "¿Cuánto contenido trae el empaque?",
      answer: "Cada bolsa de BIOPEPHT contiene 300 gramos de colágeno hidrolizado puro.",
    },
    {
      question: "¿Es apto para intolerantes?",
      answer: "Sí, es de fácil digestión y puro sin mezclas, minimizando cualquier riesgo de intolerancia digestiva.",
    },
  ],
  process: [
    {
      title: "Hidrólisis Pura",
      description: "Procesamos el colágeno para que las moléculas sean más pequeñas y fáciles de absorber.",
      icon: "Filter",
    },
    {
      title: "Sin Mezclas",
      description: "Garantizamos un producto 100% puro, sin rellenos ni aditivos innecesarios.",
      icon: "CheckCircle",
    },
    {
      title: "Solubilidad Instantánea",
      description: "Nuestra tecnología permite que se disuelva al instante en cualquier líquido.",
      icon: "Zap",
    },
    {
      title: "Calidad Bioactiva",
      description: "Sometemos cada lote a estrictos controles de calidad para tu seguridad.",
      icon: "Shield",
    },
  ],
  pricing: [
    {
      name: "Biopepht Personal",
      price: "$25",
      description: "Ideal para tu rutina mensual de bienestar.",
      features: ["1 Bolsa de 300g", "Envío a domicilio", "Guía de uso digital"],
      cta: "Comprar ahora",
      popular: true,
    },
    {
      name: "Pack Dúo",
      price: "$45",
      description: "Ahorra comprando para dos meses o para compartir.",
      features: ["2 Bolsas de 300g", "Envío GRATIS", "Shaker de regalo", "Descuento del 10%"],
      cta: "Elegir Pack",
      popular: false,
    },
    {
      name: "Suscripción Trimestral",
      price: "$20/mes",
      description: "Asegura tu colágeno cada mes al mejor precio.",
      features: ["Despacho automático", "Precio congelado", "Soporte nutricional", "Envío prioritario"],
      cta: "Suscribirse",
      popular: false,
    },
  ],
  team: [
    {
      name: "Equipo Bioactiva",
      role: "Desarrollo y Calidad",
      bio: "Contamos con expertos dedicados a la investigación de suplementos nutricionales de alta eficacia.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    }
  ],
  // Sections Titles & Descriptions
  sectionTitles: {
    services: {
      title: "Beneficios de BIOPEPHT",
      description: "Descubre por qué miles de personas eligen nuestro colágeno hidrolizado para mejorar su calidad de vida.",
    },
    testimonials: {
      title: "Experiencias BIOPEPHT",
      description: "Lo que dicen nuestros clientes sobre los resultados reales en su salud y belleza.",
    },
    faq: {
      title: "Dudas sobre BIOPEPHT",
      description: "Respuestas directas a las preguntas más comunes sobre nuestro colágeno.",
    },
    contact: {
      title: "Ponte en Contacto",
      description: "Estamos aquí para asesorarte en tu camino hacia una vida más saludable.",
      formTitle: "Realiza tu pedido",
      formDescription: "O pregúntanos cualquier duda que tengas sobre el producto.",
    },
  },

  // Home Page Sections
  hero: {
    badge: {
      text: "Cero Azúcar • Hidrolizado",
      href: "#",
      icon: "Sparkles"
    },
    title: "Potencia tu salud con BIOPEPHT",
    description: "Colágeno hidrolizado puro para una regeneración celular profunda, fuerza en tus articulaciones y belleza real desde el interior.",
    primaryCta: {
      text: "Ver Beneficios",
      href: "#beneficios",
      icon: "ArrowRight"
    },
    secondaryCta: {
      text: "Comprar ahora",
      icon: "ShoppingCart"
    },
    image: {
      src: "/banner4.jpeg", 
      alt: "Biopepht Collagen Pouch"
    }
  },

  categories: [
    {
      id: "salud",
      name: "Salud",
      icon: "HeartPulse",
      href: "#",
    },
    {
      id: "belleza",
      name: "Belleza",
      icon: "Moon",
      href: "#",
    },
    {
      id: "deporte",
      name: "Deporte",
      icon: "Dumbbell",
      href: "#",
    },
  ],

  featuredProducts: [
    {
      id: "1",
      name: 'BIOPEPHT Colágeno (300g)',
      price: 25,
      rating: 5.0,
      reviewsCount: 1540,
      imageLight: "/products/biopepht-pouch.png",
      imageDark: "/products/biopepht-pouch.png",
      discountBadge: "Efectividad Pro",
      features: [
        { label: "100% Hidrolizado", iconType: "check" as const },
        { label: "Sabor Neutro", iconType: "check" as const },
      ],
    },
  ],

  valueProposition: {
    title: "¿Por qué Biopepht?",
    description: "Nos enfocamos en la pureza y la eficacia celular para entregarte resultados tangibles.",
    items: [
      {
        icon: "Zap",
        title: "Absorción Rápida",
        description: "Al ser hidrolizado, tu cuerpo lo procesa mucho más rápido que el colágeno convencional.",
      },
      {
        icon: "Droplets",
        title: "Mezcla Perfecta",
        description: "Se disuelve por completo sin dejar grumos ni sabores extraños en tus bebidas.",
      },
      {
        icon: "Shield",
        title: "Pureza Bioactiva",
        description: "Sin rellenos, sin conservantes y libre de azúcares añadidos.",
      },
      {
        icon: "Smile",
        title: "Resultados Visibles",
        description: "Diseñado para impactar positivamente en piel, uñas, cabello y articulaciones.",
      },
    ]
  },

  cta: {
    title: "¿Lista para transformar tu rutina?",
    description: "Empieza hoy a cuidar tu cuerpo con la pureza que solo BIOPEPHT te ofrece.",
    buttonText: "Pedir Biopepht",
  },

  about: {
    title: "Sobre BIOPEPHT by BIOACTIVA",
    description: "Bioactiva nace con el propósito de crear suplementos científicos de alta eficacia. BIOPEPHT es nuestro producto estrella, resultado de años de optimización técnica para lograr el colágeno hidrolizado más puro y soluble del mercado.",
    features: [
      "Fórmula científicamente probada",
      "Compromiso con la pureza al 100%",
      "Fabricación bajo estándares internacionales",
      "Enfoque en salud holística y belleza natural",
    ],
    image: "/banner2.jpeg"
  },
  catalog: {
    categories: [
      { id: "colageno", label: "Colágeno", count: 1 },
      { id: "suplementos", label: "Suplementos", count: 4 },
    ],
    shippingRegions: [
      { id: "ecuador", label: "Ecuador (Nacional)" },
    ],
  },
  
  products: [
    {
      id: "1",
      name: 'BIOPEPHT Colágeno Hidrolizado Puro',
      price: 25.00,
      rating: 5.0,
      reviewsCount: 1540,
      imageLight: "/products/biopepht-bag.png",
      imageDark: "/products/biopepht-bag.png",
      discountBadge: "Best Seller",
      features: [
        { label: "Envío Rápido", iconType: "fast-delivery" as const },
        { label: "Precio Directo", iconType: "best-price" as const },
      ],
      images: [
          "/products/biopepht-bag.png",
          "/products/biopepht-back.png",
      ],
      description: "BIOPEPHT es un producto de alta calidad diseñado para mejorar la salud y la belleza desde el interior. Posee solubilidad instantánea y sabor neutro, lo que lo hace perfecto para cualquier bebida.\n\nEs ideal para personas que buscan regeneración celular, fuerza en articulaciones y mejorar la apariencia de piel y cabello.",
      colors: ["Neutral"],
      capacities: ["300g"],
      specs: [
          { label: "Tipo", value: "Colágeno Hidrolizado" },
          { label: "Azúcar", value: "0 gramos" },
          { label: "Peso", value: "300 gr" },
          { label: "Presentación", value: "Doypack trilaminado" },
      ]
    },
  ],
};
