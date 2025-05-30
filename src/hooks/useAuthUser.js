import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

function useAuthUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}

export default useAuthUser;
