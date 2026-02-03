import { NextResponse } from 'next/server';
import { getUseCasePage } from '@/sanity/lib/getUseCasePage';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  const data = await getUseCasePage(slug);
  
  // Normalize href if present
  if (data && data.href) {
    const rawHref = data.href.trim();
    if (rawHref && !rawHref.startsWith('http')) {
      data.href = rawHref.startsWith('/') ? rawHref : `/${rawHref}`;
    }
  }
  
  return NextResponse.json(data || {});
}
