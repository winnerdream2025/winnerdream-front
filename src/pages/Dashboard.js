import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../firebase/firebase';
import { seedTestData } from '../firebase/firebaseTestData';

import '../styles/dashboard.css';

import MySubscription from '../dashboard/MySubscription';
import MyWebsite from '../dashboard/MyWebsite';
import MyAppointments from '../dashboard/MyAppointments';
import MyForms from '../dashboard/MyForms';
import MyNotifications from '../dashboard/MyNotifications';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        navigate('/login');
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  if (!user) {
    return (
      <div className="dashboard-loading">
        <p>Chargement de votre tableau de bord...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Bienvenue, {user.email}</h1>
          <p className="text-gray-600">Voici un aperçu complet de vos services.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <MySubscription user={user} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <MyWebsite user={user} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <MyAppointments user={user} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <MyForms user={user} />
          </div>
          <div className="bg-white p-4 rounded shadow">
            <MyNotifications user={user} />
          </div>
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => seedTestData(user.uid)}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            ➕ Ajouter des données de test
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;




