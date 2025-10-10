import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
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
      const mainHeight = mainNavRef.current?.offsetHeight || (scrolled ? 32 : 48);
      const secondaryHeight = (isAcademicsPage || isCommunityPage)
        ? (secondaryNavRef.current?.offsetHeight || 0)
        : 0;
      const totalPadding = mainHeight + secondaryHeight + 8;
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
    setOpen(false);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = (isActive) =>
    isActive ? "text-[#00796E] font-semibold" : "text-black hover:text-[#00796E] transition";

  const isActiveDropdown = (paths) =>
    paths.some((path) => location.pathname.startsWith(path));

  const getUserName = () => {
    if (!currentUser) return "Login";
    if (currentUser.displayName) return currentUser.displayName;
    if (currentUser.email) return currentUser.email.split("@")[0];
    return "Profile";
  };

  return (
    <nav className="fixed top-0 w-full z-50">
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
              className={`transition-all duration-300 ${
                scrolled ? "h-8 w-12" : "h-12 w-16"
              }`}
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
                  ])
                    ? "text-[#00796E] font-semibold"
                    : "text-black hover:text-[#00796E]"
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
                {[
                  "curriculum",
                  "achievements",
                  "facilities",
                  "rules",
                  "calendar",
                ].map((item) => (
                  <NavLink
                    key={item}
                    to={`/academics/${item}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                        isActive
                          ? "text-[#00796E] font-medium"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                ))}
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
                  ])
                    ? "text-[#00796E] font-semibold"
                    : "text-black hover:text-[#00796E]"
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
                {["team", "events", "alumni", "governance"].map((item) => (
                  <NavLink
                    key={item}
                    to={`/community/${item}`}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm hover:bg-green-50 transition ${
                        isActive
                          ? "text-[#00796E] font-medium"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                ))}
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

            {/* Profile/Login beside Contact */}
            <button
              onClick={handleProfileClick}
              className="flex items-center gap-1 ml-2 text-black hover:text-[#00796E] transition"
            >
              <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-white border border-gray-300">
                {currentUser?.photoURL ? (
                  <img
                    src={currentUser.photoURL}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <FiUser className="w-4 h-4 text-[#00796E]" />
                )}
              </div>
              <span className="text-sm font-medium">{getUserName()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="text-black text-2xl p-1">
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
                  <span className={`transform transition-transform ${academicsOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {academicsOpen && (
                  <div className="bg-gray-50 flex flex-col">
                    {["curriculum", "achievements", "facilities", "rules", "calendar"].map((item) => (
                      <NavLink
                        key={item}
                        to={`/academics/${item}`}
                        className="px-10 py-2 hover:bg-gray-100 transition"
                        onClick={() => setOpen(false)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </NavLink>
                    ))}
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
                  <span className={`transform transition-transform ${communityOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                {communityOpen && (
                  <div className="bg-gray-50 flex flex-col">
                    {["team", "events", "alumni", "governance"].map((item) => (
                      <NavLink
                        key={item}
                        to={`/community/${item}`}
                        className="px-10 py-2 hover:bg-gray-100 transition"
                        onClick={() => setOpen(false)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </NavLink>
                    ))}
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

              {/* Profile in mobile menu */}
              <button
                onClick={handleProfileClick}
                className="px-6 py-3 hover:bg-gray-50 transition border-t flex items-center gap-2"
              >
                <FiUser className="w-4 h-4 text-[#00796E]" />
                <span>{getUserName()}</span>
              </button>
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
                  <div
                    className={`absolute bottom-3 left-4 right-4 h-0.5 bg-white transition-all duration-200 ${
                      location.pathname ===
                      `/${isAcademicsPage ? "academics" : "community"}/${item}`
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                </NavLink>
                {index < array.length - 1 && (
                  <div className="h-6 w-px bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
