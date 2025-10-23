import React, { useState, useEffect } from "react";
import eventsData from "../data/events";

// ------------------- CARD COMPONENT -------------------
function EventCard({ event, onReadMore }) {
  return (
    <div className="relative bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col">
      {/* Featured Ribbon */}
      {event.featured && (
        <div className="absolute top-3 left-0 bg-[#00796E] text-white px-3 py-1 text-xs font-semibold rounded-tr-lg rounded-br-lg z-10">
          Featured
        </div>
      )}

      {/* Event Image */}
      <img
        src={event.img}
        alt={event.title}
        className="w-full h-56 object-cover"
      />

      {/* Card Body */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Date */}
        <p className="text-gray-500 text-sm mb-2 font-medium">{event.date}</p>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#00796E] mb-2">
          {event.title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-700 text-sm flex-grow line-clamp-3">
          {event.description}
        </p>

        {/* Read More */}
        <button
          onClick={() => onReadMore(event)}
          className="mt-4 text-sm font-medium text-[#00796E] hover:text-[#00594F] hover:underline self-start"
        >
          Read More →
        </button>
      </div>
    </div>
  );
}

// ------------------- MODAL COMPONENT -------------------
function EventModal({ event, onClose }) {
  const [show, setShow] = useState(false);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (event) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setShow(true), 10);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto"; // Re-enable scroll on close
      };
    }
  }, [event]);

  if (!event) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-start z-50 px-4 transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Modal Container */}
      <div
        className={`mt-28 bg-white rounded-2xl shadow-lg max-w-2xl w-full relative flex flex-col overflow-hidden transform transition-all duration-300 ${
          show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setShow(false);
            setTimeout(onClose, 250);
          }}
          className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-2 z-10"
        >
          ✕
        </button>

        {/* Scrollable Modal Content */}
        <div className="max-h-[80vh] overflow-y-auto">
          {/* Image */}
          <img
            src={event.img}
            alt={event.title}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            {/* Date only */}
            <p className="text-gray-500 text-sm mb-2">{event.date}</p>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#00796E] mb-4">
              {event.title}
            </h2>

            {/* Paragraphs or Description */}
            {Array.isArray(event.paragraphs) && event.paragraphs.length > 0 ? (
              event.paragraphs.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {para}
                </p>
              ))
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ------------------- MAIN PAGE -------------------
export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[#00796E] mb-12 pt-[100px]">
          Events & Traditions
        </h1>

        {/* Event Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onReadMore={(e) => setSelectedEvent(e)}
            />
          ))}
        </div>

        {/* Empty State */}
        {eventsData.length === 0 && (
          <p className="text-center text-gray-600 mt-10">
            No events available at the moment. Check back soon!
          </p>
        )}

        {/* Modal */}
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </div>
    </section>
  );
}
