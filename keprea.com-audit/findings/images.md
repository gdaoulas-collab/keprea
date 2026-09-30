# Audit Images & Vidéos — Keprea.com

Revue de `src/pages/*.tsx` et `src/components/*.tsx` : alt text, poster vidéo, formats/poids de fichiers (`src/assets/`, `public/lovable-uploads/`), lazy loading, dimensions explicites (CLS).

---

## 1. Image de fond "Solutions Biofertilisant.png" : 7,5 Mo, format PNG non compressé

**Sévérité : Critique**

**Description avec preuve**
`src/assets/Solutions Biofertilisant.png` pèse **7 565 836 octets (7,5 Mo)**. Elle est importée dans `src/components/Solutions.tsx:5` (`solutionsBiofertilisantBg`) et utilisée comme image de fond CSS dans la carte "Biofertilisant" du hub `/solutions` (ligne 68 : `bgStyle: { backgroundImage: url(${solutionsBiofertilisantBg}) }`), une carte affichée directement au chargement de la page (pas de lazy possible pour un `background-image` CSS classique). C'est la plus grosse ressource image de tout le site, chargée sur une page à fort trafic (hub produit).

**Recommandation**
Reconvertir en WebP/AVIF avec compression (cible < 200 Ko pour une image de fond de carte), et dimensionner à la taille d'affichage réelle (carte ~600-800px de large) plutôt que de conserver la résolution source.

---

## 2. Plusieurs assets PNG/JPG lourds utilisés en arrière-plan ou hero, format non optimisé

**Sévérité : Élevée**

**Description avec preuve**
Dans `src/assets/`, plusieurs fichiers dépassent 2 Mo et sont au format PNG/JPG plutôt que WebP/AVIF :
- `Innovation insecte.mp4` — 2,3 Mo (vidéo, cf. finding 5)
- `plant-droplets-bg.png` — 2 305 928 octets, utilisé en header plein cadre dans `src/pages/ExtraitsNaturels.tsx:3,56` (`backgroundImage: url(${plantDropletsBg})`)
- `leaves-droplets-bg.jpg` — 2 305 928 octets, utilisé comme fond de carte dans `src/components/Solutions.tsx:4,38`
- `Palettes.jpg` — 2 264 040 octets (fichier non traqué dans le repo d'après le statut git, à vérifier s'il est réellement utilisé)

Dans `public/lovable-uploads/`, plusieurs PNG dépassent 1 Mo (`728d038e-...png` 2,56 Mo, `0184afb4-...png` 1,74 Mo, `fed1a5d0-...png` 1,12 Mo) — ces fichiers hors du pipeline de build Vite (dossier `public/`) ne bénéficient d'aucune optimisation automatique et sont référencés en dur par URL (ex. `src/pages/BiocontroleVivant.tsx:73` : `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')`, 683 Ko).

**Recommandation**
Convertir systématiquement en WebP (ou AVIF) toutes les images de fond/hero de plus de 300 Ko. Pour les fichiers dans `public/lovable-uploads/`, les faire transiter par `src/assets/` et un import Vite pour bénéficier de la compression/hashing au build, ou a minima les recompresser manuellement avant dépôt.

---

## 3. Aucune dimension explicite (width/height) sur la quasi-totalité des balises `<img>` — risque de CLS

**Sévérité : Élevée**

**Description avec preuve**
Sur l'ensemble des balises `<img>` du repo, une seule fixe `width`/`height` : `src/pages/NotreProduction.tsx:69-76` (`width={1920}` `height={1440}`). Toutes les autres en sont dépourvues, par exemple :
- `src/components/Footer.tsx:20-24` (logo)
- `src/components/Navigation.tsx:63-67` et `131-135` (logo desktop/mobile)
- `src/components/Production.tsx:80-86` et `122-128` (photo site de production)
- `src/components/MapFrance.tsx:6-10` (carte de localisation)
- `src/pages/PourquoiBiocontrole.tsx:111-116` (image coccinelle)
- `src/pages/BiocontroleVivant.tsx:115` (icônes rondes de ravageurs)
- `src/pages/Biofertilisant.tsx:86` (logo AB)

Ces images sont dimensionnées uniquement via des classes Tailwind (`className="w-full h-full object-cover"`, `h-14 w-auto`, etc.), ce qui ne réserve pas d'espace avant le chargement effectif du fichier et peut provoquer un Cumulative Layout Shift, en particulier sur mobile à 375px où le rendu du conteneur dépend du ratio réel de l'image.

**Recommandation**
Ajouter `width`/`height` (ou `aspect-ratio` CSS explicite déjà présent sur certains conteneurs comme `aspect-[4/3]` dans `PourquoiBiocontrole.tsx:110`, mais absent sur l'`<img>` lui-même) sur toutes les images critiques above-the-fold, en particulier le logo (Footer/Navigation, chargé sur 100 % des pages) et les photos de production.

---

## 4. Lazy loading incohérent : présent sur certaines images de contenu, absent sur d'autres situées sous la ligne de flottaison

**Sévérité : Moyenne**

**Description avec preuve**
`loading="lazy"` est bien présent sur :
- `src/components/Production.tsx:84` et `126`
- `src/pages/PourquoiBiocontrole.tsx:115`
- `src/components/FranceMap.tsx:19`

Mais il est absent sur des images qui ne sont clairement pas above-the-fold, par exemple :
- `src/components/MapFrance.tsx:6-10` (carte affichée en bas de page Contact/Production)
- `src/pages/BiocontroleVivant.tsx:115` (grille de 4 photos de ravageurs, en milieu de page produit)
- `src/pages/Biofertilisant.tsx:86` (logo AB, en header — acceptable en eager mais à vérifier)
- Logos `Footer.tsx:20` (footer, bas de page — candidat naturel au lazy loading)

**Recommandation**
Ajouter `loading="lazy"` à toutes les images hors du premier écran (grilles produits, footer, cartes). Conserver `loading="eager"` uniquement pour le hero de chaque page (déjà fait correctement dans `NotreProduction.tsx:75`).

---

## 5. Vidéos : attribut `poster` présent, bonne pratique respectée

**Sévérité : Information (point positif, avec une réserve mineure)**

**Description avec preuve**
Les deux balises `<video>` du repo respectent la règle CLAUDE.md :
- `src/components/Hero.tsx:14-24` : `poster="/lovable-uploads/hero-poster-frame.jpg"` (157 Ko)
- `src/pages/InnovationPage.tsx:79-89` : `poster={innovationHeroImage}`

Réserve mineure : la vidéo source du hero (`/portfolio-video-4.mp4`, référencée en dur dans `Hero.tsx:22`, hors `src/assets/`) et `Innovation insecte.mp4` (2,3 Mo dans `src/assets/`) n'ont pas de vérification de poids trouvée dans ce repo pour la version servie en production — à contrôler séparément (poids réseau réel, `public/portfolio-video-4.mp4`).

**Recommandation**
Vérifier le poids et l'encodage (H.264/AV1, bitrate) du fichier `public/portfolio-video-4.mp4` servi en hero sur la page la plus visitée du site (Accueil) : c'est la ressource la plus impactante pour le LCP/CWV de la page d'entrée principale.

---

## 6. Alt text : couverture globalement correcte, un cas à vérifier

**Sévérité : Faible**

**Description avec preuve**
La quasi-totalité des `<img>` trouvées portent un `alt` non vide et descriptif, généralement via i18n (`t("alt.kepreaLogo")`, `t("alt.productionSite")`, `t("alt.logoAB")`, etc. — `Navigation.tsx:65,133`, `Production.tsx:82,124`, `Biofertilisant.tsx:86`) ou en dur et descriptif (`MapFrance.tsx:8` : "Localisation Keprea - 2H de Paris, Lyon, Bâle, Genève"). C'est conforme à la règle CLAUDE.md "ALT text sur toutes les images".

Point à vérifier : dans `src/components/Solutions.tsx:142-147`, les 4 images de fond des cartes produits sont posées via `<div role="img" aria-hidden="true">` (arrière-plan CSS) — le contenu textuel visible (titre/sous-titre de chaque carte) porte l'information, donc `aria-hidden` semble correct ici, mais confirmer qu'aucune information n'est véhiculée uniquement par l'image de fond elle-même (ex. pas de texte intégré dans l'image).

**Recommandation**
Aucune action bloquante. Auditer ponctuellement les fichiers PNG de `public/lovable-uploads/` pour s'assurer qu'aucun texte n'est incrusté dans l'image (règle CLAUDE.md "Contenu textuel indexable, pas de texte important dans des images").

---

## Ce qui fonctionne bien

- Les deux balises `<video>` du site (`Hero.tsx`, `InnovationPage.tsx`) ont toutes les deux un attribut `poster`, conformément à la règle stricte de CLAUDE.md — aucune régression détectée sur ce point.
- La quasi-totalité des images ont un `alt` non vide, souvent piloté par les clés i18n du site multilingue, ce qui garantit une traduction cohérente de l'alt text par langue.
- Certaines images produit (`Chenille ravageuse.webp`, `Cochenille.webp`) sont déjà au format WebP dans `src/assets/`, preuve qu'une partie de la production d'assets suit déjà les bonnes pratiques de format — il reste à généraliser cette pratique aux fichiers PNG/JPG restants.
- Le hero de `NotreProduction.tsx` est le seul exemple actuel du repo combinant `width`/`height` explicites ET `loading="eager"` pour une image above-the-fold : bon modèle à répliquer sur les autres pages.
