import { sanityClient } from './client';
import { useCasePageBySlugQuery } from './queries';

export async function getUseCasePage(slug: string) {
  if (!sanityClient) {
    return null;
  }
  return await sanityClient.fetch(useCasePageBySlugQuery(slug));
}
