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
    description: "Provide samples of UI inter-action",
    href: "/solutions/baas",
    icon: "🏗️",
    id: "data",
    name: "Front End mocks"
  },
  {
    benefits: [
      "Scalable infrastructure",
      "Automatic backups",
      "Security & compliance",
      "Real-time database",
      "Reduced operational costs"
    ],
    description: "Visualize your business, harvest insights and capture opportunities that translate directly into strategies",
    href: "/solutions/baas",
    icon: "🏗️",
    id: "data",
    name: "Data Insights & Visualisation "
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
    description: "Provide value-add services to your financial partners and end-users",
    href: null,
    icon: "💼",
    id: "use-case-1",
    name: "Banking as a Service"
  },
  {
    benefits: null,
    description: "Personalize customer experiences directly through a range of end-user specific offerings",
    href: null,
    icon: "🎯",
    id: "use-case-2",
    name: "Fintech Services"
  },
  {
    benefits: null,
    description: "Engage and incentivize digital payment - reduce risk, missed payments and lost revenue",
    href: null,
    icon: "🚀",
    id: "use-case-3",
    name: "Billing Providers"
  },
  {
    benefits: null,
    description: "Consolidate price and incentive management from disparate service providers into a single solution",
    href: null,
    icon: "⚡",
    id: "use-case-4",
    name: "Mobility as a Service"
  },
  {
    benefits: null,
    description: "Combine flexible time-based and stored value pricing with 3rd party rewards and other value incentives",
    href: null,
    icon: "🌟",
    id: "use-case-5",
    name: "Leisure Activity Pricing"
  },
  {
    benefits: null,
    description: "Integrate pricing and rewards with leading 3rd parties - elevating your brand and customer value",
    href: null,
    icon: "💡",
    id: "use-case-6",
    name: "3rd Party Rewards"
  }
],
  consultancy: [
  {
    benefits: null,
    description: "Let us work with you to understand more about your core business and identify where additional value can be unlocked",
    href: null,
    icon: "🎓",
    id: "consultancy-1",
    name: "Insight Discovery"
  },
  {
    benefits: null,
    description: "By reviewing current processes, let us help you to optimise functions, facilitate efficiencies and identify financial opportunities",
    href: null,
    icon: "📊",
    id: "consultancy-2",
    name: "Workflow & Data Analysis "
  },
  {
    benefits: null,
    description: "By analyzing your current pricing paradigms, we can partner with you to define - or optimise baseline or advanced pricing strategies",
    href: null,
    icon: "💼",
    id: "consultancy-3",
    name: "Price Book Review "
  },
  {
    benefits: null,
    description: "Understanding customer needs enables value optimization - we can support you in defining advanced segmentation and personalization strategies",
    href: null,
    icon: "🔍",
    id: "consultancy-4",
    name: "Customer Segmentation "
  }
],
  pricingManagement: [
  {
    benefits: null,
    description: "High volumes, trend identification, dynamic pricing? \nTrack and react will support your needs",
    href: null,
    icon: "💰",
    id: "pricing-mgmt-1",
    name: "Automated Support "
  },
  {
    benefits: null,
    description: "Internal or external regulation, segmentation or strategy rules - once set the solution ensures adherence",
    href: null,
    icon: "📈",
    id: "pricing-mgmt-2",
    name: "Classical Rules"
  },
  {
    benefits: null,
    description: "Expert consultancy to monitor and manage day to day functions - removing operations complexity either as a bootstrap or longer term approach",
    href: null,
    icon: "💳",
    id: "pricing-mgmt-3",
    name: "Operations Specialists"
  },
  {
    benefits: null,
    description: "Flexible training through to 24x7 support - we are here to support your needs",
    href: null,
    icon: "⚙️",
    id: "pricing-mgmt-4",
    name: "On Call Support"
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
    description: "Pricing is in our DNA - and something we've been passionate about for over 15 years - in which time we've delivered millions of dollars of value to businesses",
    title: "Passionate About Pricing"
  },
  {
    clickable: false,
    description: "Fast deployment with minimal disruption to your existing operations",
    title: "Rapid Implementation"
  },
  {
    clickable: false,
    description: "A single platform that can be configured to meet your business' needs ensures flexibility and the ability to respond quickly to change",
    title: "Global Platform Meets Local Needs"
  },
  {
    clickable: false,
    description: "Our core team has been delivering pricing solutions to global businesses since 2014 and brings with it deep understanding",
    title: "Expert Foundation"
  },
  {
    clickable: true,
    description: "Tailored portal solutions designed to meet your specific business requirements",
    title: "Fully Customizable Staff Portal"
  }
],
};

export type Config = typeof config;
