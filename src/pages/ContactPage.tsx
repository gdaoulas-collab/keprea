import { Head } from "vite-react-ssg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import FieldFeedbackForm from "@/components/FieldFeedbackForm";
import { MapPin, Mail, Clock, Leaf } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const ContactPage = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<"contact" | "terrain">(
    searchParams.get("type") === "terrain" ? "terrain" : "contact"
  );
  const productParam = searchParams.get("product") ?? undefined;

  const selectTab = (tab: "contact" | "terrain") => {
    setActiveTab(tab);
    setSearchParams(tab === "terrain" ? { type: "terrain" } : {}, { replace: true });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('is-visible');
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Head>
        <title>Contactez Keprea | Biosolutions Agricoles à Dole (39)</title>
        <meta
          name="description"
          content="Contactez l'équipe Keprea pour un conseil sur nos biosolutions agricoles, un partenariat ou toute question. Basés à Dole, Jura, réponse sous 48h."
        />
        <link rel="canonical" href="https://www.keprea.com/contact" />
        <meta property="og:url" content="https://www.keprea.com/contact" />
        <meta property="og:title" content="Contactez Keprea | Biosolutions Agricoles à Dole (39)" />
        <meta name="twitter:title" content="Contactez Keprea | Biosolutions Agricoles à Dole (39)" />
        <meta
          property="og:description"
          content="Contactez l'équipe Keprea pour un conseil sur nos biosolutions agricoles, un partenariat ou toute question. Basés à Dole, Jura, réponse sous 48h."
        />
        <meta
          name="twitter:description"
          content="Contactez l'équipe Keprea pour un conseil sur nos biosolutions agricoles, un partenariat ou toute question. Basés à Dole, Jura, réponse sous 48h."
        />
        <script type="application/ld+json">{breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}</script>
      </Head>
      <Navigation />

      <main className="flex-1 pt-20">

        {/* ── Hero ── */}
        {/* Espacements et tailles réduits sur mobile pour que le formulaire soit accessible sans scroll excessif (audit SEO 02/07/2026) */}
        <section className="pt-8 pb-6 sm:pt-24 sm:pb-14 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3 sm:mb-6">
                {t("contactpage.eyebrow")}
              </p>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-3 sm:mb-6">
                {t("contactpage.title")}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {t("contactpage.subtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* ── Split layout : Form (3/5) + Info (2/5) ── */}
        <section className="pb-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

              {/* ── Formulaire ── */}
              <div id="contact-form" className="lg:col-span-3 reveal reveal-delay-1">
                <div role="tablist" aria-label={t("contactpage.tabsAriaLabel")} className="flex gap-2 mb-5">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "contact"}
                    onClick={() => selectTab("contact")}
                    className={`flex-1 px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                      activeTab === "contact"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t('contact.tabs.contact')}
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === "terrain"}
                    onClick={() => selectTab("terrain")}
                    className={`flex-1 px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                      activeTab === "terrain"
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t('contact.tabs.terrain')}
                  </button>
                </div>

                <div role="tabpanel" hidden={activeTab !== "contact"}>
                  <ContactForm embedded />
                </div>
                <div role="tabpanel" hidden={activeTab !== "terrain"}>
                  <FieldFeedbackForm defaultProduct={productParam} />
                </div>
              </div>

              {/* ── Panneau d'information ── */}
              <div className="lg:col-span-2 flex flex-col gap-5">

                {/* Coordonnées */}
                <div className="reveal reveal-delay-2">
                  <div className="p-2 rounded-[2rem] bg-muted/40 ring-1 ring-border/60">
                    <div className="bg-background rounded-[calc(2rem-0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
                        {t("contactpage.coordinates.title")}
                      </p>
                      <div className="space-y-5">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-0.5">{t("contactpage.coordinates.hq.label")}</p>
                            <p className="text-sm text-muted-foreground">{t("footer.location")}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Mail className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-0.5">{t("contactpage.coordinates.email.label")}</p>
                            <a
                              href="mailto:contact@keprea.com"
                              className="text-sm text-primary hover:underline transition-colors"
                            >
                              contact@keprea.com
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Clock className="w-4 h-4 text-primary" strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground mb-0.5">{t("contactpage.coordinates.responseTime.label")}</p>
                            <p className="text-sm text-muted-foreground">{t("contactpage.coordinates.responseTime.value")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carte agriculteurs */}
                <div className="reveal reveal-delay-3">
                  <div className="p-2 rounded-[2rem] bg-primary/5 ring-1 ring-primary/15">
                    <div className="bg-primary/[0.03] rounded-[calc(2rem-0.375rem)] p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <Leaf className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <h2 className="font-semibold text-foreground text-sm leading-tight">
                          {t("contactpage.farmerCard.title")}
                        </h2>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t("contactpage.farmerCard.desc")}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
