import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const newsRef = useRef(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const docRef = doc(db, "notifications", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setNews({ id: docSnap.id, ...docSnap.data() });
        } else {
          setNews(null);
        }
      } catch (err) {
        console.error("Failed to fetch news detail:", err);
        setNews(null);
      }
    };
    fetchNewsDetail();
  }, [id]);

  useEffect(() => {
    if (newsRef.current) {
      const headerHeight = 110; // height of your fixed header
      const topPosition =
        newsRef.current.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        20; // extra margin
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }, [news]);

  if (!news) {
    return (
      <div className="p-8 text-center text-gray-500 min-h-screen flex flex-col justify-center">
        <h3 className="text-lg font-medium mb-2">News Not Found</h3>
        <button
          className="mt-4 text-[#00796E] underline"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>
      </div>
    );
  }

  return (
    <section className="p-4 md:p-10 bg-gray-50 min-h-screen flex justify-center">
      <div
        ref={newsRef}
        className="max-w-2xl w-full bg-white rounded-lg shadow p-6 md:p-8"
      >
        {/* Back Button */}
        <button
          className="mb-4 text-[#00796E] hover:underline text-xs"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>

        {/* Media */}
        {news.url && news.type === "image" && (
          <img
            src={news.url}
            alt={news.title}
            className="w-full rounded mb-4 object-cover max-h-80"
          />
        )}

        {news.url && news.type === "video" && (
          <video
            src={news.url}
            controls
            className="w-full rounded mb-4 max-h-80"
          />
        )}

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{news.title}</h1>

        {/* Date */}
        {news.date && (
          <p className="text-xs text-gray-500 mb-4">
            {new Date(news.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}

        {/* Content / Excerpt */}
        <p className="text-gray-700 text-base whitespace-pre-line">
          {news.content
            ? news.content
            : news.excerpt
            ? news.excerpt
            : "No content available."}
        </p>
      </div>
    </section>
  );
}
