// src/pages/Home.js
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { WebsitePlans, RegularServices } from '../data/services';
import { useTranslation } from 'react-i18next';
import '../styles/home.css';

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) navigate('/login');
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{t('home.title')}</h1>
        <p>{t('home.subtitle')}</p>
      </header>

      {/* SERVICES */}
      <section className="services">
        <h2>{t('home.services')}</h2>
        <div className="service-list">
          {Array.isArray(RegularServices) &&
            RegularServices.slice().reverse().map((service) => (
              <div className="service" key={service.slug}>
                <h3>{service.icon} {service.title}</h3>
                <p>{service.description}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  {t('home.explore')}
                </Link>
              </div>
            ))}
        </div>
      </section>

      {/* PLANS */}
      <section className="services">
        <h2>{t('home.websitePlans')}</h2>
        <div className="service-list">
          {Array.isArray(WebsitePlans) &&
            WebsitePlans.map((plan) => (
              <div className="service" key={plan.type}>
                <h3>{plan.title}</h3>
                <p className="text-green-600 font-semibold">{plan.price} €/mois</p>
                <ul>
                  {Array.isArray(plan.features) &&
                    plan.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <Link
                  to={`/website-plans/${plan.type}`}
                  className="mt-2 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  {t('home.explore')}
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;






















