import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface AdvantageCardProps {
  icon: LucideIcon;
  index: number;
  title: string;
  description: string;
  badge?: ReactNode;
  minHeightClassName?: string;
}

const AdvantageCard = ({ icon: Icon, index, title, description, badge, minHeightClassName }: AdvantageCardProps) => {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0${minHeightClassName ? ` ${minHeightClassName}` : ""}`}
    >
      <span
        className="pointer-events-none absolute -right-2 -top-5 select-none text-7xl font-black leading-none text-primary/5 transition-colors duration-300 group-hover:text-primary/10"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transform-none">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mb-2 flex items-center gap-2 text-lg font-semibold text-foreground">
          {title}
          {badge}
        </h3>
        <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <span
        className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full motion-reduce:hidden"
        aria-hidden="true"
      />
    </div>
  );
};

export default AdvantageCard;
