import { sanityClient } from '@/sanity/lib/client';
import { partnersQuery } from '@/sanity/lib/queries';

export async function GET() {
  try {
    const partners = await sanityClient.fetch(partnersQuery);

    return Response.json(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch partners',
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
