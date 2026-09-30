import { Head } from "vite-react-ssg";
import { ArrowLeft, Leaf, FlaskConical, Microscope, ShieldCheck, ShieldPlus, Recycle, Settings2, Construction } from "lucide-react";
import plantDropletsBg from "@/assets/plant-droplets-bg.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AdvantageGrid from "@/components/AdvantageGrid";
import GradientCTA from "@/components/GradientCTA";
import PremiumCard from "@/components/PremiumCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import { faqJsonLd, serviceJsonLd } from "@/lib/schema";

const faqKeys = [
  { questionKey: "extraits.faq1.q", answerKey: "extraits.faq1.a" },
  { questionKey: "extraits.faq2.q", answerKey: "extraits.faq2.a" },
];

const ExtraitsNaturels = () => {
  const { t } = useLanguage();
  const faqItems = faqKeys.map(({ questionKey, answerKey }) => ({
    q: t(questionKey),
    a: t(answerKey),
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Biopesticides Naturels Keprea | Extraits d'Insectes</title>
        <meta name="description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Compatibles agriculture biologique, zéro résidu chimique, en cours d'homologation." />
        <link rel="canonical" href="https://www.keprea.com/solutions/biopesticides" />
        <meta property="og:url" content="https://www.keprea.com/solutions/biopesticides" />
        <meta property="og:title" content="Biopesticides Naturels Keprea | Extraits d'Insectes" />
        <meta name="twitter:title" content="Biopesticides Naturels Keprea | Extraits d'Insectes" />
        <meta property="og:description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Compatibles agriculture biologique, zéro résidu chimique, en cours d'homologation." />
        <meta name="twitter:description" content="Biopesticides à base d'extraits d'insectes Keprea : molécules bioactives naturelles pour protéger vos cultures. Compatibles agriculture biologique, zéro résidu chimique, en cours d'homologation." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Biopesticides", path: "/solutions/biopesticides" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Biopesticides Keprea : extraits d'insectes",
          description: "Protection foliaire des cultures à base d'extraits bioactifs d'insectes (peptides antimicrobiens, chitine), pour lutte contre les ravageurs sans résidu chimique de synthèse.",
          path: "/solutions/biopesticides",
          serviceType: "Biocontrôle agricole",
        })}</script>
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${plantDropletsBg})`
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('substances.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('substances.subtitle')}</p>
            <span className="inline-flex items-center gap-2 mt-4 text-xs font-semibold uppercase tracking-wide text-white bg-white/15 border border-white/30 px-3 py-1.5 rounded-full">
              <Construction className="w-3.5 h-3.5" aria-hidden="true" />
              {t("extraits.notAvailable.badge")}
            </span>
          </div>
        </header>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">{t("extraits.heading")}</h2>
            </div>
            <div className="max-w-2xl mx-auto mb-10">
              <PremiumCard className="p-6">
                <p className="text-base text-foreground leading-relaxed">
                  <strong>{t("extraits.howItWorks.title")}</strong> {t("extraits.howItWorks.desc")}
                </p>
              </PremiumCard>
            </div>
            <AdvantageGrid
              title={t("extraits.whyChoose.title")}
              advantages={[
                { icon: ShieldCheck, title: t('substances.benefit1.title'), description: t('substances.benefit1.desc') },
                { icon: ShieldPlus, title: t('substances.benefit2.title'), description: t('substances.benefit2.desc') },
                { icon: Recycle, title: t('substances.benefit3.title'), description: t('substances.benefit3.desc') },
                { icon: Settings2, title: t('substances.benefit4.title'), description: t('substances.benefit4.desc') },
              ]}
            />
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('substances.tech.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step1.title')}</h3>
                <p className="text-base text-muted-foreground">{t('substances.tech.step1.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FlaskConical className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step2.title')}</h3>
                <p className="text-base text-muted-foreground">{t('substances.tech.step2.desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t('substances.tech.step3.title')}</h3>
                <p className="text-base text-muted-foreground">{t('substances.tech.step3.desc')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("extraits.faq.title")}</h2>
            <div className="bg-primary/5 rounded-xl border border-primary/10 divide-y divide-primary/10 px-6">
              <Accordion type="single" collapsible>
                {faqItems.map(({ q, a }, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-none">
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t("extraits.cta.title")}
          description={t("extraits.cta.desc")}
          primary={{ label: t("bv.cta.primary"), to: "/contact" }}
          secondary={{ label: t("innovation.link"), to: "/pourquoi-le-biocontrole" }}
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t("extraits.crosssell.title")}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/solutions/bioprotection" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("extraits.crosssell.bioprotection.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("extraits.crosssell.bioprotection.desc")}</p>
              </Link>
              <Link to="/solutions/boosters" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("bv.crosssell.boosters.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("bv.crosssell.boosters.desc")}</p>
              </Link>
              <Link to="/solutions/biofertilisant" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("bv.crosssell.biofertilisant.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("bv.crosssell.biofertilisant.desc")}</p>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ExtraitsNaturels;
