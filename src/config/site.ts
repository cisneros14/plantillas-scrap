
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  metadata: {
    title: "Servicios Profesionales | Tu Negocio Local",
    description: "Ofrecemos los mejores servicios en tu área. Calidad garantizada y atención personalizada.",
    keywords: ["servicios", "local", "negocio", "reparación", "mantenimiento"],
    applicationName: "TuNegocioApp",
    authors: [{ name: "Tu Negocio", url: "https://tunegocio.com" }],
  },
  seo: {
    canonicalUrl: "https://tunegocio.com",
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: "https://tunegocio.com",
      siteName: "Tu Negocio Local",
      images: [
        {
          url: "https://tunegocio.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Tu Negocio Local",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tunegocio",
      creator: "@tunegocio",
      images: ["https://tunegocio.com/twitter-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  },
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
  nav_items: [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
  branding: {
    primary: "221.2 83.2% 53.3%", // Blue 600 HSL
    primary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "TuNegocio",
  },
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
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/593991234567",
  },
};
