import { NextResponse } from 'next/server';
import { getUseCasePage } from '@/sanity/lib/getUseCasePage';
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
  const data = await getUseCasePage(slug);
  
  if (data) {
    // Normalize href if present
    if (data.href) {
      const rawHref = data.href.trim();
      if (rawHref && !rawHref.startsWith('http')) {
        data.href = rawHref.startsWith('/') ? rawHref : `/${rawHref}`;
      }
    }
    
    // Build image URL server-side
    if (data.image && builder) {
      data.imageUrl = builder.image(data.image).width(850).url();
    }
  }
  
  return NextResponse.json(data || {});
}
