# Audit on-page — www.keprea.com

Date de l'audit : 2026-07-22
Méthode : `curl`/`fetch` HTTP sur `https://www.keprea.com` pour chaque URL du sitemap déployé + les 3 pages orphelines identifiées dans `sitemap.md` (`/ressources`, `/ressources/fiches-techniques`, `/ressources/fiches-techniques/boostea13`), extraction et mesure exacte de `<title>`, `<meta name="description">` et `<h1>`.

---

## 1. Balise `<meta name="description">` dupliquée et vide sur toutes les pages

**Sévérité : Moyenne**

**Description avec preuve** : chaque page auditée renvoie **2** balises `<meta name="description">` dans le HTML final, pas une seule. Exemple sur la page d'accueil :

```html
<meta data-rh="true" name="description" content="Keprea développe des biosolutions à base d'insectes...">
<meta name="description">
```

La première (avec `data-rh="true"`, injectée par le composant `<Head>` de `vite-react-ssg`) porte le bon contenu. La seconde n'a **aucun attribut `content`**. Ce doublon est présent à l'identique sur les 16 pages testées (accueil, hub solutions, 4 pages produit, pourquoi-le-biocontrôle, innovation, qui-sommes-nous, notre-production, contact, mentions-légales, politique-confidentialité, ressources, fiches-techniques, fiche produit boostea13). `index.html` a bien été nettoyé lors d'un audit précédent (commentaire ligne 13-14 : "Pas de `<title>`/`<meta name="description">` ici... audit SEO 02/07/2026"), donc la source n'est pas ce fichier statique — la balise vide provient très probablement d'un comportement de `vite-react-ssg`/Helmet lors du pré-rendu statique qui laisse un tag "coquille" en plus du tag rempli.

**Recommandation** : investiguer la génération SSG (`vite-react-ssg`) pour supprimer le tag `<meta name="description">` sans `content`. Un validateur strict ou un outil d'audit tiers (Screaming Frog, Search Console) peut signaler une "meta description manquante/vide" en lisant le mauvais tag en premier, ce qui fausserait un diagnostic externe. Impact SEO direct probablement faible (Google privilégie généralement le premier tag rempli) mais à corriger pour la propreté du HTML et éviter les faux positifs d'outils tiers.

---

## 2. Page `/solutions` sans aucun `<h1>`

**Sévérité : Haute**

**Description avec preuve** : le hub produit `/solutions` (priorité 0.9 dans le sitemap, 2e page la plus importante du site) contient **0 balise `<h1>`**. Le premier titre de contenu visible est un `<h2>` : `"4 gammes pour une agriculture sans compromis"`. Vérifié par extraction regex sur le HTML brut renvoyé par `https://www.keprea.com/solutions` — aucune occurrence de `<h1`. C'est la seule page du site testée à ne pas avoir de H1 (les 15 autres pages en ont exactement 1).

**Recommandation** : ajouter un `<h1>` explicite en tête de page, distinct du `<title>` de l'onglet mais cohérent avec lui (ex. title actuel : "Nos Solutions Keprea | Bioprotection, Biopesticides, Biofertilisants" → H1 possible : "Nos solutions biosourcées à base d'insectes"). Remonter le `<h2>` existant ("4 gammes pour une agriculture sans compromis") en `<h3>` ou le conserver comme sous-titre sous le nouveau H1, selon la structure visuelle voulue — ne pas simplement renommer le H2 existant en H1 sans vérifier la hiérarchie Hn de toute la page.

---

## 3. Titres `<title>` hors de la fourchette 50-60 caractères sur plusieurs pages

**Sévérité : Faible à Moyenne**

**Description avec preuve** (longueur mesurée par script, caractères réels y compris ponctuation) :

| Page | Title | Longueur |
|---|---|---|
| `/` | Keprea : Biosolutions Agricoles à base d'Insectes \| Dole, Jura | 62 |
| `/solutions` | Nos Solutions Keprea \| Bioprotection, Biopesticides, Biofertilisants | 68 |
| `/solutions/biopesticides` | Biopesticides Naturels Keprea \| Extraits d'Insectes | 51 |
| `/qui-sommes-nous` | Qui sommes-nous ? \| Équipe et Mission Keprea | 44 |
| `/mentions-legales` | Mentions Légales \| Keprea | 25 |
| `/politique-confidentialite` | Politique de Confidentialité \| Keprea | 37 |
| `/ressources/fiches-techniques/boostea13` | Boostea13 : Fiche Technique Keprea | 34 |

`/solutions` (68 car.) dépasse la fourchette recommandée et sera tronqué dans les SERP Google (limite pratique ~60-65 car. selon la largeur des caractères). À l'inverse, `/mentions-legales` (25 car.), `/politique-confidentialite` (37 car.) et la fiche produit boostea13 (34 car.) sont nettement en-dessous de 50 caractères — sur les pages légales l'impact SEO est mineur (faible volume de recherche visé), mais sur la fiche technique produit c'est un espace de mots-clés perdu (aucune mention de la gamme "Booster" ni du bénéfice produit dans le title).

**Recommandation** :
- `/solutions` : raccourcir à ~60 car., ex. "Nos Solutions Keprea : Bioprotection, Biopesticides, Boosters" (61 car., encore un peu long — viser "Solutions Keprea : 4 Gammes de Biosolutions Agricoles", 51 car.).
- Fiches techniques (`boostea13`, etc.) : enrichir avec la gamme et le bénéfice, ex. "Boostea13 : Biostimulant Keprea | Fiche Technique" (50 car.) pour éviter un title trop générique et gagner en mots-clés.
- Pages légales : laisser tel quel, la contrainte 50-60 car. est secondaire sur ces pages à faible enjeu SEO.

---

## 4. Meta descriptions hors fourchette 150-160 caractères

**Sévérité : Faible**

**Description avec preuve** (longueur du contenu réel du tag rempli, hors le tag vide dupliqué du point 1) :

| Page | Longueur | Statut |
|---|---|---|
| `/` | 173 | légèrement au-dessus |
| `/solutions/biopesticides` | 194 | nettement au-dessus, risque de troncature |
| `/solutions/biofertilisant` | 157 | dans la fourchette |
| `/innovation` | 184 | au-dessus |
| `/qui-sommes-nous` | 189 | au-dessus |
| `/mentions-legales` | 96 | en-dessous |
| `/ressources/fiches-techniques/boostea13` | 95 | en-dessous |
| `/contact` | 145 | légèrement en-dessous |

La plupart des pages produit/contenu (accueil, biopesticides, innovation, qui-sommes-nous) dépassent 160 caractères et seront tronquées avec "..." dans les résultats Google, ce qui peut couper l'appel à l'action ou une information clé (ex. sur `/solutions/biopesticides`, 194 caractères — Google tronque généralement autour de 155-160 car. sur desktop).

**Recommandation** : raccourcir les descriptions dépassant 160 caractères en gardant le bénéfice principal + la localisation (Dole/Jura) en premier, car c'est ce qui sera affiché avant troncature. Pour les pages sous 150 caractères (mentions légales, fiches techniques), enrichissement optionnel mais non prioritaire.

---

## 5. H1 cohérent avec le title sur 14 des 15 pages avec H1

**Sévérité : Information (bon point avec une réserve)**

**Description avec preuve** : sur toutes les pages ayant un H1, le contenu est cohérent thématiquement avec le title (ex. `/mentions-legales` : title "Mentions Légales | Keprea", H1 "Mentions légales" ; `/contact` : title "Contactez Keprea | Biosolutions Agricoles à Dole (39)", H1 "Parlons de votre projet" — le H1 est plus orienté conversion/ton humain que le title, ce qui est un choix éditorial acceptable et non un défaut). Aucun H1 dupliqué, aucune page avec 2+ H1 détectée parmi les 15 pages qui en ont un.

**Recommandation** : aucune action requise, seule l'absence de H1 sur `/solutions` (point 2) est à corriger.

---

## 6. Maillage interne : pages produit bien reliées entre elles, mais sans CTA contextuel direct vers `/contact`

**Sévérité : Moyenne**

**Description avec preuve** : les 4 pages produit (`BiocontroleVivant.tsx`, `ExtraitsNaturels.tsx`, `Boosters.tsx`, `Biofertilisant.tsx`) contiennent chacune des liens internes vers `/solutions` (hub) et vers les 3 autres pages produit de la gamme — bon maillage horizontal confirmé par grep (`to="/solutions/..."` présent dans chacune des 4 pages). En revanche, aucun lien direct `to="/contact"` n'a été trouvé dans le corps de ces 4 pages produit : le seul accès à `/contact` se fait via le composant `Footer` (site entier) et via le composant `Testimonials` (page d'accueil uniquement, `src/components/Testimonials.tsx` ligne 90). Pour un visiteur arrivé directement sur une page produit via une recherche organique (cas fréquent), le chemin de conversion vers le contact dépend donc uniquement du footer, sans CTA contextuel dans le flux de lecture de la page produit elle-même.

**Recommandation** : ajouter un bloc CTA contextuel ("Un besoin sur cette gamme ? Contactez-nous" ou équivalent) en fin de chaque page produit, avec un lien direct `to="/contact"`, en plus du footer. Cela renforce à la fois la conversion (parcours découverte → conviction → contact du README) et le maillage interne perçu par les moteurs de recherche vers la page de conversion.

---

## 7. Fiches techniques et page Ressources non liées depuis les pages produit correspondantes (lien manquant partiel)

**Sévérité : Faible**

**Description avec preuve** : `BiocontroleVivant.tsx` et `Boosters.tsx`/`Biofertilisant.tsx` contiennent bien des liens vers leur fiche technique produit respective (ex. `Boosters.tsx` lie vers `/ressources/fiches-techniques/boostea13` et `/ressources/fiches-techniques/soilea110`, `Biofertilisant.tsx` vers `/ressources/fiches-techniques/fertea432`). C'est un bon maillage produit → fiche technique. Cependant, comme noté dans `sitemap.md`, ces pages fiches techniques ne sont pas dans le sitemap — le maillage interne existe donc mais l'entrée n'est pas renforcée par une inclusion sitemap, ce qui limite la découverte par les moteurs de recherche pour les pages non encore linkées ailleurs.

**Recommandation** : voir `sitemap.md` points 1-3. Une fois les URLs ajoutées au sitemap, le maillage interne déjà en place suffira à consolider leur indexation.

---

## Ce qui fonctionne bien

- 15 des 16 pages testées ont exactement 1 seul H1, cohérent avec le sujet de la page et le title — aucune page avec H1 multiples ou H1 hors-sujet.
- Toutes les pages testées ont un `<title>` unique par page (pas de title dupliqué d'une page à l'autre) et une meta description propre et spécifique au contenu de chaque page.
- Maillage horizontal solide entre les 4 pages produit et vers le hub `/solutions` (chaque page produit linke les 3 autres + le hub).
- Les pages produit qui ont une fiche technique associée (Boosters, Biofertilisant, Bioprotection) y renvoient déjà par un lien direct et contextuel.
- Toutes les pages testées répondent en HTTP 200, aucune erreur 404/500 rencontrée sur les URLs auditées.
- `index.html` a déjà été nettoyé d'un précédent bug de duplication de `<title>`/meta OG/Twitter (voir commentaire daté du 02/07/2026), preuve d'un historique de correction SEO sérieux sur ce projet — seul un résidu de meta description vide subsiste (point 1).
