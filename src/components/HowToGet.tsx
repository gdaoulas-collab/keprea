import type { RefObject } from "react";
import { MessageSquare, FlaskConical, PackageCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    titleKey: "howtoget.step1.title",
    descKey: "howtoget.step1.desc",
  },
  {
    number: "02",
    icon: FlaskConical,
    titleKey: "howtoget.step2.title",
    descKey: "howtoget.step2.desc",
  },
  {
    number: "03",
    icon: PackageCheck,
    titleKey: "howtoget.step3.title",
    descKey: "howtoget.step3.desc",
  },
];

const HowToGet = () => {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: stepsRef, inView: stepsVisible } = useInView(0.05);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">

        {/* Header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-14 reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t("howtoget.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("howtoget.title")}
          </h2>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            {t("howtoget.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div
          ref={stepsRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-0 reveal reveal-delay-1${stepsVisible ? " is-visible" : ""}`}
        >
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-[3.25rem] left-[calc(50%+3.5rem)] w-[calc(100%-7rem)] h-px"
                  style={{ background: "linear-gradient(90deg, hsl(var(--primary)/0.35), hsl(var(--primary)/0.05))" }}
                  aria-hidden="true"
                />
              )}
              <div className="px-6 py-8 flex flex-col gap-3">
                {/* Step number — decorative, large */}
                <span
                  className="text-5xl font-extrabold leading-none mb-1 tabular-nums"
                  style={{ color: "hsl(var(--primary) / 0.28)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mt-1">{t(step.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowToGet;
