import React from 'react';
import img2 from '../images/img2.jpg';
import '../styles/DashboardLayout.css';

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      <header
        className="dashboard-header"
        style={{
          background: `url(${img2}) no-repeat center center / cover`,
          color: '#fff',
          padding: '80px 20px',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <h1>Bienvenue sur votre tableau de bord</h1>
        <p>Gérez vos abonnements, projets, rendez-vous et plus encore.</p>
      </header>

      <main className="dashboard-main">
        {children}
      </main>

      <footer className="dashboard-footer">
        &copy; {new Date().getFullYear()} WinnerDream. Tous droits réservés.
      </footer>
    </div>
  );
}

export default DashboardLayout;
