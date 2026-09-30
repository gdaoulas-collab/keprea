import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Mentions Légales | Keprea</title>
        <meta name="description" content="Mentions légales de Keprea (SAS) : éditeur du site, hébergeur, SIRET, siège social à Mâcon (71)." />
        <link rel="canonical" href="https://www.keprea.com/mentions-legales" />
        <meta property="og:url" content="https://www.keprea.com/mentions-legales" />
        <meta property="og:title" content="Mentions Légales | Keprea" />
        <meta name="twitter:title" content="Mentions Légales | Keprea" />
        <meta property="og:description" content="Mentions légales de Keprea (SAS) : éditeur du site, hébergeur, SIRET, siège social à Mâcon (71)." />
        <meta name="twitter:description" content="Mentions légales de Keprea (SAS) : éditeur du site, hébergeur, SIRET, siège social à Mâcon (71)." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Mentions légales", path: "/mentions-legales" },
        ])}</script>
      </Head>
      <Navigation />
      <main className="container mx-auto max-w-3xl px-4 py-32">
        <h1 className="text-3xl font-bold text-foreground mb-8">Mentions légales</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Éditeur du site</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">KEPREA</strong><br />
            Société par Actions Simplifiée (SAS)<br />
            Capital social : 1 472,23 €<br />
            SIRET : 931 810 535 00035<br />
            Siège social : 42 rue Tourneloup, 71000 Mâcon, France<br />
            Email : <a href="mailto:contact@keprea.com" className="text-primary hover:underline">contact@keprea.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Directeur de la publication</h2>
          <p className="text-muted-foreground leading-relaxed">
            Guillaume Daoulas, <a href="mailto:g.daoulas@keprea.com" className="text-primary hover:underline">g.daoulas@keprea.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Hébergement</h2>
          <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">GoDaddy.com, LLC</strong><br />
            100 S. Mill Ave, Suite 1600, Tempe, Arizona 85281, États-Unis<br />
            <a href="https://www.godaddy.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.godaddy.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Propriété intellectuelle</h2>
          <p className="text-muted-foreground leading-relaxed">
            L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, graphismes) est la propriété exclusive de KEPREA ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable de KEPREA est strictement interdite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Limitation de responsabilité</h2>
          <p className="text-muted-foreground leading-relaxed">
            KEPREA s'efforce de maintenir les informations publiées sur ce site aussi exactes que possible. Cependant, KEPREA ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. KEPREA se réserve le droit de corriger ou modifier le contenu de ce site à tout moment et sans préavis.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Droit applicable</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les présentes mentions légales sont soumises au droit français. Tout litige relatif à l'utilisation du site sera de la compétence exclusive des tribunaux français.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MentionsLegales;
