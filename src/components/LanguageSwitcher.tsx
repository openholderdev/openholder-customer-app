'use client';

import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="absolute top-full mt-2 right-0 bg-gray-800 rounded shadow-lg overflow-hidden z-10">
          <button
            onClick={() => changeLanguage('es')}
            className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-700 ${
              i18n.language === 'es' ? 'bg-[#ff0049] text-white' : 'text-gray-300'
            }`}
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`block w-full px-4 py-2 text-left text-sm hover:bg-gray-700 ${
              i18n.language === 'en' ? 'bg-[#ff0049] text-white' : 'text-gray-300'
            }`}
          >
            🇬🇧 English
          </button>
    </div>
  );
}
