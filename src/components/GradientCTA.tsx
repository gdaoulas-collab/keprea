import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTAAction {
  label: string;
  to?: string;
  href?: string;
}

interface GradientCTAProps {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primary: CTAAction;
  secondary?: CTAAction;
}

const primaryClassName =
  "group inline-flex items-center justify-center gap-3 rounded-full h-12 px-6 text-sm font-semibold bg-primary text-white transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const secondaryClassName =
  "inline-flex items-center justify-center rounded-full h-12 px-6 text-sm font-semibold border border-primary/20 text-primary transition-colors duration-200 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const GradientCTA = ({ eyebrow, title, description, primary, secondary }: GradientCTAProps) => {
  const primaryContent = (
    <>
      <span>{primary.label}</span>
      <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
        <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
      </span>
    </>
  );

  return (
    <section className="pt-4 pb-4 sm:pt-6 sm:pb-6 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div
          className="p-[3px] rounded-[2rem]"
          style={{
            background: "linear-gradient(145deg, hsl(var(--primary)/0.40) 0%, hsl(var(--primary)/0.08) 100%)",
            boxShadow: "0 4px 40px hsl(var(--primary)/0.12)",
          }}
        >
          <div
            className="rounded-[calc(2rem-3px)] px-8 sm:px-10 py-12 sm:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{
              background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
            }}
          >
            <div className="max-w-lg">
              {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  {eyebrow}
                </p>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
                {title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              {primary.to ? (
                <Link to={primary.to} className={primaryClassName}>{primaryContent}</Link>
              ) : (
                <a href={primary.href} className={primaryClassName}>{primaryContent}</a>
              )}
              {secondary && (
                secondary.to ? (
                  <Link to={secondary.to} className={secondaryClassName}>{secondary.label}</Link>
                ) : (
                  <a href={secondary.href} className={secondaryClassName}>{secondary.label}</a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientCTA;
