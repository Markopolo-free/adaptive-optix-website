import { createClient } from 'next-sanity';
import { hasSanityEnv, sanityConfig } from '../env';

export const sanityClient = hasSanityEnv
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: sanityConfig.useCdn,
      perspective: 'published',
    })
  : null;
