import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { WebsitePlans } from '../data/services';
import { loadStripe } from '@stripe/stripe-js';
import { getIdToken } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useTranslation } from 'react-i18next';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PlanDetail() {
  const { t } = useTranslation();
  const { type } = useParams();
  const navigate = useNavigate();
  const plan = WebsitePlans.find((p) => p.type === type);
  const [accepted, setAccepted] = useState(false);

  if (!plan) {
    navigate('/home');
    return null;
  }

  const handleSubscribe = async (planCode) => {
    if (!accepted) {
      alert(t('planDetail.alert.acceptTerms'));
      return;
    }

    try {
      const user = auth.currentUser;
      if (!user) {
        alert(t('planDetail.alert.login'));
        return;
      }

      const token = await getIdToken(user, true);

      const response = await fetch("http://localhost:4242/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ planCode, userId: user.uid }),
      });

      const data = await response.json();
      console.log("📩 Stripe backend response:", data);

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(t('planDetail.alert.noUrl'));
      }
    } catch (err) {
      console.error("❌ Stripe error:", err);
      alert(t('planDetail.alert.subscribeError'));
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{plan.title}</h1>
      <p className="text-gray-600 italic mb-4">{plan.description}</p>

      <p className="text-green-700 font-bold text-2xl mb-6">
        {plan.price} € / mois
      </p>

      <div className="bg-gray-100 p-4 rounded-md mb-6">
        <h2 className="font-semibold mb-2 text-lg">{t('planDetail.includes')}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {plan.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        {plan.bonus && (
          <p className="mt-3 text-sm text-blue-700 font-medium">
            {t('planDetail.bonus')} {plan.bonus}
          </p>
        )}
      </div>

      <div className="mb-4">
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
            className="mr-2"
          />
          {t('planDetail.acceptTerms.label')}
          <Link
            to={`/terms-and-conditions?returnTo=${type}`}
            className="underline text-blue-600"
            target="_blank"
          >
            {t('planDetail.acceptTerms.link')}
          </Link>.
        </label>
      </div>

      <div className="flex gap-4 mt-4">
        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          {t('planDetail.appointment')}
        </Link>
        <button
          onClick={() => handleSubscribe(plan.stripePriceId)}
          disabled={!accepted}
          className={`px-6 py-2 rounded text-white ${
            accepted ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          {t('planDetail.subscribe')}
        </button>
      </div>
    </div>
  );
}

export default PlanDetail;








