import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';

import PL from './utils/locale/pl.json';
import EN from './utils/locale/en.json';
import DE from './utils/locale/de.json';
import ES from './utils/locale/es.json';

const resources = {
  pl: {
    translation: PL,
  },

  en: {
    translation: EN,
  },

  de: {
    translation: DE,
  },
  
  es: {
    translation: ES,
  },
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultLocale: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;