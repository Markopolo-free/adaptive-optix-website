import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

import { createClient } from 'next-sanity';

// Fallback to both NEXT_PUBLIC_ and non-public env vars
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || '2024-06-01';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error('Missing Sanity environment variables: projectId, dataset, or token');
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

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

async function addContactUsIcons() {
  console.log('Fetching all Contact Us cards...');
  
  // Fetch all contactUsCard documents
  const cards = await client.fetch(`*[_type == "contactUsCard"]{ _id, title, icon }`);
  
  console.log(`Found ${cards.length} Contact Us cards`);
  
  let updated = 0;
  let skipped = 0;
  
  for (const card of cards as Array<{_id: string, title: string, icon?: string | null}>) {
    // Skip if icon already exists
    if (card.icon) {
      console.log(`✓ Skipped "${card.title}" - already has icon: ${card.icon}`);
      skipped++;
      continue;
    }
    
    // Find matching icon
    const icon = iconMapping[card.title];
    
    if (icon) {
      console.log(`→ Adding icon "${icon}" to "${card.title}"`);
      await client.patch(card._id).set({ icon }).commit();
      updated++;
    } else {
      console.log(`⚠ No icon mapping found for "${card.title}" - leaving as null`);
    }
  }
  
  console.log('\n=== Summary ===');
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total: ${cards.length}`);
}

// Run the script
addContactUsIcons()
  .then(() => {
    console.log('\n✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
