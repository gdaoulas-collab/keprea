# Performance / Core Web Vitals Audit — keprea.vercel.app

**Date:** 2026-07-02
**Method:** PSI/CrUX API unavailable (unauthenticated public quota exhausted: "PSI rate limit exceeded (240 QPM / 25,000 QPD)" on both homepage and product page, mobile and desktop). Findings below are derived from **lab-based estimation**: raw HTML retrieval, HTTP header/timing inspection (`curl -w`), and resource payload analysis of the deployed static (SSG) build. No live Lighthouse trace or CrUX field percentile data was obtainable in this session — recommend re-running `scripts/pagespeed_check.py` with a configured `GOOGLE_API_KEY` for authoritative field data (75th percentile) and Lighthouse lab scores.

## Pages audited
- Homepage: `https://keprea.vercel.app/`
- Product page: `https://keprea.vercel.app/solutions/bioprotection`

## Server / delivery (both pages)
- Hosted on Vercel, served from edge cache (`X-Vercel-Cache: HIT`, `Age` header present, `br` compression).
- TTFB measured at ~48–52ms, total response ~52–110ms for the HTML document itself. **Excellent** — well under the 200ms TTFB threshold. Static SSG pre-rendering is working as intended (`data-server-rendered="true"` present in the DOM).
- HTML documents are small (homepage 51.8KB, bioprotection 32.3KB raw), further compressed with Brotli.

## Estimated Core Web Vitals status

| Metric | Homepage (est.) | Product page (est.) | Status |
|---|---|---|---|
| LCP | Likely 2.5–4s+ (poor risk) on mobile, borderline on desktop | Likely good–needs improvement (~2–3s) | **At risk on homepage** |
| INP | Likely good (<200ms) — page is mostly static content, no obviously heavy JS interaction handlers detected in markup | Likely good | Pass (unconfirmed, no field data) |
| CLS | Likely good (~0–0.05) — hero video/image containers are pre-sized via fixed-aspect wrapper classes (`aspect-[4/3]`, `min-h-[100dvh]`, `absolute inset-0`) | Likely good — product images render inside fixed-size flex/grid containers | Pass (unconfirmed, no field data) |

These are estimates based on resource weight and markup structure, not measured field/lab traces — treat as directional only until PSI/CrUX access is restored.

## Key bottleneck: hero video (homepage LCP risk)

```html
<video class="w-full h-full object-cover absolute inset-0" autoplay muted playsinline loop
       preload="auto" src="/portfolio-video-4.mp4" poster="/lovable-uploads/hero-poster-frame.jpg"></video>
```

- **Video file `/portfolio-video-4.mp4` is 13.03 MB** (`Content-Length: 13033481`), served with no `<source>`/format alternatives (single MP4, no WebM/AV1 fallback), and marked `preload="auto"`, which instructs the browser to eagerly start downloading the *entire* video as soon as the element is parsed — competing for bandwidth with the render-blocking CSS, the Google Fonts stylesheet, and the 722KB JS bundle, all requested in the same initial critical path.
- The poster image (157KB JPEG) is reasonable in size, and per the project's fix history it now correctly matches the video's first frame (no more flash-of-wrong-image). Good.
- Because the video sits behind the poster and is not typically an LCP candidate itself, the LCP element is most likely the poster `<img>`/background-image paint or the H1 text ("La nature au service de vos cultures") rendered on top of it. The 13MB video download does **not block LCP directly** (poster paints immediately), but it **does compete for network/CPU during the loading phase**, which can delay Time to Interactive and increase INP risk during the first few seconds, and burns mobile data/battery unnecessarily.
- `preload="auto"` on a 13MB looping background video is excessive: recommend `preload="metadata"` (or `preload="none"` with a JS-triggered play after `load` / `IntersectionObserver`) plus re-encoding to a much smaller compressed MP4 (target under 2–3MB for a background loop) or serving an even lighter WebM/AV1 variant with `<source>` fallback.

## Other resource-weight findings

- **`/lovable-uploads/6f3f0723-78e2-48e6-b36a-2520e97f1f40.png`** (homepage "Notre site de production" section image): **2.49 MB PNG**, uncompressed photographic content served as PNG instead of a modern format. This is a significant, easily-fixable payload reduction opportunity — convert to WebP/AVIF and compress; expect the file to shrink to under 200–300KB with no visible quality loss, since it renders at a fixed `aspect-[4/3]` container size, not full resolution.
- **Main JS bundle** `/assets/app-BshcVkcJ.js`: 722KB uncompressed, ~215KB Brotli-compressed. Reasonable for a single bundle but worth checking for code-splitting opportunities (e.g., are all product-page-specific components bundled into this single chunk loaded on every page, including the homepage?). No route-based chunk names were observed in the HTML (`app-BshcVkcJ.js` appears identical on both pages inspected), suggesting a single monolithic bundle rather than per-route code splitting.
- **CSS bundle** `/assets/app-mbw1ypt-.css`: 82KB uncompressed, ~14.7KB Brotli — small and reasonable, but it is a **render-blocking `<link rel="stylesheet">`** with no `media` attribute or critical-CSS inlining. On a fast edge-cached connection this is a minor concern, but on slow mobile networks it delays First Contentful Paint / LCP alongside the Google Fonts stylesheet (see below).
- **Google Fonts**: `<link rel="preconnect">` is correctly set for both `fonts.googleapis.com` and `fonts.gstatic.com` (good practice), but the actual `<link href="https://fonts.googleapis.com/css2?family=Poppins...&display=swap" rel="stylesheet">` is a second render-blocking request in the `<head>`, before the app's own CSS. `display=swap` is already used, which prevents invisible text (FOIT) but can still cause a small layout/text shift when the webfont swaps in (minor CLS contributor, not a major one given the sans-serif fallback is likely metrically similar).
- **Product page images** (`/assets/aphid-*.jpg`, `/assets/pyrale-*.jpg`, `/assets/cochenilles-*.jpg`, `/assets/aleurode-*.jpg`): reasonably named and presumably optimized (bundled through Vite asset pipeline); did not independently verify file sizes but these are lower priority than the two issues above given they're below-the-fold pest-identification thumbnails, not the primary hero/LCP element.
- No inline `<script>` blocking render was found beyond the JSON-LD schema block (non-blocking, `type="application/ld+json"`) and the module script (`type="module"`, deferred by spec).

## Prioritized recommendations (highest impact first)

1. **Re-encode/compress the hero video** (`/portfolio-video-4.mp4`, 13MB → target ≤2-3MB) and switch `preload="auto"` to `preload="metadata"` or lazy-trigger playback after initial paint. Highest impact on mobile data usage, network contention during load, and perceived performance during the critical hero moment. (High impact / Low-Medium effort)
2. **Convert the production-site PNG** (`6f3f0723-...png`, 2.49MB) to WebP/AVIF and resize/compress to match its rendered `aspect-[4/3]` display size. Straightforward, high payload-reduction-to-effort ratio. (High impact / Low effort)
3. **Verify JS code-splitting**: confirm whether per-route chunks exist in the Vite build config; if the same 722KB bundle loads on every page, consider route-based lazy loading (`React.lazy`/dynamic `import()`) for page-specific sections not needed on first paint. (Medium impact / Medium effort)
4. **Re-run authoritative CWV measurement** once PSI/CrUX quota resets or an API key is configured (`python3 claude-seo/scripts/pagespeed_check.py <url> --json` with `GOOGLE_API_KEY` set), to replace these lab estimates with real 75th-percentile field data and confirm/refute the LCP-at-risk hypothesis for the homepage. (No direct site impact, but needed to validate priorities above)
5. **Consider inlining critical CSS** for above-the-fold hero content or adding `font-display: swap` verification (already present) to shave a small amount off render-blocking chain; lower priority given CSS payload is already small (14.7KB Brotli).

## Data not obtained (flag for follow-up)
- No CrUX field data (75th percentile LCP/INP/CLS) — PSI API rate-limited without a configured key.
- No Lighthouse lab trace/score — same cause.
- Recommend the orchestrator schedule a follow-up run with `GOOGLE_API_KEY` configured, or via `npx lighthouse` locally, to convert these estimates into confirmed pass/fail verdicts against the 2026 CWV thresholds (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1).
