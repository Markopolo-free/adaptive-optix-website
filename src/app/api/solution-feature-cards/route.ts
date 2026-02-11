import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from '@/sanity/env';

const builder = imageUrlBuilder({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET! });

export async function GET(req: NextRequest) {
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }
  const query = `*[_type == "solutionCard"] | order(order asc) { _id, id, title, name, href, description, image, icon }`;
  const cards = await sanityClient.fetch(query, {});
  
  const normalizeHref = (href: string | undefined, id: string) => {
    const rawHref = typeof href === 'string' ? href.trim() : '';
    if (rawHref) {
      if (rawHref.startsWith('http')) return rawHref;
      return rawHref.startsWith('/') ? rawHref : `/${rawHref}`;
    }
    return `/solution-features/${id || ''}`;
  };
  
  const result = (cards || []).map((card: any) => {
    return {
      _id: card._id,
      id: card.id,
      title: card.title || card.name,
      href: normalizeHref(card.href, card.id),
      description: card.description, // Keep as block content for PortableText
      image: card.image ? builder.image(card.image).width(320).height(200).url() : null,
      icon: card.icon || null,
    };
  });
  return NextResponse.json(result);
}
