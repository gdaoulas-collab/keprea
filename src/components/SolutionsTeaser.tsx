import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Shield, Droplets, Zap, Leaf } from "lucide-react";
import { useEffect } from "react";

const gammes = [
  {
    path: "/solutions/bioprotection",
    icon: Shield,
    titleKey: "solutions.bioprotection.title",
    subtitleKey: "solutions.bioprotection.subtitle",
  },
  {
    path: "/solutions/biopesticides",
    icon: Droplets,
    titleKey: "solutions.biopesticides.title",
    subtitleKey: "solutions.biopesticides.subtitle",
  },
  {
    path: "/solutions/boosters",
    icon: Zap,
    titleKey: "solutions.boosters.title",
    subtitleKey: "solutions.boosters.subtitle",
  },
  {
    path: "/solutions/biofertilisant",
    icon: Leaf,
    titleKey: "solutions.biofertilisant.title",
    subtitleKey: "solutions.biofertilisant.subtitle",
  },
];

const SolutionsTeaser = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const section = document.getElementById("solutions");
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }),
      { threshold: 0.08 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Colonne gauche : texte + CTA ── */}
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {t("solutionsTeaser.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-5">
              {t("solutions.title")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              {t("solutions.subtitle")}
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center justify-between gap-4 h-12 rounded-full bg-primary text-primary-foreground font-semibold text-sm px-5 group transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span>{t("solutionsTeaser.cta")}</span>
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-px transition-transform duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </Link>
          </div>

          {/* ── Colonne droite : 4 lignes gammes ── */}
          <div className="flex flex-col gap-3">
            {gammes.map((g, i) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.path}
                  className={`reveal reveal-delay-${i + 1}`}
                >
                  <Link
                    to={g.path}
                    className="group block p-1.5 rounded-2xl bg-muted/40 ring-1 ring-border/50 hover:ring-primary/25 hover:bg-primary/5 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <div className="bg-background rounded-[calc(1rem-0.25rem)] px-5 py-4 flex items-center gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-sm leading-tight">
                          {t(g.titleKey)}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                          {t(g.subtitleKey)}
                        </p>
                      </div>
                      <ArrowRight
                        className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex-shrink-0"
                        strokeWidth={1.5}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsTeaser;
