import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h1 style={{ fontSize: '4rem' }}>404</h1>
        <p style={{ fontSize: '1.5rem' }}>Oups... cette page n'existe pas.</p>
        <Link to="/">
          <button style={{ marginTop: '20px' }}>Retour à l’accueil</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
