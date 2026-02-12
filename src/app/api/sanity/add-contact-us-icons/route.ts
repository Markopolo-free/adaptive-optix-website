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

  // Map of titles to icons
  const iconMapping: Record<string, string> = {
    'Partnerships': '🤝',
    "API's": '🔗',
    'APIs': '🔗',
    'General Inquiries': '💬',
    'Technical Support': '🛠️',
    'Sales': '💼',
    'Email Us': '📧',
    'Phone Support': '📞',
    'Live Chat': '💬',
    'Visit Us': '📍',
  };

  try {
    // Fetch all Contact Us cards
    const cards = await client.fetch(`*[_type == "contactUsCard"] { _id, title, icon }`);
    
    if (cards.length === 0) {
      return NextResponse.json({ 
        success: false,
        message: 'No Contact Us cards found' 
      }, { status: 404 });
    }

    // Update icons for cards that don't have one
    const results = [];
    let updated = 0;
    let skipped = 0;

    for (const card of cards) {
      // Skip if icon already exists
      if (card.icon) {
        results.push({ id: card._id, title: card.title, status: 'skipped', reason: 'already has icon' });
        skipped++;
        continue;
      }

      // Find matching icon
      const icon = iconMapping[card.title];
      
      if (icon) {
        await client
          .patch(card._id)
          .set({ icon })
          .commit();
        results.push({ id: card._id, title: card.title, icon, status: 'updated' });
        updated++;
      } else {
        results.push({ id: card._id, title: card.title, status: 'no_mapping', reason: 'no icon mapping found' });
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Updated ${updated} cards, skipped ${skipped} cards`,
      total: cards.length,
      updated,
      skipped,
      results 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
