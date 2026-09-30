# Audit GEO (Generative Engine Optimization) — keprea.com

Date : 22/07/2026
Périmètre : accessibilité crawlers IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended), `llms.txt`, citabilité au niveau passage, signaux de marque, structure sémantique.

---

## 1. Production sert encore l'ancien build (`robots.txt` et `llms.txt` pointent vers `keprea.vercel.app`)

**Sévérité : Haute (bloquant pour la découverte), mais déjà connu — en attente de déploiement/infra, pas une régression nouvelle**

**Preuve** :
- Repo local `public/robots.txt` : `Sitemap: https://keprea.com/sitemap.xml` ✅ correct
- Prod `curl -s https://www.keprea.com/robots.txt` :
  ```
  User-agent: *
  Allow: /

  Sitemap: https://keprea.vercel.app/sitemap.xml
  ```
  → pointe encore vers l'ancien domaine Vercel.
- Prod `curl -s https://www.keprea.com/llms.txt` : tous les liens internes du fichier servi pointent vers `https://keprea.vercel.app/...` (ex. `https://keprea.vercel.app/solutions/bioprotection`) alors que le repo local a déjà été corrigé pour utiliser `https://keprea.com/...` partout.
- `ERRORS.md` confirme que ce point est déjà tracké : le rebasculement de domaine a été fait côté code le 13/07/2026, mais il reste un point d'infra ouvert ("régler Vercel pour rediriger www.keprea.com → keprea.com, aujourd'hui c'est l'inverse").

**Recommandation** :
- Vérifier que le dernier build/déploiement Vercel avec le domaine `keprea.com` est bien celui servi sur `www.keprea.com` (pas un déploiement figé antérieur au 13/07).
- Un crawler IA qui suit un lien `llms.txt` ou `sitemap.xml` vers `keprea.vercel.app` peut atterrir sur une origine différente (moins de confiance/autorité, risque de contenu dupliqué détecté). Tant que ce n'est pas corrigé, les citations générées par les moteurs IA à partir de ces fichiers renverront vers la mauvaise URL.
- Ne pas retraiter ce point comme un nouveau bug ; juste confirmer sa résolution dans `ERRORS.md` une fois le déploiement effectif vérifié en prod.

---

## 2. `robots.txt` n'autorise pas explicitement les user-agents IA nommément

**Sévérité : Faible**

**Preuve** : `public/robots.txt` (local et prod) ne contient que `User-agent: *` / `Allow: /`. Aucune ligne dédiée à `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `anthropic-ai`, etc.

Le wildcard `*` avec `Allow: /` autorise déjà techniquement tous ces bots — ce n'est donc pas un blocage. Mais l'absence de mentions explicites signifie :
- Aucun signal visible et vérifiable pour un humain/outil d'audit qui inspecterait rapidement le fichier ("le site autorise-t-il volontairement les crawlers IA ?").
- Impossible de moduler finement (ex. autoriser l'indexation classique mais limiter l'entraînement via `Google-Extended` séparément) si la stratégie évolue.

**Recommandation** : ajouter des lignes explicites pour les principaux crawlers IA, même si elles dupliquent le comportement du wildcard, à titre de signal de transparence :
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: *
Allow: /

Sitemap: https://keprea.com/sitemap.xml
```

---

## 3. `llms.txt` : structure et contenu — bon niveau, quelques manques

**Sévérité : Faible/Moyenne**

**Preuve (contenu, `public/llms.txt` local)** :
- Format conforme à la convention `llms.txt` (titre H1, citation en blockquote, sections H2 avec listes de liens annotés).
- Le résumé en tête est dense et citable tel quel : *"Keprea conçoit et produit des biosolutions agricoles à base d'insectes élevés en France (Dole, Jura) : biocontrôle, biopesticides, biostimulants et biofertilisants..."* — contient qui/quoi/où/comment en une phrase, exactement le format qu'un LLM peut extraire et reformuler sans ambiguïté.
- Mentionne le cadre réglementaire (règlement UE 2018/848, article L.253-6) dès le deuxième paragraphe — bon ancrage factuel vérifiable.
- Couvre les 4 gammes produits + pages entreprise + mentions légales/confidentialité.

**Manques** :
- Pas de section listant les autres pages du sitemap absentes du fichier (`/innovation` est dans `sitemap.xml` mais absent de `llms.txt`) — à ajouter pour cohérence.
- Aucune date de dernière mise à jour affichée dans le fichier lui-même (certains moteurs vérifient la fraîcheur de `llms.txt` via le header HTTP `Last-Modified`, ce qui est déjà correct côté serveur, mais un commentaire de version en bas de fichier faciliterait le diagnostic humain).
- Pas de lien vers une éventuelle page listant des données chiffrées/preuves (pas de page "chiffres clés" ou "presse" en soi) : la page Contact presse existe (voir point 5) mais n'est listée nulle part.

**Recommandation** : ajouter `/innovation` à la section "Comprendre le biocontrôle" ou une nouvelle section "Innovation & R&D", et envisager un commentaire `<!-- last reviewed: YYYY-MM-DD -->` en pied de fichier.

---

## 4. Citabilité au niveau passage — très bon sur `/pourquoi-le-biocontrole`, à généraliser

**Sévérité : Faible (point positif à répliquer, pas un bug)**

**Preuve** : `src/contexts/LanguageContext.tsx` (clés `pourquoi.*`) montre un traitement exemplaire pour le GEO :
- Chiffres cités avec source explicite et datée : *"Chiffres tiers cités à titre indicatif, sources : agriculture.gouv.fr (stratégie Écophyto 2030, mai 2024), Alliance Biocontrôle (Baromètre du Biocontrôle 2024), Légifrance (article L.253-6..., règlement (CE) n° 1107/2009...), IBMA (enquête membres 2024...)"* — accordéon "Sources et méthodologie" visible et présent dans le DOM (donc lisible par un crawler qui ne rend pas le JS caché, puisque le SSG produit le HTML statique).
- Définitions nettes et autonomes ("Le biocontrôle regroupe l'ensemble des méthodes...") — formulées comme des phrases capables de répondre seules à une requête ("Qu'est-ce que le biocontrôle ?"), exactement le format que Google AI Overviews/Perplexity extraient en priorité.
- Textes réglementaires cités avec référence précise (article L.253-6 du Code rural, règlement (CE) 1107/2009, règlement (UE) 2018/848) — permet la vérifiabilité, un facteur de confiance pour les moteurs génératifs.
- FAQ structurée avec JSON-LD `FAQPage` (`faqJsonLd`) en plus du texte visible — doublon utile (le JSON-LD est repris tel quel par les moteurs, le texte visible sert de filet si le JSON-LD n'est pas exploité).

**Point d'attention** : les pages produits examinées (`Boosters.tsx`) reposent sur des blocs `whatIs`/`micropeptides` sans visibilité directe (dans ce fichier) sur un sourçage équivalent (pas de "données internes Keprea" ou de chiffres attribués dans les extraits consultés). `ERRORS.md` indique que les stats produits ont déjà été reformulées "données internes Keprea" lors de l'audit du 02/07/2026 — bon réflexe (évite d'attribuer à tort des chiffres tiers), mais cela reste moins citable qu'une source externe vérifiable pour un moteur IA en quête de preuve.

**Recommandation** : répliquer le patron de `/pourquoi-le-biocontrole` (définition autonome + statistique sourcée + accordéon "Sources") sur au moins une section de chaque page produit (Boosters, Biofertilisant, ExtraitsNaturels, BiocontroleVivant), même pour des données internes ("essais internes Keprea 2025-2026, protocole X") — la citabilité vient autant du format déclaratif que de l'origine externe.

---

## 5. Mention de marque en tête de page — absente du H1/sous-titre de la page d'accueil

**Sévérité : Moyenne**

**Preuve** : `src/components/Hero.tsx` — le H1 de la page d'accueil est *"La nature au service de vos cultures"* et le sous-titre *"Protégez, stimulez et nourrissez vos cultures grâce à la puissance des insectes."* Le mot "Keprea" n'apparaît dans aucun des deux — seul le tag eyebrow au-dessus indique "Biosolutions agricoles" (générique, pas la marque).

Le nom "Keprea" est bien présent dans le `<title>` et la meta `description` (`Index.tsx`), et dans le JSON-LD `Organization` (`index.html`), donc les moteurs qui lisent le `<head>` l'identifient correctement. Mais un LLM qui fait de l'extraction de passage sur le contenu visible du corps de page (ce que font plusieurs pipelines de RAG/AI Overviews qui pondèrent le texte visible au-dessus du repli) peut manquer l'association immédiate "qui = Keprea" sur le premier écran.

**Recommandation** : intégrer explicitement "Keprea" dans l'eyebrow ou le sous-titre du hero, par exemple : *"Keprea — Biosolutions agricoles"* en eyebrow, ou ouvrir le sous-titre par *"Keprea protège, stimule et nourrit vos cultures..."*. Changement mineur, cohérent avec les conventions de longueur de CLAUDE.md (pas de contrainte de caractères sur un H1/eyebrow).

---

## 6. Incohérence d'URL de logo entre les blocs JSON-LD

**Sévérité : Faible**

**Preuve** :
- `index.html`, JSON-LD `Organization` : `"logo": "https://keprea.com/logo-keprea.png"`
- `src/lib/schema.ts`, fonction `articleJsonLd` (utilisée sur `/pourquoi-le-biocontrole` notamment), champ `publisher.logo` : `"https://keprea.com/lovable-uploads/eprea_Main_Logo.png"`

Les deux fichiers existent bien dans `public/` (pas de lien mort), mais ce sont deux images différentes référencées comme "le logo Keprea" selon le schéma consulté. Pour la résolution d'entité (Knowledge Graph Google, vérification de cohérence par les moteurs IA), une même organisation devrait toujours pointer vers la même image de logo canonique.

**Recommandation** : unifier sur une seule URL de logo (idéalement `https://keprea.com/logo-keprea.png`, déjà utilisée comme référence principale) dans `articleJsonLd` (`src/lib/schema.ts` ligne 82).

---

## 7. Organisation : pas de `sameAs`, pas de `foundingDate`

**Sévérité : Faible**

**Preuve** : Le JSON-LD `Organization` dans `index.html` contient `name`, `url`, `logo`, `description`, `address` — mais aucun champ `sameAs` (aucun lien LinkedIn/réseau social trouvé nulle part dans `src/`, recherche `linkedin|sameAs|twitter.com|instagram` infructueuse) ni `foundingDate` (alors que `QuiSommesNous.tsx` affiche "2024" comme statistique de fondation dans le hero de la page).

**Recommandation** :
- Si Keprea a une page LinkedIn/autre réseau, l'ajouter en `sameAs` dans le JSON-LD `Organization` — c'est un des signaux les plus utilisés par les moteurs génératifs et les knowledge graphs pour confirmer l'identité d'une entreprise.
- Ajouter `"foundingDate": "2024"` à l'objet `Organization`, cohérent avec le contenu déjà affiché sur `/qui-sommes-nous`.

---

## 8. Contenu des onglets France/Europe masqué en `display:none` — risque mineur pour l'extraction

**Sévérité : Faible**

**Preuve** : `src/pages/PourquoiBiocontrole.tsx` (section stats), les deux blocs `role="tabpanel"` utilisent la classe Tailwind `hidden` (donc `display: none`) pour le panneau inactif : `` `grid sm:grid-cols-2 gap-6 mb-8${statsScope === "france" ? "" : " hidden"}` ``. Le HTML statique du SSG contient bien les deux jeux de statistiques dans le DOM (bon point : un crawler qui lit le HTML brut sans exécuter le JS les voit toujours), mais certains pipelines d'extraction de passage traitent le contenu `display:none` comme non pertinent/non visible et le déprioritisent.

**Recommandation** : pas de changement structurel nécessaire (le contenu est bien présent et indexable), mais s'assurer qu'au moins une statistique clé de chaque scope (France et Europe) soit également présente dans un texte toujours visible ailleurs sur la page (ex. dans `pourquoi.hero.stat3` qui affiche déjà "1,6 Md€" — c'est déjà en partie le cas via les stats du `PageHero`).

---

## Ce qui fonctionne bien

- **Fichier `llms.txt` présent et bien structuré** : résumé en tête citable en une phrase (qui/quoi/où), sections logiques, liens annotés avec description courte par page — exactement le format recommandé par la convention `llms.txt`.
- **Contenu sourcé et daté sur `/pourquoi-le-biocontrole`** : références légales précises (article L.253-6, règlement (CE) 1107/2009, règlement (UE) 2018/848) et accordéon "Sources et méthodologie" citant agriculture.gouv.fr, Alliance Biocontrôle, Légifrance, IBMA avec dates — un des meilleurs exemples de citabilité vus dans l'audit, à généraliser.
- **JSON-LD riche et cohérent sur le fond** : `Organization` (accueil), `BreadcrumbList`, `Article`, `FAQPage`, `Service` déployés sur les pages produits et la page pourquoi-biocontrôle — bonne couverture structurée pour l'ingestion directe par les moteurs IA (notamment les FAQ, très utilisées par AI Overviews/Perplexity).
- **Hiérarchie Hn respectée** : un seul `<h1>` par page (vérifié via `Hero.tsx` et `PageHero.tsx`), sous-titres H2/H3 correctement imbriqués, pas de saut de niveau constaté sur les pages inspectées.
- **Génération statique (SSG via `vite-react-ssg`)** : tout le contenu textuel (y compris FAQ en accordéon, onglets stats) est présent dans le HTML servi sans dépendre de l'exécution JS — un net avantage pour les crawlers IA qui ne rendent pas systématiquement le JavaScript (GPTBot notamment).
- **Robots.txt propre et non restrictif** : pas de blocage accidentel de sections du site, un seul `Disallow` absent = accessibilité totale une fois le domaine de prod aligné (point 1).
