import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function SubscribeSuccess() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#4CAF50' }}>✔️ {t('subscribe.success.title')}</h1>
        <p>{t('subscribe.success.thanks')}</p>
        <p>{t('subscribe.success.preparation')}</p>

        <Link to="/dashboard">
          <button
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            {t('subscribe.success.dashboard')}
          </button>
        </Link>

        <p style={{ marginTop: '30px' }}>
          {t('subscribe.success.needHelp')} <Link to="/contact">{t('subscribe.success.contactUs')}</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default SubscribeSuccess;


