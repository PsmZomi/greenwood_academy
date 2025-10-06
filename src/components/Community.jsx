import React from "react";
import gallery1 from "../images/gw2.jpg";
import gallery2 from "../images/gallery2.jpg";
import gallery from "../images/hero-bg.jpg";
import principal from "../images/gw1.jpg";

const tiles = [
  { type: "image", src: gallery1, alt: "Artwork tile" },
  {
    type: "text",
    bgColor: "bg-gradient-to-br from-red-300 to-yellow-600",
    text: "Celebrating talent through music, art, and culture",
    hoverText: "Choir auditions – voices united in harmony",
    textColor: "text-white hover:text-black",
  },
  { type: "image", src: gallery2, alt: "Teaching interaction" },
  {
    type: "text",
    bgColor: "bg-gradient-to-br from-yellow-200 to-green-600",
    text: "Every child is valued, every gift encouraged",
    hoverText: "Parent-teacher meetings for every child’s growth",
    textColor: "text-teal-900 hover:text-white",
  },
  {
    type: "text",
    bgColor: "bg-gradient-to-br from-[#00796E] to-teal-300",
    text: "An intentionally diverse, inclusive community",
    hoverText: "Parents, teachers, and students growing together",
    textColor: "text-white hover:text-black",
  },
  { type: "image", src: gallery, alt: "Outdoor walk" },
  {
    type: "text",
    bgColor: "bg-gradient-to-br from-blue-500 to-white",
    text: "Cultural Day ",
    hoverText: "Celebrating our rich heritage",
    textColor: "text-gray-900 hover:text-white",
  },
  { type: "image", src: principal, alt: "Classroom work" },
];

export default function CommunityPage() {
  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-[#00796E] mb-2">
            OUR COMMUNITY
          </h1>
          <div className="w-20 h-0.5 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
            The Greenwood Academy is not just a school, it's a community. Our
            students, parents, and teachers come together in worship,
            celebrations, and learning. Through meetings, cultural days, and
            shared milestones, we nurture children to grow strong in mind,
            faith, and spirit.
          </p>
        </div>

        {/* Tile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 w-full mb-16">
          {tiles.map((tile, idx) => (
            <div
              key={idx}
              className="relative w-full aspect-square overflow-hidden flex items-center justify-center group"
            >
              {tile.type === "image" ? (
                <div className="relative w-full h-full">
                  <img
                    src={tile.src}
                    alt={tile.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay text */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-700 ease-out">
                    <span className="text-white text-lg md:text-xl font-semibold text-center px-3">
                      {tile.hoverText}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className={`${tile.bgColor} w-full h-full flex items-center justify-center relative overflow-hidden`}
                >
                  {/* Default text */}
                  <span
                    className={`absolute bottom-1/2 translate-y-1/2 transition-all duration-700 ease-out text-center text-xl md:text-2xl font-bold ${tile.textColor} px-2 group-hover:opacity-0`}
                  >
                    {tile.text}
                  </span>

                  {/* Hover text */}
                  <span
                    className={`absolute bottom-[-100%] group-hover:bottom-1/2 group-hover:translate-y-1/2 transition-all duration-700 ease-out text-center text-xl md:text-2xl font-bold ${tile.textColor} px-2 opacity-0 group-hover:opacity-100`}
                  >
                    {tile.hoverText}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
