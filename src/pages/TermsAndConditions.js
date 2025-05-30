import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function TermsAndConditions() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const returnTo = searchParams.get('returnTo');

  const handleAccept = () => {
    if (returnTo) {
      navigate(`/website-plans/${returnTo}`);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Conditions Générales d’Utilisation</h1>

      <div className="space-y-4 text-sm leading-relaxed">
        <p>
          En utilisant les services de WinnerDream, vous acceptez les conditions suivantes. Ces
          conditions régissent l’utilisation de nos produits, abonnements et fonctionnalités.
        </p>

        <h2 className="text-xl font-semibold mt-6">1. Abonnements</h2>
        <p>
          L’abonnement mensuel est renouvelé automatiquement. Vous pouvez l’annuler à tout moment
          via votre tableau de bord.
        </p>

        <h2 className="text-xl font-semibold mt-6">2. Paiement</h2>
        <p>
          Tous les paiements sont gérés de manière sécurisée via Stripe. Aucune donnée bancaire
          n’est stockée sur nos serveurs.
        </p>

        <h2 className="text-xl font-semibold mt-6">3. Propriété</h2>
        <p>
          Vous restez propriétaire de vos données. Si vous souscrivez un plan de site web, vous
          pouvez demander un transfert à tout moment.
        </p>

        <h2 className="text-xl font-semibold mt-6">4. Assistance</h2>
        <p>
          Notre équipe est disponible pour vous assister sur les aspects techniques et commerciaux
          via votre espace client.
        </p>

        <h2 className="text-xl font-semibold mt-6">5. Résiliation</h2>
        <p>
          Vous pouvez mettre fin à votre abonnement à tout moment. Aucun remboursement n’est effectué
          pour les périodes déjà entamées.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={handleAccept}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          ✅ J’ai lu et j’accepte
        </button>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded"
        >
          ⬅ Retour
        </button>
      </div>
    </div>
  );
}

export default TermsAndConditions;



