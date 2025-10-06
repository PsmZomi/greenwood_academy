import React from "react";
import gw2 from "../images/gw1.jpg";
import {
  FaClipboardCheck,
  FaFileAlt,
  FaCalendarAlt,
  FaRupeeSign,
} from "react-icons/fa";

export default function AdmissionPage() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
      {/* Full-Screen Hero Image */}
      <div className="w-full h-74 overflow-hidden">
        <img
          src={gw2}
          alt="Greenwood Academy Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00796E] mb-4">
          Admission
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Admission is open to all young boys and girls who are willing to
          follow the rules and regulations laid down for the holistic
          development of the child. <br />
          <span className="font-semibold text-red-600">
            However, no new Class IX & X student will be admitted from the 2025
            Academic session.
          </span>
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-12 mb-16">
        {/* Admission Procedures */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaClipboardCheck className="text-green-700 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">
              Admission Procedures
            </h2>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#00796E] mt-6 mb-2">
              Old Students
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Priority is given to old students for admission. Specific dates
              are fixed for old students to get admitted, and they must do so
              within the fixed time. If any student fails to get admission
              within the given time, he/she may still be admitted if there are
              vacant seats available, but will have to pay a late fine.
            </p>

            <h3 className="text-xl font-semibold text-[#00796E] mt-6 mb-2">
              New Students
            </h3>
            <p className="text-gray-700 leading-relaxed">
              New students will be admitted only if they pass the{" "}
              <span className="font-semibold">ADMISSION TEST</span>. An
              admission form will be issued that must be filled in uppercase
              with all requested information. Particulars must match those in
              the Aadhaar Card.
            </p>
          </div>
        </div>

        {/* Important Dates */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaCalendarAlt className="text-green-700 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Important Dates</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm text-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-[#00796E] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Event</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Admission Form Distribution</td>
                  <td className="px-4 py-3">March 5, 2025</td>
                </tr>
                <tr className="border-t bg-green-50">
                  <td className="px-4 py-3">Last Date for Submission</td>
                  <td className="px-4 py-3">March 20, 2025</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Admission Test</td>
                  <td className="px-4 py-3">March 25, 2025</td>
                </tr>
                <tr className="border-t bg-green-50">
                  <td className="px-4 py-3">Result Declaration</td>
                  <td className="px-4 py-3">March 28, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Mandatory Documents */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaFileAlt className="text-green-700 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">
              Mandatory Documents
            </h2>
          </div>

          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Permanent Enrollment Number (PEN)</li>
            <li>APAAR ID</li>
            <li>Mark Sheet (previous academic records)</li>
            <li>Character Certificate</li>
            <li>Aadhaar Card</li>
            <li>Transfer Certificate</li>
          </ul>
        </div>

        {/* Fee Structure */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaRupeeSign className="text-green-700 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">Fee Structure</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm text-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-[#00796E] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Class</th>
                  <th className="px-4 py-3 text-left">Admission Fee</th>
                  <th className="px-4 py-3 text-left">Tuition Fee (Monthly)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">Pre-Primary</td>
                  <td className="px-4 py-3">₹3,000</td>
                  <td className="px-4 py-3">₹1,200</td>
                </tr>
                <tr className="border-t bg-green-50">
                  <td className="px-4 py-3">Primary (I - V)</td>
                  <td className="px-4 py-3">₹3,500</td>
                  <td className="px-4 py-3">₹1,500</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3">Middle (VI - VIII)</td>
                  <td className="px-4 py-3">₹4,000</td>
                  <td className="px-4 py-3">₹1,800</td>
                </tr>
                <tr className="border-t bg-green-50">
                  <td className="px-4 py-3">Secondary (IX - X)</td>
                  <td className="px-4 py-3">₹5,000</td>
                  <td className="px-4 py-3">₹2,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
