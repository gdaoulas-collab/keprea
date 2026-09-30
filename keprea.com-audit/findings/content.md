# Audit contenu SEO / E-E-A-T — keprea.com

Périmètre : `src/pages/*.tsx` + composants de contenu associés (`Testimonials.tsx`, `Team.tsx`, `Problem.tsx`, `Innovation*`, `technicalSheets.ts`, `lib/schema.ts`, `contexts/LanguageContext.tsx` pour les chaînes FR réelles). Analyse à date du code, pas du rendu prod.

---

## Titre : Zéro témoignage agriculteur réel — priorité business n°1 toujours non traitée

**Sévérité : Critical**

`README.md` et `MEMORY.md` désignent explicitement les témoignages d'agriculteurs comme "levier n°1" de conversion et priorité absolue. Le composant qui occupe cet emplacement sur la homepage (`Index.tsx` ligne 46, commentaire `{/* 5. Preuve sociale */}`) s'appelle `Testimonials.tsx` mais ne contient aucun témoignage : c'est une section de statistiques et de garanties génériques (`src/components/Testimonials.tsx`).

Preuve — le contenu réel de cette section (`LanguageContext.tsx` lignes 1897-1964) :
- 4 "stats de crédibilité" : `2024` (Fondée en France), `4` (Gammes de biosolutions), `100%` (Origine naturelle), `Terrain` (Suivi agronomique inclus)
- 2 "garanties" : "Traçabilité complète" et "Accompagnement agronomique" — des promesses de service, pas des retours clients vérifiables

Aucun nom d'agriculteur, aucune exploitation citée, aucune citation, aucune photo, aucune étude de cas chiffrée par un tiers ne figure sur le site (vérifié sur `Index.tsx`, `QuiSommesNous.tsx`, `ContactPage.tsx`, les 4 pages produits). Le champ "Carte agriculteurs" sur `ContactPage.tsx` (lignes 176-192, `contactpage.farmerCard`) est un texte marketing invitant à contacter, pas une preuve sociale.

**Recommandation** : collecter et publier au moins 2-3 témoignages nommés (prénom, exploitation, région, culture concernée, citation directe + résultat chiffré) avant toute autre optimisation de contenu — c'est le levier identifié par le projet lui-même comme le plus fort en conversion et en E-E-A-T ("Experience" = expérience de première main d'un vrai utilisateur, le signal le plus difficile à falsifier). Un simple encart "en cours de collecte" vaut mieux qu'un habillage de stats qui se fait passer pour de la preuve sociale sans l'être.

---

## Titre : Fiches équipe sans preuve d'expertise individuelle (photos, bios, diplômes)

**Sévérité : High**

`src/components/Team.tsx` (lignes 10-21) liste 10 personnes nommées (Alexandre Pernot, Antoine Hubert, Béatrice Vassy, etc.) mais chaque carte n'affiche que des initiales sur fond coloré (ligne 48 : `getInitials(member.name)`) et un intitulé de poste traduit (`roleKey`). Aucune photo réelle, aucune bio, aucun lien LinkedIn, aucune mention de diplôme/expérience passée (agronomie, entomologie, etc.) qui justifierait l'autorité de l'équipe sur le sujet.

`MEMORY.md` ligne 97 et le journal `ERRORS.md` (entrée 01-02/07/2026) confirment que "vraies photos des 6 membres" est un backlog non résolu, et que les noms ont été validés par les personnes concernées — donc le risque n'est pas juridique, mais le rendu actuel (initiales génériques) est plus proche d'un placeholder que d'une preuve d'expertise humaine.

**Recommandation** : au minimum une phrase de crédibilité par personne clé (ex. fondateurs) : formation, expérience professionnelle antérieure pertinente (agronomie, biotech, entomologie), éventuellement lien LinkedIn. Photos réelles dès que possible. Sans cela, Google et les moteurs IA n'ont aucun signal "Expertise" vérifiable sur les personnes derrière la marque.

---

## Titre : Auteur des pages "Article" toujours l'Organisation, jamais une personne

**Sévérité : Medium**

`src/lib/schema.ts` (`articleJsonLd`, lignes 62-86) fixe systématiquement `author: { "@type": "Organization", name: "Keprea" }` — utilisé sur `/pourquoi-le-biocontrole` (`PourquoiBiocontrole.tsx` lignes 71-77). Google recommande, pour du contenu à caractère informatif/technique (agronomie = quasi-YMYL pour un public professionnel), un auteur `Person` identifié avec expertise pertinente en plus de l'organisation éditrice.

**Recommandation** : si un membre de l'équipe (agronome, expert biocontrôle) valide/rédige ce contenu, l'ajouter comme `author` `Person` secondaire (ou `reviewedBy`), avec un lien vers sa fiche équipe. Non bloquant mais renforce l'E-E-A-T à peu de frais, notamment car c'est la seule page du site avec un vrai balisage `Article` (datePublished/dateModified déjà en place).

---

## Titre : Claim "étude publiée dans Nature" imprécis — il s'agit de Scientific Reports

**Sévérité : Medium**

`Biofertilisant.tsx` ligne 93-102 affiche : *"Résultats issus d'une étude scientifique publiée dans Nature"* (clé `biofertilisant.composition.studyIntro`, `LanguageContext.tsx` ligne 4103-4108) avec un lien vers `https://www.nature.com/articles/s41598-025-87075-8`. Le préfixe DOI `s41598` correspond à *Scientific Reports*, une revue du groupe Nature Portfolio mais éditorialement distincte de la revue historique *Nature* (facteur d'impact et niveau de sélectivité très différents). Dire "publiée dans Nature" plutôt que "publiée dans Scientific Reports (groupe Nature)" est le genre d'imprécision qu'un agronome ou un journaliste spécialisé peut relever et qui entache la crédibilité scientifique du site — un point sensible pour l'E-E-A-T "Trustworthiness" puisque la page revendique justement une preuve scientifique tierce.

**Recommandation** : corriger en "publiée dans Scientific Reports (groupe Nature)" ou équivalent factuellement exact, sur toutes les langues du fichier de traduction.

---

## Titre : Contenu dupliqué entre les 4 pages produits (structure et texte)

**Sévérité : Low**

Les 4 pages produits (`BiocontroleVivant.tsx`, `Biofertilisant.tsx`, `Boosters.tsx`, `ExtraitsNaturels.tsx`) suivent un template quasi identique (header photo → principe/avantages → cultures cibles → mode d'emploi → stats résultats + disclaimer → FAQ accordéon → lien retour terrain → `GradientCTA` → cross-sell 3 cartes). C'est une bonne pratique de cohérence UX, mais le bloc "cross-sell" réutilise littéralement les mêmes clés de traduction d'une page à l'autre :
- `t("bv.crosssell.boosters.title")` / `t("bv.crosssell.boosters.desc")` apparaît identique sur `Biofertilisant.tsx` (ligne 280-281), `Boosters.tsx`... et `BiocontroleVivant.tsx` (ligne 266-267)
- `t("extraits.crosssell.bioprotection.title/desc")` réutilisé tel quel sur `Biofertilisant.tsx` (272-273), `Boosters.tsx` (299-300), `ExtraitsNaturels.tsx` (162-163)

Ce n'est pas un problème de duplicate content SEO classique (le texte visible diffère par ailleurs, chaque page a son propre H1/meta/FAQ), mais c'est un signal de contenu produit sous-différencié : les mêmes deux phrases decrivent le produit "boosters" ou "bioprotection" quel que soit le contexte d'où l'on clique, ce qui est un peu générique pour un lecteur qui navigue entre 2-3 pages produits.

**Recommandation** : non urgent. Si du temps de rédaction est disponible, varier légèrement l'accroche du cross-sell selon la page d'origine (ex. sur la page biofertilisant, orienter le cross-sell "biopesticides" vers l'angle "après la fertilisation, protéger" plutôt que la même description neutre reprise sur Boosters).

---

## Titre : Page biopesticides (`ExtraitsNaturels.tsx`) plus mince que les 3 autres pages produits

**Sévérité : Medium**

Le produit "biopesticides" est en développement / non disponible commercialement (badge `extraits.notAvailable.badge`, `ExtraitsNaturels.tsx` ligne 68-71, icône `Construction`). En conséquence son contenu est structurellement plus pauvre que les 3 autres pages produits :
- Pas de section "cultures cibles" (les 3 autres pages ont un bloc listant 5-6 cultures avec `CheckCircle2`)
- Pas de section "mode d'emploi" en étapes numérotées
- Pas de section "résultats mesurés" avec statistiques chiffrées + disclaimer (présente sur `BiocontroleVivant`, `Biofertilisant`, `Boosters`)
- FAQ à seulement 2 questions (`faqKeys`, ligne 17-19) contre 5-6 sur les autres pages
- Pas de section "retour terrain" (feedback agriculteur) contrairement aux 3 autres

C'est cohérent avec le statut "en cours d'homologation" (on ne peut pas revendiquer des résultats terrain pour un produit pas encore commercialisé), donc ce n'est pas une erreur de contenu à proprement parler — mais du point de vue SEO pur, c'est la page la plus fine des 4 gammes annoncées dans l'architecture cible (`README.md` ligne 39).

**Recommandation** : à enrichir dès que le produit avance dans son homologation (résultats de laboratoire même préliminaires, calendrier indicatif de disponibilité). En attendant, envisager un contenu "sciences" plus développé (mécanisme d'action détaillé) pour compenser l'absence de données terrain — actuellement la section "de la recherche au champ" (`substances.tech.*`, 3 étapes courtes) est le seul bloc un peu technique.

---

## Titre : `/ressources` en noindex — blog quasi vide, aucun contenu réel

**Sévérité : Low (déjà connu et traité côté indexation)**

`Ressources.tsx` a `<meta name="robots" content="noindex, follow" />` (ligne 29) et un contenu qui annonce 3 rubriques (fiches techniques — seule vraiment fonctionnelle —, articles/guides, newsletter) toutes deux marquées "Prochainement" / `ressources.comingSoon` (lignes 78-82). C'est déjà documenté et volontaire dans `ERRORS.md` (ligne 46) pour éviter d'indexer du contenu vide — bon réflexe SEO défensif — mais ça confirme qu'il n'existe aujourd'hui aucun contenu éditorial de blog pour capter du trafic longue traîne, un des objectifs de la Phase 3 (`README.md` ligne 77).

**Recommandation** : rien à corriger dans l'immédiat côté SEO technique (le noindex est la bonne décision tant qu'il n'y a pas de contenu). À traiter quand la Phase 3 sera lancée.

---

## Titre : Statistiques produit répétées avec un disclaimer standard — bonne pratique mais à surveiller pour la lisibilité IA

**Sévérité : Info**

Les 3 pages produits qui affichent des résultats terrain (`bv.results.disclaimer`, `boosters.results.disclaimer`, `biofertilisant.results.disclaimer`) utilisent la même formule de prudence : "Données internes Keprea, essais en parcelles pilotes 2023-2024. Résultats variables (...), communiqués à titre indicatif, hors valeur d'engagement contractuel." (`LanguageContext.tsx` ligne 3484). C'est une bonne pratique de transparence (évite le survol trompeur de chiffres non vérifiés), déjà actée dans `ERRORS.md` (02/07/2026, Phase 4) comme un choix assumé de ne pas associer de citation académique à des essais internes.

Pour l'AI citation readiness, ce couple "chiffre + contexte + limite" (ex. `48-72h` de délai d'action, `+5-13%` de rendement) est exactement le format de passage autonome citable par une IA générative (Perplexity/AI Overviews) — c'est un point fort à préserver, mais le fait que ce soit systématiquement "données internes non vérifiées par un tiers" limite le niveau de confiance qu'un moteur IA accordera à ces chiffres par rapport à une étude publiée.

**Recommandation** : aucune action immédiate requise (décision déjà prise et documentée). Si des essais en collaboration avec une chambre d'agriculture, un institut technique (ARVALIS, Comifer déjà cités en méthodologie) ou une coopérative deviennent possibles, les mettre en avant en priorité — un chiffre corroboré par un tiers indépendant vaudra beaucoup plus, en E-E-A-T comme en citation IA, qu'un chiffre interne.

---

## Ce qui fonctionne bien

- **Hiérarchie Hn propre** : chaque page vérifiée (Index via `Hero`, `SolutionsHub`, les 4 pages produits, `QuiSommesNous`, `NotreProduction`, `InnovationPage`, `PourquoiBiocontrole`, `Ressources`, `FichesTechniques`, `FicheTechniqueDetail`, `ContactPage`) n'a qu'un seul `<h1>`, suivi d'une structure `<h2>`/`<h3>` cohérente par section. Aucun doublon ou saut de niveau détecté dans le code lu.
- **FAQ + schema FAQPage systématiques** sur les 4 pages produits et `/pourquoi-le-biocontrole` (`faqJsonLd` dans `lib/schema.ts`) : format questions/réponses autonomes, idéal pour l'extraction par les moteurs IA et les featured snippets.
- **Sourcing des statistiques réglementaires/marché** sur `/pourquoi-le-biocontrole` : accordéon "Sources et méthodologie" (`pourquoi.sources.content`) citant nommément agriculture.gouv.fr, Alliance Biocontrôle, Légifrance, IBMA avec dates de publication — c'est la meilleure pratique E-E-A-T du site et pourrait servir de modèle pour d'autres pages.
- **Disclaimers explicites sur les stats produit "données internes"** — évite de faire passer des essais internes pour des données validées par un tiers, une discipline de contenu rare et positive.
- **Schema JSON-LD riche et cohérent** : Breadcrumb sur toutes les pages, Service sur les 4 pages produits, Article + FAQPage sur la page pédagogique — bon socle technique pour le SEO structuré et la citabilité IA.
- **Ton et niveau de langue adaptés à la cible** (agriculteurs/distributeurs) : vocabulaire technique mais accessible, évite le jargon marketing creux, formulations révisées (ex. "produits phytosanitaires" plutôt que "pesticides") suite aux retours mail du 06/07/2026 déjà tracés dans `ERRORS.md`.
- **Contact structuré en 2 parcours distincts** (`ContactPage.tsx`) : "Contact" commercial classique et "Retour terrain" dédié au feedback produit — une bonne base pour, à terme, transformer ces retours terrain collectés en futurs témoignages réels une fois obtenus avec accord explicite.
