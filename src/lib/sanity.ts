import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_TOKEN } from 'astro:env/server';

export const sanityClient = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    apiVersion: '2024-01-01',
    useCdn: false,
    token: SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

export function imageUrl(source: SanityImageSource) {
    return builder.image(source);
}
