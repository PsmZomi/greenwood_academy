
import { initializeApp } from "firebase/app";;
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAYLfNNfrgY7k2ij9HKsF5AGxnm1kC5R9w",
  authDomain: "greenwood-8a997.firebaseapp.com",
  projectId: "greenwood-8a997",
  storageBucket: "greenwood-8a997.appspot.com",
  messagingSenderId: "424878226149",
  appId: "1:424878226149:web:eeda2e1a30ee89c52df20c",
  measurementId: "G-FLKEFWXPG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
