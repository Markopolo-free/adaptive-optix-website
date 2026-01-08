export const sanityConfig = {
  // Use NEXT_PUBLIC_ vars for client-side (Studio), fallback to server vars
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || '2024-06-01',
  useCdn: process.env.NODE_ENV === 'production',
};

export const hasSanityEnv = Boolean(sanityConfig.projectId && sanityConfig.dataset);
