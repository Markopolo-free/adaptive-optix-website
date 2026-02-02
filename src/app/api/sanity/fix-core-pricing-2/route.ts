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
    // Fetch the Core Pricing-2 card
    const card = await client.fetch(`*[_type == "solutionFeatureCard" && id == "core-pricing-2"][0]{ _id, _rev }`);
    
    if (!card) {
      return NextResponse.json({ error: 'Card not found' }, { status: 404 });
    }

    // Update the card to regenerate href and clear bad description
    const tx = client.transaction();
    tx.patch(card._id, {
      set: {
        description: 'Core pricing and revenue optimization solution',
        href: '/solution-features/core-pricing-2',
      }
    });

    await tx.commit({ visibility: 'async' });

    return NextResponse.json({ ok: true, fixed: true, cardId: card._id });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Fix failed' }, { status: 500 });
  }
}
