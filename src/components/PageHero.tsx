import type { RefObject } from "react";
import { useInView } from "@/hooks/useInView";

interface PageHeroStat {
  value: string;
  label: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  lead: string;
  stats: [PageHeroStat, PageHeroStat, PageHeroStat];
}

const PageHero = ({ eyebrow, title, lead, stats }: PageHeroProps) => {
  const { ref: textRef, inView: textVisible } = useInView(0.2);
  const { ref: statsRef, inView: statsVisible } = useInView(0.2);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      {/* Ambient radial glow — decorative */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 15% 0%, hsl(var(--primary)/0.09) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">

          {/* Left — eyebrow, title, lead */}
          <div
            ref={textRef as RefObject<HTMLDivElement>}
            className={`reveal${textVisible ? " is-visible" : ""}`}
          >
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-semibold text-primary mb-5"
              style={{ background: 'hsl(var(--primary)/0.08)', border: '1px solid hsl(var(--primary)/0.18)' }}
            >
              {eyebrow}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-foreground leading-tight tracking-tight mb-5">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {lead}
            </p>
          </div>

          {/* Right — stacked stat cards, double-bezel */}
          <div
            ref={statsRef as RefObject<HTMLDivElement>}
            className={`grid grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4 reveal reveal-delay-1${statsVisible ? " is-visible" : ""}`}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="p-[3px] rounded-[1.5rem]"
                style={{
                  background: 'linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)',
                  boxShadow: '0 4px 30px hsl(var(--primary)/0.08), 0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                <div
                  className="rounded-[calc(1.5rem-3px)] px-4 py-5 lg:px-6 lg:py-6 text-center lg:text-left"
                  style={{
                    background: 'hsl(var(--background))',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.92)',
                  }}
                >
                  <div
                    className="text-xl lg:text-3xl font-extrabold tracking-tight tabular-nums leading-none"
                    style={{ color: 'hsl(var(--primary))' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] lg:text-sm text-muted-foreground leading-snug mt-1.5 lg:mt-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PageHero;
