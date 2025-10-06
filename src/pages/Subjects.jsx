import React from "react";

const subjects = {
  compulsory: [
    "English",
    "MIL (Thadou-Kuki / Paite / Zou / Gangte / Vaiphei / Hindi etc) or Alternative English",
    "Environmental Education (EVS) / Physical & Health Education",
  ],
  science: [
    "Physics",
    "Chemistry",
    "Biology",
    "Mathematics",
    "Computer Science",
    "Electives: Statistics, Geography, Psychology",
  ],
  commerce: [
    "Accountancy",
    "Business Studies",
    "Economics",
    "Mathematics / Applied Mathematics",
    "Computer Applications",
    "Entrepreneurship",
  ],
  arts: [
    "History",
    "Political Science",
    "Geography",
    "Economics",
    "Education",
    "Sociology",
    "Philosophy",
    "Manipuri / Hindi / English Literature",
  ],
};

export default function SubjectsOffered() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-green-100 py-16 pt-[140px] px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900">
            Subjects Offered
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed text-base md:text-lg">
            Our school offers a wide range of compulsory and elective subjects
            under Science, Commerce, and Arts streams as prescribed by the{" "}
            <span className="font-semibold">BSEM / COHSEM</span> curriculum in
            Manipur.
          </p>
        </header>

        {/* Compulsory Subjects */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-8">
            Compulsory Subjects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.compulsory.map((sub, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex items-center justify-center text-center min-h-[120px]"
              >
                <p className="text-lg md:text-xl font-medium text-gray-800">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Streams Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Science Stream */}
          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition flex flex-col">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">
              Science Stream
            </h3>
            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              {subjects.science.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 before:content-['•'] before:text-green-600 before:text-xl"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Commerce Stream */}
          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition flex flex-col">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">
              Commerce Stream
            </h3>
            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              {subjects.commerce.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 before:content-['•'] before:text-green-600 before:text-xl"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Arts Stream */}
          <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition flex flex-col">
            <h3 className="text-2xl font-semibold text-green-700 mb-6">
              Arts Stream
            </h3>
            <ul className="space-y-3 text-gray-700 text-base md:text-lg">
              {subjects.arts.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 before:content-['•'] before:text-green-600 before:text-xl"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 text-base md:text-lg">
          <p>
            For detailed syllabus and subject combinations, please refer to{" "}
            <span className="font-semibold">BSEM / COHSEM guidelines</span>.
          </p>
        </footer>
      </div>
    </div>
  );
}
