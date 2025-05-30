import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { getIdToken } from 'firebase/auth';
import { toast } from 'react-toastify';

function MySubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const token = await getIdToken(user, true);
        const res = await fetch('http://localhost:4242/user-subscription', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const data = await res.json();
        setSubscriptions(data.subscriptions || []);
      } catch (error) {
        console.error('Erreur lors de la récupération :', error);
        toast.error('Erreur de chargement des abonnements');
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Mes Abonnements</h2>
      {subscriptions.length === 0 ? (
        <p>Aucun abonnement actif pour l’instant.</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Plan</th>
              <th className="border px-4 py-2">Statut</th>
              <th className="border px-4 py-2">Prochain Paiement</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((sub, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{sub.type}</td>
                <td className="border px-4 py-2">{sub.status}</td>
                <td className="border px-4 py-2">
                  {sub.nextPaymentDate
                    ? new Date(sub.nextPaymentDate).toLocaleDateString()
                    : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MySubscriptions;

