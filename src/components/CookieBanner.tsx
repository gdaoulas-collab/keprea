import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { initGA4 } from "@/lib/analytics";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "keprea_cookie_consent";

type ConsentStatus = "accepted" | "refused" | null;

const CookieBanner = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<ConsentStatus>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus;
    if (stored === "accepted" || stored === "refused") {
      setStatus(stored);
      if (stored === "accepted") initGA4();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setStatus("accepted");
    initGA4();
  };

  const handleRefuse = () => {
    localStorage.setItem(STORAGE_KEY, "refused");
    setStatus("refused");
  };

  if (status !== null) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookie.ariaLabel")}
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-lg"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-muted-foreground flex-1">
            {t("cookie.text")}{" "}
            <Link to="/politique-confidentialite" className="text-primary hover:underline">
              {t("cookie.learnMore")}
            </Link>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefuse}
            >
              {t("cookie.refuse")}
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
            >
              {t("cookie.accept")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
