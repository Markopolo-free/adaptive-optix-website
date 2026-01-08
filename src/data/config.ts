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
      id: 'fx-pricing',
      name: 'FX Pricing',
      href: '/products/fx-pricing',
      icon: '💱',
      shortDescription: 'Real-time currency pricing and market intelligence',
      description:
        'Advanced FX pricing engine with real-time market data, sophisticated algorithms, and customizable pricing strategies.',
      features: [
        'Real-time rate updates',
        'Multi-currency support',
        'Customizable pricing rules',
        'Historical data analysis',
        'Risk management tools',
      ],
      cta: 'Learn More',
    },
    {
      id: 'loyalty',
      name: 'Rewards and Loyalty',
      href: '/products/loyalty',
      icon: '🎁',
      shortDescription: 'Customer loyalty and rewards programs',
      description:
        'Comprehensive loyalty platform designed to increase customer retention and lifetime value through intelligent rewards.',
      features: [
        'Flexible reward structures',
        'Tiered membership levels',
        'Real-time point tracking',
        'Gamification elements',
        'Analytics dashboard',
      ],
      cta: 'Learn More',
    },
    {
      id: 'offers-campaigns',
      name: 'Offers & Campaigns',
      href: '/products/offers-campaigns',
      icon: '🚀',
      shortDescription: 'Dynamic promotional campaign management',
      description:
        'Create, manage, and optimize promotional campaigns with advanced targeting, segmentation, and performance analytics.',
      features: [
        'Campaign builder',
        'Advanced segmentation',
        'A/B testing capabilities',
        'Real-time performance metrics',
        'Multi-channel integration',
      ],
      cta: 'Learn More',
    },
  ],
  solutions: [
    {
      id: 'baas',
      name: 'Banking as a Service (BaaS)',
      href: '/solutions/baas',
      icon: '🏗️',
      description:
        'Fully managed backend infrastructure allowing you to focus on your core business logic without infrastructure overhead.',
      benefits: [
        'Scalable infrastructure',
        'Automatic backups',
        'Security & compliance',
        'Real-time database',
        'Reduced operational costs',
      ],
    },
    {
      id: 'saas',
      name: 'Software as a Service (SaaS)',
      href: '/solutions/saas',
      icon: '☁️',
      description:
        'Cloud-based software solutions delivered via browser, requiring no installation or maintenance on your end.',
      benefits: [
        'Zero installation required',
        'Automatic updates',
        'Multi-tenant support',
        'Enterprise-grade security',
        'Global accessibility',
      ],
    },
    {
      id: 'api',
      name: 'APIs & Integration',
      href: '/solutions/api',
      icon: '🔗',
      description:
        'Comprehensive API suite enabling seamless integration with your existing systems and third-party applications.',
      benefits: [
        'RESTful & GraphQL APIs',
        'Comprehensive documentation',
        'Rate limiting & throttling',
        'Webhook support',
        'SDK availability',
      ],
    },
  ],
  // Homepage card content centralized here for easy edits
  homeProductCards: [
    {
      name: 'FX Rate personalization',
      icon: '💹',
      description:
        'Deliver personalized FX rates tailored to each customer segment with dynamic pricing controls.',
    },
    {
      name: 'Leverage our clean-room technology',
      icon: '🧼',
      description:
        'Collaborate on sensitive data securely using privacy-preserving clean-room infrastructure.',
    },
    {
      name: 'Tiered FX Pricing',
      icon: '📊',
      description:
        'Offer tiered FX rates with clear breakpoints to reward volume and loyalty while protecting margins.',
    },
  ],
  whyChooseUs: [
    {
      title: 'Battle-Tested Architecture',
      description:
        'Our solutions are built on proven eMobility technology serving millions of transactions.',
      clickable: false,
    },
    {
      title: 'Rapid Implementation',
      description: 'Fast deployment with minimal disruption to your existing operations.',
      clickable: false,
    },
    {
      title: 'Flexible Integration',
      description: 'Choose BaaS, SaaS, or API-based solutions that fit your needs.',
      clickable: false,
    },
    {
      title: 'Expert Support',
      description: 'Dedicated teams to ensure your success from day one.',
      clickable: false,
    },
    {
      title: 'Fully Customizable Staff Portal',
      description:
        'Tailored portal solutions designed to meet your specific business requirements.',
      clickable: true,
    },
  ],
};

export type Config = typeof config;
