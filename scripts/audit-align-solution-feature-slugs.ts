// Script to audit and align all solutionFeatureCard and solutionFeaturePage slugs in Sanity Studio
// Usage: Run this script with the Sanity client context (Node.js, or in a Next.js API route with write access)

import { createClient } from 'next-sanity';
import { sanityConfig } from '@/sanity/env';

const token = process.env.SANITY_API_TOKEN;
const client = createClient({ ...sanityConfig, token, useCdn: false });

async function auditAndAlignSolutionFeatureSlugs() {
  // Fetch all solutionFeatureCards and solutionFeaturePages
  const cards = await client.fetch(`*[_type == "solutionFeatureCard"]{ _id, title, slug }`);
  const pages = await client.fetch(`*[_type == "solutionFeaturePage"]{ _id, title, slug }`);

  // Normalize slug helper
  const normalize = (s: string | undefined) => s?.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Build lookup for pages by normalized slug
  const pageMap = Object.fromEntries(
    pages.map((p: { slug?: { current?: string }, _id: string }) => [normalize(p.slug?.current), p])
  );

  let updates = [];

  for (const card of cards as Array<{_id: string, title: string, slug?: { current?: string }}>) {
    const cardNorm = normalize(card.slug?.current);
    if (!cardNorm) continue;
    const page = pageMap[cardNorm];
    if (!page) {
      // No matching page, create one
      updates.push({
        action: 'create',
        cardId: card._id,
        cardSlug: card.slug?.current,
        cardTitle: card.title,
      });
      await client.createIfNotExists({
        _id: `solutionFeaturePage-${card.slug?.current}`,
        _type: 'solutionFeaturePage',
        slug: { current: card.slug?.current },
        title: card.title,
      });
    } else if (page.slug?.current !== card.slug?.current) {
      // Slugs differ, align page slug to card slug
      updates.push({
        action: 'update',
        pageId: page._id,
        from: page.slug?.current,
        to: card.slug?.current,
      });
      await client.patch(page._id).set({ slug: { current: card.slug?.current } }).commit();
    }
  }

  // Optionally, log or return the updates
  console.log('Slug audit and alignment complete:', updates);
  return updates;
}

// To run directly (Node.js):
// auditAndAlignSolutionFeatureSlugs().then(console.log).catch(console.error);

export default auditAndAlignSolutionFeatureSlugs;
