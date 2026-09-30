import type { RefObject } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useInView } from "@/hooks/useInView";

interface TeamMember {
  name: string;
  roleKey: string;
}

const teamMembers: TeamMember[] = [
  { name: "Alexandre Pernot", roleKey: "team.role.alexandre" },
  { name: "Antoine Hubert", roleKey: "team.role.antoine" },
  { name: "Béatrice Vassy", roleKey: "team.role.beatrice" },
  { name: "Emilien Bohuon", roleKey: "team.role.emilien" },
  { name: "Guillaume Daoulas", roleKey: "team.role.guillaume" },
  { name: "Isabelle Couvert", roleKey: "team.role.isabelle" },
  { name: "Julien Denormandie", roleKey: "team.role.julien" },
  { name: "Pascal Maignet", roleKey: "team.role.pascal" },
  { name: "Thibault Sarton du Jonchay", roleKey: "team.role.thibault" },
  { name: "Thierry Dumbardon Martial", roleKey: "team.role.thierry" },
];

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Team = () => {
  const { t } = useLanguage();
  const { ref: teamRef, inView: teamVisible } = useInView(0.05);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>

        <div ref={teamRef as RefObject<HTMLDivElement>} className={`max-w-4xl mx-auto grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6 reveal${teamVisible ? ' is-visible' : ''}`}>
          {teamMembers.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-primary/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03] group-hover:-translate-y-0.5">
                <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-primary/60 sm:text-3xl">
                  {getInitials(member.name)}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {member.name}
                </p>
                <p className="text-xs text-muted-foreground">{t(member.roleKey)}</p>
                <span className="mx-auto mt-1.5 block h-0.5 w-0 bg-primary transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
