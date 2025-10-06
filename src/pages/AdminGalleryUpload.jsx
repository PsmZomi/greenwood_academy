import React, { useState } from "react";
import axios from "axios";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AdminGalleryUpload() {
  const [file, setFile] = useState(null);
  const [eventKey, setEventKey] = useState(""); // e.g., cultural, sports
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file || !eventKey) return alert("Select file and event");

    setUploading(true);
    try {
      // 1️⃣ Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "gallery_upload"); // your unsigned preset

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload",
        formData
      );

      const url = res.data.secure_url;
      const type = file.type.startsWith("video") ? "video" : "image";

      // 2️⃣ Store metadata in Firestore
      await addDoc(collection(db, "galleryItems", eventKey, "media"), {
        url,
        type,
        uploadedAt: new Date(),
      });

      alert("Upload successful!");
      setFile(null);
      setEventKey("");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }

    setUploading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Gallery Upload</h2>

      <label className="block mb-2 font-semibold">Event Key</label>
      <input
        type="text"
        placeholder="e.g., cultural, sports"
        value={eventKey}
        onChange={(e) => setEventKey(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <label className="block mb-2 font-semibold">Select File</label>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
