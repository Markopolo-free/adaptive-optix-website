import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import { writeFileSync } from 'fs';
import { join } from 'path';

export async function POST() {
  try {
    if (!sanityClient) {
      return NextResponse.json(
        { success: false, error: 'Sanity client not configured' },
        { status: 500 }
      );
    }

    // Fetch all content from Sanity
    const [homeCards, whyCards, products, solutions, homeCopy] = await Promise.all([
      sanityClient.fetch(`*[_type == "homeCard"] | order(order asc) { name, icon, description }`),
      sanityClient.fetch(`*[_type == "whyCard"] | order(order asc) { title, description, clickable }`),
      sanityClient.fetch(`*[_type == "productCard"] | order(order asc) { 
        id, name, href, icon, shortDescription, description, features, cta 
      }`),
      sanityClient.fetch(`*[_type == "solutionCard"] | order(order asc) { 
        id, name, href, icon, description, benefits 
      }`),
      sanityClient.fetch(`*[_type == "homeCopy"][0] {
        heroTitle, heroSubheading, productsHeading, productsSubheading,
        solutionsHeading, solutionsSubheading, whyHeading, whySubheading,
        ctaHeading, ctaSubheading, ctaButtonLabel
      }`),
    ]);

    // Generate the TypeScript config file content
    const configContent = `// Theme and branding configuration - easily customizable
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
  products: ${JSON.stringify(products, null, 2).replace(/"([^"]+)":/g, '$1:')},
  solutions: ${JSON.stringify(solutions, null, 2).replace(/"([^"]+)":/g, '$1:')},
  // Homepage card content centralized here for easy edits
  homeProductCards: ${JSON.stringify(homeCards, null, 2).replace(/"([^"]+)":/g, '$1:')},
  whyChooseUs: ${JSON.stringify(whyCards, null, 2).replace(/"([^"]+)":/g, '$1:')},
};

export type Config = typeof config;
`;

    // Write to config.ts file
    const configPath = join(process.cwd(), 'src', 'data', 'config.ts');
    writeFileSync(configPath, configContent, 'utf8');

    return NextResponse.json({
      success: true,
      message: 'Config file updated successfully from Sanity content',
      counts: {
        homeCards: homeCards.length,
        whyCards: whyCards.length,
        products: products.length,
        solutions: solutions.length,
      },
    });
  } catch (error) {
    console.error('Error syncing to config:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}
