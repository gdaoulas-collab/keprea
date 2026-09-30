import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import SolutionsTeaser from "@/components/SolutionsTeaser";
import Innovation from "@/components/Innovation";
import Testimonials from "@/components/Testimonials";
import Production from "@/components/Production";
import About from "@/components/About";
import HowToGet from "@/components/HowToGet";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Keprea : Biosolutions Agricoles à base d'Insectes | Dole, Jura</title>
        <meta
          name="description"
          content="Keprea développe des biosolutions à base d'insectes pour l'agriculture : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants. Dole (39)."
        />
        <link rel="canonical" href="https://www.keprea.com/" />
        <meta property="og:url" content="https://www.keprea.com/" />
        <meta property="og:title" content="Keprea : Biosolutions Agricoles à base d'Insectes | Dole, Jura" />
        <meta name="twitter:title" content="Keprea : Biosolutions Agricoles à base d'Insectes | Dole, Jura" />
        <meta
          property="og:description"
          content="Keprea développe des biosolutions à base d'insectes pour l'agriculture : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants. Dole (39)."
        />
        <meta
          name="twitter:description"
          content="Keprea développe des biosolutions à base d'insectes pour l'agriculture : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants. Dole (39)."
        />
      </Head>
      <Navigation />
      {/* 1. Identité & promesse */}
      <Hero />
      {/* 2. Contexte — le problème que l'on résout */}
      <Problem />
      {/* 3. L'offre — teaser des 4 gammes → /solutions */}
      <SolutionsTeaser />
      {/* 4. La science — pourquoi les insectes */}
      <Innovation />
      {/* 5. Preuve sociale */}
      <Testimonials />
      {/* 6. Site & process de production */}
      <Production teaser />
      {/* 7. L'entreprise */}
      <About teaser />
      {/* 8. Acquisition — comment tester */}
      <HowToGet />
      {/* 9. CTA final — renvoie vers /contact */}
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
