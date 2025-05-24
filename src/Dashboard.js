import React, { useEffect, useState } from 'react';
import { auth, db } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

function Dashboard() {
  const { t } = useTranslation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    loadUser();
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      window.location.href = "/";
    });
  };

  if (!userData) return <p>Loading...</p>;

  return (
    <div>
      <h2>{t("title")}</h2>
      <p><strong>{t("fullname")}:</strong> {userData.fullname}</p>
      <p><strong>{t("email")}:</strong> {userData.email}</p>
      <button onClick={handleLogout}>{t("logout")}</button>
    </div>
  );
}

export default Dashboard;


