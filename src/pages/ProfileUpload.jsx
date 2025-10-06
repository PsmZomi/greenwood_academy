// ProfileUpload.jsx
import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { useAuth } from "./AuthContext"; // adjust path if needed
import { updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

export default function ProfileUpload() {
  const { currentUser } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentUser?.photoURL || "");

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview image locally
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result);
    reader.readAsDataURL(file);

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        // Update Firebase user profile
        await updateProfile(auth.currentUser, { photoURL: data.secure_url });
        alert("Profile picture updated successfully!");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="relative w-10 h-10">
      <label htmlFor="profile-upload" className="cursor-pointer">
        {preview ? (
          <img
            src={preview}
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <FiUser className="w-10 h-10 text-2xl rounded-full bg-gray-200" />
        )}
      </label>
      <input
        id="profile-upload"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
        disabled={uploading}
      />
      {uploading && (
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-full text-white text-xs">
          Uploading...
        </div>
      )}
    </div>
  );
}
