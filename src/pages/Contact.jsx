import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaInstagram />, label: "@greenwoodacademy98", url: "https://www.instagram.com/greenwoodacademy98/" },
  { icon: <FaYoutube />, label: "Greenwood Academy-GA", url: "https://www.youtube.com/@greenwoodacademy-ga6590" },
  { icon: <FaFacebookF />, label: "Greenwood Academy", url: "https://facebook.com/greenwoodacademy" },
];

export default function ContactPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-12 mt-8 px-6 flex items-center justify-center pt-[100px]">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <form className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
            We would love to hear from you
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First name here"
                required
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-green-600 transition"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last name here"
                required
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-green-600 transition"
              />
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="mobileNumber"
                type="tel"
                placeholder="Add mobile number"
                required
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-green-600 transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help you?"
                required
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-green-600 transition"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Comments"
              required
              className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-green-600 transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-start bg-[#19213D] text-white font-semibold px-8 py-3 rounded-xl shadow-md hover:bg-[#25356e] transition duration-300"
          >
            Send
          </button>
        </form>

        {/* Contact Info & Social Links */}
        <div className="flex flex-col gap-12">
          {/* Contact Info */}
          <div className="bg-[#00796E] text-white rounded-2xl p-10 shadow-xl flex flex-col gap-8 transition-transform hover:scale-[1.02] duration-300">
            <h2 className="text-3xl font-bold text-center">Contact</h2>
            <div className="flex flex-col gap-4 text-lg font-semibold">
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl" />
                <a href="tel:+919315552634" className="hover:underline">
                  +91 9315552634
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:academygreenwood98@gmail.com"
                  className="hover:underline break-words"
                >
                  academygreenwood98@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl" />
                <span>B. Vengnom, Churachandpur, Manipur - 795128</span>
              </div>
            </div>
          </div>

          {/* Social Accounts */}
          <div className="bg-[#19213D] text-white rounded-2xl p-10 shadow-xl flex flex-col gap-8 transition-transform hover:scale-[1.02] duration-300">
            <h2 className="text-3xl font-bold text-center mb-4">Social accounts</h2>
            <div className="flex flex-col gap-6">
              {socialLinks.map(({ icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg font-semibold hover:text-green-600 transition"
                >
                  <span className="text-2xl">{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
