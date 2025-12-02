import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import footerBg from "../images/image.jpg";

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <footer className="text-white relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-[#00796E]/90 z-0" />
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About / Logo Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <h2 className="text-2xl font-bold">Greenwood Academy</h2>
            <p className="text-sm font-semibold leading-tight mb-4">
              B.Vengnom, Churachandpur <br />
              Manipur, India 795128
            </p>
            <p className="text-gray-200 text-sm md:text-base max-w-xs mt-2">
              Nurturing every child's potential through holistic education, balancing intellect, creativity, and empathy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <button
              onClick={() => {
                if (window.location.pathname !== "/") {
                  handleLinkClick("/");
                } else {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="hover:text-green-300 transition text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick("/about")}
              className="hover:text-green-300 transition text-left"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick("/admission")}
              className="hover:text-green-300 transition text-left"
            >
              Admission
            </button>
            <button
              onClick={() => handleLinkClick("/contact")}
              className="hover:text-green-300 transition text-left"
            >
              Contact
            </button>
            <button
              onClick={() => handleLinkClick("/academics/calendar")}
              className="hover:text-green-300 transition text-left"
            >
              Calendar
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-5 text-2xl">
              <a
                href="https://www.facebook.com/greenwoodacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/greenwoodacademy98/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@greenwoodacademy-ga6590"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-600 transition-transform transform hover:scale-110"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-green-800 text-center text-xs text-gray-200 py-4 relative">
          <div className="max-w-7xl mx-auto px-6">
            © 2025 Greenwood Academy
          </div>
        </div>
      </div>
    </footer>
  );
}
