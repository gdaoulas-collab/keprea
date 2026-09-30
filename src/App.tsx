import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import SolutionsHub from "./pages/SolutionsHub";
import BiocontroleVivant from "./pages/BiocontroleVivant";
import ExtraitsNaturels from "./pages/ExtraitsNaturels";
import Boosters from "./pages/Boosters";
import Biofertilisant from "./pages/Biofertilisant";
import ContactPage from "./pages/ContactPage";
import QuiSommesNous from "./pages/QuiSommesNous";
import NotreProduction from "./pages/NotreProduction";
import PourquoiBiocontrole from "./pages/PourquoiBiocontrole";
import InnovationPage from "./pages/InnovationPage";
import Ressources from "./pages/Ressources";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import TestBlurText from "./pages/TestBlurText";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Solutions */}
            <Route path="/solutions" element={<SolutionsHub />} />
            <Route path="/solutions/bioprotection" element={<BiocontroleVivant />} />
            <Route path="/solutions/biopesticides" element={<ExtraitsNaturels />} />
            <Route path="/solutions/boosters" element={<Boosters />} />
            <Route path="/solutions/biofertilisant" element={<Biofertilisant />} />
            {/* Old routes — redirects to new URLs for backward compat */}
            <Route path="/biofertilisant" element={<Biofertilisant />} />
            <Route path="/boosters" element={<Boosters />} />
            <Route path="/extraits-naturels" element={<ExtraitsNaturels />} />
            <Route path="/biocontrole-vivant" element={<BiocontroleVivant />} />
            {/* Other pages */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/notre-production" element={<NotreProduction />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/pourquoi-le-biocontrole" element={<PourquoiBiocontrole />} />
            <Route path="/ressources" element={<Ressources />} />
            {/* Legal */}
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
            {/* Dev test route — a retirer avant mise en prod */}
            <Route path="/test-blur-text" element={<TestBlurText />} />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
