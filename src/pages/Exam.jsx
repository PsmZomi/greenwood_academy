import React from "react";

export default function ExaminationStructure() {
  const sections = [
    {
      title: "Total Exams per Academic Year : 4",
      content: [
        "Formative Assessment - I",
        "Summative Assessment - I",
        "Formative Assessment - II",
        "Summative Assessment - II",
      ],
    },
    {
      title: "Formative Assessments (FA)",
      content: ["Total Marks: 50 + 20 Internal Marks", "Pass Mark: 23"],
    },
    {
      title: "Summative Assessments (SA)",
      content: ["Total Marks: 80 + 20 Internal Marks", "Pass Mark: 33"],
    },
    {
      title: "Special Note",
      content: ["FA-2 will serve as the Selection Exam for Class X students."],
    },
    {
      title: "Requirement for Promotion to Next Class",
      content: [
        "At least 80% attendance, faithfully and regularly doing and submitting homework, performing well in tests, and passing all the quarterly or term exams are required for promotion.",
        "Promotion to the next class indicates that the student has learned the prescribed syllabus.",
      ],
    },
  ];

  return (
    <section className="bg-green-50 min-h-screen pt-[140px] px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00796E] mb-6 underline pt-8">
          Examination Structure
        </h1>
      </div>

      {/* Card Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {sections.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-8 text-left border-t-4 border-[#00796E] w-full md:w-[90%] ${
              index === sections.length - 1 ? "md:col-span-2 md:justify-self-center md:w-[60%]" : ""
            }`}
          >
            <h2 className="text-2xl font-semibold text-[#00796E] mb-3 text-center">
              {item.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
              {item.content.map((text, i) => (
                <li key={i} className="leading-relaxed">
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Optional Note */}
      <div className="max-w-4xl mx-auto mt-12 text-center pb-2">
        <p className="text-gray-600 text-sm italic">
          * All examinations and promotions follow the school’s academic policy and evaluation
          standards.
        </p>
      </div>
    </section>
  );
}
