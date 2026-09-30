import { Head } from "vite-react-ssg";
import type { RefObject } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GradientCTA from "@/components/GradientCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { getTechnicalSheet, specRowIcons } from "@/data/technicalSheets";

const FicheTechniqueDetail = () => {
  const { t } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getTechnicalSheet(slug) : undefined;
  const { ref: headerRef, inView: headerVisible } = useInView(0.2);
  const { ref: specsRef, inView: specsVisible } = useInView(0.05);
  const { ref: cropsRef, inView: cropsVisible } = useInView(0.1);

  if (!entry) {
    return <Navigate to="/ressources/fiches-techniques" replace />;
  }

  const productName = entry.name ?? t(entry.nameKey as string);
  const Icon = entry.icon;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>{productName} : Fiche Technique Keprea</title>
        <meta
          name="description"
          content={`Fiche technique ${productName} : composition, mode d'application, cultures cibles et compatibilités.`}
        />
        <link rel="canonical" href={`https://www.keprea.com/ressources/fiches-techniques/${entry.slug}`} />
        <meta property="og:url" content={`https://www.keprea.com/ressources/fiches-techniques/${entry.slug}`} />
        <meta property="og:title" content={`${productName} : Fiche Technique Keprea`} />
        <meta name="twitter:title" content={`${productName} : Fiche Technique Keprea`} />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Ressources", path: "/ressources" },
          { name: "Fiches techniques", path: "/ressources/fiches-techniques" },
          { name: productName, path: `/ressources/fiches-techniques/${entry.slug}` },
        ])}</script>
      </Head>
      <Navigation />

      <main className="flex-1 pt-20">
        <section className="relative overflow-hidden py-14 md:py-20 px-4 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 0%, hsl(var(--primary)/0.08) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
          <div
            ref={headerRef as RefObject<HTMLDivElement>}
            className={`container mx-auto max-w-3xl relative reveal${headerVisible ? " is-visible" : ""}`}
          >
            <Link to="/ressources/fiches-techniques">
              <Button variant="ghost" className="mb-6 -ml-3">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('techsheet.detail.backToHub')}
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary flex-shrink-0">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-medium text-primary uppercase tracking-wide">
                  {t(entry.rangeLabelKey)}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
                  {productName}
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div
            ref={specsRef as RefObject<HTMLDivElement>}
            className={`container mx-auto max-w-3xl reveal${specsVisible ? " is-visible" : ""}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {entry.rows.map((row, i) => {
                const RowIcon = specRowIcons[row.labelKey];
                return (
                  <div
                    key={`${row.labelKey}-${i}`}
                    className="rounded-2xl border border-border bg-card p-5"
                    style={{ transitionDelay: specsVisible ? `${i * 60}ms` : "0ms" }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {RowIcon && (
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                          <RowIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      )}
                      <dt className="text-xs font-semibold text-primary uppercase tracking-wide">{t(row.labelKey)}</dt>
                    </div>
                    <dd className="text-sm sm:text-base text-foreground leading-relaxed">{t(row.valueKey)}</dd>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div
            ref={cropsRef as RefObject<HTMLDivElement>}
            className={`container mx-auto max-w-3xl reveal${cropsVisible ? " is-visible" : ""}`}
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">{t(entry.cropsLabelKey)}</h2>
            <div className="flex flex-wrap gap-2.5 mb-12">
              {entry.cropKeys.map((cropKey) => (
                <span
                  key={cropKey}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {t(cropKey)}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="outline">
                <Link to={entry.rangePath}>
                  {t('techsheet.detail.viewRangePage')}
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/ressources/fiches-techniques">
                  {t('techsheet.detail.backToHub')}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t('ressources.cta.title')}
          description={t('ressources.cta.desc')}
          primary={{ label: t('product.contact'), to: "/contact" }}
        />
      </main>
      <Footer />
    </div>
  );
};

export default FicheTechniqueDetail;
