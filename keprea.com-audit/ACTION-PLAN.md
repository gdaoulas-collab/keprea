# Plan d'action SEO — www.keprea.com

Basé sur `FULL-AUDIT-REPORT.md` (score 62/100, 22/07/2026).

## Phase 1 : Critique (cette semaine)

1. **Commiter et déployer le correctif de domaine déjà écrit** — `src/lib/schema.ts`, `src/lib/breadcrumb.ts`, `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` sont modifiés en local mais pas commités. Git status le montre. Commit + push + vérifier le déploiement Vercel, puis revalider avec `curl https://www.keprea.com/ | grep vercel.app` (doit retourner 0 résultat).
2. **Régler le conflit apex/www** — choisir `www.keprea.com` (version réellement servie en 200) ou reconfigurer Vercel pour que www redirige vers l'apex. Une fois choisi, aligner `SITE_URL` (schema.ts/breadcrumb.ts), tous les canonicals, `index.html`, robots.txt, sitemap.xml, llms.txt sur cette seule version. À faire dans la même passe que le point 1 (même sujet, même fichiers).
3. **Compresser `Solutions Biofertilisant.png`** (7,5 Mo → WebP/AVIF, cible <200 Ko, dimensionné à la taille réelle d'affichage ~600-800px).
4. **Lancer la collecte de témoignages agriculteurs réels** — pas un fix de code, mais l'action business la plus impactante de tout l'audit (priorité n°1 du projet, toujours non traitée). En attendant, ne pas laisser un intitulé "preuve sociale" sans preuve nominative : soit retirer/renommer la section, soit indiquer clairement la méthodologie des chiffres affichés.

## Phase 2 : Haute priorité (1-2 semaines)

5. Ajouter un `<h1>` sur `/solutions`.
6. Ajouter les 3 pages orphelines au sitemap : `/ressources`, `/ressources/fiches-techniques`, et les 5 fiches produit (`boostea13`, `soilea110`, `fertea432`, `bioprotection`, `biopesticides`).
7. Enrichir les fiches équipe (`Team.tsx`) : au minimum une phrase de crédibilité (formation, expérience pertinente) par personne clé, photos réelles dès que possible.
8. Repositionner la page Biopesticides comme "pipeline / à venir" dès le H1/hero (pas juste un badge sur le hub) pour éviter le mismatch d'intention avec un agriculteur en recherche urgente d'une solution disponible.
9. Ajouter `width`/`height` explicites sur les images critiques above-the-fold (logo Footer/Navigation, photos de production) pour limiter le CLS.

## Phase 3 : Optimisations (1 mois)

10. Supprimer la balise `<meta name="description">` vide dupliquée (résidu `vite-react-ssg`/Helmet) sur toutes les pages.
11. Ajouter un CTA contextuel direct vers `/contact` en fin de chaque page produit (en plus du Footer).
12. Corriger les longueurs de title/meta description hors fourchette (`/solutions` 68→~55 car., `/solutions/biopesticides` description 194→~155 car., fiches techniques trop courtes à enrichir).
13. Ajouter un schema `Product` sur les 4 gammes et les fiches techniques (`productJsonLd()` sur le modèle de `serviceJsonLd`, factuel, sans prix/notes fictives).
14. Convertir les assets PNG/JPG restants (2+ Mo) en WebP/AVIF, en particulier ceux dans `public/lovable-uploads/` hors pipeline Vite.
15. Uniformiser le lazy loading (`loading="lazy"`) sur toutes les images hors premier écran.
16. Corriger le claim "publiée dans Nature" → "publiée dans Scientific Reports (groupe Nature)" sur `Biofertilisant.tsx` et toutes les langues.
17. Ajouter une Content-Security-Policy dans `vercel.json` (mode report-only pour commencer).
18. Répliquer le patron de citabilité de `/pourquoi-le-biocontrole` (définition autonome + chiffre sourcé + accordéon sources) sur au moins une section de chaque page produit.
19. Ajouter `sameAs` (réseaux sociaux) et `foundingDate` au JSON-LD `Organization`.

## Phase 4 : Suivi continu

20. Lancer PageSpeed Insights / Lighthouse manuellement sur `/`, `/solutions`, une page produit et `/contact` pour obtenir de vrais scores LCP/INP/CLS — aucun outil de mesure réelle n'était disponible pour cet audit.
21. Ajouter un contrôle `curl | grep vercel.app` à la checklist de déploiement pour éviter une régression silencieuse de domaine à l'avenir.
22. Une fois des témoignages réels collectés (via le canal "retour terrain" déjà en place sur `/contact`), les publier avec consentement RGPD explicite et remplacer/compléter `Testimonials.tsx`.
23. Mettre à jour `ERRORS.md` : corriger la mention "bascule domaine faite et vérifiée (13/07/2026)" — la vérification n'a porté que sur le code, pas sur le déploiement réel.

## Phase 5 : Ciblage mots-clés / ranking (30/07/2026)

Suite à l'audit du 22/07 : aucune régression depuis (seuls sitemap + redirections faits, Phase 1-4 ci-dessus toujours ouvertes). Nouvelle analyse ciblée sur "apparaître le plus haut possible sur les mots-clés de l'activité", sachant que les témoignages agriculteurs restent indisponibles (SXO + clustering + content, agents `seo-sxo`/`seo-cluster`/`seo-content`).

**Mismatch le plus critique identifié** : aucune page ne répond à l'intention "alternative pesticides" (Google attend une page comparative à tableau de critères — trou structurel total). Risque de cannibalisation confirmé entre `/solutions/boosters` et `/solutions/biofertilisant` sur les requêtes génériques "biostimulant"/"biofertilisant".

24. **Créer une page comparative « Biocontrôle vs pesticides chimiques »** (tableau coût/délai d'action/réglementation/impact environnemental) — répond à l'intention "alternative pesticides", indépendant des témoignages.
25. **Créer une page de désambiguïsation « Biostimulant ou biofertilisant : quelle différence ? »** — hub interne entre `Boosters.tsx`/`Biofertilisant.tsx`, résout la cannibalisation.
26. **Créer une page « Ecophyto 2030 et biocontrôle »** — angle réglementaire porteur, non couvert aujourd'hui.
27. Créer 2 pages verticales par filière : **« Auxiliaires de culture en grandes cultures »** et **« Solutions de biocontrôle en maraîchage »** (spokes de `BiocontroleVivant.tsx`) — longue traîne peu couverte par les gros acteurs (Koppert domine plutôt la serre).
28. Étoffer `/pourquoi-le-biocontrole` en guide long-format (>1500 mots) avec schema `FAQPage` complet — capte le trafic informationnel amont ("qu'est-ce que le biocontrôle") sans dépendre de collecte terrain.
29. Ajouter des fiches techniques téléchargeables (dosage, matière active, mode d'action, homologation) indexées en HTML sur chaque page `/solutions/*` + schema `Product` — comble le mismatch "page produit sans specs".
30. **Substituts E-E-A-T sans témoignage** (ordre de priorité : rapide → lent) : (a) ajouter un auteur `Person`/agronome au JSON-LD de `/pourquoi-le-biocontrole` ; (b) répliquer le bloc "sources et méthodologie" (déjà présent sur `PourquoiBiocontrole.tsx`) sur les 4 pages produits, avec sources tierces par produit (Ecophyto, INRAE, ARVALIS/Comifer, IBMA) ; (c) enrichir `Team.tsx` d'une phrase de crédibilité par fondateur (formation, expérience) sans attendre les photos ; (d) densifier la FAQ/section technique d'`ExtraitsNaturels.tsx` (la plus mince du site, 2 questions FAQ contre 5-6 ailleurs).

**Non traité par cette analyse** : lecture SERP top-10 live par mot-clé (agent SXO interrompu avant complétion) — niveau de confiance modéré sur les mismatches, à valider par une itération complète si besoin.
