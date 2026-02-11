import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function GET() {
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }

  try {
    const [useCaseCards, solutionFeatureCards, homeCards] = await Promise.all([
      sanityClient.fetch(`*[_type == "useCaseCard"]{ _id, id, name, href }`),
      sanityClient.fetch(`*[_type == "solutionFeatureCard"]{ _id, id, title, href }`),
      sanityClient.fetch(`*[_type == "homeCard"]{ _id, name, title, href }`),
    ]);

    const audit = {
      useCaseCards: Array.isArray(useCaseCards)
        ? useCaseCards
            .filter((card) => !card?.href || typeof card.href !== 'string')
            .map((card) => ({
              id: card.id || card.name,
              href: card.href ?? null,
            }))
        : [],
      solutionFeatureCards: Array.isArray(solutionFeatureCards)
        ? solutionFeatureCards.map((card) => {
            const expectedSlug = card.id || slugify(card.title || '');
            const expectedHref = expectedSlug ? `/solution-features/${expectedSlug}` : null;
            return {
              id: card.id || card.title,
              href: card.href ?? null,
              expectedHref,
              needsUpdate: expectedHref ? card.href !== expectedHref : false,
            };
          })
        : [],
      homeCards: Array.isArray(homeCards)
        ? homeCards.map((card) => {
            const expectedSlug = slugify(card.name || card.title || '');
            const expectedHref = expectedSlug ? `/products/${expectedSlug}` : null;
            return {
              id: card.name || card.title,
              href: card.href ?? null,
              expectedHref,
              needsUpdate: expectedHref ? card.href !== expectedHref : false,
            };
          })
        : [],
    };

    return NextResponse.json({ audit });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to audit hrefs', details: String(error) },
      { status: 500 }
    );
  }
}
