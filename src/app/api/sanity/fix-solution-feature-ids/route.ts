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
    // Fetch all solutionFeatureCards
    const cards = await client.fetch(`*[_type == "solutionFeatureCard"]{ _id, _rev, title, id }`);
    
    const tx = client.transaction();
    let fixed = 0;
    let skipped = 0;

    for (const card of cards) {
      // If card has no id or id is empty, generate one from title
      if (!card.id || card.id.trim() === '') {
        const generatedId = card.title
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        
        tx.patch(card._id, { set: { id: generatedId } });
        fixed++;
        console.log(`Fixed ${card.title} -> ${generatedId}`);
      } else {
        skipped++;
      }
    }

    if (fixed > 0) {
      await tx.commit({ visibility: 'async' });
    }

    return NextResponse.json({ ok: true, fixed, skipped, total: cards.length });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Fix failed' }, { status: 500 });
  }
}
