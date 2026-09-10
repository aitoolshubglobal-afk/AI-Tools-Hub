# AI Tools Hub

A React/Vite editorial directory for practical AI tools, reviews, comparisons and affiliate discovery.

## What changed
- Centralized typed tool catalog in `client/src/data/tools.ts`.
- Searchable `/tools` directory with category filtering.
- Individual SEO-friendly tool pages at `/tools/:slug`.
- Category pages at `/category/:slug`.
- Comparison page at `/compare` with a consistent editorial scoring lens.
- Methodology, editorial policy, affiliate disclosure and privacy pages.
- Dynamic title/meta/OG tags and `robots.txt` + `sitemap.xml`.
- Affiliate click tracking hook that never blocks navigation.
- Newsletter form no longer pretends that localStorage is a real subscription system; it requires `VITE_NEWSLETTER_ENDPOINT`.
- Removed the broken unconditional analytics script and documented optional configuration.
- Responsive editorial UI for the new directory pages while preserving the original homepage visual direction.

## Setup
1. Install dependencies with the package manager specified in `package.json`.
2. Copy `.env.example` to `.env`.
3. Add a trusted newsletter endpoint if you want live subscriptions.
4. Add analytics only through public measurement IDs / endpoint configuration. Never expose provider API secrets in client code.

## Important
Affiliate URLs already present in the original project were preserved. New provider URLs were not invented. Commercial pricing and offer terms should be rechecked before publishing or buying.
