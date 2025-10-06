import React, { useRef, useEffect } from "react";
import graduateVideo from "../videos/gwgraduate.mp4";
import teacherVideo from "../videos/gwteacherday.mp4";

export default function Home() {
  const graduateVideoRef = useRef(null);
  const teacherVideoRef = useRef(null);

  useEffect(() => {
    // Autoplay both videos silently
    if (graduateVideoRef.current) {
      graduateVideoRef.current.muted = true;
      graduateVideoRef.current.play().catch(console.error);
    }
    if (teacherVideoRef.current) {
      teacherVideoRef.current.muted = true;
      teacherVideoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <section className="w-full relative">
      {/* Hero Section with Graduate Video */}
      <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
        <video
          ref={graduateVideoRef}
          src={graduateVideo}
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-2xl">
              Greenwood
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light mt-2">
                Academy
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto my-6 rounded-full"></div>
            <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6 drop-shadow-lg">
              Shaping Futures Through Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Content Section with Adjusted Spacing */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white py-20 px-6" style={{ marginTop: 0 }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              In Truth & Love
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00796E] mb-6">
              We Educate and Inspire
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are dedicated to nurturing every child's potential through a holistic
              education that balances intellect, creativity, discipline, and empathy.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#00796E] rounded-full mr-3"></div>
                <span className="text-gray-700">Academic Excellence</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#00796E] rounded-full mr-3"></div>
                <span className="text-gray-700">Character Development</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-[#00796E] rounded-full mr-3"></div>
                <span className="text-gray-700">Creative Expression</span>
              </div>
            </div>
          </div>

          {/* Teacher Video Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={teacherVideoRef}
              src={teacherVideo}
              muted
              autoPlay
              loop
              playsInline
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}