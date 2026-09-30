# SXO Analysis — keprea.vercel.app

Date: 2026-07-02
Method: `render_page.py --mode always` (Playwright-rendered DOM) + `parse_html.py` for target pages; Google SERP inspection via WebSearch for 4 target keywords.

## Limitations
- WebSearch does not expose raw PAA boxes, ad copy, featured-snippet HTML, or AI Overview citations — SERP page-type classification below is inferred from ranking domains/titles/snippets, not verified against live SERP screenshots. Treat confidence % as directional.
- No rank-tracking or click data available — findings are structural/intent-based, not performance-validated.
- Home page required `--mode always` (forced Playwright render, 23s) because pre-rendered React Helmet meta loads before hydration; solution pages rendered normally.

---

## 1. Primary Finding: Page-Type Mismatch (lead finding)

Across all 4 target keywords, Google's SERP consensus is **informational/definitional** (Blog Post / Educational Hybrid dominant), reflecting top-of-funnel "what is X" search intent. Keprea's pages built for these terms are **commercial solution pages** (Hybrid-leaning-Product, thin body copy, FAQ without schema, feedback CTA instead of case studies). This is a systemic **page-type mismatch**, not a one-off issue.

| Keyword | SERP dominant type / confidence | Keprea page | Keprea page type | Mismatch severity |
|---|---|---|---|---|
| biocontrôle agricole | Blog Post / Educational Hybrid (~70%) — WikiAgri, Bayer & BASF educational hubs, Académie d'Agriculture, trade press | `/pourquoi-le-biocontrole` | Thin Hybrid (335 words, 4 H2, Organization schema only) | **HIGH** — right page type intent, insufficient depth/authority vs. Bayer/BASF-style hubs (1500+ words, multiple explainer sections, sourced stats) |
| biopesticide naturel | Blog Post / informational (~80%) — Wikipedia, EPA, NCBI research, gardening/blog sites, one vendor (Immunrise) | `/solutions/bioprotection` + `/solutions/biopesticides` | Hybrid solution pages (465–499 words, commercial CTA-first) | **HIGH** — two commercial pages compete for one informational query with no definitional/mechanism content; keyword also split across 2 URLs (cannibalization risk) |
| biostimulant agricole | Blog/Hybrid informational (~70%), some catalog pages (Fertitrade) | `/solutions/boosters` | Hybrid solution page (536 words) | **CRITICAL** — page doesn't even use the keyword: title is "Boosters de Croissance Keprea \| Boostea13 et Soilea110", H1 "Boosters" — no "biostimulant" mention in title/H1, so it isn't realistically competing for this query at all |
| biofertilisant | Blog Post / definitional, wiki-dominated (~90%) — Wikipedia, StudySmarter, dictionary, niche definition site | `/solutions/biofertilisant` | Hybrid/near-Product page (title "Fertea432 – Biofertilisant Keprea \| Fertilisation Organique NPK", 518 words) | **CRITICAL** — a broad, top-of-funnel definitional term is targeted with a bottom-funnel single-SKU product page; no "qu'est-ce qu'un biofertilisant" explainer |

**Root cause pattern:** all 4 solution pages (`/solutions/bioprotection`, `/biopesticides`, `/boosters`, `/biofertilisant`) are structured identically (Cultures cibles → Mode d'emploi → Questions fréquentes → CTA), optimized for a buyer who already knows what biocontrol/biostimulants are. But the keywords being targeted are almost entirely top-of-funnel/definitional. Keprea has no scalable informational layer (blog/guide hub) to capture and nurture that traffic before routing to the solution pages — `/pourquoi-le-biocontrole` is the only attempt at this and it is too thin (335 words) to compete.

---

## 2. SERP Consensus Summary

| Keyword | Est. SERP intent | Notable domains | Format signals |
|---|---|---|---|
| biocontrôle agricole | Informational, brand-authority hubs | WikiAgri, Bayer, BASF, Académie d'Agriculture, agriculture-nouvelle.fr | Long-form definitional articles, stats (180 approved solutions in France, 10% of EU crop-protection market), brand educational hub pages |
| biopesticide naturel | Informational, some regulatory/scientific | Wikipedia, EPA, NCBI, gardening blogs, 1 vendor | Definitions, mechanism explanations, DIY/garden angle, scientific citations |
| biostimulant agricole | Informational + light commercial catalog | Veragrow, Farmi, Fertitrade, ICL, Adama | Definitions + agronomic benefit claims (5–15% yield, 10–20% input reduction — IBMA France 2024) |
| biofertilisant | Purely definitional/encyclopedic | Wikipedia, StudySmarter, dictionary site, niche "biofertilisants.fr" | Dictionary-style definitions, mechanism of action (nitrogen fixation, rhizosphere colonization) |

No SERP showed dominant e-commerce/shopping results or heavy ad density for any of the 4 terms — confirms these are **top-of-funnel awareness/consideration keywords**, not transactional ones. Ranking here requires topical authority content, not landing-page conversion optimization.

---

## 3. User Stories (derived from SERP signals)

1. **As an agronomically-curious farmer**, I want a clear, sourced definition of "biocontrôle" and how it differs from chemical pesticides, because I'm evaluating whether to change practices under regulatory/market pressure, but I'm blocked by **information gap** — Keprea's only definitional page (`/pourquoi-le-biocontrole`) is 335 words vs. 1000+ word competitor hubs (Bayer, BASF).
   *(Source: SERP dominated by brand educational hubs + institutional sources, awareness stage)*

2. **As a risk-averse cooperative buyer**, I want evidence (trial data, case studies, regulatory approval status) before recommending a new biosolution to member farmers, because my reputation is on the line, but I'm blocked by a **trust gap** — Keprea's solution pages show a generic "share your feedback" prompt (`Biofertilisant.tsx` line 191) instead of real farmer testimonials or trial results.
   *(Source: PLAN-ACTION.md priority "ajouter des témoignages d'agriculteurs réels"; MEMORY.md confirms this gap is known)*

3. **As a technical evaluator comparing biocontrol families**, I want to understand mechanisms (predation, competition, biostimulation) with sourced data, because I need to justify ROI internally, but I'm blocked by **comparison fatigue** — no comparison/explainer content exists to differentiate Keprea's 4 product lines from competitors or from each other at the awareness stage.
   *(Source: SERP result "Solutions de biocontrôle : familles, bénéfices et usages" — WikiAgri ranks by explaining categories, not selling one)*

4. **As a farmer searching "biostimulant agricole,"** I want to find products matching that exact terminology, because that's the regulatory/industry-standard term I was told to research, but I'm blocked — Keprea's `/solutions/boosters` never uses the word "biostimulant" anywhere in title/H1, so it cannot realistically surface for this query (decision/consideration stage, terminology mismatch).
   *(Source: keyword absent from page title/H1 despite being the target keyword)*

5. **As a quick-answer seeker** (mobile, PAA-style query "qu'est-ce qu'un biofertilisant"), I want a snippet-ready definition near the top of the page, because I want to confirm the term before reading further, but I'm blocked by **structure** — none of the 5 pages carry FAQPage or Article schema despite every solution page having a "Questions fréquentes" section, so Keprea is not eligible for FAQ rich results that competitors' PAA-friendly content captures.
   *(Source: definitional/dictionary-dominated SERP for "biofertilisant"; absence of FAQPage schema confirmed in parsed HTML)*

---

## 4. Gap Analysis — SXO Gap Score (separate from SEO Health Score)

Scored against the SERP consensus expectation (informational/Hybrid, high depth, high trust) rather than generic best practice.

| Dimension | Score | Evidence |
|---|---|---|
| Page Type (0-15) | 5/15 | 4 of 5 target pages are commercial Hybrid/Product pages targeting definitional queries; only `/pourquoi-le-biocontrole` attempts the right type, but too thin |
| Content Depth (0-15) | 4/15 | Word counts: home 827, biocontrole page 335, bioprotection 465, biopesticides 499, boosters 536, biofertilisant 518 — all well below the 1000+ words seen on ranking Bayer/BASF/Wikipedia pages |
| UX Signals (0-15) | 8/15 | Clear CTAs ("Demander un essai", "Rejoindre les premiers essais"), consistent nav; but no jump links/TOC for long pages, no visible FAQ accordion behavior confirmed beyond heading |
| Schema (0-15) | 3/15 | Only `Organization` schema present sitewide; no `FAQPage` despite FAQ sections on every solution page, no `Article`/`BlogPosting` for the educational page, no `Product` schema for named products (Fertea432, Boostea13, Soilea110) |
| Media (0-15) | 5/15 | 3-7 images per page, descriptive alt text present (good), but no video, no diagrams explaining mechanism of action (predation/biostimulation), no data visualizations matching the stats-heavy competitor content |
| Authority (0-15) | 3/15 | No bylines, no dates, no cited third-party data/sources, no real customer testimonials or trial case studies — only a generic "share your experience" prompt |
| Freshness (0-10) | 3/10 | `publication_date` detected as 2026-01-01 (likely deploy date, not true content date) on every page; no dateModified/visible "last updated" signal anywhere |
| **Total** | **31/100** | |

**SXO Gap Score: 31/100** — this is distinct from and should not be confused with the site's SEO Health Score; it measures fit between Google's rewarded content model and what Keprea currently serves.

---

## 5. Persona Scores

| Persona | Journey Stage | Relevance | Clarity | Trust | Action | Total | Rating |
|---|---|---|---|---|---|---|---|
| Curious Farmer (definitional, "qu'est-ce que le biocontrôle") | Awareness | 12/25 | 14/25 | 8/25 | 15/25 | 49/100 | Needs Work |
| Risk-Averse Cooperative Buyer | Consideration | 14/25 | 14/25 | 6/25 | 12/25 | 46/100 | Needs Work |
| Technical Evaluator (mechanism/comparison) | Consideration | 8/25 | 10/25 | 8/25 | 12/25 | 38/100 | Critical Mismatch |
| Terminology-Literal Searcher ("biostimulant agricole") | Awareness | 3/25 | 5/25 | 6/25 | 10/25 | 24/100 | Critical Mismatch |
| Quick-Answer Seeker (PAA/snippet-style) | Awareness | 10/25 | 12/25 | 6/25 | 10/25 | 38/100 | Critical Mismatch |

### Weakest persona: Terminology-Literal Searcher (24/100)
**Top issue:** `/solutions/boosters` never contains the word "biostimulant" in title, H1, or visible copy, so it structurally cannot rank for the target keyword.
**Recommended fix:** Add "biostimulant" to the page `<title>` (e.g., "Biostimulants Agricoles Keprea | Boostea13 & Soilea110 — Activateurs de sol") and introduce an H2 "Qu'est-ce qu'un biostimulant agricole ?" before the product-specific sections.

### Systemic issues
- **Trust:** every persona scores ≤8/25 on Trust — no real testimonials, no third-party citations, no visible trial/regulatory data anywhere in the 5 audited pages.
- **Schema:** absence of FAQPage/Article/Product schema depresses both Clarity (no rich-result eligibility) and Trust (no structured credibility signals) across all personas.

### Priority actions
1. Add a "Qu'est-ce qu'un biostimulant agricole ?" explainer section + retitle `/solutions/boosters` to include the keyword (fixes the Critical Mismatch persona first).
2. Expand `/pourquoi-le-biocontrole` from 335 to 1000+ words with sourced stats (market size, families of biocontrol, mechanisms) and add `Article`/`FAQPage` schema — this single page can become the top-of-funnel hub currently missing sitewide.
3. Replace the generic "share your feedback" prompt on solution pages with 1-2 real farmer testimonials or trial results (flagged as priority in MEMORY.md/PLAN-ACTION.md already — this SXO audit independently confirms it as the top Trust gap).
4. Fix duplicate meta descriptions: all 5 audited pages currently share the identical meta description, which weakens differentiation in SERP snippets and dilutes keyword targeting signals.

---

## Cross-Skill Recommendations
- E-E-A-T / authority gap (no testimonials, no citations, no bylines) → recommend `/seo content` for a deep content/E-E-A-T audit.
- Missing FAQPage, Article, and Product schema → recommend `/seo schema` to generate structured data for the 5 audited pages.
- Thin content on `/pourquoi-le-biocontrole` and duplicated content patterns across solution pages → recommend `/seo page` for a page-level audit.

Offer: Generate a PDF report? Use `/seo google report`.
