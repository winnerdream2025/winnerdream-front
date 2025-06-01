import React, { useEffect, useState } from 'react';
import i18n from '../i18n';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

const HelloPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [languageSelected, setLanguageSelected] = useState(localStorage.getItem('language') || null);

  useEffect(() => {
    if (languageSelected) {
      i18n.changeLanguage(languageSelected);
    }
  }, [languageSelected]);

  const handleLanguageSelect = (lng) => {
    localStorage.setItem('language', lng);
    setLanguageSelected(lng);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center bg-white">
      <img
        src={logo}
        alt="Logo"
        className="w-32 h-32 mb-6 animate-bounce"
      />
      <h1 className="text-4xl font-bold mb-6">{t('welcome')}</h1>
      <p className="text-lg mb-4">{t('choose_language')}</p>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => handleLanguageSelect('en')}
          className={`px-6 py-2 border rounded ${languageSelected === 'en' ? 'bg-blue-100' : 'border-gray-400 hover:bg-gray-100'}`}
        >
          English
        </button>
        <button
          onClick={() => handleLanguageSelect('fr')}
          className={`px-6 py-2 border rounded ${languageSelected === 'fr' ? 'bg-blue-100' : 'border-gray-400 hover:bg-gray-100'}`}
        >
          Français
        </button>
      </div>

      <button
        onClick={() => navigate('/login')}
        disabled={!languageSelected}
        className={`px-8 py-2 rounded text-white transition ${
          languageSelected
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {t('next')}
      </button>
    </div>
  );
};

export default HelloPage;


