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
  { date: "2025-02-13", title: "Teacher's Training & Orientztion", type: "academic" },
  { date: "2025-02-14", title: "Staff Get Together", type: "event" },
  { date: "2025-02-17", title: "Regular Class Commence", type: "academic" },
  { date: "2025-02-20", title: "Zomi Nam Ni", type: "event" },
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
  const [year, setYear] = useState(today.getFullYear());

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const years = Array.from({ length: 11 }, (_, i) => today.getFullYear() - 5 + i); // range: -5..+5

  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();

  // metadata for a particular date
  const getMetaForDate = (y, m, d) => {
    const dateStr = `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const holidayName = holidays[dateStr] || null;
    const events = academicEvents.filter(ev => ev.date === dateStr);
    const isSunday = new Date(y, m, d).getDay() === 0;
    return { dateStr, holidayName, events, isSunday };
  };

  // render a single month's grid
  const renderMonthGrid = (y, m) => {
    const daysInMonth = getDaysInMonth(y, m);
    const firstDay = new Date(y, m, 1).getDay(); // 0..6
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7; // fill weeks to full weeks
    const cells = [];

    for (let cell = 0; cell < totalCells; cell++) {
      const dayNumber = cell - firstDay + 1;
      if (dayNumber < 1 || dayNumber > daysInMonth) {
        cells.push(
          <div key={`empty-${m}-${cell}`} className="border border-gray-200 p-1 min-h-[10px] bg-gray-50"></div>
        );
        continue;
      }

      const { holidayName, events, isSunday } = getMetaForDate(y, m, dayNumber);
      const isHolidayOrSunday = Boolean(holidayName) || isSunday;
      const showDot = events.length > 0 && !isHolidayOrSunday;

      cells.push(
        <div
          key={`${y}-${m}-${dayNumber}`}
          className={`border border-gray-200 p-[1px] items-center  flex flex-col justify-between ${
            isHolidayOrSunday ? "bg-red-50" : "bg-white"
          }`}
        >
          <div className={`flex text-center relative h-4.5 items-center justify-between`}>
            <div className="text-[8px] text-center font-semibold">{dayNumber}</div>
            {showDot && <span className="w-1 right-0 top-0   absolute h-1 aspect-square rounded-full bg-[#00796E]" />}
          </div>

        </div>
      );
    }

    return (
      <div>
        {/* week headers */}
        <div className="grid grid-cols-7 text-[7px] lg:text-[10px] font-semibold text-center text-gray-600 mb-1">
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
            <div key={d} className="px-1">{d}</div>
          ))}
        </div>

        {/* days */}
        <div className="grid grid-cols-7 gap-0">
          {cells}
        </div>
      </div>
    );
  };

  // previous / next year handlers
  const prevYear = () => setYear(prev => prev - 1);
  const nextYear = () => setYear(prev => prev + 1);

  // events list for the selected year
  const yearEvents = academicEvents
    .filter(ev => ev.date.startsWith(String(year)))
    .sort((a,b) => a.date.localeCompare(b.date));

  return (
    <div className="max-w-7xl mx-auto mt-40 px-4 py-8">
      <div className="flex items-center justify-between mb-6 flex-col gap-2 lg:flex-row">
        <h1 className="text-2xl md:text-4xl font-bold text-[#00796E] underline">School Academic Calendar — {year}</h1>

        <div className="flex items-center gap-1 lg:gap-3">
          <button onClick={prevYear} className="p-2 rounded hover:bg-gray-100 text-[#00796E]">
            <FaChevronLeft />
          </button>

          <div className="flex items-center gap-1 lg:gap-2 border border-gray-200 rounded px-3 py-1">
            <FaRegCalendarAlt />
            <select
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="text-sm outline-none"
            >
              {years.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <button onClick={nextYear} className="p-2 rounded hover:bg-gray-100 text-[#00796E]">
            <FaChevronRight />
          </button>
        </div>
      </div>
    <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-2">
      {/* months: 3 cols x 4 rows */}
      <div className="p-2 lg:p-4 bg-white shadow-lg border-gray-100 border rounded-lg">
        <h1 className="font-bold text-xl py-2 pb-2">{year}</h1>
        <div className="grid grid-cols-3 gap-1 lg:gap-3">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-semibold text-gray-800">{monthNames[idx]}</h3>
                <div className="text-xs text-gray-500">{year}</div>
              </div>

              {renderMonthGrid(year, idx)}
            </div>
          ))}
        </div>
      </div>

      {/*Event list */}
      <div className="">
        <div className="col-span-1 lg:col-span-2 bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold mb-3">Academic Events — {year}</h4>
          <div className="space-y-2 text-sm ">
            {yearEvents.length === 0 && <div className="text-gray-500">No events for this year.</div>}
            {yearEvents.map((ev, i) => (
              <div key={i} className="flex items-start justify-between gap-4">
                <div className="text-gray-700 min-w-[110px]">
                  {new Date(ev.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                </div>
                <div className="flex-1 text-gray-800">{ev.title}</div>
                <div className={`text-xs px-2 py-1 rounded capitalize ${
                  ev.type === 'holiday' ? 'bg-red-100 text-red-800' : 
                  ev.type === 'event' ? 'bg-blue-100 text-blue-800' : 
                  'bg-green-100 text-green-800'
                }`}>
                  {ev.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
