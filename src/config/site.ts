export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Tu Negocio Local",
  description: "Electrodomésticos de alta gama al por mayor y menor, directo a tus manos.",
  url: "https://riscasa.com",
  ogImage: "https://riscasa.com/og.jpg",
  author: {
    name: "Riscasa",
    url: "https://riscasa.com",
    twitter: "@riscasa",
  },
  keywords: ["electrodomésticos", "hogar", "cocina", "ninja", "shark", "ofertas"],
  applicationName: "RiscasaStore",
  creator: "Riscasa",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Distribuidora RISCASA",
    phone: "+593 99 719 6340",
    whatsapp: "593997196340",
    address: "Centro Comercial Polaris, Isidro Ayora Cueva, Guayaquil, Ecuador",
    coordinates: {
      lat: -2.1188,
      long: -79.90135,
    },
    email: "ventas@riscasa.com",
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
    primary: "#123679", 
    primary_foreground: "0 0% 98%",
    secondary: "#1e40af", // Added secondary color
    secondary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "RISCASA",
    logo: "/logoR.png",
    logo_hero: "/logoR2.png",
  },

  hero: {
    badge: {
        text: "Just released v1.0.0",
        href: "#",
    },
    title: "Importadores Directos de las Mejores Marcas para tu Hogar",
    description: "¿Buscas calidad y buen precio? Somos la solución que estabas esperando. Electrodomésticos de alta gama al por mayor y menor, directo a tus manos.",
    actions: [
        { label: "Ver Productos", href: "/catalogo", variant: "default", icon: "ArrowUpRight" },
        { label: "Cotizar al Por Mayor", href: "#", variant: "outline", icon: "CirclePlay" }
    ]
  },

  about: {
    hero: {
      badge: "Nuestra Historia",
      title_prefix: "Impulsando el futuro de",
      title_suffix: "Tu Negocio",
      description: "Conoce a las personas y los valores que hacen posible nuestra misión de transformar ideas en realidades digitales exitosas."
    },
    story: {
      title: "Quiénes Somos",
      description1: "creemos en el poder de la tecnología para resolver problemas reales. Fundada con la visión de ayudar a empresas locales a competir en un mundo global, hemos crecido gracias a la confianza de nuestros clientes.",
      description2: "Nuestro enfoque combina creatividad, estrategia y excelencia técnica. No solo entregamos proyectos; construimos relaciones duraderas basadas en resultados tangibles.",
      image: "/placeholder.webp",
      features: [
        "Innovación constante",
        "Transparencia total",
        "Compromiso con la calidad",
        "Resultados medibles",
      ]
    },
    values: {
      title: "Nuestros Pilares",
      description: "Lo que nos impulsa cada día a ser mejores.",
      items: [
         { title: "Misión", description: "Empoderar a empresas de todos los tamaños con herramientas digitales accesibles, potentes y personalizadas.", icon: "Target" },
         { title: "Visión", description: "Ser el referente líder en transformación digital, reconocidos por nuestra innovación y calidad humana.", icon: "Eye" },
         { title: "Valores", description: "Integridad, pasión por la excelencia, aprendizaje continuo y un profundo respeto por nuestros clientes y equipo.", icon: "Heart" }
      ]
    },
    description: "Somos importadores directos de las mejores marcas de electrodomésticos. Nuestra misión es llevar tecnología y confort a tu hogar con productos originales y garantía garantizada.",
    features: [
        "Productos 100% Originales",
        "Garantía Directa de Fábrica",
        "Envíos Seguros a Todo el País",
        "Los Mejores Precios del Mercado",
    ],
    image: "/placeholder.webp",
  },

  contact_page: {
    hero: {
      badge: "Contáctanos",
      title_prefix: "Estamos aquí para",
      title_suffix: "Ayudarte",
      description: "¿Tienes alguna pregunta o necesitas más información? Envíanos un mensaje o visítanos."
    }
  },

  services_page: {
     hero: {
       badge: "Nuestros Servicios",
       title_prefix: "Soluciones integrales para",
       title_suffix: "Tu Crecimiento",
       description: "Explora nuestra gama completa de servicios diseñados para potenciar cada aspecto de tu negocio, desde la estrategia hasta la ejecución."
     },
     process: {
       title: "Nuestro Proceso de Trabajo",
       description: "Un enfoque estructurado y transparente para garantizar el éxito de tu proyecto."
     },
     pricing: {
       title: "Planes y Precios",
       description: "Elige el plan que mejor se adapte a tus necesidades. Sin costos ocultos."
     }
  },

  cta_section: {
     title: "¿Listo para equipar tu hogar con lo mejor?",
     description: "Descubre la calidad, tecnología y diseño que solo nosotros podemos ofrecerte. Productos exclusivos al mejor precio.",
     button_primary: "Llamar ahora",
  },

  auth: {
     login: {
       title: "Iniciar sesión",
       description: "Ingresa tu correo electrónico para acceder a tu cuenta",
       email_label: "Correo electrónico",
       password_label: "Contraseña",
       forgot_password: "¿Olvidaste tu contraseña?",
       submit_button: "Ingresar",
       google_button: "Ingresar con Google",
       register_text: "¿No tienes una cuenta?",
       register_link: "Regístrate"
     }
  },
  
  categories: [
    {
      id: "kitchen",
      name: "Cocina",
      icon: "Utensils",
      href: "/catalogo?category=cocina",
    },
    {
      id: "air-fryers",
      name: "Freidoras de Aire",
      icon: "Flame",
      href: "/catalogo?category=freidoras",
    },
    {
      id: "cleaning",
      name: "Limpieza",
      icon: "Sparkles",
      href: "/catalogo?category=limpieza",
    },
    {
      id: "refrigeration",
      name: "Refrigeración",
      icon: "Snowflake",
      href: "/catalogo?category=refrigeracion",
    },
    {
      id: "climate",
      name: "Calefacción y Ventilación",
      icon: "Wind",
      href: "/catalogo?category=climatizacion",
    },
    {
      id: "small-appliances",
      name: "Pequeños Electrodomésticos",
      icon: "Coffee",
      href: "/catalogo?category=pequenos",
    },
    {
      id: "ovens",
      name: "Hornos",
      icon: "ChefHat",
      href: "/catalogo?category=hornos",
    },
    {
      id: "deals",
      name: "Ofertas",
      icon: "Tag",
      href: "/catalogo?category=ofertas",
    },
  ],

  // Social Links
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/593997196340",
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
      title: "Precios de Mayorista",
      description: "Ofrecemos los mejores precios del mercado en ventas al por mayor y menor.",
      icon: "DollarSign",
    },
    {
      title: "Soporte Personalizado",
      description: "Te asesoramos en tu compra para que elijas el producto ideal para ti.",
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
  value_proposition: {
    description: "Nos diferenciamos por ofrecer los mejores electrodomésticos importados, con precios competitivos y un servicio que prioriza tu satisfacción.",
    items: [
        { icon: "Zap", title: "Entrega Inmediata", description: "Recibe tus productos en tiempo récord. Contamos con stock disponible para envío inmediato." },
        { icon: "Shield", title: "Garantía Oficial", description: "Todos nuestros productos cuentan con garantía directa de fábrica. Compra con total confianza." },
        { icon: "Target", title: "Asesoría Experta", description: "¿Dudas? Nuestro equipo de expertos te ayudará a elegir el electrodoméstico perfecto para ti." },
        { icon: "Smile", title: "Atención Post-Venta", description: "Estamos contigo incluso después de tu compra. Soporte técnico y atención dedicada." },
    ]
  },

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

  // UI Strings
  ui: {
    view_more: "Ver más",
    more_info: "Más información",
    how_to_get_there: "Cómo llegar ↗",
    featured_products: {
      title: "Productos Destacados",
      link_text: "Ver más",
    },
    categories: {
      title: "Categorías que podrían interesarte",
      link_text: "Ver todas las categorías",
    },
    catalogo: {
        title: "Catálogo",
        no_products_title: "No se encontraron productos",
        no_products_desc: "Intenta ajustar tus filtros para encontrar lo que buscas.",
    }
  },

  // Pages Metadata & Content
  pages: {
    about: {
        title: "Nosotros",
        description: "Conoce nuestra historia, misión y el equipo detrás de nuestros servicios.",
    },
    contact: {
        title: "Contacto",
        description: "Ponte en contacto con nosotros. Estamos aquí para responder tus preguntas.",
    },
    services: {
        title: "Nuestros Servicios",
        description: "Descubre cómo podemos ayudarte a potenciar tu negocio con nuestros servicios especializados.",
    },
    catalogo: {
        title: "Catálogo",
        description: "Explora nuestro catálogo de productos.",
    }
  },

  // Component Specific Configs
  filter_sidebar: {
    title: "Filtros",
    save_button: "Guardar",
    clear_button: "Limpiar",
    search_placeholder: "Buscar...",
    sections: {
        category: "Categoría",
        price: "Precio",
        shipping: "Envío Global",
        rating: "Calificación",
    },
    view_all: "Ver todo",
    price_from: "Desde",
    price_to: "Hasta",
    rating_or_more: "o más",
    categories: [
        { id: "apple", label: "Apple", count: 56 },
        { id: "microsoft", label: "Microsoft", count: 45 },
        { id: "logitech", label: "Logitech", count: 97 },
        { id: "sony", label: "Sony", count: 234 },
        { id: "asus", label: "Asus", count: 97 },
        { id: "dell", label: "Dell", count: 56 },
        { id: "msi", label: "MSI", count: 97 },
        { id: "canon", label: "Canon", count: 49 },
        { id: "benq", label: "BenQ", count: 23 },
        { id: "razor", label: "Razor", count: 49 },
    ],
    shipping_regions: [
        { id: "na", label: "Norteamérica" },
        { id: "sa", label: "Sudamérica" },
        { id: "asia", label: "Asia" },
        { id: "aus", label: "Australia" },
        { id: "eur", label: "Europa" },
    ]
  },

  team_section: {
      title: "Conoce al Equipo",
      description: "Mentes creativas y técnicas trabajando juntas por tu éxito.",
  },

  pricing_section: {
      popular_badge: "Más Popular",
      per_project: "/proyecto",
  },

  // Footer
  footer: {
    links_title: "Enlaces",
    contact_title: "Contacto",
    hours_title: "Horario",
    rights_text: "Todos los derechos reservados.",
  },

  // Contact Form
  contact_form: {
    title: "Envíanos un mensaje",
    description: "Completa el formulario y te responderemos lo antes posible.",
    name_label: "Nombre",
    name_placeholder: "Tu nombre",
    id_label: "Cédula / RUC",
    id_placeholder: "Ingresa tu número de identificación",
    email_label: "Email",
    email_placeholder: "tu@email.com",
    message_label: "Mensaje",
    message_placeholder: "¿En qué podemos ayudarte?",
    submit_button: "Enviar Mensaje",
    success_message: "Mensaje enviado correctamente",
    success_description: "Nos pondremos en contacto contigo pronto.",
  },

  // Product Card
  product_card: {
    quick_look: "Vista rápida",
    add_to_favorites: "Añadir a favoritos",
    buy_button: "Comprar",
  },
  
  // Products Data
  products: [
      {
        id: "9",
        name: "Ninja Foodi Smart XL Parrilla 4 en 1 para interiores",
        price: 249.99,
        rating: 4.8,
        reviewsCount: 156,
        imageLight: "/ninjaProductos/foodi-smart.png",
        imageDark: "/ninjaProductos/foodi-smart.png",
        discountBadge: "New Arrival",
        features: [
          { label: "4-in-1", iconType: "default" },
          { label: "Smart Cook", iconType: "best-seller" },
        ],
        images: ["/ninjaProductos/foodi-smart.png"],
        description: "Asa, asa al aire, hornea y asa todas tus comidas y lados favoritos para toda tu familia con este aparato de encimera 4 en 1 reacondicionado. Cuenta con un sistema de cocción inteligente con 4 ajustes de proteínas inteligentes y 9 niveles de preparación personalizables.",
      },
      {
        id: "10",
        name: "Horno eléctrico con Air Fryer XL Pro 10 en 1 - Ninja Foodi",
        price: 299.99,
        rating: 4.9,
        reviewsCount: 89,
        imageLight: "/ninjaProductos/horno-electrico.png",
        imageDark: "/ninjaProductos/horno-electrico.png",
        discountBadge: "Best Seller",
        features: [
          { label: "10-in-1", iconType: "default" },
          { label: "XL Capacity", iconType: "fast-delivery" },
        ],
        images: ["/ninjaProductos/horno-electrico.png"],
        description: "El horno con freidora de aire Ninja Foodi XL Pro, fríe o asa con aire, hornea, tuesta, deshidrata y más. Hasta 10 veces más potente que un horno eléctrico de convección tradicional, con resultados 30% más crujientes.",
      },
      {
        id: "11",
        name: "Shark Steam Mop - Limpiador a Vapor",
        price: 79.99,
        rating: 4.6,
        reviewsCount: 230,
        imageLight: "/ninjaProductos/mop.png",
        imageDark: "/ninjaProductos/mop.png",
        discountBadge: "Eco Friendly",
        features: [
          { label: "Steam Power", iconType: "default" },
          { label: "Chemical Free", iconType: "best-price" },
        ],
        images: ["/ninjaProductos/mop.png"],
        description: "Limpia sin esfuerzo con el poder del vapor. Con solo agua, corta rápidamente los desastres atascados, sin productos químicos y sin residuos. Diseñado pensando en la facilidad, el trapeador de vapor Shark es ligero y maniobrable.",
      },
      {
        id: "12",
        name: "Ninja Foodi Freidora de Aire 2 Cestas Independientes",
        price: 179.99,
        rating: 4.9,
        reviewsCount: 412,
        imageLight: "/ninjaProductos/horno.png",
        imageDark: "/ninjaProductos/horno.png",
        discountBadge: "DualZone",
        features: [
          { label: "2 Baskets", iconType: "default" },
          { label: "DualZone", iconType: "fast-delivery" },
        ],
        images: ["/ninjaProductos/horno.png"],
        description: "Como por arte de magia: crea un banquete para toda tu familia al preparar 2 comidas distintas en nuestra freidora. Esto es posible porque creamos la primera freidora de aire con 2 cestas independientes.",
      },
      {
        id: "13",
        name: "Olla de presión multiusos Tecnología Tender Crisp Ninja Foodi",
        price: 199.99,
        rating: 4.8,
        reviewsCount: 320,
        imageLight: "/ninjaProductos/olla.png",
        imageDark: "/ninjaProductos/olla.png",
        discountBadge: "All-in-One",
        features: [
          { label: "6-in-1", iconType: "default" },
          { label: "TenderCrisp", iconType: "best-seller" },
        ],
        images: ["/ninjaProductos/olla.png"],
        description: "Versátil en tu cocina y prepara lo que quieras en ella. Podrás tener hasta 6 diferentes aparatos en UNO SOLO, cocina múltiples platillos en cuestión de minutos. Con ella podrás: Cocinar a presión, Cocinar en modo lento, Freír, Dorar, Rostizar, Hornear.",
      },
  ],
};
