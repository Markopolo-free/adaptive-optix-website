import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

export async function POST() {
  const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset || !token) {
    return NextResponse.json(
      { error: 'Missing Sanity configuration (projectId, dataset, or token)' },
      { status: 500 }
    );
  }

  const client = createClient({
    projectId,
    dataset,
    token,
    useCdn: false,
    apiVersion: '2024-06-01',
  });

  try {
    // Fetch existing footer card
    const existingFooter = await client.fetch(`*[_type == "footerCard"][0]`);

    if (!existingFooter) {
      return NextResponse.json(
        { error: 'No footer card document found' },
        { status: 404 }
      );
    }

    // Create mutation to update with all fields (including new ones)
    const updatedFooter = {
      _type: 'footerCard',
      connectTitle: existingFooter.connectTitle || 'Connect',
      connectText: existingFooter.connectText || 'Email : support@adaptiveoptix.com\n\nFind us : www.linkedin.com/in/adaptive-optix-954448375',
      email: existingFooter.email || 'support@adaptiveoptix.com',
      linkedInUrl: existingFooter.linkedInUrl || null,
      instagramUrl: existingFooter.instagramUrl || null,
      twitterUrl: existingFooter.twitterUrl || null,
      tiktokUrl: existingFooter.tiktokUrl || null,
      facebookUrl: existingFooter.facebookUrl || null,
    };

    // Update the document
    const result = await client
      .patch(existingFooter._id)
      .set(updatedFooter)
      .commit();

    return NextResponse.json({
      success: true,
      message: 'Footer card migrated successfully',
      documentId: result._id,
      updatedFields: Object.keys(updatedFooter),
    });
  } catch (error) {
    return NextResponse.json(
      { error: String(error), message: 'Failed to migrate footer card' },
      { status: 500 }
    );
  }
}
