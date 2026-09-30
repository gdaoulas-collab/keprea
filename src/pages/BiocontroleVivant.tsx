import { Head } from "vite-react-ssg";
import { ArrowLeft, ArrowRight, CheckCircle2, Leaf, Target, Recycle, BadgeCheck, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import aphidImage from "@/assets/Pucerons.jpg";
import pyraleImage from "@/assets/Chenille ravageuse.webp";
import cochenillesImage from "@/assets/Cochenille.webp";
import aleurodeImage from "@/assets/aleurode.jpg";
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
  { questionKey: "bv.faq1.q", answerKey: "bv.faq1.a" },
  { questionKey: "bv.faq2.q", answerKey: "bv.faq2.a" },
  { questionKey: "bv.faq4.q", answerKey: "bv.faq4.a" },
  { questionKey: "bv.faq5.q", answerKey: "bv.faq5.a" },
  { questionKey: "bv.faq6.q", answerKey: "bv.faq6.a" },
];

const cropKeys = ["bv.crop1", "bv.crop3", "bv.crop4", "bv.crop5", "bv.crop6"];

const stepKeys = [
  { titleKey: "bv.step1.title", descKey: "bv.step1.desc" },
  { titleKey: "bv.step2.title", descKey: "bv.step2.desc" },
  { titleKey: "bv.step3.title", descKey: "bv.step3.desc" },
  { titleKey: "bv.step4.title", descKey: "bv.step4.desc" },
  { titleKey: "bv.step5.title", descKey: "bv.step5.desc" },
  { titleKey: "bv.step6.title", descKey: "bv.step6.desc" },
];

const BiocontroleVivant = () => {
  const { t } = useLanguage();
  const faqItems = faqKeys.map(({ questionKey, answerKey }) => ({
    q: t(questionKey),
    a: t(answerKey),
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs</title>
        <meta name="description" content="Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes. Solutions naturelles homologuées AB." />
        <link rel="canonical" href="https://www.keprea.com/solutions/bioprotection" />
        <meta property="og:url" content="https://www.keprea.com/solutions/bioprotection" />
        <meta property="og:title" content="Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs" />
        <meta name="twitter:title" content="Bioprotection Vivante Keprea | Auxiliaires contre Ravageurs" />
        <meta property="og:description" content="Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes. Solutions naturelles homologuées AB." />
        <meta name="twitter:description" content="Biocontrôle vivant Keprea : auxiliaires entomophages pour lutter contre pucerons, pyrales, cochenilles et aleurodes. Solutions naturelles homologuées AB." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Bioprotection", path: "/solutions/bioprotection" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Bioprotection vivante : lâchers d'auxiliaires",
          description: "Fourniture d'insectes auxiliaires vivants pour la lutte biologique contre les ravageurs des cultures.",
          path: "/solutions/bioprotection",
          serviceType: "Biocontrôle agricole",
        })}</script>
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/bf0fefed-2323-4a06-a4f9-b4681de73dfe.png')`
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('biocontrole.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('biocontrole.subtitle')}</p>
          </div>
        </header>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-2xl mx-auto mb-10 text-center">
              <p className="text-base text-muted-foreground leading-relaxed">
                {t("bv.principle")}
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/ressources/fiches-techniques/bioprotection">
                  {t('techsheet.cta.viewSheet')}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
            </div>
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('biocontrole.pests.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { img: aphidImage, alt: t('biocontrole.pest1.title'), title: t('biocontrole.pest1.title') },
                { img: pyraleImage, alt: t('biocontrole.pest2.title'), title: t('biocontrole.pest2.title') },
                { img: cochenillesImage, alt: t('biocontrole.pest3.title'), title: t('biocontrole.pest3.title') },
                { img: aleurodeImage, alt: t('biocontrole.pest4.title'), title: t('biocontrole.pest4.title') },
              ].map(({ img, alt, title }) => (
                <div key={title} className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl text-center">
                  <p className="text-xs font-semibold text-primary/70 uppercase tracking-wide mb-3">{t("bv.targetPest")}</p>
                  <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={img} alt={alt} className="w-full h-full object-cover" />
                    </div>
                    <span
                      className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary border-2 border-background shadow-sm"
                      title={t("bv.targetedTooltip")}
                      aria-hidden="true"
                    >
                      <ShieldCheck className="w-4 h-4 text-primary-foreground" />
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-3">{title}</h3>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                    {t("bv.neutralized")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <AdvantageGrid
              title={t('biocontrole.advantages.title')}
              advantages={[
                { icon: Leaf, title: t('biocontrole.adv1.title'), description: t('biocontrole.adv1.desc') },
                { icon: Target, title: t('biocontrole.adv2.title'), description: t('biocontrole.adv2.desc') },
                { icon: BadgeCheck, title: t('biocontrole.adv4.title'), description: t('biocontrole.adv4.desc') },
                { icon: Recycle, title: t('biocontrole.adv3.title'), description: t('biocontrole.adv3.desc') },
              ]}
            />
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">{t("bv.crops.title")}</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              {t("bv.crops.subtitle")}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {cropKeys.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground tracking-tight mb-10">{t("bv.results.title")}</h2>
            <PremiumCard className="p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/60 text-center">
                <div className="pb-8 sm:pb-0 sm:pr-8">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight tabular-nums">48–72h</div>
                  <div className="text-sm text-muted-foreground">{t("bv.results.stat2.label")}</div>
                </div>
                <div className="pt-8 sm:pt-0 sm:pl-8">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight tabular-nums">{t("bv.results.stat3.value")}</div>
                  <div className="text-sm text-muted-foreground">{t("bv.results.stat3.label")}</div>
                </div>
              </div>
            </PremiumCard>
            <p className="text-xs text-muted-foreground text-center mt-5 max-w-xl mx-auto">
              {t("bv.results.disclaimer")}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">{t("bv.howto.title")}</h2>
            <p className="text-muted-foreground text-center mb-4 max-w-2xl mx-auto">
              {t("bv.howto.intro")}
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-lg px-5 py-4 mb-8 max-w-2xl mx-auto text-sm text-muted-foreground whitespace-pre-line">
              {t("bv.howto.delivery")}
            </div>
            <div className="space-y-6 mb-8">
              {stepKeys.map(({ titleKey, descKey }, i) => (
                <div key={i} className="flex gap-5">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg">
                    {i + 1}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1">{t(titleKey)}</h3>
                    <p className="text-muted-foreground">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-center text-muted-foreground max-w-2xl mx-auto">
              {t("bv.howto.summary")}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("bv.faq.title")}</h2>
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

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">{t("bv.feedback.title")}</h2>
            <p className="text-center text-muted-foreground mb-6 text-sm max-w-xl mx-auto">
              {t("bv.feedback.subtitle")}
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
              <Link to="/contact?type=terrain&product=biocontrole" className="inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                {t("bv.feedback.link")}
              </Link>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t("bv.cta.title")}
          description={t("bv.cta.desc")}
          primary={{ label: t("bv.cta.primary"), to: "/contact" }}
          secondary={{ label: t("innovation.link"), to: "/pourquoi-le-biocontrole" }}
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t("bv.crosssell.title")}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/solutions/biopesticides" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("bv.crosssell.biopesticides.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("bv.crosssell.biopesticides.desc")}</p>
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

export default BiocontroleVivant;
