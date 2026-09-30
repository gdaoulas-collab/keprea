import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Politique de Confidentialité | Keprea</title>
        <meta name="description" content="Politique de confidentialité Keprea : données collectées, finalités du traitement et droits RGPD des utilisateurs du site." />
        <link rel="canonical" href="https://www.keprea.com/politique-confidentialite" />
        <meta property="og:url" content="https://www.keprea.com/politique-confidentialite" />
        <meta property="og:title" content="Politique de Confidentialité | Keprea" />
        <meta name="twitter:title" content="Politique de Confidentialité | Keprea" />
        <meta property="og:description" content="Politique de confidentialité Keprea : données collectées, finalités du traitement et droits RGPD des utilisateurs du site." />
        <meta name="twitter:description" content="Politique de confidentialité Keprea : données collectées, finalités du traitement et droits RGPD des utilisateurs du site." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Politique de confidentialité", path: "/politique-confidentialite" },
        ])}</script>
      </Head>
      <Navigation />
      <main className="container mx-auto max-w-3xl px-4 py-32">
        <h1 className="text-3xl font-bold text-foreground mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-muted-foreground mb-8">Dernière mise à jour : 15 juin 2026</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Responsable du traitement</h2>
          <p className="text-muted-foreground leading-relaxed">
            KEPREA, Dole (39100), France<br />
            Email : <a href="mailto:contact@keprea.com" className="text-primary hover:underline">contact@keprea.com</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Données collectées</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Via le formulaire de contact, nous collectons les informations suivantes :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
            <li>Prénom et nom</li>
            <li>Adresse email professionnelle</li>
            <li>Nom de l'entreprise ou de l'exploitation</li>
            <li>Message libre</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Ces données sont collectées uniquement avec votre consentement explicite, matérialisé par la case à cocher RGPD du formulaire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Finalités du traitement</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Répondre à votre demande de contact ou d'information</li>
            <li>Assurer le suivi commercial de votre demande</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Base légale</h2>
          <p className="text-muted-foreground leading-relaxed">
            Le traitement repose sur votre <strong className="text-foreground">consentement</strong> (article 6.1.a du RGPD), recueilli au moment de la soumission du formulaire.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Durée de conservation</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vos données sont conservées pendant <strong className="text-foreground">3 ans</strong> à compter de votre dernier contact avec KEPREA, puis supprimées ou anonymisées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Destinataires des données</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vos données sont traitées exclusivement par l'équipe commerciale de KEPREA. Elles ne sont jamais vendues ni cédées à des tiers. Elles peuvent être transmises à nos prestataires techniques (hébergement, envoi d'emails) dans le strict cadre de l'exécution de leurs services, sous contrat de traitement des données.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Cookies et traceurs</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ce site peut utiliser des cookies d'analyse d'audience (Google Analytics 4) uniquement <strong className="text-foreground">après recueil de votre consentement explicite</strong> via le bandeau cookies. Vous pouvez modifier vos préférences à tout moment en cliquant sur « Gestion des cookies » en bas de page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-3">Vos droits</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
            <li><strong className="text-foreground">Droit d'accès</strong> : obtenir une copie de vos données</li>
            <li><strong className="text-foreground">Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong className="text-foreground">Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong className="text-foreground">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
            <li><strong className="text-foreground">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong className="text-foreground">Droit au retrait du consentement</strong> : à tout moment, sans incidence sur les traitements antérieurs</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            Pour exercer ces droits, écrivez à :{" "}
            <a href="mailto:contact@keprea.com" className="text-primary hover:underline">contact@keprea.com</a>.
            Vous pouvez également introduire une réclamation auprès de la{" "}
            <strong className="text-foreground">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) si vous estimez que vos droits ne sont pas respectés.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
