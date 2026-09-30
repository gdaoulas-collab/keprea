# Audit SXO (Search Experience Optimization) — Keprea.com

Analyse du parcours découverte → conviction → contact tel que décrit dans README.md, et de l'adéquation entre le type de page et l'intention de recherche probable pour un agriculteur/distributeur cherchant des alternatives aux pesticides chimiques.

---

## 1. Le composant "Testimonials" ne contient aucun témoignage

**Sévérité : Critique**

**Description avec preuve**
Le fichier `src/components/Testimonials.tsx` est importé dans `src/pages/Index.tsx:7` avec le commentaire `{/* 5. Preuve sociale */}` (ligne 45). Or le composant exporté s'appelle en réalité `TrustSection` (`src/components/Testimonials.tsx:29`) et ne contient :
- aucune citation d'agriculteur,
- aucun nom, exploitation ou photo,
- uniquement des statistiques de crédibilité génériques (`testimonials.stat1.value` etc., lignes 9-14) et deux "guarantee cards" (lignes 16-27).

C'est exactement le problème identifié comme priorité absolue par CLAUDE.md et README.md ("Priorité absolue : ajouter des témoignages d'agriculteurs réels" / "Intégrer des preuves sociales réelles (témoignages agriculteurs — levier n°1)"). Le composant occupe l'emplacement prévu pour la preuve sociale dans le parcours de conversion mais ne délivre pas la preuve elle-même — un chercheur/agriculteur qui arrive à cette étape du scroll pour se faire une opinion ("est-ce que ça marche vraiment chez d'autres exploitants ?") ne trouve que des chiffres non attribués, sans aucune source vérifiable.

**Recommandation**
Renommer le composant en cohérence avec son contenu réel (`TrustSection`) et créer un composant `Testimonials` séparé, alimenté par de vrais témoignages (citation + nom + exploitation + culture concernée, avec photo si possible). Tant que les témoignages réels ne sont pas collectés, indiquer clairement la nature des chiffres affichés (méthodologie/source) plutôt que de laisser un intitulé "Preuve sociale" sans preuve nominative.

---

## 2. Page "Pourquoi le biocontrôle ?" bien calée sur l'intention informationnelle — mais CTA vendeur trop précoce dans l'architecture du site

**Sévérité : Faible (point positif à nuancer)**

**Description avec preuve**
`src/pages/PourquoiBiocontrole.tsx` est structurée comme une page pédagogique (définition, cadre réglementaire FR/UE avec onglets stats, FAQ avec `faqJsonLd`, `articleJsonLd`) : c'est le bon type de page pour une requête informationnelle du type "pourquoi utiliser le biocontrôle" ou "biocontrôle vs pesticides chimiques". C'est un point fort.

Cependant, le lien d'entrée principal vers cette page se trouve dans `src/components/Solutions.tsx:100-119`, sous forme d'un simple bandeau "banner" positionné **après** la grille de 4 produits vendus (implicite dans le DOM, bien que visuellement avant — lignes 99-119 précèdent la grille lignes 122-180 mais le hub `/solutions` reste avant tout une page de vente). Un visiteur en intention informationnelle pure (ex. recherche Google "biocontrôle définition" ou "alternative pesticides chimiques") qui atterrit directement sur `/solutions` (hub produit, cf. `src/pages/SolutionsHub.tsx`) est en réalité mis en face d'un mur de vente avant la ressource pédagogique.

**Recommandation**
Vérifier le maillage interne entrant sur `/pourquoi-le-biocontrole` : s'assurer que les mots-clés informationnels ciblent bien directement cette URL (title/meta déjà corrects, cf. lignes 50-53) plutôt que `/solutions`. Envisager un lien réciproque plus visible depuis `/solutions` vers `/pourquoi-le-biocontrole` en tête de page (pas seulement en bandeau au milieu de la grille produits).

---

## 3. Mismatch d'intention : page "Biopesticides" vendue alors que le produit est "en cours d'homologation"

**Sévérité : Élevée**

**Description avec preuve**
`src/pages/ExtraitsNaturels.tsx` cible via son `<title>` (ligne 31) et sa meta description (ligne 32) une requête clairement transactionnelle/commerciale : "Biopesticides Naturels Keprea | Extraits d'Insectes" avec la promesse "protéger vos cultures". Mais la meta description précise elle-même "en cours d'homologation" (ligne 32), et dans `src/components/Solutions.tsx:49` la carte associée est marquée `available: false` (badge "pipeline" affiché à l'utilisateur, lignes 150-161).

Un agriculteur cherchant une alternative aux pesticides chimiques dans l'urgence (ravageur en cours d'attaque) arrive sur une page au ton commercial classique (header plein cadre, CTA "produit") pour découvrir qu'il ne peut en réalité pas acheter ce produit maintenant. C'est un mismatch entre l'intention (résoudre un problème immédiat) et ce que la page permet réellement (rien d'actionnable à court terme).

**Recommandation**
Positionner explicitement cette page comme une page "pipeline / à venir" dès le H1 et le hero (pas seulement dans un badge sur le hub), avec un CTA de conversion adapté ("être informé de la disponibilité" / "recevoir un échantillon test" plutôt que "contactez-nous" générique). Envisager un schema `Product` avec `availability: PreOrder` si applicable, pour éviter la déception au clic depuis Google et limiter le taux de rebond sur cette page.

---

## 4. Parcours de conversion globalement cohérent sur la page d'accueil

**Sévérité : Information (point positif)**

**Description avec preuve**
`src/pages/Index.tsx` suit une séquence en 9 blocs commentés explicitement dans le code (lignes 37-54) : identité → problème → offre → science → preuve sociale → production → entreprise → acquisition → CTA contact. Cette architecture correspond bien au triptyque découverte → conviction → contact visé par le README. Le CTA du hero (`src/components/Hero.tsx:50-58`) pointe vers `/solutions` (découverte de l'offre) plutôt que de sur-vendre trop tôt, ce qui est cohérent avec un persona en phase de découverte.

**Recommandation**
Aucune action requise sur la structure elle-même ; le point faible reste le contenu de l'étape 5 (preuve sociale, cf. finding n°1) et non l'ordre du parcours.

---

## 5. Page Contact bien positionnée en fin de tunnel, mais un couplage à vérifier avec le formulaire "retour terrain"

**Sévérité : Faible**

**Description avec preuve**
`src/pages/ContactPage.tsx` propose deux onglets : "Contact" classique (`ContactForm`, ligne 120) et "Retour terrain" (`FieldFeedbackForm`, ligne 123), ce dernier pré-rempli par un paramètre `product` (ligne 18, `productParam`). C'est un bon design pour capter le retour d'expérience d'agriculteurs déjà utilisateurs (source potentielle de futurs témoignages, cf. finding n°1) — les liens `/contact?type=terrain&product=...` trouvés par exemple dans `src/pages/BiocontroleVivant.tsx:243` bouclent bien la boucle produit → retour d'expérience.

**Recommandation**
Exploiter formellement ce canal "retour terrain" comme source de collecte de témoignages réels (cf. finding n°1) : ajouter un champ optionnel "acceptez-vous que votre retour soit cité sur le site ?" dans `FieldFeedbackForm` pour transformer ces retours en preuve sociale exploitable, avec consentement RGPD explicite.

---

## Ce qui fonctionne bien

- Les pages produits (`BiocontroleVivant.tsx`, `Biofertilisant.tsx`, `Boosters.tsx`, `ExtraitsNaturels.tsx`) portent toutes un schema `serviceJsonLd` + `faqJsonLd` + `breadcrumbJsonLd`, avec des title/meta description uniques et alignés sur des requêtes produit précises (ex. "Fertea432 : Biofertilisant Keprea | Fertilisation Organique NPK").
- `PourquoiBiocontrole.tsx` est un bon exemple de page pédagogique correctement typée : `articleJsonLd`, FAQ structurée, sourcing des statistiques avec accordéon "sources" (lignes 248-257), ce qui répond à l'intention informationnelle sans être un pur argumentaire commercial.
- Le hub `/solutions` (`Solutions.tsx`) affiche honnêtement un badge "disponible / en développement" par carte produit (lignes 150-161), ce qui évite un mensonge par omission sur la maturité de l'offre — seul le ton du header de la page de destination (finding n°3) reste à ajuster en cohérence.
- Le tunnel Accueil → Solutions → Contact est explicite dans le code via des commentaires de section, ce qui facilite la maintenance du parcours de conversion par de futurs contributeurs.
