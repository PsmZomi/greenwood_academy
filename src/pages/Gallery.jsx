import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function GalleryPage() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const snapshot = await getDocs(collection(db, "galleryItems"));
        const items = await Promise.all(
          snapshot.docs.map(async (doc) => {
            const data = { id: doc.id, ...doc.data() };
            
            // Fetch first media from subcollection to use as cover
            const mediaSnap = await getDocs(collection(db, "galleryItems", doc.id, "media"));
            if (!mediaSnap.empty) {
              data.coverImage = mediaSnap.docs[0].data().url;
            }
            
            return data;
          })
        );

        // Sort alphabetically
        items.sort((a, b) => a.label?.localeCompare(b.label));
        setGalleryItems(items);
      } catch (error) {
        console.error("Error loading gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12 pt-[100px]">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00796E]">Our Gallery</h1>
        <p className="text-gray-600 mt-2">Explore our collection of memories</p>
      </div>

      <div className="max-w-6xl mx-auto">
        {galleryItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Link
                key={item.id}
                to={`/gallery/${item.id}`}
                className="block rounded-lg overflow-hidden shadow hover:shadow-md transition"
              >
                <div className="w-full aspect-square bg-gray-100">
                  {item.coverImage ? (
                    <img
                      src={item.coverImage}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      No Preview
                    </div>
                  )}
                </div>

                <div className="p-3 text-center bg-white">
                  <h3 className="font-medium text-gray-800 truncate">{item.label}</h3>
                  <p className="text-xs text-gray-500">Click to explore</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No galleries yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
