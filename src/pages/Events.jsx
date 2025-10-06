import React from "react";
import eventsData from "../data/events"; // Make sure events.js has your events array

function EventCard({ event }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <img
        src={event.img}
        alt={event.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#00796E] mb-1">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{event.date}</p>
        <p className="text-gray-700 text-sm">{event.description}</p>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#00796E] mb-12 pt-[100px]">
          Events & Traditions
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>

        {eventsData.length === 0 && (
          <p className="text-center text-gray-600 mt-10">
            No events available at the moment. Check back soon!
          </p>
        )}
      </div>
    </section>
  );
}
