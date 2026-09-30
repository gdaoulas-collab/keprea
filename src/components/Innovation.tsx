import type { RefObject } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";
import PremiumCard from "./PremiumCard";

const Innovation = () => {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: bodyRef, inView: bodyVisible } = useInView(0.04);

  const extraitsBenefits = [
    t("innovation.infographic.substances.benefit1"),
    t("innovation.infographic.substances.benefit2"),
    t("innovation.infographic.substances.benefit3"),
  ];

  const biocontrolStats = [
    { value: t("innovation.infographic.biocontrol.stat1.value"), label: t("innovation.infographic.biocontrol.stat1.label") },
    { value: t("innovation.infographic.biocontrol.stat2.value"), label: t("innovation.infographic.biocontrol.stat2.label") },
  ];

  return (
    <section id="innovation" className="py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">

        {/* Section header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-12 max-w-2xl reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t("innovation.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("innovation.heading")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("innovation.intro")}
          </p>
          <Link
            to="/pourquoi-le-biocontrole"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:opacity-80 transition-opacity mt-4 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {t("innovation.link")}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Two-column layout */}
        <div
          ref={bodyRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-5 reveal reveal-delay-1${bodyVisible ? " is-visible" : ""}`}
        >

          {/* ── Carte 1 : Extraits d'insectes (claire) ── */}
          <PremiumCard className="px-8 py-9">
            {/* Eyebrow */}
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-5"
              style={{ background: 'hsl(var(--primary)/0.08)', border: '1px solid hsl(var(--primary)/0.18)' }}
            >
              {t("innovation.card1.eyebrow")}
            </span>

            <h3 className="text-lg font-bold text-foreground mb-8 leading-snug max-w-[30ch]"
              style={{ letterSpacing: '-0.01em' }}>
              {t("innovation.substances.question")}
            </h3>

            <ul className="flex flex-col gap-0 divide-y" style={{ borderColor: 'hsl(var(--border)/0.5)' }} role="list">
              {extraitsBenefits.map((benefit, i) => (
                <li key={i} className="flex gap-5 items-start py-5 first:pt-0 last:pb-0">
                  <span
                    className="text-3xl font-extrabold tabular-nums shrink-0 leading-none w-10"
                    style={{ color: 'hsl(var(--primary))' }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--foreground)/0.78)' }}>
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </PremiumCard>

          {/* ── Carte 2 : Biocontrôle vivant (claire) ── */}
          <PremiumCard className="px-8 py-9">
            {/* Eyebrow */}
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-5"
              style={{ background: 'hsl(var(--primary)/0.08)', border: '1px solid hsl(var(--primary)/0.18)' }}
            >
              {t("innovation.card2.eyebrow")}
            </span>

            <h3
              className="text-lg font-bold text-foreground mb-8 leading-snug max-w-[30ch]"
              style={{ letterSpacing: '-0.01em' }}
            >
              {t("innovation.biocontrol.question")}
            </h3>

            <ul className="flex flex-col gap-0 divide-y" style={{ borderColor: 'hsl(var(--border)/0.5)' }} role="list">
              {biocontrolStats.map((stat, i) => (
                <li key={i} className="flex gap-5 items-start py-5 first:pt-0 last:pb-0">
                  <span
                    className="text-3xl font-extrabold tabular-nums shrink-0 leading-none min-w-10"
                    style={{ color: 'hsl(var(--primary))' }}
                  >
                    {stat.value}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--foreground)/0.78)' }}>
                    {stat.label}
                  </p>
                </li>
              ))}
            </ul>
          </PremiumCard>

        </div>
      </div>
    </section>
  );
};

export default Innovation;
