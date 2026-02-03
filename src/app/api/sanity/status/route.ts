import { NextResponse } from 'next/server';
import { sanityClient } from '@/sanity/lib/client';
import { sanityConfig, hasSanityEnv } from '@/sanity/env';

export async function GET() {
  const status = {
    hasSanityEnv,
    projectIdPresent: Boolean(sanityConfig.projectId),
    datasetPresent: Boolean(sanityConfig.dataset),
    tokenPresent: Boolean(sanityConfig.token),
    useCdn: sanityConfig.useCdn,
    apiVersion: sanityConfig.apiVersion,
    canQuery: false,
    error: null as string | null,
  };

  if (!sanityClient) {
    return NextResponse.json(status, { status: 200 });
  }

  try {
    const result = await sanityClient.fetch('*[_type == "solutionFeatureCard"][0]{_id}');
    status.canQuery = Boolean(result?._id);
  } catch (error) {
    status.error = String(error);
  }

  return NextResponse.json(status, { status: 200 });
}
