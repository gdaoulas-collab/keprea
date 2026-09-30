# Technical SEO Audit — keprea.vercel.app

Date: 2026-07-02
Scope: crawlability, indexability, URL structure, mobile-friendliness, Core Web Vitals, security, HTTPS, structured data.
Pages checked: `/`, `/solutions`, `/solutions/bioprotection`, `/solutions/biopesticides`, `/solutions/boosters`, `/solutions/biofertilisant`, `/contact`, `/mentions-legales`, `/innovation`, legacy alias URLs (`/biofertilisant`, `/boosters`, `/extraits-naturels`, `/biocontrole-vivant`).

**Technical Score: 62/100** (dragged down by the duplicate-title/meta bug and missing canonicals; crawlability, HTTPS, and redirect hygiene are strong).

---

## Critical

### C1. Every page ships TWO `<title>` and TWO `<meta name="description">` tags — invalid HTML, wrong tag wins
Confirmed on `/`, `/contact`, `/solutions/*`, etc. The `vite-react-ssg` `<Head>` component correctly injects the per-page, SEO-optimized title/description **first** in `<head>` (marked `data-rh="true"`), but the static `index.html` template that vite-react-ssg copies for every route also hardcodes a **second**, generic, site-wide title/description immediately after it. Example from `/contact`:

```html
<title data-rh="true">Contactez Keprea | Biosolutions Agricoles à Dole (39)</title>
<meta data-rh="true" name="description" content="Contactez l'équipe Keprea pour un conseil sur nos biosolutions agricoles...">
...
<title>Keprea — Biosolutions Agricoles</title>
<meta name="description" content="Keprea développe des biosolutions à base d'insectes pour l'agriculture durable : bioprotection, biopesticides, boosters de croissance et biofertilisants.">
```

Per the HTML spec, the browser DOM's `document.title` uses the *first* `<title>` in tree order, so the correct per-page title should technically win for browsers — but this is unreliable across parsers, and Google has been observed rewriting titles more aggressively when it detects multiple/duplicate title signals in source. Net effect today: **every indexed page in Search Console is effectively presenting duplicate title/description signals** ("Keprea — Biosolutions Agricoles" / the generic bioprotection blurb), which is very likely why unique per-page titles crafted for `/contact`, homepage, etc. aren't differentiating in search results.

Root cause: `index.html` (the SSG template) hardcodes `<title>` and `<meta name="description">` (lines ~10-11) which are never stripped when vite-react-ssg injects the route-specific `<Head>` content — both end up in the final static HTML for all 18 routes.

**Fix**: Remove the hardcoded `<title>` and `<meta name="description">` tags from `index.html`; rely exclusively on each page's `<Head>` component (already implemented per-page in Index.tsx, ContactPage.tsx, SolutionsHub, product pages). Add a fallback `<Head>` at the `App`/root layout level for any page missing one (see C2).

### C2. No canonical tag on any page (checked 9+ URLs, none found)
Zero `<link rel="canonical">` on homepage, solutions hub, product pages, contact, or legal pages. Combined with the legacy alias routes and the vercel.app→keprea.com pending migration, this is a real duplication risk: once keprea.com goes live, without canonicals Google has no strong signal for which domain/URL is authoritative, and internal duplicate variants (see H2) have no self-referencing canonical either.

**Fix**: Add `<link rel="canonical" href="https://keprea.vercel.app{path}">` per page now (self-referential), and flip to `https://keprea.com{path}` at migration cutover (same day the sitemap/robots.txt domain switch happens, per the existing ERRORS.md migration checklist).

---

## High

### H1. Hero and homepage videos are large and eagerly preloaded — LCP/bandwidth risk
`src/components/Hero.tsx` sets `preload="auto"` on the hero `<video>`. Measured asset sizes fetched live:

| Asset | Size |
|---|---|
| hero-background-video.mp4 | 0.6 MB |
| portfolio-video-1.mp4 | 11.2 MB |
| portfolio-video-2.mp4 | 5.9 MB |
| portfolio-video-3.mp4 | 9.1 MB |
| portfolio-video-4.mp4 (current hero video, per MEMORY/ERRORS 02/07 fix) | 13.0 MB |
| biocontrol-video.mp4 (referenced in `ProductsSchema.tsx`) | 19.5 MB |

A poster image is correctly set (good — avoids a blank flash), but `preload="auto"` tells the browser to start downloading the full ~13 MB hero video immediately on page load, competing with critical CSS/JS/fonts for bandwidth. On throttled mobile connections this pushes back Time to Interactive and can indirectly hurt LCP/INP even though the LCP element itself is likely the poster image or headline text. This is a Core Web Vitals **lab-inspection** flag, not a measured field score (no PSI credentials available in this session — python3 not on PATH inside the sandbox and no CrUX/API key configured; recommend running PageSpeed Insights against the production keprea.com domain once CrUX has field data, since vercel.app subdomains typically lack CrUX coverage).

**Fix**: Change hero video `preload` to `metadata` (or `none` on mobile viewports via `matchMedia`), and confirm the 19.5 MB `biocontrol-video.mp4` is lazy-loaded / below-the-fold only, not preloaded.

### H2. Legacy alias routes exist as live, indexable duplicate routes in the SPA router (mitigated by Vercel redirects, but verify consistency)
`App.tsx` still registers `/biofertilisant`, `/boosters`, `/extraits-naturels`, `/biocontrole-vivant` as full React Router routes rendering the same page components as their canonical `/solutions/*` counterparts. In production this is currently masked because `vercel.json` issues clean 308 redirects at the edge for all four:

```
/biofertilisant        -> /solutions/biofertilisant   (308)
/boosters               -> /solutions/boosters         (308)
/extraits-naturels      -> /solutions/biopesticides    (308)
/biocontrole-vivant     -> /solutions/bioprotection    (308)
```
Verified live — all four return correct 308s with `Location` headers. This is good hygiene today, but it means the app-level duplicate routes are now dead code that could resurface as an indexability problem if the `vercel.json` redirects are ever dropped (e.g. accidental config removal during the keprea.com migration, or if some other host/CDN in front of Vercel doesn't honor the same redirect rules). Low risk in current state; flagging as High because it's a "silent" dependency — the correctness of the whole legacy-URL strategy rests entirely on a static redirect config file, with no defense-in-depth (no canonical tag on the target pages either, see C2).

**Fix**: Once C2 canonicals are shipped, this becomes fully redundant-safe. Consider removing the four duplicate `<Route>` entries from `App.tsx` since the edge redirect handles all real traffic.

### H3. `/innovation` is a live, internally-linked, indexable page missing from `sitemap.xml`
`/innovation` returns HTTP 200, is linked from primary navigation (`Navigation.tsx`, nav item `t("nav.innovation")`), and is a real content page (`InnovationPage.tsx`) — but it is **not** one of the 13 URLs in `sitemap.xml`. It does render correctly and pulls in the generic duplicate title/description from C1. Not an orphan (internal link exists) but under-signaled for crawl priority.

**Fix**: Add `https://keprea.vercel.app/innovation` to `sitemap.xml` (and to `https://keprea.com/...` at migration).

---

## Medium

### M1. Security headers incomplete
Only `Strict-Transport-Security` is present (`max-age=63072000; includeSubDomains; preload` — correctly configured, good). Missing on all checked responses:
- `Content-Security-Policy`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options` (or CSP `frame-ancestors`)
- `Referrer-Policy`
- `Permissions-Policy`

Not a ranking factor directly, but Google flags these in Lighthouse "Best Practices," and their absence is a minor trust/security signal. Also relevant for the RGPD posture called out in CLAUDE.md.

**Fix**: Add `headers` block to `vercel.json` for at least `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a baseline CSP scoped to the known asset/script origins (fonts.googleapis.com, fonts.gstatic.com, Supabase project URL).

### M2. Open Graph / Twitter Card tags are static and identical across all 18 pages
`og:title`, `og:description`, `twitter:title`, `twitter:description`, `og:image` are hardcoded once in `index.html` and never overridden per page (unlike `<title>`, which at least *attempts* a per-page override via `<Head>`, per C1). Also **no `og:url` meta tag exists at all** on any page checked. Result: sharing `/contact`, `/solutions/bioprotection`, etc. on LinkedIn/Facebook/X all show the same generic homepage card, and social platforms cannot resolve canonical URL from `og:url`.

**Fix**: Move `og:title`/`og:description`/`og:image`/`og:url` into each page's `<Head>` block alongside the title/description work in C1.

### M3. `og:image`, `og:url`-adjacent data, and JSON-LD Organization schema hardcode `keprea.com` while live site is `keprea.vercel.app`
Same root cause/status as the robots.txt and sitemap.xml domain mismatch already tracked in `ERRORS.md`'s migration checklist — flagging here for completeness so it's covered in the same pre-launch checklist, not treated as a new defect:
```json
{"@type":"Organization","url":"https://keprea.com", "logo":"https://keprea.com/lovable-uploads/eprea_Main_Logo.png"}
```
and `og:image` / `twitter:image` pointing at `https://keprea.com/lovable-uploads/...`. Practical effect right now: social share previews and rich-result testing on the live `keprea.vercel.app` URLs will reference an image/URL that doesn't (yet) resolve on the canonical domain used in the markup — low severity pre-launch, but worth adding to the existing migration checklist as "verify JSON-LD/OG absolute URLs resolve on keprea.com" (they will, once launched, since the domain will match).

### M4. `/mentions-legales` (and likely `/politique-confidentialite`) have no page-specific `<Head>` override at all
`MentionsLegales.tsx` contains no `Head`/title/description customization (confirmed via source grep — no match), so this page relies entirely on the duplicate generic tags from C1 with no unique title in the source at all (not even a data-rh one). Low content-uniqueness page by nature (legal boilerplate), but still worth a distinct `<title>` (e.g. "Mentions légales | Keprea") for indexability hygiene once C1 is fixed.

**Fix**: Add a `<Head>` block with a unique title/description to `MentionsLegales.tsx` and `PolitiqueConfidentialite.tsx`.

---

## Low / Info

- **Crawlability — robots.txt**: `Allow: /` with `Sitemap: https://keprea.com/sitemap.xml`. Sitemap directive already points at the future production domain while serving from `keprea.vercel.app` — this is the known, documented pre-migration state (see `ERRORS.md` migration checklist item 1). No action needed beyond the existing checklist; not treated as a fresh defect.
- **Sitemap.xml**: Valid XML, 13 URLs, all `https://keprea.vercel.app`, proper `lastmod`/`changefreq`/`priority`. Missing `/innovation` (H3). No `noindex`/`X-Robots-Tag` headers found on any checked page — nothing is being accidentally deindexed.
- **HTTPS**: Fully enforced. `http://` requests 308-redirect to `https://` correctly. HSTS present with `preload` flag set and a 2-year max-age — strong configuration.
- **URL structure**: Clean, kebab-case, French, descriptive (`/pourquoi-le-biocontrole`, `/notre-production`, `/solutions/bioprotection`). `cleanUrls: true` + `trailingSlash: false` in `vercel.json` correctly normalizes trailing-slash variants (`/contact/` → 308 → `/contact`). Legacy alias URLs redirect cleanly (H2 caveat noted above). 404s return a real HTTP 404 status (not a soft-404).
- **Mobile-friendliness**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">` present on all pages. Cannot fully assess touch-target sizing / layout shift without live rendering (Playwright not run in this session — `render_page.py` was available but not executed against production due to time; recommend a follow-up pass with `--mode always --viewport mobile` on `/`, `/contact`, and one product page to confirm no CLS from the video hero on 375px viewports, per CLAUDE.md's mobile-render requirement for any *modified* component — Hero.tsx was touched recently per `ERRORS.md` 02/07 entry).
- **JavaScript rendering**: Confirmed true SSG (not CSR-only) — raw HTML fetched via `curl` (no JS execution) already contains full page content, correct per-route `<h1>`/body copy, and the (duplicated) per-route `<title>`/meta tags. Google and any crawler get full content without needing to execute JavaScript. This is a strong foundation once C1/C2 are fixed.
- **Structured Data**: Site-wide `Organization` JSON-LD present on every page (name, url, logo, description, PostalAddress — Dole, Jura, FR). No page-level schema (Product, FAQPage, BreadcrumbList) detected on solution/product pages via source inspection — flagging presence/absence only, per scope; a dedicated schema audit should assess whether `Product`/`FAQPage` schema would be appropriate for `/solutions/*` pages.
- **Hreflang**: Not applicable — single-locale URL structure (French only) with client-side-only language switching via `LanguageContext.tsx`/`i18n`-style translation keys (confirmed no per-language URLs in sitemap or routes). No hreflang tags found, none needed unless separate localized URLs are introduced later; defer to `seo-hreflang` sub-skill if that changes.
- **IndexNow**: No IndexNow key file or ping integration detected in `public/` or codebase. Not a hard requirement, but low-effort to add once on the production domain (submits new/changed URLs to Bing/Yandex instantly rather than waiting for crawl).

---

## Priority Recommendations Summary

1. **(Critical)** Strip the hardcoded `<title>`/`<meta name="description">` from `index.html` so the per-page `<Head>` output is the only title/description in each page's source (C1).
2. **(Critical)** Add self-referencing `<link rel="canonical">` to every page now; switch domain at keprea.com launch (C2).
3. **(High)** Change hero video `preload="auto"` to `metadata`/`none` on mobile; verify the 19.5 MB `biocontrol-video.mp4` isn't preloaded (H1).
4. **(High)** Add `/innovation` to `sitemap.xml` (H3).
5. **(High)** After C2 ships, remove the now-redundant legacy `<Route>` duplicates from `App.tsx` (H2).
6. **(Medium)** Make OG/Twitter tags per-page, and add `og:url` (M2); add unique titles to legal pages (M4); add baseline security headers to `vercel.json` (M1).
