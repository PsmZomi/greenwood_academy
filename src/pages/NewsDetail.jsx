import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);

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

  if (!news) {
    return (
      <div className="p-8 text-center text-gray-500">
        <h3 className="text-lg font-medium mb-2">News Not Found</h3>
        <button className="mt-4 text-[#00796E] underline" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <section className="p-4 md:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <button className="mb-6 text-[#00796E] hover:underline text-xs" onClick={() => navigate(-1)}>
          &larr; Back
        </button>
        {news.url && news.type === "image" && (
          <img src={news.url} alt={news.title} className="w-full rounded mb-4"/>
        )}
        {news.url && news.type === "video" && (
          <video src={news.url} controls className="w-full rounded mb-4" />
        )}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{news.title}</h1>
        {news.date && (
          <p className="text-xs text-gray-500 mb-4">
            {new Date(news.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </p>
        )}
        <p className="text-gray-700 text-base">{news.content || news.excerpt}</p>
      </div>
    </section>
  );
}
