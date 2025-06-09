// src/components/languageSwitcher/LanguageSwitcher.tsx
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 rounded-md text-sm transition ${
          i18n.language === 'es'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
        }`}
      >
        🇲🇽 ES
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm transition ${
          i18n.language === 'en'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
        }`}
      >
        🇺🇸 EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
