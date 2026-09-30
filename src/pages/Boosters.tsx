import { Head } from "vite-react-ssg";
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Leaf, Puzzle, LifeBuoy } from "lucide-react";
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
  { questionKey: "boosters.faq1.q", answerKey: "boosters.faq1.a" },
  { questionKey: "boosters.faq2.q", answerKey: "boosters.faq2.a" },
  { questionKey: "boosters.faq3.q", answerKey: "boosters.faq3.a" },
  { questionKey: "boosters.faq4.q", answerKey: "boosters.faq4.a" },
];

const cropKeys = [
  "boosters.crop1", "boosters.crop2", "boosters.crop3",
  "boosters.crop4", "boosters.crop5", "boosters.crop6",
];

const boosteaSteps = [
  { titleKey: "boosters.boosteaSteps.step1.title", descKey: "boosters.boosteaSteps.step1.desc" },
  { titleKey: "boosters.boosteaSteps.step2.title", descKey: "boosters.boosteaSteps.step2.desc" },
  { titleKey: "boosters.boosteaSteps.step3.title", descKey: "boosters.boosteaSteps.step3.desc" },
];

const soileaSteps = [
  { titleKey: "boosters.soileaSteps.step1.title", descKey: "boosters.soileaSteps.step1.desc" },
  { titleKey: "boosters.soileaSteps.step2.title", descKey: "boosters.soileaSteps.step2.desc" },
  { titleKey: "boosters.soileaSteps.step3.title", descKey: "boosters.soileaSteps.step3.desc" },
];

const Boosters = () => {
  const { t } = useLanguage();
  const faqItems = faqKeys.map(({ questionKey, answerKey }) => ({
    q: t(questionKey),
    a: t(answerKey),
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Biostimulants Agricoles Keprea | Boostea13 & Soilea110</title>
        <meta name="description" content="Boostea13 et Soilea110 : biostimulants à base d'insectes Keprea pour stimuler la croissance et la résistance des cultures. Micro-peptides, proline, acides aminés." />
        <link rel="canonical" href="https://www.keprea.com/solutions/boosters" />
        <meta property="og:url" content="https://www.keprea.com/solutions/boosters" />
        <meta property="og:title" content="Biostimulants Agricoles Keprea | Boostea13 & Soilea110" />
        <meta name="twitter:title" content="Biostimulants Agricoles Keprea | Boostea13 & Soilea110" />
        <meta property="og:description" content="Boostea13 et Soilea110 : biostimulants à base d'insectes Keprea pour stimuler la croissance et la résistance des cultures. Micro-peptides, proline, acides aminés." />
        <meta name="twitter:description" content="Boostea13 et Soilea110 : biostimulants à base d'insectes Keprea pour stimuler la croissance et la résistance des cultures. Micro-peptides, proline, acides aminés." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Boosters", path: "/solutions/boosters" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Biostimulants Boostea13 et Soilea110",
          description: "Biostimulants agricoles à base d'extraits d'insectes (micro-peptides, proline, acides aminés) pour la vigueur foliaire (Boostea13) et la santé du sol (Soilea110).",
          path: "/solutions/boosters",
          serviceType: "Biostimulant agricole",
        })}</script>
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/5a41caf6-fec0-40ca-984c-f9543cae5d7e.png')`
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('boosters.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('boosters.subtitle')}</p>
          </div>
        </header>

        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-3">{t("boosters.whatIs.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("boosters.whatIs.desc")}
            </p>
            <h3 className="text-xl font-bold text-primary mt-8 mb-3">{t("boosters.micropeptides.title")}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("boosters.micropeptides.desc")}
            </p>
            <h2 className="text-2xl font-bold text-center text-foreground mt-10 mb-6">{t("boosters.choose.title")}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              <PremiumCard className="p-5">
                <h3 className="font-bold text-primary mb-2">{t("boosters.choose.boostea.title")}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t("boosters.choose.boostea.desc")}</p>
                <p className="text-sm text-muted-foreground">{t("boosters.choose.boostea.action")}</p>
              </PremiumCard>
              <PremiumCard className="p-5">
                <h3 className="font-bold text-primary mb-2">{t("boosters.choose.soilea.title")}</h3>
                <p className="text-sm text-muted-foreground mb-3">{t("boosters.choose.soilea.desc")}</p>
                <p className="text-sm text-muted-foreground">{t("boosters.choose.soilea.action")}</p>
              </PremiumCard>
            </div>
            <p className="text-sm text-center text-muted-foreground mt-4">{t("boosters.choose.complementary")}</p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              {t('boosters.range.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-4">Boostea13</h3>
                <p className="text-muted-foreground mb-6">{t('boosters.boostea.desc')}</p>
                <div className="space-y-3 mb-6">
                  {[t('boosters.boostea.benefit1'), t('boosters.boostea.benefit2'), t('boosters.boostea.benefit3')].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-base">{b}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="mt-auto self-start">
                  <Link to="/ressources/fiches-techniques/boostea13">
                    {t('techsheet.cta.viewSheet')}
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-4">Soilea110</h3>
                <p className="text-muted-foreground mb-6">{t('boosters.soilea.desc')}</p>
                <div className="space-y-3 mb-6">
                  {[t('boosters.soilea.benefit1'), t('boosters.soilea.benefit2'), t('boosters.soilea.benefit3')].map((b) => (
                    <div key={b} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                      <span className="text-base">{b}</span>
                    </div>
                  ))}
                </div>
                <Button asChild variant="outline" className="mt-auto self-start">
                  <Link to="/ressources/fiches-techniques/soilea110">
                    {t('techsheet.cta.viewSheet')}
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <AdvantageGrid
              title={t('boosters.why.title')}
              advantages={[
                { icon: TrendingUp, title: t('boosters.why1.title'), description: t('boosters.why1.desc') },
                { icon: Leaf, title: t('boosters.why2.title'), description: t('boosters.why2.desc') },
                { icon: Puzzle, title: t('boosters.why3.title'), description: t('boosters.why3.desc') },
                { icon: LifeBuoy, title: t('boosters.why4.title'), description: t('boosters.why4.desc') },
              ]}
            />
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">{t("boosters.crops.title")}</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              {t("boosters.crops.subtitle")}
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

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("boosters.howto.title")}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Boostea13</h3>
                <div className="space-y-5">
                  {boosteaSteps.map(({ titleKey, descKey }, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t(titleKey)}</p>
                        <p className="text-muted-foreground text-sm">{t(descKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Soilea110</h3>
                <div className="space-y-5">
                  {soileaSteps.map(({ titleKey, descKey }, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{t(titleKey)}</p>
                        <p className="text-muted-foreground text-sm">{t(descKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground tracking-tight mb-10">{t("boosters.results.title")}</h2>
            <PremiumCard className="p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/60 text-center">
                <div className="pb-8 sm:pb-0 sm:pr-8">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight tabular-nums">+5–13%</div>
                  <div className="text-sm text-muted-foreground">{t("boosters.results.stat1.label")}</div>
                </div>
                <div className="pt-8 sm:pt-0 sm:pl-8">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight tabular-nums">{t("boosters.results.stat2.value")}</div>
                  <div className="text-sm text-muted-foreground">{t("boosters.results.stat2.label")}</div>
                </div>
              </div>
            </PremiumCard>
            <p className="text-xs text-muted-foreground text-center mt-5 max-w-xl mx-auto">
              {t("boosters.results.disclaimer")}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("boosters.faq.title")}</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">{t("boosters.feedback.title")}</h2>
            <p className="text-center text-muted-foreground mb-6 text-sm max-w-xl mx-auto">
              {t("boosters.feedback.subtitle")}
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
              <Link to="/contact?type=terrain&product=boosters" className="inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                {t("boosters.feedback.link")}
              </Link>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t('boosters.cta.title')}
          description={t('boosters.cta.desc')}
          primary={{ label: t('product.contact'), to: "/contact" }}
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t("boosters.crosssell.title")}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/solutions/bioprotection" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("extraits.crosssell.bioprotection.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("extraits.crosssell.bioprotection.desc")}</p>
              </Link>
              <Link to="/solutions/biopesticides" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("solutions.biopesticides.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("boosters.crosssell.biopesticides.desc")}</p>
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

export default Boosters;
