'use client';

import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useClickOutside } from '../hooks/useClickOutside';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative" ref={dropdownRef}>
      {isOpen && (
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
      )}
    </div>
  );
}
