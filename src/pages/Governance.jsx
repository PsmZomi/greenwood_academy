import React from "react";
import { FiUsers, FiLayers, FiBookOpen, FiStar, FiFileText } from "react-icons/fi";

const governanceSections = [
  {
    title: "School Board",
    description:
      "Provides strategic direction, financial oversight, and ensures accountability.",
    icon: <FiLayers className="text-indigo-600 text-4xl mb-4" />,
  },
  {
    title: "Leadership Team",
    description:
      "Manages academics, administration, and ensures student welfare.",
    icon: <FiStar className="text-indigo-600 text-4xl mb-4" />,
  },
  {
    title: "Parent-Teacher Association",
    description:
      "Strengthens family-school partnerships through collaboration and trust.",
    icon: <FiUsers className="text-indigo-600 text-4xl mb-4" />,
  },
  {
    title: "Student Council",
    description:
      "Amplifies student voices, encourages leadership, and drives participation.",
    icon: <FiBookOpen className="text-indigo-600 text-4xl mb-4" />,
  },
];

const governanceMembers = [
  { name: "Mr. Rajesh Kumar", role: "Chairperson", img: "/images/chairperson.jpg" },
  { name: "Mrs. Anita Sharma", role: "Principal", img: "/images/principal.jpg" },
  { name: "Mr. Vivek Mehta", role: "Vice Principal", img: "/images/viceprincipal.jpg" },
  { name: "Mrs. Neha Patel", role: "PTA President", img: "/images/pta.jpg" },
  { name: "Rohan Verma", role: "Student Council Head", img: "/images/student.jpg" },
];

const policies = [
  { name: "Admissions Policy", link: "/policies/admissions.pdf" },
  { name: "Anti-Bullying Policy", link: "/policies/antibullying.pdf" },
  { name: "Child Safeguarding Policy", link: "/policies/safeguarding.pdf" },
  { name: "Code of Conduct", link: "/policies/conduct.pdf" },
];

export default function Governance() {
  return (
    <div className="bg-gray-50 pt-[140px]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r text-gray-800 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#00796E]">
          Governance & Leadership
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Transparency, accountability, and collaboration drive our mission for
          excellence in education.
        </p>
      </div>

      {/* Governance Structure */}
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-[#00796E]">
          Our Governance Structure
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {governanceSections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transition transform hover:scale-105"
            >
              {section.icon}
              <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-600 text-sm">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Members */}
      <div className="bg-white py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Key Members
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {governanceMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg bg-gray-50 hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="text-center p-5">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policies Section */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Policies & Downloads</h2>
          <p className="text-gray-600 mb-10">
            Our policies ensure a safe, inclusive, and effective learning
            environment. Click below to view or download:
          </p>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
          {policies.map((policy, index) => (
            <a
              key={index}
              href={policy.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-indigo-700 font-medium"
            >
              <FiFileText className="text-indigo-600 text-2xl" />
              <span>{policy.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-green-600 to-indigo-600 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="mb-6 opacity-90">
          Want to participate in our governance? Reach out to our team.
        </p>
        <a
          href="mailto:governance@school.com"
          className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Contact Governance Team
        </a>
      </div>
    </div>
  );
}
