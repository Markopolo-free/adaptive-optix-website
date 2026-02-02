import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';

export async function GET() {
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }
  
  const query = `*[_type == "solutionFeatureCard"]{ _id, _rev, title, id, description, image, href }`;
  const data = await sanityClient.fetch(query);
  return NextResponse.json(data || []);
}
