# Audit SEO technique — keprea.com (production)

Date de l'audit : 22/07/2026
Méthode : `curl -sI` / `curl -s` sur les URLs de production réelles + lecture du code source local (`src/pages`, `src/lib/schema.ts`, `src/lib/breadcrumb.ts`, `index.html`, `vercel.json`, `public/*`).

---

## Finding 1 — Le domaine canonique déclaré (apex `keprea.com`) redirige lui-même vers `www.keprea.com`

**Sévérité : High**

**Description**
Tout le code source (constante `SITE_URL = "https://keprea.com"` dans `src/lib/schema.ts:1` et `src/lib/breadcrumb.ts:1`, canonicals dans chaque page, `index.html` og:image/JSON-LD, `public/sitemap.xml`, `public/llms.txt`) utilise systématiquement l'apex **sans www** comme domaine de référence. Un commentaire dans `index.html:24` confirme l'intention :
```
<!-- Bascule domaine effectuée (13/07/2026) : url/logo/images/canonical alignés sur https://keprea.com (domaine définitif). -->
```
Or, en production, l'apex redirige en 308 vers la version **www** :
```
$ curl -sI https://keprea.com/solutions/bioprotection
HTTP/1.1 308 Permanent Redirect
Location: https://www.keprea.com/solutions/bioprotection
```
Et la page réellement servie (200 OK, contenu complet) est `https://www.keprea.com/...`. Autrement dit : chaque canonical, chaque URL de sitemap, chaque URL de schema.org JSON-LD pointe vers une adresse qui elle-même redirige ailleurs (redirect hop inutile), au lieu de pointer directement vers l'URL finale réellement servie. Ce n'est pas le même problème que le `keprea.vercel.app` (déjà connu, correctif en attente de déploiement) : même une fois ce correctif déployé, ce conflit apex/www subsistera puisqu'il touche la configuration de domaine Vercel, pas seulement les chaînes littérales dans le code.

**Recommandation**
Choisir une seule variante définitive et aligner tout :
- Si `www.keprea.com` doit être la version canonique servie (ce qui semble être le cas vu que c'est elle qui répond 200) : mettre à jour `SITE_URL` dans `schema.ts`/`breadcrumb.ts`, tous les canonicals codés en dur dans les pages, `index.html`, `public/robots.txt`, `public/sitemap.xml` et `public/llms.txt` pour utiliser `https://www.keprea.com`.
- Sinon, si l'apex sans www doit rester la version canonique (comme l'indique le commentaire du 13/07), reconfigurer le domaine dans le dashboard Vercel pour que ce soit `www.keprea.com` qui redirige vers l'apex, et non l'inverse.
Dans tous les cas, le domaine servant le contenu final (code 200) doit être identique au domaine des canonicals/sitemap/schema — aucune redirection ne doit s'intercaler.

---

## Finding 2 — La page `/solutions` n'a aucun `<h1>`

**Sévérité : Medium**

**Description**
`curl` sur `https://www.keprea.com/solutions` en production ne renvoie aucune balise `<h1>` (0 occurrence). Vérification du code : `src/pages/SolutionsHub.tsx` délègue l'affichage au composant `src/components/Solutions.tsx`, dont la seule balise de titre est un `<h2>` (ligne 91 : `<h2 className="text-3xl md:text-4xl font-extrabold ...">`). Il n'y a de `<h1>` nulle part sur cette page — ni dans `SolutionsHub.tsx` ni dans `Solutions.tsx`. C'est la seule des 14 pages auditées à présenter ce problème (toutes les autres pages contrôlées ont exactement 1 `<h1>`).

**Recommandation**
Ajouter un `<h1>` visible sur `/solutions` (par exemple transformer le titre actuel en `<h2>` du composant `Solutions.tsx` en `<h1>` lorsqu'il est utilisé comme page autonome, ou ajouter un `<h1>` dédié dans `SolutionsHub.tsx` juste avant le composant `<Solutions />`).

---

## Finding 3 — Aucune Content-Security-Policy (CSP)

**Sévérité : Medium**

**Description**
Les en-têtes de sécurité `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` et `Strict-Transport-Security` sont bien présents (confirmé via `curl -sI https://www.keprea.com/`), mais aucun en-tête `Content-Security-Policy` n'est renvoyé, et `vercel.json` ne le configure pas non plus (bloc `headers` ne contient que les 4 en-têtes cités plus haut). Ce n'est pas un problème SEO direct, mais cela affaiblit la posture de sécurité globale du site (protection XSS/injection) et peut indirectement affecter la confiance/l'E-E-A-T perçue par des outils d'audit tiers.

**Recommandation**
Ajouter un en-tête `Content-Security-Policy` dans `vercel.json`, même en mode `report-only` pour commencer, en listant explicitement les origines de scripts/styles/images utilisées (Vercel, polices, éventuels scripts tiers de consentement cookies).

---

## Finding 4 — `/ressources` en `noindex` mais lié en navigation ; `/ressources/fiches-techniques` indexable mais absent du sitemap

**Sévérité : Low**

**Description**
- `/ressources` renvoie `<meta name="robots" content="noindex, follow">` (confirmé en prod et dans le code `src/pages/Ressources.tsx:29`), ce qui est cohérent avec son état actuel : une page "à venir" avec des cartes "Prochainement" (aucune fiche technique n'est encore publiée en dehors du lien vers `/ressources/fiches-techniques`). Ce comportement semble intentionnel et bien fait — la page est aussi absente de `public/sitemap.xml`, ce qui est cohérent.
- En revanche, `/ressources/fiches-techniques` (curl confirme HTTP 200, pas de meta robots noindex, titre et canonical présents pointant vers `https://keprea.vercel.app/ressources/fiches-techniques`) est indexable mais n'apparaît dans aucun sitemap local ou déployé.

**Recommandation**
Une fois le contenu de `/ressources/fiches-techniques` jugé prêt pour l'indexation, l'ajouter à `public/sitemap.xml` (et à `public/llms.txt` si pertinent pour la découverte par les IA). Vérifier aussi si des pages de détail (`FicheTechniqueDetail.tsx`) doivent y figurer individuellement.

---

## Finding 5 — Multilingue purement côté client, sans URLs ni hreflang dédiés

**Sévérité : Info**

**Description**
`src/contexts/LanguageContext.tsx` gère 5 langues (fr/en/es/pt/de) via un état React côté client (pas de changement d'URL, pas de `lang` dynamique — `<html lang="fr">` est fixe dans le HTML prérendu, confirmé par `grep` sur le HTML statique de la page d'accueil). Aucune balise `hreflang` n'est présente sur aucune page. Ce n'est pas un bug : Google ne verra jamais que la version française, ce qui est cohérent avec le fait qu'il n'existe qu'un seul jeu d'URLs. Mais cela signifie que le contenu traduit n'a aucune valeur SEO/GEO propre (pas de pages crawlables en anglais, espagnol, etc.).

**Recommandation**
Si l'objectif est un jour de capter du trafic international, prévoir une architecture d'URLs par langue (`/en/...`, etc.) avec balises `hreflang` réciproques plutôt qu'un simple toggle client-side. Sinon, aucune action requise — juste garder ce point à l'esprit avant d'investir du contenu dans les traductions existantes.

---

## Finding 6 — robots.txt / sitemap.xml / llms.txt déployés pointent encore vers `keprea.vercel.app`

**Sévérité : Info (correctif en attente de déploiement, déjà identifié)**

**Description**
Confirmé en production :
```
$ curl -s https://www.keprea.com/robots.txt
Sitemap: https://keprea.vercel.app/sitemap.xml
$ curl -s https://www.keprea.com/sitemap.xml | head -5
<loc>https://keprea.vercel.app</loc>
```
Le code local (`public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`) est déjà corrigé pour utiliser `https://keprea.com` — il ne s'agit donc pas d'un nouveau problème, seulement d'un déploiement en attente. À noter : le correctif ne résoudra que le `vercel.app` → `keprea.com`, pas le conflit apex/www décrit au Finding 1, qui touche un périmètre plus large (canonicals des pages, JSON-LD, `index.html`) et une couche de configuration DNS/Vercel distincte.

**Recommandation**
Déployer la correction déjà présente dans le repo, et en profiter pour traiter le Finding 1 dans la même passe puisque les deux touchent le même sujet de domaine canonique.

---

## Ce qui fonctionne bien

- **Prérendu SSG fonctionnel** : le contenu textuel (titres, paragraphes, H1) est bien présent dans le HTML brut renvoyé par `curl`, sans dépendre de l'exécution JS — vérifié sur la page d'accueil (H1 "La nature au service de vos cultures" et tout le texte des sections présents dans le HTML statique).
- **Toutes les 14 URLs testées répondent 200 OK** en production, aucune 404 inattendue, aucune erreur 5xx.
- **Structure Hn correcte** sur 13 des 14 pages testées (exactement un `<h1>` par page), seule `/solutions` fait exception (Finding 2).
- **Meta `title` et `description` uniques et bien dimensionnés** sur toutes les pages testées, pas de doublons détectés entre pages.
- **Redirections 301/308 propres** : apex → www, HTTP → HTTPS, et les anciennes URLs (`/biofertilisant`, `/boosters`, `/extraits-naturels`, `/biocontrole-vivant`) redirigent en 308 permanent vers leurs nouvelles URLs sous `/solutions/...` (`vercel.json`), ce qui protège le jus SEO existant.
- **En-têtes de sécurité de base présents** : HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy — confirmés par `curl -sI` sur la prod (seule la CSP manque, cf. Finding 3).
- **URLs en kebab-case français cohérentes** sur tout le site (`/pourquoi-le-biocontrole`, `/qui-sommes-nous`, `/notre-production`, etc.).
- **Structured data (JSON-LD) riche et cohérent** : `BreadcrumbList` sur toutes les pages internes, `FAQPage` sur les pages solutions et pourquoi-le-biocontrôle, `Service`/`Organization`/`Article` selon le type de page — bien structuré et varié.
- **Alt text présent sur toutes les images** vérifiées sur la page d'accueil, y compris les logos et l'image de production.
- **404 propre** : une URL inexistante (`/solutions/wrongurl`) renvoie bien un code HTTP 404 (page Vercel NOT_FOUND), pas un fallback SPA en 200.
