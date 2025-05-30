import React, { useState } from 'react';
import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      return setError("Les mots de passe ne correspondent pas.");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      setSuccess("Inscription réussie. Vérifie ton email.");
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError("Erreur lors de l'inscription.");
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="WinnerDream Logo" className="logo" />
      <h2>Créer un compte WinnerDream</h2>

      <form onSubmit={handleRegister} className="login-form">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirme le mot de passe"
          required
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Créer mon compte</button>
      </form>

      <p>
        Déjà un compte ? <a href="/login">Connecte-toi ici</a>
      </p>
    </div>
  );
}

export default Register;








