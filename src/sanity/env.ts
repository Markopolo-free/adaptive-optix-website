const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION || '2024-06-01';
const token = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_TOKEN;

export const sanityConfig = {
  // Prefer NEXT_PUBLIC_ in the browser, but allow server-only env vars on Vercel
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: !token && process.env.NODE_ENV === 'production',
};

export const hasSanityEnv = Boolean(sanityConfig.projectId && sanityConfig.dataset);
