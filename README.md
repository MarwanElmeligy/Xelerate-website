# Xelerate website

Marketing site for **Xelerate Business Solutions** — business transformation partner and
Oracle NetSuite Solution Provider Partner for Egypt, Saudi Arabia and the Middle East.

Rebuilt from the live WordPress site (xelerate.org) as a Next.js App Router project.

## Stack
- **Next.js 16** (App Router, static pages + one API route), **React 19**, **TypeScript**
- **Tailwind CSS v4** — tokens in `app/globals.css` (brand colours sampled from the official logo)
- **GSAP** (lazy-loaded) for scroll reveals, parallax and hero geometry; CSS/SVG (SMIL) for
  hero entrance and the industry workflows. Everything honours `prefers-reduced-motion`.
- Fonts via `next/font`: Hanken Grotesk, Instrument Serif (accent), IBM Plex Mono (labels)

## Develop
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

## Structure
| Path | Purpose |
| --- | --- |
| `app/` | Routes: home, services (+4 detail), features, industries (+3), about, contact-us, careers, privacy-policy, `api/contact` |
| `components/industry/Workflow.tsx` | Animated, accessible industry workflow (themes: gold / emerald / harvest) |
| `components/home/` | Homepage hero (animated geometry) and sections |
| `lib/content/` | Editable content: services, workflows, client logos |
| `lib/site.ts` | Company facts, navigation, contact details |
| `public/images/visuals/` | Original Higgsfield-generated visuals (WebP) |
| `public/images/clients/` | Client logos as shown on the live site |

## SEO
- Trailing-slash URLs match the WordPress site; legacy slugs 308-redirect (`next.config.ts`).
- Per-page metadata, canonical URLs, OG image, JSON-LD (Organization, WebSite, BreadcrumbList, Service).
- `robots.txt`/meta robots block indexing on any non-production Vercel deployment.

## Environment
See `.env.example`. Without contact-delivery variables the form falls back to a pre-filled email.
