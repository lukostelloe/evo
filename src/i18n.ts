

import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
  .use(Backend) // Use backend plugin for loading translations
  .use(LanguageDetector) // Auto detect language
  .use(initReactI18next) // Initialize react-i18next
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Log information to the console (for development)
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path to translation files in the `public` folder
    },
    react: {
      useSuspense: false, // Optional: set it to `true` if you use Suspense
    },
  });

export default i18n;
