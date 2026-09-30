# Audit Schema.org / JSON-LD — www.keprea.com

Date de l'audit : 22/07/2026
Périmètre : `src/lib/schema.ts`, `src/lib/breadcrumb.ts`, usage dans `src/pages/*.tsx`, et vérification live sur `https://www.keprea.com` (accueil, `/solutions`, `/solutions/bioprotection`, `/qui-sommes-nous`, `/contact`, `/ressources`).

---

## 1. CRITIQUE — Le site en production sert un build obsolète : tout le JSON-LD (et les canonical/og:url) pointe encore vers `keprea.vercel.app`, pas `keprea.com`

**Sévérité : Critique (bloquant SEO)**

### Preuve

Le code source actuel (HEAD, commit `47f980d` du 13/07/2026) est cohérent et à jour :
- `src/lib/schema.ts:1` et `src/lib/breadcrumb.ts:1` : `const SITE_URL = "https://keprea.com";`
- `index.html:31-32` : Organization JSON-LD avec `"url": "https://keprea.com"`, `"logo": "https://keprea.com/logo-keprea.png"`
- Toutes les pages (`Index.tsx`, `BiocontroleVivant.tsx`, `SolutionsHub.tsx`, etc.) : `<link rel="canonical" href="https://keprea.com/..." />`

`ERRORS.md` (ligne 49) confirme explicitement que cette bascule a été faite et vérifiée le 13/07/2026 : *"les 63 références keprea.vercel.app ... rebasculées sur https://keprea.com"*.

Mais en interrogeant le site réellement servi à `https://www.keprea.com`, le JSON-LD et les balises canoniques renvoient encore l'ancien domaine Vercel :

Sur l'accueil (`curl https://www.keprea.com/`) :
```html
<link data-rh="true" rel="canonical" href="https://keprea.vercel.app/">
<meta data-rh="true" property="og:url" content="https://keprea.vercel.app/">
<meta property="og:image" content="https://keprea.vercel.app/lovable-uploads/eprea_Main_Logo_800x600.jpg">
```
```json
{"@context":"https://schema.org","@type":"Organization","name":"Keprea",
 "url":"https://keprea.vercel.app",
 "logo":"https://keprea.vercel.app/logo-keprea.png", ...}
```

Sur `/solutions` :
```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Accueil","item":"https://keprea.vercel.app/"},
  {"@type":"ListItem","position":2,"name":"Solutions","item":"https://keprea.vercel.app/solutions"}]}
```

Le même comportement est confirmé sur `/qui-sommes-nous`, `/contact`, `/ressources`, `/solutions/bioprotection` — chaque page a 9 à 12 occurrences de `keprea.vercel.app` et 3 seulement de `keprea.com` (celles qui restent en dur dans le texte visible, pas dans les balises techniques).

En-têtes HTTP de la page servie :
```
Last-Modified: Tue, 21 Jul 2026 10:19:35 GMT
X-Vercel-Cache: HIT
Server: Vercel
```
Le build a donc été régénéré le 21/07 (8 jours après le commit de correction du 13/07) mais **sans intégrer le fix de domaine** — ce qui exclut un simple souci de cache CDN et pointe vers un problème de build/déploiement (mauvaise branche déployée, build Vercel qui pointe sur un commit antérieur, variable d'environnement de build qui override `SITE_URL`, ou un déploiement figé "Production" jamais re-promu depuis le merge).

### Impact

- Google indexe potentiellement les pages avec un **canonical pointant vers un autre domaine** (`keprea.vercel.app`) que celui réellement visité (`www.keprea.com`) → risque de désindexation de `keprea.com` au profit de l'ancien domaine, ou de contenu dupliqué non consolidé.
- Toutes les données structurées (Organization, BreadcrumbList, FAQPage, Service, Article) déclarent des URLs sur un domaine qui n'est plus la propriété affichée dans la barre d'adresse → Google Rich Results peut soit ignorer le balisage, soit l'associer au mauvais domaine.
- Contredit directement le journal de correction dans `ERRORS.md`/`MEMORY.md` qui affirme la bascule "faite et vérifiée" — la vérification n'a manifestement porté que sur le code source, pas sur le déploiement réel.

### Recommandation

1. Vérifier dans le dashboard Vercel quel commit est réellement déployé en Production pour `www.keprea.com` (`Deployments` → commit hash). Comparer avec `git log` local (`47f980d`).
2. Forcer un redéploiement propre (sans cache de build) du dernier commit sur la branche de production.
3. Une fois redéployé, revalider avec le même test `curl` sur les 6 URLs de cet audit, en particulier en cherchant `grep -c "vercel.app"` (doit retourner 0 dans les balises techniques).
4. Ajouter cette vérification (`curl | grep vercel.app`) à la checklist de déploiement pour éviter une régression silencieuse à l'avenir.
5. Mettre à jour `ERRORS.md` : la ligne actuelle "Fait (13/07/2026)" est incorrecte au niveau du site live — à corriger en "Fait dans le code, **pas encore effectif en production**" tant que le point 3 n'est pas validé.

---

## 2. Majeur — Aucun schema `Product` sur les 4 gammes de solutions ni sur les fiches techniques téléchargeables

**Sévérité : Majeure (opportunité manquée)**

### Description

Les 4 pages produits (`BiocontroleVivant.tsx`, `Biofertilisant.tsx`, `Boosters.tsx`, `ExtraitsNaturels.tsx`) n'utilisent que `breadcrumbJsonLd`, `faqJsonLd` et `serviceJsonLd` (voir `src/lib/schema.ts:24-50`). `serviceJsonLd` modélise chaque gamme comme un `Service` générique fourni par une `Organization`, ce qui est défendable pour du B2B agricole sans vente en ligne directe, mais cela laisse de côté le potentiel `Product` (résultats enrichis produit, apparition dans Google Images/Shopping-like panels pour requêtes "biocontrôle pucerons", etc.).

Les fiches techniques (`FicheTechniqueDetail.tsx:41-46`) — qui sont les pages les plus proches d'une fiche produit réelle (nom, composition, cultures cibles, PDF téléchargeable dans `src/data/technicalSheets`) — n'ont **que** `breadcrumbJsonLd`. Aucun `Product`, `DigitalDocument` ou `TechArticle` schema.

### Recommandation

Ajouter un schema `Product` (sans `offers`/prix puisqu'il n'y a pas de vente en ligne — Google accepte un `Product` factuel sans offre, même si certains rich results resteront indisponibles) sur les pages gammes et fiches techniques. Exemple pour `FicheTechniqueDetail.tsx` :

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nom du produit (ex: BoostBio)",
  "description": "Composition, mode d'application, cultures cibles",
  "brand": { "@type": "Brand", "name": "Keprea" },
  "category": "Biocontrôle agricole",
  "url": "https://keprea.com/ressources/fiches-techniques/{slug}"
}
```

Prévoir une fonction `productJsonLd()` dans `src/lib/schema.ts` sur le même modèle que `serviceJsonLd`, pour rester cohérent avec le pattern existant (factuel, pas de prix/notes fictives — conforme à la règle déjà en place dans le commentaire de `serviceJsonLd`: *"Factual fields only: no offers, price, or ratings"*).

---

## 3. Mineur — `Organization` sans `sameAs` (réseaux sociaux)

**Sévérité : Mineure**

### Description

Le schema `Organization` dans `index.html:26-42` ne contient pas de champ `sameAs`. Aucune présence sur les réseaux sociaux (LinkedIn, etc.) n'est d'ailleurs liée nulle part sur le site (recherche `linkedin|facebook|twitter|instagram` dans `src/` : aucun résultat).

### Recommandation

Si Keprea a une page LinkedIn (fréquent pour une startup B2B agri-tech en recherche de crédibilité), l'ajouter au Footer/Navigation **et** au JSON-LD :

```json
"sameAs": [
  "https://www.linkedin.com/company/keprea",
  "https://www.pappers.fr/entreprise/... (si pertinent)"
]
```

Sinon, ce point est à traiter une fois les profils sociaux créés — pas bloquant aujourd'hui.

---

## 4. Mineur — Pas de schema `WebSite` avec `SearchAction`, pas de `LocalBusiness`

**Sévérité : Mineure**

### Description

- Aucun schema `WebSite` (sitelinks searchbox) — impact limité vu la taille du site (~15 pages), mais gratuit à ajouter.
- Le site utilise `Organization` + `PostalAddress` (Dole, Jura) mais pas `LocalBusiness`. C'est cohérent : Keprea est un site de **production/B2B agricole**, pas un commerce recevant du public — `Organization` est le bon choix, `LocalBusiness` induirait Google en erreur (horaires, avis Google Maps, etc. non pertinents pour ce business model). Aucune action requise ici, juste à confirmer que c'est un choix assumé et pas un oubli.

### Recommandation

`WebSite` optionnel, faible priorité :
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Keprea",
  "url": "https://keprea.com"
}
```
Ne pas ajouter `SearchAction` tant qu'il n'y a pas de moteur de recherche interne sur le site.

---

## 5. Mineur — `SITE_URL` dupliqué entre deux fichiers

**Sévérité : Mineure (dette technique, pas SEO à proprement parler)**

### Description

`const SITE_URL = "https://keprea.com";` est défini à l'identique dans `src/lib/schema.ts:1` et `src/lib/breadcrumb.ts:1`. Cette duplication est précisément ce qui a rendu la bascule de domaine du 13/07/2026 plus fragile à vérifier (deux sources de vérité au lieu d'une) — et n'explique pas le problème n°1 (qui est un problème de déploiement, pas de code), mais mérite d'être corrigé pour l'hygiène du code.

### Recommandation

Extraire `SITE_URL` dans un seul fichier partagé (ex: `src/lib/constants.ts`) importé par `schema.ts` et `breadcrumb.ts`.

---

## 6. Validité JSON et cohérence des types

**Sévérité : Information (aucun problème détecté ici)**

- Les 4 fonctions (`faqJsonLd`, `serviceJsonLd`, `articleJsonLd`, `breadcrumbJsonLd`) génèrent le JSON via `JSON.stringify()` à partir d'objets JS typés (interfaces TypeScript `FaqItem`, `ServiceJsonLdOptions`, `ArticleJsonLdOptions`, `BreadcrumbItem`) — donc **aucun risque de JSON malformé par erreur de frappe manuelle**. C'est un vrai point fort architectural.
- Champs requis Google présents : `Organization` a `name` + `url` (+ `logo`, `address`, `description`) ; `BreadcrumbList` a `position`/`name`/`item` sur chaque `ListItem` ; `FAQPage` a `mainEntity`/`Question`/`acceptedAnswer` correctement imbriqués ; `Article` a `headline`, `datePublished`, `dateModified`, `author`, `publisher` avec `logo` en `ImageObject` (requis par Google pour les rich results Article).
- Un seul bémol : la cohérence des URLs internes au schema (`SITE_URL` + `path`) est correcte **dans le code source**, mais complètement invalidée par le problème n°1 en production (domaine `vercel.app` partout).

---

## Ce qui fonctionne bien

- **Couverture large et cohérente du BreadcrumbList** : quasiment toutes les pages (`SolutionsHub`, les 4 pages gammes, `ContactPage`, `FicheTechniqueDetail`, `FichesTechniques`, `MentionsLegales`, `PolitiqueConfidentialite`, `InnovationPage`, `Ressources`, `QuiSommesNous`, `PourquoiBiocontrole`, `NotreProduction`) injectent un `BreadcrumbList` avec le bon chemin hiérarchique — bon point pour l'affichage des breadcrumbs dans les résultats Google et pour la compréhension de l'architecture du site par les crawlers.
- **FAQPage bien structuré et réellement utilisé pour du contenu Q&A existant** (pages gammes + `PourquoiBiocontrole`), pas un remplissage artificiel — les FAQ sont tirées du même contenu textuel affiché à l'utilisateur (`useLanguage`/`t()`), donc pas de risque de contenu caché différent de ce qui est visible (règle Google respectée).
- **Article schema bien formé** sur `PourquoiBiocontrole.tsx` avec `datePublished`/`dateModified` réalistes et cohérents avec le contenu (voir aussi `ERRORS.md` qui documente l'enrichissement de cette page de 335 à 1055 mots), `publisher.logo` en `ImageObject` conforme aux exigences Google pour l'éligibilité Article rich result.
- **Génération JSON-LD 100% programmatique** via `JSON.stringify()` sur des interfaces TypeScript typées : élimine toute la classe d'erreurs "JSON-LD invalide en prod" qu'on voit fréquemment sur les sites où le JSON est écrit à la main dans le JSX.
- **Choix de `Service` plutôt que `Product`+`offers`/`AggregateRating` fictifs** sur les pages gammes : le commentaire explicite dans `schema.ts` ("Factual fields only: no offers, price, or ratings") montre une discipline anti-spam-schema rare et saine — évite le risque de pénalité Google pour données structurées trompeuses (avis/notes non vérifiables).
- **Séparation propre des responsabilities** : `breadcrumb.ts` et `schema.ts` sont deux petits modules avec une fonction par type de schema, faciles à auditer et à étendre (contrairement à un gros fichier monolithique ou du JSON-LD dupliqué à la main dans chaque page).
