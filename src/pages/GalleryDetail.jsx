import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function GalleryDetail() {
  const { event } = useParams();
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [imageLoaded, setImageLoaded] = useState({});

  // Fetch media
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        setLoading(true);
        const snapshot = await getDocs(collection(db, "galleryItems", event, "media"));
        const mediaData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        mediaData.sort(
          (a, b) => new Date(b.uploadedAt?.toDate?.() || b.uploadedAt) - new Date(a.uploadedAt?.toDate?.() || a.uploadedAt)
        );
        setMedia(mediaData);
      } catch (error) {
        console.error("Error fetching media:", error);
      } finally {
        setLoading(false);
      }
    };
    if (event) fetchMedia();
  }, [event]);

  // Lightbox navigation
  const navigateLightbox = useCallback(
    (direction) => {
      if (!selectedMedia) return;
      const currentIndex = media.findIndex((m) => m.id === selectedMedia.id);
      let newIndex;
      if (direction === "next") newIndex = (currentIndex + 1) % media.length;
      else newIndex = (currentIndex - 1 + media.length) % media.length;
      setSelectedMedia(media[newIndex]);
    },
    [media, selectedMedia]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMedia) return;
      if (e.key === "Escape") setSelectedMedia(null);
      if (e.key === "ArrowRight") navigateLightbox("next");
      if (e.key === "ArrowLeft") navigateLightbox("prev");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, navigateLightbox]);

  const handleImageLoad = (id) => setImageLoaded((prev) => ({ ...prev, [id]: true }));

  const formatEventName = (eventKey) =>
    eventKey
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const openLightbox = (mediaItem) => setSelectedMedia(mediaItem);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><p>Loading gallery...</p></div>;
  if (!media.length)
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div className="text-6xl mb-4">🖼️</div>
        <h1 className="text-2xl font-bold mb-2">No Media Found</h1>
        <p className="text-gray-600 mb-6">No media has been uploaded for "{formatEventName(event)}" gallery yet.</p>
        <Link to="/gallery" className="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
          ← Back to Gallery
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 pt-[80px]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">{formatEventName(event)}</h1>
            <p className="text-gray-600 mt-2">{media.length} media item{media.length !== 1 ? "s" : ""}</p>
          </div>
          <Link to="/gallery" className="inline-flex items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 px-4 py-2 rounded-lg border border-gray-300 font-medium">
            ← Back to Gallery
          </Link>
        </div>
      </header>

      {/* Horizontal scroll carousel */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
          {media.map((m) => (
            <div
              key={m.id}
              className="flex-shrink-0 w-56 h-56 rounded-lg shadow-sm overflow-hidden cursor-pointer transform hover:-translate-y-1 transition"
              onClick={() => openLightbox(m)}
            >
              {!imageLoaded[m.id] && (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
              <img
                src={m.url}
                alt=""
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded[m.id] ? "opacity-100" : "opacity-0"}`}
                onLoad={() => handleImageLoad(m.id)}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button onClick={() => setSelectedMedia(null)} className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-2">✕</button>
          {media.length > 1 && (
            <>
              <button onClick={() => navigateLightbox("prev")} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3">←</button>
              <button onClick={() => navigateLightbox("next")} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3">→</button>
            </>
          )}
          <img src={selectedMedia.url} alt="" className="max-w-full max-h-full object-contain rounded-lg" />
        </div>
      )}
    </div>
  );
}
