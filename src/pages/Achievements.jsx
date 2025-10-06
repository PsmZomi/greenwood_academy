import React from "react";
import { FaTrophy, FaMedal, FaUsers, FaStar } from "react-icons/fa";

const achievements = [
  {
    title: "Academic Excellence",
    description:
      "Consistently securing top positions in board exams and inter-school competitions.",
    icon: <FaStar size={28} />,
  },
  {
    title: "Sports Achievements",
    description:
      "Winners in football, basketball, and athletics at district and state levels.",
    icon: <FaTrophy size={28} />,
  },
  {
    title: "Cultural Events",
    description:
      "Students excelling in music, dance, and drama, winning accolades in state festivals.",
    icon: <FaUsers size={28} />,
  },
  {
    title: "Community Service",
    description:
      "Active participation in social outreach, environmental awareness, and health drives.",
    icon: <FaMedal size={28} />,
  },
];

export default function Achievements() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 pt-[140px] px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-3">
          Academic Achievements
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          At Greenwood Academy, we take pride in the accomplishments of our
          students across academics, sports, culture, and community service.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#00796E] text-white p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-green-800">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer message */}
      <div className="mt-16 text-center text-gray-600 text-base md:text-lg">
        <p>
          These achievements reflect the dedication of our students and the
          unwavering support of our teachers and parents.
        </p>
      </div>
    </section>
  );
}
