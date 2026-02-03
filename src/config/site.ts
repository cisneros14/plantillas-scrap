export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Hogar Tech Company",
  description: "Los mejores precios del mercado en Televisores. Grandes ofertas por el día de hoy.",
  url: "https://hogartech.com",
  ogImage: "https://hogartech.com/og.jpg",
  author: {
    name: "Hogar Tech",
    url: "https://hogartech.com",
    twitter: "@hogartech",
  },
  keywords: ["televisores", "smart tv", "4k", "quito", "ecuador", "ofertas"],
  applicationName: "HogarTechApp",
  creator: "Hogar Tech",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Hogar Tech Company",
    phone: "098 783 4918",
    whatsapp: "593987834918",
    address: "JUAN GONZALES Y JUAN PABLO SANZ, Quito, Ecuador",
    coordinates: {
      lat: -0.180653,
      long: -78.467834,
    },
    email: "hogartechcompany@gmail.com",
    operating_hours: "Mo-Su 10:00-18:00",
  },

  // Navigation
  nav_items: [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" },
  ],

  // Branding & Design System
  branding: {
    primary: "#FF8C00", // Orange from the roof/arrow
    secondary: "#2c7fbf", // Blue from the pillars
    primary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "HogarTech",
  },

  // Social Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/593987834918",
  },

  // Content Sections - Adapted for TV Store
  services: [
    {
      title: "Garantía Extendida",
      description: "Productos de calidad con garantía oficial para tu tranquilidad.",
      icon: "BadgeCheck", 
    },
    {
      title: "Asesoría Personalizada",
      description: "Te ayudamos a elegir el mejor producto para tu hogar.",
      icon: "MessageCircle",
    },
    {
      title: "Envíos Seguros",
      description: "Servicio local en Quito y envíos a todo el Ecuador.",
      icon: "Truck",
    },
    {
      title: "Soporte Técnico",
      description: "Asistencia para la configuración de tus equipos.",
      icon: "Wrench", 
    },
  ],
  testimonials: [
    {
      name: "Juan Pérez",
      role: "Cliente Satisfecho",
      content: "Excelente atención, compré mi Samsung 55\" y me llegó al día siguiente a Guayaquil sin problemas. %100 recomendados.",
      avatar: "/avatars/01.png",
    },
    {
      name: "María Fernanda",
      role: "Quito",
      content: "Los mejores precios que encontré en la ciudad. La asesoría fue excelente para elegir la TV perfecta para mi sala.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Carlos Andrade",
      role: "Cliente Frecuente",
      content: "Es la segunda TV que compro aquí. Garantía real y factura legal. Muy confiables.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, transferencia bancaria y tarjeta de crédito.",
    },
    {
      question: "¿Tienen local físico?",
      answer: "Sí, estamos en Juan Gonzales y Juan Pablo Sanz, Quito.",
    },
    {
      question: "¿Realizan envíos a provincias?",
      answer: "Sí, realizamos envíos seguros a todo el país por medio de Servientrega o transporte privado.",
    },
    {
      question: "¿Los productos tienen garantía?",
      answer: "Sí, todos nuestros productos cuentan con garantía de fábrica y soporte técnico.",
    },
    {
      question: "¿El precio incluye IVA?",
      answer: "Sí, todos los precios publicados incluyen IVA y entregamos factura.",
    },
  ],
  process: [],
  pricing: [], 
  team: [],
};
