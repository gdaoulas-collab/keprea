import { Head } from "vite-react-ssg";
import { ArrowLeft, ArrowRight, Wheat, Droplets, Leaf, Shield, CheckCircle2 } from "lucide-react";
import logoAb from "@/assets/logo-ab.png";
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
  { questionKey: "biofertilisant.faq1.q", answerKey: "biofertilisant.faq1.a" },
  { questionKey: "biofertilisant.faq2.q", answerKey: "biofertilisant.faq2.a" },
  { questionKey: "biofertilisant.faq3.q", answerKey: "biofertilisant.faq3.a" },
  { questionKey: "biofertilisant.faq4.q", answerKey: "biofertilisant.faq4.a" },
  { questionKey: "biofertilisant.faq5.q", answerKey: "biofertilisant.faq5.a" },
  { questionKey: "biofertilisant.faq6.q", answerKey: "biofertilisant.faq6.a" },
];

const cropKeys = [
  "biofertilisant.crop1", "biofertilisant.crop2", "biofertilisant.crop3",
  "biofertilisant.crop4", "biofertilisant.crop5", "biofertilisant.crop6",
];

const stepKeys = [
  { titleKey: "biofertilisant.step1.title", descKey: "biofertilisant.step1.desc" },
  { titleKey: "biofertilisant.step2.title", descKey: "biofertilisant.step2.desc" },
  { titleKey: "biofertilisant.step3.title", descKey: "biofertilisant.step3.desc" },
  { titleKey: "biofertilisant.step4.title", descKey: "biofertilisant.step4.desc" },
  { titleKey: "biofertilisant.step5.title", descKey: "biofertilisant.step5.desc" },
];

const Biofertilisant = () => {
  const { t } = useLanguage();
  const faqItems = faqKeys.map(({ questionKey, answerKey }) => ({
    q: t(questionKey),
    a: t(answerKey),
  }));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Fertea432 : Biofertilisant Keprea | Fertilisation Organique NPK</title>
        <meta name="description" content="Fertea432, biofertilisant à base d'insectes Keprea : 4% P, 3% N, 2% K, 85% matière organique. Homologué agriculture biologique. Améliore la structure du sol." />
        <link rel="canonical" href="https://www.keprea.com/solutions/biofertilisant" />
        <meta property="og:url" content="https://www.keprea.com/solutions/biofertilisant" />
        <meta property="og:title" content="Fertea432 : Biofertilisant Keprea | Fertilisation Organique NPK" />
        <meta name="twitter:title" content="Fertea432 : Biofertilisant Keprea | Fertilisation Organique NPK" />
        <meta property="og:description" content="Fertea432, biofertilisant à base d'insectes Keprea : 4% P, 3% N, 2% K, 85% matière organique. Homologué agriculture biologique. Améliore la structure du sol." />
        <meta name="twitter:description" content="Fertea432, biofertilisant à base d'insectes Keprea : 4% P, 3% N, 2% K, 85% matière organique. Homologué agriculture biologique. Améliore la structure du sol." />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Biofertilisant", path: "/solutions/biofertilisant" },
        ])}</script>
        <script type="application/ld+json">{faqJsonLd(faqItems.map(({ q, a }) => ({ question: q, answer: a })))}</script>
        <script type="application/ld+json">{serviceJsonLd({
          name: "Fertea432 : biofertilisant organique",
          description: "Biofertilisant organique à libération lente (85% matière organique, NPK 4-3-2) à base d'insectes, pour l'amélioration de la fertilité et de la structure du sol.",
          path: "/solutions/biofertilisant",
          serviceType: "Fertilisation organique",
        })}</script>
      </Head>
      <Navigation />
      <main className="flex-1 pt-20">
        <header className="relative shadow-sm min-h-[280px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('/lovable-uploads/514c70d9-ef8f-4f9f-8df3-f38124715fa6.png')`
          }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10"></div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-24">
            <Link to="/solutions">
              <Button variant="ghost" className="mb-4 text-white border-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('product.back')}
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-white">{t('biofertilisant.title')}</h1>
            <p className="text-xl text-white/90 mt-2">{t('biofertilisant.subtitle')}</p>
          </div>
          <img src={logoAb} alt={t("alt.logoAB")} className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20 object-contain z-10" />
        </header>

        <section className="pt-10 pb-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-primary mb-2">{t("biofertilisant.composition.title")}</h2>
            <p className="text-sm text-muted-foreground mb-8">
              {t("biofertilisant.composition.studyIntro")}{" "}
              <a
                href="https://www.nature.com/articles/s41598-025-87075-8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:opacity-80"
              >
                {t("biofertilisant.composition.studyLink")}
              </a>
              .
            </p>

            {/* Stat principale : matière organique */}
            <div
              className="p-[3px] rounded-[2rem] mb-6"
              style={{
                background: "linear-gradient(145deg, hsl(var(--primary)/0.40) 0%, hsl(var(--primary)/0.08) 100%)",
                boxShadow: "0 4px 40px hsl(var(--primary)/0.12)",
              }}
            >
              <div
                className="rounded-[calc(2rem-3px)] p-8 flex flex-col sm:flex-row items-center gap-6"
                style={{
                  background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                }}
              >
                <div className="text-center sm:text-left">
                  <div className="text-7xl font-bold leading-none mb-2 text-primary">85%</div>
                  <div className="text-xl font-semibold text-foreground">{t('biofertilisant.organic')}</div>
                  <p className="text-muted-foreground mt-2 max-w-sm">{t("biofertilisant.organicMatter.desc")}</p>
                </div>
                <div className="sm:ml-auto text-sm text-muted-foreground text-center sm:text-right">
                  <p>{t("biofertilisant.organicMatter.compare1")}</p>
                  <p className="mt-1">{t("biofertilisant.organicMatter.compare2")}</p>
                </div>
              </div>
            </div>

            {/* Stats NPK secondaires */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "4%", label: t('biofertilisant.phosphore'), desc: t('biofertilisant.phosphore.desc') },
                { value: "3%", label: t('biofertilisant.azote'), desc: t('biofertilisant.azote.desc') },
                { value: "2%", label: t('biofertilisant.potassium'), desc: t('biofertilisant.potassium.desc') },
              ].map(({ value, label, desc }) => (
                <PremiumCard key={label} className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                  <h3 className="text-base font-semibold mb-1">{label}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </PremiumCard>
              ))}
            </div>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/ressources/fiches-techniques/fertea432">
                {t('techsheet.cta.viewSheet')}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <AdvantageGrid
              title={t('biofertilisant.advantages')}
              advantages={[
                { icon: Leaf, title: t('biofertilisant.adv1.title'), description: t('biofertilisant.adv1.desc') },
                { icon: Droplets, title: t('biofertilisant.adv2.title'), description: t('biofertilisant.adv2.desc') },
                { icon: Shield, title: t('biofertilisant.adv3.title'), description: t('biofertilisant.adv3.desc') },
                { icon: Wheat, title: t('biofertilisant.adv4.title'), description: t('biofertilisant.adv4.desc') },
              ]}
            />
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-4">{t("biofertilisant.crops.title")}</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              {t("biofertilisant.crops.subtitle")}
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
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("biofertilisant.howto.title")}</h2>
            <div className="space-y-6">
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
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground tracking-tight mb-10">{t("biofertilisant.results.title")}</h2>
            <PremiumCard className="p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/60 text-center">
                <div className="pb-8 sm:pb-0 sm:pr-8">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight tabular-nums">+20%</div>
                  <div className="text-sm text-muted-foreground">{t("biofertilisant.results.stat1.label")}</div>
                </div>
                <div className="pt-8 sm:pt-0 sm:pl-8">
                  <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight tabular-nums">+18%</div>
                  <div className="text-sm text-muted-foreground">{t("biofertilisant.results.stat2.label")}</div>
                </div>
              </div>
            </PremiumCard>
            <p className="text-xs text-muted-foreground text-center mt-5 max-w-xl mx-auto">
              {t("biofertilisant.results.disclaimer")}
            </p>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-10">{t("biofertilisant.faq.title")}</h2>
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
            <h2 className="text-2xl font-bold text-foreground mb-3 text-center">{t("biofertilisant.feedback.title")}</h2>
            <p className="text-center text-muted-foreground mb-6 text-sm max-w-xl mx-auto">
              {t("biofertilisant.feedback.subtitle")}
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-8 text-center">
              <Link to="/contact?type=terrain&product=biofertilisant" className="inline-block text-sm font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                {t("biofertilisant.feedback.link")}
              </Link>
            </div>
          </div>
        </section>

        <GradientCTA
          title={t('biofertilisant.cta.title')}
          description={t('biofertilisant.cta.desc')}
          primary={{ label: t('product.contact'), to: "/contact" }}
          secondary={{ label: t("biofertilisant.cta.secondary"), to: "/notre-production" }}
        />

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">{t("biofertilisant.crosssell.title")}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link to="/solutions/bioprotection" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("extraits.crosssell.bioprotection.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("extraits.crosssell.bioprotection.desc")}</p>
              </Link>
              <Link to="/solutions/biopesticides" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("solutions.biopesticides.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("boosters.crosssell.biopesticides.desc")}</p>
              </Link>
              <Link to="/solutions/boosters" className="bg-card p-5 rounded-xl border border-border hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-semibold text-primary mb-2">{t("bv.crosssell.boosters.title")}</h3>
                <p className="text-sm text-muted-foreground">{t("bv.crosssell.boosters.desc")}</p>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Biofertilisant;
