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

  try {
    // Find the card with title "Core Pricing-2"
    const card = await client.fetch(`*[_type == "solutionFeatureCard" && title == "Core Pricing-2"][0]{ _id, _rev, id }`);
    
    if (!card) {
      return NextResponse.json({ error: 'Card not found' }, { status: 404 });
    }

    // Update its id to match the routing slug
    const tx = client.transaction();
    tx.patch(card._id, {
      set: {
        id: 'pricing-features-2'
      }
    });

    await tx.commit({ visibility: 'async' });

    return NextResponse.json({ ok: true, updated: true, cardId: card._id, newId: 'pricing-features-2', oldId: card.id });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Fix failed' }, { status: 500 });
  }
}
