import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import logo from '../assets/logo.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Un email de réinitialisation a été envoyé.');
      setError('');
    } catch (err) {
      setError("Impossible d'envoyer l'email. Vérifie l'adresse.");
      setMessage('');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="WinnerDream Logo" className="logo" />
      <h2>Réinitialisation du mot de passe</h2>

      <form onSubmit={handleReset} className="login-form">
        <input
          type="email"
          placeholder="Entrez votre email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}

        <button type="submit">Envoyer le lien</button>
      </form>

      <p>
        <a href="/login">Retour à la connexion</a>
      </p>
    </div>
  );
}

export default ForgotPassword;

