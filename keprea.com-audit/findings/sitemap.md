# Audit sitemap.xml — www.keprea.com

Date de l'audit : 2026-07-22
Sources : `public/sitemap.xml` (local), `https://www.keprea.com/sitemap.xml` (déployé), `src/pages/*.tsx`, `src/routes.tsx` (routing réel), `src/App.tsx` (routing legacy non utilisé).

**Note préliminaire sur le domaine** : le sitemap déployé référence encore `https://keprea.vercel.app/...` alors que le sitemap local (`public/sitemap.xml`) référence correctement `https://keprea.com/...`. Le correctif de domaine est déjà fait localement (non redéployé) — conformément à la consigne, ce point n'est pas traité comme un nouveau problème ici, juste noté pour rappel qu'il doit être redéployé.

**Note sur le routing** : `src/App.tsx` définit un routeur React Router complet mais n'est importé nulle part (`src/main.tsx` utilise `vite-react-ssg` avec `src/routes.tsx`). App.tsx est du code mort — le routing réel et faisant foi pour cet audit est `src/routes.tsx`.

---

## 1. Pages orphelines — `/ressources` absente du sitemap

**Sévérité : Haute**

**Description avec preuve** : `src/routes.tsx` ligne 38 déclare la route `{ path: "ressources", Component: Ressources }`, et la page répond en HTTP 200 à `https://www.keprea.com/ressources` avec un `<title>` et une meta description propres ("Ressources Keprea | Fiches Techniques et Articles Biocontrôle"). Pourtant, ni `public/sitemap.xml` local ni le sitemap déployé ne contiennent d'entrée `/ressources`. C'est pourtant une page listée dans l'architecture cible du README (`/ressources/` — "Blog, fiches techniques téléchargeables, newsletter") et un des 4 piliers de la Phase 3 (croissance SEO).

**Recommandation** : ajouter une entrée `<url>` pour `https://keprea.com/ressources` avec `changefreq: weekly` (le contenu est amené à évoluer souvent — blog, nouvelles fiches) et `priority: 0.7` (contenu institutionnel/conversion secondaire mais stratégique pour le SEO organique selon les critères de succès du README : ">20 téléchargements de fiches techniques/mois").

---

## 2. Pages orphelines — hub `/ressources/fiches-techniques` absent du sitemap

**Sévérité : Haute**

**Description avec preuve** : `src/routes.tsx` ligne 39 route `ressources/fiches-techniques` vers `FichesTechniques`. La page répond HTTP 200 avec title "Fiches Techniques Produits Keprea | Boostea13, Soilea110, Fertea432" (67 caractères) et description propre. Absente du sitemap alors qu'elle liste les 5 fiches produits et constitue un point d'entrée commercial direct (documentation technique = intention d'achat forte chez un agriculteur/distributeur).

**Recommandation** : ajouter `https://keprea.com/ressources/fiches-techniques` avec `priority: 0.7`, `changefreq: monthly`.

---

## 3. Pages orphelines — 5 fiches techniques produit absentes du sitemap

**Sévérité : Haute**

**Description avec preuve** : `src/data/technicalSheets.ts` définit 5 entrées statiquement générées (`getStaticPaths`) accessibles à :
- `/ressources/fiches-techniques/boostea13`
- `/ressources/fiches-techniques/soilea110`
- `/ressources/fiches-techniques/fertea432`
- `/ressources/fiches-techniques/bioprotection`
- `/ressources/fiches-techniques/biopesticides`

Vérification en direct : `https://www.keprea.com/ressources/fiches-techniques/boostea13` répond HTTP 200 avec un title dédié "Boostea13 : Fiche Technique Keprea" (34 caractères) et une meta description dédiée (95 caractères). Aucune des 5 URLs n'apparaît dans le sitemap. Ce sont des pages produit fines et à forte valeur commerciale (specs techniques = déclencheur de conversion pour un acheteur B2B agricole), non indexées formellement.

**Recommandation** : ajouter les 5 URLs avec `priority: 0.6` (pages de détail, un cran sous les pages produit gamme à 0.8) et `changefreq: monthly`.

---

## 4. Page `/innovation` présente dans le sitemap mais absente de l'architecture cible du README

**Sévérité : Faible (information, pas un bug)**

**Description avec preuve** : `src/routes.tsx` ligne 35 route `innovation` vers `InnovationPage`, et l'URL est bien dans le sitemap (`priority: 0.6`, `changefreq: monthly`, `lastmod: 2026-07-02`). Cependant le tableau "Architecture cible" du README (section pages à créer) ne mentionne pas `/innovation`. La page existe, est routée, est indexée — ce n'est pas un défaut du sitemap, mais un écart de documentation : README.md est en retard sur le code réel.

**Recommandation** : mettre à jour le tableau "Architecture cible" de README.md pour y ajouter la ligne `/innovation/` — pas d'action requise sur le sitemap lui-même.

---

## 5. Priorité de `/pourquoi-le-biocontrole` sous-évaluée par rapport à son rôle commercial

**Sévérité : Moyenne**

**Description avec preuve** : la page a `priority: 0.7`, au même niveau que rien d'autre dans le sitemap (c'est en fait la priorité la plus haute après les 4 pages produit à 0.8 et le hub Solutions à 0.9) — ce point est en réalité cohérent. En revanche `/contact` a `priority: 0.8`, identique aux 4 pages produit, ce qui est logique (page de conversion directe). **Correction** : après vérification, la hiérarchie priorité est globalement cohérente avec l'importance business (1.0 accueil > 0.9 hub solutions > 0.8 produits + contact > 0.7 pédagogique > 0.6 institutionnel > 0.3 légal). Aucune anomalie de priorité détectée sur les pages actuellement listées.

**Recommandation** : aucune, la hiérarchie de `priority` du sitemap existant est bien pensée. Veiller simplement à appliquer la même logique aux ajouts recommandés ci-dessus (points 1 à 3).

---

## 6. Anciennes URLs de redirection correctement exclues du sitemap

**Sévérité : Information (bonne pratique confirmée)**

**Description avec preuve** : `src/routes.tsx` lignes 49-52 définissent des redirections client-side (`<Navigate replace />`) pour `/biofertilisant`, `/boosters`, `/extraits-naturels`, `/biocontrole-vivant` vers leurs URLs `/solutions/...` actuelles. Aucune de ces 4 anciennes URLs n'apparaît dans le sitemap, ce qui est le comportement attendu (on ne référence pas des URLs qui redirigent).

**Recommandation** : aucune action. Vérifier uniquement que ces redirections sont bien des 301 côté serveur/Vercel en plus du `<Navigate>` React (le `<Navigate>` seul ne fonctionne qu'après chargement du JS ; sans redirection HTTP serveur, un crawler qui suit un lien externe historique vers `/boosters` recevra d'abord un 200 avec le contenu de la page NotFound ou de la page cible selon le mode de rendu SSG — à vérifier séparément dans l'audit technique, hors du périmètre sitemap).

---

## Ce qui fonctionne bien

- La hiérarchie de `priority`/`changefreq` reflète correctement l'importance business : accueil (1.0) > hub solutions (0.9) > 4 pages produit + contact (0.8) > page pédagogique biocontrôle (0.7) > pages institutionnelles (0.6) > pages légales obligatoires (0.3, `yearly`).
- Toutes les 13 URLs actuellement présentes dans le sitemap correspondent à des routes réellement définies dans `src/routes.tsx` et répondent en HTTP 200 — aucune entrée morte détectée.
- Les anciennes URLs legacy (`/biofertilisant`, `/boosters`, `/extraits-naturels`, `/biocontrole-vivant`) sont correctement gérées comme redirections et volontairement exclues du sitemap plutôt que dupliquées.
- Le fichier `robots.txt` référence correctement l'URL du sitemap (`Sitemap: https://keprea.com/sitemap.xml`).
