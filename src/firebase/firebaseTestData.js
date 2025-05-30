import { db } from './firebase';
import { collection, addDoc, serverTimestamp, getDocs, query, where } from 'firebase/firestore';

export async function seedTestData(userId) {
  try {
    const existing = await getDocs(query(collection(db, 'subscriptions'), where('userId', '==', userId)));
    if (!existing.empty) {
      console.log('ℹ️ Données déjà présentes.');
      return;
    }

    await addDoc(collection(db, 'subscriptions'), {
      userId,
      plan: 'Standard',
      startDate: serverTimestamp(),
      status: 'active',
    });

    await addDoc(collection(db, 'appointments'), {
      userId,
      date: '2025-06-01',
      time: '10:00',
      service: 'Consultation',
    });

    await addDoc(collection(db, 'forms'), {
      userId,
      type: 'Assistance',
      message: 'Je veux de l’aide pour mon site web.',
      submittedAt: serverTimestamp(),
    });

    for (let i = 1; i <= 3; i++) {
      await addDoc(collection(db, 'notifications'), {
        userId,
        title: `Bienvenue ${i}`,
        message: `Merci d’avoir rejoint WinnerDream ${i}`,
        createdAt: serverTimestamp(),
      });
    }

    console.log('✅ Données test ajoutées avec succès.');
  } catch (error) {
    console.error('❌ Erreur :', error);
  }
}
