# MEMORY — Keprea Site Web

> Mémoire stratégique et décisionnelle du projet. Mise à jour après chaque session.
> Limite stricte : 150 lignes. Synthétiser les anciennes entrées si dépassement.

---

## Positionnement de Keprea

- **Qui** : Startup agri-tech fondée en 2024, basée à Dole (Jura, 39)
- **Quoi** : Biosolutions à base d'insectes pour l'agriculture (biocontrôle)
- **Gammes** : Bioprotection, Biopesticides, Boosters, Biofertilisant
- **Cible principale** : Agriculteurs (grandes cultures, maraîchage), coopératives, distributeurs agricoles
- **Marché** : Transition agroécologique, réglementation de plus en plus restrictive sur les pesticides chimiques
- **Différenciation** : Origine insecte, efficacité prouvée, approche naturelle vs chimique

---

## Diagnostic du site actuel

### Points forts identifiés
- Identité visuelle propre, moderne, palette cohérente
- Animation de la mascotte mémorable
- Hero section impactant avec vidéo

### Problèmes critiques
- Aucune preuve sociale (zéro témoignage, zéro cas client)
- Pages produits trop minces (pas de fiches techniques, pas de comparatifs)
- Footer absent ou incomplet
- Pas de mentions légales, pas de politique de confidentialité
- Pas de bandeau consentement cookies (non conforme RGPD)
- Contenus importants enfermés dans des vidéos/images (non indexables par Google)
- Formulaire de contact avec trop de champs, pas de champ RGPD
- Vidéos sans attribut `poster` → écran blanc au chargement
- `<html lang="en">` dans `index.html` → signal SEO négatif (doit être `lang="fr"`)
- Pas de Google Analytics, pas de Search Console
- URLs non optimisées pour le SEO
- Schéma de production non responsive
- CTA peu visibles, peu contrastés

---

## Décisions produit prises

| Décision | Statut |
|----------|--------|
| Migration vers GitHub + Vercel | **Faite** — keprea.com sert le build Vercel (13/07/2026) |
| Domaine canonique = www.keprea.com | **Décidé (22/07/2026, révise le choix apex du 13/07) + vérifié en prod (24/07/2026)** — apex et vercel.app redirigent tous deux vers www, 0 réf. vercel.app en prod |
| Architecture multi-pages (12 URLs cibles) | **Implémentée (Phase 5.3)** |
| Pré-rendu statique (option A : vite-react-ssg) | **Implémentée (Phase 5.2)** |
| Suppression du badge Lovable | Corrigé (Phase 0) |
| Ajout témoignages agriculteurs | Priorité absolue |
| Page « Pourquoi le biocontrôle ? » | À créer (Phase 2) |
| Newsletter + fiches techniques téléchargeables | Phase 3 |
| RGPD : mentions légales + consentement | Phase 1 |
| Storytelling 7 étapes en page d'accueil | À implémenter |

---

## Architecture cible validée

```
/                           → Accueil (storytelling 7 étapes)
/solutions/                 → Hub des gammes
/solutions/bioprotection/
/solutions/biopesticides/
/solutions/boosters/
/solutions/biofertilisant/
/pourquoi-le-biocontrole/   → Page pédagogique SEO
/qui-sommes-nous/           → Équipe + histoire
/notre-production/          → Process de production
/ressources/                → Blog + fiches + newsletter
/contact/                   → Formulaire simplifié RGPD
/mentions-legales/
/politique-confidentialite/
```

---

## Parcours de conversion cible

1. **Entrée** : trafic organique (blog, pages produits SEO) ou bouche-à-oreille
2. **Découverte** : page d'accueil → storytelling → compréhension de l'offre
3. **Conviction** : page produit → fiche technique → témoignage agriculteur
4. **Décision** : CTA « Nous contacter » / « Télécharger la fiche »
5. **Contact** : formulaire simplifié (Prénom, Entreprise, Email, Message, case RGPD)
6. **Nurturing** : newsletter + ressources

**Levier n°1 identifié** : Témoignages d'agriculteurs réels — priorité absolue pour la conversion.

---

## Contenus à créer (backlog)

- [ ] Témoignages agriculteurs (texte + photo, idéalement vidéo)
- [ ] Fiches techniques PDF pour chaque gamme (téléchargeables)
- [ ] Biographies équipe avec photos (voir aussi ERRORS.md : vérifier identité/consentement des personnes nommées)
- [ ] Articles de blog SEO (cibler requêtes longue traîne agricoles) — `/ressources` actuellement vide et volontairement en `noindex` (depuis le 02/07/2026, cf. ERRORS.md) ; retirer le `noindex` (`src/pages/Ressources.tsx`) une fois un contenu réel ajouté
- [ ] Logos et références clients/partenaires
- [ ] Schéma de production responsive
- [ ] 5 pages/articles ciblage mots-clés (audit 30/07/2026, détail `keprea.com-audit/ACTION-PLAN.md` Phase 5) : « Biocontrôle vs pesticides chimiques » (comparatif, trou structurel le plus critique), « Biostimulant ou biofertilisant : quelle différence ? » (anti-cannibalisation Boosters/Biofertilisant), « Ecophyto 2030 et biocontrôle », 2 pages verticales par filière (grandes cultures / maraîchage)
- [ ] Substituts E-E-A-T sans témoignage (rapide→lent) : auteur `Person`/agronome sur JSON-LD `/pourquoi-le-biocontrole` ; bloc sources/méthodologie répliqué sur les 4 pages produits ; phrase de crédibilité par fondateur dans `Team.tsx` ; FAQ `ExtraitsNaturels.tsx` densifiée

---

## Design system attendu

- **Ton** : Professionnel, expert, sobre — pas d'emojis dans l'UI
- **Palette** : À détecter dans le code existant (conserver la cohérence)
- **Typographie** : Lisible, hiérarchie claire (H1 → H2 → H3 → body)
- **CTA** : Contrastés, visibles, texte explicite (éviter « En savoir plus »)
- **Images** : ALT text systématique, WebP préféré, lazy loading
- **Vidéos** : Attribut `poster` obligatoire, pas d'autoplay sans mute
- **Mobile** : Breakpoint 375px comme référence minimale

---

## Contraintes légales et techniques

- **RGPD** : Consentement explicite avant tout tracking, bandeau cookies, mentions légales
- **Accessibilité** : Contrastes WCAG AA minimum, balises sémantiques, navigation clavier
- **SEO** : Balises meta (title + description) sur chaque page, Hn cohérents, contenu textuel indexable
- **Performance** : Éviter les images > 200 ko sans compression, pas de scripts bloquants
- **Stack à détecter** : Inspecter `package.json` avant d'assumer la stack

---

## Métriques de succès (horizon 6 mois)

| Métrique | Cible |
|----------|-------|
| Taux de rebond | < 60 % |
| Temps moyen sur site | > 2 minutes |
| Formulaires soumis | × 3 vs baseline |
| Pages vues / session | > 3 |
| Trafic organique | Croissance à partir de M+3 |
| Téléchargements fiches techniques | > 20 / mois |
| Abonnés newsletter | > 50 en 3 mois |

---

## Historique des sessions (résumé)

| Période | Décisions / apprentissages clés |
|---------|----------------------------------|
| Juin-03 juil. 2026 | Refonte complète (badge Lovable, RGPD, SSG, redesigns UX, noms produits ExtracBio/Fertea432/Boostea13/Soilea110) + audit SEO complet (score 53/100→corrigé) + batch pré-publication (claims non sourcés retirés, "Made in France" remplace Dole/Jura dans le contenu visible, adresse réelle conservée Footer/Mentions légales). Détails `ERRORS.md`. |
| 06-07 juil. 2026 | Revue critique corrigée. `/contact` scindée en 2 onglets "Contact"/"Retour terrain" (`FieldFeedbackForm.tsx`). Retours "Relecture site web" appliqués (FR). Puis refonte visuelle homepage→site entier ("niveau Polyfly") : `PremiumCard.tsx`, rythme vertical harmonisé. Build 24 pages + lint OK. |
| 30 juil. 2026 | Ré-audit ciblé (aucune régression depuis 22/07). Analyse SXO/cluster : trou structurel "alternative pesticides" (aucune page comparative), cannibalisation Boosters/Biofertilisant, 5 pages à créer + substituts E-E-A-T — détail `keprea.com-audit/ACTION-PLAN.md` Phase 5. |
| 28 sept. 2026 | Audit sécurité formulaires (artifact publié) → corrections appliquées : CORS edge functions restreint à www.keprea.com, validation serveur + échappement HTML (`_shared/security.ts`), rate limiting (table `rate_limit_hits`, 3 req/10min/IP), honeypot anti-spam sur `ContactForm`/`FieldFeedbackForm`, CSP + HSTS ajoutés (`vercel.json`), `npm audit fix` (12/17 CVE corrigées, 5 restantes nécessitent breaking change vite/react-router — non appliqué), CI `dependency-audit.yml` (npm audit + Trivy). **CSP a cassé toute l'interactivité en prod (hydratation vite-react-ssg bloquée)** — corrigé le jour même, détail `ERRORS.md`. Bloc "Nos garanties" homepage signalé invisible (stats + cartes) — corrigé en rendant `useInView` résilient (repli si l'observateur ne se déclenche pas), même cause probable (hydratation SSG), détail `ERRORS.md`. |
