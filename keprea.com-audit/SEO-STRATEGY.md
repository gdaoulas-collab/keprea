# Plan stratégique — viser le score SEO le plus proche possible de 100

Base : `FULL-AUDIT-REPORT.md` (22/07/2026) + les 2 corrections de domaine déployées le même jour (`256879d`, `ba11d27`).

**Limite à annoncer clairement** : ce plan ne repart pas d'une analyse concurrentielle chiffrée (pas d'accès DataForSEO/Search Console/CrUX dans cet environnement) — il est construit sur l'audit réel déjà fait sur ce site, catégorie par catégorie. Un score de 100/100 n'est pas un objectif réaliste ni très significatif au-delà de ~95 : au-delà, le score dépend de signaux hors du code (vrais backlinks, autorité de domaine, données de trafic réel, avis tiers) qui prennent des mois et ne se "corrigent" pas en une session. Ce plan vise donc un **plafond réaliste de 93-96/100** en 3 phases actionnables, avec une 4ᵉ phase d'entretien continu.

---

## Score actuel réévalué (post-déploiement domaine, 22/07/2026)

Les deux corrections critiques déployées (bascule `vercel.app`→`keprea.com`, puis apex→`www.keprea.com`) relèvent mécaniquement 3 catégories. Score global recalculé : **68/100** (vs 62/100 au moment de l'audit, avant déploiement).

| Catégorie | Poids | Score avant | Score actuel | Plafond réaliste (Phase 3) |
|---|---|---|---|---|
| Technique | 22% | 68 | **80** | 94 |
| Contenu | 23% | 58 | 58 | 90 |
| On-Page | 20% | 72 | 72 | 95 |
| Schema | 10% | 55 | **78** | 95 |
| Performance | 10% | 50* | 50* | 90 |
| GEO / IA | 10% | 65 | **75** | 92 |
| Images | 5% | 50 | 50 | 92 |

\* Score Performance toujours une estimation à dire d'expert — aucune mesure Lighthouse/CrUX réelle disponible dans cet environnement. Première action de la Phase 1 : lancer une vraie mesure.

**Score global projeté après Phase 3 : ~92/100.**

---

## Ce qui plafonne durablement le score (à accepter, pas à "corriger")

- **Contenu (23%, le poids le plus lourd)** : le plafond de 90 (pas 100) tient au fait que l'E-E-A-T le plus fort — témoignages agriculteurs réels, vraies photos d'équipe, essais validés par un tiers (chambre d'agriculture, institut technique) — dépend de collecte terrain, pas de code. Un contenu peut être *techniquement* irréprochable sans que ces preuves existent encore.
- **Performance (10%)** : plafond 90 tant que la vidéo hero et le poids réseau réel n'ont pas été mesurés et optimisés en conditions réelles (CDN, cache, device mobile bas de gamme) — au-delà de l'optimisation d'assets, gagner les derniers points dépend de facteurs (CDN Vercel, device réel testé) hors du seul code.
- **Score 100 générique** : aucun site n'atteint 100/100 de façon durable sur un référentiel qui pondère aussi l'autorité perçue (backlinks, mentions de marque, ancienneté du domaine) — ce ne sont pas des cases à cocher mais des résultats d'exécution business dans la durée.

---

## Phase 1 — Fondations techniques (1-2 semaines) → score projeté ~76/100

Corrections rapides, à fort effet de levier, qui débloquent la suite. Détail d'exécution déjà dans `ACTION-PLAN.md` (Phase 1-2), rappel priorisé ici :

1. Vérifier en continu que le déploiement du 22/07 tient (`curl https://www.keprea.com/ | grep -c vercel.app` = 0, déjà confirmé) — ajouter ce test à la checklist de déploiement pour ne plus jamais régresser silencieusement.
2. Ajouter un `<h1>` sur `/solutions` (seule page du site sans H1).
3. Supprimer la `<meta name="description">` vide dupliquée (résidu `vite-react-ssg`) sur les 16 pages.
4. Ajouter les 3 pages orphelines au sitemap (`/ressources`, `/ressources/fiches-techniques`, 5 fiches produit).
5. Compresser `Solutions Biofertilisant.png` (7,5 Mo → WebP <200 Ko).
6. **Lancer une vraie mesure Core Web Vitals** (PageSpeed Insights manuel sur `/`, `/solutions`, une page produit, `/contact`) — remplace l'estimation Performance par des chiffres réels, condition pour prioriser correctement la suite.
7. Ajouter une Content-Security-Policy en mode `report-only` dans `vercel.json`.

**Impact attendu** : Technique 80→90, On-Page 72→85, Images 50→70, Performance passe d'estimé à mesuré (score réel probablement 55-75 selon résultat CWV réel).

---

## Phase 2 — Contenu et E-E-A-T (2-4 semaines) → score projeté ~85/100

C'est la phase à plus fort impact pondéré (Contenu = 23%, le poids le plus lourd du référentiel) et la plus dépendante d'actions business, pas seulement de code.

1. **Lancer la collecte de témoignages agriculteurs réels** (déjà identifié comme priorité n°1 du projet) : exploiter le canal "retour terrain" déjà en place sur `/contact` (`FieldFeedbackForm`), ajouter un champ de consentement explicite "acceptez-vous d'être cité·e sur le site ?" (RGPD). Objectif minimal : 2-3 témoignages nommés avec exploitation/culture/résultat avant la fin de cette phase.
2. Enrichir les fiches équipe (`Team.tsx`) : une phrase de crédibilité par personne clé (formation, expérience pertinente), vraies photos dès que possible.
3. Corriger le claim "publiée dans Nature" → "publiée dans Scientific Reports (groupe Nature)".
4. Ajouter un auteur `Person` (ou `reviewedBy`) sur l'`Article` JSON-LD de `/pourquoi-le-biocontrole` si un membre agronome peut être associé.
5. Repositionner la page Biopesticides comme "pipeline / à venir" dès le H1/hero pour résoudre le mismatch d'intention (agriculteur en recherche urgente vs produit non disponible).
6. Ajouter un CTA contextuel vers `/contact` en fin de chaque page produit.
7. Répliquer le patron de citabilité de `/pourquoi-le-biocontrole` (définition autonome + chiffre sourcé + accordéon sources) sur au moins une section de chaque page produit — sert à la fois Contenu et GEO.

**Impact attendu** : Contenu 58→80 (75 si les témoignages ne sont que partiellement collectés d'ici là — ce point reste le facteur limitant principal), On-Page 85→90, GEO 75→85.

---

## Phase 3 — Polish technique, schema et performance (1-2 mois) → score projeté ~92/100

1. Ajouter un schema `Product` sur les 4 gammes et les fiches techniques (`productJsonLd()`, factuel, sans prix/notes fictives — cohérent avec la discipline déjà en place sur `serviceJsonLd`).
2. Ajouter `sameAs` (réseaux sociaux) et `foundingDate` au JSON-LD `Organization`.
3. Unifier l'URL de logo entre `index.html` et `schema.ts` (un seul logo canonique).
4. Factoriser `SITE_URL` dans un seul fichier partagé.
5. Convertir les assets restants (2+ Mo) en WebP/AVIF, en particulier ceux dans `public/lovable-uploads/` hors pipeline Vite.
6. Ajouter `width`/`height` explicites sur toutes les images above-the-fold restantes, uniformiser le lazy loading.
7. Corriger les longueurs de title/meta description hors fourchette identifiées dans l'audit.
8. Ajouter les user-agents IA nommément dans `robots.txt` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) à titre de signal de transparence.
9. Intégrer explicitement "Keprea" dans l'eyebrow/sous-titre du hero de la homepage (actuellement absent du texte visible du premier écran).
10. Vérifier le poids réel de la vidéo hero (`portfolio-video-4.mp4`) et ré-encoder si nécessaire.

**Impact attendu** : Schema 78→93, Images 70→90, GEO 85→92, Technique 90→94.

---

## Phase 4 — Entretien continu (au-delà)

Ce qui maintient/pousse encore le score une fois le plafond de la Phase 3 atteint, sans garantie de gain supplémentaire à court terme :

- Continuer la collecte de témoignages (viser 8-10 témoignages variés par culture/région) — le facteur le plus limitant du score Contenu restera la profondeur de la preuve sociale tant que ce chiffre reste bas.
- Une fois du contenu blog/ressources publié (Phase 3 du README), ré-indexer `/ressources` et lancer une vraie analyse de clustering sémantique (`seo-cluster`) pour structurer les futurs articles.
- Suivi mensuel : re-tester `curl | grep vercel.app`, re-mesurer Core Web Vitals, revalider les longueurs title/meta après chaque nouvelle page.
- Si un profil LinkedIn Keprea existe ou est créé, le lier partout (`sameAs`, footer, navigation) — un signal d'autorité simple et rapide.
- Backlinks/mentions de presse (contact presse déjà ajouté sur `/qui-sommes-nous`) : hors du contrôle direct du code, mais c'est le principal levier qui reste pour dépasser 92-95/100 sur la durée.

---

## Récapitulatif score

| Étape | Score global | Durée cumulée |
|---|---|---|
| Avant déploiement domaine (audit initial) | 62/100 | — |
| Après déploiement domaine (aujourd'hui) | 68/100 | fait |
| Fin Phase 1 | ~76/100 | +1-2 semaines |
| Fin Phase 2 | ~85/100 | +1 mois |
| Fin Phase 3 | ~92/100 | +2-3 mois |
| Phase 4 (entretien) | 92-96/100 | continu |

Le détail d'exécution granulaire de chaque action reste dans `ACTION-PLAN.md` — ce document ajoute la lecture "quel gain de score pour quel effort" et les phases regroupent les actions par dépendance (le déploiement débloque le schema/GEO, les témoignages débloquent le contenu, etc.).
