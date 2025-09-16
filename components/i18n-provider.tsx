"use client";

import { useEffect } from 'react';
import '../lib/i18n';

interface I18nProviderProps {
  children: React.ReactNode;
}

const I18nProvider = ({ children }: I18nProviderProps) => {
  useEffect(() => {
    // Initialize with English by default
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('portfolio-language');
      if (!savedLanguage) {
        localStorage.setItem('portfolio-language', 'en');
      }
    }
  }, []);

  return <>{children}</>;
};

export default I18nProvider;
