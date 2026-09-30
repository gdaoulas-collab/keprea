import type { RefObject } from "react";
import { MapPin, Factory, Leaf, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import FranceMap from "./FranceMap";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

interface ProductionProps {
  teaser?: boolean;
}

const Production = ({ teaser = false }: ProductionProps) => {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: bodyRef, inView: bodyVisible } = useInView(0.04);
  const { ref: siteRef, inView: siteVisible } = useInView(0.1);

  return (
    <section id="production" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">

        {/* Header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-12 reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t("production.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("production.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            {t("production.subtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div
            ref={bodyRef as RefObject<HTMLDivElement>}
            className={`relative overflow-hidden rounded-2xl p-8 lg:p-12 reveal reveal-delay-1${bodyVisible ? " is-visible" : ""}`}
            style={{ background: 'hsl(var(--primary) / 0.12)' }}
          >
            <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8${teaser ? " items-center" : ""}`}>

              {/* Left — feature pillars */}
              <div className="lg:col-span-3">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {t("production.excellence")}
                </h3>

                <div className="space-y-8">
                  {[
                    { Icon: MapPin, titleKey: "production.location.title", descKey: "production.location.desc" },
                    { Icon: Factory, titleKey: "production.technology.title", descKey: "production.technology.desc" },
                    { Icon: Leaf, titleKey: "production.environment.title", descKey: "production.environment.desc" },
                  ].map(({ Icon, titleKey, descKey }) => (
                    <div key={titleKey} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 text-base">
                          {t(titleKey)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(descKey)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {teaser ? (
                <>
                  {/* Centre — building photo */}
                  <div className="lg:col-span-5">
                    <div className="aspect-[16/11] rounded-xl overflow-hidden border-2 border-primary/20">
                      <img
                        src="/lovable-uploads/6f3f0723-78e2-48e6-b36a-2520e97f1f40.webp"
                        alt={t("alt.productionSite")}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Right — CTA */}
                  <div className="lg:col-span-4">
                    <div className="flex flex-col justify-between h-full gap-6 p-6 rounded-xl border border-primary/15 bg-background/80">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
                          {t("production.teaser.label")}
                        </p>
                        <p className="text-base font-semibold text-foreground leading-snug mb-2">
                          {t("production.teaser.title")}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t("production.teaser.desc")}
                        </p>
                      </div>
                      <Link
                        to="/notre-production"
                        className="group inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white pl-5 pr-2 py-2 font-semibold text-sm transition-all duration-300 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        {t("production.teaser.link")}
                        <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                /* Right — site photo + map, page dédiée seulement */
                <div
                  ref={siteRef as RefObject<HTMLDivElement>}
                  className={`lg:col-span-9 grid sm:grid-cols-[1.5fr_1fr] gap-5 reveal reveal-delay-1${siteVisible ? " is-visible" : ""}`}
                >
                  <div className="aspect-[16/10] sm:aspect-auto sm:h-full rounded-2xl overflow-hidden border-2 border-primary/20">
                    <img
                      src="/lovable-uploads/6f3f0723-78e2-48e6-b36a-2520e97f1f40.webp"
                      alt={t("alt.productionSite")}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="aspect-[4/3] sm:flex-1 rounded-2xl overflow-hidden border-2 border-primary/20">
                      <FranceMap />
                    </div>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                      {t("production.site.mapCaption")}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Production;
