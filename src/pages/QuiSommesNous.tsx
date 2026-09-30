import type { RefObject } from "react";
import { Head } from "vite-react-ssg";
import { Rocket, Factory, Layers, BadgeCheck, Leaf, FlaskConical, Users, Target, Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import PageHero from "@/components/PageHero";
import GradientCTA from "@/components/GradientCTA";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

const pressContacts = [
  { name: "Candide Louniangou", email: "candide.louniangou@scopuscommunication.fr", phoneDisplay: "07 63 85 14 46", phoneHref: "+33763851446" },
  { name: "Sylvain Camus", email: "sylvain.camus@scopuscommunication.fr", phoneDisplay: "06 12 16 38 60", phoneHref: "+33612163860" },
];

const timelineSteps = [
  { icon: Rocket, key: "quisommesnous.milestone1" },
  { icon: Factory, key: "quisommesnous.milestone2" },
  { icon: Layers, key: "quisommesnous.milestone3" },
  { icon: BadgeCheck, key: "quisommesnous.milestone4" },
];

const values = [
  { icon: Leaf, titleKey: "about.value1.title", descKey: "about.value1.desc", cardClass: "md:-rotate-2" },
  { icon: FlaskConical, titleKey: "about.value2.title", descKey: "about.value2.desc", cardClass: "md:rotate-1 md:translate-y-6" },
  { icon: Users, titleKey: "about.value3.title", descKey: "about.value3.desc", cardClass: "md:-rotate-1" },
  { icon: Target, titleKey: "about.value4.title", descKey: "about.value4.desc", cardClass: "md:rotate-2 md:translate-y-6" },
];

const QuiSommesNous = () => {
  const { t } = useLanguage();
  const { ref: missionRef, inView: missionVisible } = useInView(0.15);
  const { ref: historyRef, inView: historyVisible } = useInView(0.1);
  const { ref: timelineRef, inView: timelineVisible } = useInView(0.08);
  const { ref: valuesRef, inView: valuesVisible } = useInView(0.1);

  return (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Qui sommes-nous ? | Équipe et Mission Keprea</title>
      <meta
        name="description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <link rel="canonical" href="https://www.keprea.com/qui-sommes-nous" />
      <meta property="og:url" content="https://www.keprea.com/qui-sommes-nous" />
      <meta property="og:title" content="Qui sommes-nous ? | Équipe et Mission Keprea" />
      <meta name="twitter:title" content="Qui sommes-nous ? | Équipe et Mission Keprea" />
      <meta
        property="og:description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <meta
        name="twitter:description"
        content="Keprea, startup de biosolutions agricoles à Dole (Jura). Découvrez notre équipe d'experts, notre histoire et notre mission : des biosolutions à base d'insectes pour une agriculture durable."
      />
      <script type="application/ld+json">{breadcrumbJsonLd([
        { name: "Accueil", path: "/" },
        { name: "Qui sommes-nous", path: "/qui-sommes-nous" },
      ])}</script>
    </Head>
    <Navigation />
    <main className="flex-1 pt-20">
      <PageHero
        eyebrow={t("quisommesnous.hero.eyebrow")}
        title={t("quisommesnous.hero.title")}
        lead={t("quisommesnous.hero.lead")}
        stats={[
          { value: "2024", label: t("quisommesnous.hero.stat1.label") },
          { value: "7", label: t("quisommesnous.hero.stat2.label") },
          { value: "3 000 m²", label: t("quisommesnous.hero.stat3.label") },
        ]}
      />
      {/* Mission & Histoire — cartes en diagonale */}
      <section className="pt-2 pb-12 md:pt-3 md:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="relative">
            {/* Histoire — en haut à gauche */}
            <div
              ref={historyRef as RefObject<HTMLDivElement>}
              className={`p-2 rounded-[2rem] md:w-[62%] reveal${historyVisible ? " is-visible" : ""}`}
              style={{
                background: 'hsl(var(--primary)/0.05)',
                border: '1px solid hsl(var(--primary)/0.09)',
                boxShadow: '0 12px 48px hsl(var(--primary)/0.08), 0 2px 8px rgba(0,0,0,0.03)',
              }}
            >
              <div
                className="bg-background rounded-[calc(2rem-0.5rem)] px-8 py-10 md:px-9"
                style={{
                  borderLeft: '3px solid hsl(var(--primary))',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.92)',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-5"
                  style={{ background: 'hsl(var(--primary)/0.08)', border: '1px solid hsl(var(--primary)/0.18)' }}
                >
                  <Rocket className="w-5 h-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
                  {t('about.history.title')}
                </h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.history.p1')}{' '}
                    {t('about.history.p1.year')}{' '}
                    {t('about.history.p1.by')}{' '}
                    {t('about.history.p1.associates')}{' '}
                    {t('about.history.p1.roles')}{' '}
                    {t('about.history.p1.vision.intro')}{' '}
                    <span className="text-primary">{t('about.history.p1.vision.bold')}</span>
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.history.body')}
                  </p>
                </div>
              </div>
            </div>

            {/* Mission — en bas à droite, chevauche le coin de la carte Histoire */}
            <div
              ref={missionRef as RefObject<HTMLDivElement>}
              className={`relative z-10 mt-6 md:-mt-16 md:ml-auto md:w-[62%] p-2 rounded-[2rem] reveal reveal-delay-1${missionVisible ? " is-visible" : ""}`}
              style={{
                background: 'hsl(var(--muted)/0.55)',
                border: '1px solid hsl(var(--border)/0.7)',
                boxShadow: '0 16px 50px rgba(0,0,0,0.06)',
              }}
            >
              <div
                className="bg-background rounded-[calc(2rem-0.5rem)] px-8 py-10 md:px-9"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-5"
                  style={{ background: 'hsl(var(--primary)/0.08)', border: '1px solid hsl(var(--primary)/0.18)' }}
                >
                  <Target className="w-5 h-5 text-primary" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-4" style={{ letterSpacing: '-0.01em' }}>
                  {t('quisommesnous.mission.title')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('quisommesnous.mission.p1')}{' '}{t('quisommesnous.mission.p2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jalons — timeline chronologique */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground tracking-tight mb-12">
            {t("quisommesnous.milestones.title")}
          </h2>
          <div ref={timelineRef as RefObject<HTMLDivElement>} className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-px bg-primary/15" aria-hidden="true" />
            <div className="space-y-8">
              {timelineSteps.map(({ icon: Icon, key }, i) => (
                <div
                  key={key}
                  className={`relative flex gap-5 reveal${timelineVisible ? " is-visible" : ""}`}
                  style={{ transitionDelay: timelineVisible ? `${i * 90}ms` : "0ms" }}
                >
                  <div className="relative z-10 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <p className="pt-2 text-base text-foreground leading-relaxed">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs — cascade légèrement décalée, pile digitale */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              {t("quisommesnous.values.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              {t("quisommesnous.values.title")}
            </h2>
          </div>
          <div
            ref={valuesRef as RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal${valuesVisible ? " is-visible" : ""}`}
          >
            {values.map((value, index) => (
              <div
                key={index}
                className={`group p-2 rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${value.cardClass} md:hover:rotate-0 md:hover:translate-y-0 md:hover:-translate-y-2`}
                style={{
                  background: 'hsl(var(--muted)/0.55)',
                  border: '1px solid hsl(var(--border)/0.7)',
                }}
              >
                <div
                  className="relative flex flex-col items-center text-center gap-5 px-6 py-10 rounded-[calc(2rem-0.5rem)] bg-background overflow-hidden"
                  style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95)' }}
                >
                  <span
                    className="pointer-events-none absolute -top-4 -right-2 text-7xl font-extrabold text-primary/[0.06] select-none"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110"
                    style={{
                      background: 'hsl(var(--primary)/0.08)',
                      border: '1px solid hsl(var(--primary)/0.18)',
                    }}
                  >
                    <value.icon className="w-7 h-7 text-primary" strokeWidth={1.25} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2" style={{ letterSpacing: '-0.01em' }}>
                      {t(value.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Team />

      <GradientCTA
        eyebrow={t("quisommesnous.cta.eyebrow")}
        title={t("quisommesnous.cta.title")}
        description={t("quisommesnous.cta.desc")}
        primary={{ label: t("contactcta.primary"), to: "/contact" }}
        secondary={{ label: t("innovationpage.cta.primary"), to: "/solutions" }}
      />

      {/* Contact presse */}
      <section className="pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="rounded-2xl border border-border bg-muted/30 px-6 sm:px-8 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
              {t("quisommesnous.press.title")}
            </p>
            <p className="text-sm font-semibold text-foreground mb-5">
              {t("quisommesnous.press.agency")}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {pressContacts.map((contact) => (
                <div key={contact.email}>
                  <p className="text-sm font-medium text-foreground mb-1.5">{contact.name}</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <Mail className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    {contact.email}
                  </a>
                  <a
                    href={`tel:${contact.phoneHref}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 mt-1"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    {contact.phoneDisplay}
                  </a>
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

export default QuiSommesNous;
