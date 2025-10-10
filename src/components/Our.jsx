import React, { useState, useEffect } from "react";
import sampleVideo from "../videos/gwgraduate.mp4";
import gallery1 from "../images/gallery1.jpg";
import gallery2 from "../images/gallery2.jpg";
import heroImage from "../images/hero-bg.jpg";

const groups = [
  {
    label: "Kindergarten",
    subtitle: "Pre-Primary",
    media: heroImage,
    type: "image",
    details: [
      "A nurturing environment for early learners.",
      "Focus on play-based learning.",
      "Developing curiosity & creativity",
    ],
  },
  {
    label: "Lower School",
    subtitle: "Grades 1 - 4",
    media: gallery2,
    type: "image",
    details: [
      "Strong foundations in literacy & numeracy.",
      "Interactive classroom activities.",
      "Building confidence & teamwork",
    ],
  },
  {
    label: "Middle School",
    subtitle: "Grades 5 - 8",
    media: gallery1,
    type: "image",
    details: [
      "Exploration of multiple subjects.",
      "Encouraging independence & responsibility.",
      "Project-based learning approach",
    ],
  },
  {
    label: "Secondary School",
    subtitle: "Grades 8 - 10",
    media: sampleVideo,
    type: "video",
    details: [
      "Preparing for higher education.",
      "Focused academic excellence.",
      "Career guidance & mentorship",
    ],
  },
];

export default function StudentGroups() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardInteraction = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  return (
    <div className="relative">
      {/* Heading */}
      <div className="max-w-6xl mx-auto pt-16 pb-4 px-4 z-10">
        <h2 className="text-5xl font-extrabold outlined-text-green-600 inline-block mr-2 text-left">
          OUR
        </h2>
        <span className="text-5xl font-extrabold text-green-900/90 tracking-tight text-left">
          STUDENTS
        </span>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl text-left">
          From age 3 to Grade 10, each of our students' individuality contributes
          to the vibrant tapestry of the educational community.
        </p>
      </div>

      {/* Cards */}
      <div className="py-10 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2">
          {groups.map((group, index) => (
            <div
              key={group.label}
              className="relative group overflow-hidden shadow-xl cursor-pointer bg-white rounded-lg"
              role="button"
              tabIndex={0}
              onClick={() => handleCardInteraction(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardInteraction(index);
                }
              }}
              aria-expanded={activeIndex === index}
              aria-label={`Learn more about ${group.label}`}
            >
              {/* Media */}
              {group.type === "image" ? (
                <img
                  src={group.media}
                  alt={group.label}
                  className="object-cover h-72 w-full filter brightness-90 transition-all duration-300 group-hover:brightness-100 group-hover:scale-105"
                />
              ) : (
                <video
                  src={group.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}

              {/* Overlay - All text aligned left */}
              <div
                className={`absolute inset-0 flex flex-col justify-end p-4 text-white transition-all duration-500 ease-in-out text-left
                  md:group-hover:bg-black/60 md:group-hover:translate-y-0
                  ${activeIndex === index
                    ? "bg-black/70 translate-y-0"
                    : "bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-[60%]"
                  }
                `}
              >
                <p className="text-xs sm:text-sm mb-1 opacity-90 font-medium text-left">
                  {group.subtitle}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-left">
                  {group.label}
                </h3>

                <ul
                  className={`text-xs space-y-1 transition-all duration-500 text-left
                    md:opacity-0 md:group-hover:opacity-100 md:max-h-0 md:group-hover:max-h-32
                    ${activeIndex === index 
                      ? "opacity-100 max-h-32" 
                      : "opacity-0 max-h-0 overflow-hidden"
                    }
                  `}
                >
                  {group.details.map((item, i) => (
                    <li key={i} className="flex items-start text-left">
                      <span className="mr-2">•</span>
                      <span className="text-left">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}