import { Head } from "vite-react-ssg";
import { FileText, BookOpen, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GradientCTA from "@/components/GradientCTA";
import PremiumCard from "@/components/PremiumCard";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";

const cards = [
  { icon: FileText, titleKey: "ressources.card1.title", descKey: "ressources.card1.desc", to: "/ressources/fiches-techniques", ctaKey: "ressources.card1.cta" },
  { icon: BookOpen, titleKey: "ressources.card2.title", descKey: "ressources.card2.desc" },
  { icon: Mail, titleKey: "ressources.card3.title", descKey: "ressources.card3.desc" },
];

const Ressources = () => {
  const { t } = useLanguage();

  return (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Ressources Keprea | Fiches Techniques et Articles Biocontrôle</title>
      <meta
        name="description"
        content="Fiches techniques, articles et guides sur le biocontrôle et la biofertilisation. Ressources pratiques pour les agriculteurs et conseillers agricoles."
      />
      <link rel="canonical" href="https://www.keprea.com/ressources" />
      <meta name="robots" content="noindex, follow" />
      <meta property="og:url" content="https://www.keprea.com/ressources" />
      <meta property="og:title" content="Ressources Keprea | Fiches Techniques et Articles Biocontrôle" />
      <meta name="twitter:title" content="Ressources Keprea | Fiches Techniques et Articles Biocontrôle" />
      <meta
        property="og:description"
        content="Fiches techniques, articles et guides sur le biocontrôle et la biofertilisation. Ressources pratiques pour les agriculteurs et conseillers agricoles."
      />
      <meta
        name="twitter:description"
        content="Fiches techniques, articles et guides sur le biocontrôle et la biofertilisation. Ressources pratiques pour les agriculteurs et conseillers agricoles."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Ressources", path: "/ressources" },
      ])}</script>
    </Head>
    <Navigation />

    <main className="flex-1 pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t("ressources.hero.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("ressources.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Prochainement */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {cards.map((item, i) => (
              <PremiumCard key={i} className="p-8 text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3">{t(item.titleKey)}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(item.descKey)}</p>
                {item.to ? (
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    {t(item.ctaKey as string)}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {t("ressources.comingSoon")}
                  </span>
                )}
              </PremiumCard>
            ))}
          </div>
        </div>
      </section>

      <GradientCTA
        title={t("ressources.cta.title")}
        description={t("ressources.cta.desc")}
        primary={{ label: t("contactcta.primary"), to: "/contact" }}
      />
    </main>

    <Footer />
  </div>
  );
};

export default Ressources;
