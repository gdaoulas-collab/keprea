# GEO / AI Search Readiness Audit — keprea.vercel.app

Audited: 2026-07-02 · Site: pre-launch on Vercel subdomain (will move to keprea.com)
Pages sampled: `/`, `/biocontrole-vivant`, `/extraits-naturels`, `/boosters`, `/biofertilisant`, `/innovation`

## GEO Readiness Score: 62 / 100

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| Citability | 25% | 65/100 | Strong FAQ Q&A blocks with direct, self-contained answers; missing FAQPage schema |
| Structural Readability | 20% | 70/100 | Single H1/page, logical H2/H3 hierarchy, but headings are mostly statements, not questions |
| Multi-Modal Content | 15% | 40/100 | Text-only content; no tables, infographics with alt-text data, or video transcripts detected |
| Authority & Brand Signals | 20% | 45/100 | No author/byline, no external citations/sources for stats, no external brand presence yet (expected pre-launch) |
| Technical Accessibility | 20% | 85/100 | Content is server-rendered (not a JS-dependent SPA shell) — fully visible to AI crawlers without JS execution |

## 1. AI Crawler Access (robots.txt)

`https://keprea.vercel.app/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://keprea.com/sitemap.xml
```

All crawlers allowed (wildcard `Allow: /`, no disallow rules). Verified live with spoofed user-agents — all returned HTTP 200:

| Crawler | Status |
|---|---|
| GPTBot | Allowed (200) |
| OAI-SearchBot | Allowed (200) |
| ClaudeBot | Allowed (200) |
| PerplexityBot | Allowed (200) |
| CCBot / anthropic-ai / cohere-ai | Allowed (not blocked — optional per GEO guidance, no action required pre-launch) |

**Issue found:** the `Sitemap:` directive points to `https://keprea.com/sitemap.xml`, but `keprea.com/sitemap.xml` currently returns **404** (keprea.com root resolves 200, but no sitemap live yet). On the vercel.app subdomain this line is effectively dead for crawlers hitting the subdomain. Low priority now since this is pre-launch, but **must be fixed before/at the keprea.com cutover** — either serve a live sitemap at that path or point robots.txt at the domain currently serving content.

## 2. llms.txt

**Missing.** `https://keprea.vercel.app/llms.txt` returns 404. No RSL 1.0 licensing file found either. Not urgent pre-launch, but worth adding at the keprea.com launch — a short llms.txt summarizing Keprea's product lines (biocontrôle vivant, extraits naturels, boosters, biofertilisant), location (Dole, Jura), and links to key pages would give LLM crawlers a fast, authoritative index.

## 3. Technical Accessibility

Homepage and all sampled subpages returned real content on a **raw (non-JS) fetch** — `is_spa: False`, HTML title/meta/H1/body text all present without executing JavaScript. This is a significant GEO strength: AI crawlers that do not render JavaScript (most do not, or do so selectively) can read the full page content directly. No SSR/CSR gap detected.

## 4. Citability Analysis (passage-level)

Strong pattern found on all four product pages (`/biocontrole-vivant`, `/extraits-naturels`, `/boosters`, `/biofertilisant`): each ends with a **"Questions fréquentes"** section containing 3 question-based subheadings with short, self-contained, factual answers, e.g.:

> **En combien de temps les auxiliaires réduisent-ils les populations ravageurs ?**
> Les auxiliaires entomophages commencent à agir en 48 à 72h. La réduction visible des populations ravageurs s'observe généralement entre 7 et 21 jours selon la pression initiale et les conditions climatiques.

This is exactly the format LLMs favor for direct citation (question heading + immediate, specific, numeric answer). Strengths:
- Concrete numbers throughout (48-72h, 7-21 days, 85% matière organique, 200-500 kg/ha, 15-20 cm depth, 2h from Paris/Basel/Geneva/Lyon)
- Definitional statements about biocontrôle, biopesticides, biostimulants, biofertilisants are stated plainly and answer "what is X" implicitly
- Comparison table on `/innovation` ("Keprea face aux autres approches") is a strong AI-citable structured-fact block (Keprea vs. chemical vs. plant-extract alternatives)

Gaps:
- FAQ answers run ~30-45 words each — shorter than the 134-167 word optimum cited in GEO research for full-passage citation. This is fine for direct-answer snippets but means the surrounding paragraphs (which are the longer content) are less structured as clean, standalone citable blocks. Consider ensuring the paragraph *preceding* each FAQ also stands alone as a 100-160 word explainer.
- Homepage H2s are declarative ("Une protection des cultures plus ciblée, plus performante") rather than question-based. Converting 2-3 key H2s to question form (e.g., "Pourquoi utiliser des insectes en agriculture ?") would improve alignment with how users phrase prompts to ChatGPT/Perplexity.
- No visible source attribution for statistics (e.g., "84% des cultures dépendent des insectes", "5 500 espèces auxiliaires en France", "400 millions d'années de co-évolution"). These are strong, specific, quotable claims but citing a source (INRAE, FAO, academic study) would materially increase trust/authority signals and make them safer for an LLM to repeat as fact.

## 5. Structural Readability

- Exactly one `<h1>` per page checked (homepage H1: "La nature au service de vos cultures") — correct hierarchy, no duplicate H1 issue.
- Consistent H2 → H3 → H4 nesting on homepage (8 H2s, 16 H3s, 3 H4s), no skipped levels observed.
- `lang="fr"` correctly set.
- Meta title/description present and reasonably sized on all sampled pages (e.g., `/biocontrole-vivant`: "Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs" — under 60 chars; description ~155 chars, within the 150-160 char target).

## 6. Structured Data (Schema.org)

Only **one JSON-LD block per page**, type `Organization`, duplicated identically across every page sampled (homepage + all 4 product pages). No page-specific schema found:
- No `FAQPage` schema despite genuine, well-formed Q&A content on 4 product pages — this is the single highest-leverage structured-data gap. FAQPage markup directly feeds AI Overview / Perplexity / Bing Copilot answer extraction.
- No `Product` schema for Boostea13, Soilea110, Fertea432 (named products with specific composition/dosage data that would benefit from structured markup).
- No `Article`/`WebPage` schema with `datePublished` (note: `publication_date` auto-detected by htmldate as 2026-01-01, likely a heuristic guess rather than true content date — worth setting explicit `datePublished` once real content dates exist).

## 7. Multi-Modal Content

Text-only analysis found no tables, data visualizations with extractable alt-text, or transcribed video/audio content in the crawlable HTML. If product/site videos exist (the CLAUDE.md conventions mention `poster` attributes on `<video>` tags), ensure any spoken claims are also present as text (captions/transcripts) so AI crawlers — which generally do not process video — can cite them.

## 8. Authority & Brand Signals

Expected to be minimal at this pre-launch stage (subdomain, not yet indexed under the production domain) — **not weighted heavily in this audit** per instructions. For context once live:
- No Wikipedia entity, no visible Reddit/YouTube/LinkedIn presence signals in the crawled content itself.
- No author bylines or "reviewed by" credentials on content (a B2B agri-science brand could benefit from crediting the entomologists/agronomists mentioned on the About section — "Fondée en 2025 par 7 associés experts (agriculteurs, entomologistes, agronomes et entrepreneurs)" — with named profiles/credentials for E-E-A-T).
- Organization JSON-LD present is good foundation but minimal (name, url, logo, description only — no `sameAs` links to future social/Wikipedia/LinkedIn profiles, no `founder`/`address` fields).

## Top 5 Highest-Impact Changes

1. **Add FAQPage schema to the 4 product pages** (biocontrôle-vivant, extraits-naturels, boosters, biofertilisant) — content already exists in the right Q&A format, this is pure markup work. *Effort: Low (S) · Impact: High*
2. **Fix the sitemap reference in robots.txt** before/at keprea.com cutover — currently points to a 404. *Effort: Low (S) · Impact: Medium (crawl completeness)*
3. **Add source attribution to key statistics** (84% des cultures, 5 500 espèces auxiliaires, 400M années co-évolution) — link to INRAE/FAO/academic sources. Increases factual trust for LLM citation. *Effort: Low-Medium (S/M) · Impact: High*
4. **Create an llms.txt** at launch summarizing product lines, location, and key URLs. *Effort: Low (S) · Impact: Medium*
5. **Convert 2-3 homepage H2s to question form** and expand `Organization` schema with `founder`, `address`, and `sameAs` fields as social/press profiles come online post-launch. *Effort: Low (S) · Impact: Medium*

## Platform-Specific Estimate

Given technical crawlability is strong (SSR, all AI bots allowed) but structured-data/authority signals are thin:

| Platform | Estimated Readiness |
|---|---|
| Google AI Overviews | Moderate — benefits from clean HTML/headings; lacks FAQPage schema which AIO frequently sources from |
| ChatGPT (browsing/search) | Moderate — GPTBot/OAI-SearchBot unblocked, direct-answer FAQ format is well-suited to ChatGPT's citation style |
| Perplexity | Moderate-Low — PerplexityBot unblocked, but no external corroborating sources/brand mentions yet to cross-reference (expected pre-launch) |
| Bing Copilot | Moderate — same technical strengths as Google AIO; would benefit from Bing Webmaster Tools submission once on keprea.com |

Note: platform scores are directional estimates based on on-site structural signals only; no live LLM-prompt testing (e.g., DataForSEO `ai_optimization_chat_gpt_scraper`) was available in this session.
