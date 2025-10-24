import React, { useEffect, useState } from "react";

const curriculum = [
  {
    stage: "Pre-Primary (Nursery – UKG)",
    description:
      "The Pre-Primary section lays the foundation for lifelong learning. Children learn through fun, play-based activities that develop communication, creativity, and social skills. Each day is filled with stories, art, music, and discovery, helping young learners grow with confidence and joy.",
    focus: [
      "Early literacy and numeracy",
      "Motor skills",
      "Social and emotional growth",
    ],
    coreSubjects: ["Literacy", "Numeracy", "General Awareness", "Value Education"],
    coScholasticSubjects: ["Rhymes", "Arts & Crafts"],
  },
  {
    stage: "Primary (Classes I – V)",
    description:
      "The Primary section builds on curiosity and imagination. Students strengthen their basics in core subjects while learning to express ideas, work in teams, and think independently. Lessons are activity-oriented and supported by co-curricular programs to ensure balanced development.",
    focus: [
      "Core academics",
      "Communication skills",
      "Creativity & participation",
    ],
    coreSubjects: [
      "English",
      "Science",
      "Social Studies",
      "Mathematics",
      "Environmental Studies",
      "Value Education",
      "General Knowledge",
      "Know your Aptitude",
    ],
  },
  {
    stage: "Middle (Classes VI – VIII)",
    description:
      "Middle section bridges foundational learning and higher academic rigor. Students are encouraged to question, experiment, and explore through projects, presentations, and interactive lessons. Leadership, teamwork, and responsibility are developed through house and club activities.",
    focus: [
      "Conceptual understanding",
      "Critical thinking",
      "Leadership through PCA activities",
    ],
    coreSubjects: [
      "English",
      "Science",
      "Social Science",
      "Mathematics",
      "ITC",
      "Value Education",
      "Hindi",
      "Know your Aptitude",
    ],
    electiveOptions: [
      "IIT-JEE / NEET Preparation",
      "Music Theory, Arts & Phonetics",
    ],
  },
  {
    stage: "Secondary (Classes IX – X)",
    description:
      "The Secondary section prepares students for academic excellence and real-world readiness. Alongside board exam preparation, students choose an academic path aligned with their interests and goals — IIT-JEE/NEET or Music Theory, Arts, Phonetics. Emphasis is on discipline, focus, and career awareness.",
    focus: [
      "Academic excellence",
      "Career readiness",
      "Personality development",
    ],
    coreSubjects: [
      "English",
      "Science",
      "Social Science",
      "Mathematics",
      "MIL",
      "Home Science",
    ],
    electiveOptions: [
      "IIT-JEE / NEET Preparation",
      "Music Theory, Arts & Phonetics",
    ],
  },
];

const keyHighlights = [
  "Play-based and activity-oriented learning in early years",
  "Strengthening of literacy, numeracy, and life skills",
  "Introduction to computers, digital learning, and IT labs",
  "Special coaching for Board Exam preparation",
  "Encouragement for competitive exams (NTSE, Olympiads, etc.)",
  "Balanced growth with sports, arts, music, and leadership activities",
  "Focus on creativity, moral values, and holistic personality development",
];

export default function Academics() {
  const [navbarHeight, setNavbarHeight] = useState(48);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const height = document.querySelector("nav")?.offsetHeight || 48;
      setNavbarHeight(height);
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <section
      className="bg-green-50 min-h-screen px-6 py-16"
      style={{ paddingTop: `calc(var(--navbar-height, ${navbarHeight}px) + 2rem)` }}
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#00796E] mb-4 underline text-wide">
          CURRICULUM
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
          At Greenwood Academy, our academic program is designed to provide students with a balanced
          education that combines core learning with skill-based enrichment.
        </p>
        
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
           Our curriculum is aligned with NCERT guidelines and the state education policies of Manipur. It
 ensures the academic, emotional, and physical development of every child while preparing them for
 real-world challenges.
        </p>
      </div>

      {/* Curriculum Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {curriculum.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 flex flex-col"
          >
            <h2 className="text-2xl font-bold text-[#00796E] mb-3 text-center">
              {section.stage}
            </h2>
            <p className="text-gray-600 mb-4 text-left">{section.description}</p>

            {/* Focus Areas */}
            {section.focus && (
              <div className="mb-4">
                <h3 className="text-[#00796E] font-semibold mb-2 border-l-4 border-[#00796E] pl-2 text-left">
                  Focus Areas
                </h3>
                <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                  {section.focus.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Core Subjects */}
            {section.coreSubjects && (
              <div className="mb-4">
                <h3 className="text-[#00796E] font-semibold mb-2 border-l-4 border-[#00796E] pl-2 text-left">
                  Core Subjects
                </h3>
                <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                  {section.coreSubjects.map((subject, i) => (
                    <li key={i}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Co-Scholastic Subjects */}
            {section.coScholasticSubjects && (
              <div className="mb-4">
                <h3 className="text-[#00796E] font-semibold mb-2 border-l-4 border-[#00796E] pl-2 text-left">
                  Co-Scholastic Subjects
                </h3>
                <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                  {section.coScholasticSubjects.map((subject, i) => (
                    <li key={i}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Elective Options */}
            {section.electiveOptions && (
              <div className="mb-4">
                <h3 className="text-[#00796E] font-semibold mb-2 border-l-4 border-[#00796E] pl-2 text-left">
                  Elective Options
                </h3>
                <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                  {section.electiveOptions.map((subject, i) => (
                    <li key={i}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Subjects Offered */}
            {section.subjects && (
              <div className="mb-4">
                <h3 className="text-[#00796E] font-semibold mb-2 border-l-4 border-[#00796E] pl-2 text-left">
                  Subjects Offered
                </h3>
                <ul className="list-disc list-inside text-gray-800 text-sm space-y-1">
                  {section.subjects.map((subject, i) => (
                    <li key={i}>{subject}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Key Highlights */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-left">
        <h2 className="text-2xl font-bold text-center text-[#00796E] mb-4">
          Key Highlights of Our Curriculum
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
          {keyHighlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
