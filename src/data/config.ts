// Theme and branding configuration - easily customizable
export const config = {
  site: {
    name: 'Adaptive Optix',
    tagline: 'Advanced Solutions for Modern Finance',
    description:
      'Explore cutting-edge financial technology solutions built on proven eMobility infrastructure.',
  },
  theme: {
    colors: {
      primary: '#6B5B95', // Ultra Violet
      secondary: '#9B8FB0', // Light Ultra Violet
      dark: '#0A0E27', // Dark background
      light: '#F5F7FA', // Light background
      text: '#1A1A2E', // Text color
      textLight: '#6B7280', // Light text
      border: '#E5E7EB', // Border color
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
    },
    fonts: {
      primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: 'Menlo, Monaco, "Courier New", monospace',
    },
  },
  nav: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '#products', submenu: true },
    { name: 'Solutions', href: '#solutions', submenu: true },
    { name: 'Contact', href: '#contact' },
  ],
  products: [
  {
    cta: null,
    description: "Whether starting from scratch or going for sophistication - all pricing needs active management and this is where you can rely on our expertise",
    features: [
      "Real-time rate updates",
      "Multi-currency support",
      "Customizable pricing rules",
      "Historical data analysis",
      "Risk management tools"
    ],
    href: "/products/fx-pricing",
    icon: "💱",
    id: "fx-pricing",
    name: "Price Management Solutions",
    shortDescription: "Real-time currency pricing and market intelligence"
  },
  {
    cta: null,
    description: "Comprehensive loyalty platform designed to increase customer retention and lifetime value through intelligent rewards.",
    features: [
      "Flexible reward structures",
      "Tiered membership levels",
      "Real-time point tracking",
      "Gamification elements",
      "Analytics dashboard"
    ],
    href: "/products/loyalty",
    icon: "🎁",
    id: "loyalty",
    name: "Rewards and Loyalty",
    shortDescription: "Customer loyalty and rewards programs"
  },
  {
    cta: null,
    description: "Create, manage, and optimize promotional campaigns with advanced targeting, segmentation, and performance analytics.",
    features: [
      "Campaign builder",
      "Advanced segmentation",
      "A/B testing capabilities",
      "Real-time performance metrics",
      "Multi-channel integration"
    ],
    href: "/products/offers-campaigns",
    icon: "🚀",
    id: "offers-campaigns",
    name: "Offers & Campaigns",
    shortDescription: "Dynamic promotional campaign management"
  }
],
  solutions: [
  {
    benefits: [
      "Scalable infrastructure",
      "Automatic backups",
      "Security & compliance",
      "Real-time database",
      "Reduced operational costs"
    ],
    description: "Fully managed backend infrastructure allowing you to focus on your core business logic without infrastructure overhead.",
    href: "/solutions/baas",
    icon: "🏗️",
    id: "baas",
    name: "Banking as a Service (BaaS)"
  },
  {
    benefits: [
      "Zero installation required",
      "Automatic updates",
      "Multi-tenant support",
      "Enterprise-grade security",
      "Global accessibility"
    ],
    description: "Cloud-based software solutions delivered via browser, requiring no installation or maintenance on your end.",
    href: "/solutions/saas",
    icon: "☁️",
    id: "saas",
    name: "Software as a Service (SaaS)"
  },
  {
    benefits: [
      "RESTful & GraphQL APIs",
      "Comprehensive documentation",
      "Rate limiting & throttling",
      "Webhook support",
      "SDK availability"
    ],
    description: "Product, size, sales channel or timing-specific are just some of the dimensions available.",
    href: "/solutions/api",
    icon: "🔗",
    id: "api",
    name: "Pricing Features"
  },
  {
    benefits: null,
    description: "This is a test card",
    href: null,
    icon: null,
    id: "test",
    name: "test"
  }
],
  // Homepage card content centralized here for easy edits
  homeProductCards: [
  {
    description: "Words about significance of pricing and the financial opportunities",
    icon: "💹",
    name: "A Financial Reality"
  },
  {
    description: "Words about Pricing and the USP",
    icon: "🧼",
    name: "Market USP"
  },
  {
    description: "Words about tiered FX rates with clear breakpoints to reward volume and loyalty while protecting margins.",
    icon: "📊",
    name: "Tailored Value"
  },
  {
    description: "Drive customer loyalty and increase transaction frequency with targeted retention strategies.",
    icon: "📊",
    name: "Repeat Business"
  }
],
  whyChooseUs: [
  {
    clickable: false,
    description: "Our solutions are built on proven eMobility technology serving millions of transactions.",
    title: "Battle-Tested Architecture"
  },
  {
    clickable: false,
    description: "Fast deployment with minimal disruption to your existing operations.",
    title: "Rapid Implementation"
  },
  {
    clickable: false,
    description: "Choose BaaS, SaaS, or API-based solutions that fit your needs.",
    title: "Flexible Integration"
  },
  {
    clickable: false,
    description: "Dedicated teams to ensure your success from day one.",
    title: "Expert Support"
  },
  {
    clickable: true,
    description: "Tailored portal solutions designed to meet your specific business requirements.",
    title: "Fully Customizable Staff Portal"
  }
],
};

export type Config = typeof config;
