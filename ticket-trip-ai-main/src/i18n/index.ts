import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import zh from './locales/zh.json';
import vi from './locales/vi.json';
import ko from './locales/ko.json';
import fil from './locales/fil.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  vi: { translation: vi },
  ko: { translation: ko },
  fil: { translation: fil },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;