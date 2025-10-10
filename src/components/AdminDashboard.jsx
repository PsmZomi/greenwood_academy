import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, doc, getDocs, setDoc, addDoc, deleteDoc } from "firebase/firestore";
import axios from "axios";
import { useDropzone } from "react-dropzone";

// Cloudinary env
const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL;
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
const isCloudinaryConfigured = CLOUDINARY_URL && CLOUDINARY_UPLOAD_PRESET;

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("news");

  // --- News states ---
  const [newsList, setNewsList] = useState([]);
  const [newNewsTitle, setNewNewsTitle] = useState("");
  const [newNewsExcerpt, setNewNewsExcerpt] = useState("");
  const [newNewsFile, setNewNewsFile] = useState(null);
  const [loadingNews, setLoadingNews] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);

  // --- Gallery states ---
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mediaList, setMediaList] = useState([]);
  const [newAlbumName, setNewAlbumName] = useState("");
  const [showAlbumForm, setShowAlbumForm] = useState(false);

  // --- Fetch functions ---
  const fetchNews = async () => {
    setLoadingNews(true);
    try {
      const snapshot = await getDocs(collection(db, "notifications"));
      setNewsList(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error("Failed to fetch news:", err);
    } finally {
      setLoadingNews(false);
    }
  };

  const fetchEvents = async () => {
    try {
      const snapshot = await getDocs(collection(db, "galleryItems"));
      const eventsData = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setEvents(eventsData);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };

  const fetchMedia = async (eventId) => {
    if (!eventId) return;
    try {
      const snapshot = await getDocs(collection(db, "galleryItems", eventId, "media"));
      setMediaList(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error("Failed to fetch media:", err);
    }
  };

 useEffect(() => {
  if (events.length > 0 && !selectedEvent) {
    setSelectedEvent(events[0].id);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [events]);


  // --- Fetch data on mount ---
  useEffect(() => {
    fetchNews();
    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) fetchMedia(selectedEvent);
  }, [selectedEvent]);

  // --- Upload to Cloudinary ---
  const uploadToCloudinary = async (file) => {
    if (!isCloudinaryConfigured) throw new Error("Cloudinary not configured");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await axios.post(CLOUDINARY_URL, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 30000,
    });

    return {
      url: response.data.secure_url,
      type: file.type.startsWith("video") ? "video" : "image"
    };
  };

  // --- News actions ---
  const addNews = async () => {
    if (!newNewsTitle || !newNewsExcerpt) {
      alert("Title and excerpt are required");
      return;
    }

    let url = "";
    let type = "text";

    if (newNewsFile) {
      if (!isCloudinaryConfigured) {
        alert("File uploads disabled: Cloudinary not configured");
        return;
      }
      setLoadingUpload(true);
      try {
        const uploadResult = await uploadToCloudinary(newNewsFile);
        url = uploadResult.url;
        type = uploadResult.type;
      } catch (err) {
        console.error(err);
        alert(`Upload failed: ${err.message}`);
        setLoadingUpload(false);
        return;
      }
      setLoadingUpload(false);
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
    } catch (err) {
      console.error(err);
      alert("Failed to add news");
    }
  };

  const editNews = async (news) => {
    const newTitle = prompt("Edit title:", news.title);
    const newExcerpt = prompt("Edit excerpt:", news.excerpt);
    if (!newTitle || !newExcerpt) return;
    try {
      await setDoc(doc(db, "notifications", news.id), { ...news, title: newTitle, excerpt: newExcerpt }, { merge: true });
      fetchNews();
      alert("News updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update news");
    }
  };

  const deleteNews = async (newsId) => {
    if (!window.confirm("Delete this news?")) return;
    try {
      await deleteDoc(doc(db, "notifications", newsId));
      fetchNews();
      alert("News deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete news");
    }
  };

  // --- Gallery actions ---
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
    } catch (err) {
      console.error(err);
      alert("Failed to create album");
    }
  };

  const editAlbum = async (album) => {
    const newName = prompt("Enter new album name:", album.label);
    if (!newName || !newName.trim()) return;
    try {
      await setDoc(doc(db, "galleryItems", album.id), { ...album, label: newName.trim() }, { merge: true });
      fetchEvents();
      alert("Album updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update album");
    }
  };

  const deleteAlbum = async (albumId) => {
    if (!window.confirm("Delete this album and all its media?")) return;
    try {
      // Delete all media
      const mediaSnapshot = await getDocs(collection(db, "galleryItems", albumId, "media"));
      const deletePromises = mediaSnapshot.docs.map(m => deleteDoc(doc(db, "galleryItems", albumId, "media", m.id)));
      await Promise.all(deletePromises);
      // Delete album
      await deleteDoc(doc(db, "galleryItems", albumId));
      if (selectedEvent === albumId) setSelectedEvent(null);
      fetchEvents();
      alert("Album deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete album");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: async (files) => {
      if (!selectedEvent) {
        alert("Please select an album first");
        return;
      }
      if (!isCloudinaryConfigured) {
        alert("File uploads disabled: Cloudinary not configured");
        return;
      }
      setLoadingUpload(true);
      try {
        const uploadPromises = files.map(async file => {
          const uploadResult = await uploadToCloudinary(file);
          return addDoc(collection(db, "galleryItems", selectedEvent, "media"), {
            url: uploadResult.url,
            type: uploadResult.type,
            fileName: file.name,
            size: file.size,
            uploadedAt: new Date(),
          });
        });
        await Promise.all(uploadPromises);
        fetchMedia(selectedEvent);
        alert(`Uploaded ${files.length} file(s) successfully`);
      } catch (err) {
        console.error(err);
        alert("Some files failed to upload");
      } finally {
        setLoadingUpload(false);
      }
    },
    accept: { "image/*": [], "video/*": [] },
  });

  const deleteMedia = async (mediaId) => {
    if (!window.confirm("Delete this media?")) return;
    try {
      await deleteDoc(doc(db, "galleryItems", selectedEvent, "media", mediaId));
      fetchMedia(selectedEvent);
      alert("Media deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete media");
    }
  };

  const editMedia = async (media) => {
    const newUrl = prompt("Enter new media URL:", media.url);
    if (!newUrl) return;
    try {
      await setDoc(doc(db, "galleryItems", selectedEvent, "media", media.id), { ...media, url: newUrl }, { merge: true });
      fetchMedia(selectedEvent);
      alert("Media updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update media");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-[110px] p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

        {!isCloudinaryConfigured && (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4">
            Cloudinary not configured: File uploads disabled
          </div>
        )}

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200 flex space-x-4">
          <button
            className={`py-2 px-3 border-b-2 font-medium ${
              activeTab === "news" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("news")}
          >
            News
          </button>
          <button
            className={`py-2 px-3 border-b-2 font-medium ${
              activeTab === "gallery" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
        </div>

        {/* News Tab */}
        {activeTab === "news" && (
          <div className="space-y-6 bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="font-semibold text-xl mb-4">Manage News</h2>
            <input type="text" placeholder="Title" value={newNewsTitle} onChange={e => setNewNewsTitle(e.target.value)} className="w-full mb-2 border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Excerpt" value={newNewsExcerpt} onChange={e => setNewNewsExcerpt(e.target.value)} className="w-full mb-2 border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500" rows="3" />
            <input type="file" onChange={e => setNewNewsFile(e.target.files[0])} accept="image/*,video/*" className="w-full mb-2" disabled={!isCloudinaryConfigured} />
            <button onClick={addNews} disabled={loadingUpload} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:bg-blue-400">
              {loadingUpload ? "Uploading..." : "Add News"}
            </button>

            {loadingNews ? (
              <p className="text-gray-500 text-center py-4">Loading news...</p>
            ) : newsList.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No news items yet.</p>
            ) : (
              <div className="space-y-4 mt-6">
                {newsList.map(n => (
                  <div key={n.id} className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row gap-4 hover:shadow-md transition-shadow">
                    {n.url && (
                      <div className="md:w-48 flex-shrink-0">
                        {n.type === "video" ? (
                          <video src={n.url} controls className="w-full h-32 object-cover rounded-lg" onError={e => e.target.src = ""} />
                        ) : (
                          <img src={n.url} alt={n.title} className="w-full h-32 object-cover rounded-lg" onError={e => e.target.src = ""} />
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-lg">{n.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{new Date(n.date).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => editNews(n)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">✎ Edit</button>
                          <button onClick={() => deleteNews(n.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm">🗑️ Delete</button>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{n.excerpt}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            {/* Album Management */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-xl">Albums</h2>
                <button onClick={() => setShowAlbumForm(!showAlbumForm)} className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                  {showAlbumForm ? "Cancel" : "Add Album"}
                </button>
              </div>

              {showAlbumForm && (
                <div className="flex gap-2 mb-4">
                  <input type="text" placeholder="Album name" value={newAlbumName} onChange={e => setNewAlbumName(e.target.value)} className="flex-1 border px-3 py-2 rounded focus:ring-2 focus:ring-blue-500" />
                  <button onClick={addAlbum} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded">Create</button>
                </div>
              )}

              {events.length === 0 ? (
                <p className="text-gray-500">No albums yet.</p>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {events.map(album => (
                    <div
                      key={album.id}
                      className={`border px-3 py-2 rounded cursor-pointer hover:shadow-md transition-shadow ${selectedEvent === album.id ? "bg-blue-100 border-blue-500" : "bg-gray-50"}`}
                      onClick={() => setSelectedEvent(album.id)}
                    >
                      <div className="flex items-center gap-2">
                        <span>{album.label}</span>
                        <button onClick={(e) => { e.stopPropagation(); editAlbum(album); }} className="text-blue-600 hover:text-blue-800">✎</button>
                        <button onClick={(e) => { e.stopPropagation(); deleteAlbum(album.id); }} className="text-red-600 hover:text-red-800">🗑️</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Media Management */}
            {selectedEvent && (
              <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                <h2 className="font-semibold text-xl mb-4">Media in "{events.find(e => e.id === selectedEvent)?.label}"</h2>

                <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-6 text-center rounded cursor-pointer hover:bg-gray-50">
                  <input {...getInputProps()} />
                  {loadingUpload ? "Uploading..." : "Drag & drop images/videos here, or click to select files"}
                </div>

                {mediaList.length === 0 ? (
                  <p className="text-gray-500 mt-4">No media yet.</p>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {mediaList.map(media => (
                      <div key={media.id} className="relative border rounded overflow-hidden hover:shadow-md">
                        {media.type === "video" ? (
                          <video src={media.url} controls className="w-full h-32 object-cover" onError={e => e.target.src = ""} />
                        ) : (
                          <img src={media.url} alt={media.fileName} className="w-full h-32 object-cover" onError={e => e.target.src = ""} />
                        )}
                        <div className="absolute top-1 right-1 flex gap-1">
                          <button onClick={() => editMedia(media)} className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 text-xs rounded">✎</button>
                          <button onClick={() => deleteMedia(media.id)} className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 text-xs rounded">🗑️</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
