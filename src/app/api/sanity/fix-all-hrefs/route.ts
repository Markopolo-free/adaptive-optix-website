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
    const results: {
      useCaseCards: Array<{ id: string; old: string; new: string }>;
      solutionFeatureCards: Array<{ id: string; old: string; new: string }>;
      homeCards: Array<{ id: string; old: string | null; new: string }>;
      errors: Array<{ type: string; id: string; error: string }>;
    } = {
      useCaseCards: [],
      solutionFeatureCards: [],
      homeCards: [],
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
      const expectedSlug = card.id || slugify(card.title || '');
      const expectedHref = expectedSlug ? `/solution-features/${expectedSlug}` : null;
      const rawHref = typeof card.href === 'string' ? card.href.trim() : '';
      const normalizedHref = rawHref ? (rawHref.startsWith('/') ? rawHref : `/${rawHref}`) : '';
      const nextHref = normalizedHref || expectedHref;

      if (nextHref && nextHref !== card.href) {
        try {
          await sanityClient
            .patch(card._id)
            .set({ href: nextHref })
            .commit();
          results.solutionFeatureCards.push({
            id: card.id || card.title,
            old: card.href,
            new: nextHref,
          });
        } catch (err) {
          results.errors.push({
            type: 'solutionFeatureCard',
            id: card.id || card.title,
            error: String(err),
          });
        }
      }
    }

    // Fill missing hrefs for homeCards (do not overwrite existing hrefs)
    const homeCards = await sanityClient.fetch(`*[_type == "homeCard"]{ _id, _rev, name, title, href }`);
    for (const card of homeCards) {
      const rawHref = typeof card.href === 'string' ? card.href.trim() : '';
      if (!rawHref) {
        const nameSlug = slugify(card.name || card.title || '');
        if (!nameSlug) continue;
        const nextHref = `/products/${nameSlug}`;
        try {
          await sanityClient
            .patch(card._id)
            .set({ href: nextHref })
            .commit();
          results.homeCards.push({
            id: card.name || card.title,
            old: card.href ?? null,
            new: nextHref,
          });
        } catch (err) {
          results.errors.push({
            type: 'homeCard',
            id: card.name || card.title,
            error: String(err),
          });
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
