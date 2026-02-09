/**
 * Migration script to convert text fields to block content format
 * Run this BEFORE changing schema types from 'text' to 'array' of blocks
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!, // Need write token
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Helper function to convert plain text to block content
function textToBlocks(text: string | null | undefined): any[] {
  if (!text || text.trim() === '') return [];
  
  return [
    {
      _type: 'block',
      _key: Math.random().toString(36).substring(2, 11),
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: text,
          marks: [],
        },
      ],
      markDefs: [],
    },
  ];
}

// Define which card types and fields need migration
const migrations = [
  {
    type: 'homeCard',
    fields: ['description'],
  },
  {
    type: 'productCard',
    fields: ['shortDescription', 'description', 'description_2'],
  },
  {
    type: 'solutionCard',
    fields: ['description'],
  },
  {
    type: 'useCaseCard',
    fields: ['description', 'description_2'],
  },
  {
    type: 'consultancyCard',
    fields: ['description'],
  },
  {
    type: 'contactUsCard',
    fields: ['description'],
  },
  {
    type: 'pricingManagementCard',
    fields: ['description'],
  },
  {
    type: 'whyCard',
    fields: ['description'],
  },
  {
    type: 'solutionFeatureCard',
    fields: ['description', 'description_2'],
  },
];

async function migrateCardType(cardType: string, fields: string[]) {
  console.log(`\n🔄 Migrating ${cardType}...`);
  
  // Fetch all documents of this type
  const query = `*[_type == $cardType]`;
  const documents = await client.fetch(query, { cardType });
  
  console.log(`   Found ${documents.length} documents`);
  
  let migratedCount = 0;
  let skippedCount = 0;
  
  for (const doc of documents) {
    const patches: any = {};
    let needsUpdate = false;
    
    for (const field of fields) {
      const value = doc[field];
      
      // Check if field exists and is a string (not already converted)
      if (value && typeof value === 'string') {
        patches[field] = textToBlocks(value);
        needsUpdate = true;
      } else if (Array.isArray(value)) {
        // Already converted
        skippedCount++;
      }
    }
    
    if (needsUpdate) {
      try {
        await client
          .patch(doc._id)
          .set(patches)
          .commit();
        
        migratedCount++;
        console.log(`   ✅ Migrated: ${doc.name || doc.title || doc._id}`);
      } catch (error) {
        console.error(`   ❌ Failed to migrate ${doc._id}:`, error);
      }
    }
  }
  
  console.log(`   📊 Migrated: ${migratedCount}, Already converted: ${skippedCount}`);
}

async function runMigration() {
  console.log('🚀 Starting text-to-blocks migration...\n');
  console.log('This will convert text fields to block content format.');
  console.log('Run this BEFORE changing schema definitions.\n');
  
  try {
    for (const { type, fields } of migrations) {
      await migrateCardType(type, fields);
    }
    
    console.log('\n✅ Migration completed successfully!');
    console.log('You can now safely update the schema types from "text" to "array" of blocks.');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  runMigration();
}

export { runMigration, textToBlocks };
