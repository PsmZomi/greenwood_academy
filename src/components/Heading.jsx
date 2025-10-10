import React, { useEffect, useRef } from "react";
import { FaUserAlt, FaLaptop, FaSearch } from "react-icons/fa";

export default function HeadingSection() {
  const sectionRef = useRef(null);

  // Fade-in on scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const elements = sectionRef.current.querySelectorAll(".fade-in");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-4");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goals = [
    {
      title: "Our Mission",
      text: "To nurture young minds with wisdom, compassion, and discipline through academic excellence and value-based education.",
      icon: <FaUserAlt className="text-[#00796E] text-3xl" />,
    },
    {
      title: "To Promote Innovation",
      text: "Encouraging creativity, curiosity, and independent thinking through hands-on learning and collaboration.",
      icon: <FaLaptop className="text-[#00796E] text-3xl" />,
    },
    {
      title: "To Pursue Knowledge",
      text: "Inspiring lifelong learners who seek knowledge and contribute positively to their communities and beyond.",
      icon: <FaSearch className="text-[#00796E] text-3xl" />,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-stretch bg-gray-50 px-4 sm:px-6 md:px-12 lg:px-16 py-12"
    >
      {/* Welcome Section */}
      <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12 fade-in opacity-0 translate-y-4 transition-all duration-700">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Welcome to <span className="text-[#00796E]">Greenwood Academy</span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
          Welcome to Greenwood Academy where excellence meets legacy. Established
          in 1998, we take pride in nurturing individuals through quality
          education rooted in truth and love. We combine academic excellence with
          strong moral values, empowering students to grow intellectually,
          emotionally, and socially in a supportive and inclusive environment.
        </p>
      </div>

      {/* Middle Section: Image + Goals */}
      <div className="max-w-5xl w-full mx-auto relative flex flex-col md:flex-row items-stretch gap-6 md:gap-10">
        {/* Left: Image with gradient overlay */}
        <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-auto relative rounded-2xl overflow-hidden fade-in opacity-0 translate-y-4 transition-all duration-700 transform hover:scale-105 hover:shadow-xl">
          <img
            src="https://greenwoodaca.com/wp-content/uploads/2025/06/P1095733-1024x683.jpg"
            alt="Greenwood Academy students in uniform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/25 pointer-events-none"></div>
        </div>

        {/* Right: Goals */}
        <div className="md:w-1/2 w-full flex flex-col justify-start md:justify-center gap-6">
          {goals.map((goal, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-500 fade-in opacity-0 translate-y-4 flex items-center gap-4"
            >
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full bg-[#E0F2F1]">
                {goal.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {goal.title}
                </h3>
                <p className="mt-1 text-sm sm:text-base text-gray-800 leading-relaxed">
                  {goal.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
