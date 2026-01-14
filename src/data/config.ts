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
    description: "Product-specific, size, sales channel or timing-based - just some of the dimensions available to price",
    href: "/solutions/api",
    icon: "🔗",
    id: "api",
    name: "High Level Pricing Features"
  },
  {
    benefits: null,
    description: "Your data security is central to us - our solution approach ensures its integrity",
    href: null,
    icon: "🔒",
    id: "Security",
    name: "Security"
  }
],
  useCases: [
  {
    benefits: null,
    description: "Example use case description",
    href: null,
    icon: "💼",
    id: "use-case-1",
    name: "Use Case 1"
  },
  {
    benefits: null,
    description: "Example use case description",
    href: null,
    icon: "🎯",
    id: "use-case-2",
    name: "Use Case 2"
  },
  {
    benefits: null,
    description: "Example use case description",
    href: null,
    icon: "🚀",
    id: "use-case-3",
    name: "Use Case 3"
  },
  {
    benefits: null,
    description: "Example use case description",
    href: null,
    icon: "⚡",
    id: "use-case-4",
    name: "Use Case 4"
  },
  {
    benefits: null,
    description: "Example use case description",
    href: null,
    icon: "🌟",
    id: "use-case-5",
    name: "Use Case 5"
  },
  {
    benefits: null,
    description: "Example use case description",
    href: null,
    icon: "💡",
    id: "use-case-6",
    name: "Use Case 6"
  }
],
  consultancy: [
  {
    benefits: null,
    description: "Expert consultancy service description",
    href: null,
    icon: "🎓",
    id: "consultancy-1",
    name: "Consultancy Service 1"
  },
  {
    benefits: null,
    description: "Expert consultancy service description",
    href: null,
    icon: "📊",
    id: "consultancy-2",
    name: "Consultancy Service 2"
  },
  {
    benefits: null,
    description: "Expert consultancy service description",
    href: null,
    icon: "💼",
    id: "consultancy-3",
    name: "Consultancy Service 3"
  },
  {
    benefits: null,
    description: "Expert consultancy service description",
    href: null,
    icon: "🔍",
    id: "consultancy-4",
    name: "Consultancy Service 4"
  }
],
  pricingManagement: [
  {
    benefits: null,
    description: "Pricing management solution description",
    href: null,
    icon: "💰",
    id: "pricing-mgmt-1",
    name: "Pricing Solution 1"
  },
  {
    benefits: null,
    description: "Pricing management solution description",
    href: null,
    icon: "📈",
    id: "pricing-mgmt-2",
    name: "Pricing Solution 2"
  },
  {
    benefits: null,
    description: "Pricing management solution description",
    href: null,
    icon: "💳",
    id: "pricing-mgmt-3",
    name: "Pricing Solution 3"
  },
  {
    benefits: null,
    description: "Pricing management solution description",
    href: null,
    icon: "⚙️",
    id: "pricing-mgmt-4",
    name: "Pricing Solution 4"
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
    description: "Pricing is in our DNA - and something we've been passionate about for over 15 years - in which time we've delivered millions of dollars of value to businesses ",
    icon: "💰",
    title: "Passionate About Pricing"
  },
  {
    clickable: false,
    description: "Fast deployment with minimal disruption to your existing operations.",
    icon: "⚡",
    title: "Rapid Implementation"
  },
  {
    clickable: false,
    description: "A single platform that can be configured to meet your business' needs ensures flexibility and the ability to respond quickly to change",
    icon: "🌍",
    title: "Global Platform Meets Local Needs  "
  },
  {
    clickable: false,
    description: "Our core team has been delivering pricing solutions to global businesses since 2014 and brings with it deep understanding",
    icon: "🏆",
    title: "Expert Foundation"
  },
  {
    clickable: true,
    description: "Tailored portal solutions designed to meet your specific business requirements.",
    icon: "⚙️",
    title: "Fully Customizable Staff Portal"
  }
],
};

export type Config = typeof config;
