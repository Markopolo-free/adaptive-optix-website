import dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(__dirname, '../../.env.local') });

import { createClient } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || '2024-06-01';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  throw new Error('Missing Sanity environment variables');
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

async function migrateSolutionFeatureIds() {
  console.log('Fetching Solution Feature Cards...');
  
  const cards = await client.fetch(
    `*[_type == "solutionFeatureCard"] { _id, title, id, slug }`
  );

  console.log(`Found ${cards.length} Solution Feature Cards`);

  let updated = 0;
  let skipped = 0;

  for (const card of cards) {
    if (card.id) {
      console.log(`✓ Card "${card.title}" already has id: ${card.id}`);
      skipped++;
      continue;
    }

    // Generate id from title or slug
    let newId = card.slug?.current;
    if (!newId) {
      newId = card.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

    console.log(`⟳ Updating card "${card.title}" with id: ${newId}`);

    try {
      await client
        .patch(card._id)
        .set({ id: newId })
        .commit();
      updated++;
      console.log(`✓ Updated successfully`);
    } catch (error) {
      console.error(`✗ Failed to update ${card._id}:`, error);
    }
  }

  console.log(`\n=== Migration Summary ===`);
  console.log(`Total cards: ${cards.length}`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`\nMigration complete!`);
}

migrateSolutionFeatureIds().catch(console.error);
