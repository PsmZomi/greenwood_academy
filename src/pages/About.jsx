import React from "react";
import { FaUserAlt, FaLaptop, FaSearch } from "react-icons/fa";
import { teachers } from "../data/teachers";
import gw2 from "../images/gw2.jpg"
const aboutCards = [
  {
    title: "OUR MISSION",
    description:
      "To promote true education in harmony with the Adventist philosophy: harmonious development of physical, mental, social, and spiritual powers.",
    icon: <FaUserAlt size={20} />,
  },
  {
    title: "OUR VISION",
    description:
      "Greenwood Academy envisions being an institution of excellence in imparting true and value-based education.",
    icon: <FaLaptop size={20} />,
  },
  {
    title: "OUR GOAL",
    description:
      "To develop students with wisdom and academic excellence, nurturing independent thinkers and embracing truth, goodness, and beauty.",
    icon: <FaSearch size={20} />,
  },
];

function TeacherCard({ teacher }) {
  return (
    <div className="w-52 h-72 sm:w-56 sm:h-80 perspective cursor-pointer">
      <div className="relative preserve-3d w-full h-full transition-transform duration-1000 hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden flex flex-col justify-end text-center shadow-md">
          <img
            src={teacher.img}
            alt={teacher.name}
            className="w-full h-full object-cover rounded-xl"
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

export default function AboutPage() {
  return (
    <div className="w-full bg-gray-50">
     {/* Hero Image at Top */}
<div className="w-full h-72 sm:h-96 md:h-[500px] p-2 overflow-hidden">
  <img
    src={gw2}
    alt="Greenwood Academy Hero"
    className="w-full h-full object-cover"
  />
</div>
      {/* Welcome Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Welcome to <span className="text-[#00796E]">Greenwood Academy</span>
        </h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          Greenwood Academy has been nurturing students since 1998. We combine academic excellence with strong moral values, empowering students to grow intellectually, emotionally, and socially.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          Our school is recognized by the Board of Secondary Education, Manipur (Recognition No. 66743), ensuring that our students receive a structured and accredited education. Additionally, we are a registered body with the Government of Manipur through the Cooperative Society Office and are officially recognized under the Registration of Societies Act XXXI of 1860 (Registration No. 288 of 1990). These credentials reinforce our commitment to upholding high academic standards while maintaining a compassionate and inclusive approach to education.
        </p>
        <p className="text-gray-700 leading-relaxed mb-2">
          Our dedicated faculty members work tirelessly to inspire students, instilling in them values of hard work, resilience, and social responsibility. Greenwood Academy is not just a school—it is a nurturing community where children are encouraged to dream big and achieve their full potential.
        </p>
      </div>

      {/* Mission / Vision / Goal Section with Image Left */}
      <section className="max-w-6xl mx-auto px-6 md:px-0 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-auto transform transition-transform duration-500 hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden">
          <img
            src="https://greenwoodaca.com/wp-content/uploads/2025/06/P1095733-1024x683.jpg"
            alt="About Greenwood Academy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Right: Mission / Vision / Goal */}
        <div className="md:w-1/2 w-full flex flex-col gap-6 text-[#00796E]">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="p-4 rounded-lg transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold flex items-center gap-2 text-[#00796E]">
                {card.icon} {card.title}
              </h3>
              <p className="mt-2 text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Objectives Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-0 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Objectives
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 max-w-3xl mx-auto">
          <li>To lead students to become acquainted with God and enjoy a daily association and communion with Him.</li>
          <li>To assist in the formation of the noble Christian character by placing emphasis on the spiritual values of life, thus giving us a purpose, a meaning and a direction.</li>
          <li>To aid students in acquiring the scholarship and prepare them for higher studies.</li>
          <li>To develop in students a sense of dignity of labor.</li>
          <li>To encourage students to appreciate and practice the principles of healthful living.</li>
          <li>To assist students in developing a desirable personality.</li>
          <li>To cultivate a sense of civic responsibility and leadership.</li>
          <li>To develop respect and loyalty for government, law and order, both sacred and secular.</li>
        </ul>
      </section>

      {/* Teachers Section */}
      <section className="py-6 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Meet Our <span className="text-[#00796E]">Team</span>
          </h2>

          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-4">
              {teachers.slice(0, 4).map((teacher, index) => (
                <TeacherCard key={index} teacher={teacher} />
              ))}
            </div>

            {teachers.length > 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6 justify-items-center">
                {teachers.slice(4).map((teacher, index) => (
                  <TeacherCard key={index + 4} teacher={teacher} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
