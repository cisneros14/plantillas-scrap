export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ElectroFlores",
  description: "Ventas al contado y a crédito personal y bancario de electrodomésticos y motocicletas al por menor.",
  url: "https://electroflores.com",
  ogImage: "https://electroflores.com/og.jpg",
  author: {
    name: "ElectroFlores",
    url: "https://electroflores.com",
    twitter: "@electroflores",
  },
  keywords: ["electrodomésticos", "motocicletas", "hogar", "cocina", "crédito", "quito"],
  applicationName: "ElectroFlores",
  creator: "ElectroFlores",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Electrodomésticos Flores",
    phone: "+593 99 756 4415",
    whatsapp: "593997564415",
    address: "Av. Mariscal Sucre S23-80 y Portovelo, Quito, Ecuador",
    coordinates: {
      lat: -0.2692, // Approximate for Av Mariscal Sucre S23, Quito
      long: -78.5522,
    },
    email: "electrodflores@gmail.com",
    operating_hours: "Lu-Sa 09:30-18:30",
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
    primary: "#080753", 
    primary_foreground: "0 0% 98%",
    secondary: "#e30512", // Added secondary color
    secondary_foreground: "0 0% 98%",
    font_sans: "font-sans",
    logo_text: "ELECTRO FLORES",
    logo: "/logo2.png", // Keeping existing path as user didn't provide new asset filename, but name changed
    logo_hero: "/logo.jpg",
  },

  hero: {
    badge: {
        text: "Ofertas de Temporada",
        href: "#",
    },
    title: "Electrodomésticos y Motocicletas para tu Hogar",
    description: "Ventas al contado y a crédito. Encuentra las mejores marcas con garantía y respaldo.",
    actions: [
        { label: "Ver Catálogo", href: "/catalogo", variant: "default", icon: "ArrowUpRight" },
        { label: "Contactar", href: "/contact", variant: "outline", icon: "CirclePlay" }
    ]
  },

  about: {
    hero: {
      badge: "Sobre Nosotros",
      title_prefix: "Tu confianza, nuestra",
      title_suffix: "Prioridad",
      description: "En ElectroFlores nos dedicamos a equipar tu hogar y facilitar tu movilidad con los mejores productos y planes de financiamiento."
    },
    story: {
      title: "Nuestra Historia",
      description1: "Fundada con la visión de facilitar el acceso a la tecnología y movilidad en Ecuador, ElectroFlores se ha consolidado como un referente en la venta de electrodomésticos y motocicletas.",
      description2: "Nos enorgullece ofrecer no solo productos de alta calidad, sino también soluciones financieras accesibles que permiten a nuestros clientes mejorar su calidad de vida.",
      image: "/placeholder.webp",
      features: [
        "Crédito Directo",
        "Marcas Garantizadas",
        "Atención Personalizada",
        "Respaldo Técnico",
      ]
    },
    values: {
      title: "Nuestros Valores",
      description: "Los principios que guían nuestro servicio cada día.",
      items: [
         { title: "Honestidad", description: "Transparencia total en nuestros precios y planes de financiamiento.", icon: "Target" },
         { title: "Servicio", description: "Estamos para asesorarte y acompañarte en tu compra y post-venta.", icon: "Heart" },
         { title: "Calidad", description: "Solo trabajamos con marcas reconocidas que garantizan durabilidad.", icon: "Shield" }
      ]
    },
    description: "Somos distribuidores autorizados de las mejores marcas. Nuestra misión es llevar confort y movilidad a tu vida.",
    features: [
        "Productos 100% Originales",
        "Garantía de Fábrica",
        "Crédito Fácil y Rápido",
        "Entrega a Domicilio",
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
       title_prefix: "Soluciones completas para",
       title_suffix: "Tu Hogar",
       description: "Descubre nuestra variedad de productos y facilidades de pago diseñadas para ti."
     },
     process: {
       title: "Cómo Comprar",
       description: "Adquirir tus productos en ElectroFlores es fácil y rápido."
     },
     pricing: {
       title: "Planes de Financiamiento",
       description: "Elige la forma de pago que más te convenga."
     }
  },

  cta_section: {
     title: "¿Listo para estrenar?",
     description: "Visítanos o contáctanos hoy mismo para conocer nuestras promociones vigentes en motos y electrodomésticos.",
     button_primary: "Contactar por WhatsApp",
  },

  auth: {
     login: {
       title: "Iniciar sesión",
       description: "Ingresa a tu cuenta para ver el estado de tu crédito",
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
    facebook: "https://facebook.com/ElectroFlores", // Inferring from screenshot content
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/593997564415",
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
      title: "Elige tu Producto",
      description: "Visita nuestro local o revisa nuestro catálogo en línea.",
      icon: "ShoppingBag",
    },
    {
      title: "Solicita tu Crédito",
      description: "Evaluación inmediata con mínimos requisitos.",
      icon: "FileText",
    },
    {
      title: "Aprobación y Entrega",
      description: "Firmas, recibes tu producto y empiezas a disfrutar.",
      icon: "CheckCircle",
    },
    {
      title: "Soporte Continuo",
      description: "Estamos contigo para cualquier consulta o garantía.",
      icon: "Headset",
    },
  ],
  pricing: [
    {
      name: "Contado",
      price: "Mejor Precio",
      description: "Obtén descuentos especiales por pagos en efectivo o transferencia.",
      features: ["Descuento Inmediato", "Entrega Rápida", "Garantía Completa", "Sin intereses"],
      cta: "Consultar",
      popular: false,
    },
    {
      name: "Crédito Directo",
      price: "Cuotas Bajas",
      description: "Plan de pagos semanal o mensual ajustado a tu presupuesto.",
      features: ["Sin entrada*", "Aprobación Rápida", "Pagos Flexibles", "Mínimos Requisitos"],
      cta: "Solicitar",
      popular: true,
    },
    {
      name: "Tarjeta de Crédito",
      price: "Diferido",
      description: "Aceptamos todas las tarjetas de crédito.",
      features: ["Hasta 24 meses", "Sin entrada", "Acumula Puntos", "Pagos Corrientes"],
      cta: "Pagar",
      popular: false,
    },
  ],
  value_proposition: {
    description: "En ElectroFlores nos diferenciamos por ofrecer facilidad, variedad y respaldo en cada compra.",
    items: [
        { icon: "Zap", title: "Entrega Inmediata", description: "Lleva tu producto a casa el mismo día." },
        { icon: "Shield", title: "Garantía Real", description: "Respaldo directo en tienda y con fabricantes." },
        { icon: "CreditCard", title: "Crédito Fácil", description: "Planes de financiamiento que sí puedes pagar." },
        { icon: "Smile", title: "Atención Amable", description: "Te tratamos como familia, siempre buscando lo mejor para ti." },
    ]
  },

  team: [
    {
      name: "Equipo de Ventas",
      role: "Asesores Comerciales",
      bio: "Listos para ayudarte a encontrar lo que necesitas.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
    // ... can add specific team members if known
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
      title: "Todo lo que necesitas",
      link_text: "Ver catálogo completo",
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
        description: "Conoce ElectroFlores, tu aliado en equipamiento para el hogar y transporte.",
    },
    contact: {
        title: "Contacto",
        description: "Visítanos en nuestra sucursal o escríbenos.",
    },
    services: {
        title: "Servicios y Crédito",
        description: "Descubre nuestras facilidades de pago y garantías.",
    },
    catalogo: {
        title: "Catálogo",
        description: "Electrodomésticos y Motocicletas a tu alcance.",
    }
  },

  // Component Specific Configs
  filter_sidebar: {
    title: "Filtros",
    save_button: "Aplicar",
    clear_button: "Borrar",
    search_placeholder: "Buscar marca o producto...",
    sections: {
        category: "Categoría",
        price: "Precio",
        shipping: "Entrega",
        rating: "Valoración",
    },
    view_all: "Ver más",
    price_from: "Desde",
    price_to: "Hasta",
    rating_or_more: "o más",
    categories: [
        { id: "kitchen", label: "Cocina", count: 120 },
        { id: "laundry", label: "Lavado", count: 45 },
        { id: "refrigeration", label: "Refrigeración", count: 30 },
        { id: "motorcycles", label: "Motos", count: 15 },
        { id: "tv_audio", label: "TV y Audio", count: 50 },
    ],
    shipping_regions: [
        { id: "uio_norte", label: "Quito Norte" },
        { id: "uio_sur", label: "Quito Sur" },
        { id: "uio_centro", label: "Quito Centro" },
        { id: "valles", label: "Valles" },
    ]
  },

  team_section: {
      title: "Nuestro Equipo",
      description: "Comprometidos con brindarte la mejor experiencia de compra.",
  },

  pricing_section: {
      popular_badge: "Recomendado",
      per_project: "",
  },

  // Footer
  footer: {
    links_title: "Navegación",
    contact_title: "Visítanos",
    hours_title: "Atención",
    rights_text: "ElectroFlores. Todos los derechos reservados.",
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
