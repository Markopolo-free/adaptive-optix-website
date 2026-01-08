import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import groq from 'groq';

export async function GET() {
  const projectId = process.env.SANITY_PROJECT_ID;
  const dataset = process.env.SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset) {
    return NextResponse.json(
      { error: 'Missing SANITY_PROJECT_ID or SANITY_DATASET in environment' },
      { status: 400 },
    );
  }

  const client = createClient({ projectId, dataset, token, useCdn: false, apiVersion: '2024-06-01' });

  try {
    const home = await client.fetch(
      groq`*[_type == "homeCard"]|order(order asc)[0...2]{_id, _type, title, description, icon, order}`
    );
    const why = await client.fetch(
      groq`*[_type == "whyCard"]|order(order asc)[0...2]{_id, _type, title, description, clickable, order}`
    );
    const products = await client.fetch(
      groq`*[_type == "productCard"]|order(order asc)[0...2]{_id, _type, id, name, href, icon, shortDescription}`
    );
    const solutions = await client.fetch(
      groq`*[_type == "solutionCard"]|order(order asc)[0...2]{_id, _type, id, name, href, icon, description}`
    );

    return NextResponse.json({ ok: true, sample: { home, why, products, solutions } });
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to query Sanity' }, { status: 500 });
  }
}
