/**
 * API endpoint to run the text-to-blocks migration
 * Access: /api/migrate-to-blocks
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
});

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

const migrations = [
  { type: 'homeCard', fields: ['description'] },
  { type: 'productCard', fields: ['shortDescription', 'description', 'description_2'] },
  { type: 'solutionCard', fields: ['description'] },
  { type: 'useCaseCard', fields: ['description', 'description_2'] },
  { type: 'consultancyCard', fields: ['description'] },
  { type: 'contactUsCard', fields: ['description'] },
  { type: 'pricingManagementCard', fields: ['description'] },
  { type: 'whyCard', fields: ['description'] },
  { type: 'solutionFeatureCard', fields: ['description', 'description_2'] },
];

export async function POST(request: NextRequest) {
  try {
    const results: any = {
      summary: {},
      details: [],
    };

    for (const { type, fields } of migrations) {
      const query = `*[_type == $cardType]`;
      const documents = await client.fetch(query, { cardType: type });
      
      let migratedCount = 0;
      let skippedCount = 0;
      const errors: string[] = [];

      for (const doc of documents) {
        const patches: any = {};
        let needsUpdate = false;

        for (const field of fields) {
          const value = doc[field];
          
          if (value && typeof value === 'string') {
            patches[field] = textToBlocks(value);
            needsUpdate = true;
          } else if (Array.isArray(value)) {
            skippedCount++;
          }
        }

        if (needsUpdate) {
          try {
            await client.patch(doc._id).set(patches).commit();
            migratedCount++;
          } catch (error: any) {
            errors.push(`${doc._id}: ${error.message}`);
          }
        }
      }

      results.summary[type] = {
        total: documents.length,
        migrated: migratedCount,
        skipped: skippedCount,
        errors: errors.length,
      };

      if (errors.length > 0) {
        results.details.push({ type, errors });
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Migration completed',
      results,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'Migration failed',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Text-to-blocks migration endpoint',
    usage: 'Send a POST request to run the migration',
    warning: 'This will convert all text fields to block content format',
  });
}
