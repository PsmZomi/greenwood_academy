// src/pages/ProfileContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Create Context
export const ProfileContext = createContext();

// Provider Component
export function ProfileProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        // Fetch user profile from Firestore
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUser({ uid: currentUser.uid, ...docSnap.data() });
        } else {
          // Create default user profile if not exists
          const defaultProfile = {
            name: currentUser.displayName || "New User",
            email: currentUser.email,
            profilePic: currentUser.photoURL || "/images/default-avatar.png",
          };
          await setDoc(docRef, defaultProfile);
          setUser({ uid: currentUser.uid, ...defaultProfile });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ProfileContext.Provider value={{ user, setUser, loading }}>
      {children}
    </ProfileContext.Provider>
  );
}
