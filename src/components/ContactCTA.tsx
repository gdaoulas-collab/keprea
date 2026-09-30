import GradientCTA from "./GradientCTA";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactCTA = () => {
  const { t } = useLanguage();

  return (
    <GradientCTA
      eyebrow={t("contactcta.eyebrow")}
      title={t("contactcta.title")}
      description={t("contactcta.desc")}
      primary={{ label: t("contactcta.primary"), to: "/contact" }}
      secondary={{ label: t("contactcta.secondary"), to: "/solutions" }}
    />
  );
};

export default ContactCTA;
