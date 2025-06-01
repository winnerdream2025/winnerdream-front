import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '4rem' }}>{t('notFound.title')}</h1>
        <p style={{ fontSize: '1.5rem' }}>{t('notFound.message')}</p>
        <Link to="/">
          <button style={{ marginTop: '20px' }}>{t('notFound.backHome')}</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;

