import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import { footerCardQuery } from '@/sanity/lib/queries';

export async function GET() {
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }

  try {
    const footerCard = await sanityClient.fetch(footerCardQuery);
    
    return NextResponse.json({
      query: footerCardQuery,
      data: footerCard,
      twitterUrlValue: footerCard?.twitterUrl,
      twitterUrlType: typeof footerCard?.twitterUrl,
      allUrlFields: {
        linkedInUrl: footerCard?.linkedInUrl,
        instagramUrl: footerCard?.instagramUrl,
        twitterUrl: footerCard?.twitterUrl,
        tiktokUrl: footerCard?.tiktokUrl,
        facebookUrl: footerCard?.facebookUrl,
      }
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
