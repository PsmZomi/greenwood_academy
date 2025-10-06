import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function NewsInsightsPage() {
  const navigate = useNavigate();
  const [newsItems, setNewsItems] = useState([]);

  const fetchNews = async () => {
    try {
      const q = query(collection(db, "notifications"), orderBy("date", "desc"));
      const snapshot = await getDocs(q);
      setNewsItems(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (err) {
      console.error("Failed to fetch news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const openNotification = (id) => navigate(`/news/${id}`);


  return (
    <section className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start mb-8">
          <span className="text-xs tracking-widest uppercase text-gray-600 mb-1">
            Our Latest News & Events
          </span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-[#00796E]">
            VISIT OUR INSIGHTS AND <span className="block">LATEST NEWS</span>
          </h1>
        </div>

        {newsItems.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            <h3 className="text-lg font-medium mb-2">No News Yet</h3>
            <p>Check back later for updates</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div
              key={news.id}
              onClick={() => openNotification(news.id)}
              className="bg-white rounded-lg shadow cursor-pointer hover:shadow-lg transition-shadow flex flex-col h-64"
            >
              {/* Media */}
              {news.url && news.type === "image" && (
                <img
                  src={news.url}
                  alt={news.title}
                  className="w-full h-28 object-cover"
                  onError={(e) => { e.currentTarget.src = "/images/placeholder-rect.png"; }}
                />
              )}

              {news.url && news.type === "video" && (
                <div className="relative w-full h-28 bg-gray-800">
                  <video src={news.url} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
                    VIDEO
                  </div>
                </div>
              )}

              {!news.url && (
                <div className="w-full h-28 bg-gray-200 flex items-center justify-center text-gray-400">
                  No Media
                </div>
              )}

              {/* Content */}
              <div className="p-3 flex-1 flex flex-col">
                <h2 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-1">{news.title}</h2>
                {news.date && (
                  <p className="text-xs text-gray-500 mb-1">
                    {new Date(news.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric"
                    })}
                  </p>
                )}
                <p className="text-gray-700 text-sm line-clamp-2 mb-1">{news.excerpt}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); openNotification(news.id); }}
                  className="mt-auto self-start text-[#00796E] hover:underline text-xs font-medium"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
