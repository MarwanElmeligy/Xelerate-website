# Xelerate website — launch readiness

Branch `claude/busy-hamilton-cosy4n` · Vercel project `xelerate-website` (preview only — nothing on xelerate.org has changed).

## Critical — must be resolved before going live
1. **Contact form destination.** Set either `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (+ a verified `CONTACT_FROM_EMAIL`)
   or `CONTACT_WEBHOOK_URL` in the Vercel *Production* environment. Until then the form validates, then offers a
   pre-filled email to info@xelerate.org (no enquiry is lost, but it is not a true form submission).
2. **Domain / DNS cut-over.** xelerate.org currently serves WordPress. Going live means adding the domain to the
   Vercel project and repointing DNS; decide the cut-over time and keep WordPress available for rollback.
3. **Analytics IDs.** Add `NEXT_PUBLIC_GTM_ID=GTM-MCMV52SZ` (and `NEXT_PUBLIC_GA_ID=G-YNPKWWC6ZV` only if GA4 is not
   fired through GTM) to *Production* only. Confirm the Google Ads conversion (AW-17700633739) fires on the new
   `generate_lead` dataLayer event inside GTM.

## Important — should be confirmed before launch
4. **Client logos & testimonial.** 24 logos, the Taryah Poultry quote and the Osool case study are reused from the live
   site. Confirm each client is still current and approves logo use.
5. **Partner status wording.** Site uses "Oracle NetSuite Solution Provider Partner" (matching the lockup file). The live
   site also says "Certified Partner" / "NetSuite-certified consultants" — these were removed pending confirmation.
   Confirm the current tier and use of the lockup per Oracle Partner Network brand guidelines (a reversed/white lockup
   would allow use on dark backgrounds).
6. **Precious Metals claims.** Page states capabilities as standard NetSuite (multi-location, lot-numbered inventory,
   multi-currency, OneWorld), configured by Xelerate (weight/purity capture, fine-weight valuation, metal-rate price
   build-up, position dashboards) and integration (market-rate feed). Confirm Xelerate is willing to deliver the
   "configured" items and wants to target refiners and jewelry businesses as well as traders.
7. **Professional Services claims.** SuiteProjects / revenue recognition are noted as licence-dependent. Confirm wording.
8. **Markets.** Site positions Egypt, Saudi Arabia and the wider Middle East (per brief). The live About page also names
   the UAE/Dubai — confirm whether to mention the UAE explicitly.
9. **Privacy policy.** Draft written conservatively — needs legal review (Egypt PDPL / KSA PDPL).
10. **Careers application route.** Currently "email your CV to info@xelerate.org" — confirm address (e.g. careers@).

## Optional — post-launch improvements
11. Arabic (RTL) version of the site.
12. Event pages (agrena2026, itex2026, webinar registration) were not migrated — add if still needed.
13. Downloadable Osool case study (live site linked to one; file not available).
14. Real project photography / team photos for About and Careers.
15. Content-Security-Policy header once the final tag set in GTM is known.
16. Connect the Vercel project to the GitHub repo for automatic preview deployments per push.

## What was measured (local production build, Lighthouse 12)
| Page | Mobile perf | Desktop perf | A11y | Best practices | SEO | CLS |
| --- | --- | --- | --- | --- | --- | --- |
| Home | 91–94 | 100 | 100 | 100 | 100 | 0 |
| Precious Metals | 93 | 100 | 100 | 100 | 100 | 0 |
| Professional Services | 93 | 100 | 98–100 | 100 | 100 | 0 |
