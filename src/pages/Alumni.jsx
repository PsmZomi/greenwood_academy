import React from "react";
import { Link } from "react-router-dom";
import principal from "../images/gw2.jpg";

export default function Alumni() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section with Principal Image Background */}
<div 
  className="relative bg-cover bg-center bg-no-repeat h-[40vh]" 
  style={{ backgroundImage: `url(${principal})` }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content at bottom */}
  <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-end text-center">
    <h1 className="text-5xl font-bold text-[#00796E] mb-4">GREENWOOD ACADEMY ALUMNI</h1>
    <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-2">
      Welcome home!The GWA Alumni
    </p>
  </div>
</div>


      {/* Get Involved Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">GET INVOLVED WITH US</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 font-medium">
                    Spread the good word about Greenwood Academy to friends and family
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 font-medium">
                    Donate Today. We have many great donation opportunities, including the annual fund, 
                    Alumni Legacy Scholarship, and others.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 font-medium">
                    Volunteer to speak at our next Career Day and talk to our students about your career path.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-700 font-medium">
                    Join us at an upcoming Greenwood Academy event
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voices of the Ventures Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Voices of the Ventures</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Let us know what is new in your life to be highlighted in the "Alumni Notes" in the 
              Voice of the Ventures! We would love to hear about new additions to your family, 
              marriage, work accomplishments, or any new <strong className="text-green-700">venture</strong> you pursue.
            </p>
            <Link
              to="/alumni/share-story"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              SHARE YOUR STORY
            </Link>
          </div>
        </div>
      </div>

      {/* Alumni Actions Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - About Alumni */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Alumni</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our alumni community represents the enduring legacy of Greenwood Academy. 
              From recent graduates to seasoned professionals, our alumni network spans 
              the globe, united by shared experiences and a commitment to excellence.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Network of 9,000+ accomplished graduates</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Global community across various industries</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <p className="text-gray-700">Lifelong connections and mentorship opportunities</p>
              </div>
            </div>
          </div>

          {/* Right Column - Alumni Actions */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Alumni Actions</h2>
            <div className="space-y-4">
              <Link
                to="/alumni/board"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border-l-4 border-green-600"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Alumni Board</h3>
                <p className="text-gray-600">Join our leadership team and help shape the future of our alumni community.</p>
              </Link>

              <Link
                to="/alumni/spotlights"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border-l-4 border-green-600"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Alumni Spotlights</h3>
                <p className="text-gray-600">Discover inspiring stories and achievements of our distinguished alumni.</p>
              </Link>

              <Link
                to="/alumni/reunions"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border-l-4 border-green-600"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Reunions & Events</h3>
                <p className="text-gray-600">Stay connected through annual reunions, networking events, and special gatherings.</p>
              </Link>

              <Link
                to="/alumni/voice"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border-l-4 border-green-600"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Voice of the Alumni</h3>
                <p className="text-gray-600">Share your experiences, insights, and stay updated with alumni news and publications.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our vibrant alumni network and help shape the next generation of Greenwood Academy leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/alumni/register"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              JOIN ALUMNI NETWORK
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-200"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}