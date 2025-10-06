import React, { useEffect, useState, useRef } from "react";
import { UserRound, Users, GraduationCap, Trophy } from "lucide-react"; 
import principalPhoto from "../images/principal.png";
import gw2 from "../images/gw2.jpg";

export default function PrincipalMessage() {
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  const stats = [
    { label: "Teachers", value: 36, icon: <UserRound className="w-7 h-7" /> },
    { label: "Students", value: 1000, suffix: "+", icon: <Users className="w-7 h-7" /> },
    { label: "Graduates", value: 500, suffix: "+", icon: <GraduationCap className="w-7 h-7" /> },
    { label: "Awards", value: 10, suffix: "+", icon: <Trophy className="w-7 h-7" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  const Counter = ({ value, trigger, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!trigger) return;
      let start = 0;
      const duration = 1500;
      const increment = value / (duration / 16);
      const step = () => {
        start += increment;
        if (start >= value) {
          setCount(value);
        } else {
          setCount(Math.floor(start));
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }, [value, trigger]);

    return (
      <div className="text-3xl md:text-5xl font-bold text-[#00796E]">
        {count}
        {suffix ? suffix : ""}
      </div>
    );
  };

  return (
    <section className="w-full">
      {/* Hero Image - Improved spacing */}
      <div className="w-full h-[40vh] md:h-[50vh] overflow-hidden relative">
        <img
          src={gw2}
          alt="Greenwood Academy Hero"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Principal's Message
          </h1>
          <p className="text-lg md:text-2xl text-white/95 drop-shadow-md max-w-2xl">
            Leading with vision, inspiring with action
          </p>
        </div>
      </div>

      {/* Principal Card - Improved layout and spacing */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 -mt-8 md:-mt-16 relative z-10">
        <div className="bg-white rounded-2x shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Image Section - Enhanced styling */}
            <div className="md:w-2/5 p-8 md:p-10 flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="relative mb-6">
                <div className="absolute -inset-4 opacity-20"></div>
                <img
                  src={principalPhoto}
                  alt="Principal Richard L Haokip"
                  className="relative w-48 h-64 md:w-56 md:h-72 object-cover"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">
                Mr. Richard L Haokip
              </h2>
              <p className="text-base md:text-lg text-gray-600 text-center">
                Principal, Greenwood Academy
              </p>
            </div>

            {/* Message Section - Improved typography and spacing */}
            <div className="md:w-3/5 bg-white/20 p-8 md:p-12 text-gray-800 relative">
              <span className="text-7xl md:text-9xl text-green-100 absolute top-0 left-6 md:left-8 leading-none">"</span>
              <div className="relative z-10 space-y-6">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-justify">
                  Dear Students, Parents, and Well-Wishers,
                </p>
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-700 text-justify">
                  <p>
                    For over two decades, Greenwood Academy has stood as a beacon of hope for children who dare to dream beyond their circumstances. Since our humble beginnings in 1998, we have remained steadfast in our belief that education is not a privilege but a fundamental right – one that can break the cycle of poverty and empower generations.
                  </p>
                  <p>
                    At Greenwood, we do not merely teach; we nurture resilience, curiosity, and compassion. Every child who walks through our doors carries a unique story, and it is our sacred duty to ensure they leave with the tools to rewrite their futures. Whether it is providing free education to those in need or charging minimal fees to sustain our operations, our goal remains unchanged: no child should be denied learning.
                  </p>
                  <p>
                    I am immensely proud of our students – many of whom, despite facing immense hardships, have gone on to excel academically, pursue higher education, and become role models in their communities. This is the Greenwood legacy: transforming lives through unwavering dedication and collective effort.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="italic font-semibold text-gray-800 text-base md:text-lg">
                    With gratitude and hope,
                    <br />
                    <span className="text-green-700">Mr. Richard L Haokip</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Enhanced visual design */}
      <div
        className="max-w-6xl mx-auto mt-12 md:mt-24 px-4 md:px-6 py-12 md:py-16"
        ref={statsRef}
      >
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            20+ Years of Excellence
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Building futures, transforming lives through quality education
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-4 text-green-600 group-hover:text-green-700 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <Counter value={stat.value} trigger={statsInView} suffix={stat.suffix} />
              <div className="font-semibold text-gray-700 text-base md:text-lg mt-3 group-hover:text-gray-900">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}