const eventsData = [
  {
    id: 1,
    title: "Teacher's Orientation",
    date: "2025-02-12",
    description: "On February 12, 2025 the school conducted a teachers' orientation programme, meticulously designed to empower educators with the requisite skills, knowledge, and resources necessary to elevate their pedagogical prowess and ensure an exemplary academic year.",
    img: "https://i.ytimg.com/vi/83Xv1J1THpU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCexRAc7iC7lEZewPJ9ZgNZ54Xjgw",
  },
  {
    id: 2,
    title: "PREFECTS INDUCTION",
    date: "2024-03-14",
    description: "The school held a momentous Induction ceremony, where newly appointed student leaders were officially invested in their new roles...",
    paragraphs: [
      "The school held a momentous Induction ceremony, where newly appointed student leaders were officially invested in their new roles, marking the beginning of a new chapter in their leadership journey.",
      "The Principal officiated the ceremony and pinned the new student leaders, starting from the Head Boy to the class prefects, in the presence of honored guests, proud parents, teachers, and fellow students."
    ],
    img: "https://i.ytimg.com/vi/MIRCNBYeORI/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLA-WoiVrxa-5yzg88DhfpW2gyV9cA",
  },
  {
    id: 3,
    title: "INTERNATIONAL FOREST DAY",
    date: "2025-03-21",
    description: "The Forest Department of Churchandpur District organized an awareness programme at the school, highlighting the vital importance of forests and trees in sustaining human life. The event brought together dignitaries, including the Principal, Academic Dean, Vice Principal, HODs, staffs, and students. Mr. Abhijit KV, IFS, Divisional Forest Officer, led the programme, emphasizing the role of forests in maintaining ecological balance and promoting sustainable development. Trees were planted and rally was held, promoting the theme Keep the Earth Green and Healthy and encouraging environmental stewardship.",
    img: "https://greenwoodaca.com/wp-content/uploads/2025/06/P1096025-scaled.jpg",
  },
  {
    id: 4,
    title: "Colours Day celebration",
    date: "2025-03-14",
    description: "A sea of colours flooded the premises of Greenwood Academy as students came together to celebrate Colours’ Day. Held on March 14th, the event was a collage of hues, with students adorned in colourful t-shirts to showcase the beauty of different colours. The celebration also featured a painting competition, which saw enthusiastic participation from the students.",
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400"
  },
  {
    id: 5,
    title: "SINGING AND DANCE COMPETITION",
    date: "2025-04-15",
    description: "On 15th May, our Academy campus transformed into a vibrant spectacle as students from Senior, Junior and Sub-Junior categories showcased their talents in singing and dancing. The four teams- Blue Phoenix, Red Hawks, Yellow Gryphons and Green Sentinels- poured their hearts out on the stage, while their fellow team members cheered them on with infectious enthusiasm. The event was a kaleidoscope of colors, energy, and talent, making it an unforgettable experience!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG27VtSu1wJg9LKpkeopJeKI3oCu-OKngdUw&s"
  },
  {
    id: 6,
    title: "GA OLYMPIAD",
    date: "2025-04-23",
    description: "On May 23, 2025, our school hosted the GA Olympiad, a prestigious event that brought together students from the senior, junior and sub-junior categories. The comprehensive question paper, featuring science, Maths, English, and Aptitude, challenged students to showcase their academic prowess. This intellectually stimulating event highlighted the students' talents and instilled the importance of continuous learning and adaptation.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400"
  },
  {
    id: 7,
    title: "TURNING THE TASSEL: Celebration of HSLC Success",
    date: "2025-04-28",
    description: "On May 28, 2025, the Academy premises transformed into a vibrant celebration hub, mirroring the students' ability to shine through adversity, as the graduation ceremony unfolded, bringing together the school community, including Mr. Prakhar Pandey, IPS, Superintendent of Police, Churachandpur, as the Chief Guest. Parents and students joined, adding depth and warmth to the occasion. The ceremony was a triumphant showcase of academic excellence.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400"
  },
  {
    id: 8,
    title: "SKILL DEVELOPMENT DAY CUM POTLUCK",
    date: "2025-06-05",
    description: "On the 5th of June, the school conducted a Skill Development Day cum Potluck for students from Prep to Class VI. The purpose of the event was to introduce students to essential life skills through interactive, age-specific activities, while also fostering a sense of community through shared experience.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
  },
  {
    id: 9,
    title: "Annual Sports Meet 2025",
    date: "2025-09-05",
    description: "The Annual Sports 2025 of Greenwood Academy was held from 6th to 10th October with great enthusiasm and school spirit...",
    paragraphs : [
     "The Annual Sports 2025 of Greenwood Academy was held from 6th to 10th October with great enthusiasm and school spirit.The week-long event featured a variety of athletic competitions, games, and team events that brought out the best of sportsmanship and teamwork among students.",
    "All four houses participated with great zeal and determination. After an exciting series of events, the Red Hawks emerged as the overall champions of the Annual Sports 2025.",
  ],
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400"
  }
];

// Helper functions if needed
export const getFeaturedEvents = () => eventsData.filter(e => e.featured);

export default eventsData;
