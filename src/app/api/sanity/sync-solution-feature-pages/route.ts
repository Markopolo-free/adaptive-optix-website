import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

export async function POST() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset || !token) {
    return NextResponse.json({ error: 'Missing Sanity credentials' }, { status: 400 });
  }

  const client = createClient({ projectId, dataset, token, useCdn: false, apiVersion: '2024-06-01' });

  // Fetch all solutionFeatureCards
  const cards = await client.fetch(`*[_type == "solutionFeatureCard"]{ title, slug, description }`);
  let created = 0;
  let skipped = 0;

  for (const card of cards) {
    const slug = card.slug?.current;
    if (!slug) continue;
    // Check if a solutionFeaturePage exists for this slug
    const existing = await client.fetch(`*[_type == "solutionFeaturePage" && slug.current == $slug][0]`, { slug });
    if (existing) {
      skipped++;
      continue;
    }
    // Create a new solutionFeaturePage
    await client.create({
      _type: 'solutionFeaturePage',
      slug: { current: slug },
      title: card.title,
      intro: card.description ? [{ _type: 'block', children: [{ _type: 'span', text: card.description }] }] : [],
      table: [],
      body: [],
    });
    created++;
  }

  return NextResponse.json({ ok: true, created, skipped });
}
