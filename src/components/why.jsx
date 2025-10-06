import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/hero-bg.jpg";
import gwgraduate from "../videos/gwgraduate.mp4";
import gallery2 from "../images/gallery2.jpg";
import teacherVideo from "../videos/gwteacherday.mp4";

// Gallery data
const items = [
  {
    key: "cultural",
    label: "CULTURAL DAY",
    ring: "hover:ring-8 ring-gray-400 hover:ring-blue-400",
    bg: heroImage,
    type: "image",
    path: "/gallery/cultural",
  },
  {
    key: "sports",
    label: "SPORTS DAY",
    ring: "hover:ring-8 ring-gray-400 hover:ring-yellow-400",
    bg: gallery2,
    type: "image",
    path: "/gallery/sports",
  },
  {
    key: "teachersday",
    label: "TEACHERS' DAY",
    ring: "hover:ring-8 ring-gray-400 hover:ring-orange-400",
    bg: teacherVideo,
    type: "video",
    path: "/gallery/teachersday",
  },
  {
    key: "graduation",
    label: "GRADUATION DAY",
    ring: "hover:ring-8 ring-gray-400 hover:ring-green-400",
    bg: gwgraduate,
    type: "video",
    path: "/gallery/graduation",
  },
];

// Main Gallery Component
export default function Why() {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#00796E] mb-10">
        OUR GALLERY
      </h2>
      {/* Circle Row */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 justify-items-center">
        {items.map((it) => (
          <div key={it.key} className="flex flex-col items-center">
            <Link
              to={it.path}
              className="outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            >
              <div
                className={`relative w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md cursor-pointer
                bg-cover bg-center transition-all duration-300 group ring-8 ring-gray-300 ${it.ring} flex-shrink-0`}
              >
                {it.type === "image" ? (
                  <div
                    className="absolute inset-0 rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${it.bg})`,
                      filter: "brightness(1.05) contrast(1.05)",
                    }}
                  />
                ) : (
                  <video
                    src={it.bg}
                    autoPlay
                    loop
                    muted
                    className="rounded-full w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/10 rounded-full transition-all" />
              </div>
            </Link>
            <div className="mt-2 text-center text-gray-800 font-semibold text-sm md:text-base">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
