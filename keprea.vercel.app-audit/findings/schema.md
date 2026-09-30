# Schema.org Audit — keprea.vercel.app

Date: 2026-07-02
Pages checked: `/`, `/solutions`, `/solutions/bioprotection`, `/solutions/biopesticides`, `/solutions/boosters`, `/solutions/biofertilisant`, `/qui-sommes-nous`, `/contact`
Site stack: React + `vite-react-ssg` (fully pre-rendered static HTML, confirmed via `curl` — no client-side-only injection to worry about).

## 1. Detection Results

Source of the schema: static `<script type="application/ld+json">` block hard-coded in `index.html` (project root). Because the site is SSG, this **exact same block** is baked into every generated page — verified live via `curl` on all 7 sampled URLs (each returns exactly one `application/ld+json` tag, identical content).

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Keprea",
  "url": "https://keprea.com",
  "logo": "https://keprea.com/lovable-uploads/eprea_Main_Logo.png",
  "description": "Keprea développe des biosolutions à base d'insectes pour l'agriculture durable.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dole",
    "addressRegion": "Jura",
    "postalCode": "39100",
    "addressCountry": "FR"
  }
}
```

No Microdata or RDFa found anywhere. No other JSON-LD blocks (WebSite, Product, BreadcrumbList, LocalBusiness, FAQPage) exist on any page. `src/components/ProductsSchema.tsx` is a UI carousel component — the name is a false positive, it contains no structured data.

No `<link rel="canonical">` tag was found on any sampled page (separate from schema, but relevant since it affects `url` consistency below — flagging for the on-page SEO reviewer as well).

## 2. Validation Results

| Check | Result |
|---|---|
| `@context` = `https://schema.org` | Pass |
| `@type` valid, not deprecated | Pass (`Organization`, `PostalAddress`) |
| Required properties present (`name`, `url`) | Pass |
| Property value types correct | Pass |
| No placeholder text | Pass |
| URLs absolute | Pass (absolute), **but wrong domain** — see below |
| Dates ISO 8601 | N/A (no date properties used) |

### Issues found

1. **Critical — domain mismatch.** `url` and `logo` point to `https://keprea.com`, while the audited/live site is served at `https://keprea.vercel.app/`. If `keprea.com` is not yet live/canonical, this Organization markup asserts an identity Google/AI crawlers can't verify against the page's actual host, weakening entity association. If `keprea.com` **is** the intended canonical production domain (with `.vercel.app` as a preview alias), this is correct in principle, but the site should then also set `<link rel="canonical" href="https://keprea.com/...">` on every page — which is currently absent. Action: confirm which domain is canonical, then align `url`, `og:image`/`twitter:image` (already point to keprea.com), and canonical tags consistently.
2. **Info — single generic block on every URL.** Same Organization object is duplicated identically across all pages instead of being scoped once (e.g., only on `/` and referenced elsewhere via `WebSite`/`BreadcrumbList` + `@id`). Not invalid, just a missed opportunity — no per-page entity (Product, BreadcrumbList) exists at all.
3. **Info — no `sameAs` array.** No LinkedIn/social profiles are linked from Organization, which weakens entity disambiguation for Google Knowledge Graph and for AI answer engines doing entity resolution.
4. **Info — Organization vs LocalBusiness.** Keprea is a B2B manufacturer with a physical production site in Dole, but sells wholesale to distributors/cooperatives rather than serving walk-in customers. Plain `Organization` is defensible; if there's a genuine physical location relevant to visitors (e.g., production site tours, HQ visits), consider adding `LocalBusiness` (or a `hasPOS`/`location` sub-property) rather than switching `@type` entirely — do not force `LocalBusiness` on a purely B2B/no-storefront entity, as Google may treat it as spammy if no customer-facing address activity exists.
5. **No FAQPage present** on any sampled page — nothing to flag/deprecate there. If FAQ content is added later for AI/GEO purposes, use `FAQPage` freely (no SERP benefit since May 2026, but fine for LLM citation) — do not use it as a workaround for rich results.
6. **No HowTo, SpecialAnnouncement, CourseInfo, EstimatedSalary, or LearningVideo schema found** — nothing to remediate on the deprecated-types front.

## 3. Missing Opportunities

- **WebSite** (homepage only) — establishes the site entity and enables a `SearchAction` if a future site search is added.
- **BreadcrumbList** (all inner pages) — `/`, `/solutions`, `/solutions/bioprotection` etc. currently have no breadcrumb markup despite a clear URL hierarchy; low effort, supports both SERP breadcrumb display and AI page-context understanding.
- **Product** (4 solution pages: bioprotection, biopesticides, boosters, biofertilisant) — Caution: these are agricultural biocontrol/biostimulant inputs sold B2B via commercial contact, not retail e-commerce SKUs. Do **not** add `offers`/`Offer` with fabricated prices, fake `AggregateRating`, or fake `Review` — Google explicitly disallows fabricated review/rating data and this would trigger a manual action risk. Recommended: use `Product` with only factual, verifiable properties (`name`, `description`, `category`, `brand`, `image`, `url`, `additionalProperty` for NPK/composition data already published on-page, e.g. Fertea432's "4% P, 3% N, 2% K, 85% matière organique"). Omit `offers` entirely, or if included, use `availability: https://schema.org/InStoreOnly` type is not appropriate — better to omit `offers`/`aggregateRating`/`review` altogether and instead add a `Service`-oriented CTA (e.g. `potentialAction: ContactAction`) or simply skip pricing/offer schema and rely on Product's descriptive fields. Alternatively, model each solution as a `Service` (bioprotection/biocontrol service) offered by the `Organization`/`Brand`, which sidesteps the retail-price expectation baked into `Product` rich results entirely — this is the safer recommendation.
- **Organization enrichment**: add `sameAs`, `contactPoint`, `foundingLocation`, and correct/confirm canonical `url`.
- **BreadcrumbList + WebPage** wrapper per page would also help AI assistants understand site structure when scraping for GEO purposes.

## 4. Generated JSON-LD for Implementation

### 4.1 Corrected & enriched Organization (replace existing block in `index.html`)

Replace the domain with whichever is confirmed canonical (example below assumes `keprea.com` is canonical; swap to `https://keprea.vercel.app` if that is definitive for now):

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://keprea.com/#organization",
  "name": "Keprea",
  "url": "https://keprea.com",
  "logo": "https://keprea.com/lovable-uploads/eprea_Main_Logo.png",
  "description": "Keprea développe des biosolutions à base d'insectes pour l'agriculture durable : bioprotection, biopesticides, boosters de croissance et biofertilisants.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dole",
    "addressRegion": "Jura",
    "postalCode": "39100",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.linkedin.com/company/keprea"
  ]
}
```

(Add real social/profile URLs to `sameAs`; do not invent placeholders — omit the array entirely until at least one verified profile exists.)

### 4.2 WebSite (homepage `/` only, add alongside Organization)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://keprea.com/#website",
  "url": "https://keprea.com/",
  "name": "Keprea",
  "publisher": { "@id": "https://keprea.com/#organization" },
  "inLanguage": "fr-FR"
}
```

### 4.3 BreadcrumbList (example for `/solutions/biofertilisant`; adapt `item` per page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": "https://keprea.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Solutions",
      "item": "https://keprea.com/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Biofertilisant",
      "item": "https://keprea.com/solutions/biofertilisant"
    }
  ]
}
```

Repeat the same 3-level pattern for `/solutions/bioprotection`, `/solutions/biopesticides`, `/solutions/boosters`, each with its own leaf `name`/`item`.

### 4.4 Product — factual-only, no offers/ratings (example: Fertea432 on `/solutions/biofertilisant`)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Fertea432",
  "description": "Biofertilisant à base d'insectes pour fertilisation organique NPK, homologué agriculture biologique.",
  "category": "Biofertilisant agricole",
  "brand": {
    "@type": "Brand",
    "name": "Keprea"
  },
  "url": "https://keprea.com/solutions/biofertilisant",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Phosphore (P)", "value": "4%" },
    { "@type": "PropertyValue", "name": "Azote (N)", "value": "3%" },
    { "@type": "PropertyValue", "name": "Potassium (K)", "value": "2%" },
    { "@type": "PropertyValue", "name": "Matière organique", "value": "85%" }
  ]
}
```

Do not add `offers`, `aggregateRating`, or `review` unless real, verifiable price/review data exists — fabricating these risks a Google manual action for the whole domain.

### 4.5 Alternative: Service schema (recommended over Product for the 4 solution pages)

Because these are B2B agricultural inputs sold through commercial contact rather than retail checkout, `Service` avoids raising retail-price/rating expectations that `Product` rich results imply:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bioprotection agricole par auxiliaires entomophages",
  "provider": { "@id": "https://keprea.com/#organization" },
  "areaServed": "FR",
  "description": "Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes.",
  "url": "https://keprea.com/solutions/bioprotection"
}
```

## Recommendation Priority

1. **Critical**: Resolve the `keprea.com` vs `keprea.vercel.app` domain mismatch in `url`/`logo`/og-image and add matching `<link rel="canonical">` tags before adding more schema, so all new markup is anchored to the right host.
2. **High**: Add `BreadcrumbList` to all inner pages — cheap, safe, immediate value for both SERP and AI parsing.
3. **Medium**: Add `WebSite` on the homepage; enrich `Organization` with `sameAs`.
4. **Medium**: Add `Service` (preferred) or factual-only `Product` (no offers/ratings) schema to the 4 solution pages.
5. **No action needed**: No deprecated types (HowTo, SpecialAnnouncement, CourseInfo, EstimatedSalary, LearningVideo) present. No FAQPage present — fine to add later for AI/GEO purposes only, not for SERP rich results.
