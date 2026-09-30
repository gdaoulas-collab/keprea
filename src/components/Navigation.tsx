import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";

  const handleSectionClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (isHomePage) {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    navigate("/contact");
  };

  const navItems = [
    { id: "solutions", label: t("nav.solutions"), href: "/solutions" },
    { id: "innovation", label: t("nav.innovation"), href: "/innovation" },
    { id: "production", label: t("nav.production.short"), href: "/notre-production" },
    { id: "about", label: t("nav.about"), href: "/qui-sommes-nous" },
    { id: "ressources", label: t("nav.ressources"), href: "/ressources" },
  ];

  const isActive = (href: string | null) => {
    if (!href) return false;
    if (href === "/") return location.pathname === "/";
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">

      {/* ── Desktop: floating pill ── */}
      <div className="hidden md:flex h-20 items-center justify-center px-6">
        <div
          className="flex items-center gap-6 px-5 h-[52px] rounded-full border"
          style={{
            background: 'hsl(var(--background) / 0.92)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderColor: 'hsl(var(--border) / 0.5)',
            boxShadow: '0 2px 32px rgba(0,0,0,0.07), 0 0 0 1px hsl(var(--border) / 0.1) inset',
          }}
        >
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="/lovable-uploads/eprea_Main_Logo.png"
              alt={t("alt.kepreaLogo")}
              className="h-9 w-auto hover:opacity-80 transition-opacity duration-200"
            />
          </Link>

          {/* Divider */}
          <div className="h-5 w-px bg-border/60" />

          {/* Nav links */}
          <div className="flex items-center gap-5">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return item.href ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`relative text-sm whitespace-nowrap transition-colors duration-200 pb-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    active
                      ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-foreground/65 hover:text-foreground font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.id}
                  href={isHomePage ? `#${item.id}` : `/#${item.id}`}
                  className="text-sm text-foreground/65 hover:text-foreground font-medium whitespace-nowrap transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="h-5 w-px bg-border/60" />

          {/* Right: language + CTA */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Button
              variant="default"
              size="sm"
              className="rounded-full h-8 px-4 text-xs font-semibold"
              onClick={handleContactClick}
            >
              {t("nav.contact")}
            </Button>
          </div>
        </div>
      </div>

      {/* ── Mobile: full-width bar ── */}
      <div
        className="md:hidden border-b"
        style={{
          background: 'hsl(var(--background) / 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderColor: 'hsl(var(--border))',
        }}
      >
        <div className="flex justify-between items-center h-16 px-4">
          <Link to="/">
            <img
              src="/lovable-uploads/eprea_Main_Logo.png"
              alt={t("alt.kepreaLogo")}
              className="h-10 w-auto"
            />
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSelector />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary relative w-9 h-9 flex items-center justify-center"
              aria-label="Menu"
            >
              {/* Animated hamburger → X */}
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  mobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border bg-background/98">
            <div className="flex flex-col px-6 py-5 space-y-4">
              {navItems.map((item) =>
                item.href ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={`text-base font-medium transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                      isActive(item.href) ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleSectionClick(item.id)}
                    className="text-base font-medium text-foreground/70 hover:text-foreground text-left transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {item.label}
                  </button>
                )
              )}
              <Button variant="default" size="sm" className="w-fit rounded-full" onClick={handleContactClick}>
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
