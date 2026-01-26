import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { config as localConfig } from '@/data/config';

export async function POST() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset) {
    return NextResponse.json(
      { error: 'Missing SANITY_PROJECT_ID or SANITY_DATASET in environment' },
      { status: 400 },
    );
  }

  if (!token) {
    return NextResponse.json(
      { error: 'Missing SANITY_API_TOKEN (create a token with write access in sanity.io and add it to .env.local)' },
      { status: 400 },
    );
  }

  const client = createClient({ projectId, dataset, token, useCdn: false, apiVersion: '2024-06-01' });

  const homeDocs = localConfig.homeProductCards.map((c, i) => ({
    _type: 'homeCard',
    _id: `homeCard-${i + 1}`,
    name: c.name,
    title: c.name,
    description: c.description,
    icon: c.icon,
    href: c.href,
    order: i,
  }));

  const whyDocs = localConfig.whyChooseUs.map((c, i) => ({
    _type: 'whyCard',
    _id: `whyCard-${i + 1}`,
    title: c.title,
    description: c.description,
    clickable: Boolean(c.clickable),
    icon: c.icon,
    href: c.href,
    order: i,
  }));

  const productDocs = localConfig.products.map((p, i) => ({
    _type: 'productCard',
    _id: `productCard-${p.id}`,
    id: p.id,
    name: p.name,
    href: p.href,
    icon: p.icon,
    shortDescription: p.shortDescription,
    description: p.description,
    features: p.features,
    order: i,
  }));

  const solutionDocs = localConfig.solutions.map((s, i) => ({
    _type: 'solutionCard',
    _id: `solutionCard-${s.id}`,
    id: s.id,
    name: s.name,
    href: s.href,
    icon: s.icon,
    description: s.description,
    benefits: s.benefits,
    order: i,
  }));

  const useCaseDocs = localConfig.useCases.map((u, i) => ({
    _type: 'useCaseCard',
    _id: `useCaseCard-${u.id}`,
    id: u.id,
    name: u.name,
    href: u.href,
    icon: u.icon,
    description: u.description,
    benefits: u.benefits,
    order: i,
  }));

  const consultancyDocs = localConfig.consultancy.map((c, i) => ({
    _type: 'consultancyCard',
    _id: `consultancyCard-${c.id}`,
    id: c.id,
    name: c.name,
    href: c.href,
    icon: c.icon,
    description: c.description,
    benefits: c.benefits,
    order: i,
  }));

  const pricingManagementDocs = localConfig.pricingManagement.map((p, i) => ({
    _type: 'pricingManagementCard',
    _id: `pricingManagementCard-${p.id}`,
    id: p.id,
    name: p.name,
    href: p.href,
    icon: p.icon,
    description: p.description,
    benefits: p.benefits,
    order: i,
  }));

  try {
    const tx = client.transaction();
    const homeCopyDoc = {
      _type: 'homeCopy',
      _id: 'homeCopy',
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
    };

    const allDocs = [homeCopyDoc, ...homeDocs, ...whyDocs, ...productDocs, ...solutionDocs, ...useCaseDocs, ...consultancyDocs, ...pricingManagementDocs];
    allDocs.forEach((doc) => {
      tx.createOrReplace(doc as any);
    });
    await tx.commit({ visibility: 'async' });

    return NextResponse.json({ ok: true, counts: {
      home: homeDocs.length, why: whyDocs.length, products: productDocs.length, solutions: solutionDocs.length, useCases: useCaseDocs.length, consultancy: consultancyDocs.length, pricingManagement: pricingManagementDocs.length, homeCopy: 1,
    } });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Seeding failed' }, { status: 500 });
  }
}
