export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mancasa Ecuador",
  description: "Electrodomésticos & Hogar. Somos una empresa comercializadora de electrodomésticos, equipos de tecnología, productos para el hogar.",
  url: "https://mancasa.com.ec", // Placeholder URL based on context
  ogImage: "https://mancasa.com.ec/og.jpg",
  author: {
    name: "Mancasa",
    url: "https://mancasa.com.ec",
    twitter: "@mancasaec",
  },
  keywords: ["electrodomésticos", "hogar", "tecnología", "mancasa", "guayaquil", "ecuador"],
  applicationName: "MancasaStore",
  creator: "Mancasa",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Mancasa Ecuador",
    phone: "098 989 6582",
    whatsapp: "593989896582",
    address: "Av. Francisco de Orellana Mz 2203, Guayaquil, Ecuador",
    coordinates: {
      lat: -2.1188, // Approximate, keeping previous for now or updating if I had exact coords
      long: -79.90135,
    },
    email: "mancasaec@hotmail.com",
    operating_hours: "Lu-Sa 09:00-18:00",
  },

  // Navigation
  nav_items: [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ],

  // Branding & Design System
  branding: {
    primary: "#123679", // Keeping existing logic or updating if needed. Blue seems appropriate for Mancasa logo.
    primary_foreground: "0 0% 98%",
    secondary: "#dc2626", // Red for secondary
    secondary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "MANCASA",
  },

  // Social Links
  social: {
    facebook: "https://facebook.com/mancasaec",
    instagram: "https://instagram.com/mancasaec", // Inferred
    twitter: "https://twitter.com/mancasaec", // Placeholder
    linkedin: "https://linkedin.com/company/mancasa", // Placeholder
    whatsapp: "https://wa.me/593989896582",
    tiktok: "https://tiktok.com/@mancasaec"
  },

  // Content Sections (Maintaining existing data structure)
  services: [
    {
      title: "Envíos a Todo el País",
      description: "Llevamos tus productos a cualquier ciudad del país con total seguridad.",
      icon: "Truck", 
    },
    {
      title: "Garantía Garantizada",
      description: "Todos nuestros productos cuentan con garantía de fábrica para tu tranquilidad.",
      icon: "ShieldCheck",
    },
    {
      title: "Precios Competitivos",
      description: "Ofrecemos los mejores precios del mercado en ventas al por mayor y menor.",
      icon: "DollarSign",
    },
    {
      title: "Atención Personalizada",
      description: "Te asesoramos en tu compra para que elijas el producto ideal para ti.",
      icon: "Headset",
    },
  ],
  testimonials: [
    {
      name: "María García",
      role: "Cliente Satisfecha",
      content: "Excelente atención y productos de calidad. Llegó todo a tiempo.",
      avatar: "/avatars/01.png",
    },
    {
      name: "Carlos Rodríguez",
      role: "Cliente Frecuente",
      content: "Los mejores precios que encontré en Guayaquil. Recomendados.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Ana Martínez",
      role: "Emprendedora",
      content: "Compré al por mayor para mi negocio y todo salió perfecto.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿Cuáles son sus horarios de atención?",
      answer: "Nuestro horario de atención es de Lunes a Sábado de 09:00 a 18:00.",
    },
    {
      question: "¿Realizan envíos a domicilio?",
      answer: "Sí, realizamos envíos a todo el país. El costo puede variar según la ubicación.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, transferencias bancarias y tarjetas de crédito/débito.",
    },
    {
      question: "¿Los productos tienen garantía?",
      answer: "Sí, todos nuestros productos cuentan con garantía de fábrica.",
    },
  ],
  process: [
    {
      title: "Elige tu producto",
      description: "Navega por nuestro catálogo y selecciona lo que necesitas.",
      icon: "MessageCircle",
    },
    {
      title: "Contáctanos",
      description: "Escríbenos por WhatsApp o llámanos para confirmar disponibilidad.",
      icon: "Lightbulb",
    },
    {
      title: "Pago y Envío",
      description: "Realiza el pago y coordinamos el envío inmediato.",
      icon: "Hammer",
    },
    {
      title: "Disfruta",
      description: "Recibe tu producto y disfruta de la calidad Mancasa.",
      icon: "TrendingUp",
    },
  ],
  pricing: [
    // Keeping structure but maybe this section isn't as relevant for retail, keeping as placeholders or removing if user asked to adapt strictly. 
    // User said "adapta ... a este nuevo negocio", so I should probably make it generic or aligned with retail.
    // Since I don't have pricing tiers for retail usually, I'll keep generic headers or maybe comment it out? 
    // The previous file had pricing. Let's keep it but make it generic or leave as is if not sure. 
    // Actually, let's just update the text to be generic placeholders if not sure, OR leave existing "Services" style pricing? 
    // The previous content was "Básico", "Profesional", "Empresarial" which looks like B2B services.
    // Mancasa sells appliances. I should probably change this to something else or just leave it compatible.
    // I will try to make it look like "Promociones" or "Combos" maybe? Or just leave it for now to avoid breaking components that depend on it strictly.
    // Better to update text to be less "Web Dev Agency" like.
    {
      name: "Combo Hogar",
      price: "$299",
      description: "Equipa tu cocina con lo básico.",
      features: ["Licuadora", "Arrocera", "Sandwichera", "Garantía 1 año"],
      cta: "Ver Detalles",
      popular: false,
    },
    {
      name: "Combo Completo",
      price: "$599",
      description: "Todo lo que necesitas para empezar.",
      features: ["Refrigeradora Pequeña", "Cocina 4 Hornillas", "Licuadora", "Envío Gratis"],
      cta: "Ver Detalles",
      popular: true,
    },
    {
      name: "Combo Premium",
      price: "$999",
      description: "Lo mejor para tu familia.",
      features: ["Refrigeradora No Frost", "Cocina 6 Hornillas", "Lavadora", "Microondas", "Instalación Gratis"],
      cta: "Ver Detalles",
      popular: false,
    },
  ],
  team: [
    // Generic team or placeholders
    {
      name: "Equipo de Ventas",
      role: "Asesores Comerciales",
      bio: "Listos para ayudarte a encontrar lo que necesitas.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
  ]
};
