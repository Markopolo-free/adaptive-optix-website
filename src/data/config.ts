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
      "Risk management tools",
      "24 x7"
    ],
    href: "/products/fx-pricing",
    icon: null,
    id: "fx-pricing",
    name: "Price Management Solutions",
    order: 0,
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
    icon: null,
    id: "loyalty",
    name: "Rewards and Loyalty",
    order: 1,
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
    icon: null,
    id: "offers-campaigns",
    name: "Offers & Campaigns",
    order: 2,
    shortDescription: "Dynamic promotional campaign management"
  }
],
  solutions: [
  {
    benefits: null,
    description: "Identify valuable customers or groups, engage directly and grow your business",
    href: "/solutions/baas",
    icon: "🛠️",
    id: "baas",
    name: "Loyalty & Rewards",
    order: 0
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
    icon: "🛠️",
    id: "data",
    name: "Data Insights & Visualisation ",
    order: 1
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
    name: "Pricing Features",
    order: 3
  },
  {
    benefits: null,
    description: "Your data security is central to us - our solution approach ensures its integrity",
    href: null,
    icon: null,
    id: "Security",
    name: "Data Security",
    order: 4
  }
],
  useCases: [
  {
    benefits: null,
    description: "Provide value-add services to your financial partners and end-users",
    href: "/use-cases/baas ",
    icon: "💼",
    id: "use-case-1",
    name: "Banking as a Service",
    order: 0
  },
  {
    benefits: null,
    description: "Personalize customer experiences directly through a range of end-user specific offerings",
    href: null,
    icon: "🎯",
    id: "use-case-2",
    name: "Fintech Services",
    order: 1
  },
  {
    benefits: null,
    description: "Engage and incentivize digital payment - reduce risk, missed payments and lost revenue",
    href: null,
    icon: "🚀",
    id: "use-case-3",
    name: "Billing Providers",
    order: 2
  },
  {
    benefits: null,
    description: "Consolidate price and incentive offerings from multiple service providers through a single solution",
    href: null,
    icon: "⚡",
    id: "use-case-4",
    name: "Mobility as a Service",
    order: 3
  },
  {
    benefits: null,
    description: "Combine flexible time-based and stored value pricing with 3rd party rewards and other value incentives",
    href: null,
    icon: "🌟",
    id: "use-case-5",
    name: "Leisure Activity Pricing",
    order: 4
  },
  {
    benefits: null,
    description: "Integrate pricing and rewards with leading 3rd parties - elevating your brand and customer value",
    href: null,
    icon: "💡",
    id: "use-case-6",
    name: "3rd Party Rewards",
    order: 5
  }
],
  consultancy: [
  {
    benefits: null,
    description: "Let us work with you to understand more about your core business to identify where value can be unlocked",
    href: null,
    icon: "🎓",
    id: "consultancy-1",
    name: "Insight Discovery",
    order: 0
  },
  {
    benefits: null,
    description: "By reviewing current processes, let us help identify efficiencies and financial opportunities",
    href: null,
    icon: "📊",
    id: "consultancy-2",
    name: "Workflow & Data Analysis ",
    order: 1
  },
  {
    benefits: null,
    description: "By analyzing your current price structures, we can define optimal baseline or advanced pricing strategies",
    href: null,
    icon: "💼",
    id: "consultancy-3",
    name: "Price Book Review",
    order: 2
  },
  {
    benefits: null,
    description: "Understand your customer and add value by creating rich segmentation and personalization strategies",
    href: null,
    icon: "🔍",
    id: "consultancy-4",
    name: "Customer Segmentation",
    order: 3
  }
],
  pricingManagement: [
  {
    benefits: null,
    description: "High volumes, trend identification, dynamic pricing ? Track and react will support your needs ",
    href: null,
    icon: "💰",
    id: "pricing-mgmt-1",
    name: "Automated Support ",
    order: 0
  },
  {
    benefits: null,
    description: "Internal or external regulation, segmentation or strategy rules - once set, our solution ensures adherence",
    href: null,
    icon: "📈",
    id: "pricing-mgmt-2",
    name: "Classical Rules",
    order: 1
  },
  {
    benefits: null,
    description: "Expert consultancy to monitor and manage day to day functions - removing operations complexity either as a bootstrap or longer term approach ",
    href: null,
    icon: "💳",
    id: "pricing-mgmt-3",
    name: "Operations Specialists",
    order: 2
  },
  {
    benefits: null,
    description: "Flexible training through to 24x7 support - we are here to support your needs",
    href: null,
    icon: "⚙️",
    id: "pricing-mgmt-4",
    name: "On-call Support",
    order: 3
  }
],
  // Homepage card content centralized here for easy edits
  homeProductCards: [
  {
    description: "Pricing is complex, yet effective lever for revenue and value generation",
    href: null,
    icon: "💹",
    name: "A Financial Reality",
    order: 0
  },
  {
    description: "Optimize and manage the relationship between customer value, cost and competition",
    href: null,
    icon: "🧬",
    name: "Your Market USP",
    order: 1
  },
  {
    description: "Recognize and reward customers for their business by using personalized pricing and offerings",
    href: null,
    icon: "📈",
    name: "Tailored Value",
    order: 2
  },
  {
    description: "Customers appreciate a strong value proposition - in turn driving recurring revenue",
    href: null,
    icon: "📈",
    name: "Repeat Business",
    order: 3
  }
],
  contactUsCards: [
    {
      icon: "📧",
      title: "General Inquiries",
      description: "Reach out for general questions about our services and solutions."
    },
    {
      icon: "💼",
      title: "Business Partnerships",
      description: "Contact us to discuss partnership opportunities and collaborations."
    },
    {
      icon: "🛠️",
      title: "Technical Support",
      description: "Get help with technical issues or product support."
    }
  ],
  whyChooseUs: [
  {
    clickable: false,
    description: "A single platform that can be configured to meet your business' needs ensures flexibility and the ability to respond quickly to change",
    href: null,
    icon: "🌍",
    order: 2,
    title: "Global Platform, Local Requirements"
  },
  {
    clickable: false,
    description: "Our core team has been delivering pricing solutions to global businesses since 2014 and brings with it deep understanding",
    href: null,
    icon: "🎓",
    order: 3,
    title: "Expert Foundation"
  }
],
};

export type Config = typeof config;
