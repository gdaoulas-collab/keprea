# Sitemap Audit — keprea.vercel.app

Source: https://keprea.vercel.app/sitemap.xml (fetched live)
Also inspected: `public/sitemap.xml`, `dist/sitemap.xml` (identical), `src/App.tsx` routes, robots.txt.

## Validation Report

| Check | Result | Notes |
|---|---|---|
| Valid XML syntax | ✅ PASS | Well-formed, correct namespace (`sitemaps.org/schemas/sitemap/0.9`) |
| URL count vs 50,000 limit | ✅ PASS | 13 URLs, far under limit — no index file needed |
| URL status codes (HTTP) | ✅ PASS | All 13 listed URLs return `200 OK` |
| Domain consistency | ⚠️ EXPECTED (pre-launch) | All 13 URLs use `https://keprea.vercel.app` — matches current live domain. Already tracked as a pre-migration item; must be regenerated with `https://keprea.com` before/at cutover. |
| robots.txt Sitemap directive | 🛑 MISMATCH | `robots.txt` on the live vercel.app domain points to `Sitemap: https://keprea.com/sitemap.xml`, a domain that isn't live yet. Search engines crawling vercel.app today will fail to fetch a sitemap from robots.txt's declared location. Confirmed already noted as a known pre-migration issue — flagging again here so it isn't lost at launch. |
| `priority` / `changefreq` tags | ℹ️ INFO | Present on every URL (priority 0.3–1.0, changefreq weekly/monthly/yearly). Both are ignored by Google (confirmed by Google since 2023) and Bing gives them minimal weight. Not harmful, but safe to remove to simplify maintenance. |
| `lastmod` accuracy | ⚠️ LOW | All 13 URLs share the identical date `2026-06-15` — looks like a bulk-generated/static value rather than real per-page modification dates. Not falsifiable from outside, but if it doesn't reflect actual last-edit dates it provides no crawl-efficiency benefit and could be seen as inaccurate signal quality. |
| `<loc>` uses trailing domain, no query params/fragments | ✅ PASS | Clean absolute URLs |

## Crawled Routes vs Sitemap Coverage

Site's declared 13 routes (per task) all appear in the sitemap, 1:1, all 200:
`/, /solutions, /solutions/bioprotection, /solutions/biopesticides, /solutions/boosters, /solutions/biofertilisant, /pourquoi-le-biocontrole, /qui-sommes-nous, /notre-production, /ressources, /contact, /mentions-legales, /politique-confidentialite`

### Missing page found in codebase but absent from sitemap
- **`/innovation`** — a real route (`src/pages/InnovationPage.tsx`, mounted in `App.tsx` and `src/routes.tsx`) that returns `200 OK` and is linked from the main navigation (`Navigation.tsx`, `href="/innovation"`, label "Innovation"). It is **not included in the sitemap**. Recommendation: add it to `sitemap.xml`.
- Note: `Footer.tsx` links to `/#innovation` (an in-page anchor to the `<Innovation>` section on the homepage), while `Navigation.tsx` links to `/innovation` (the standalone page). These are two different destinations sharing similar content/naming — worth a UX/IA review to confirm this divergence is intentional (could confuse users and dilute topical signal for "innovation" between the homepage section and the dedicated page).

### Extra / legacy URLs correctly excluded
- `/biofertilisant`, `/boosters`, `/extraits-naturels`, `/biocontrole-vivant` exist as legacy paths. Verified live: each returns a server-level **308 redirect** to its new canonical `/solutions/...` URL (e.g. `/biofertilisant` → `/solutions/biofertilisant`). These are correctly **omitted** from the sitemap — no action needed. (Note: `App.tsx` also defines client-side `<Route>` fallbacks for these paths with a comment "redirects to new URLs for backward compat," but the 308 at the edge/CDN level takes precedence in production, so no duplicate-content risk in practice.)
- No 404s or extraneous stale URLs found in the sitemap.

## Quality Gates (Location Pages)

Not applicable — Keprea has no location/city-based landing pages in its route structure. No doorway-page risk detected.

## Safe vs Risky Page Check

All 13 sitemap pages are core product/company/legal pages with unique content (product pages, company info, legal). No programmatic or thin-content pages present. No penalty-risk patterns found.

## Summary of Actions

1. **Critical (pre-launch blocker):** Regenerate sitemap with `https://keprea.com` domain and confirm `robots.txt` Sitemap directive matches the live domain at cutover (currently already tracked, but must be resolved before go-live — currently robots.txt on vercel.app points to the not-yet-live keprea.com sitemap).
2. **High:** Add `/innovation` to the sitemap (valid, live, linked page missing from coverage).
3. **Medium:** Reconcile `/innovation` (page) vs `/#innovation` (homepage anchor) — decide canonical destination and align nav/footer links.
4. **Low:** Remove `priority`/`changefreq` tags (ignored by Google) to simplify sitemap maintenance.
5. **Low:** Replace uniform `lastmod` values with real per-page last-modified dates if feasible, or drop `lastmod` entirely if not tracked accurately.
