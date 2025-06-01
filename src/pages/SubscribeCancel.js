import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function SubscribeCancel() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>{t('subscribe.cancel.title')}</h1>
        <p>{t('subscribe.cancel.message')}</p>
        <p>{t('subscribe.cancel.note')}</p>
        <Link to="/home">
          <button style={{ marginTop: '20px' }}>
            {t('subscribe.cancel.backToPlans')}
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default SubscribeCancel;

