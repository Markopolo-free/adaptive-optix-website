import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

export async function POST() {
  const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset) {
    return NextResponse.json({ error: 'Missing Sanity configuration' }, { status: 500 });
  }

  if (!token) {
    return NextResponse.json({ 
      error: 'Missing SANITY_API_TOKEN. Please add a write token to your .env.local file.' 
    }, { status: 500 });
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    useCdn: false,
    apiVersion: '2026-01-20',
  });

  try {
    // Find the Data Security card
    const cards = await client.fetch(`*[_type == "solutionCard" && name match "Data Security*"]`);
    
    if (cards.length === 0) {
      return NextResponse.json({ error: 'Data Security card not found' }, { status: 404 });
    }

    // Update the icon
    const results = [];
    for (const card of cards) {
      const result = await client
        .patch(card._id)
        .set({ icon: '🛡️' })
        .commit();
      results.push({ id: card._id, name: card.name, updated: true });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Data Security icon updated to 🛡️',
      updated: results 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
