import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaChild, FaUserTie, FaGraduationCap } from "react-icons/fa";
import gwImage from "../images/gw1.jpg";

const classData = [
  {
    label: "Pre-Primary Class",
    stats: [
      { value: "15:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "3-8", label: "Age Range", icon: <FaChild /> },
      { value: "100%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img:"https://i.ytimg.com/vi/83Xv1J1THpU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCexRAc7iC7lEZewPJ9ZgNZ54Xjgw",
    description: "Our Pre-Primary program focuses on play-based learning and social development in a nurturing environment."
  },
  {
    label: "Primary School",
    stats: [
      { value: "20:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "8-11", label: "Age Range", icon: <FaChild /> },
      { value: "98%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img: "https://greenwoodaca.com/wp-content/uploads/2025/06/P1095923-scaled.jpg",
    description: "Primary years build foundational skills in literacy, numeracy, and critical thinking through engaging activities."
  },
  {
    label: "Middle School",
    stats: [
      { value: "18:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "11-14", label: "Age Range", icon: <FaChild /> },
      { value: "98%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img:"https://greenwoodaca.com/wp-content/uploads/2025/03/GA-Activities8-2.jpeg",
    description: "Our Middle School curriculum challenges students with specialized subjects while supporting their social-emotional growth."
  },
  {
    label: "Secondary School",
    stats: [
      { value: "15:1", label: "Student/Teacher Ratio", icon: <FaUserTie /> },
      { value: "14-16", label: "Age Range", icon: <FaChild /> },
      { value: "95%", label: "Pass Percentage", icon: <FaGraduationCap /> },
    ],
    img: gwImage,
    description: "Secondary education prepares students for higher education with advanced coursework and college counseling.",
  },
];

export default function ClassNavigator() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { label, stats, img, description } = classData[index];

  // Navigate to previous/next class
  const navigate = useCallback((direction) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === 'next') {
        setIndex((old) => (old === classData.length - 1 ? 0 : old + 1));
      } else {
        setIndex((old) => (old === 0 ? classData.length - 1 : old - 1));
      }
      setIsTransitioning(false);
    }, 300);
  }, []);

  const prev = useCallback(() => navigate('prev'), [navigate]);
  const next = useCallback(() => navigate('next'), [navigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prev, next]);

  return (
    <section className="w-full min-h-screen mt-6 bg-gradient-to-r from-[#00796E] to-[#004d40] pb-6 text-white relative overflow-hidden flex flex-col md:flex-row px-8 md:px-24 py-16">
      
      {/* Left Column: Content + Circles */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start mb-12 md:mb-0 z-10">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Explore Our</h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400">Academic Programs</h2>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">{label}</h3>
        <p className="text-lg mb-8 max-w-md text-center md:text-left opacity-90">{description}</p>

        {/* Circles Row */}
        <div className="flex w-full mb-8 md:gap-6">
          {stats.map(({ value, label, icon }, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105 md:flex-none"
            >
              <div className="relative w-full aspect-square border-4 border-yellow-400 rounded-full flex flex-col items-center justify-center text-2xl font-bold text-white bg-green-700 shadow-lg md:w-24 md:h-24">
                <div className="text-yellow-400 mb-1 text-xl md:text-2xl">{icon}</div>
                <div className="text-sm md:text-xl">{value}</div>
              </div>
              <div className="text-center mt-2 text-xs md:text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
      

     {/* Right Column: Image */}
<div className="flex-1 relative rounded-2xl overflow-hidden shadow-2xl z-10">
  <div className={`relative w-full h-[400px] md:h-[500px] transition-opacity duration-500 ${isTransitioning ? "opacity-70" : "opacity-100"}`}>
    <img src={img} alt={label} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

    {/* Mobile Arrows */}
    <button
      onClick={prev}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-green-400 p-3 rounded-full shadow-xl md:hidden"
      aria-label="Previous student"
    >
      <FaChevronLeft size={24} />
    </button>
    <button
      onClick={next}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-green-400 p-3 rounded-full shadow-xl md:hidden"
      aria-label="Next student"
    >
      <FaChevronRight size={24} />
    </button>
  </div>

  {/* Desktop Arrows remain outside */}
  <button
    onClick={prev}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-5 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 hover:scale-110 hidden md:block"
    aria-label="Previous student"
  >
    <FaChevronLeft size={32} />
  </button>

  <button
    onClick={next}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-5 rounded-full shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300 hover:scale-110 hidden md:block"
    aria-label="Next student"
  >
    <FaChevronRight size={32} />
  </button>
</div>


      {/* Bottom Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {classData.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setIndex(i);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to ${classData[i].label}`}
          />
        ))}
      </div>
    </section>
  );
}
