import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import { homeCardsQuery, productCardsQuery, solutionCardsQuery, useCaseCardsQuery, consultancyCardsQuery, pricingManagementCardsQuery, whyCardsQuery, homeCopyQuery } from '@/sanity/lib/queries';
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
        productsSubheading: 'Sub header on pricing and its significance',
        solutionsHeading: 'Solutions',
        solutionsSubheading: 'Comprehensive approaches to modernize your financial operations',
        whyHeading: 'Why Adaptive Optix',
        whySubheading: 'Proven expertise built on years of successful eMobility implementation',
        ctaHeading: 'Ready to Transform Your Operations?',
        ctaSubheading: 'Connect with our team to discuss how Adaptive Optix can support your business goals.',
        ctaButtonLabel: 'Schedule a Demo',
      },
      source: 'local-config',
    });
  }

  try {
    const [homeProductCards, whyChooseUs, products, solutions, useCases, consultancy, pricingManagement, homeCopy] = await Promise.all([
      sanityClient.fetch(homeCardsQuery),
      sanityClient.fetch(whyCardsQuery),
      sanityClient.fetch(productCardsQuery),
      sanityClient.fetch(solutionCardsQuery),
      sanityClient.fetch(useCaseCardsQuery),
      sanityClient.fetch(consultancyCardsQuery),
      sanityClient.fetch(pricingManagementCardsQuery),
      sanityClient.fetch(homeCopyQuery),
    ]);

    const response = {
      homeProductCards: homeProductCards?.length ? homeProductCards : localConfig.homeProductCards,
      whyChooseUs: whyChooseUs?.length ? whyChooseUs : localConfig.whyChooseUs,
      products: products?.length ? products : localConfig.products,
      solutions: solutions?.length ? solutions : localConfig.solutions,
      useCases: useCases?.length ? useCases : localConfig.useCases,
      consultancy: consultancy?.length ? consultancy : localConfig.consultancy,
      pricingManagement: pricingManagement?.length ? pricingManagement : localConfig.pricingManagement,
      homeCopy: homeCopy ?? {
        heroTitle: 'Adaptive Optix',
        heroSubheading: 'Empower your organization with data-driven pricing insights',
        productsHeading: 'The power of pricing',
        productsSubheading: 'Sub header on pricing and its significance',
        solutionsHeading: 'Solutions',
        solutionsSubheading: 'Comprehensive approaches to modernize your financial operations',
        whyHeading: 'Why Adaptive Optix',
        whySubheading: 'Proven expertise built on years of successful eMobility implementation',
        ctaHeading: 'Ready to Transform Your Operations?',
        ctaSubheading: 'Connect with our team to discuss how Adaptive Optix can support your business goals.',
        ctaButtonLabel: 'Schedule a Demo',
      },
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
          productsSubheading: 'Sub header on pricing and its significance',
          solutionsHeading: 'Solutions',
          solutionsSubheading: 'Comprehensive approaches to modernize your financial operations',
          whyHeading: 'Why Adaptive Optix',
          whySubheading: 'Proven expertise built on years of successful eMobility implementation',
          ctaHeading: 'Ready to Transform Your Operations?',
          ctaSubheading: 'Connect with our team to discuss how Adaptive Optix can support your business goals.',
          ctaButtonLabel: 'Schedule a Demo',
        },
        source: 'local-config',
        error: 'Sanity fetch failed',
      },
      { status: 200, headers },
    );
  }
}
