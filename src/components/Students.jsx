import React, { useState, useEffect, useCallback } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChild,
  FaUserTie,
  FaGraduationCap,
} from "react-icons/fa";
import gwImage from "../images/gw1.jpg";

const classData = [
  {
    label: "Pre-Primary Class",
    stats: [
      { value: "15:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "3-8", label: "Age Range", icon: <FaChild /> },
      { value: "100%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img: "https://i.ytimg.com/vi/83Xv1J1THpU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCexRAc7iC7lEZewPJ9ZgNZ54Xjgw",
    description:
      "Our Pre-Primary program focuses on play-based learning and social development in a nurturing environment.",
  },
  {
    label: "Primary School",
    stats: [
      { value: "20:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "8-11", label: "Age Range", icon: <FaChild /> },
      { value: "100%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img: "https://greenwoodaca.com/wp-content/uploads/2025/06/P1095923-scaled.jpg",
    description:
      "Primary years build foundational skills in literacy, numeracy, and critical thinking through engaging activities.",
  },
  {
    label: "Middle School",
    stats: [
      { value: "18:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "11-14", label: "Age Range", icon: <FaChild /> },
      { value: "98%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img: "https://greenwoodaca.com/wp-content/uploads/2025/03/GA-Activities8-2.jpeg",
    description:
      "Our Middle School curriculum challenges students with specialized subjects while supporting their social-emotional growth.",
  },
  {
    label: "Secondary School",
    stats: [
      { value: "15:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "14-16", label: "Age Range", icon: <FaChild /> },
      { value: "98%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img: gwImage,
    description:
      "Secondary education prepares students for higher education with advanced coursework and college counseling.",
  },
];

export default function ClassNavigator() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getCurrentSlideData = () => {
    const prevIndex = index === 0 ? classData.length - 1 : index - 1;
    const nextIndex = index === classData.length - 1 ? 0 : index + 1;

    return {
      prev: classData[prevIndex],
      current: classData[index],
      next: classData[nextIndex],
    };
  };

  const { prev: prevSlide, current: currentSlide, next: nextSlide } =
    getCurrentSlideData();

  const navigate = useCallback(
    (direction) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        if (direction === "next") {
          setIndex((old) => (old === classData.length - 1 ? 0 : old + 1));
        } else {
          setIndex((old) => (old === 0 ? classData.length - 1 : old - 1));
        }
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const prev = useCallback(() => navigate("prev"), [navigate]);
  const next = useCallback(() => navigate("next"), [navigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  const SlideCard = ({ slideData, position, onClick }) => {
    const isCenter = position === "center";
    const isLeft = position === "left";
    const isRight = position === "right";

    return (
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-in-out cursor-pointer ${
          isCenter
            ? "left-1/2 -translate-x-1/2 z-20 scale-100 opacity-100 hover:scale-[1.03] hover:shadow-2xl hover:shadow-yellow-500/30"
            : isLeft
            ? "left-8 md:left-16 z-10 scale-100 opacity-50"
            : isRight
            ? "right-8 md:right-16 z-10 scale-100 opacity-50"
            : ""
        } ${isTransitioning ? "duration-300" : "duration-500"} ${
          !isCenter ? "blur-[1px] hover:blur-[0.5px]" : ""
        }`}
        onClick={onClick}
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl w-96 md:w-[28rem] lg:w-[32rem] transition-all duration-500">
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {slideData.label}
            </h3>
            {isCenter && (
              <p className="text-sm md:text-base leading-relaxed text-white/80 max-w-2xl mx-auto px-4">
                {slideData.description}
              </p>
            )}
          </div>

          <div className="relative mb-6">
            <div className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full h-64 md:h-80 transition-all duration-500">
                <img
                  src={slideData.img}
                  alt={slideData.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {isCenter && (
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-sm md:max-w-md">
                {slideData.stats.map(({ value, label, icon }, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-2 border-4 border-yellow-400 rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-green-600 to-green-700 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      <div className="text-yellow-400 mb-0.5 text-base md:text-lg">
                        {icon}
                      </div>
                      <div className="text-sm md:text-base font-bold text-white">
                        {value}
                      </div>
                    </div>
                    <div className="text-xs md:text-sm font-medium text-white/90 leading-tight px-1">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full min-h-screen mt-8 bg-gradient-to-br from-[#00796E] via-[#00695C] to-[#004d40] text-white relative overflow-hidden flex items-center justify-center py-12">
      <div className="w-full max-w-[90rem] mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white/90 mb-1">
            Explore Our
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-3">
            Academic Programs
          </h2>
          <div className="w-16 h-0.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative h-[600px] md:h-[700px] mb-8 overflow-hidden">
          <SlideCard slideData={prevSlide} position="left" onClick={prev} />
          <SlideCard slideData={currentSlide} position="center" />
          <SlideCard slideData={nextSlide} position="right" onClick={next} />

          <button
            onClick={prev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white hover:bg-yellow-400/80 hover:text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-30"
            aria-label="Previous class"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white hover:bg-yellow-400/80 hover:text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-30"
            aria-label="Next class"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md rounded-full px-4 py-2">
          {classData.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isTransitioning || i === index) return;
                setIsTransitioning(true);
                setTimeout(() => {
                  setIndex(i);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to ${classData[i].label}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-green-400/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}
