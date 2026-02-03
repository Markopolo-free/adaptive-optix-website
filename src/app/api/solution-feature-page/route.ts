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
  const href = `/solution-features/${slug}`;
  // Query using id or href from the card
  const cardQuery = `*[_type == "solutionFeatureCard" && (id == $id || href == $href)][0]{
    title,
    description,
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
      return NextResponse.json(cardData);
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

