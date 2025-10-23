import React, { useState } from "react";
import { FaRegCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Holidays with names (yyyy-mm-dd)
const holidays = {
  "2025-01-26": "Republic Day",
  "2025-08-15": "Independence Day",
  "2025-10-02": "Gandhi Jayanti",
  "2025-12-25": "Christmas",
  "2025-11-14": "Children's Day"
};

// Academic events data for the entire year
const academicEvents = [
  { date: "2025-02-12", title: "Teacher's Training & Orientztion", type: "academic" },
  { date: "2025-02-14", title: "Staff Get Together", type: "event" },
  { date: "2025-02-17", title: "Regular Class Commence", type: "academic" },
  { date: "2025-03-21", title: "Inaugration of Board of Prefects", type: "events" },
  { date: "2025-04-18", title: "Good Friday", type: "holiday" },
  { date: "2025-05-15", title: "FA-I Result Declaration", type: "event" },
  { date: "2025-05-16", title: "Hmar Martyr's Day", type: "holiday" },
  { date: "2025-06-30", title: "Summer Vacation Starts", type: "holiday" },
  { date: "2025-08-04", title: "Class Resume", type: "academic" },
  { date: "2025-08-15", title: "Independence Day", type: "holiday" },
  { date: "2025-09-12", title: "SA-I Exam Result Declaration", type: "academic" },
  { date: "2025-09-13", title: "Black Day", type: "holiday" },
  { date: "2025-10-02", title: "Gandhi Jayanti", type: "holiday" },
  { date: "2025-10-06", title: "Annual Sports", type: "holiday" },
  { date: "2025-11-01", title: "Kut", type: "holiday" },
  { date: "2025-12-10", title: "FA-II Exam Result Declaration", type: "academic" },
  { date: "2025-12-20", title: "Winter Break", type: "holiday" },
  { date: "2026-01-05", title: "Class Resume", type: "academic" },
  { date: "2026-03-06", title: "SA-II Exam Result Declaration", type: "academic" },
  { date: "2026-03-09", title: "New Admission Begins", type: "academic" },

];

export default function CalendarPage() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const years = Array.from({length: 5}, (_, i) => today.getFullYear() + i);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    // empty slots for first week
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={"empty-" + i} className="border border-gray-300 p-1"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2,"0")}-${String(i).padStart(2,"0")}`;
      const holidayName = holidays[dateStr];
      const isSunday = new Date(currentYear, currentMonth, i).getDay() === 0;
      const hasEvent = academicEvents.some(event => event.date === dateStr);

      days.push(
        <div
          key={i}
          className="border border-gray-300 p-1 text-center"
          style={{ 
            backgroundColor: holidayName || isSunday ? "#f87171" : "#ffffff" 
          }}
        >
          <div className="text-xs sm:text-sm font-semibold">
            {i}
            {hasEvent && !holidayName && !isSunday && (
              <span className="block w-1 h-1 bg-[#00796E] rounded-full mx-auto mt-1"></span>
            )}
          </div>
          {holidayName && (
            <div className="text-[0.55rem] sm:text-xs leading-tight break-words mt-1">
              {holidayName}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  // Get events for current academic year
  const currentYearEvents = academicEvents
    .filter(event => event.date.startsWith(currentYear.toString()))
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-[50px]">
      <h1 className="text-3xl font-bold text-[#00796E] pt-[100px] text-center">
        School Academic Calendar
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Calendar */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Month/Year Picker + Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevMonth} className="text-[#00796E] text-lg p-2 hover:bg-gray-100 rounded">
              <FaChevronLeft />
            </button>
            <div className="flex items-center gap-4">
              <FaRegCalendarAlt className="text-[#00796E]" />
              <select
                value={currentMonth}
                onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2 text-sm"
              >
                {monthNames.map((name, idx) => (
                  <option key={idx} value={idx}>{name}</option>
                ))}
              </select>
              <select
                value={currentYear}
                onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2 text-sm"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <button onClick={nextMonth} className="text-[#00796E] text-lg p-2 hover:bg-gray-100 rounded">
              <FaChevronRight />
            </button>
          </div>

          {/* Week headers */}
          <div className="grid grid-cols-7 text-center text-sm font-semibold bg-gray-50">
            {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(day => (
              <div key={day} className="border border-gray-300 p-2">{day}</div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 border border-gray-300 border-t-0">
            {renderDays()}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span>Holiday/Sunday</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#00796E] rounded-full"></div>
              <span>Event</span>
            </div>
          </div>
        </div>

        {/* Right Side - Simple List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#00796E] mb-6">
            Academic Calendar {currentYear}
          </h2>
          
          <div className="space-y-1">
            {currentYearEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-4 py-2 border-b border-gray-100">
                <div className="text-sm font-medium text-gray-600 min-w-[60px]">
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex-1 font-medium text-gray-800">
                  {event.title}
                </div>
                <div className={`text-xs px-2 py-1 rounded capitalize ${
                  event.type === 'holiday' ? 'bg-red-100 text-red-800' : 
                  event.type === 'event' ? 'bg-blue-100 text-blue-800' : 
                  'bg-green-100 text-green-800'
                }`}>
                  {event.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}