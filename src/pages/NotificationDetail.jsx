import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import notify1 from "../images/gw1.jpg";
import notify2 from "../images/gw2.jpg";
import notify3 from "../images/gallery1.jpg";

const sampleNotifications = [
  {
    id: "1",
    title: "Annual Day: Program & Schedule",
    img: notify1,
    content: `
We are delighted to announce the schedule for our Annual Day.
The event will include cultural performances, awards, and much more.
Parents are warmly invited to join us and encourage the students.
    `,
    date: "25 Sep 2025",
  },
  {
    id: "2",
    title: "Parent-Teacher Meeting: Grades 1-4",
    img: notify2,
    content: `
A Parent-Teacher Meeting (PTM) is scheduled for Friday.
We request parents of Grades 1-4 to attend and discuss their child's progress.
    `,
    date: "27 Sep 2025",
  },
  {
    id: "3",
    title: "New Library Books Arrived",
    img: notify3,
    content: `
Our library has received a brand-new collection of books across genres.
Students are encouraged to explore and borrow books during library hours.
    `,
    date: "23 Sep 2025",
  },
  {
    id: "4",
    title: "School Choir Auditions",
    img: notify1,
    content: `
The music department is conducting auditions for the school choir.
Open for students in Grades 3 - 8. Don’t miss the chance to be part of it!
    `,
    date: "28 Sep 2025",
  },
];

export default function NotificationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsItem = sampleNotifications.find((n) => n.id === id);

  if (!newsItem) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 md:p-10 text-center">
        <h2 className="text-xl font-semibold mb-4">Notice Not Found</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100 flex items-start justify-center py-10 px-4 md:px-10">
      <article className="bg-white shadow-lg w-full max-w-4xl overflow-hidden flex flex-col">
        {/* Image */}
        <img
          src={newsItem.img}
          alt={newsItem.title}
          className="w-full h-72 md:h-96 object-cover"
        />

        <div className="p-2 md:p-10 flex flex-col gap-4">
          {/* Date */}
          <div className="text-gray-500 text-sm md:text-base font-medium">
            {newsItem.date}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight text-gray-900">
            {newsItem.title}
          </h1>

          {/* Content */}
          <div className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
            {newsItem.content}
          </div>

          {/* Back button */}
          <div className="mt-6 flex justify-start">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
            >
              ← Back
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
