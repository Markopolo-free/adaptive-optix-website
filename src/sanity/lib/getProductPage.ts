import { sanityClient } from './client';
import { productPageBySlugQuery } from './queries';

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function getProductPage(slug: string) {
  if (!sanityClient) {
    return null;
  }
  
  // First try to get from homeCard (Homepage Product Cards)
  const homeCardsQuery = `*[_type == "homeCard"] {
    _id,
    title,
    description,
    description_2,
    image,
    icon,
    name,
    href
  }`;
  
  const homeCards = await sanityClient.fetch(homeCardsQuery);
  const targetHref = `/products/${slug}`;
  const homeCardData = Array.isArray(homeCards)
    ? homeCards.find((card) => {
        const href = typeof card?.href === 'string' ? card.href : '';
        const nameSlug = card?.name ? slugify(card.name) : '';
        const titleSlug = card?.title ? slugify(card.title) : '';
        return (
          href === targetHref ||
          href.endsWith(`/${slug}`) ||
          nameSlug === slug ||
          titleSlug === slug
        );
      })
    : null;
  
  if (homeCardData) {
    return homeCardData;
  }
  
  // Fallback to productCard
  try {
    return await sanityClient.fetch(productPageBySlugQuery(slug));
  } catch (error) {
    console.error('Error fetching product page:', error);
    return null;
  }
}
