# SEO Action Plan — keprea.vercel.app

## Phase 1: Critical Fixes (This Week) — ✅ DONE (02/07/2026)

1. ~~Remove the live placeholder `team.photoNote`~~ — **Fait**. Reste à faire (Phase 3) : vraies photos individuelles des 6 membres.
2. ~~Remove duplicate `<title>`/`<meta description>` from `index.html`~~ — **Fait**. Chaque page ne rend plus qu'un seul `<title>`/`<meta description>` (vérifié dans `dist/` après build).
3. ~~Verify the named individuals on the Team page~~ — **Confirmé par l'utilisateur** (accord obtenu de toutes les personnes concernées, 02/07/2026). Bios complètes = enrichissement de contenu Phase 3.
4. ~~Add self-referencing `<link rel="canonical">`~~ — **Fait**, sur les 14 pages (y compris `/mentions-legales` et `/politique-confidentialite`, qui n'avaient même pas de `<Head>` — ajouté au passage pour éviter un titre vide après la suppression du fallback `index.html`).
5. ~~Fix the Organization JSON-LD domain mismatch~~ — **Fait**, aligné sur `keprea.vercel.app` (domaine live actuel) à la demande de l'utilisateur. **Note pour plus tard** : à rebasculer sur `https://keprea.com` (url + logo) le jour de la migration de domaine — flaggé dans `ERRORS.md` et en commentaire dans `index.html`.
6. ~~Add "biostimulant" to `/solutions/boosters`~~ — **Fait** : title → "Biostimulants Agricoles Keprea", H1 → "Boosters — Biostimulants Agricoles" (5 langues), section explicative "Qu'est-ce qu'un biostimulant agricole ?" ajoutée en haut de page.

Build vérifié : 18 pages générées, 0 erreur TypeScript, canonicals/titres/JSON-LD contrôlés directement dans le HTML compilé.

## Phase 2: High-Impact Improvements (Weeks 2-3) — ✅ DONE (02/07/2026)

1. ~~Change hero video `preload="auto"` → `preload="metadata"`; re-encode~~ — **Fait** : `portfolio-video-4.mp4` réencodé 13 Mo → 1,9 Mo (ffmpeg, 960px/CRF30, qualité vérifiée visuellement), `preload="metadata"`. `biocontrol-video.mp4` (19,5 Mo) : **découverte** — n'est en réalité jamais référencé par aucune page (seul `ProductsSchema.tsx`, un composant jamais importé, y fait référence) donc jamais préchargé ni téléchargé par les visiteurs ; voir le point "vidéos orphelines" ci-dessous.
2. ~~Convert the 2.49MB production-section PNG to WebP~~ — **Fait** : converti en WebP 68 Ko (Pillow), PNG original supprimé.
3. ~~Add `/innovation` to `sitemap.xml`; reconcile the `/innovation` page vs. `/#innovation`~~ — **Fait** : ajouté au sitemap, lien Footer aligné sur `/innovation` (page dédiée) au lieu de l'ancre homepage.
4. ~~Add `BreadcrumbList` schema to all inner pages~~ — **Fait**, sur les 13 pages internes via `src/lib/breadcrumb.ts`. Piège rencontré : le `Head` du projet est `react-helmet-async` — le JSON-LD doit être un enfant texte `<script>{json}</script>`, pas `dangerouslySetInnerHTML` (silencieusement ignoré par Helmet).
5. ~~Fix `/contact` mobile layout~~ — **Fait** : hero mobile resserré (padding + tailles de police réduites sous 640px) pour que le formulaire soit visible sans scroll excessif.
6. ~~De-duplicate meta descriptions~~ — **Déjà résolu** comme effet de bord du fix Phase 1 (les descriptions par page étaient déjà uniques ; c'est la balise générique dupliquée d'`index.html`, supprimée en Phase 1, qui faussait le diagnostic initial).
7. ~~Add per-page `og:title`/`og:description`/`og:url`~~ — **Fait** sur les 14 pages ; retirés d'`index.html` (même bug de duplication que le `<title>`). `og:image`/`twitter:image` restent en valeur par défaut partagée (pas d'image sociale dédiée par page pour l'instant) — alignés sur `keprea.vercel.app` au passage (même note migration que le JSON-LD).
8. ~~Add baseline security headers~~ — **Fait** pour X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy. **CSP volontairement non ajoutée** : nécessite un audit précis des domaines (Supabase, GA4, Google Fonts) et un test en preview — un mauvais réglage casserait silencieusement le formulaire de contact ou GA4. À traiter séparément avec un vrai déploiement de test.

**Nettoyage complémentaire (confirmé par l'utilisateur, 02/07/2026)** :
- ~~~64 Mo de vidéos orphelines dans `public/`~~ — **Fait** : `portfolio-video-1/2/3.mp4`, `biocontrol-video.mp4`, `substances-video.mp4` supprimés, ainsi que `ProductsSchema.tsx` (composant mort qui les référençait, jamais importé nulle part). `public/` : 85 Mo → 18 Mo.
- ~~Footer avec ancres homepage `/#solutions`/`/#production`~~ — **Fait** : en creusant, le même bug touchait aussi `/#about` et `/#contact-form`. Les 5 liens de navigation du Footer (Solutions, Innovation, Production, À propos, Contact) sont désormais des `<Link>` React Router vers les pages dédiées, alignés sur `Navigation.tsx`.

Build vérifié : 18 pages générées, 0 erreur TypeScript, vidéo/image/sitemap/breadcrumbs/OG/headers/Footer contrôlés directement dans `dist/` et `vercel.json`.

## Phase 3: Content & Authority (Month 2)

1. Expand `/pourquoi-le-biocontrole` from 335 to 1000+ words with sourced stats — turn it into the site's top-of-funnel informational hub (add `Article`/`FAQPage` schema once expanded).
2. Deepen the 4 product pages toward 800 words by expanding existing FAQ/spec/compatibility sections (not adding new ones); de-duplicate the boilerplate CTA/cross-sell copy between them.
3. Deepen `/qui-sommes-nous` and `/notre-production` toward 500-600 words with concrete specifics (milestones, certifications, production figures).
4. Separate "données internes" from third-party citations (ITAB, IBMA) in all stat sourcing; add methodology notes for internal claims.
5. Add `FAQPage` schema to the 4 product pages (content already qualifies).
6. Add `Service` (preferred) or factual-only `Product` schema (no fabricated offers/ratings) to the 4 solution pages.
7. Either publish real content on `/ressources` or `noindex` it until ready.
8. Add author/byline + "last updated" signals on pages making regulatory claims.

## Phase 4: Monitoring & Iteration (Ongoing)

1. Re-run Core Web Vitals measurement with a `GOOGLE_API_KEY` configured once available, to replace this audit's lab estimates with real CrUX/Lighthouse data.
2. At keprea.com cutover: regenerate sitemap with the new domain, fix `robots.txt`'s sitemap directive (currently 404s), remove now-redundant legacy `<Route>` duplicates from `App.tsx`, add `llms.txt`.
3. Add real farmer testimonials/trial results as they become available (already tracked as top priority in MEMORY.md) — replace the generic "share your feedback" CTA once real data exists.
4. Add source attribution (INRAE/FAO/academic) to key on-site statistics for AI-citation trust.
5. Monitor Search Console (once configured on keprea.com) for title/description rewrite rates as a leading indicator that the duplicate-tag fix (Phase 1.1) actually took effect.
