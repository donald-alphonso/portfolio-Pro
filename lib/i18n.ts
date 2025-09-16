import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslations from '../messages/en.json';
import frTranslations from '../messages/fr.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  fr: {
    translation: frTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en', // Force English as default
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    // Remove automatic detection to prevent browser language override
  });

export default i18n;
