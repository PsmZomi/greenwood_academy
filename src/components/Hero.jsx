import React from "react";
import { FaUserAlt, FaLaptop, FaSearch } from "react-icons/fa";
import sampleVideo from "../videos/gwgraduate.mp4";

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-stretch bg-gray-50 px-6 md:px-12 lg:px-16 py-12">
      {/* Top: Welcome Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Welcome to <span className="text-[#00796E]">Greenwood Academy</span>
        </h2>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Welcome to Greenwood Academy where excellence meets legacy.
          Established in 1998, we take pride in nurturing individuals through
          quality education rooted in truth and love. We combine academic
          excellence with strong moral values, empowering students to grow
          intellectually, emotionally, and socially in a supportive and
          inclusive environment.
        </p>
      </div>

      {/* Middle: Video + Mission / Vision / Goal */}
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-stretch gap-10 h-full">
        <div className="md:w-1/2 h-full flex justify-center md:justify-start">
          <video
            src={sampleVideo}
            autoPlay
            loop
            muted
            controls={false}
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>

        {/* Right: Mission / Vision / Goal */}
        <div className="md:w-1/2 flex flex-col justify-center gap-4 h-full text-gray-800">
          {/* Mission */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FaUserAlt className="text-[#00796E]" /> OUR MISSION
            </h3>
            <p className="mt-1 text-sm md:text-base">
              To promote true education in harmony with the Adventist
              philosophy: harmonious development of physical, mental, social,
              and spiritual powers.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FaLaptop className="text-[#00796E]" /> OUR VISION
            </h3>
            <p className="mt-1 text-sm md:text-base">
              Envisioning Greenwood Academy as an institution of excellence in
              imparting true and value-based education.
            </p>
          </div>

          {/* Goal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FaSearch className="text-[#00796E]" /> OUR GOAL
            </h3>
            <p className="mt-1 text-sm md:text-base">
              To develop students with wisdom and academic excellence, nurturing
              independent thinkers and embracing truth, goodness, and beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
