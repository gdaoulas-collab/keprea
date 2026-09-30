# Content Quality / E-E-A-T Audit — keprea.vercel.app

Audited: homepage (/), 4 product pages (/solutions/bioprotection, /biopesticides, /boosters, /biofertilisant), /pourquoi-le-biocontrole, /qui-sommes-nous, /notre-production, /ressources.

Method: pre-rendered HTML fetched directly (site uses `vite-react-ssg`, confirmed serving fully rendered text without JS execution) plus direct review of the React source (`src/pages/*.tsx`, `src/components/*.tsx`, `src/contexts/LanguageContext.tsx`). Word counts below are computed from stripped body text of the rendered HTML and are close estimates (±5%), not exact tokenizer counts.

**Known/already-tracked gap (not re-flagged as new):** zero farmer testimonials or case studies. This is documented as "priorité absolue" in MEMORY.md/ERRORS.md. The homepage `TrustSection` component already handles this gracefully today with a transparent message ("Les premiers témoignages... seront publiés à l'issue des essais terrain 2026") — this is a genuine trust-positive pattern worth preserving, not removing, until real testimonials exist.

---

## Critical

### 1. Internal placeholder note published live on /qui-sommes-nous ("Photo à faire ensemble le 15 OCT")
- **Severity:** Critical
- **Evidence:** `src/components/Team.tsx` line 47-51 renders `{t('team.photoNote')}` as a visible text overlay on the team photo. `LanguageContext.tsx` key `team.photoNote` (line 790-796) is defined in all 5 languages as an internal scheduling note: FR "Photo à faire ensemble le 15 OCT", EN "Photo to take together on OCT 15", etc. Confirmed present in the live rendered HTML at `https://keprea.vercel.app/qui-sommes-nous`.
- **Why it matters:** This is an internal production TODO/note, not customer-facing content, live on the About page in front of prospective farmers/cooperatives/distributors — the exact audience for whom Trustworthiness (30% weight) matters most. It signals the site is unfinished/unpolished and undermines credibility instantly, in all 5 site languages.
- **Recommendation:** Remove `team.photoNote` from the UI immediately (or replace with a real caption once the photo is taken), across all 5 language entries in `LanguageContext.tsx`.

### 2. Named individuals on Team page with unverifiable/unclear affiliation, no bios, no credentials
- **Severity:** Critical (borderline High)
- **Evidence:** `src/components/Team.tsx` lines 16-23 lists 6 named people with only name + one-line role (e.g., "Antoine Hubert — Président directeur général", "Julien Denormandie — Président du conseil de surveillance"). No photos per person (only one group photo with hover dots), no LinkedIn links, no bios, no explanation of relationship to the company (founder vs. employee vs. advisor vs. board member).
- **Why it matters:** Two of the names correspond to publicly known figures in French agtech/agriculture (a well-known insect-biotech entrepreneur and a former Minister of Agriculture). If accurate, this is a major Authoritativeness signal that is currently wasted — it is not surfaced anywhere except a hover tooltip on one photo, with zero corroboration (no press mention, no external link, no bio). If inaccurate/aspirational, publishing real public figures' names and titles without their consent or verification is a serious trust and potential legal liability.
- **Recommendation:** Verify accuracy of every name/role with the individuals involved before this goes further. If accurate: build out individual bios (background, credentials, LinkedIn), and make expertise signals crawlable as real text (not hover-only interaction, which is invisible to text extraction and to most AI crawlers). If any entry is placeholder/aspirational, remove it immediately.

---

## High

### 3. Thin content on /ressources — effectively an empty "coming soon" page
- **Severity:** High
- **Evidence:** Rendered page is ~169 words. `src/pages/Ressources.tsx` shows 3 cards ("Fiches techniques", "Articles & études", "Newsletter") all marked `coming: true` with a "Bientôt disponible" badge — there is no actual fiche, article, or guide published.
- **Why it matters:** A resources/blog hub with zero real content has no topical coverage and nothing for Google or AI assistants to cite. It also signals a stale/unfinished site under the March 2024 Helpful Content integration into core ranking, since helpfulness is judged on what's actually delivered, not promised.
- **Recommendation:** Either de-index this page (`noindex`) until real content exists, or ship at least 1-2 real fiches techniques / articles before linking it in main navigation.

### 4. Qui-sommes-nous and Notre-production pages are thin relative to their page type
- **Severity:** High
- **Evidence:** `/qui-sommes-nous` ≈ 282 words rendered; `/notre-production` ≈ 232 words rendered. QRG guidance treats ~500-600 words as a topical-coverage floor for this type of page (About/location-style page); both are well under half that. Source: `QuiSommesNous.tsx` (36 lines) and `NotreProduction.tsx` (34 lines) are thin wrapper shells delegating to `About.tsx`/`Team.tsx` and `Production.tsx`, which themselves are mostly UI chrome (icons, stat tiles, a process diagram) with only 3-4 short paragraphs of actual prose.
- **Why it matters:** These are exactly the pages where Experience/Expertise/Trustworthiness signals should be richest (founding story, facility details, safety/quality process, team credentials) — currently they're the thinnest pages on the site content-wise.
- **Recommendation:** Expand `about.history.*` narrative (currently a handful of short sentences) with concrete specifics: founding milestones, regulatory certifications held, R&D partnerships, capacity figures beyond "3 000 m²" (e.g., production volumes, species reared, quality control steps). Add a dated "case study" of the production process instead of only icon-labeled steps.

### 5. Product pages consistently under the 800-word service-page floor
- **Severity:** High
- **Evidence:** Rendered word counts: bioprotection ≈523, biopesticides ≈547, boosters ≈589, biofertilisant ≈561. All four are 30-45% under the ~800-word topical-coverage floor for service/product pages, despite each already containing FAQ, "Mode d'emploi", "Cultures cibles" and "Résultats mesurés" sections (this is good structural coverage — see AI-citability note below — but the actual prose per section is short).
- **Why it matters:** This is the same "thin content" issue already tracked as open in ERRORS.md ("Pages produits trop minces (thin content)", Phase 2) — confirmed still open with current measurements. Flagging here with concrete counts to help prioritize.
- **Recommendation:** Deepen each existing section rather than add new ones: expand FAQ from 3 to 6-8 real farmer questions, add a short "compatibility" paragraph (tank-mix partners, resistance management), and add per-product technical specs (concentration, formulation type, packaging sizes, shelf life) as visible text, not just PDF-gated.

### 6. Repetitive, near-identical boilerplate structure and copy across the 4 product pages
- **Severity:** High
- **Evidence:** All four product pages (`BiocontroleVivant.tsx`, `ExtraitsNaturels.tsx`, `Boosters.tsx`, `Biofertilisant.tsx`) share verbatim section titles and near-identical sentence templates: "Résultats mesurés sur le terrain" stat blocks, "Retours terrain" CTA block ("Vous utilisez nos [produit] ? Votre retour d'expérience aide d'autres agriculteurs à décider."), and an identical "Complétez votre programme avec nos autres solutions" cross-sell grid linking to the other 3 pages with copy repeated across all of them.
- **Why it matters:** This is a named marker of low-quality/formulaic content under the Sept 2025 QRG ("repetitive structure across pages"). While consistent UX patterns are fine, the sentence-level copy should be differentiated enough per page that each one reads as genuinely distinct, not templated.
- **Recommendation:** Keep the section skeleton (it's genuinely useful for AI-citability, see below) but rewrite the connective/CTA sentences per product so they're not copy-pasted with only the noun swapped.

### 7. Unattributed / loosely-sourced statistics mixed with cited third-party sources
- **Severity:** High
- **Evidence:** Bioprotection page cites "Source : données essais IBMA France / Koppert Biological Systems" for its 70-90% reduction stat; Biopesticides page cites "Source : données internes / ITAB" for its 80-95% efficacy stat. Mixing an unverifiable "données internes" (internal data) with a real trade body/institute name in the same source line blurs where the claim actually comes from.
- **Why it matters:** Trustworthiness is the highest-weighted E-E-A-T factor (30%). Quantitative claims like "80-95% efficacité" are exactly the kind of fact an AI assistant might quote — if a rater or a fact-checking crawler can't verify "données internes," the whole citation (including the legitimate ITAB reference) loses credibility.
- **Recommendation:** Separate internal claims from third-party citations. For internal data, state methodology briefly (number of trial sites, crop, year) rather than the vague "données internes"; for third-party data, link to the actual source document/report if publicly available.

---

## Medium

### 8. No visible author, byline, or "last updated" date on any page
- **Severity:** Medium
- **Evidence:** None of the reviewed pages (`PourquoiBiocontrole.tsx`, product pages, About/Production) include an author name, a reviewer credential, or a content freshness date, despite making regulatory claims (e.g., "Plan Ecophyto 2+", "norme UE 2018/848", "cahiers des charges agriculture biologique").
- **Why it matters:** Content freshness and clear authorship are explicit QRG signals, especially important for YMYL-adjacent regulatory/agronomic claims that can change (subsidy schemes, approved substances lists, organic certification rules).
- **Recommendation:** Add a small "Rédigé par l'équipe R&D Keprea — mis à jour [date]" byline block on pages making regulatory or technical claims, and update it whenever content changes.

### 9. Meta title/description length overruns (minor, cross-cutting)
- **Severity:** Medium
- **Evidence:** Home title ≈62 chars (target 50-60 per project CLAUDE.md); home description ≈173 chars (target 150-160); `/qui-sommes-nous` description ≈189 chars; `/solutions/biofertilisant` title ≈63 chars; `/ressources` title ≈61 chars.
- **Why it matters:** Overlong titles/descriptions get truncated in SERPs and in AI-generated summaries, reducing click-through and citation quality. This overlaps with on-page SEO scope but affects AI-snippet quality directly.
- **Recommendation:** Trim to project's documented 50-60/150-160 character targets; low effort, quick win. (Full on-page SEO audit should own the exhaustive list — flagged here only because it affects AI-citability.)

---

## Positive / Strengths worth preserving

- **AI-citability structure on product pages is genuinely good**: clear H2 hierarchy (Cultures cibles / Mode d'emploi / Questions fréquentes / Résultats mesurés), numbered step-by-step "Mode d'emploi" sections, and real Q&A pairs — this is FAQ-schema-ready and well-suited to LLM extraction. Worth extending to /qui-sommes-nous, /notre-production, and /pourquoi-le-biocontrole, which currently lack this density of structured, quotable passages.
- **Definitional passage on /pourquoi-le-biocontrole** ("Qu'est-ce que le biocontrôle ?") is a strong, citable definition paragraph — a good AI-citability pattern to replicate on other pillar pages.
- **Transparent handling of the testimonials gap** on the homepage (TrustSection) is a good-faith trust signal rather than a fabricated placeholder — do not regress this by reintroducing fake/generic testimonials before real ones exist.
- **Legal/trust footer signals present**: SIRET, physical address (Dole, Jura), and a real contact email (contact@keprea.com) are visible in the rendered HTML — good baseline Trustworthiness signal.

---

## Content Quality Score: 46/100

### E-E-A-T breakdown (out of each factor's weight)
| Factor | Weight | Score | Notes |
|---|---|---|---|
| Experience | 20% | 8/20 | No case studies/testimonials (known gap); founding story present but shallow; no first-hand field data beyond a couple of stat blocks with loosely-cited sourcing |
| Expertise | 25% | 11/25 | Team named but no bios/credentials surfaced as text; no author bylines; technical content (mode d'emploi, cultures cibles) is accurate-reading but not attributed to a named expert |
| Authoritativeness | 25% | 10/25 | Potentially strong (notable named individuals) but entirely unexploited — no external links, no press, no citations back to the company; institute references (ITAB, IBMA) are name-dropped without links |
| Trustworthiness | 30% | 17/30 | SIRET/address/email present (good); RGPD/legal pages exist (per ERRORS.md); undermined by the live internal placeholder note and unverifiable "données internes" claims |

### AI Citation Readiness Score: 58/100
Good structural bones (headings, FAQ, step lists, a solid definitional passage) drag down by thin prose per section, repetitive boilerplate across product pages, and near-total absence of structured, quotable content on About/Production/Resources pages.

## Top Recommendations (priority order)
1. Remove the live internal placeholder text on /qui-sommes-nous (5-minute fix, critical trust issue).
2. Verify and either substantiate (with bios/links) or remove the named-individuals team claims.
3. Deepen /qui-sommes-nous, /notre-production, and /ressources content to reach type-appropriate word floors (currently 169-282 words vs. 500-600 target).
4. Deepen the 4 product pages toward the 800-word service-page floor by expanding existing sections (FAQ, specs, compatibility) rather than templating new ones.
5. De-duplicate boilerplate CTA/cross-sell copy across product pages.
6. Add authorship/update-date signals on regulatory/technical claims.
