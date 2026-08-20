// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    site: 'https://listeningtoyourvoice.co.uk',
    base: '/',
    output: 'static',
    adapter: cloudflare(),
    env: {
        schema: {
            SANITY_PROJECT_ID: envField.string({ context: 'server', access: 'secret' }),
            SANITY_DATASET:    envField.string({ context: 'server', access: 'secret' }),
            SANITY_API_TOKEN:  envField.string({ context: 'server', access: 'secret', optional: true }),
        },
    },
});
