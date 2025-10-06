import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit2, FiLogOut } from "react-icons/fi";
import { auth, db } from "../config/firebase";
import { updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Profile() {
  const user = auth.currentUser;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicFile, setProfilePicFile] = useState(null); // File object
  const [profilePicUrl, setProfilePicUrl] = useState("/images/default-avatar.png"); // Displayed URL
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  // Load profile from Firestore
  useEffect(() => {
    if (!user) return;
    setEmail(user.email);

    const fetchProfile = async () => {
      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || "");
          setProfilePicUrl(data.profilePic || "/images/default-avatar.png");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  // Handle profile picture file selection
  const handlePicChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProfilePicFile(file);
    setProfilePicUrl(URL.createObjectURL(file)); // Preview locally
  };

  // Handle save (submit)
  const handleSave = async () => {
    if (!user) return;

    setUploading(true);
    try {
      let uploadedUrl = profilePicUrl;

      // Upload to Cloudinary if a new file is selected
      if (profilePicFile) {
        const formData = new FormData();
        formData.append("file", profilePicFile);
        formData.append("upload_preset", uploadPreset);

        const res = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
          formData
        );
        uploadedUrl = res.data.secure_url;
      }

      // Update Firebase Auth profile
      await updateProfile(user, { displayName: name, photoURL: uploadedUrl });

      // Update Firestore
      await setDoc(
        doc(db, "users", user.uid),
        { name, profilePic: uploadedUrl },
        { merge: true }
      );

      // Update password if provided
      if (password) {
        // Re-authenticate user first
        const currentPassword = prompt("Enter your current password to confirm:");
        if (!currentPassword) throw new Error("Password confirmation required");

        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);

        await updatePassword(user, password);
        setPassword("");
      }

      alert("Profile updated successfully!");
      setProfilePicFile(null);
    } catch (err) {
      console.error("Error updating profile:", err);
      if (err.code === "auth/requires-recent-login") {
        alert("Please log in again to update your password.");
      } else {
        alert("Failed to update profile. Check console.");
      }
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      alert("Logged out!");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (loading) return <p className="text-center mt-24">Loading profile...</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-24 mb-12">
      {/* Profile Picture */}
      <div className="relative w-32 h-32 mx-auto">
        <img
          src={profilePicUrl}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
        />
        <label
          htmlFor="profilePicInput"
          className="absolute bottom-2 right-2 bg-gray-800 text-white p-1 rounded-full cursor-pointer hover:bg-gray-700"
        >
          <FiEdit2 />
        </label>
        <input
          type="file"
          id="profilePicInput"
          className="hidden"
          accept="image/*"
          onChange={handlePicChange}
        />
        {uploading && <p className="text-xs text-center mt-1">Uploading...</p>}
      </div>

      {/* Name */}
      <div className="mt-4 text-center">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-center border-b border-gray-300 w-full text-lg font-semibold focus:outline-none focus:border-[#00796E]"
        />
      </div>

      {/* Email */}
      <div className="mt-4">
        <label className="text-gray-600 text-sm">Email</label>
        <input
          type="email"
          value={email}
          disabled
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 bg-gray-100 cursor-not-allowed"
        />
      </div>

      {/* Password */}
      <div className="mt-4">
        <label className="text-gray-600 text-sm">Change Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-[#00796E]"
        />
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button
          onClick={handleSave}
          className="w-full bg-[#00796E] text-white py-2 rounded-md hover:bg-[#005f52] transition"
        >
          Save Changes
        </button>
      </div>

      {/* Logout Button */}
      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-100 transition"
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
}
