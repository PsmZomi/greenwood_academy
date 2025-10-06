import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../images/gwlogo.png";
import { useAuth } from "../pages/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const mainNavRef = useRef(null);
  const secondaryNavRef = useRef(null);
  const topBarRef = useRef(null);

  const isAcademicsPage = location.pathname.startsWith("/academics");
  const isCommunityPage = location.pathname.startsWith("/community");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll padding for sticky headers
  useEffect(() => {
    const updateScrollPadding = () => {
      const topBarHeight = topBarRef.current?.offsetHeight || 24; // 24px for h-6
      const mainHeight = mainNavRef.current?.offsetHeight || (scrolled ? 32 : 48);
      const secondaryHeight = (isAcademicsPage || isCommunityPage)
        ? (secondaryNavRef.current?.offsetHeight || 0)
        : 0;
      const totalPadding = topBarHeight + mainHeight + secondaryHeight + 8;
      document.documentElement.style.scrollPaddingTop = `${totalPadding}px`;
    };
    updateScrollPadding();
    window.addEventListener("resize", updateScrollPadding);
    return () => window.removeEventListener("resize", updateScrollPadding);
  }, [isAcademicsPage, isCommunityPage, scrolled]);

  // Profile click
  const handleProfileClick = () => {
    if (currentUser) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    setOpen(false); // close mobile menu if open
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = (isActive) =>
    isActive ? "text-[#00796E] font-semibold" : "text-black hover:text-[#00796E] transition";

  const isActiveDropdown = (paths) =>
    paths.some((path) => location.pathname.startsWith(path));

  // Get username from currentUser or use a default
  const getUserName = () => {
    if (!currentUser) return "Login";
    
    // Try to get displayName, email username, or fallback
    if (currentUser.displayName) {
      return currentUser.displayName;
    } else if (currentUser.email) {
      return currentUser.email.split('@')[0];
    } else {
      return "Profile";
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
     {/* Top bar */}
<div
  ref={topBarRef}
  className="w-full bg-white h-6 flex items-center px-4 text-[#00796E] text-xs"
>
  {/* Left (empty for now or you can add contact/info later) */}
  <div className="flex-1"></div>

  {/* Center (Calendar link) */}
  <div className="flex-1 flex justify-center gap-2">
    <Link
      to="/academics/calendar"
      className="flex items-center gap-1 hover:underline"
    >
      📅 Calendar
    </Link>
    {/* Social icons */}
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebookF className="w-3 h-3 hover:text-gray-200" />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noreferrer">
      <FaYoutube className="w-3 h-3 hover:text-gray-200" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FaTwitter className="w-3 h-3 hover:text-gray-200" />
    </a>
  </div>

  {/* Right (Profile button) */}
  <div className="flex-1 flex justify-end">
    <button
      onClick={handleProfileClick}
      className="flex items-center gap-1 transition"
    >
      <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center bg-white">
        {currentUser?.photoURL ? (
          <img
            src={currentUser.photoURL}
            alt="profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <FiUser className="w-3 h-3 text-green-700" />
        )}
      </div>
      <span className="hidden sm:inline ml-1">{getUserName()}</span>
    </button>
  </div>
</div>


      {/* Main Navbar */}
      <div
        ref={mainNavRef}
        className={`w-full bg-white shadow-sm transition-all duration-300 ${
          scrolled ? "py-2" : "py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2" 
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={logo}
              alt="School Logo"
              className={`transition-all duration-300 ${scrolled ? "h-8 w-12" : "h-12 w-16"}`}
            />
            <span
              className={`text-[#00796E] font-extrabold tracking-wide transition-all duration-300 ${
                scrolled ? "text-lg" : "text-2xl"
              }`}
            >
              GREENWOOD ACADEMY
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-md relative items-center">
            <NavLink to="/about" className={({ isActive }) => linkClass(isActive)}>
              About
            </NavLink>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAcademicsOpen(true)}
              onMouseLeave={() => setAcademicsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition ${
                  isActiveDropdown([
                    "/academics/curriculum",
                    "/academics/achievements",
                    "/academics/facilities",
                    "/academics/rules",
                    "/academics/calendar",
                  ]) ? "text-[#00796E] font-semibold" : "text-black hover:text-[#00796E]"
                }`}
              >
                Academics
              </button>
              <div
                className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md transform transition-all duration-300 ease-in-out z-50 ${
                  academicsOpen 
                    ? "opacity-100 translate-y-0 visible" 
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <NavLink 
                  to="/academics/curriculum" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Curriculum
                </NavLink>
                <NavLink 
                  to="/academics/achievements" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Achievements
                </NavLink>
                <NavLink 
                  to="/academics/facilities" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Facilities
                </NavLink>
                <NavLink 
                  to="/academics/rules" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Rules
                </NavLink>
                <NavLink 
                  to="/academics/calendar" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Calendar
                </NavLink>
              </div>
            </div>

            {/* Community Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCommunityOpen(true)}
              onMouseLeave={() => setCommunityOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition ${
                  isActiveDropdown([
                    "/community/team",
                    "/community/events",
                    "/community/alumni",
                    "/community/governance",
                  ]) ? "text-[#00796E] font-semibold" : "text-black hover:text-[#00796E]"
                }`}
              >
                Our Community
              </button>
              <div
                className={`absolute top-full left-0 w-56 bg-white shadow-lg rounded-md transform transition-all duration-300 ease-in-out z-50 ${
                  communityOpen 
                    ? "opacity-100 translate-y-0 visible" 
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                <NavLink 
                  to="/community/team" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Team
                </NavLink>
                <NavLink 
                  to="/community/events" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Events
                </NavLink>
                <NavLink 
                  to="/community/alumni" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Alumni
                </NavLink>
                <NavLink 
                  to="/community/governance" 
                  className={({ isActive }) => 
                    `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                      isActive ? "text-[#00796E] font-medium" : "text-gray-700"
                    }`
                  }
                >
                  Governance
                </NavLink>
              </div>
            </div>

            <NavLink to="/admission" className={({ isActive }) => linkClass(isActive)}>
              Admission
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => linkClass(isActive)}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setOpen(!open)} 
              className="text-black text-2xl p-1"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-40 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col py-2">
              <NavLink 
                to="/about" 
                className="px-6 py-3 hover:bg-gray-50 transition"
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>

              {/* Academics Mobile */}
              <div className="border-t">
                <button 
                  className="w-full text-left px-6 py-3 hover:bg-gray-50 transition flex justify-between items-center"
                  onClick={() => setAcademicsOpen(!academicsOpen)}
                >
                  <span>Academics</span>
                  <span className={`transform transition-transform ${academicsOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {academicsOpen && (
                  <div className="bg-gray-50 flex flex-col">
                    <NavLink 
                      to="/academics/curriculum" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Curriculum
                    </NavLink>
                    <NavLink 
                      to="/academics/achievements" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Achievements
                    </NavLink>
                    <NavLink 
                      to="/academics/facilities" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Facilities
                    </NavLink>
                    <NavLink 
                      to="/academics/rules" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Rules
                    </NavLink>
                    <NavLink 
                      to="/academics/calendar" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Calendar
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Community Mobile */}
              <div className="border-t">
                <button 
                  className="w-full text-left px-6 py-3 hover:bg-gray-50 transition flex justify-between items-center"
                  onClick={() => setCommunityOpen(!communityOpen)}
                >
                  <span>Our Community</span>
                  <span className={`transform transition-transform ${communityOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {communityOpen && (
                  <div className="bg-gray-50 flex flex-col">
                    <NavLink 
                      to="/community/team" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Team
                    </NavLink>
                    <NavLink 
                      to="/community/events" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Events
                    </NavLink>
                    <NavLink 
                      to="/community/alumni" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Alumni
                    </NavLink>
                    <NavLink 
                      to="/community/governance" 
                      className="px-10 py-2 hover:bg-gray-100 transition"
                      onClick={() => setOpen(false)}
                    >
                      Governance
                    </NavLink>
                  </div>
                )}
              </div>

              <NavLink 
                to="/admission" 
                className="px-6 py-3 hover:bg-gray-50 transition border-t"
                onClick={() => setOpen(false)}
              >
                Admission
              </NavLink>
              <NavLink 
                to="/gallery" 
                className="px-6 py-3 hover:bg-gray-50 transition border-t"
                onClick={() => setOpen(false)}
              >
                Gallery
              </NavLink>
              <NavLink 
                to="/contact" 
                className="px-6 py-3 hover:bg-gray-50 transition border-t"
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>

      {/* Secondary Navbar */}
      {(isAcademicsPage || isCommunityPage) && (
        <div ref={secondaryNavRef} className="w-full bg-[#00796E] overflow-x-auto">
          <div className="max-w-7xl mx-auto flex justify-start md:justify-center">
            {(isAcademicsPage
              ? ["curriculum", "achievements", "facilities", "rules", "calendar"]
              : ["team", "events", "alumni", "governance"]
            ).map((item, index, array) => (
              <div key={item} className="flex items-center">
                <NavLink
                  to={`/${isAcademicsPage ? "academics" : "community"}/${item}`}
                  className={({ isActive }) =>
                    `px-4 py-3 text-sm font-medium transition-colors relative ${
                      isActive 
                        ? "text-white font-semibold" 
                        : "text-white hover:text-green-200"
                    }`
                  }
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                  {/* Underline for active link */}
                  <div className={`absolute bottom-3 left-4 right-4 h-0.5 bg-white transition-all duration-200 ${
                    location.pathname === `/${isAcademicsPage ? "academics" : "community"}/${item}` 
                      ? "opacity-100" 
                      : "opacity-0"
                  }`} />
                </NavLink>
                {index < array.length - 1 && <div className="h-6 w-px bg-white/30"></div>}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}