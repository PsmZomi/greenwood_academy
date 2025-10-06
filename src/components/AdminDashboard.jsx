import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import axios from "axios";
import { useDropzone } from "react-dropzone";

// Cloudinary env
const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

// Check if Cloudinary is configured
const isCloudinaryConfigured = CLOUDINARY_URL && CLOUDINARY_UPLOAD_PRESET;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("news");

  // -------- News States --------
  const [newsList, setNewsList] = useState([]);
  const [newNewsTitle, setNewNewsTitle] = useState("");
  const [newNewsExcerpt, setNewNewsExcerpt] = useState("");
  const [newNewsFile, setNewNewsFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // -------- Gallery States --------
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mediaList, setMediaList] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState("");
  const [showAlbumForm, setShowAlbumForm] = useState(false);

  // -------------------- Fetch --------------------
  const fetchNews = async () => {
    const snapshot = await getDocs(collection(db, "notifications"));
    setNewsList(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  const fetchEvents = async () => {
    const snapshot = await getDocs(collection(db, "galleryItems"));
    const eventsData = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    setEvents(eventsData);
    // Auto-select first event if none selected
    if (!selectedEvent && eventsData.length > 0) {
      setSelectedEvent(eventsData[0].id);
    }
  };

  const fetchMedia = async (eventId) => {
    if (!eventId) return;
    const snapshot = await getDocs(
      collection(db, "galleryItems", eventId, "media")
    );
    setMediaList(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchNews();
    fetchEvents();
  },);

  useEffect(() => {
    if (selectedEvent) fetchMedia(selectedEvent);
  }, [selectedEvent]);

  // -------------------- Upload Helper --------------------
  const uploadToCloudinary = async (file) => {
    if (!isCloudinaryConfigured) {
      throw new Error("Cloudinary is not configured. Please check your environment variables.");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    
    try {
      console.log("Uploading to Cloudinary...", CLOUDINARY_URL);
      const response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        timeout: 30000,
      });
      
      console.log("Upload successful:", response.data);
      return {
        url: response.data.secure_url,
        type: file.type.startsWith("video") ? "video" : "image"
      };
    } catch (error) {
      console.error("Cloudinary upload error:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      throw new Error(`Upload failed: ${error.response?.data?.error?.message || error.message}`);
    }
  };

  // -------------------- News Actions --------------------
  const addNews = async () => {
    if (!newNewsTitle || !newNewsExcerpt) {
      alert("Title and excerpt required");
      return;
    }

    let url = "";
    let type = "text"; // Default to text if no file

    if (newNewsFile) {
      if (!isCloudinaryConfigured) {
        alert("Cloudinary is not configured. File uploads are disabled.");
        return;
      }

      setLoading(true);
      try {
        const uploadResult = await uploadToCloudinary(newNewsFile);
        url = uploadResult.url;
        type = uploadResult.type;
      } catch (err) {
        console.error(err);
        alert(`Upload failed: ${err.message}`);
        setLoading(false);
        return;
      }
      setLoading(false);
    }

    try {
      await addDoc(collection(db, "notifications"), {
        title: newNewsTitle,
        excerpt: newNewsExcerpt,
        url,
        type,
        date: new Date().toISOString(),
      });

      setNewNewsTitle("");
      setNewNewsExcerpt("");
      setNewNewsFile(null);
      fetchNews();
      alert("News added successfully!");
    } catch (error) {
      console.error("Error adding news:", error);
      alert("Failed to add news to database");
    }
  };

  const editNews = async (news) => {
    const newTitle = prompt("Edit title:", news.title);
    const newExcerpt = prompt("Edit excerpt:", news.excerpt);
    if (!newTitle || !newExcerpt) return;

    try {
      await setDoc(
        doc(db, "notifications", news.id),
        { ...news, title: newTitle, excerpt: newExcerpt },
        { merge: true }
      );
      fetchNews();
      alert("News updated successfully!");
    } catch (error) {
      console.error("Error updating news:", error);
      alert("Failed to update news");
    }
  };

  const deleteNews = async (newsId) => {
    if (!window.confirm("Delete this news?")) return;
    try {
      await deleteDoc(doc(db, "notifications", newsId));
      fetchNews();
      alert("News deleted successfully!");
    } catch (error) {
      console.error("Error deleting news:", error);
      alert("Failed to delete news");
    }
  };

  // -------------------- Album Management --------------------
  const addAlbum = async () => {
    if (!newAlbumName.trim()) {
      alert("Album name is required");
      return;
    }

    try {
      await addDoc(collection(db, "galleryItems"), {
        label: newAlbumName.trim(),
        createdAt: new Date().toISOString(),
      });
      setNewAlbumName("");
      setShowAlbumForm(false);
      fetchEvents();
      alert("Album created successfully!");
    } catch (error) {
      console.error("Error adding album:", error);
      alert("Failed to create album");
    }
  };

  const editAlbum = async (album) => {
    const newName = prompt("Enter new album name:", album.label);
    if (!newName || !newName.trim()) return;

    try {
      await setDoc(
        doc(db, "galleryItems", album.id),
        { ...album, label: newName.trim() },
        { merge: true }
      );
      fetchEvents();
      alert("Album updated successfully!");
    } catch (error) {
      console.error("Error updating album:", error);
      alert("Failed to update album");
    }
  };

  const deleteAlbum = async (albumId) => {
    if (!window.confirm("Are you sure you want to delete this album? This will also delete all media inside it.")) return;

    try {
      // First delete all media in the album
      const mediaSnapshot = await getDocs(
        collection(db, "galleryItems", albumId, "media")
      );
      
      // Delete each media item
      const deletePromises = mediaSnapshot.docs.map((mediaDoc) =>
        deleteDoc(doc(db, "galleryItems", albumId, "media", mediaDoc.id))
      );
      
      await Promise.all(deletePromises);
      
      // Then delete the album itself
      await deleteDoc(doc(db, "galleryItems", albumId));
      
      // Update UI
      if (selectedEvent === albumId) {
        setSelectedEvent(null);
      }
      fetchEvents();
      alert("Album deleted successfully!");
    } catch (error) {
      console.error("Error deleting album:", error);
      alert("Failed to delete album");
    }
  };

  // -------------------- Gallery Actions --------------------
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (files) => {
      if (!selectedEvent) {
        alert("Please select an album first");
        return;
      }

      if (!isCloudinaryConfigured) {
        alert("Cloudinary is not configured. File uploads are disabled.");
        return;
      }

      setLoading(true);
      let successCount = 0;
      let errorCount = 0;

      for (const file of files) {
        try {
          const uploadResult = await uploadToCloudinary(file);
          await addDoc(collection(db, "galleryItems", selectedEvent, "media"), {
            url: uploadResult.url,
            type: uploadResult.type,
            fileName: file.name,
            size: file.size,
            uploadedAt: new Date(),
          });
          successCount++;
        } catch (err) {
          console.error(`Upload failed for ${file.name}:`, err);
          errorCount++;
        }
      }

      fetchMedia(selectedEvent);
      setLoading(false);

      if (successCount > 0) {
        alert(`Successfully uploaded ${successCount} file(s)`);
      }
      if (errorCount > 0) {
        alert(`Failed to upload ${errorCount} file(s). Check console for details.`);
      }
    },
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
      "video/*": [".mp4", ".mov", ".avi", ".webm"],
    },
  });

  const deleteMedia = async (mediaId) => {
    if (!window.confirm("Delete this media?")) return;
    try {
      await deleteDoc(doc(db, "galleryItems", selectedEvent, "media", mediaId));
      fetchMedia(selectedEvent);
      alert("Media deleted successfully!");
    } catch (error) {
      console.error("Error deleting media:", error);
      alert("Failed to delete media");
    }
  };

  const editMedia = async (media) => {
    const newUrl = prompt("Enter new media URL:", media.url);
    if (!newUrl) return;
    try {
      await setDoc(
        doc(db, "galleryItems", selectedEvent, "media", media.id),
        { ...media, url: newUrl },
        { merge: true }
      );
      fetchMedia(selectedEvent);
      alert("Media updated successfully!");
    } catch (error) {
      console.error("Error updating media:", error);
      alert("Failed to update media");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[110px] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

        {/* Cloudinary Status */}
        {!isCloudinaryConfigured && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
            <strong>Cloudinary Not Configured:</strong> File uploads will not work until Cloudinary environment variables are set.
            <br />
            <span className="text-sm">
              Required: VITE_CLOUDINARY_URL and VITE_CLOUDINARY_UPLOAD_PRESET
            </span>
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200 flex space-x-4">
          <button
            className={`py-2 px-3 border-b-2 font-medium ${
              activeTab === "news"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("news")}
          >
            News
          </button>
          <button
            className={`py-2 px-3 border-b-2 font-medium ${
              activeTab === "gallery"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>

        {/* ------------------- News Tab ------------------- */}
        {activeTab === "news" && (
  <div className="space-y-6 bg-white p-6 rounded-lg shadow border border-gray-200">
    <h2 className="font-semibold text-xl mb-4">Manage News</h2>
    
    <input
      type="text"
      placeholder="Title"
      value={newNewsTitle}
      onChange={(e) => setNewNewsTitle(e.target.value)}
      className="w-full mb-2 border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      placeholder="Excerpt"
      value={newNewsExcerpt}
      onChange={(e) => setNewNewsExcerpt(e.target.value)}
      className="w-full mb-2 border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500"
      rows="3"
    />
    <div className="mb-2">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Media File (Optional) {!isCloudinaryConfigured && "(Uploads disabled)"}
      </label>
      <input 
        type="file" 
        onChange={(e) => setNewNewsFile(e.target.files[0])} 
        className="w-full"
        accept="image/*,video/*"
        disabled={!isCloudinaryConfigured}
      />
      {newNewsFile && (
        <p className="text-sm text-green-600 mt-1">
          Selected: {newNewsFile.name}
        </p>
      )}
      {!isCloudinaryConfigured && (
        <p className="text-sm text-yellow-600 mt-1">
          File uploads disabled - Cloudinary not configured
        </p>
      )}
    </div>
    <button
      onClick={addNews}
      disabled={loading}
      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:bg-blue-400 disabled:cursor-not-allowed"
    >
      {loading ? "Uploading..." : "Add News"}
    </button>

    <div className="mt-6">
      <h3 className="font-semibold text-lg mb-3">Existing News</h3>
      {newsList.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No news items yet.</p>
      ) : (
        <div className="space-y-4">
          {newsList.map((n) => (
            <div
              key={n.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Media Preview */}
                {n.url && (
                  <div className="md:w-48 flex-shrink-0">
                    {n.type === "video" ? (
                      <div className="relative">
                        <video
                          src={n.url}
                          controls
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          VIDEO
                        </div>
                      </div>
                    ) : n.type === "image" ? (
                      <div className="relative">
                        <img
                          src={n.url}
                          alt={n.title}
                          className="w-full h-32 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%239ca3af'%3EImage%3C/text%3E%3C/svg%3E";
                          }}
                        />
                        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          IMAGE
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">No media</span>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{n.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(n.date).toLocaleDateString()} • {n.type?.toUpperCase() || 'TEXT'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => editNews(n)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                        title="Edit news"
                      >
                        ✎ Edit
                      </button>
                      <button
                        onClick={() => deleteNews(n.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                        title="Delete news"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">{n.excerpt}</p>
                  
                  {/* Debug Info - Remove in production */}
                  {n.url && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-400 break-all">
                        URL: {n.url}
                      </p>
                      <p className="text-xs text-gray-400">
                        Type: {n.type} | Has URL: {n.url ? 'Yes' : 'No'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}
        {/* ------------------- Gallery Tab ------------------- */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            {/* Album Management Section */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-xl">Manage Albums</h2>
                <button
                  onClick={() => setShowAlbumForm(!showAlbumForm)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                >
                  {showAlbumForm ? "Cancel" : "+ New Album"}
                </button>
              </div>

              {/* New Album Form */}
              {showAlbumForm && (
                <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                  <input
                    type="text"
                    placeholder="Enter album name"
                    value={newAlbumName}
                    onChange={(e) => setNewAlbumName(e.target.value)}
                    className="w-full mb-3 border px-3 py-2 rounded focus:ring-2 focus:ring-green-500"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={addAlbum}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                      Create Album
                    </button>
                    <button
                      onClick={() => setShowAlbumForm(false)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Albums List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((album) => (
                  <div
                    key={album.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${
                      selectedEvent === album.id
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedEvent(album.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{album.label}</h3>
                      <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
                        <button
                          onClick={() => editAlbum(album)}
                          className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded text-sm"
                        >
                          ✎
                        </button>
                        <button
                          onClick={() => deleteAlbum(album.id)}
                          className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded text-sm"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Created: {new Date(album.createdAt).toLocaleDateString()}
                    </p>
                    {selectedEvent === album.id && (
                      <div className="mt-2 text-sm text-blue-600 font-medium">
                        ✓ Selected
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {events.length === 0 && (
                <p className="text-gray-500 text-center py-4">
                  No albums created yet. Create your first album to get started.
                </p>
              )}
            </div>

            {/* Media Management Section */}
            {selectedEvent && (
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 className="font-semibold text-xl mb-4">
                  Media in "{events.find((e) => e.id === selectedEvent)?.label}"
                </h2>

                {/* Upload Zone */}
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    isCloudinaryConfigured 
                      ? "border-gray-300 hover:bg-gray-50" 
                      : "border-red-300 bg-red-50 cursor-not-allowed"
                  }`}
                >
                  <input {...getInputProps()} />
                  {isCloudinaryConfigured ? (
                    <>
                      <p className="text-gray-600">
                        Drag & drop files here, or click to select files
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Supports images (JPEG, PNG, GIF, WebP) and videos (MP4, MOV, AVI, WebM)
                      </p>
                    </>
                  ) : (
                    <p className="text-red-600">
                      File uploads disabled - Cloudinary not configured
                    </p>
                  )}
                </div>
                {loading && (
                  <p className="mt-3 text-blue-600 font-medium">Uploading files...</p>
                )}

                {/* Media Grid */}
                {mediaList.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
                    {mediaList.map((m) => (
                      <div
                        key={m.id}
                        className="relative group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        {m.type === "video" ? (
                          <video
                            src={m.url}
                            controls
                            className="w-full aspect-video object-cover"
                          />
                        ) : (
                          <img
                            src={m.url}
                            alt=""
                            className="w-full aspect-square object-cover"
                          />
                        )}

                        {/* Action Buttons */}
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => editMedia(m)}
                            className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full shadow-lg"
                            title="Edit media"
                          >
                            ✎
                          </button>
                          <button
                            onClick={() => deleteMedia(m.id)}
                            className="bg-red-600 hover:bg-red-700 text-white p-1.5 rounded-full shadow-lg"
                            title="Delete media"
                          >
                            ✕
                          </button>
                        </div>

                        {/* File Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="truncate">{m.fileName}</div>
                          <div>
                            {m.type} • {Math.round(m.size / 1024)}KB
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    No media in this album yet. {isCloudinaryConfigured ? "Upload some files to get started." : "Configure Cloudinary to enable uploads."}
                  </p>
                )}
              </div>
            )}

            {!selectedEvent && events.length > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <p className="text-yellow-700">
                  Please select an album to manage its media content.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}