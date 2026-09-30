import { Navigate } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import RootLayout from "@/components/RootLayout";
import Index from "@/pages/Index";
import SolutionsHub from "@/pages/SolutionsHub";
import BioprotectionPage from "@/pages/BiocontroleVivant";
import BiopesticidesPage from "@/pages/ExtraitsNaturels";
import BoostersPage from "@/pages/Boosters";
import BiofertilisantPage from "@/pages/Biofertilisant";
import PourquoiBiocontrole from "@/pages/PourquoiBiocontrole";
import InnovationPage from "@/pages/InnovationPage";
import QuiSommesNous from "@/pages/QuiSommesNous";
import NotreProduction from "@/pages/NotreProduction";
import Ressources from "@/pages/Ressources";
import FichesTechniques from "@/pages/FichesTechniques";
import FicheTechniqueDetail from "@/pages/FicheTechniqueDetail";
import { technicalSheets } from "@/data/technicalSheets";
import ContactPage from "@/pages/ContactPage";
import MentionsLegales from "@/pages/MentionsLegales";
import PolitiqueConfidentialite from "@/pages/PolitiqueConfidentialite";
import NotFound from "@/pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Index },
      { path: "solutions", Component: SolutionsHub },
      { path: "solutions/bioprotection", Component: BioprotectionPage },
      { path: "solutions/biopesticides", Component: BiopesticidesPage },
      { path: "solutions/boosters", Component: BoostersPage },
      { path: "solutions/biofertilisant", Component: BiofertilisantPage },
      { path: "pourquoi-le-biocontrole", Component: PourquoiBiocontrole },
      { path: "innovation", Component: InnovationPage },
      { path: "qui-sommes-nous", Component: QuiSommesNous },
      { path: "notre-production", Component: NotreProduction },
      { path: "ressources", Component: Ressources },
      { path: "ressources/fiches-techniques", Component: FichesTechniques },
      {
        path: "ressources/fiches-techniques/:slug",
        Component: FicheTechniqueDetail,
        getStaticPaths: () => technicalSheets.map((entry) => `/ressources/fiches-techniques/${entry.slug}`),
      },
      { path: "contact", Component: ContactPage },
      { path: "mentions-legales", Component: MentionsLegales },
      { path: "politique-confidentialite", Component: PolitiqueConfidentialite },
      // Redirections client-side des anciennes URLs
      { path: "biofertilisant", element: <Navigate to="/solutions/biofertilisant" replace /> },
      { path: "boosters", element: <Navigate to="/solutions/boosters" replace /> },
      { path: "extraits-naturels", element: <Navigate to="/solutions/biopesticides" replace /> },
      { path: "biocontrole-vivant", element: <Navigate to="/solutions/bioprotection" replace /> },
      { path: "*", Component: NotFound },
    ],
  },
];
