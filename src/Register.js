import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

function Register() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Bienvenue ${fullname}, ton compte a été créé 🎉`);
    } catch (error) {
      setMessage(`Erreur : ${error.message}`);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h2>Créer un compte 📝</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nom complet"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
          style={{ padding: '10px', width: '250px', marginBottom: '10px' }}
        /><br />
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', width: '250px', marginBottom: '10px' }}
        /><br />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', width: '250px' }}
        /><br />
        <button type="submit" style={{ marginTop: '20px', padding: '10px 25px' }}>
          S'inscrire
        </button>
      </form>
      {message && <p style={{ marginTop: '20px' }}>{message}</p>}
    </div>
  );
}

export default Register;


