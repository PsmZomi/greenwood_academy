import React from "react";
import gw2 from "../images/gw1.jpg";
import {
  FaClipboardCheck,
  FaFileAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function AdmissionPage() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-72 overflow-hidden">
        <img
          src={gw2}
          alt="Greenwood Academy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00796E] mb-4">
          ADMISSION
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

          <h3 className="text-xl font-semibold text-[#00796E] mt-6 mb-2">
            Old Students
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Priority is given to old students for admission. Specific dates are
            fixed for old students to get admitted, and they must do so within
            the fixed time. If any student fails to get admission within the
            given time, he/she may still be admitted if there are vacant seats
            available, but will have to pay a late fine.
          </p>

          <h3 className="text-xl font-semibold text-[#00796E] mt-6 mb-2">
            New Students
          </h3>
          <p className="text-gray-700 leading-relaxed">
            New students will be admitted only if they pass the{" "}
            <span className="font-semibold">ADMISSION TEST</span>. An admission
            form will be issued that must be filled in uppercase with all
            requested information. Particulars must match those in the Aadhaar
            Card.
          </p>
        </div>

        {/* Important Dates */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FaCalendarAlt className="text-green-700 text-2xl" />
            <h2 className="text-2xl font-bold text-gray-900">
              Important Dates
            </h2>
          </div>

          {/* Unified Boxed Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <table className="min-w-full text-sm text-gray-800 text-start">
              <thead className="bg-[#00796E] text-white">
                <tr>
                  <th className="px-4 py-3 text-start">Event</th>
                  <th className="px-4 py-3 text-start">Month</th>
                </tr>
              </thead>
              <tbody>
                {/* Old Students */}
                <tr className="bg-green-50 font-semibold text-[#00796E]">
                  <td colSpan={2} className="px-4 py-2 border-t text-center">
                    Old Students
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Admission Form Distribution</td>
                  <td className="px-4 py-2 border-t">March</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border-t text-start">Admission</td>
                  <td className="px-4 py-2 border-t">March</td>
                </tr>

                {/* New Students */}
                <tr className="bg-green-50 font-semibold text-[#00796E]">
                  <td colSpan={2} className="px-4 py-2 border-t text-center">
                    New Students
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Admission Form Distribution</td>
                  <td className="px-4 py-2 border-t">April</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border-t">Admission Test</td>
                  <td className="px-4 py-2 border-t">April</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-t">Test Result Declaration</td>
                  <td className="px-4 py-2 border-t">April</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border-t">Admission</td>
                  <td className="px-4 py-2 border-t">April</td>
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
          <h3 className="text-2xl font-semibold text-[#00796E] mb-4 text-center">
            Fee Structure
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm text-gray-800 text-center rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#00796E] text-white">
                  {/* Reduced px-4 to px-2 */}
                  <th rowSpan={2} className="px-2 py-3 border">
                    Class
                  </th>
                  <th colSpan={2} className="px-2 py-3 border">
                    Admission
                  </th>
                  <th rowSpan={2} className="px-2 py-3 border">
                    Tuition Fee
                  </th>
                </tr>
                <tr className="bg-[#00695C] text-white">
                  {/* Reduced px-4 to px-2 */}
                  <th className="px-2 py-2 border">Old Students</th>
                  <th className="px-2 py-2 border">New Students</th>
                </tr>
              </thead>

              <tbody>
                {/* PRE PRIMARY */}
                <tr className="bg-green-100">
                  <td
                    colSpan={4}
                    className="px-2 py-2 font-bold text-[#00796E] text-center border"
                  >
                    PRE-PRIMARY
                  </td>
                </tr>
                <tr>
                  {/* Reduced px-4 to px-2 */}
                  <td className="px-2 py-2 border">Preparatory</td>
                  <td className="px-2 py-2 border">–</td>
                  <td className="px-2 py-2 border">4000</td>
                  <td className="px-2 py-2 border">1100</td>
                </tr>
                <tr>
                  {/* Reduced px-4 to px-2 */}
                  <td className="px-2 py-2 border">UKG</td>
                  <td className="px-2 py-2 border">3500</td>
                  <td className="px-2 py-2 border">4000</td>
                  <td className="px-2 py-2 border">1100</td>
                </tr>
                <tr>
                  {/* Reduced px-4 to px-2 */}
                  <td className="px-2 py-2 border">LKG</td>
                  <td className="px-2 py-2 border">3000</td>
                  <td className="px-2 py-2 border">4000</td>
                  <td className="px-2 py-2 border">1100</td>
                </tr>

                {/* PRIMARY */}
                <tr className="bg-green-100">
                  <td
                    colSpan={4}
                    className="px-2 py-2 font-bold text-[#00796E] text-center border"
                  >
                    PRIMARY
                  </td>
                </tr>
                {["I", "II", "III", "IV", "V"].map((cls) => (
                  <tr key={cls}>
                    {/* Reduced px-4 to px-2 */}
                    <td className="px-2 py-2 border">{cls}</td>
                    <td className="px-2 py-2 border">3500</td>
                    <td className="px-2 py-2 border">4000</td>
                    <td className="px-2 py-2 border">1200</td>
                  </tr>
                ))}

                {/* MIDDLE */}
                <tr className="bg-green-100">
                  <td
                    colSpan={4}
                    className="px-2 py-2 font-bold text-[#00796E] text-center border"
                  >
                    MIDDLE
                  </td>
                </tr>
                {["VI", "VII", "VIII"].map((cls) => (
                  <tr key={cls}>
                    {/* Reduced px-4 to px-2 */}
                    <td className="px-2 py-2 border">{cls}</td>
                    <td className="px-2 py-2 border">3500</td>
                    <td className="px-2 py-2 border">4000</td>
                    <td className="px-2 py-2 border">1200</td>
                  </tr>
                ))}

                {/* SECONDARY */}
                <tr className="bg-green-100">
                  <td
                    colSpan={4}
                    className="px-2 py-2 font-bold text-[#00796E] text-center border"
                  >
                    SECONDARY
                  </td>
                </tr>
                {["IX", "X"].map((cls) => (
                  <tr key={cls}>
                    {/* Reduced px-4 to px-2 */}
                    <td className="px-2 py-2 border">{cls}</td>
                    <td className="px-2 py-2 border">3500</td>
                    <td className="px-2 py-2 border">4000</td>
                    <td className="px-2 py-2 border">1200</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Installments */}
          <div className="border-t border-gray-300 mt-6 pt-4 text-sm">
            <p className="font-semibold mb-2 mt-4 text-2xl">
              Course/Tuition fees payable in four instalments (part payment)
            </p>
            <div className="overflow-x-auto"> {/* Added overflow-x-auto for this table too */}
              <table className="w-full border border-gray-300 text-sm text-center">
                <thead className="bg-[#00796E] text-white">
                  <tr>
                    {/* Reduced px-3 to px-2 */}
                    <th className="border border-gray-300 px-2 py-2">
                      Class Range
                    </th>
                    <th className="border border-gray-300 px-2 py-2">Prep - II</th>
                    <th className="border border-gray-300 px-2 py-2">III - X</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((n) => (
                    <tr key={n}>
                      {/* Reduced px-3 to px-2 */}
                      <td className="border border-gray-300 px-2 py-2 whitespace-nowrap">
                        {n}
                        {n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"}{" "}
                        instalment
                      </td>
                      <td className="border border-gray-300 px-2 py-2">3300</td>
                      <td className="border border-gray-300 px-2 py-2">3600</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}