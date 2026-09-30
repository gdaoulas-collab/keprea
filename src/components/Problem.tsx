import type { RefObject } from "react";
import { Leaf, ShieldCheck, Sprout } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useLanguage } from "@/contexts/LanguageContext";
import PremiumCard from "./PremiumCard";

const challenges = [
  {
    icon: Leaf,
    stat: "84%",
    titleKey: "problem.challenge1.title",
    descKey: "problem.challenge1.desc",
  },
  {
    icon: ShieldCheck,
    stat: "100%",
    titleKey: "problem.challenge2.title",
    descKey: "problem.challenge2.desc",
  },
  {
    icon: Sprout,
    stat: "150",
    titleKey: "problem.challenge3.title",
    descKey: "problem.challenge3.desc",
  },
];

const Problem = () => {
  const { t } = useLanguage();
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: cardsRef, inView: cardsVisible } = useInView(0.05);

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-primary/5 overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <div
          ref={headerRef as RefObject<HTMLDivElement>}
          className={`mb-14 max-w-2xl reveal${headerVisible ? " is-visible" : ""}`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            {t("problem.eyebrow")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-5">
            {t("problem.title")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("problem.subtitle")}
          </p>
        </div>

        {/* Challenge cards */}
        <div
          ref={cardsRef as RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 reveal reveal-delay-1${cardsVisible ? " is-visible" : ""}`}
        >
          {challenges.map((item, i) => (
            <PremiumCard key={i} className="p-6">
              <item.icon className="w-5 h-5 text-primary/40 mb-5" aria-hidden="true" />
              <div className="text-4xl font-bold text-primary mb-3 tracking-tight">{item.stat}</div>
              <h3 className="text-base font-semibold text-foreground mb-2">{t(item.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
            </PremiumCard>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Problem;
