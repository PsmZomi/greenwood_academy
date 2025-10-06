const eventsData = [
  {
    id: 1,
    title: "Annual Day Celebration",
    date: "2025-10-15",
    time: "6:00 PM - 9:00 PM",
    description: "A grand evening showcasing our students' talents and achievements through cultural performances, award ceremonies, and special guest appearances.",
    img: "https://i.ytimg.com/vi/83Xv1J1THpU/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLCexRAc7iC7lEZewPJ9ZgNZ54Xjgw",
    category: "Cultural",
    location: "School Auditorium",
    featured: true
  },
  {
    id: 2,
    title: "Graduation Day",
    date: "2024-11-20",
    time: "9:00 AM - 3:00 PM",
    description: "Celebrating the Class of 2024 as they prepare for their Board Exams. The school honors their journey with heartfelt blessings, prayers, and inspiring words, shared together with their proud parents.",
    img: "https://i.ytimg.com/vi/MIRCNBYeORI/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgZShlMA8=&rs=AOn4CLA-WoiVrxa-5yzg88DhfpW2gyV9cA",
    category: "Academic",
    location: "Science Block",
    featured: true
  },
  {
    id: 3,
    title: "Sports Day",
    date: "2025-12-10",
    time: "8:00 AM - 5:00 PM",
    description: "Annual inter-house sports competition featuring track events, team games, and exciting matches to promote sportsmanship and healthy competition.",
    img: "https://greenwoodaca.com/wp-content/uploads/2025/06/P1096025-scaled.jpg",
    category: "Sports",
    location: "School Ground",
    featured: true
  },
  {
    id: 5,
    title: "Art Exhibition",
    date: "2025-11-05",
    time: "2:00 PM - 6:00 PM",
    description: "Showcasing creative artworks, paintings, sculptures, and digital art created by our talented students throughout the year.",
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?w=400",
    category: "Cultural",
    location: "Art Gallery"
  },

  {
    id: 7,
    title: "Choir Competition",
    date: "2025-12-18",
    time: "6:30 PM - 8:30 PM",
    description: "An evening of musical performances by our school band, choir, and individual performers showcasing various genres.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG27VtSu1wJg9LKpkeopJeKI3oCu-OKngdUw&s",
    category: "Cultural",
    location: "School Auditorium"
  },
  {
    id: 8,
    title: "Career Guidance Workshop",
    date: "2025-09-25",
    time: "9:30 AM - 12:30 PM",
    description: "Interactive session with industry professionals to help students explore career options and educational pathways.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
    category: "Workshop",
    location: "Career Counseling Center"
  },
  {
    id: 9,
    title: "Environment Day",
    date: "2025-06-05",
    time: "8:00 AM - 1:00 PM",
    description: "Tree plantation drive, awareness campaigns, and eco-friendly initiatives to promote environmental consciousness.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400",
    category: "Social",
    location: "School Campus"
  },
  {
    id: 10,
    title: "Book Fair",
    date: "2025-08-15",
    time: "9:00 AM - 4:00 PM",
    description: "Annual book fair featuring various publishers, author interactions, and reading sessions to promote reading culture.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    category: "Academic",
    location: "Library"
  },
  {
    id: 11,
    title: "Teachers' Day Celebration",
    date: "2025-09-05",
    time: "10:00 AM - 1:00 PM",
    description: "Students express gratitude to teachers through special performances, games, and heartfelt messages.",
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400",
    category: "Cultural",
    location: "Main Hall"
  },
  {
    id: 13,
    title: "Independence Day",
    date: "2025-08-15",
    time: "8:00 AM - 10:00 AM",
    description: "Flag hoisting ceremony, patriotic songs, and cultural programs to celebrate our nation's independence.",
    img: "https://images.unsplash.com/photo-1618641662184-bafefb91a542?w=400",
    category: "National",
    location: "School Ground"
  },
  
  {
    id: 15,
    title: "Parent-Teacher Meeting",
    date: "2025-12-05",
    time: "9:00 AM - 2:00 PM",
    description: "Semi-annual meeting for parents to discuss their children's progress and development with teachers.",
    img: "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=400",
    category: "Academic",
    location: "Classrooms"
  }
];

// Helper function to get events by category
export const getEventsByCategory = (category) => {
  return eventsData.filter(event => event.category === category);
};

// Helper function to get featured events
export const getFeaturedEvents = () => {
  return eventsData.filter(event => event.featured);
};

// Helper function to get upcoming events (within next 30 days)
export const getUpcomingEvents = () => {
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setDate(today.getDate() + 30);
  
  return eventsData.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= today && eventDate <= nextMonth;
  });
};

export default eventsData;