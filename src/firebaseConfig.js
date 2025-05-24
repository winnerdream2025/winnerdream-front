import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCECLHhTm_kgqzp64yNyvgCdxyM-fswHCQ",
  authDomain: "winners-dream.firebaseapp.com",
  projectId: "winners-dream",
  storageBucket: "winners-dream.firebasestorage.app",
  messagingSenderId: "933664569375",
  appId: "1:933664569375:web:0053aec6c5e4ccc680fd2a",
  measurementId: "G-F4EGJMPYYW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

