import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SubscribeSuccess() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#4CAF50' }}>✔️ Paiement confirmé</h1>
        <p>Merci pour votre abonnement à <strong>WinnerSite</strong>.</p>
        <p>Votre site est en cours de préparation. Vous recevrez une notification très bientôt.</p>

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
            Accéder au tableau de bord
          </button>
        </Link>

        <p style={{ marginTop: '30px' }}>
          Besoin d’aide ? <Link to="/contact">Contactez notre équipe</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}

export default SubscribeSuccess;

