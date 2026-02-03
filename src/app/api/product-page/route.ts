import { NextResponse } from 'next/server';
import { getProductPage } from '@/sanity/lib/getProductPage';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from '@/sanity/env';

const builder = sanityConfig.projectId && sanityConfig.dataset
  ? imageUrlBuilder({ projectId: sanityConfig.projectId, dataset: sanityConfig.dataset })
  : null;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  const data = await getProductPage(slug);
  
  if (data && data.image && builder) {
    data.imageUrl = builder.image(data.image).width(850).url();
  }
  
  return NextResponse.json(data || {});
}
