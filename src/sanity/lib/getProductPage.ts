import { sanityClient } from './client';
import { productPageBySlugQuery } from './queries';

export async function getProductPage(slug: string) {
  if (!sanityClient) {
    return null;
  }
  
  // First try to get from homeCard (Homepage Product Cards)
  const homeCardQuery = `*[_type == "homeCard" && href == "/products/${slug}"][0] {
    _id,
    title,
    description,
    description_2,
    image,
    icon,
    name
  }`;
  
  const homeCardData = await sanityClient.fetch(homeCardQuery);
  if (homeCardData && homeCardData.description) {
    return homeCardData;
  }
  
  // Fallback to productCard
  return await sanityClient.fetch(productPageBySlugQuery(slug));
}
