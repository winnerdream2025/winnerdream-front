import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

function MyAppointments({ user }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const q = query(collection(db, 'appointments'), where('userId', '==', user.uid));
      const querySnapshot = await getDocs(q);
      setAppointments(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchAppointments();
  }, [user]);

  return (
    <div>
      <h2>Mes Rendez-vous</h2>
      <ul>
        {appointments.map((appt, i) => (
          <li key={i}>{appt.date} - {appt.service}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyAppointments;
