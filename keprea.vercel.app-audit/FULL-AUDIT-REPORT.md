# SEO Audit — keprea.vercel.app

Date: 2026-07-02 · Business type: B2B agri-tech / manufacturer (insect-based agricultural biosolutions), pre-launch on Vercel subdomain ahead of keprea.com cutover.

## SEO Health Score: 53/100

| Category | Weight | Score | Contribution |
|---|---|---|---|
| Technical SEO | 22% | 62/100 | 13.6 |
| Content Quality | 23% | 46/100 | 10.6 |
| On-Page SEO | 20% | 50/100 | 10.0 |
| Schema / Structured Data | 10% | 35/100 | 3.5 |
| Performance (CWV) | 10% | 55/100 (lab estimate — no CrUX/PSI field data available this run) | 5.5 |
| AI Search Readiness (GEO) | 10% | 62/100 | 6.2 |
| Images | 5% | 65/100 | 3.25 |
| **Total** | | | **52.7 ≈ 53/100** |

Site fundamentals are unusually strong for a young startup site (true SSG, clean URLs, HSTS, RGPD compliance already built) — the score is dragged down by a duplicate-title/meta HTML bug, thin content relative to SERP competitors, and a widespread absence of page-specific structured data. None of the findings below require an architecture change; all are fixes within the existing stack.

---

## Top 5 Critical Issues

1. **Every one of the 18 pages ships two `<title>` and two `<meta description>` tags.** `index.html`'s hardcoded generic tags survive alongside each page's correct `<Head>` output — a real risk that Google is rewriting/blending titles instead of using the crafted per-page ones. *(technical.md C1)*
2. **A live internal placeholder note is visible on `/qui-sommes-nous`** — "Photo à faire ensemble le 15 OCT" — in all 5 site languages, in front of the exact audience (farmers, cooperatives) whose trust the site most needs. 5-minute fix, outsized trust damage until fixed. *(content.md #1)*
3. **No canonical tags anywhere on the site**, combined with a pending domain migration (vercel.app → keprea.com) and legacy alias routes — real duplicate-content exposure once keprea.com goes live. *(technical.md C2)*
4. **Structured data (Organization JSON-LD) hardcodes `keprea.com`** while the live, indexable site is `keprea.vercel.app`, with no canonical tag to reconcile the mismatch — weakens entity association for both Google and AI crawlers today. *(schema.md, technical.md M3)*
5. **`/solutions/boosters` never uses the word "biostimulant"** anywhere in title, H1, or body — it structurally cannot rank for its own target keyword "biostimulant agricole." *(sxo.md — Terminology-Literal Searcher persona, 24/100)*

## Top 5 Quick Wins

1. Delete the hardcoded `<title>`/`<meta name="description">` from `index.html` (fixes #1 above sitewide in one file).
2. Remove the `team.photoNote` placeholder string from `LanguageContext.tsx` (5 languages) and `Team.tsx`.
3. Add `/innovation` to `sitemap.xml` — it's live, linked, and simply missing.
4. Change the hero video's `preload="auto"` to `preload="metadata"` and re-encode the 13MB MP4 down to ~2-3MB.
5. Convert the 2.49MB "Notre site de production" PNG to WebP/AVIF (expected <300KB, same visual quality at its rendered size).

---

## Technical SEO — Score 62/100
Strengths: true SSG (full content visible to any crawler without JS execution), clean kebab-case French URLs, HTTPS + HSTS fully enforced (2yr max-age, preload flag), working 308 redirects for all 4 legacy alias routes, real 404s, valid sitemap/robots.txt structure.

Findings:
- **Critical** — Duplicate title/meta tags on every page (root cause: `index.html` template not stripped by `vite-react-ssg`).
- **Critical** — No `<link rel="canonical">` on any page.
- **High** — Hero video `preload="auto"` on a 13MB file; a second 19.5MB video referenced elsewhere should be verified as non-preloaded.
- **High** — `/innovation` missing from sitemap despite being live and nav-linked.
- **High** — Legacy `<Route>` duplicates in `App.tsx` are dead code depending entirely on `vercel.json` redirects with no canonical-tag backstop.
- **Medium** — No security headers beyond HSTS (CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all absent).
- **Medium** — OG/Twitter tags static and identical across all 18 pages; no `og:url` anywhere.
- **Medium** — `/mentions-legales` (and likely `/politique-confidentialite`) have zero page-specific `<Head>` override.

Full detail: `findings/technical.md`

## Content Quality (E-E-A-T) — Score 46/100
The known testimonial gap (documented in MEMORY.md as top priority) is confirmed and, encouragingly, already handled transparently on the homepage rather than with fake placeholders — keep that pattern.

New findings:
- **Critical** — Live internal placeholder note on `/qui-sommes-nous` (see above).
- **Critical** — 6 named individuals on the Team page, including names that plausibly correspond to known public figures in French agtech/agriculture, with no bios, credentials, or corroborating links — needs verification with the individuals before anything else; if inaccurate/aspirational this is a legal and trust risk, if accurate it's a wasted authority signal.
- **High** — `/ressources` is functionally empty (~169 words, all "coming soon").
- **High** — `/qui-sommes-nous` (~282 words) and `/notre-production` (~232 words) are well under the ~500-600 word floor for their page type.
- **High** — All 4 product pages run 523-589 words, 30-45% under the 800-word service-page floor (confirms the open ERRORS.md thin-content item with hard numbers).
- **High** — The 4 product pages share near-verbatim boilerplate CTA/cross-sell copy — a named low-quality-content marker.
- **High** — Stat sourcing mixes vague "données internes" with legitimate citations (ITAB, IBMA) in the same source line, diluting credibility of both.
- **Medium** — No author/byline or "last updated" date on pages making regulatory claims.

E-E-A-T breakdown: Experience 8/20, Expertise 11/25, Authoritativeness 10/25, Trustworthiness 17/30.
Full detail: `findings/content.md`

## Schema / Structured Data — Score 35/100
Only one JSON-LD block exists site-wide — a static `Organization` object hardcoded in `index.html`, identically duplicated on every page.
- **Critical** — `url`/`logo` point to `keprea.com` while the live site is `keprea.vercel.app`.
- **High** — No `BreadcrumbList` anywhere despite a clean URL hierarchy — cheap, safe, immediate win.
- **Medium** — No `WebSite` schema on homepage; no `sameAs` links.
- **Medium** — No product-level schema for the 4 solution pages. Recommendation: use `Service` schema (or `Product` with factual-only properties, no `offers`/`aggregateRating`/`review`) since these are B2B inputs sold via commercial contact, not retail SKUs — fabricating price/review data risks a Google manual action.
- No deprecated schema types found; no FAQPage present (fine — only add later for AI/GEO citation value, not for Google rich results, which were retired for FAQ in May 2026).

Full detail + ready-to-use JSON-LD: `findings/schema.md`

## Sitemap — Findings
Valid, well-formed, all 13 listed URLs return 200 and match real routes. Two issues: `/innovation` missing from the sitemap, and `robots.txt`'s `Sitemap:` directive already points to `keprea.com/sitemap.xml`, which isn't live yet (both are pre-launch items, but must be resolved at cutover). `priority`/`changefreq` are present but ignored by Google — safe to drop. `lastmod` is identical across all URLs (likely bulk-generated, not real per-page dates).

Full detail: `findings/sitemap.md`

## Performance (Core Web Vitals) — Lab Estimate Only
PSI/CrUX API was rate-limited this session (no API key configured) — all figures below are lab/heuristic estimates, not confirmed field data.
- Server delivery is excellent: Vercel edge cache, TTFB ~50ms, fully static SSG HTML.
- **Biggest risk**: the homepage hero video (13MB MP4) uses `preload="auto"`, competing with a 722KB JS bundle and render-blocking CSS/fonts for bandwidth during initial load — doesn't directly block LCP (poster paints first) but hurts Time to Interactive and mobile data usage.
- **Second issue**: a 2.49MB uncompressed PNG on the homepage production section — trivial to compress to <300KB.
- Single monolithic 722KB JS bundle with no visible route-based code-splitting.
- CLS risk is low (pre-sized containers throughout).

Recommend re-running with a `GOOGLE_API_KEY` configured to get authoritative CrUX/Lighthouse numbers once available.
Full detail: `findings/performance.md`

## Visual / Mobile — Findings
- **High** — On `/contact` at 375px, zero actionable element (no form field, no submit button) is visible above the fold — the highest-intent page on the site shows nothing to act on without scrolling.
- **Medium** — Cookie consent banner covers meaningful content on mobile load (expected RGPD behavior, but tightens the effective above-fold area further).
- **Medium** — Touch targets (cookie banner buttons, hamburger, language switcher) sit around 36-46px, under the 48px guideline.
- Positive: no horizontal scroll or console errors on any of 6 page/viewport combos tested; single H1 confirmed on all pages; strong CTA contrast; no decorative emoji in UI copy.

Full detail + screenshots: `findings/visual.md`, `screenshots/`

## AI Search Readiness (GEO) — Score 62/100
Strong technical foundation: fully server-rendered content (no JS-dependent SPA gap), all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) verified allowed and returning 200. Product pages already have well-formed FAQ Q&A sections in the ideal citation format (question heading + short factual answer).

Gaps: no `FAQPage` schema despite qualifying content (highest-leverage single fix); `llms.txt` missing; robots.txt's sitemap directive 404s; stats lack source attribution; only one generic Organization block, no `Product`/`sameAs` enrichment.

Full detail: `findings/geo.md`

## Search Experience (SXO) — Gap Score 31/100
Independent of the SEO Health Score — measures fit between what Google rewards for target keywords and what Keprea currently serves.

**Systemic page-type mismatch**: all 4 target keywords ("biocontrôle agricole," "biopesticide naturel," "biostimulant agricole," "biofertilisant") show Google rewarding informational/definitional content (Wikipedia, EPA, Bayer/BASF educational hubs), while Keprea's pages are thin commercial solution pages built for buyers who already understand the category.
- **Critical** on `/solutions/boosters` (never says "biostimulant") and `/solutions/biofertilisant` (single-SKU product page targeting a pure dictionary-level term).
- **High** on `/pourquoi-le-biocontrole` and the biopesticide pages — right intent, insufficient depth (335-499 words vs. 1000+ on ranking pages).
- Weakest persona: "Terminology-Literal Searcher" at 24/100.
- All 5 audited pages share an identical meta description — no SERP differentiation.

Full detail: `findings/sxo.md`

---

## What's Already Working (don't regress)
- True static SSG — every page fully readable by any crawler, human or AI, with zero JS execution required.
- HTTPS/HSTS fully and correctly enforced.
- RGPD posture is genuinely solid: cookie banner with real opt-in, no pre-ticked consent, mentions légales + politique de confidentialité live, GA4 loads only after consent.
- Clean French kebab-case URL structure with working legacy redirects.
- Product pages already have the right *structural* bones for both SEO and AI citation (FAQ, step-by-step "Mode d'emploi," target-crop sections) — the fix is depth and schema, not restructuring.
- Honest, non-fabricated handling of the missing-testimonials gap on the homepage (a transparent "coming after 2026 field trials" message, not fake reviews).
