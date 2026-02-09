import { NextResponse } from 'next/server';
import { getProductPage } from '@/sanity/lib/getProductPage';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from '@/sanity/env';
import { blockToPlainText } from '@/sanity/lib/blockToPlainText';

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
  
  if (data) {
    // Keep description as PortableText (block content) for rich formatting in main content area
    // Convert other description fields to plain text for consistency
    if (data.shortDescription) data.shortDescription = blockToPlainText(data.shortDescription);
    if (data.description_2) data.description_2 = blockToPlainText(data.description_2);
    
    if (data.image && builder) {
      data.imageUrl = builder.image(data.image).width(850).url();
    }
  }
  
  return NextResponse.json(data || {});
}
