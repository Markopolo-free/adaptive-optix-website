import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import { homeCardsQuery, productCardsQuery, solutionCardsQuery, useCaseCardsQuery, consultancyCardsQuery, pricingManagementCardsQuery, whyCardsQuery, homeCopyQuery, contactUsCardsQuery } from '@/sanity/lib/queries';
import { config as localConfig } from '@/data/config';

export async function GET() {
  // Disable caching so published changes appear immediately
  const headers = new Headers({
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
  });

  if (!sanityClient) {
    return NextResponse.json({
      homeProductCards: localConfig.homeProductCards,
      whyChooseUs: localConfig.whyChooseUs,
      products: localConfig.products,
      solutions: localConfig.solutions,
      useCases: localConfig.useCases,
      consultancy: localConfig.consultancy,
      pricingManagement: localConfig.pricingManagement,
      homeCopy: {
        heroTitle: 'Adaptive Optix',
        heroSubheading: 'Empower your organization with data-driven pricing insights',
        productsHeading: 'The power of pricing',
        solutionsHeading: 'Solutions',
        solutionsSubheading: 'Comprehensive approaches to modernize your financial operations',
        whyHeading: 'Why Adaptive Optix',
        whySubheading: 'Proven expertise built on years of successful eMobility implementation',
        ctaHeading: 'Ready to Transform Your Operations?',
        ctaSubheading: 'Connect with our team to discuss how Adaptive Optix can support your business goals.',
        ctaButtonLabel: 'Schedule a Demo',
        staffPortalScreens: ['/staff-portal/screen1.jpg', '/staff-portal/screen2.jpg', '/staff-portal/screen3.jpg', '/staff-portal/screen4.jpg'],
      },
      source: 'local-config',
    });
  }

  try {

    const [homeProductCards, whyChooseUs, products, solutions, useCases, consultancy, pricingManagement, homeCopy, contactUsCards] = await Promise.all([
      sanityClient.fetch(homeCardsQuery),
      sanityClient.fetch(whyCardsQuery),
      sanityClient.fetch(productCardsQuery),
      sanityClient.fetch(solutionCardsQuery),
      sanityClient.fetch(useCaseCardsQuery),
      sanityClient.fetch(consultancyCardsQuery),
      sanityClient.fetch(pricingManagementCardsQuery),
      sanityClient.fetch(homeCopyQuery),
      sanityClient.fetch(contactUsCardsQuery),
    ]);

    // Keep block content as-is for PortableText rendering on frontend
    const convertDescriptions = (items: any[]) => {
      return items.map(item => {
        const converted: any = { ...item };
        
        // Keep description fields as block content (don't convert to plain text)
        // The frontend will handle rendering with PortableText
        
        return converted;
      });
    };

    const normalizeHref = (item: any, prefix: string) => {
      const rawHref = typeof item?.href === 'string' ? item.href.trim() : '';
      const isPlaceholderHref =
        !rawHref ||
        rawHref === prefix ||
        rawHref === `${prefix}/` ||
        rawHref.startsWith('#');
      if (rawHref && !isPlaceholderHref) {
        if (rawHref.startsWith('http')) return rawHref;
        return rawHref.startsWith('/') ? rawHref : `/${rawHref}`;
      }
      const rawSlug = item?.id?.current ?? item?.id ?? item?.name ?? item?.title ?? '';
      const slug = String(rawSlug)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
      return slug ? `${prefix}/${slug}` : rawHref;
    };

    const withHref = (items: any[], prefix: string) =>
      items.map((item) => ({ ...item, href: normalizeHref(item, prefix) }));

    const response = {
      homeProductCards: homeProductCards?.length ? convertDescriptions(homeProductCards) : localConfig.homeProductCards,
      whyChooseUs: whyChooseUs?.length ? convertDescriptions(whyChooseUs) : localConfig.whyChooseUs,
      products: products?.length ? withHref(convertDescriptions(products), '/products') : localConfig.products,
      solutions: solutions?.length ? withHref(solutions, '/solutions') : localConfig.solutions,
      useCases: useCases?.length ? withHref(convertDescriptions(useCases), '/use-cases') : localConfig.useCases,
      consultancy: consultancy?.length ? convertDescriptions(consultancy) : localConfig.consultancy,
      pricingManagement: pricingManagement?.length ? convertDescriptions(pricingManagement) : localConfig.pricingManagement,
      homeCopy: homeCopy ?? {
        heroTitle: 'Adaptive Optix',
        heroSubheading: 'Empower your organization with data-driven pricing insights',
        productsHeading: 'The power of pricing',
        solutionsHeading: 'Solutions',
        solutionsSubheading: 'Comprehensive approaches to modernize your financial operations',
        whyHeading: 'Why Adaptive Optix',
        whySubheading: 'Proven expertise built on years of successful eMobility implementation',
        ctaHeading: 'Ready to Transform Your Operations?',
        ctaSubheading: 'Connect with our team to discuss how Adaptive Optix can support your business goals.',
        ctaButtonLabel: 'Schedule a Demo',
        staffPortalScreens: ['/staff-portal/screen1.jpg', '/staff-portal/screen2.jpg', '/staff-portal/screen3.jpg', '/staff-portal/screen4.jpg'],
      },
      contactUsCards: contactUsCards?.length ? convertDescriptions(contactUsCards).map((card: any) => ({
        ...card,
        title: card.name || card.title  // Use name from schema as the primary field
      })) : [],
      source: 'sanity',
    };

    return NextResponse.json(response, { headers });
  } catch (error) {
    return NextResponse.json(
      {
        homeProductCards: localConfig.homeProductCards,
        whyChooseUs: localConfig.whyChooseUs,
        products: localConfig.products,
        solutions: localConfig.solutions,
        useCases: localConfig.useCases,
        consultancy: localConfig.consultancy,
        pricingManagement: localConfig.pricingManagement,
        homeCopy: {
          heroTitle: 'Adaptive Optix',
          heroSubheading: 'Empower your organization with data-driven pricing insights',
          productsHeading: 'The power of pricing',
          solutionsHeading: 'Solutions',
          solutionsSubheading: 'Comprehensive approaches to modernize your financial operations',
          whyHeading: 'Why Adaptive Optix',
          whySubheading: 'Proven expertise built on years of successful eMobility implementation',
          ctaHeading: 'Ready to Transform Your Operations?',
          ctaSubheading: 'Connect with our team to discuss how Adaptive Optix can support your business goals.',
          ctaButtonLabel: 'Schedule a Demo',
          staffPortalScreens: ['/staff-portal/screen1.jpg', '/staff-portal/screen2.jpg', '/staff-portal/screen3.jpg', '/staff-portal/screen4.jpg'],
        },
        source: 'local-config',
        error: 'Sanity fetch failed',
      },
      { status: 200, headers },
    );
  }
}
