import React, { useEffect, useState } from "react";

const curriculum = [
  {
    stage: "Pre-Primary (Nursery – UKG)",
    description:
      "The Pre-Primary stage nurtures curiosity and builds a love for learning through play, storytelling, and creative activities. It lays the foundation for emotional, social, and cognitive development.",
    subjects: [
      "English (Phonics & Basic Vocabulary)",
      "Numbers & Early Mathematics",
      "Rhymes, Storytelling & Picture Reading",
      "Drawing, Coloring & Craft",
      "Music, Dance & Physical Activities",
      "Moral Values & Good Habits",
    ],
  },
  {
    stage: "Primary (Classes I – V)",
    description:
      "At the Primary stage, emphasis is on strengthening the foundation of literacy, numeracy, and life skills. Learning is activity-based and designed to spark curiosity.",
    subjects: [
      "English & Regional Language",
      "Mathematics",
      "Environmental Science",
      "General Knowledge",
      "Art & Handwriting",
    ],
  },
  {
    stage: "Middle (Classes VI – VIII)",
    description:
      "The Middle stage introduces formal disciplines, builds analytical skills, and prepares students for higher-level studies with a balance of academics and co-curricular activities.",
    subjects: [
      "English",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Studies",
      "Computer Science",
    ],
  },
  {
    stage: "Secondary (Classes IX – X)",
    description:
      "Secondary education prepares students for Board Exams under the NBSE/CBSE system. The focus shifts to career readiness, subject mastery, and holistic growth.",
    subjects: [
      "English",
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Social Studies",
      "Computer Applications",
    ],
  },
];

// Combined Key Highlights
const keyHighlights = [
  "Play-based and activity-oriented learning in early years",
  "Strengthening of literacy, numeracy, and life skills",
  "Introduction to computers, digital learning, and IT labs",
  "Special coaching for Board Exam preparation",
  "Encouragement for competitive exams (NTSE, Olympiads, etc.)",
  "Balanced growth with sports, arts, music, and leadership activities",
  "Focus on creativity, moral values, and holistic personality development",
];

export default function Curriculum() {
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
      className="bg-gradient-to-br from-green-50 to-gray-100 min-h-screen px-6 py-16"
      style={{ paddingTop: `calc(var(--navbar-height, ${navbarHeight}px) + 2rem)` }}
    >
      {/* Page Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Curriculum
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our curriculum is aligned with{" "}
          <span className="font-semibold text-green-700">NCERT guidelines</span>{" "}
          and the state education policies of Manipur. It ensures the academic,
          emotional, and physical development of every child while preparing
          them for real-world challenges.
        </p>
      </div>

      {/* Top Row: Pre-Primary & Primary */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {curriculum.slice(0, 2).map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col" // Removed ${section.bg} as it’s undefined
          >
            <div className="flex justify-center"></div>
            <h2 className="text-2xl font-bold text-green-800 mb-3 text-center">
              {section.stage}
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              {section.description}
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
              Subjects Offered
            </h3>
            <ul className="list-disc list-inside text-gray-800 text-sm mb-6 space-y-1">
              {section.subjects.map((subject, i) => (
                <li key={i}>{subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Row: Middle & Secondary */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {curriculum.slice(2, 4).map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col" // Removed ${section.bg} as it’s undefined
          >
            <div className="flex justify-center"></div>
            <h2 className="text-2xl font-bold text-green-800 mb-3 text-center">
              {section.stage}
            </h2>
            <p className="text-gray-600 mb-6 text-center">
              {section.description}
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
              Subjects Offered
            </h3>
            <ul className="list-disc list-inside text-gray-800 text-sm mb-6 space-y-1">
              {section.subjects.map((subject, i) => (
                <li key={i}>{subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Key Highlights Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Key Highlights of Our Curriculum
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2 text-left max-w-3xl mx-auto">
          {keyHighlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}