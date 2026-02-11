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
    secondary: "#2c7fbf",
    secondary_foreground: "0 0% 98%",
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
  // Sections Titles & Descriptions
  sectionTitles: {
    services: {
      title: "Nuestros Servicios",
      description: "Soluciones integrales diseñadas para impulsar tu negocio al siguiente nivel.",
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      description: "La satisfacción de nuestros clientes es nuestra mejor carta de presentación.",
    },
    faq: {
      title: "Preguntas Frecuentes",
      description: "Resolvemos tus dudas más comunes sobre nuestros servicios.",
    },
    contact: {
      title: "Información de Contacto",
      description: "Encuéntranos en nuestras oficinas o contáctanos directamente.",
      formTitle: "Envíanos un mensaje",
      formDescription: "Completa el formulario y te responderemos lo antes posible.",
    },
  },

  // Home Page Sections
  hero: {
    badge: {
      text: "¡Nuevo! Versión 2.0 disponible",
      href: "#",
      icon: "ArrowUpRight"
    },
    title: "Transformamos tus ideas en soluciones digitales",
    description: "Desarrollamos software a medida, sitios web y aplicaciones móviles que impulsan el crecimiento de tu negocio con tecnología de vanguardia.",
    primaryCta: {
      text: "Ver Servicios",
      href: "/services",
      icon: "ArrowUpRight"
    },
    secondaryCta: {
      text: "Cotizar Proyecto",
      icon: "CirclePlay"
    },
    image: {
      src: "/hero-image.png", 
      alt: "Hero Image"
    }
  },

  categories: [
    {
      id: "consultoria",
      name: "Consultoría",
      icon: "TrendingUp",
      href: "/services#consultoria",
    },
    {
      id: "desarrollo",
      name: "Desarrollo",
      icon: "Laptop",
      href: "/services#desarrollo",
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: "Megaphone",
      href: "/services#marketing",
    },
    {
      id: "soporte",
      name: "Soporte",
      icon: "Headset",
      href: "/services#soporte",
    },
  ],

  featuredProducts: [
    {
      id: "1",
      name: 'Plan Emprendedor',
      price: 499,
      rating: 5.0,
      reviewsCount: 120,
      imageLight: "/products/starter-plan.png",
      imageDark: "/products/starter-plan-dark.png",
      discountBadge: "Popular",
      features: [
        { label: "Sitio Web", iconType: "check" as const },
        { label: "SEO Básico", iconType: "check" as const },
      ],
    },
    {
      id: "2",
      name: "Plan Pyme",
      price: 999,
      rating: 4.9,
      reviewsCount: 85,
      imageLight: "/products/business-plan.png",
      imageDark: "/products/business-plan-dark.png",
      discountBadge: "-15%",
      features: [
        { label: "E-commerce", iconType: "check" as const },
        { label: "SEO Avanzado", iconType: "check" as const },
      ],
    },
    {
      id: "3",
      name: "Plan Corporativo",
      price: 2499,
      rating: 4.8,
      reviewsCount: 45,
      imageLight: "/products/corporate-plan.png",
      imageDark: "/products/corporate-plan-dark.png",
      discountBadge: "Completo",
      features: [
        { label: "App Móvil", iconType: "check" as const },
        { label: "Soporte 24/7", iconType: "check" as const },
      ],
    },
  ],

  valueProposition: {
    title: "¿Por qué elegirnos?",
    description: "Nos diferenciamos por ofrecer un servicio integral que combina tecnología, experiencia y compromiso para impulsar tu crecimiento.",
    items: [
      {
        icon: "Zap",
        title: "Rapidez y Eficiencia",
        description: "Optimizamos cada proceso para entregarte resultados en tiempo récord sin sacrificar la calidad.",
      },
      {
        icon: "Shield",
        title: "Seguridad Garantizada",
        description: "Tus datos y proyectos están protegidos con los más altos estándares de seguridad del mercado.",
      },
      {
        icon: "Target",
        title: "Enfoque en Resultados",
        description: "No solo trabajamos, nos alineamos con tus objetivos para asegurar el éxito de tu negocio.",
      },
      {
        icon: "Smile",
        title: "Soporte Dedicado",
        description: "Nuestro equipo está siempre disponible para resolver tus dudas y acompañarte en cada paso.",
      },
    ]
  },

  cta: {
    title: "¿Listo para transformar tu negocio?",
    description: "Únete a cientos de clientes satisfechos que han confiado en nosotros para llevar sus proyectos al siguiente nivel.",
    buttonText: "Llamar ahora",
  },

  about: {
    title: "Sobre Nosotros",
    description: "Somos una empresa comprometida con la excelencia y la satisfacción del cliente. Con años de experiencia en el sector, ofrecemos soluciones personalizadas que se adaptan a tus necesidades específicas.",
    features: [
      "Equipo altamente cualificado",
      "Atención personalizada 24/7",
      "Garantía de satisfacción",
      "Tecnología de vanguardia",
    ],
    image: "/about-image.jpg"
  },
  catalog: {
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
    shippingRegions: [
      { id: "na", label: "Norteamérica" },
      { id: "sa", label: "Sudamérica" },
      { id: "asia", label: "Asia" },
      { id: "aus", label: "Australia" },
      { id: "eur", label: "Europa" },
    ],
  },
  
  products: [
    {
      id: "1",
      name: 'Apple iMac 24" All-In-One Computer, Apple M1, 8GB RAM',
      price: 1249.99,
      rating: 5.0,
      reviewsCount: 345,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg",
      discountBadge: "the last 2 products",
      features: [
        { label: "Fast Delivery", iconType: "fast-delivery" as const },
        { label: "Best Price", iconType: "best-price" as const },
      ],
      // Mock Details
      images: [
          "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
          "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg",
          "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg",
          "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg", // Just to have 4
      ],
      description: "The product is a high-quality, durable solution designed to meet the needs of modern consumers. It features advanced technology and ergonomic design for optimal performance and comfort.\n\nKey features include a sleek interface, customizable settings, and compatibility with various devices. It is ideal for professionals and enthusiasts alike.",
      colors: ["Green", "Pink", "Silver", "Blue"],
      capacities: ["256GB", "512GB", "1TB"],
      specs: [
          { label: "Processor", value: "Apple M1 chip" },
          { label: "Memory", value: "8GB unified memory" },
          { label: "Storage", value: "256GB SSD" },
          { label: "Display", value: '24-inch 4.5K Retina display' },
      ]
    },
    {
      id: "2",
      name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
      price: 1199,
      rating: 4.9,
      reviewsCount: 1233,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg",
      discountBadge: "Up to 15% off",
      features: [
        { label: "Best Seller", iconType: "best-seller" as const },
        { label: "Best Price", iconType: "best-price" as const },
      ],
      images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"],
      description: "Experience the ultimate iPhone with Titanium design and A17 Pro chip.",
      colors: ["Blue Titanium", "Natural Titanium", "Black Titanium"],
      capacities: ["256GB", "512GB", "1TB"],
      specs: [
          { label: "Screen", value: "6.7 inch Super Retina XDR" },
          { label: "Chip", value: "A17 Pro" }
      ]
    },
    {
      id: "3",
      name: "PlayStation®5 Console – 1TB, PRO Controller",
      price: 499,
      rating: 4.8,
      reviewsCount: 4263,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg",
      discountBadge: "Up to 10% off",
      features: [
        { label: "Best Seller", iconType: "best-seller" as const },
        { label: "Best Price", iconType: "best-price" as const },
      ],
      images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"],
      description: "Play Has No Limits with the PS5 console.",
      specs: [{ label: "Storage", value: "1TB SSD" }]
    },
    {
      id: "4",
      name: "Microsoft Xbox Series X 1TB Gaming Console",
      price: 499,
      rating: 4.8,
      reviewsCount: 2957,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg",
      discountBadge: "Up to 10% off",
      features: [
          { label: "Fast Delivery", iconType: "fast-delivery" as const },
          { label: "Best Price", iconType: "best-price" as const },
      ],
       images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"],
       description: "Power your dreams with Xbox Series X.",
       specs: [{ label: "Resolution", value: "True 4K Gaming" }]
    },
    {
      id: "5",
      name: "Apple MacBook PRO Laptop with M2 chip",
      price: 2599,
      rating: 4.9,
      reviewsCount: 1076,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg",
      discountBadge: "Up to 5% off",
      features: [
          { label: "Fast Delivery", iconType: "fast-delivery" as const },
          { label: "Best Price", iconType: "best-price" as const },
      ],
       images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"],
       description: "MacBook Pro with M2. Supercharged for pros.",
       colors: ["Space Gray", "Silver"],
       capacities: ["512GB", "1TB", "2TB"]
    },
    {
      id: "6",
      name: "Apple Watch SE [GPS 40mm], Smartwatch",
      price: 699,
      rating: 4.7,
      reviewsCount: 387,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg",
      discountBadge: "Up to 20% off",
      features: [
          { label: "Fast Delivery", iconType: "fast-delivery" as const },
          { label: "Best Price", iconType: "best-price" as const },
      ],
       images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"],
    },
    {
      id: "7",
      name: "Microsoft Surface Pro, Copilot+ PC, 13 Inch",
      price: 899,
      rating: 4.5,
      reviewsCount: 154,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg",
      discountBadge: "Up to 10% off",
      features: [
          { label: "Fast Delivery", iconType: "fast-delivery" as const },
          { label: "Best Seller", iconType: "best-seller" as const },
      ],
       images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"],
    },
    {
      id: "8",
      name: "iPad Pro 13-Inch (M4): XDR Display, 512GB",
      price: 799,
      rating: 4.9,
      reviewsCount: 879,
      imageLight: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg",
      imageDark: "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg",
      discountBadge: "Up to 35% off",
      features: [
          { label: "Shipping Today", iconType: "default" as const },
          { label: "Best Price", iconType: "best-price" as const },
      ],
       images: ["https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"],
    },
  ],
};
