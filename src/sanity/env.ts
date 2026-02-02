export const sanityConfig = {
  // Always use NEXT_PUBLIC_ vars for both client and server (scripts)
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || '2024-06-01',
  useCdn: process.env.NODE_ENV === 'production',
};

export const hasSanityEnv = Boolean(sanityConfig.projectId && sanityConfig.dataset);
