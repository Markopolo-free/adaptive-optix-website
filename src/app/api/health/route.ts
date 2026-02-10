import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';

export const dynamic = 'force-dynamic';

export async function GET() {
  const checks = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    checks: {
      api: true,
      sanity: false,
    },
  };

  // Check Sanity connection
  try {
    if (sanityClient) {
      await sanityClient.fetch('*[_type == "homeCard"][0]{_id}');
      checks.checks.sanity = true;
    }
  } catch (error) {
    checks.status = 'degraded';
    checks.checks.sanity = false;
  }

  const statusCode = checks.status === 'healthy' ? 200 : 503;
  
  return NextResponse.json(checks, { 
    status: statusCode,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    }
  });
}
