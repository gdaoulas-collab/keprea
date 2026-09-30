import type { RefObject } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Leaf, FlaskConical, Users, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";

interface AboutProps {
  teaser?: boolean;
  showTitle?: boolean;
}

const About = ({ teaser = false, showTitle = true }: AboutProps) => {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: historyRef, inView: historyVisible } = useInView();
  const { ref: valuesRef, inView: valuesVisible } = useInView(0.05);

  const values = [
    { icon: Leaf, titleKey: "about.value1.title", descKey: "about.value1.desc" },
    { icon: FlaskConical, titleKey: "about.value2.title", descKey: "about.value2.desc" },
    { icon: Users, titleKey: "about.value3.title", descKey: "about.value3.desc" },
    { icon: Target, titleKey: "about.value4.title", descKey: "about.value4.desc" }
  ];

  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        {/* ── Header ── */}
        {showTitle && (
          <div ref={headerRef as RefObject<HTMLDivElement>} className={`mb-12 max-w-2xl reveal${headerVisible ? ' is-visible' : ''}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {t("about.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">{t('about.subtitle')}</p>
          </div>
        )}

        {/* ── Histoire — Double-Bezel ── */}
        <div ref={historyRef as RefObject<HTMLDivElement>} className={`max-w-4xl mx-auto mb-12 reveal reveal-delay-1${historyVisible ? ' is-visible' : ''}`}>
          {/* Outer shell */}
          <div
            className="p-2 rounded-[2rem]"
            style={{
              background: 'hsl(var(--primary)/0.05)',
              border: '1px solid hsl(var(--primary)/0.09)',
              boxShadow: '0 12px 48px hsl(var(--primary)/0.08), 0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            {/* Inner core */}
            <div
              className="bg-background rounded-[calc(2rem-0.5rem)] px-8 py-9 md:px-10"
              style={{
                borderLeft: '3px solid hsl(var(--primary))',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.92)',
              }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-5" style={{ letterSpacing: '-0.01em' }}>
                {t('about.history.title')}
              </h3>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t('about.history.p1')}{' '}
                  {t('about.history.p1.year')}{' '}
                  {t('about.history.p1.by')}{' '}
                  {t('about.history.p1.associates')}{' '}
                  {t('about.history.p1.roles')}{' '}
                  {t('about.history.p1.vision.intro')}{' '}
                  <strong className="text-primary font-semibold">{t('about.history.p1.vision.bold')}</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t('about.history.body')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valeurs (page dédiée) ou lien vers la page (teaser accueil) */}
        {teaser ? (
          <div ref={valuesRef as RefObject<HTMLDivElement>} className={`max-w-4xl mx-auto reveal reveal-delay-2${valuesVisible ? ' is-visible' : ''}`}>
            <Link
              to="/qui-sommes-nous"
              className="group inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary pl-5 pr-2 py-2 font-semibold text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t("about.teaser.link")}
              <span className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        ) : (
          <div ref={valuesRef as RefObject<HTMLDivElement>} className={`grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto reveal reveal-delay-2${valuesVisible ? ' is-visible' : ''}`}>
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-1.5 rounded-[1.75rem] transition-all"
                style={{
                  background: 'hsl(var(--muted)/0.55)',
                  border: '1px solid hsl(var(--border)/0.7)',
                  transitionDuration: '600ms',
                  transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
                }}
              >
                <div
                  className="flex flex-col items-center text-center gap-4 p-7 rounded-[calc(1.75rem-0.375rem)] bg-background transition-all"
                  style={{
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.95)',
                    transitionDuration: '600ms',
                    transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform"
                    style={{
                      background: 'hsl(var(--primary)/0.08)',
                      border: '1px solid hsl(var(--primary)/0.18)',
                      transitionDuration: '500ms',
                      transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)',
                    }}
                  >
                    <value.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} style={{ transitionDuration: '500ms', transitionTimingFunction: 'cubic-bezier(0.32,0.72,0,1)' }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-1.5" style={{ letterSpacing: '-0.01em' }}>
                      {t(value.titleKey)}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t(value.descKey)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default About;
