'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Language } from './types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage = 'en' }: LanguageProviderProps) {
  // Load language preference from localStorage during initialization
  const getInitialLanguage = (): Language => {
    if (typeof window === 'undefined') return initialLanguage;
    const stored = localStorage.getItem('language') as Language | null;
    return (stored === 'en' || stored === 'es') ? stored : initialLanguage;
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  // Persist language preference to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
}
