import React from "react";

export default function RulesRegulationsPage() {
  return (
    <section className="bg-gray-50 min-h-screen pt-[calc(40px+40px)]">
      {/* The pt ensures the heading is not hidden behind sticky navbars */}
     
      <div className="w-full flex items-center justify-center mt-2">
        <h1 className=" text-4xl md:text-6xl text-[#00796E] font-bold pt-[100px] underline">
          Rules & Regulations
        </h1>
      </div>

      {/* Content Section Below Background */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Cardinal Principles */}
        <div className="mb-10">
          <h2 className="text-2xl text-center font-semibold text-[#00796E] mb-4">
            Cardinal Principles
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            To assist students in character development, the Academy has set definite principles which every student is expected to uphold. The Academy believes the following practices are dangerous and will demoralize character. Violations will lead to strict discipline or dismissal if serious:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Drinking, handling, or distributing liquor.</li>
            <li>Use or possession of tobacco products or narcotics in any form.</li>
            <li>Propagating immoral or atheistic ideas undermining the Academy’s vision and mission.</li>
            <li>Use of profane language, low conduct or suggestions, or possession of obscene literature/pictures.</li>
            <li>Willful destruction of school property.</li>
            <li>Acts of indiscipline, insubordination, interference in administration, disrespect to staff, or persistent criticism.</li>
            <li>Cheating or dishonesty in any form.</li>
            <li>Continued disregard or disobedience towards faculty or staff.</li>
            <li>Excessive absence from classes or responsibilities.</li>
            <li>Theft in any form.</li>
          </ul>
        </div>

        {/* General Rules */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-center text-[#00796E] mb-4">
            General Rules
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>The Principal may suspend or require withdrawal of any student if necessary for the academy’s interest.</li>
            <li>The academy is not responsible for accidents during school or activities.</li>
            <li>Discipline applies in school, while commuting, and in public places.</li>
            <li>Damage to school property must be repaired or paid for by the responsible students.</li>
            <li>Only textbooks and the school diary may be brought without permission; parcels/letters are inspectable.</li>
            <li>Electronic gadgets, fancy watches, toys, phones, cameras, and similar are not permitted.</li>
            <li>Prohibited are punk hairstyles, tattoos, gel use, or eyebrow plucking.</li>
            <li>Students must treat staff and peers with respect and politeness.</li>
            <li>Good manners, self-restraint, and courteous behavior are expected always.</li>
            <li>Students are responsible for labeling and safe keeping of their books and belongings.</li>
            <li>The school diary is important and must be brought daily; lost diaries require Principal’s permission and payment.</li>
            <li>Participation in co-curricular activities is mandatory without excuses.</li>
            <li>Students must greet teachers and dignitaries respectfully in and out of class.</li>
          </ul>
        </div>

        {/* Regulations */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-center text-[#00796E] mb-4">
            Regulations
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Morning Assembly is held every day except Wednesday including uniform checks, prayers, announcements, and National Anthem.</li>
            <li>Evening Assembly involves anthem singing, student presentations, announcements, prayers, and teacher farewells.</li>
            <li>The academic year is divided into four terms:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>First Term: January to April</li>
                <li>Second Term: May to August</li>
                <li>Third Term: September to November</li>
                <li>Fourth Term: December to February</li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Absence & Leave */}
        <div>
          <h2 className="text-2xl font-semibold text-center text-[#00796E] mb-4">
            Absence & Leave
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Late comers must obtain permission from the Principal before entering class.</li>
            <li>Leave of absence requests must be applied through the class master with a clear reason and parent/guardian endorsement.</li>
            <li>Sickness requires a doctor's certificate attached to the leave application.</li>
            <li>No leave is granted for non-academic activities during school hours.</li>
            <li>Leave for death of family members is limited to three days; no leave for villagers’ death.</li>
            <li>Leave is granted only on valid reasons; incomplete or unjustified applications will be rejected.</li>
            <li>Unapproved absences are fined Rs. 20 per day, to be paid within a week.</li>
            <li>No absence allowed the day before tests or exams, and no leave during tests/exams.</li>
            <li>Absent on re-opening day is generally disallowed except for grave reasons with fines applicable for non-compliance.</li>
            <li>Absence over two weeks without notice leads to deletion from attendance register requiring re-admission.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
