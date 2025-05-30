import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import logo from '../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); // ✅ Redirection vers la page d'accueil
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="WinnerDream Logo" className="logo" />
      <h2>Bienvenue sur WinnerDream</h2>
      <p>Connecte-toi pour gérer ton business en ligne</p>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Se connecter</button>
      </form>

      <p>
        Mot de passe oublié ? <a href="/forgot-password">Clique ici</a>
      </p>
    </div>
  );
}

export default Login;



