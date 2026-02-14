import { createClient } from 'next-sanity';
import { NextResponse } from 'next/server';

const partners = [
  {
    _type: 'partner',
    _id: 'partner-1',
    name: 'TechCorp Solutions',
    websiteUrl: 'https://www.techcorpsolutions.com',
    description: 'Leading enterprise software solutions provider specializing in fintech and payment processing systems.',
  },
  {
    _type: 'partner',
    _id: 'partner-2',
    name: 'Global Financial Services',
    websiteUrl: 'https://www.globalfinancialservices.com',
    description: 'International financial services firm offering banking infrastructure and consulting services.',
  },
  {
    _type: 'partner',
    _id: 'partner-3',
    name: 'Digital Payments Inc',
    websiteUrl: 'https://www.digitalpaymentsinc.com',
    description: 'Innovative digital payments company enabling seamless transactions across multiple channels.',
  },
];

export async function POST() {
  try {
    const client = createClient({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      apiVersion: '2024-06-01',
      token: process.env.SANITY_API_TOKEN,
    });

    const transaction = client.transaction();

    partners.forEach((partner) => {
      transaction.createOrReplace(partner);
    });

    await transaction.commit();

    return NextResponse.json(
      { success: true, message: `Created ${partners.length} partner documents` },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error seeding partners:', error);
    return NextResponse.json(
      {
        error: 'Failed to seed partner data',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
