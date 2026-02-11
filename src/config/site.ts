export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Power Drone Ec",
  description: "Venta de drones y accesorios DJI. Servicio técnico confiable y transparente en Quito.",
  url: "https://instagram.com/powerdronec",
  ogImage: "https://instagram.com/powerdronec/og.jpg",
  author: {
    name: "Power Drone Ec",
    url: "https://instagram.com/powerdronec",
    twitter: "@powerdronec",
  },
  keywords: ["drones", "dji", "servicio técnico", "reparación drones", "quito", "accesorios drones", "mavic", "mini", "air"],
  applicationName: "PowerDroneApp",
  creator: "Power Drone Ec",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Power Drone Ec",
    phone: "+593 98 749 2302",
    whatsapp: "593987492302",
    address: "Av. 6 de Diciembre y La Niña, Centro Comercial Multicentro, Subsuelo, Local 2#, Quito, Ecuador, EC 170517",
    coordinates: {
      lat: -0.2057, // CC Multicentro approx
      long: -78.4859,
    },
    email: "airdronec.sa@gmail.com",
    operating_hours: "Lu-Vi 10:30-19:00, Sá 11:00-14:00",
  },

  // Navigation
  nav_items: [
    { label: "Inicio", href: "/" },
    { label: "Catálogo", href: "/catalogo" },
    { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ],

  // Branding & Design System
  branding: {
    primary: "#245f7d", // Cyan/Teal from logo
    primary_foreground: "#ffffff",
    secondary: "#77cdc4", // Darker Cyan
    secondary_foreground: "#ffffff",
    font_sans: "font-sans",
    logo_text: "POWER DRONE EC",
    logo: "/logoDrone222.png",
    logo_hero: "/logoDrone22.png",
  },

  hero: {
    badge: {
        text: "¡Tu experto en Drones DJI!",
        href: "/services",
    },
    title: "Servicio Técnico Confiable y Venta de Drones DJI",
    description: "Te ofrecemos un servicio transparente. Venta de drones, accesorios y asesoramiento personalizado GRATIS para que vueles con confianza.",
    actions: [
        { label: "Ver Productos", href: "/catalogo", variant: "default", icon: "ArrowUpRight" },
        { label: "Cotizar Reparación", href: "/contact", variant: "outline", icon: "Wrench" }
    ]
  },

  about: {
    hero: {
      badge: "Sobre Nosotros",
      title_prefix: "Pasión por volar,",
      title_suffix: "Compromiso contigo",
      description: "Somos especialistas en la tecnología DJI, dedicados a ofrecerte las mejores soluciones aéreas y soporte técnico en Quito."
    },
    story: {
      title: "Nuestra Historia",
      description1: "Power Drone Ec nace de la necesidad de contar con un servicio técnico especializado y confiable para drones en Ecuador.",
      description2: "Nos hemos consolidado como un referente en el mercado gracias a nuestra transparencia, honestidad y la calidad de nuestro trabajo garantizado.",
      image: "/acercaDe.jpg",
      features: [
        "Transparencia total en reparaciones",
        "Diagnósticos precisos",
        "Repuestos originales",
        "Atención personalizada",
      ]
    },
    description: "En Power Drone Ec, no solo reparamos drones, devolvemos la alegría de volar. Visítanos en el CC Multicentro.",
    features: [
        "Diagnóstico Gratuito",
        "Garantía en Reparaciones",
        "Asesoría en Compra",
        "Capacitación Básica",
    ],
    image: "/acercaDe.jpg",
    values: {
        title: "Nuestros Valores",
        description: "Lo que nos define como tu mejor aliado en el aire.",
        items: [
           { title: "Confianza", description: "Diagnósticos honestos y claros desde el primer momento.", icon: "ShieldCheck" },
           { title: "Calidad", description: "Usamos repuestos de alta calidad y técnicos certificados.", icon: "Star" },
           { title: "Compromiso", description: "Tu satisfacción y el vuelo seguro de tu equipo son nuestra prioridad.", icon: "Heart" }
        ]
    }
  },

  contact_page: {
    hero: {
      badge: "Contáctanos",
      title_prefix: "Estamos listos para",
      title_suffix: "Ayudarte",
      description: "Visítanos en nuestro local o escríbenos. Estamos ubicados en el Centro Comercial Multicentro, Subsuelo, Local 2#."
    }
  },

  services_page: {
     hero: {
       badge: "Nuestros Servicios",
       title_prefix: "Soluciones Integrales para",
       title_suffix: "Tu Drone",
       description: "Desde mantenimiento preventivo hasta reparaciones complejas y venta de equipos nuevos."
     },
     process: {
       title: "Nuestro Proceso de Servicio",
       description: "Simple, transparente y eficiente."
     },
     pricing: {
       title: "Planes de Mantenimiento",
       description: "Mantén tu drone en perfecto estado con nuestros paquetes."
     }
  },

  cta_section: {
     title: "¿Tu drone necesita reparación?",
     description: "Trae tu equipo para un diagnóstico y asesoramiento personalizado GRATIS. ¡Volamos contigo!",
     button_primary: "Contactar Ahora",
  },

  auth: {
       title: "Iniciar sesión",
       description: "Accede a tu cuenta de Power Drone Ec",
       email_label: "Correo electrónico",
       password_label: "Contraseña",
       forgot_password: "¿Olvidaste tu contraseña?",
       sign_in_button: "Iniciar sesión",
  },
  

  team_section: {
    title: "Nuestro Equipo",
    description: "Conoce a los expertos detrás de cada reparación y asesoría."
  },

  // Restored for CategorySection.tsx compatibility
  categories: [
      {
        id: "drones",
        name: "Drones",
        icon: "Camera",
        href: "/catalogo?category=drones",
      },
      {
        id: "accesorios",
        name: "Accesorios",
        icon: "Package",
        href: "/catalogo?category=accesorios",
      },
      {
        id: "baterias",
        name: "Baterías",
        icon: "Battery",
        href: "/catalogo?category=baterias",
      },
      {
        id: "repuestos",
        name: "Repuestos",
        icon: "Wrench",
        href: "/catalogo?category=repuestos",
      },
      {
        id: "servicios",
        name: "Servicios",
        icon: "Settings",
        href: "/catalogo?category=servicios",
      },
  ],

  // Restored for ServicesSection.tsx compatibility
  services: [
    {
      title: "Servicio Técnico",
      description: "Reparación especializada de drones DJI con garantía.",
      icon: "Wrench",
    },
    {
      title: "Venta de Equipos",
      description: "Drones nuevos y accesorios originales 100% garantizados.",
      icon: "ShoppingCart",
    },
    {
      title: "Asesoría Gratis",
      description: "Te guiamos en la compra o reparación de tu equipo sin costo.",
      icon: "MessageCircle",
    },
    {
      title: "Ubicación Céntrica",
      description: "Encuéntranos fácilmente en el CC Multicentro, Quito.",
      icon: "MapPin",
    },
  ],

  catalog: {
    categories: [
      {
        id: "drones",
        name: "Drones",
        icon: "Camera",
        href: "/catalogo?category=drones",
      },
      {
        id: "accesorios",
        name: "Accesorios",
        icon: "Package",
        href: "/catalogo?category=accesorios",
      },
      {
        id: "baterias",
        name: "Baterías",
        icon: "Battery",
        href: "/catalogo?category=baterias",
      },
      {
        id: "repuestos",
        name: "Repuestos",
        icon: "Wrench",
        href: "/catalogo?category=repuestos",
      },
      {
        id: "servicios",
        name: "Servicios",
        icon: "Settings",
        href: "/catalogo?category=servicios",
      },
    ],
    shippingRegions: [
        { id: "quito", label: "Quito D.M." },
        { id: "valles", label: "Cumbayá / Tumbaco" },
        { id: "nacional", label: "Envíos Nacionales" },
    ]
  },

  social: {
    facebook: "https://facebook.com/powerdronec",
    instagram: "https://www.instagram.com/powerdronec/",
    tiktok: "https://www.tiktok.com/@powerdronec",
    whatsapp: "https://wa.me/593987492302",
    twitter: "https://twitter.com/powerdronec", // Placeholder to fix type error
    linkedin: "https://linkedin.com", // Placeholder to fix type error
  },

  // Content Sections
  highlights: [
    {
      title: "Servicio Técnico",
      description: "Reparación especializada de drones DJI con garantía.",
      icon: "Wrench", 
    },
    {
      title: "Venta de Equipos",
      description: "Drones nuevos y accesorios originales 100% garantizados.",
      icon: "ShoppingCart",
    },
    {
      title: "Asesoría Gratis",
      description: "Te guiamos en la compra o reparación de tu equipo sin costo.",
      icon: "MessageCircle",
    },
    {
      title: "Ubicación Céntrica",
      description: "Encuéntranos fácilmente en el CC Multicentro, Quito.",
      icon: "MapPin",
    },
  ],
  testimonials: [
    {
      name: "Carlos M.",
      role: "Fotógrafo Aéreo",
      content: "Excelente servicio, repararon mi Mavic 3 en tiempo récord y quedó perfecto. 100% recomendados.",
      avatar: "/avatars/01.png",
    },
    {
      name: "Andrea V.",
      role: "Aficionada",
      content: "La asesoría para comprar mi primer drone fue genial. Me explicaron todo con paciencia.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Esteban R.",
      role: "Cliente",
      content: "Gente seria y transparente. Me mostraron el problema de mi drone y la solución fue económica.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿Dónde están ubicados?",
      answer: "Estamos en la Av. 6 de Diciembre y La Niña, Centro Comercial Multicentro, Subsuelo, Local 2#, Quito.",
    },
    {
      question: "¿Cuál es el horario de atención?",
      answer: "Lunes a Viernes: 10:30 a.m - 1:00 p.m y 1:30 p.m - 7:00 p.m. Sábados: 11:00 a.m - 2:00 p.m.",
    },
    {
      question: "¿El diagnóstico tiene costo?",
      answer: "No, ofrecemos asesoramiento y diagnóstico personalizado GRATIS.",
    },
    {
      question: "¿Venden repuestos originales?",
      answer: "Sí, todos nuestros repuestos y accesorios son originales y garantizados.",
    },
  ],
  process: [
    {
      title: "Contáctanos",
      description: "Escríbenos o visítanos con tu equipo.",
      icon: "MessageCircle",
    },
    {
      title: "Diagnóstico",
      description: "Revisamos tu drone y te damos un diagnóstico gratuito.",
      icon: "Search",
    },
    {
      title: "Propuesta",
      description: "Te presentamos el presupuesto de reparación o venta.",
      icon: "FileText",
    },
    {
      title: "Solución",
      description: "Reparamos tu equipo o te entregamos tu producto nuevo listo para volar.",
      icon: "CheckCircle",
    },
  ],
  pricing: [
    {
      name: "Mantenimiento Básico",
      price: "Consultar",
      description: "Limpieza general, calibración de sensores y actualización de firmware.",
      features: ["Limpieza Externa", "Calibración IMU/Compass", "Actualización Firmware", "Prueba de Vuelo"],
      cta: "Agendar Cita",
      popular: false,
    },
    {
      name: "Mantenimiento Profundo",
      price: "Consultar",
      description: "Desarme completo, limpieza de motores y placas, lubricación.",
      features: ["Limpieza Interna", "Revisión de Motores", "Cambio de Pasta Térmica", "Informe Técnico"],
      cta: "Agendar Cita",
      popular: true,
    },
    {
      name: "Reparación de Gimbal",
      price: "Cotizar",
      description: "Reparación de cable flex, motores de gimbal y estabilización.",
      features: ["Cambio de Flex", "Alineación", "Calibación", "Prueba de Estabilidad"],
      cta: "Cotizar",
      popular: false,
    },
  ],
  value_proposition: {
    description: "En Power Drone Ec nos dedicamos a mantener tus equipos volando alto con seguridad y confianza.",
    items: [
        { icon: "Shield", title: "Garantía Real", description: "Todos nuestros trabajos y productos cuentan con garantía." },
        { icon: "Clock", title: "Rapidez", description: "Entendemos que necesitas tu equipo operativo cuanto antes." },
        { icon: "User", title: "Trato Personalizado", description: "Hablamos tu idioma y te explicamos cada detalle." },
        { icon: "MapPin", title: "Ubicación Segura", description: "Local físico en centro comercial con parqueadero y seguridad." },
    ]
  },

  team: [
    {
      name: "Equipo Técnico",
      role: "Especialistas DJI",
      bio: "Personal capacitado para resolver cualquier inconveniente con tu drone.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
  ],

  // UI Strings
  ui: {
    view_more: "Ver más",
    more_info: "Más información",
    how_to_get_there: "Cómo llegar ↗",
    featured_products: {
      title: "Drones y Accesorios Destacados",
      link_text: "Ver catálogo completo",
    },
    categories: {
      title: "Nuestras Categorías",
      link_text: "Ver todas",
    },
    catalogo: {
        title: "Catálogo",
        no_products_title: "No se encontraron productos",
        no_products_desc: "Intenta ajustar tus filtros o contáctanos para repuestos específicos.",
    }
  },

  pages: {
    about: {
        title: "Sobre Power Drone Ec",
        description: "Tu socio confiable para el mundo de los drones.",
    },
    contact: {
        title: "Contacto",
        description: "Estamos aquí para responder tus preguntas y ayudarte.",
    },
    services: {
        title: "Nuestros Servicios",
        description: "Soluciones profesionales para tus equipos aéreos.",
    },
    catalogo: {
        title: "Catálogo",
        description: "Encuentra el drone ideal y los accesorios que necesitas.",
    }
  },

  filter_sidebar: {
    title: "Filtros",
    save_button: "Filtrar",
    clear_button: "Limpiar",
    search_placeholder: "Buscar...",
    sections: {
        category: "Categoría",
        price: "Precio",
        shipping: "Disponibilidad",
        rating: "Calificación",
    },
    view_all: "Ver todo",
    price_from: "Desde",
    price_to: "Hasta",
    rating_or_more: "o más",
    categories: [
        { id: "drones", label: "Drones", count: 12 },
        { id: "baterias", label: "Baterías", count: 8 },
        { id: "helices", label: "Hélices", count: 15 },
        { id: "estuches", label: "Estuches", count: 5 },
        { id: "cargadores", label: "Cargadores", count: 7 },
    ],
    shipping_regions: [
        { id: "stock", label: "En Stock" },
        { id: "pedido", label: "Bajo Pedido" },
    ]
  },

  intro: {
      title: "Bienvenido a Power Drone Ec",
      description: "Expertos en Drones DJI",
  },

  pricing_section: {
      popular_badge: "Más Solicitado",
      per_project: "",
  },

  // Footer
  footer: {
    links_title: "Enlaces",
    contact_title: "Visítanos",
    hours_title: "Horario",
    rights_text: "Todos los derechos reservados.",
  },

  // Contact Form
  contact_form: {
    title: "Escríbenos",
    description: "Déjanos tu mensaje y te responderemos a la brevedad.",
    name_label: "Nombre",
    name_placeholder: "Tu nombre",
    id_label: "Teléfono",
    id_placeholder: "099...",
    email_label: "Email",
    email_placeholder: "tu@email.com",
    message_label: "Mensaje",
    message_placeholder: "Consulta sobre reparación, compra...",
    submit_button: "Enviar Mensaje",
    success_message: "Mensaje enviado",
    success_description: "Pronto nos pondremos en contacto.",
  },

  // Product Card
  product_card: {
    quick_look: "Ver detalles",
    add_to_favorites: "Favorito",
    buy_button: "Cotizar / Comprar",
  },
  
  // Products Data (Placeholders matched to new business)
  products: [
      {
        id: "1",
        name: "Control Remoto RC-N1",
        price: 120.00,
        rating: 4.8,
        reviewsCount: 85,
        imageLight: "/productos/controlRcN1.jpg",
        imageDark: "/productos/controlRcN1.jpg",
        discountBadge: "Stock Limitado",
        features: [
          { label: "OcuSync 2.0", iconType: "default" },
          { label: "Larga Duración", iconType: "best-seller" },
        ],
        images: ["/productos/controlRcN1.jpg"],
        description: "Control remoto estándar compatible con DJI Mini 2, Mini 3, Mavic Air 2, Air 2S y Mavic 3. Alcance de transmisión confiable.",
        specs: [{ label: "Compatibilidad", value: "Multi-modelo" }, { label: "Batería", value: "5200 mAh" }]
      },
      {
        id: "2",
        name: "Control Mavic Mini",
        price: 85.00,
        rating: 4.6,
        reviewsCount: 42,
        imageLight: "/productos/controlMavic.jpg",
        imageDark: "/productos/controlMavic.jpg",
        discountBadge: "Repuesto",
        features: [
          { label: "Original", iconType: "default" },
          { label: "Compacto", iconType: "fast-delivery" },
        ],
        images: ["/productos/controlMavic.jpg"],
        description: "Control remoto de repuesto original para Mavic Mini y Mini SE. Diseño plegable y ergonómico.",
      },
      {
        id: "3",
        name: "Hub de Carga Bidireccional",
        price: 45.00,
        rating: 5.0,
        reviewsCount: 156,
        imageLight: "/productos/hubsCarga.jpg",
        imageDark: "/productos/hubsCarga.jpg",
        discountBadge: "Esencial",
        features: [
          { label: "Carga 3 Baterías", iconType: "default" },
          { label: "Power Bank", iconType: "best-price" },
        ],
        images: ["/productos/hubsCarga.jpg"],
        description: "Carga hasta tres baterías en secuencia. También puede usarse como fuente de energía para cargar dispositivos móviles.",
      },
      {
        id: "4",
        name: "Batería de Vuelo Inteligente",
        price: 65.00,
        rating: 4.9,
        reviewsCount: 310,
        imageLight: "/productos/baterias.jpg",
        imageDark: "/productos/baterias.jpg",
        discountBadge: "Original",
        features: [
          { label: "30+ Min Vuelo", iconType: "default" },
          { label: "Seguridad DJI", iconType: "best-seller" },
        ],
        images: ["/productos/baterias.jpg"],
        description: "Batería original de alta capacidad. Sistema de gestión inteligente que monitorea el estado de la batería en tiempo real.",
      },
      {
        id: "5",
        name: "Protector de Gimbal",
        price: 15.00,
        rating: 4.5,
        reviewsCount: 67,
        imageLight: "/productos/protectorGimbal.jpg",
        imageDark: "/productos/protectorGimbal.jpg",
        discountBadge: "Protección",
        features: [
          { label: "Ajuste Perfecto", iconType: "default" },
          { label: "Policarbonato", iconType: "best-price" },
        ],
        images: ["/productos/protectorGimbal.jpg"],
        description: "Protege la cámara y el estabilizador de tu drone contra golpes y polvo durante el transporte. Indispensable.",
      },
  ],
};
