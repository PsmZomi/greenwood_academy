import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/hero-bg.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery3 from "../images/gw1.jpg";
import gallery4 from "../images/gw2.jpg";
import gwgraduate from "../videos/gwgraduate.mp4";
import teacherVideo from "../videos/gwteacherday.mp4";

const galleryItems = [
  {
    key: "cultural",
    label: "Cultural Day",
    type: "image",
    bg: heroImage,
    path: "/gallery/cultural",
  },
  {
    key: "sports",
    label: "Sports Day",
    type: "image",
    bg: gallery2,
    path: "/gallery/sports",
  },
  {
    key: "teachersday",
    label: "Teachers' Day",
    type: "video",
    bg: teacherVideo,
    path: "/gallery/teachersday",
  },
  {
    key: "graduation",
    label: "Graduation Day",
    type: "video",
    bg: gwgraduate,
    path: "/gallery/graduation",
  },
  {
    key: "annualday",
    label: "Annual Day",
    type: "image",
    bg: gallery3,
    path: "/gallery/annualday",
  },
  {
    key: "musicfest",
    label: "Music Fest",
    type: "image",
    bg: gallery4,
    path: "/gallery/musicfest",
  },
];

export default function GalleryPage() {
  return (
    <section className="py-12 px-4 md:px-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#00796E] mb-10 pt-[60px]">
        Our Gallery
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {galleryItems.map((item) => (
          <Link key={item.key} to={item.path} className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full shadow-lg overflow-hidden ring-8 ring-gray-200 hover:ring-[#00796E] transition-all">
              {item.type === "image" ? (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />
              ) : (
                <video
                  src={item.bg}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>

            <div className="mt-3 text-center font-semibold text-gray-800 text-sm md:text-base">
              {item.label}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
