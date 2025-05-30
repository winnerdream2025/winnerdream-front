import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

function MyNotifications({ user }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const q = query(collection(db, 'notifications'), where('userId', '==', user.uid));
      const snapshot = await getDocs(q);
      setNotifications(snapshot.docs.map(doc => doc.data()));
    };
    fetchNotifications();
  }, [user]);

  return (
    <div>
      <h2>Mes Notifications</h2>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyNotifications;
