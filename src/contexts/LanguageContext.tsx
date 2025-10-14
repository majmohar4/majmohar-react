import React, { createContext, useContext, useState, useMemo, ReactNode } from "react";
import { translations, Language } from "../lang";

type TranslationContent = typeof translations.EN | typeof translations.SLO;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

const getBrowserLanguage = (): Language => {
  if (typeof navigator === "undefined") return "EN";
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith("sl") ? "SLO" : "EN";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language") as Language | null;
    return saved || getBrowserLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  // 🔥 useMemo za stabilen object reference (da HMR ne sproži re-renderja)
  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
