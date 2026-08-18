# Technical Architecture & Stack

## Core Technologies
* **Framework:** Astro Build (v7+)
* **Repository:** GitHub
* **Hosting & Edge:** Cloudflare Workers

## Development Guidelines
* **Styling:** Scoped CSS / Bootstrap v5 within Astro components using OKLCH tokens from `DESIGN.md`.
* **Output Mode:** Static Site Generation (SSG) with serverless functions for contact forms via Cloudflare Workers. SSR for /blog content
* **Performance:** Zero unnecessary client-side JavaScript; 