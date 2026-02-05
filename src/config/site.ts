export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tu Negocio Local",
  description: "Ofrecemos los mejores servicios en tu área. Calidad garantizada y atención personalizada.",
  url: "https://tunegocio.com",
  ogImage: "https://tunegocio.com/og.jpg",
  author: {
    name: "Tu Negocio",
    url: "https://tunegocio.com",
    twitter: "@tunegocio",
  },
  keywords: ["servicios", "local", "negocio", "reparación", "mantenimiento"],
  applicationName: "TuNegocioApp",
  creator: "Tu Negocio",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Tu Negocio Local S.A.",
    phone: "+34 600 000 000",
    whatsapp: "34600000000",
    address: "Calle Principal 123, Madrid, España",
    coordinates: {
      lat: 40.416775,
      long: -3.703790,
    },
    email: "contacto@tunegocio.com",
    operating_hours: "Mo-Fr 09:00-18:00",
  },

  // Navigation
  nav_items: [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" },
    { label: "Catalogo", href: "/catalogo" },
  ],

  // Branding & Design System
  branding: {
    primary: "#ff004c", 
    primary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "TuNegocio",
  },

  // Social Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/593991234567",
  },

  // Content Sections (Maintaining existing data structure)
  services: [
    {
      title: "Consultoría Estratégica",
      description: "Analizamos tu negocio para identificar oportunidades de crecimiento y optimización.",
      icon: "TrendingUp", 
    },
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, rápidos y optimizados para buscadores.",
      icon: "Laptop",
    },
    {
      title: "Marketing Digital",
      description: "Estrategias de marketing para aumentar tu visibilidad y atraer más clientes.",
      icon: "Megaphone",
    },
    {
      title: "Soporte Técnico",
      description: "Asistencia técnica especializada para resolver cualquier incidencia.",
      icon: "Headset",
    },
  ],
  testimonials: [
    {
      name: "María García",
      role: "CEO, TechStart",
      content: "El servicio fue excepcional. Transformaron completamente nuestra presencia digital y los resultados fueron inmediatos.",
      avatar: "/avatars/01.png",
    },
    {
      name: "Carlos Rodríguez",
      role: "Director, MarketingPro",
      content: "Profesionales, rápidos y eficientes. La mejor inversión que hemos hecho para nuestro negocio este año.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Ana Martínez",
      role: "Dueña, Boutique Local",
      content: "Me ayudaron a entender qué necesitaba mi negocio y lo ejecutaron a la perfección. Totalmente recomendados.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿Cuáles son sus horarios de atención?",
      answer: "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00. Sin embargo, ofrecemos soporte de emergencia para clientes con planes premium.",
    },
    {
      question: "¿Ofrecen servicios personalizados?",
      answer: "Sí, todos nuestros planes se adaptan a las necesidades específicas de cada cliente. Realizamos una consultoría inicial para entender tus requerimientos.",
    },
    {
      question: "¿Cuál es el tiempo de entrega promedio?",
      answer: "Depende del proyecto. Para sitios web corporativos, el tiempo promedio es de 2 a 3 semanas. Para proyectos más complejos, definimos un cronograma detallado.",
    },
    {
      question: "¿Ofrecen garantía de satisfacción?",
      answer: "Absolutamente. Nos aseguramos de que estés 100% satisfecho con el resultado final antes de cerrar el proyecto.",
    },
  ],
  process: [
    {
      title: "Consulta Inicial",
      description: "Nos reunimos para entender a fondo tus necesidades y objetivos comerciales.",
      icon: "MessageCircle",
    },
    {
      title: "Estrategia",
      description: "Diseñamos un plan de acción personalizado para tu negocio.",
      icon: "Lightbulb",
    },
    {
      title: "Ejecución",
      description: "Implementamos las soluciones con los más altos estándares de calidad.",
      icon: "Hammer",
    },
    {
      title: "Optimización",
      description: "Monitoreamos y mejoramos continuamente para asegurar resultados.",
      icon: "TrendingUp",
    },
  ],
  pricing: [
    {
      name: "Básico",
      price: "€499",
      description: "Perfecto para pequeños negocios que están empezando.",
      features: ["Diseño Web Básico", "3 Páginas", "Contacto por Email", "SEO Básico"],
      cta: "Empezar",
      popular: false,
    },
    {
      name: "Profesional",
      price: "€999",
      description: "La mejor opción para negocios en crecimiento.",
      features: ["Diseño Premium", "Hasta 10 Páginas", "Soporte Prioritario", "SEO Avanzado", "Integración CMS"],
      cta: "Elegir Profesional",
      popular: true,
    },
    {
      name: "Empresarial",
      price: "Consultar",
      description: "Soluciones a medida para grandes organizaciones.",
      features: ["Desarrollo a Medida", "Páginas Ilimitadas", "Soporte 24/7", "Auditoría SEO Mensual", "E-commerce"],
      cta: "Contactar",
      popular: false,
    },
  ],
  team: [
    {
      name: "Ana García",
      role: "CEO & Fundadora",
      bio: "Con más de 15 años de experiencia liderando equipos y estrategias digitales.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Carlos Ruiz",
      role: "Director Tecnológico",
      bio: "Apasionado por la innovación y la arquitectura de software escalable.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Laura Martínez",
      role: "Directora de Diseño",
      bio: "Creando experiencias visuales impactantes que conectan con los usuarios.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
    {
      name: "David López",
      role: "Lead Developer",
      bio: "Experto en desarrollo full-stack y optimización de rendimiento.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    }
  ],
};
