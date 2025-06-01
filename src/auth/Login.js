// src/auth/Login.js
import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/login.css';
import logo from '../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError(t('login.error'));
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="WinnerDream Logo" className="logo" />
      <h2>{t('login.title')}</h2>
      <p>{t('login.subtitle')}</p>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder={t('login.email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('login.password')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">{t('login.button')}</button>
      </form>

      <p>
        {t('login.forgot')} <a href="/forgot-password">{t('login.click_here')}</a>
      </p>
    </div>
  );
}

export default Login;




