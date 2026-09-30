# Audit SEO complet — www.keprea.com

Date : 22/07/2026 · Domaine analysé : `www.keprea.com` (production live) · Business : B2B agri-tech, biosolutions agricoles à base d'insectes (Dole, 39) · Précédent audit : `keprea.vercel.app-audit/` (02/07/2026, score 53/100)

## Score de santé SEO : 62/100

| Catégorie | Poids | Score | Contribution |
|---|---|---|---|
| Technique | 22% | 68/100 | 15.0 |
| Contenu | 23% | 58/100 | 13.3 |
| On-Page | 20% | 72/100 | 14.4 |
| Schema | 10% | 55/100 | 5.5 |
| Performance | 10% | 50/100 * | 5.0 |
| GEO / IA | 10% | 65/100 | 6.5 |
| Images | 5% | 50/100 | 2.5 |

\* Pas d'accès Lighthouse/CrUX dans cet environnement — score estimé à dire d'expert sur la base du poids des ressources (image 7,5 Mo, vidéos non vérifiées), pas d'une mesure réelle de LCP/INP/CLS. **Recommandé : lancer PageSpeed Insights manuellement sur les 3-4 pages clés pour obtenir des chiffres réels.**

Progression depuis le dernier audit (53 → 62) : sourcing E-E-A-T renforcé sur `/pourquoi-le-biocontrole`, schema FAQ/Article/Service généralisé, headers de sécurité ajoutés, contenu enrichi (Phase 3). Le score reste plafonné par deux problèmes structurels : **la preuve sociale toujours absente** et **un correctif de domaine prêt mais non déployé**.

---

## ⚠️ Point de départ : un correctif déjà écrit, jamais déployé

Le code local contient déjà la bascule de domaine `keprea.vercel.app → keprea.com` (`src/lib/schema.ts`, `src/lib/breadcrumb.ts`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`) — mais **ces fichiers sont modifiés en local et non commités** (confirmé via `git diff` : HEAD sert encore `keprea.vercel.app` partout). Ce n'est pas un bug d'infrastructure Vercel ni un déploiement figé : c'est simplement un commit + push qui n'a pas encore eu lieu. Une fois fait, la quasi-totalité du JSON-LD, des canonicals et des fichiers techniques (robots/sitemap/llms) pointeront correctement vers `keprea.com`.

**Cela ne résout pas tout** : un second problème, distinct, subsiste même après ce déploiement — voir Finding technique n°1 ci-dessous (conflit apex `keprea.com` vs `www.keprea.com`).

---

## Top 5 problèmes critiques

1. **Aucun témoignage agriculteur réel** — le composant `Testimonials.tsx` (`TrustSection`) affiché comme "preuve sociale" sur la homepage ne contient que des stats génériques, zéro citation nominative. C'est la priorité absolue du projet (CLAUDE.md, README.md) et elle reste non traitée. *(Contenu / SXO)*
2. **Correctif de domaine non déployé** — `git diff` confirme que schema.ts/breadcrumb.ts/index.html/robots.txt/sitemap.xml/llms.txt sont corrigés en local mais pas commités : la prod sert encore `keprea.vercel.app` dans tout le JSON-LD et les canonicals. *(Schema / Technique / GEO)*
3. **Conflit domaine apex vs www** — tout le code cible `https://keprea.com` (sans www) mais en production l'apex redirige en 308 vers `https://www.keprea.com`, qui est la version réellement servie. Un correctif de domaine complet doit choisir www **ou** apex, pas les deux. *(Technique)*
4. **Image de fond 7,5 Mo non compressée** — `Solutions Biofertilisant.png`, chargée sur le hub produit (page à fort trafic), plombe potentiellement le LCP de cette page. *(Performance / Images)*
5. **Page `/solutions` sans aucun `<h1>`** — la 2ᵉ page la plus importante du site (priorité 0.9) n'a pas de titre H1, seulement un H2 en premier titre visible. *(On-Page)*

## Top 5 quick wins

1. Commiter + pousser + déployer les fichiers déjà corrigés (`schema.ts`, `breadcrumb.ts`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`) — 5 minutes, débloque une bonne partie du score technique/schema/GEO.
2. Ajouter un `<h1>` sur `/solutions`.
3. Compresser `Solutions Biofertilisant.png` en WebP (7,5 Mo → cible <200 Ko).
4. Ajouter les 3 pages orphelines (`/ressources`, `/ressources/fiches-techniques`, 5 fiches produit) au sitemap.
5. Supprimer la balise `<meta name="description">` vide dupliquée générée par `vite-react-ssg` sur toutes les pages.

---

## Technique SEO (68/100)

**Ce qui fonctionne** : SSG fonctionnel (contenu texte présent sans JS), 14/14 URLs testées en 200, structure Hn correcte sur 13/14 pages, headers de sécurité de base (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), redirections 301/308 propres pour les anciennes URLs, URLs kebab-case françaises cohérentes, 404 propre (pas de fallback SPA en 200).

**Findings :**
- **High** — Conflit apex/www : `keprea.com` redirige en 308 vers `www.keprea.com`, mais tout le code cible l'apex sans www comme canonique. Choisir une version définitive et tout aligner (code + config domaine Vercel).
- **Medium** — `/solutions` sans `<h1>` (voir top 5).
- **Medium** — Aucune Content-Security-Policy dans les headers ni `vercel.json`.
- **Low** — `/ressources/fiches-techniques` indexable (pas de noindex) mais absent de tout sitemap.
- **Info** — Multilingue (5 langues) purement client-side, sans URLs dédiées ni hreflang — pas un bug vu l'architecture actuelle, mais aucune valeur SEO internationale.

---

## Contenu / E-E-A-T (58/100)

**Ce qui fonctionne** : hiérarchie Hn propre partout, FAQ + schema FAQPage systématiques, sourcing tiers rigoureux et daté sur `/pourquoi-le-biocontrole` (agriculture.gouv.fr, Alliance Biocontrôle, Légifrance, IBMA), disclaimers transparents sur les statistiques internes, ton adapté à la cible agricole, canal "retour terrain" déjà en place pour capter du feedback.

**Findings :**
- **Critical** — Zéro témoignage agriculteur réel (voir top 5).
- **High** — Fiches équipe (`Team.tsx`) : 10 personnes nommées mais seulement des initiales, aucune photo/bio/diplôme — signal d'expertise humaine faible.
- **Medium** — Auteur JSON-LD `Article` toujours l'Organisation, jamais une personne identifiée.
- **Medium** — Claim "étude publiée dans Nature" imprécis (il s'agit en réalité de *Scientific Reports*, revue distincte).
- **Medium** — Page biopesticides structurellement plus mince que les 3 autres pages produit (cohérent avec le statut "en développement", mais à enrichir dès que possible).
- **Low** — Léger contenu dupliqué dans les blocs cross-sell entre les 4 pages produit.

---

## On-Page SEO (72/100)

**Ce qui fonctionne** : 15/16 pages avec exactement 1 H1 cohérent avec le title, titles et meta descriptions uniques par page, maillage horizontal solide entre les 4 pages produit et le hub Solutions, aucune 404/500 sur les URLs testées.

**Findings :**
- **High** — `/solutions` sans H1.
- **Medium** — `<meta name="description">` dupliquée et vide (résidu de `vite-react-ssg`/Helmet) sur les 16 pages testées.
- **Medium** — Maillage interne : aucun CTA contextuel direct vers `/contact` dans le corps des 4 pages produit (uniquement via le Footer).
- **Low-Medium** — Titles hors fourchette 50-60 caractères sur plusieurs pages (`/solutions` = 68 car., fiches techniques trop courtes ~34 car.).
- **Low** — Meta descriptions hors fourchette 150-160 caractères sur plusieurs pages (`/solutions/biopesticides` = 194 car., risque de troncature).

---

## Schema / Données structurées (55/100)

**Ce qui fonctionne** : génération JSON-LD 100% programmatique via TypeScript (zéro risque de JSON malformé), couverture large de `BreadcrumbList`, `FAQPage` bien structuré et fidèle au contenu visible, `Article` bien formé sur la page biocontrôle, discipline anti-spam-schema (pas de fausses notes/prix sur les `Service`).

**Findings :**
- **Critical** — Le JSON-LD/canonical en production pointe encore vers `keprea.vercel.app` (voir section "Point de départ" plus haut — correctif déjà écrit, à déployer).
- **Majeur** — Aucun schema `Product` sur les 4 gammes ni les fiches techniques téléchargeables (seulement `Service`/`BreadcrumbList`).
- **Mineur** — `Organization` sans `sameAs` (aucun réseau social lié) ni `foundingDate`.
- **Mineur** — Pas de schema `WebSite`. `LocalBusiness` volontairement absent — choix cohérent pour un B2B sans point de vente physique.
- **Mineur** — `SITE_URL` dupliqué dans deux fichiers (`schema.ts`/`breadcrumb.ts`) — à factoriser.

---

## Performance (50/100 — estimation, pas de mesure réelle)

Aucun outil Lighthouse/CrUX disponible dans cet environnement d'audit. Signaux indirects relevés dans le code :
- Image de fond `Solutions Biofertilisant.png` : 7,5 Mo, chargée sur le hub produit.
- Plusieurs PNG/JPG de 2+ Mo utilisés en fond/hero (`plant-droplets-bg.png`, `leaves-droplets-bg.jpg`), dont certains hors pipeline Vite (`public/lovable-uploads/`).
- Quasi aucune image n'a de `width`/`height` explicite → risque de CLS généralisé (seule `NotreProduction.tsx` le fait correctement).
- Lazy loading incohérent (présent sur certaines images sous la ligne de flottaison, absent sur d'autres comparables).

**Recommandation** : lancer PageSpeed Insights / Lighthouse manuellement sur `/`, `/solutions`, une page produit et `/contact` pour obtenir de vrais scores LCP/INP/CLS avant de prioriser plus finement.

---

## GEO / Visibilité IA (65/100)

**Ce qui fonctionne** : `llms.txt` bien structuré et citable (résumé qui/quoi/où en une phrase), contenu sourcé et daté sur `/pourquoi-le-biocontrole` (modèle de citabilité à généraliser), JSON-LD riche, SSG qui rend tout le texte accessible sans JS, robots.txt non restrictif.

**Findings :**
- **Haute (déjà connue)** — `robots.txt`/`llms.txt` en prod pointent vers `keprea.vercel.app` (même correctif en attente que ci-dessus).
- **Moyenne** — Le mot "Keprea" n'apparaît pas dans le H1/sous-titre visible du hero de la homepage (seulement dans `<title>`/JSON-LD) — un LLM qui extrait le texte visible peut manquer l'association immédiate marque↔contenu.
- **Faible** — Le patron exemplaire de `/pourquoi-le-biocontrole` (définition autonome + chiffre sourcé + accordéon sources) n'est pas répliqué sur les pages produits.
- **Faible** — Incohérence d'URL de logo entre deux blocs JSON-LD (`index.html` vs `schema.ts`).
- **Faible** — `robots.txt` n'autorise pas nommément les crawlers IA (GPTBot, ClaudeBot, PerplexityBot) — le wildcard `*` les couvre déjà, mais aucun signal explicite.
- **Faible** — `Organization` sans `sameAs`/`foundingDate`.

---

## Images (50/100)

**Ce qui fonctionne** : alt text quasi systématique et descriptif (souvent via i18n), les 2 balises `<video>` du site ont bien un `poster` (règle CLAUDE.md respectée), certaines images produit déjà en WebP.

**Findings :**
- **Critique** — `Solutions Biofertilisant.png` : 7,5 Mo (voir top 5).
- **Élevée** — Plusieurs assets 2+ Mo en PNG/JPG non convertis en WebP/AVIF, dont des fichiers dans `public/lovable-uploads/` hors pipeline de build.
- **Élevée** — Aucune dimension `width`/`height` explicite sur la quasi-totalité des `<img>` → risque de CLS.
- **Moyenne** — Lazy loading incohérent selon les images.
- **Faible** — Vérifier le poids réel de la vidéo hero (`portfolio-video-4.mp4`), pas trouvée dans ce repo.

---

## Annexe — pages auditées

Sitemap actuel (13 URLs) + 3 pages orphelines détectées : `/ressources`, `/ressources/fiches-techniques`, et 5 fiches produit (`boostea13`, `soilea110`, `fertea432`, `bioprotection`, `biopesticides`). Toutes répondent HTTP 200. Détail complet par catégorie dans `findings/*.md`.
