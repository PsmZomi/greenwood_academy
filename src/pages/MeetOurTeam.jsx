import React, { useEffect, useState } from "react";
import teachers from "../data/teachers";

function TeacherCard({ teacher }) {
  return (
    <div className="w-52 h-72 sm:w-56 sm:h-80 perspective cursor-pointer">
      <div className="relative preserve-3d w-full h-full transition-transform duration-700 ease-in-out transform hover:rotate-y-180 hover:scale-105">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden flex flex-col justify-end text-center shadow-md">
          <img
            src={teacher.img}
            alt={teacher.name}
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white py-2 px-2">
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <p className="text-sm">{teacher.position}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-white p-4 flex flex-col justify-center text-gray-800 shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#00796E] text-center">
            {teacher.name}
          </h3>
          <p className="text-sm mb-1">
            <span className="font-semibold">Subject:</span> {teacher.subject}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Qualification:</span> {teacher.qualification}
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Address:</span> {teacher.address}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Email:</span> {teacher.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MeetOurTeam() {
  const [navbarHeight, setNavbarHeight] = useState(48); // Default height

  useEffect(() => {
    const updateNavbarHeight = () => {
      const height = document.querySelector("nav")?.offsetHeight || 48;
      setNavbarHeight(height);
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    };
    updateNavbarHeight(); // Initial call
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <section
      className="bg-gray-100 min-h-screen"
      style={{ paddingTop: `calc(var(--navbar-height, ${navbarHeight}px) + 2rem)` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center relative z-10">
          Meet Our <span className="text-[#00796E]">Team</span>
        </h2>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-6">
          {teachers.slice(0, 4).map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
        </div>

        {/* Remaining Teachers */}
        {teachers.length > 4 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8 justify-items-center">
            {teachers.slice(4).map((teacher, index) => (
              <TeacherCard key={index + 4} teacher={teacher} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}