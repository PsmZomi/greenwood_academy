import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Home from "./pages/Home";
import GalleryPage from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import Message from "./components/Message";
import Our from "./components/Our";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Subjects from "./pages/Subjects";
import Exam from "./pages/Exam";
import Rules from "./pages/Rules";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import InfoSection from "./components/InfoSection"; 
import NotificationDetail from "./pages/NotificationDetail";
import Events from "./pages/Events";
import Alumni from "./pages/Alumni";
import Activities from "./pages/Activities";
import Calendar from "./pages/Calendar";
import Students from "./components/Students";
import MeetOurTeam from "./pages/MeetOurTeam";
import StudentsCouncil from "./pages/StudentsCouncil";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { ProfileProvider } from "./pages/ProfileContext";
import AdminGalleryUpload from "./pages/AdminGalleryUpload";
import AdminDashboard from "./components/AdminDashboard";
import NewsDetail from "./pages/NewsDetail";
import Certificate from "./pages/Certificate";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <ProfileProvider>
      <Router>
        <Navbar />
        <ScrollToTop/>
        <main className="relative z-10">
          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Heading />
                  <Message />
                  <Students />
                  <Our />
                  <InfoSection />
                </>
              }
            />

            {/* Notifications */}
            <Route path="/notifications" element={<InfoSection />} />
            <Route path="/notifications/:id" element={<NotificationDetail />} />

            {/* News */}
            <Route path="/news" element={<InfoSection />} />
            <Route path="/news/:id" element={<NewsDetail />} />

            {/* Admission & Contact */}
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />

            {/* About & Academics */}
            <Route path="/about" element={<About />} />
            <Route path="/academics/curriculum" element={<Curriculum />} />
            <Route path="/academics/activities" element={<Activities />} />
            <Route path="/academics/exam" element={<Exam />} />
            <Route path="/academics/rules" element={<Rules />} />
            <Route path="/academics/calendar" element={<Calendar />} />
            <Route path="/academics/certificate" element={<Certificate />} />

            {/* Community */}
            <Route path="/community/staffs" element={<MeetOurTeam />} />
            <Route path="/community/events" element={<Events />} />
            <Route path="/community/alumni" element={<Alumni />} />
            <Route path="/community/students-council" element={<StudentsCouncil />} />

            {/* Gallery */}
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:event" element={<GalleryDetail />} />

            {/* User Profile */}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />

            {/* Other pages */}
            
            <Route path="/students" element={<Students />} />
            <Route path="/admin/upload" element={<AdminGalleryUpload />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </ProfileProvider>
  );
}
