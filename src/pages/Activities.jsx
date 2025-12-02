import React from "react";

// Replace these with your actual image paths
import redHouse from "../images/red.jpg";
import greenHouse from "../images/green.jpg";
import yellowHouse from "../images/yellow.jpg";
import blueHouse from "../images/blue.jpg";

// Optional: Import icons for visual flair (requires installing react-icons: npm install react-icons)
import { FaGraduationCap, FaTrophy, FaCalendarAlt, FaBullhorn, FaPaintBrush, FaRunning, FaStar } from 'react-icons/fa';

const pcaActivities = [
    { title: "Sports & Games", description: "Football, Basketball, Volleyball, Badminton, Athletics", icon: FaRunning, color: "text-red-500" },
    { title: "Quiz Competitions", description: "General Knowledge & Current Affairs", icon: FaGraduationCap, color: "text-blue-500" },
    { title: "Olympiads", description: "Science and Mathematics Olympiads", icon: FaStar, color: "text-yellow-600" },
    { title: "Performing Arts", description: "Singing, Dancing, and Drama", icon: FaBullhorn, color: "text-purple-500" },
    { title: "Public Speaking", description: "Elocution, Debate, and Storytelling", icon: FaBullhorn, color: "text-green-500" },
    { title: "Creative Writing", description: "Essays, Poetry, and Short Story Writing", icon: FaPaintBrush, color: "text-indigo-500" },
    { title: "Visual Arts", description: "Drawing, Painting, and Poster Making", icon: FaPaintBrush, color: "text-pink-500" },
];

const houses = [
    { name: "Red Hawks", img: redHouse, color: "hover:shadow-red-500/50" },
    { name: "Green Sentinels", img: greenHouse, color: "hover:shadow-green-500/50" },
    { name: "Yellow Gryphons", img: yellowHouse, color: "hover:shadow-yellow-500/50" },
    { name: "Blue Phoenix", img: blueHouse, color: "hover:shadow-blue-500/50" },
];

const specialEvents = [
    { name: "Annual Sports Meet", icon: FaRunning },
    { name: "Cultural Day & Talent Hunt", icon: FaBullhorn },
    { name: "Independence Day & Republic Day Programs", icon: FaCalendarAlt },
    { name: "Teachers’ Day & Children’s Day Celebrations", icon: FaStar },
    { name: "Exhibition Week & Science Fair", icon: FaPaintBrush },
];

export default function CoCurricularActivities() {
    return (
        <section className="bg-gray-50 min-h-screen pt-[150px] pb-16 px-4 md:px-10">
            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#00796E] mb-4 relative inline-block underline pt-6">
                    Co-Curricular Activities
                    <span className="absolute left-1/2 bottom-0 w-16 h-1 bg-[#00796E] transform -translate-x-1/2 rounded-full"></span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto mt-6">
                    At Greenwood Academy, education goes beyond the classroom. We believe in nurturing every child's talents diverse Post Class Activities (PCA) and school-wide programs that promote creativity, confidence, teamwork and leadership
                </p>
            </div>

            {/* PCA Section - Card Grid */}
            <div className="max-w-7xl mx-auto mb-16 p-8 bg-white rounded-3xl shadow-xl">
                <h2 className="text-4xl font-bold text-[#00796E] mb-10 text-center">
                    Post Class Activities (PCA)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pcaActivities.map((activity, i) => {
                        const Icon = activity.icon;
                        return (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#00796E] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="flex items-center mb-3">
                                    <Icon className={`text-3xl ${activity.color} mr-3`} />
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {activity.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 text-sm">{activity.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
{/* House System */}
<div className="max-w-7xl mx-auto mb-10 text-center">
  <h2 className="text-4xl font-bold text-[#00796E] mb-6 relative inline-block">
    House System
    <span className="absolute left-1/2 bottom-0 w-20 h-1 bg-[#00796E] transform -translate-x-1/2 rounded-full"></span>
  </h2>
  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
    Students are grouped under four houses - Red Hawks, Green Sentinels, Yellow Gryphons and Blue Phoenix - fosterning a spirit of healthy competition through various inter-house events and challenges
  </p>

  <div className="flex flex-wrap justify-center gap-1">
    {houses.map((house, i) => (
      <div
        key={i}
        className="relative w-64 h-64 overflow-hidden shadow-lg cursor-pointer group transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      >
        <img
          src={house.img}
          alt={house.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Blurred colored background */}
            <span
              className="absolute inset-0 rounded-lg opacity-20 group-hover:opacity-70 transition-opacity duration-500"
              style={{
                backgroundColor: i === 0 ? "#EF4444" : i === 1 ? "#22C55E" : i === 2 ? "#EAB308" : "#3B82F6",
                filter: "blur(50px)",
              }}
            ></span>

            {/* House name */}
            <h3
              className="relative text-3xl md:text-4xl font-extrabold text-white transition-colors duration-500 opacity-0 group-hover:opacity-100"
              style={{
                color: i === 0 ? "#EF4444" : i === 1 ? "#22C55E" : i === 2 ? "#EAB308" : "#3B82F6",
              }}
            >
              {house.name}
            </h3>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* Special Events */}
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-4xl font-bold text-[#00796E] mb-6 text-center">
                    Major Annual Events & Celebrations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {specialEvents.map((event, index) => {
                        const Icon = event.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:bg-green-100 hover:shadow-md"
                            >
                                <div className="p-3 bg-[#00796E] rounded-full mr-4 flex-shrink-0">
                                    <Icon className="text-white text-xl" />
                                </div>
                                <p className="text-gray-700 text-lg font-medium pt-1">
                                    {event.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}