import { sanityClient } from './client';
import { productPageBySlugQuery } from './queries';

export async function getProductPage(slug: string) {
  if (!sanityClient) {
    return null;
  }
  return await sanityClient.fetch(productPageBySlugQuery(slug));
}
