import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from '@/sanity/env';

const builder = sanityConfig.projectId && sanityConfig.dataset
  ? imageUrlBuilder({ projectId: sanityConfig.projectId, dataset: sanityConfig.dataset })
  : null;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  if (!sanityClient) {
    return NextResponse.json({ error: 'Sanity client not configured' }, { status: 500 });
  }
  const href = `/solution-feature` + `s/${slug}`;
  // Query using multiple fields to find the card
  const cardQuery = `*[_type == "solutionFeatureCard" && (
    id == $slug ||
    href == $href ||
    href == $hrefWithTab
  )][0]{
    id,
    name,
    title,
    description,
    description_2,
    image
  }`;
  try {
    // Clean up the slug to handle different ID formats
    const cleanSlug = slug.trim().toLowerCase();
    const href = `/solution-features/${cleanSlug}`;
    const hrefWithTab = `\t/solution-features/${cleanSlug}`;
    
    const cardData = await sanityClient.fetch(cardQuery, { slug: cleanSlug, href, hrefWithTab });

    if (cardData) {
      return NextResponse.json({
        title: cardData.name || cardData.title || cardData.id,
        description: cardData.description,
        description_2: cardData.description_2,
        imageUrl: cardData.image && builder ? builder.image(cardData.image).width(850).url() : null,
      });
    }

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error: 'Sanity fetch failed' }, { status: 200 });
  }
}

