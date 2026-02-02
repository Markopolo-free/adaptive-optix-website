import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from './client';

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

export function urlFor(source: any) {
  if (!builder) return null;
  return builder.image(source).url();
}
