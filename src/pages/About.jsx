import React from "react";
import { FaUserAlt, FaLaptop, FaSearch, FaClock, FaBuilding, FaFutbol, FaMusic, FaGraduationCap } from "react-icons/fa";
import gw2 from "../images/gw2.jpg";

// ✅ Import local admin images properly
import principal from "../images/principal.png";
import vicePrincipal from "../images/vp.jpg";
import academicDean from "../images/dean.jpg";
import hod from "../images/hod.jpg";

const aboutCards = [
  {
    title: "OUR MISSION",
    description:
      "To promote true education in harmony with the Adventist philosophy: harmonious development of physical, mental, social, and spiritual powers.",
    icon: <FaUserAlt className="text-[#00796E]" size={28} />,
  },
  {
    title: "OUR VISION",
    description:
      "Greenwood Academy envisions being an institution of excellence in imparting true and value-based education.",
    icon: <FaLaptop className="text-[#00796E]" size={28} />,
  },
  {
    title: "OUR GOAL",
    description:
      "To develop students with wisdom and academic excellence, nurturing independent thinkers and embracing truth, goodness, and beauty.",
    icon: <FaSearch className="text-[#00796E]" size={28} />,
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-80 sm:h-96 md:h-[500px] p-4 overflow-hidden">
        <img
          src={gw2}
          alt="Greenwood Academy Hero"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Welcome Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-900">
          Welcome to <span className="text-[#00796E]">Greenwood Academy</span>
        </h1>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg max-w-5xl mx-auto">
          <p>
            Greenwood Academy has been nurturing students since 1998. We combine
            academic excellence with strong moral values, empowering students to
            grow intellectually, emotionally, and socially.
          </p>
          <p>
            Our school is recognized by the Board of Secondary Education, Manipur
            (Recognition No. 66743), ensuring that our students receive a
            structured and accredited education. Additionally, we are a registered
            body with the Government of Manipur through the Cooperative Society
            Office and are officially recognized under the Registration of
            Societies Act XXXI of 1860 (Registration No. 288 of 1990).
          </p>
          <p>
            Our dedicated faculty members work tirelessly to inspire students,
            instilling in them values of hard work, resilience, and social
            responsibility. Greenwood Academy is not just a school—it is a
            nurturing community where children are encouraged to dream big and
            achieve their full potential.
          </p>
        </div>
      </div>

      {/* Mission / Vision / Goal Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="h-96 lg:h-[600px] transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://greenwoodaca.com/wp-content/uploads/2025/06/P1095733-1024x683.jpg"
                alt="About Greenwood Academy"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Text Cards */}
          <div className="lg:w-1/2 w-full space-y-8">
            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 p-4 bg-[#00796E]/10 rounded-xl">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00796E] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-4xl font-bold text-[#00796E] mb-12 text-center">
            Our Objectives
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-lg">
            {[
              "To lead students to become acquainted with God and enjoy daily communion with Him.",
              "To form noble Christian character emphasizing spiritual values.",
              "To aid students in acquiring scholarship for higher studies.",
              "To develop a sense of dignity of labor.",
              "To promote principles of healthful living.",
              "To assist in developing a desirable personality.",
              "To cultivate civic responsibility and leadership.",
              "To develop respect and loyalty for government, law, and order."
            ].map((objective, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 bg-[#00796E] rounded-full mt-3"></div>
                <p className="text-gray-700 text-lg">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration Section */}
      <section className="py-16 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Administration <span className="text-[#00796E]">& Management</span>
          </h2>

         {/* Admin Team */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  {[
    { name: "Mr. Richard L. Haokip", title: "Principal", image: principal },
    { name: "Mr. Daniel Kipgen", title: "Vice Principal", image: vicePrincipal },
    { name: "Mrs. Chinneithiem Haokip", title: "Academic Dean", image: academicDean },
    { name: "Mrs. Lamneikim Ngaihte", title: "HOD (Pre to Middle Section)", image: hod },
  ].map((person, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2"
    >
      <div className="w-full h-64 mb-6 overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{person.name}</h3>
      <p className="text-lg text-[#00796E] font-semibold">{person.title}</p>
    </div>
  ))}
</div>

          {/* Content Sections */}
          <div className="space-y-16 text-gray-700">
            {/* Departments */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-4 justify-center">
                <FaBuilding className="text-[#00796E]" size={32} />
                Departments & Committees
              </h3>
              
              {/* Examination Committee */}
              <div className="mb-12">
                <h4 className="font-bold text-[#00796E] text-2xl mb-6 border-b-2 pb-3">
                  A. Examination Committee
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-lg">
                    <thead>
                      <tr className="bg-[#00796E] text-white">
                        <th className="py-4 px-6 text-left font-semibold text-xl">Name</th>
                        <th className="py-4 px-6 text-left font-semibold text-xl">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mr. Richard L. Haokip</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Principal (Consultant)</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mr. Daniel Kipgen</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Vice Principal (Chairman)</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mrs. Chinneithiem Haokip</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Academic Dean (Secretary)</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mrs. Lamneikim Ngaihte</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">HOD (Member)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Disciplinary Committee */}
              <div>
                <h4 className="font-bold text-[#00796E] text-2xl mb-6 border-b-2 pb-3">
                  B. Disciplinary Committee
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-lg">
                    <thead>
                      <tr className="bg-[#00796E] text-white">
                        <th className="py-4 px-6 text-left font-semibold text-xl">Name</th>
                        <th className="py-4 px-6 text-left font-semibold text-xl">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mr. Richard L. Haokip</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Principal (Chairman)</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mr. Daniel Kipgen</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Vice Principal (Secretary)</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mr. Biaksang Gangte</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Member</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mr. Moab Lhungdim</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Member</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Mr. Alfred Haokip</td>
                        <td className="py-4 px-6 text-gray-700 text-lg">Member</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Important Timings */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-4">
                <FaClock className="text-[#00796E]" size={32} />
                Important Timings
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#00796E] text-2xl mb-4">School Timing</h4>
                  <div className="space-y-3 text-lg">
                    <p className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Nursery to Std V:</span>
                      <span className="font-bold text-gray-900 text-xl">8:50 am – 1:45 pm</span>
                    </p>
                    <p className="flex justify-between items-center py-2">
                      <span className="font-medium">Std VII to X:</span>
                      <span className="font-bold text-gray-900 text-xl">8:50 am – 2:25 pm</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#00796E] text-2xl mb-4">Office Timing</h4>
                  <div className="space-y-3 text-lg">
                    <p className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Vice Principal, Academic Dean, HOD:</span>
                      <span className="font-bold text-gray-900 text-xl">9:00 am – 2:00 pm (Mon–Fri)</span>
                    </p>
                    <p className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="font-medium">Principal's Office:</span>
                      <span className="font-bold text-gray-900 text-xl">9:30 am – 12:30 pm (with prior appointment)</span>
                    </p>
                    <p className="flex justify-between items-center py-2">
                      <span className="font-medium">Cashier Office:</span>
                      <span className="font-bold text-gray-900 text-xl">9:00 am – 2:00 pm</span>
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 italic border-t-2 pt-6 mt-6 text-center">
                  No business will be transacted on Saturday, Sunday, and holidays.
                </p>
              </div>
            </div>

            {/* Facilities */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-10 flex items-center gap-4">
                <FaGraduationCap className="text-[#00796E]" size={32} />
                Our Facilities
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: <FaFutbol className="text-[#00796E]" size={28} />, title: "Sports", desc: "Spacious courts for handball, volleyball, and basketball to promote fitness and teamwork." },
                  { icon: <FaUserAlt className="text-[#00796E]" size={28} />, title: "Infirmary", desc: "Equipped for basic medical care and first aid with trained staff on duty." },
                  { icon: <FaSearch className="text-[#00796E]" size={28} />, title: "Drinking Water", desc: "Clean and safe water available across the campus." },
                  { icon: <FaLaptop className="text-[#00796E]" size={28} />, title: "Smart Classroom", desc: "Technology-enabled learning for interactive and engaging lessons." },
                  { icon: <FaMusic className="text-[#00796E]" size={28} />, title: "Music Room", desc: "A creative space for music theory and practice, nurturing young talents." },
                ].map((facility, index) => (
                  <div key={index} className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex-shrink-0 p-4 bg-[#00796E]/10 rounded-xl">
                      {facility.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#00796E] text-xl mb-3">{facility.title}</h4>
                      <p className="text-gray-700 text-lg leading-relaxed">{facility.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}