import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/40 mt-auto">
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.4), transparent)" }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Identité */}
          <div>
            <img
              src="/lovable-uploads/eprea_Main_Logo.png"
              alt={t("alt.kepreaFooterLogo")}
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{t("footer.location")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-[0.2em] mb-5">{t("footer.nav.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.nav.solutions")}
                </Link>
              </li>
              <li>
                <Link to="/innovation" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("nav.innovation")}
                </Link>
              </li>
              <li>
                <Link to="/notre-production" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.nav.production")}
                </Link>
              </li>
              <li>
                <Link to="/qui-sommes-nous" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.nav.contact")}
                </Link>
              </li>
              <li>
                <Link to="/ressources" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.nav.ressources")}
                </Link>
              </li>
              <li>
                <Link to="/pourquoi-le-biocontrole" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.nav.whyBiocontrol")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & légal */}
          <div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-[0.2em] mb-5">{t("footer.contact.title")}</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="mailto:contact@keprea.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  contact@keprea.com
                </a>
              </li>
            </ul>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-[0.2em] mb-5">{t("footer.legal.title")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.legal.notice")}
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  {t("footer.legal.privacy")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Keprea. {t("footer.copyright")}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("footer.bottomTagline")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
