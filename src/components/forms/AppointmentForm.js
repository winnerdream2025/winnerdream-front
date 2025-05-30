import React, { useState } from 'react';
import { auth, db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import emailjs from 'emailjs-com';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      alert("Tu dois être connecté pour réserver.");
      return;
    }

    const appointmentDate = new Date(`${formData.date}T${formData.time}`);
    const now = new Date();
    if (appointmentDate <= now) {
      setStatus("❌ La date/heure doit être dans le futur.");
      return;
    }

    setLoading(true);
    try {
      // 🔐 Firestore
      await addDoc(collection(db, 'appointments'), {
        userId: user.uid,
        name: formData.name,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        createdAt: Timestamp.now()
      });

      // ✉️ EmailJS
      await emailjs.send(
        'service_defs57l',        // ← Ton vrai service ID
        'template_f6k3oy4',       // ← Ton vrai template ID
        formData,
        'iP81wysJmLPKiDHrl'       // ← Ta clé publique EmailJS
      );

      setStatus('✅ Rendez-vous confirmé ! Un email a été envoyé.');
      setFormData({ name: '', email: '', date: '', time: '' });
    } catch (error) {
      console.error("❌ Erreur lors de la réservation :", error);
      setStatus('❌ Une erreur est survenue. Réessaie plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '30px auto' }}>
      <h3>📅 Book Appointment</h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <button type="submit" disabled={loading} style={{ padding: '10px', width: '100%' }}>
        {loading ? 'Envoi...' : 'Book Now'}
      </button>

      {status && <p style={{ marginTop: '15px', color: status.startsWith('✅') ? 'green' : 'red' }}>{status}</p>}
    </form>
  );
}

export default AppointmentForm;


