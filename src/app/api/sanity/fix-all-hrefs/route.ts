import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';

export async function GET() {
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }

  try {
    const results = {
      useCaseCards: [],
      solutionFeatureCards: [],
      errors: [],
    };

    // Fix useCaseCards
    const useCaseCards = await sanityClient.fetch(`*[_type == "useCaseCard"]{ _id, _rev, id, name, href }`);
    for (const card of useCaseCards) {
      if (card.href) {
        const rawHref = card.href.trim();
        const normalizedHref = rawHref.startsWith('/') ? rawHref : `/${rawHref}`;
        
        if (normalizedHref !== card.href) {
          try {
            await sanityClient
              .patch(card._id)
              .set({ href: normalizedHref })
              .commit();
            results.useCaseCards.push({
              id: card.id || card.name,
              old: card.href,
              new: normalizedHref,
            });
          } catch (err) {
            results.errors.push({
              type: 'useCaseCard',
              id: card.id || card.name,
              error: String(err),
            });
          }
        }
      }
    }

    // Fix solutionFeatureCards
    const solutionFeatureCards = await sanityClient.fetch(`*[_type == "solutionFeatureCard"]{ _id, _rev, id, title, href }`);
    for (const card of solutionFeatureCards) {
      if (card.href) {
        const rawHref = card.href.trim();
        const normalizedHref = rawHref.startsWith('/') ? rawHref : `/${rawHref}`;
        
        if (normalizedHref !== card.href) {
          try {
            await sanityClient
              .patch(card._id)
              .set({ href: normalizedHref })
              .commit();
            results.solutionFeatureCards.push({
              id: card.id,
              old: card.href,
              new: normalizedHref,
            });
          } catch (err) {
            results.errors.push({
              type: 'solutionFeatureCard',
              id: card.id,
              error: String(err),
            });
          }
        }
      }
    }

    return NextResponse.json({
      message: 'Href normalization complete',
      results,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: 'Failed to normalize hrefs',
        details: String(error),
      },
      { status: 500 }
    );
  }
}
