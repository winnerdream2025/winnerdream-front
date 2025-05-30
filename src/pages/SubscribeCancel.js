import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SubscribeCancel() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1>Abonnement annulé</h1>
        <p>Vous avez annulé le processus de paiement.</p>
        <p>Aucun montant ne vous a été facturé.</p>
        <Link to="/plans">
          <button style={{ marginTop: '20px' }}>Retour aux offres</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default SubscribeCancel;
