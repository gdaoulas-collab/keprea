import { Head } from "vite-react-ssg";
import type { RefObject } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { technicalSheets } from "@/data/technicalSheets";

const FichesTechniques = () => {
  const { t } = useLanguage();
  const { ref: heroRef, inView: heroVisible } = useInView(0.2);
  const { ref: gridRef, inView: gridVisible } = useInView(0.05);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Fiches Techniques Produits Keprea | Boostea13, Soilea110, Fertea432</title>
        <meta
          name="description"
          content="Fiches techniques des produits Keprea : composition, dose d'application, cultures cibles et compatibilités pour Boostea13, Soilea110, Fertea432 et nos gammes de biocontrôle."
        />
        <link rel="canonical" href="https://www.keprea.com/ressources/fiches-techniques" />
        <meta property="og:url" content="https://www.keprea.com/ressources/fiches-techniques" />
        <meta property="og:title" content="Fiches Techniques Produits Keprea" />
        <meta name="twitter:title" content="Fiches Techniques Produits Keprea" />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Ressources", path: "/ressources" },
          { name: "Fiches techniques", path: "/ressources/fiches-techniques" },
        ])}</script>
      </Head>
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="relative overflow-hidden py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 0%, hsl(var(--primary)/0.08) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
          <div
            ref={heroRef as RefObject<HTMLDivElement>}
            className={`container mx-auto max-w-4xl relative reveal${heroVisible ? " is-visible" : ""}`}
          >
            <Link to="/ressources">
              <Button variant="ghost" className="mb-6 -ml-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('nav.ressources')}
              </Button>
            </Link>
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-5 bg-primary/10 border border-primary/20"
            >
              {t('techsheet.hub.title')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
              {t('techsheet.hub.title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{t('techsheet.hub.subtitle')}</p>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div
            ref={gridRef as RefObject<HTMLDivElement>}
            className="container mx-auto max-w-5xl"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {technicalSheets.map((entry, i) => (
                <Link
                  key={entry.slug}
                  to={`/ressources/fiches-techniques/${entry.slug}`}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0 reveal${gridVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: gridVisible ? `${i * 90}ms` : "0ms" }}
                >
                  <span
                    className="pointer-events-none absolute -right-2 -top-5 select-none text-7xl font-black leading-none text-primary/5 transition-colors duration-300 group-hover:text-primary/10"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transform-none">
                      <entry.icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {t(entry.rangeLabelKey)}
                    </span>
                    <h2 className="text-xl font-bold text-foreground mt-1 mb-4">
                      {entry.name ?? t(entry.nameKey as string)}
                    </h2>

                    <span className="mt-auto inline-flex items-center text-sm font-medium text-primary">
                      {t('techsheet.hub.viewSheet')}
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>

                  <span
                    className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full motion-reduce:hidden"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FichesTechniques;
