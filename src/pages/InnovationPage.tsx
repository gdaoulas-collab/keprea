import { useEffect } from "react";
import type { RefObject } from "react";
import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GradientCTA from "@/components/GradientCTA";
import { Leaf, Shield, Zap, Scale, Bug, BadgeCheck } from "lucide-react";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import innovationHeroImage from "@/assets/Innovation.jpg";
import innovationHeroVideo from "@/assets/Innovation insecte.mp4";

const challenges = [
  { icon: Scale, titleKey: "innovationpage.challenge1.title", textKey: "innovationpage.challenge1.text", cardClass: "md:-rotate-1" },
  { icon: Bug, titleKey: "innovationpage.challenge2.title", textKey: "innovationpage.challenge2.text", cardClass: "md:rotate-1 md:translate-y-5" },
  { icon: BadgeCheck, titleKey: "innovationpage.challenge3.title", textKey: "innovationpage.challenge3.text", cardClass: "md:-rotate-2" },
];

const pillar3Stats = [
  { value: "84%", labelKey: "innovationpage.pillar3.stat1.label" },
  { value: "150", labelKey: "innovationpage.pillar3.stat2.label" },
  { value: "100%", labelKey: "innovationpage.pillar3.stat3.label" },
];

const InnovationPage = () => {
  const { t } = useLanguage();
  const { ref: statsRef, inView: statsVisible } = useInView(0.2);

  const heroStats = [
    { value: "400 M", label: t("innovationpage.hero.stat1.label") },
    { value: "84%", label: t("innovationpage.hero.stat2.label") },
    { value: "0", label: t("innovationpage.hero.stat3.label") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Notre Innovation - Biosolutions à base d'insectes | Keprea</title>
        <meta
          name="description"
          content="Keprea exploite 400 millions d'années de co-évolution entre insectes et plantes pour créer des biosolutions agricoles uniques : sans résidu chimique, efficaces, tracées depuis le Jura."
        />
        <link rel="canonical" href="https://www.keprea.com/innovation" />
        <meta property="og:url" content="https://www.keprea.com/innovation" />
        <meta property="og:title" content="Notre Innovation - Biosolutions à base d'insectes | Keprea" />
        <meta name="twitter:title" content="Notre Innovation - Biosolutions à base d'insectes | Keprea" />
        <meta
          property="og:description"
          content="Keprea exploite 400 millions d'années de co-évolution entre insectes et plantes pour créer des biosolutions agricoles uniques : sans résidu chimique, efficaces, tracées depuis le Jura."
        />
        <meta
          name="twitter:description"
          content="Keprea exploite 400 millions d'années de co-évolution entre insectes et plantes pour créer des biosolutions agricoles uniques : sans résidu chimique, efficaces, tracées depuis le Jura."
        />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Innovation", path: "/innovation" },
        ])}</script>
      </Head>
      <Navigation />

      <main className="flex-1">

        {/* ── Hero — vidéo plein cadre, contenu ancré en bas ── */}
        <section className="relative h-[58vh] min-h-[440px] max-h-[620px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover object-[70%_center] animate-ken-burns"
              src={innovationHeroVideo}
              poster={innovationHeroImage}
              aria-label={t("innovationpage.hero.image.alt")}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
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
                {t("innovationpage.hero.eyebrow")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight tracking-tight mb-5">
                {t("innovationpage.hero.title")}
              </h1>
              <p className="text-lg text-white/85 max-w-xl leading-relaxed">
                {t("innovationpage.hero.lead")}
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

        {/* ── Contexte : le défi agricole ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20 overflow-hidden">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal mb-12 md:mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {t("innovationpage.challenges.title")}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                {t("innovationpage.challenges.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {challenges.map(({ icon: Icon, titleKey, textKey, cardClass }, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} group p-2 rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${cardClass} md:hover:rotate-0 md:hover:translate-y-0 md:hover:-translate-y-2`}
                  style={{
                    background: 'hsl(var(--muted)/0.55)',
                    border: '1px solid hsl(var(--border)/0.7)',
                  }}
                >
                  <div
                    className="relative overflow-hidden rounded-[calc(2rem-0.5rem)] bg-background px-7 py-8"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95)' }}
                  >
                    <span
                      className="pointer-events-none absolute -top-4 -right-2 text-7xl font-extrabold text-primary/[0.06] select-none"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="relative w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-5"
                      style={{ background: 'hsl(var(--primary)/0.08)', border: '1px solid hsl(var(--primary)/0.18)' }}
                    >
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3 className="relative text-base font-semibold text-foreground mb-2">{t(titleKey)}</h3>
                    <p className="relative text-sm text-muted-foreground leading-relaxed">{t(textKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Les 3 piliers de l'innovation Keprea ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                {t("innovationpage.pillars.title")}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
                {t("innovationpage.pillars.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

              {/* Pilier 1 - carte claire */}
              <div
                className="p-[3px] rounded-[2rem]"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
                  boxShadow: "0 4px 40px hsl(var(--primary)/0.09)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-3px)] px-8 py-9 h-full reveal"
                  style={{
                    background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Leaf className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ letterSpacing: "-0.01em" }}>
                    {t("innovationpage.pillar1.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
                    {t("innovationpage.pillar1.desc")}
                  </p>
                </div>
              </div>

              {/* Pilier 2 - carte claire */}
              <div
                className="p-[3px] rounded-[2rem]"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
                  boxShadow: "0 4px 40px hsl(var(--primary)/0.09)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-3px)] px-8 py-9 h-full reveal"
                  style={{
                    background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                  }}
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3" style={{ letterSpacing: "-0.01em" }}>
                    {t("innovationpage.pillar2.title")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
                    {t("innovationpage.pillar2.desc")}
                  </p>
                </div>
              </div>

              {/* Pilier 3 - pleine largeur */}
              <div
                className="lg:col-span-2 p-[3px] rounded-[2rem]"
                style={{
                  background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
                  boxShadow: "0 4px 40px hsl(var(--primary)/0.09)",
                }}
              >
                <div
                  className="rounded-[calc(2rem-3px)] px-8 py-9 reveal"
                  style={{
                    background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3" style={{ letterSpacing: "-0.01em" }}>
                        {t("innovationpage.pillar3.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t("innovationpage.pillar3.desc")}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {pillar3Stats.map((stat, i) => (
                        <div key={i} className="bg-primary/5 rounded-xl p-4">
                          <span className="text-2xl font-extrabold text-primary tracking-tight tabular-nums">{stat.value}</span>
                          <p className="text-xs text-muted-foreground mt-1 leading-snug">{t(stat.labelKey)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <GradientCTA
          title={t("innovationpage.cta.title")}
          description={t("innovationpage.cta.desc")}
          primary={{ label: t("innovationpage.cta.secondary"), to: "/contact" }}
          secondary={{ label: t("innovationpage.cta.primary"), to: "/solutions" }}
        />

      </main>

      <Footer />
    </div>
  );
};

export default InnovationPage;
