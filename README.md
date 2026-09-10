# AI Tools Hub

A production-oriented React/Vite editorial directory for AI tools, workflow guides, comparisons, and affiliate discovery.

## What is included

- Premium dark editorial homepage preserved from the original concept.
- Centralized typed catalog in `client/src/data/tools.ts`.
- Internal tool review pages at `/tools/:slug`.
- Searchable directory at `/tools`.
- Category pages and side-by-side comparison at `/compare`.
- Original practical guides at `/guides` and `/guides/:slug`.
- Methodology, editorial policy, affiliate disclosure, and privacy pages.
- Dynamic SEO plus static route metadata shells generated during build.
- Canonicals, Open Graph, robots.txt, sitemap.xml, JSON-LD, and noindex 404 handling.
- Affiliate links qualified with `sponsored nofollow` and non-blocking click tracking.
- Newsletter endpoint with Brevo server integration and a bot honeypot.
- Optional Plausible-compatible analytics without putting private API keys in the frontend.
- Mobile navigation, accessible focus states, reduced-motion support, and responsive directory layouts.
- `npm run validate` for a dependency-free structural QA pass.

## Monetization status

The code is ready for affiliate monetization, but an affiliate site only earns when the publisher has an active partner/affiliate relationship and the destination link is valid. The current catalog preserves the affiliate destinations supplied with the original project. Descript currently uses its direct website link, so it should not be described as an affiliate link until an affiliate URL is actually supplied.

The newsletter is production-ready for Brevo once `BREVO_API_KEY` and `BREVO_LIST_ID` are configured on the server. Signup also requires explicit consent and is rate-limited server-side. Never put those values in a `VITE_*` variable.

## Setup

1. Install the package manager/version specified in `package.json`.
2. Copy `.env.example` to `.env` for local development.
3. Configure `BREVO_API_KEY` and `BREVO_LIST_ID` on the deployment environment.
4. Optionally configure Plausible using `VITE_ANALYTICS_DOMAIN` and `VITE_ANALYTICS_ENDPOINT`.
5. Run `npm run validate`.
6. Run `npm run check` and `npm run build` in an environment where dependencies can be installed.

## Editorial integrity

Do not claim hands-on testing unless it actually happened. Tool pages are written as editorial research notes and show a review date. Pricing, features, trials, guarantees, and affiliate terms can change; the provider site remains the final commercial source.

Affiliate pages should add meaningful original value rather than copying merchant descriptions. The project therefore includes comparisons, alternatives, workflows, methodology, and buying guidance.

## Deployment

The build produces the Vite site in `dist/public` and bundles the Express server into `dist/index.js`. The Express server serves the generated site, handles `/api/subscribe`, and supports client-side routes.

For static hosts that cannot run the Express server, deploy the contents of `dist/public` and point newsletter signup to an external trusted endpoint by setting `VITE_NEWSLETTER_ENDPOINT`.

## Important

External accounts are intentionally not fabricated. Domain registration, affiliate approvals, newsletter provider credentials, analytics property creation, and Search Console ownership are external account steps that must be completed by the site owner.
