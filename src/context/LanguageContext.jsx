import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site_lang') || 'EN';
    }
    return 'EN';
  });

  const setLang = (newLang) => {
    const uppercaseLang = newLang.toUpperCase();
    setLangState(uppercaseLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('site_lang', uppercaseLang);
      window.dispatchEvent(new CustomEvent('app_language_change', { detail: uppercaseLang }));
    }
  };

  useEffect(() => {
    const handleCustomChange = (e) => {
      if (e.detail && e.detail !== lang) {
        setLangState(e.detail);
      }
    };
    const handleStorageChange = () => {
      const stored = localStorage.getItem('site_lang');
      if (stored && stored !== lang) {
        setLangState(stored);
      }
    };

    window.addEventListener('app_language_change', handleCustomChange);
    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('app_language_change', handleCustomChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        isTH: lang === 'TH',
        isEN: lang === 'EN',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      lang: 'EN',
      setLang: () => {},
      isTH: false,
      isEN: true,
    };
  }
  return context;
}
