import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'fr' as Language, flag: '🇫🇷', name: 'Français' },
    { code: 'en' as Language, flag: '🇬🇧', name: 'English' },
    { code: 'es' as Language, flag: '🇪🇸', name: 'Español' },
    { code: 'pt' as Language, flag: '🇧🇷', name: 'Português' },
    { code: 'de' as Language, flag: '🇩🇪', name: 'Deutsch' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <span className="text-xl">{currentLanguage?.flag}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          {/* Overlay pour fermer le dropdown */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu dropdown */}
          <div className="absolute right-0 top-full mt-2 w-40 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset ${
                  language === lang.code ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;