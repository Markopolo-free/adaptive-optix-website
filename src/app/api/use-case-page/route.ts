import { NextResponse } from 'next/server';
import { getUseCasePage } from '@/sanity/lib/getUseCasePage';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) {
    return NextResponse.json({ error: 'Missing slug' }, { status: 400 });
  }
  const data = await getUseCasePage(slug);
  return NextResponse.json(data || {});
}
