import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'Missing id' }, { status: 400 });
  }
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }
  const query = `*[_type == "solutionFeatureCard" && id == $id][0]{
    title,
    description,
    image,
    href,
    id
  }`;
  const data = await sanityClient.fetch(query, { id });
  
  if (data && data.href) {
    const rawHref = data.href.trim();
    if (rawHref) {
      if (!rawHref.startsWith('http')) {
        data.href = rawHref.startsWith('/') ? rawHref : `/${rawHref}`;
      }
    } else {
      data.href = `/solution-features/${data.id || id}`;
    }
  }
  
  return NextResponse.json(data || {});
}
