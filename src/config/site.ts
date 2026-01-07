
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
    name: "David E. Yumiceba G.",
    phone: "+593 99 123 4567", // Placeholder, user didn't provide phone but whatsapp link implies it
    whatsapp: "593991234567", // Placeholder
    address: "Quito, Pichincha – Ecuador",
    coordinates: {
      lat: -0.180653,
      long: -78.467834,
    },
    email: "contacto@davidyumiceba.com", // Placeholder
    operating_hours: "Lu-Vi 09:00-18:00",
  },
  nav_items: [
    { label: "Inicio", href: "#inicio" },
    { label: "Perfil", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Contacto", href: "#contacto" },
  ],
  branding: {
    primary: "221.2 83.2% 53.3%", // Keep blue for now
    primary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "Y&L Jurídico",
  },
  services: [
    {
      title: "Mediación y Conflictos",
      description: "Resolución efectiva de conflictos, priorizando soluciones ágiles y consensuadas.",
      icon: "Handshake", 
    },
    {
      title: "Asesoría Civil",
      description: "Asesoría integral en derecho civil para proteger sus intereses y patrimonio.",
      icon: "Scale",
    },
    {
      title: "Derecho de Familia",
      description: "Acompañamiento legal en casos de familia, niñez y adolescencia con enfoque humano.",
      icon: "Users",
    },
    {
      title: "Trámites Notariales",
      description: "Elaboración de minutas, escrituras públicas, poderes y otros documentos.",
      icon: "FileText",
    },
  ],
  testimonials: [
    {
      name: "Cliente Satisfecho",
      role: "Empresario",
      content: "La mediación fue rápida y efectiva. Logramos un acuerdo beneficioso para ambas partes sin necesidad de un juicio largo.",
      avatar: "/avatars/01.png",
    },
    {
      name: "Familia Pérez",
      role: "Cliente Particular",
      content: "Excelente trato humano y profesionalismo en nuestro caso de familia. Nos sentimos muy respaldados.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Juan M.",
      role: "Cliente",
      content: "Asesoría clara y transparente en mis trámites notariales. Muy recomendado.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿La mediación tiene validez legal en Ecuador?",
      answer: "Absolutamente. Según la Ley de Arbitraje y Mediación, el acta que firmamos en un Centro de Mediación tiene efecto de sentencia ejecutoriada y cosa juzgada. Esto significa que tiene el mismo peso legal que la orden final de un Juez. Si una parte incumple lo acordado, se puede exigir su cumplimiento inmediato ante la justicia sin necesidad de iniciar un juicio desde cero. Es la vía más rápida y económica en 2026.",
    },
    {
      question: "¿Atienden casos de derecho de familia?",
      answer: "Sí, es una de nuestras áreas principales. Manejamos casos bajo la normativa actual del COGEP y el Código de la Niñez, incluyendo: Divorcios (mutuo acuerdo y litigiosos), Pensiones Alimenticias (cálculos, demandas e incidentes con la Tabla 2026), y Tenencia y Visitas.",
    },
    {
      question: "¿Qué tipo de trámites notariales realiza?",
      answer: "Aunque no somos una notaría, elaboramos la minuta (el documento legal base) y gestionamos todo el proceso ante el Notario para garantizar que sus escrituras no tengan errores legales. Realizamos: Traspaso de dominio (Compraventas), Posesiones Efectivas, Permisos de salida del país, Constitución de compañías SAS, entre otros.",
    },
    {
      question: "¿Es obligatorio iniciar un juicio o existen alternativas?",
      answer: "No siempre es obligatorio. Somos expertos en Resolución Alternativa de Conflictos. Antes de litigar, evaluamos si su caso puede resolverse mediante Mediación o Negociación Directa, ahorrando tiempo y dinero. Si la contraparte no cede, estamos preparados para iniciar la demanda judicial inmediatamente.",
    },
    {
      question: "¿Ofrece atención personalizada?",
      answer: "Sí. No somos una 'fábrica de casos'. Usted tendrá un abogado asignado directamente a su causa. Mantenemos canales de comunicación directos (WhatsApp Corporativo y Reuniones Virtuales/Presenciales) para mantenerle informado sobre cada avance.",
    },
    {
      question: "¿Cómo puedo agendar una consulta?",
      answer: "Puede agendar directamente a través de nuestro enlace de WhatsApp o en nuestra página de reservas online. Ofrecemos modalidad Presencial (en nuestras oficinas) y Virtual (Zoom/Meet) para clientes en otras provincias o en el extranjero.",
    },
    {
      question: "¿La primera consulta tiene costo?",
      answer: "Sí, nuestra consulta tiene un honorario base. Esto se debe a que realizamos un análisis jurídico preliminar de su caso y le entregamos una estrategia legal ('Hoja de Ruta') concreta, nos contrate o no para el juicio posterior.",
    },
    {
      question: "¿Cuánto tiempo puede tomar la resolución de un caso?",
      answer: "Los tiempos varían: Vía Notarial/Mediación (1-3 semanas), Juicios Sumarios (3-8 meses en primera instancia), Juicios Ordinarios (más de un año). Siempre seremos honestos con usted sobre los tiempos reales.",
    },
    {
      question: "¿Se garantiza la confidencialidad del caso?",
      answer: "Totalmente. Nos regimos bajo el principio de Secreto Profesional del Código Orgánico de la Función Judicial. Toda la información y documentos están protegidos legalmente y no serán divulgados.",
    },
    {
      question: "¿Puedo recibir asesoría antes de iniciar cualquier trámite?",
      answer: "Es lo más recomendable. Practicamos la Abogacía Preventiva. Consultarnos antes de firmar un contrato o tomar decisiones legales importantes puede evitarle demandas costosas en el futuro.",
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
