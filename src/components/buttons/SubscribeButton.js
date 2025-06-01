import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { auth } from '../firebase/firebase'; // uniquement si tu utilises Firebase
import { getIdToken } from 'firebase/auth';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function SubscribeButton({ priceId }) {
  const handleClick = async () => {
    try {
      const stripe = await stripePromise;

      const user = auth.currentUser;
      if (!user) {
        alert("Vous devez être connecté.");
        return;
      }

      const token = await getIdToken(user, true);

      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ planCode: priceId, userId: user.uid }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        alert('Une erreur est survenue. Session Stripe non valide.');
      }
    } catch (error) {
      console.error('Erreur Stripe:', error);
      alert('Impossible de procéder au paiement.');
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
      Souscrire
    </button>
  );
}

export default SubscribeButton;
