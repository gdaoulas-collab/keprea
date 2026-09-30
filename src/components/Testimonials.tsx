import type { RefObject } from "react";
import { CheckCircle, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import PremiumCard from "./PremiumCard";


const credibilityStats = [
  { valueKey: "testimonials.stat1.value", labelKey: "testimonials.stat1.label" },
  { valueKey: "testimonials.stat2.value", labelKey: "testimonials.stat2.label" },
  { valueKey: "testimonials.stat3.value", labelKey: "testimonials.stat3.label" },
  { valueKey: "testimonials.stat4.value", labelKey: "testimonials.stat4.label" },
];

const guarantees = [
  {
    icon: CheckCircle,
    titleKey: "testimonials.guarantee1.title",
    descKey: "testimonials.guarantee1.desc",
  },
  {
    icon: Users,
    titleKey: "testimonials.guarantee2.title",
    descKey: "testimonials.guarantee2.desc",
  },
];

const TrustSection = () => {
  const { t } = useLanguage();
  const { ref: statsRef, inView: statsVisible } = useInView(0.08);
  const { ref: guaranteesRef, inView: guaranteesVisible } = useInView(0.05);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="container mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t("testimonials.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Credibility stats */}
        <div
          ref={statsRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-2 md:grid-cols-4 gap-px mb-12 rounded-xl overflow-hidden bg-border/30 reveal${statsVisible ? " is-visible" : ""}`}
        >
          {credibilityStats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 px-6 py-5 bg-background"
            >
              <span
                className="text-3xl md:text-4xl font-bold text-primary tracking-tight"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {t(s.valueKey)}
              </span>
              <span className="text-xs text-muted-foreground leading-snug">{t(s.labelKey)}</span>
            </div>
          ))}
        </div>

        {/* Guarantee cards */}
        <div
          ref={guaranteesRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 reveal reveal-delay-1${guaranteesVisible ? " is-visible" : ""}`}
        >
          {guarantees.map((item, i) => (
            <PremiumCard key={i} className="p-6 flex flex-col gap-4">
              <div
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
              >
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{t(item.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
            </PremiumCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6 pt-8 border-t border-border">
          <Link
            to="/contact"
            className="group shrink-0 inline-flex items-center gap-3 rounded-full bg-primary hover:bg-primary/90 text-white pl-5 pr-2 py-2 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t("testimonials.cta")}
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-300">
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
