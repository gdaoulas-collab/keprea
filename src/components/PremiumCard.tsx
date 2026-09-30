import type { ReactNode, HTMLAttributes } from "react";

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Matière "double-bezel" déjà validée sur Innovation/About : fine bordure en
 * dégradé + fond radial subtil + ombre intérieure. Factorisée ici pour être
 * réutilisée sans dupliquer les styles inline.
 */
const PremiumCard = ({ children, className = "", ...rest }: PremiumCardProps) => {
  return (
    <div
      className="p-[3px] rounded-[2rem]"
      style={{
        background: "linear-gradient(145deg, hsl(var(--primary)/0.22) 0%, hsl(var(--primary)/0.06) 100%)",
        boxShadow: "0 4px 40px hsl(var(--primary)/0.09), 0 1px 3px rgba(0,0,0,0.04)",
      }}
      {...rest}
    >
      <div
        className={`rounded-[calc(2rem-3px)] h-full relative overflow-hidden ${className}`}
        style={{
          background: "radial-gradient(ellipse at 110% -15%, hsl(var(--primary)/0.09) 0%, transparent 55%), hsl(var(--background))",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default PremiumCard;
