import React, { useState } from 'react';

// NOTE: No icon imports are needed for this version.

// Mock Data for Sample Certificates (for general viewing/display)
const sampleCertificates = [
    {
        id: 1,
        title: "Academic Excellence Award",
        description: "A sample certificate demonstrating achievement in core subjects.",
        previewImage: "/images/Letgoulen-.pdf",
        color: "border-yellow-500",
    },
    {
        id: 2,
        title: "Co-Curricular Participation",
        description: "A sample showing recognition for involvement in school activities.",
        previewImage: "/images/cert_co_curricular_sample.jpg",
        color: "border-indigo-500",
    },
    {
        id: 3,
        title: "Leadership & Service",
        description: "A sample certificate template for leadership and community service.",
        previewImage: "/images/cert_leadership_sample.jpg",
        color: "border-green-500",
    },
];

export default function CertificateDownloadPage() {
    const [requestData, setRequestData] = useState({
        studentName: '',
        rollNumber: '',
        certificateType: '',
        email: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // --- REAL WORLD SCENARIO ---
        // In a real application, this is where you would:
        // 1. Validate data (e.g., check email format).
        // 2. Send the requestData to your backend API.
        // 3. The backend would verify the student/roll number and queue the certificate generation/delivery.
        // --------------------------

        console.log("Certificate Request Submitted:", requestData);
        
        // Mock successful submission message
        setMessage('✅ Your certificate request has been successfully submitted! We will verify your details and send the official certificate to your email within 48 hours.');
        setRequestData({ studentName: '', rollNumber: '', certificateType: '', email: '' });
        
        // Clear message after a few seconds
        setTimeout(() => setMessage(''), 8000);
    };

    return (
        <section className="bg-gray-50 min-h-screen pt-[150px] pb-20 px-4 md:px-10">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#00796E] mb-4 relative inline-block">
                    Certificate Center
                    <span className="absolute left-1/2 bottom-0 w-16 h-1 bg-[#00796E] transform -translate-x-1/2 rounded-full"></span>
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto mt-6">
                    View samples of our official school certificates and request your personalized copy using the form below.
                </p>
            </div>
            
            {/* -------------------- Sample Certificate Gallery -------------------- */}
            <div className="max-w-7xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                    Official Certificate Samples
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sampleCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-t-8 ${cert.color}`}
                        >
                            <img
                                src={cert.previewImage}
                                alt={`Sample of ${cert.title}`}
                                className="w-full h-48 object-cover border-b border-gray-100"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                                <p className="text-sm text-gray-600">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="my-12 border-gray-300 max-w-4xl mx-auto" />

            {/* -------------------- Certificate Request Form -------------------- */}
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold text-[#00796E] text-center mb-4">
                    Request Your Official Certificate
                </h2>
                <p className="text-center text-gray-600 mb-8">
                    Fill out the form below to initiate the process for obtaining your personalized, verified certificate.
                </p>

                {/* Submission Message */}
                {message && (
                    <div className="p-4 mb-6 text-sm text-green-700 bg-green-100 rounded-lg text-center" role="alert">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Student Name (as on records)
                        </label>
                        <input
                            type="text"
                            name="studentName"
                            id="studentName"
                            value={requestData.studentName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00796E] focus:border-[#00796E] transition duration-150"
                        />
                    </div>
                    <div>
                        <label htmlFor="rollNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Roll Number / Admission ID
                        </label>
                        <input
                            type="text"
                            name="rollNumber"
                            id="rollNumber"
                            value={requestData.rollNumber}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00796E] focus:border-[#00796E] transition duration-150"
                        />
                    </div>
                    <div>
                        <label htmlFor="certificateType" className="block text-sm font-medium text-gray-700 mb-1">
                            Type of Certificate Needed
                        </label>
                        <select
                            name="certificateType"
                            id="certificateType"
                            value={requestData.certificateType}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-[#00796E] focus:border-[#00796E] bg-white transition duration-150"
                        >
                            <option value="">-- Select Certificate Type --</option>
                            <option value="Academic_Transcript">Final Academic Transcript / Mark Sheet</option>
                            <option value="Leaving_Certificate">School Leaving Certificate</option>
                            <option value="Olympiad_Award">Specific Competition/Olympiad Award</option>
                            <option value="Character_Certificate">Character Certificate</option>
                            <option value="Other">Other (Specify in email)</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address for Delivery
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={requestData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00796E] focus:border-[#00796E] transition duration-150"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 text-lg font-semibold text-white bg-[#00796E] rounded-lg shadow-md hover:bg-[#005c52] transition duration-200 focus:outline-none focus:ring-4 focus:ring-[#00796E]/50"
                    >
                        Submit Request
                    </button>
                </form>
            </div>
        </section>
    );
}