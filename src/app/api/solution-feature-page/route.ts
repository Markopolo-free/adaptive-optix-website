import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }
  // Query using id (which is the slug-friendly identifier from the card)
  const query = `*[_type == "solutionFeatureCard" && id == $id][0]{
    title,
    description,
    image
  }`;
  const data = await sanityClient.fetch(query, { id: slug });
  return NextResponse.json(data || {});
}
