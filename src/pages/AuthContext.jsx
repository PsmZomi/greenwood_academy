// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged, updateProfile as firebaseUpdateProfile } from "firebase/auth";
import React from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // ✅ Add a method to update profile
  const updateUserProfile = async (data) => {
    if (!auth.currentUser) return;
    await firebaseUpdateProfile(auth.currentUser, data);
    setCurrentUser({ ...auth.currentUser, ...data }); // trigger re-render
  };

  return (
    <AuthContext.Provider value={{ currentUser, updateUserProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
