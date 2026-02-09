export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Distribuidora ELCA",
  description: "Ser una empresa líder en comercialización de electrodomésticos, para satisfacer las necesidades de nuestros clientes, con productos de alta calidad.",
  url: "https://distribuidoraelca.com",
  ogImage: "https://distribuidoraelca.com/og.jpg",
  author: {
    name: "Distribuidora ELCA",
    url: "https://distribuidoraelca.com",
    twitter: "@distribuidoraelca",
  },
  keywords: ["electrodomésticos", "hogar", "cocina", "tecnología", "quito", "ecuador", "elca"],
  applicationName: "DistribuidoraELCA",
  creator: "Distribuidora ELCA",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Distribuidora ELCA",
    phone: "+593 99 705 3865",
    whatsapp: "593997053865",
    address: "Ipiales Centro, Quito 170401 / Colinas del Sur, Quito, Ecuador",
    coordinates: {
      lat: -0.22985, // Quito approx
      long: -78.52495,
    },
    email: "info@distribuidoraelca.com",
    operating_hours: "Siempre abierto",
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
    primary: "#2250d4", 
    primary_foreground: "0 0% 98%",
    secondary: "#f5632b", 
    secondary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "Distribuidora ELCA",
  },

  // Social Links
  social: {
    facebook: "https://www.facebook.com/elca.tu.hogar",
    instagram: "https://www.instagram.com/distribuidora.elca2000",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/593997053865",
  },

  // Content Sections (Maintaining existing data structure)
  services: [
    {
      title: "Envíos a Domicilio",
      description: "Llevamos tus electrodomésticos a la puerta de tu hogar con total seguridad.",
      icon: "Truck", 
    },
    {
      title: "Garantía de Calidad",
      description: "Productos 100% originales y garantizados de las mejores marcas.",
      icon: "ShieldCheck",
    },
    {
      title: "Pagos Flexibles",
      description: "Aceptamos efectivo, tarjetas de crédito y transferencias.",
      icon: "DollarSign",
    },
    {
      title: "Atención Personalizada",
      description: "Asesoramiento experto para que elijas lo mejor para tu hogar.",
      icon: "Headset",
    },
  ],
  testimonials: [
    {
      name: "Cliente Satisfecho",
      role: "Compra Verificada",
      content: "Excelente atención y precios muy competitivos. Mi refrigeradora llegó en perfecto estado.",
      avatar: "/avatars/01.png",
    },
    {
      name: "Usuario de Facebook",
      role: "Recomendación",
      content: "Muy buena variedad de productos y el personal es muy amable. Totalmente recomendados.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Comprador Local",
      role: "Cliente Frecuente",
      content: "Siempre encuentro lo que busco para mi casa en Distribuidora ELCA.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿Cuáles son sus horarios de atención?",
      answer: "Estamos siempre abiertos para atender tus consultas y pedidos.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos pagos en efectivo, tarjeta de crédito y transferencias bancarias.",
    },
    {
      question: "¿Realizan envíos a domicilio?",
      answer: "Sí, realizamos envíos seguros a su domicilio. Contáctenos para más detalles sobre cobertura.",
    },
    {
      question: "¿Tienen garantía los productos?",
      answer: "Sí, todos nuestros productos son de alta calidad y cuentan con garantía.",
    },
  ],
  process: [
    {
      title: "Contáctanos",
      description: "Escríbenos por WhatsApp o visítanos en nuestros locales.",
      icon: "MessageCircle",
    },
    {
      title: "Asesoría",
      description: "Te ayudamos a elegir el electrodoméstico ideal para tus necesidades.",
      icon: "Lightbulb",
    },
    {
      title: "Compra",
      description: "Realiza tu pago de forma segura con el método que prefieras.",
      icon: "DollarSign",
    },
    {
      title: "Entrega",
      description: "Recibe tu producto en la comodidad de tu hogar.",
      icon: "Truck",
    },
  ],
  pricing: [
    {
      name: "Combos Hogar",
      price: "Consultar",
      description: "Equipa tu cocina con nuestros combos especiales.",
      features: ["Cocina + Refrigeradora", "Microondas + Licuadora", "Precios de Oferta", "Garantía Incluida"],
      cta: "Ver Ofertas",
      popular: true,
    },
    {
      name: "Mayoristas",
      price: "Precios Especiales",
      description: "Precios exclusivos para compras al por mayor.",
      features: ["Descuentos por Volumen", "Atención Prioritaria", "Catálogo Extendido", "Envíos Coordinados"],
      cta: "Cotizar Mayorista",
      popular: false,
    },
    {
      name: "Crédito Directo",
      price: "A tu medida",
      description: "Facilidades de pago para que lleves lo que necesitas.",
      features: ["Cuotas Accesibles", "Aprobación Rápida", "Mínimos Requisitos", "Pagos Flexibles"],
      cta: "Solicitar Crédito",
      popular: false,
    },
  ],
  team: [
    {
      name: "Equipo de Ventas",
      role: "Asesores Comerciales",
      bio: "Personal capacitado y motivado para brindarte la mejor atención.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
  ],
};
