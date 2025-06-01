import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

function ForgotPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage(t('forgot.success'));
      setError('');
    } catch (err) {
      setError(t('forgot.error'));
      setMessage('');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="WinnerDream Logo" className="logo" />
      <h2>{t('forgot.title')}</h2>

      <form onSubmit={handleReset} className="login-form">
        <input
          type="email"
          placeholder={t('forgot.placeholder')}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}

        <button type="submit">{t('forgot.button')}</button>
      </form>

      <p>
        <a href="/login">{t('forgot.back')}</a>
      </p>
    </div>
  );
}

export default ForgotPassword;


