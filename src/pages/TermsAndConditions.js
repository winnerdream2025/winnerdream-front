import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function TermsAndConditions() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const returnTo = searchParams.get('returnTo');

  const handleAccept = () => {
    if (returnTo) {
      navigate(`/website-plans/${returnTo}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">{t('terms.title')}</h1>

      <div className="space-y-4 text-sm leading-relaxed">
        <p>{t('terms.intro')}</p>

        <h2 className="text-xl font-semibold mt-6">{t('terms.section1.title')}</h2>
        <p>{t('terms.section1.content')}</p>

        <h2 className="text-xl font-semibold mt-6">{t('terms.section2.title')}</h2>
        <p>{t('terms.section2.content')}</p>

        <h2 className="text-xl font-semibold mt-6">{t('terms.section3.title')}</h2>
        <p>{t('terms.section3.content')}</p>

        <h2 className="text-xl font-semibold mt-6">{t('terms.section4.title')}</h2>
        <p>{t('terms.section4.content')}</p>

        <h2 className="text-xl font-semibold mt-6">{t('terms.section5.title')}</h2>
        <p>{t('terms.section5.content')}</p>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          {t('terms.accept')}
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded"
        >
          {t('terms.back')}
        </button>
      </div>
    </div>
  );
}

export default TermsAndConditions;




