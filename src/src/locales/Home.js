import React from 'react';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <div style={{ fontFamily: 'Segoe UI', padding: '30px' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '50px 20px' }}>
        <img src="/img1.png" alt="Logo" style={{ maxWidth: '150px' }} />
        <h1 style={{ fontSize: '2.5em', color: '#2e7d32' }}>
          WinnerDream Business Growth
        </h1>
        <p style={{ fontSize: '1.2em' }}>
          Helping your vision become visible. From branding to business setup.
        </p>
        <button style={{ marginTop: '20px' }}>Explore Our Services</button>
      </section>

      {/* Nos Services */}
      <section style={{ padding: '40px 20px' }}>
        <h2>🛠️ Nos Services</h2>
        <ul>
          <li>Création d’entreprise (LLC)</li>
          <li>Création de site web</li>
          <li>Digitalisation & Réseaux sociaux</li>
          <li>Publicité Facebook / Google</li>
        </ul>
      </section>

      {/* Request a Quote */}
      <section style={{ padding: '40px 20px', background: '#f4f4f4' }}>
        <h2>📩 Request a Quote</h2>
        <p>Need a custom service? Tell us your needs and we'll respond fast!</p>
        <button>Request Now</button>
      </section>

      {/* Book Appointment */}
      <section style={{ padding: '40px 20px' }}>
        <h2>📅 Book Appointment</h2>
        <p>Want to speak with an expert? Schedule a free consultation.</p>
        <button>Book on Calendly</button>
      </section>

      {/* Our Shop */}
      <section style={{ padding: '40px 20px', background: '#f4f4f4' }}>
        <h2>🛍️ Our Shop</h2>
        <p>Discover tools and branding resources made for entrepreneurs.</p>
        <button>Visit the Shop</button>
      </section>

      {/* Our Projects */}
      <section style={{ padding: '40px 20px' }}>
        <h2>🏗️ Our Projects</h2>
        <p>See examples of websites, logos and ads created by WinnerDream.</p>
        <button>View Projects</button>
      </section>
    </div>
  );
}

export default Home;
