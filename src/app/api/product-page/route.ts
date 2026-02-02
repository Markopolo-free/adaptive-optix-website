import { NextResponse } from 'next/server';
import { getProductPage } from '@/sanity/lib/getProductPage';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  const data = await getProductPage(slug);
  return NextResponse.json(data || {});
}
