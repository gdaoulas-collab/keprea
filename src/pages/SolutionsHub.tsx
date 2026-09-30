import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Solutions from "@/components/Solutions";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const SolutionsHub = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Nos Solutions Keprea | Bioprotection, Biopesticides, Biofertilisants</title>
      <meta
        name="description"
        content="Découvrez les 4 gammes de solutions biosourcées Keprea : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants à base d'insectes."
      />
      <link rel="canonical" href="https://www.keprea.com/solutions" />
      <meta property="og:url" content="https://www.keprea.com/solutions" />
      <meta property="og:title" content="Nos Solutions Keprea | Bioprotection, Biopesticides, Biofertilisants" />
      <meta name="twitter:title" content="Nos Solutions Keprea | Bioprotection, Biopesticides, Biofertilisants" />
      <meta
        property="og:description"
        content="Découvrez les 4 gammes de solutions biosourcées Keprea : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants à base d'insectes."
      />
      <meta
        name="twitter:description"
        content="Découvrez les 4 gammes de solutions biosourcées Keprea : bioprotection vivante, biopesticides naturels, boosters de croissance et biofertilisants à base d'insectes."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Solutions", path: "/solutions" },
      ])}</script>
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <Solutions />
    </main>
    <Footer />
  </div>
);

export default SolutionsHub;
