import type { RefObject } from "react";
import { Head } from "vite-react-ssg";
import { Bug, Archive, FlaskConical, Package, Truck, Users, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Production from "@/components/Production";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import productionLineImage from "@/assets/Ligne de prod.jpg";

const steps = [
  { icon: Bug, titleKey: "notreproduction.step1.title", descKey: "notreproduction.step1.desc" },
  { icon: Archive, titleKey: "notreproduction.step2.title", descKey: "notreproduction.step2.desc" },
  { icon: FlaskConical, titleKey: "notreproduction.step3.title", descKey: "notreproduction.step3.desc" },
  { icon: Package, titleKey: "notreproduction.step4.title", descKey: "notreproduction.step4.desc" },
  { icon: Truck, titleKey: "notreproduction.step5.title", descKey: "notreproduction.step5.desc" },
  { icon: Users, titleKey: "notreproduction.step6.title", descKey: "notreproduction.step6.desc" },
];

const bulletKeys = [
  "notreproduction.bullet1",
  "notreproduction.bullet2",
  "notreproduction.bullet3",
];

const NotreProduction = () => {
  const { t } = useLanguage();
  const { ref: statsRef, inView: statsVisible } = useInView(0.2);
  const { ref: whyRef, inView: whyVisible } = useInView(0.15);
  const { ref: stepsRef, inView: stepsVisible } = useInView(0.08);

  const heroStats = [
    { value: "3 000 m²", label: t("notreproduction.hero.stat1.label") },
    { value: "6", label: t("notreproduction.hero.stat2.label") },
    { value: "100%", label: t("notreproduction.hero.stat3.label") },
  ];

  return (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Notre Production Keprea | Site de Production à Dole, Jura</title>
      <meta
        name="description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <link rel="canonical" href="https://www.keprea.com/notre-production" />
      <meta property="og:url" content="https://www.keprea.com/notre-production" />
      <meta property="og:title" content="Notre Production Keprea | Site de Production à Dole, Jura" />
      <meta name="twitter:title" content="Notre Production Keprea | Site de Production à Dole, Jura" />
      <meta
        property="og:description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <meta
        name="twitter:description"
        content="Découvrez notre process de production de biosolutions à Dole (39) : élevage d'insectes, extraction des principes actifs et formulation de biopesticides et biofertilisants."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Notre production", path: "/notre-production" },
      ])}</script>
    </Head>
    <Navigation />
    <main className="flex-1">
      {/* Hero — photo industrielle plein cadre, contenu ancré en bas */}
      <section className="relative h-[58vh] min-h-[440px] max-h-[620px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productionLineImage}
            alt={t("alt.productionLine")}
            className="w-full h-full object-cover animate-ken-burns"
            width={1920}
            height={1440}
            loading="eager"
          />
          {/* Voile sombre pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/15" aria-hidden="true" />
          {/* Teinte verte très subtile, cohérente avec l'identité de marque */}
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 70% 55% at 15% 100%, hsl(var(--primary)/0.28) 0%, transparent 65%)' }}
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 w-full container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-white/85 mb-5"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.22)' }}
            >
              {t("notreproduction.hero.eyebrow")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight tracking-tight mb-5">
              {t("notreproduction.hero.title")}
            </h1>
            <p className="text-lg text-white/85 max-w-xl leading-relaxed">
              {t("notreproduction.hero.lead")}
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres clés — chevauchent le bas du hero et amorcent une transition douce */}
      <section className="relative bg-gradient-to-b from-primary/[0.07] to-transparent px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">
        <div className="container mx-auto max-w-6xl">
          <div
            ref={statsRef as RefObject<HTMLDivElement>}
            className={`-mt-12 md:-mt-16 relative z-20 grid grid-cols-3 gap-3 md:gap-5 reveal${statsVisible ? " is-visible" : ""}`}
          >
            {heroStats.map((stat, i) => (
              <div
                key={i}
                className="p-[3px] rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)',
                  boxShadow: '0 12px 34px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  className="rounded-[calc(1rem-3px)] px-4 py-5 md:px-6 md:py-6 text-center md:text-left"
                  style={{
                    background: 'hsl(var(--background))',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.92)',
                  }}
                >
                  <div
                    className="text-xl md:text-3xl font-extrabold tracking-tight tabular-nums leading-none"
                    style={{ color: 'hsl(var(--primary))' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] md:text-sm text-muted-foreground leading-snug mt-1.5 md:mt-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi un site unique en France — bandeau argumentaire distinct du bloc Production ci-dessous */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div
            ref={whyRef as RefObject<HTMLDivElement>}
            className={`grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-14 items-center reveal${whyVisible ? " is-visible" : ""}`}
          >
            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-1 lg:border-r lg:border-primary/15 lg:pr-14">
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-primary whitespace-nowrap">2h</div>
              <p className="text-sm text-muted-foreground leading-snug max-w-[14rem]">
                {t("notreproduction.location.stat2.desc")}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                {t("notreproduction.location.title")}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t("notreproduction.why.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("notreproduction.why.desc")}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {bulletKeys.map((key) => (
                  <div key={key} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Production />

      {/* Détail des 6 étapes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            {t("notreproduction.steps.title")}
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {t("notreproduction.steps.subtitle")}
          </p>
          <div ref={stepsRef as RefObject<HTMLDivElement>} className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-primary/15" aria-hidden="true" />
            <div className="space-y-8">
              {steps.map(({ icon: Icon, titleKey, descKey }, i) => (
                <div
                  key={i}
                  className={`relative flex gap-5 reveal${stepsVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: stepsVisible ? `${i * 90}ms` : "0ms" }}
                >
                  <div className="relative z-10 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{t(titleKey)}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
    <Footer />
  </div>
  );
};

export default NotreProduction;
