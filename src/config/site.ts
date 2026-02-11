export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Comercial Chávez",
  description: "Electrodomésticos, tecnología y hogar. Calidad y garantía en Quito.",
  url: "https://comercialchavez.com",
  ogImage: "https://comercialchavez.com/og.jpg",
  author: {
    name: "Comercial Chávez",
    url: "https://comercialchavez.com",
    twitter: "@comercialchavez",
  },
  keywords: ["electrodomésticos", "tecnología", "hogar", "quito", "ecuador", "cocina", "tv", "audio"],
  applicationName: "ComercialChavezApp",
  creator: "Comercial Chávez",
  language: "es",
  
  // Business Specifics for JSON-LD and Contact Info
  business: {
    name: "Comercial Chávez",
    phone: "+593 99 877 0180",
    whatsapp: "593998770180",
    landline: "(02) 247-4410",
    address: "Av. Jaime Roldós y Modesto Chávez, Carcelén, Quito, Ecuador (Diagonal al Hospital San Francisco IESS)",
    coordinates: {
      lat: -0.098, // Approximate for Carcelén/Quito
      long: -78.48,
    },
    email: "comercialchavezm@hotmail.com",
    operating_hours: "Abierto hasta las 7 p. m.",
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
    primary: "#008000", // Yellow from logo
    primary_foreground: "#000000",
    secondary: "#FFD700", // Green from 
    secondary_foreground: "#ffffff",
    font_sans: "font-sans",
    logo_text: "Comercial Chávez",
    logo: "/logoChavez.png", // Assuming user might upload this later or we keep generic for now
    logo_hero: "/logoHer.png",
  },

  hero: {
    badge: {
        text: "¡Liquidación Total!",
        href: "/catalogo",
    },
    title: "Equipa tu hogar con los mejores precios",
    description: "Electrodomésticos, tecnología y todo para tu hogar en un solo lugar. Visítanos en Carcelén, Quito.",
    actions: [
        { label: "Ver Catálogo", href: "/catalogo", variant: "default", icon: "ArrowUpRight" },
        { label: "Contactar", href: "/contact", variant: "outline", icon: "MessageCircle" }
    ]
  },

  about: {
    hero: {
      badge: "Nuestra Historia",
      title_prefix: "Más de una década",
      title_suffix: "Sirviendo a Quito",
      description: "Somos una empresa familiar dedicada a ofrecerte los mejores productos para tu hogar con garantía y confianza."
    },
    story: {
      title: "Quiénes Somos",
      description1: "Comercial Chávez nació con la misión de facilitar el acceso a electrodomésticos y tecnología de calidad a las familias de Quito. Ubicados estratégicamente en Carcelén, nos hemos convertido en un referente de confianza.",
      description2: "Nos enorgullece ofrecer un trato personalizado, asesoría experta y precios competitivos. Nuestra prioridad es tu satisfacción y bienestar en el hogar.",
      image: "/placeholder.webp",
      features: [
        "Atención personalizada",
        "Garantía real",
        "Precios justos",
        "Ubicación accesible",
      ]
    },
    values: {
      title: "Lo que nos mueve",
      description: "Compromiso con nuestros clientes y la comunidad.",
      items: [
         { title: "Confianza", description: "Construimos relaciones a largo plazo con honestidad.", icon: "Shield" },
         { title: "Calidad", description: "Solo ofrecemos productos de marcas reconocidas y duraderas.", icon: "Star" },
         { title: "Servicio", description: "Estamos para ayudarte antes, durante y después de tu compra.", icon: "Heart" }
      ]
    },
    description: "Tu aliado en electrodomésticos y tecnología. Calidad garantizada. Encuéntranos en Carcelén.",
    features: [
        "Productos 100% Originales",
        "Garantía de Fábrica",
        "Entrega a Domicilio",
        "Asesoría Técnica",
    ],
    image: "/placeholder.webp",
  },

  contact_page: {
    hero: {
      badge: "Contáctanos",
      title_prefix: "Estamos listos para",
      title_suffix: "Atenderte",
      description: "Visítanos en nuestro local o escríbenos. Estamos ubicados diagonal al Hospital San Francisco IESS."
    }
  },

  services_page: {
     hero: {
       badge: "Nuestros Servicios",
       title_prefix: "Más que solo",
       title_suffix: "Ventas",
       description: "Ofrecemos una experiencia completa de compra con servicios pensados en tu comodidad."
     },
     process: {
       title: "Cómo Trabajamos",
       description: "Simple y transparente para tu tranquilidad."
     },
     pricing: {
       title: "Ofertas y Promociones",
       description: "Precios especiales para equipar tu hogar."
     }
  },

  cta_section: {
     title: "¿Listo para renovar tu hogar?",
     description: "Aprovecha nuestros grandes descuentos por liquidación y ofertas especiales.",
     button_primary: "Ver Ofertas",
  },

  auth: {
     login: {
       title: "Iniciar sesión",
       description: "Accede a tu cuenta para ver tus pedidos",
       email_label: "Correo electrónico",
       password_label: "Contraseña",
       forgot_password: "¿Olvidaste tu contraseña?",
       submit_button: "Ingresar",
       google_button: "Ingresar con Google",
       register_text: "¿No tienes una cuenta?",
       register_link: "Regístrate"
     }
  },
  
  catalog: {
    categories: [
      { id: "linea-blanca", label: "Línea Blanca", count: 120 },
      { id: "tv-audio", label: "TV y Audio", count: 85 },
      { id: "pequenos-electro", label: "Pequeños Electro", count: 200 },
      { id: "tecnologia", label: "Tecnología", count: 150 },
      { id: "hogar", label: "Hogar", count: 90 },
      { id: "cocina", label: "Cocina", count: 110 },
    ],
    shippingRegions: [
      { id: "quito-norte", label: "Quito Norte" },
      { id: "quito-centro", label: "Quito Centro" },
      { id: "quito-sur", label: "Quito Sur" },
      { id: "valles", label: "Valles" },
    ],
  },
  
  // NOTE: This products array needs to remain populated for the site to function correctly.
  // I am updating it to reflect more generic appliance/tech items fitting the new business.
  products: [
    {
      id: "1",
      name: "Microondas Innova 0.7 pies cúbicos",
      price: 85.00,
      rating: 4.5,
      reviewsCount: 12,
      imageLight: "/productos/microndasInnova.jpg",
      imageDark: "/productos/microndasInnova.jpg",
      discountBadge: "Nuevo",
      features: [
        { label: "700 Watts", iconType: "default" as const },
        { label: "20 Litros", iconType: "best-price" as const },
      ],
      images: ["/productos/microndasInnova.jpg"],
      description: "Microondas Innova de 0.7 pies cúbicos con 700 Watts de potencia. Funciones para recalentar, descongelar y cocinar tus alimentos favoritos.",
      specs: [
          { label: "Capacidad", value: "20 Litros" },
          { label: "Potencia", value: "700 Watts" },
      ]
    },
    {
      id: "2",
      name: "Freidora de Aire Oster 3.2L",
      price: 90.00,
      rating: 4.8,
      reviewsCount: 45,
      imageLight: "/productos/freidoraOster.jpg",
      imageDark: "/productos/freidoraOster.jpg",
      discountBadge: "Saludable",
      features: [
        { label: "3.2 Litros", iconType: "default" as const },
        { label: "-95% Aceite", iconType: "best-seller" as const },
      ],
      images: ["/productos/freidoraOster.jpg"],
      description: "Cocina con 95% menos aceite. Freidora de aire Oster con control de temperatura y capacidad de 3.2 litros para comidas más saludables.",
      specs: [
          { label: "Capacidad", value: "3.2 Litros" },
          { label: "Control", value: "Temperatura Ajustable" },
      ]
    },
    {
      id: "3",
      name: "Secadora LG a Gas Carga Frontal 21kg",
      price: 579.00,
      rating: 4.9,
      reviewsCount: 28,
      imageLight: "/productos/secadorLgGas.jpg",
      imageDark: "/productos/secadorLgGas.jpg",
      discountBadge: "Oferta del Mes",
      features: [
        { label: "21 Kg", iconType: "fast-delivery" as const },
        { label: "Sensor Dry", iconType: "default" as const },
      ],
      images: ["/productos/secadorLgGas.jpg"],
      description: "Secadora LG a gas de carga frontal con gran capacidad de 21kg (46.2 lb). Detecta la humedad en las prendas y ajusta automáticamente el tiempo de secado para ahorrar energía.",
      specs: [
          { label: "Capacidad", value: "21 kg" },
          { label: "Tipo", value: "Gas / Carga Frontal" }
      ]
    },
    {
      id: "4",
      name: "Lavadora Whirlpool Carga Superior 17kg",
      price: 629.00,
      rating: 4.7,
      reviewsCount: 35,
      imageLight: "/productos/lavadoraWhirpol.jpg",
      imageDark: "/productos/lavadoraWhirpol.jpg",
      discountBadge: "Oferta",
      features: [
          { label: "17 Kg", iconType: "default" as const },
          { label: "Xpert System", iconType: "best-price" as const },
      ],
       images: ["/productos/lavadoraWhirpol.jpg"],
       description: "Lavadora Whirlpool de 17kg (38 lb) color blanco. Cuenta con el mejor sistema de lavado Xpert System para remover las manchas más difíciles. Incluye 10 años de garantía en el motor.",
       specs: [
           { label: "Capacidad", value: "17 kg" },
           { label: "Sistema", value: "Xpert System" },
           { label: "Smart Load", value: "Sí" }
       ]
    },
     {
      id: "5",
      name: "Parlante Portátil LG XBOOM 600W",
      price: 299.00,
      rating: 4.8,
      reviewsCount: 50,
      imageLight: "/productos/parlanteLg.jpg",
      imageDark: "/productos/parlanteLg.jpg",
      discountBadge: "Fiesta",
      features: [
          { label: "600W RMS", iconType: "fast-delivery" as const },
          { label: "Karaoke Star", iconType: "default" as const },
      ],
       images: ["/productos/parlanteLg.jpg"],
       description: "Parlante LG XBOOM One Body con 600W de potencia RMS (6000W PMPO). Funciones de DJ, Karaoke Star, Wireless Party Link y conectividad Bluetooth/USB.",
       specs: [
           { label: "Potencia", value: "600W RMS" },
           { label: "Conectividad", value: "Bluetooth, USB, AUX" },
           { label: "Funciones", value: "Karaoke, DJ Auto" }
       ]
    },
  ],

  categories: [
    {
      id: "linea-blanca",
      name: "Línea Blanca",
      icon: "Snowflake",
      href: "/catalogo?category=linea-blanca",
    },
    {
      id: "tv-audio",
      name: "TV y Audio",
      icon: "Tv",
      href: "/catalogo?category=tv-audio",
    },
    {
      id: "pequenos-electro",
      name: "Pequeños Electro",
      icon: "Coffee",
      href: "/catalogo?category=pequenos-electro",
    },
    {
      id: "tecnologia",
      name: "Tecnología",
      icon: "Smartphone",
      href: "/catalogo?category=tecnologia",
    },
    {
      id: "hogar",
      name: "Hogar",
      icon: "Home",
      href: "/catalogo?category=hogar",
    },
    {
      id: "cocina",
      name: "Cocina",
      icon: "ChefHat",
      href: "/catalogo?category=cocina",
    },
  ],

  // Social Links
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100063630663731", // Inferred from image context or placeholder
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    whatsapp: "https://wa.me/593998770180",
  },

  // Content Sections (Maintaining existing data structure)
  services: [
    {
      title: "Entrega a Domicilio",
      description: "Recibe tus compras en la puerta de tu casa en Quito y sus valles.",
      icon: "Truck", 
    },
    {
      title: "Garantía de Calidad",
      description: "Productos 100% nuevos y con garantía de fábrica.",
      icon: "ShieldCheck",
    },
    {
      title: "Precios de Liquidación",
      description: "Aprovecha nuestras ofertas y descuentos especiales todo el año.",
      icon: "Tag",
    },
    {
      title: "Servicio Técnico",
      description: "Contamos con respaldo para tus electrodomésticos.",
      icon: "Wrench",
    },
  ],
  testimonials: [
    {
      name: "Juan Pérez",
      role: "Cliente Frecuente",
      content: "Excelente atención y precios muy buenos. Compré mi refrigeradora aquí y me llegó el mismo día.",
      avatar: "/avatars/01.png",
    },
    {
      name: "Mónica Andrade",
      role: "Ama de Casa",
      content: "Me encanta la variedad de productos para la cocina. Siempre encuentro lo que busco.",
      avatar: "/avatars/02.png",
    },
    {
      name: "Roberto Silva",
      role: "Cliente",
      content: "Recomendados 100%. La garantía es real y te ayudan con cualquier duda.",
      avatar: "/avatars/03.png",
    },
  ],
  faq: [
    {
      question: "¿Dónde están ubicados?",
      answer: "Estamos en Carcelén, Av. Jaime Roldós y Modesto Chávez, diagonal al Hospital San Francisco IESS, Quito.",
    },
    {
      question: "¿Hacen envíos a domicilio?",
      answer: "Sí, realizamos entregas a domicilio dentro de Quito y valles aledaños.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos efectivo, transferencias bancarias y tarjetas de crédito/débito.",
    },
    {
      question: "¿Tienen garantía?",
      answer: "Sí, todos nuestros productos cuentan con la garantía oficial de su respectiva marca.",
    },
  ],
  process: [
    {
      title: "Visítanos o Contáctanos",
      description: "Ven a nuestro local o escríbenos por WhatsApp para asesorarte.",
      icon: "MessageCircle",
    },
    {
      title: "Elige tu Producto",
      description: "Selecciona entre nuestra gran variedad de electrodomésticos y tecnología.",
      icon: "ShoppingCart",
    },
    {
      title: "Pago Seguro",
      description: "Realiza tu pago de forma segura en efectivo o tarjeta.",
      icon: "CreditCard",
    },
    {
      title: "Entrega",
      description: "Llevamos el producto a tu hogar o lo retiras en el local.",
      icon: "Truck",
    },
  ],
  pricing: [
    // Keeping generic structure but maybe unused for retail store unless for specific service packages
    {
      name: "Combo Cocina",
      price: "$250",
      description: "Equipa tu cocina con lo básico.",
      features: ["Licuadora", "Olla Arrocera", "Sanduchera", "Juego de Cuchillos"],
      cta: "Ver Combo",
      popular: true,
    },
    {
       name: "Combo Entretenimiento",
       price: "$550",
       description: "Para disfrutar en familia.",
       features: ["Smart TV 43\"", "Barra de Sonido", "Soporte de Pared"],
       cta: "Ver Combo",
       popular: false,
    }
  ],
  value_proposition: {
    description: "En Comercial Chávez nos dedicamos a mejorar tu hogar con productos de calidad y un servicio que te hace sentir en familia.",
    items: [
        { icon: "MapPin", title: "Ubicación Estratégica", description: "Fácil de llegar en el norte de Quito, Carcelén." },
        { icon: "Clock", title: "Atención Extendida", description: "Abierto hasta las 7 p.m. para tu comodidad." },
        { icon: "ThumbsUp", title: "Marcas de Confianza", description: "Trabajamos con las mejores marcas del mercado." },
        { icon: "DollarSign", title: "Mejores Precios", description: "Ofertas y liquidaciones constantes." },
    ]
  },

  team: [
    {
      name: "Sr. Chávez",
      role: "Gerente General",
      bio: "Fundador con años de experiencia en el sector comercial.",
      image: "/placeholder.webp",
      social: { twitter: "#", linkedin: "#" }
    },
    // Placeholder team members
  ],

  // UI Strings
  ui: {
    view_more: "Ver más",
    more_info: "Más información",
    how_to_get_there: "Cómo llegar ↗",
    featured_products: {
      title: "Ofertas Destacadas",
      link_text: "Ver catálogo completo",
    },
    categories: {
      title: "Nuestras Categorías",
      link_text: "Explorar todo",
    },
    catalogo: {
        title: "Catálogo de Productos",
        no_products_title: "No encontramos lo que buscas",
        no_products_desc: "Prueba con otra categoría o contáctanos para verificar stock.",
    }
  },

  // Pages Metadata & Content
  pages: {
    about: {
        title: "Sobre Comercial Chávez",
        description: "Tu tienda de confianza en el norte de Quito.",
    },
    contact: {
        title: "Contáctanos",
        description: "Estamos ubicados en Carcelén, listos para atenderte.",
    },
    services: {
        title: "Nuestros Servicios",
        description: "Garantía, entrega y atención personalizada.",
    },
    catalogo: {
        title: "Catálogo Online",
        description: "Revisa nuestra variedad de productos y ofertas.",
    }
  },

  // Component Specific Configs
  filter_sidebar: {
    title: "Filtrar por",
    save_button: "Aplicar",
    clear_button: "Borrar filtros",
    search_placeholder: "Buscar producto...",
    sections: {
        category: "Categoría",
        price: "Precio",
        shipping: "Zona de Envío",
        rating: "Calificación",
    },
    view_all: "Ver todos",
    price_from: "Mín",
    price_to: "Máx",
    rating_or_more: "o más",
    categories: [
        { id: "linea-blanca", label: "Línea Blanca", count: 120 },
        { id: "tv-audio", label: "TV y Audio", count: 85 },
        { id: "pequenos-electro", label: "Pequeños Electro", count: 200 },
        { id: "tecnologia", label: "Tecnología", count: 150 },
        { id: "hogar", label: "Hogar", count: 90 },
        { id: "cocina", label: "Cocina", count: 110 },
    ],
    shipping_regions: [
        { id: "norte", label: "Quito Norte" },
        { id: "centro", label: "Quito Centro" },
        { id: "sur", label: "Quito Sur" },
        { id: "valles", label: "Cumbayá / Tumbaco" },
        { id: "chillos", label: "Los Chillos" },
    ]
  },

  team_section: {
      title: "Nuestro Equipo",
      description: "Personal capacitado para asesorarte en tu compra.",
  },

  pricing_section: {
      popular_badge: "Recomendado",
      per_project: "",
  },

  // Footer
  footer: {
    links_title: "Navegación",
    contact_title: "Visítanos",
    hours_title: "Horario de Atención",
    rights_text: "Comercial Chávez. Todos los derechos reservados.",
  },

  // Contact Form
  contact_form: {
    title: "Escríbenos",
    description: "¿Buscas un producto específico? Déjanos tu mensaje.",
    name_label: "Nombre Completo",
    name_placeholder: "Juan Pérez",
    id_label: "Teléfono",
    id_placeholder: "099 123 4567",
    email_label: "Correo (Opcional)",
    email_placeholder: "ejemplo@correo.com",
    message_label: "Tu Mensaje",
    message_placeholder: "Hola, estoy interesado en...",
    submit_button: "Enviar Consulta",
    success_message: "¡Mensaje Enviado!",
    success_description: "Te responderemos a la brevedad posible.",
  },

  // Product Card
  product_card: {
    quick_look: "Ver detalles",
    add_to_favorites: "Guardar",
    buy_button: "Consultar",
  },
};
