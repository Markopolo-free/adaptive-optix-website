import { NextRequest, NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from '@/sanity/env';
import { blockToPlainText } from '@/sanity/lib/blockToPlainText';

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
  const href = `/solution-features/${slug}`;
  // Query using id or href from the card
  const cardQuery = `*[_type == "solutionFeatureCard" && (id == $id || href == $href)][0]{
    title,
    description,
    description_2,
    image
  }`;
  const pageQuery = `*[_type == "solutionFeaturePage" && slug.current == $slug][0]{
    title,
    intro,
    body
  }`;

  try {
    const [cardData, pageData] = await Promise.all([
      sanityClient.fetch(cardQuery, { id: slug, href }),
      sanityClient.fetch(pageQuery, { slug }),
    ]);

    if (cardData) {
      return NextResponse.json({
        title: cardData.title,
        description: cardData.description,
        description_2: cardData.description_2,
        imageUrl: cardData.image && builder ? builder.image(cardData.image).width(850).url() : null,
      });
    }

    const blocksToText = (blocks?: Array<{ children?: Array<{ text?: string }> }>) => {
      if (!blocks?.length) return '';
      return blocks
        .map((block) => (block.children || []).map((child) => child.text || '').join(''))
        .join('\n')
        .trim();
    };

    if (pageData) {
      return NextResponse.json({
        title: pageData.title,
        description: blocksToText(pageData.body) || blocksToText(pageData.intro) || '',
        image: null,
      });
    }

    return NextResponse.json({});
  } catch (error) {
    return NextResponse.json({ error: 'Sanity fetch failed' }, { status: 200 });
  }
}

