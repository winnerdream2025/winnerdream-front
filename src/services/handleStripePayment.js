// handleStripePayment.js
import { auth } from './firebase';

export const handleStripePayment = async (plan, setLoading) => {
  const user = auth.currentUser;
  if (!user) {
    alert("Tu dois être connecté.");
    return;
  }

  setLoading(true);

  const priceId = plan === 'mensuel'
    ? 'price_1RSsMBBMiNbSQeLqBcZ9DOa4'
    : 'price_1RSsMeBMiNbSQeLq68AtRzS5';

  try {
    const token = await user.getIdToken();

    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        priceId,
        userId: user.uid
      }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Erreur : aucune URL retournée");
      console.log(data);
    }
  } catch (error) {
    console.error("Erreur Stripe:", error);
    alert("Erreur lors de la création de la session.");
  } finally {
    setLoading(false);
  }
};
