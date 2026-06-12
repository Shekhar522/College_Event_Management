// Mock data for College Events dashboard

export const currentUser = {
  name: "Shekhar Suman",
  firstName: "Shekhar",
  rollNumber: "23EC101",
  email: "shekhar.suman@college.edu",
  branch: "Electronics & Communication",
  year: "3rd Year",
  avatar:
    "https://images.pexels.com/photos/3965392/pexels-photo-3965392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const categoryStyles = {
  Technical: { text: "text-indigo-700", bg: "bg-indigo-100" },
  Cultural: { text: "text-fuchsia-700", bg: "bg-fuchsia-100" },
  Sports: { text: "text-orange-700", bg: "bg-orange-100" },
  Workshop: { text: "text-blue-700", bg: "bg-blue-100" },
};

export const statusStyles = {
  Confirmed: { text: "text-emerald-700", bg: "bg-emerald-100" },
  Upcoming: { text: "text-amber-700", bg: "bg-amber-100" },
  Cancelled: { text: "text-red-700", bg: "bg-red-100" },
};

export const registrations = [
  {
    id: "evt-1",
    title: "TechnoVision 2025",
    tagline: "Innovate. Integrate. Inspire",
    category: "Technical",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
    date: "20 Sep 2025",
    time: "10:00 AM",
    location: "Auditorium Hall",
    registrationDate: "15 Sep 2025",
    rollNumber: "23EC101",
    status: "Confirmed",
  },
  {
    id: "evt-2",
    title: "Rangtarang 2025",
    tagline: "Dance. Music. Drama.",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1756370256926-e48ca54c5efe?auto=format&fit=crop&w=1000&q=80",
    date: "25 Sep 2025",
    time: "02:00 PM",
    location: "Open Air Theatre",
    registrationDate: "16 Sep 2025",
    rollNumber: "23EC101",
    status: "Confirmed",
  },
  {
    id: "evt-3",
    title: "KickOff Championship",
    tagline: "Play Together. Win Together.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80",
    date: "30 Sep 2025",
    time: "08:30 AM",
    location: "College Ground",
    registrationDate: "17 Sep 2025",
    rollNumber: "23EC101",
    status: "Upcoming",
  },
  {
    id: "evt-4",
    title: "Web Dev Workshop",
    tagline: "Learn. Code. Create.",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    date: "05 Oct 2025",
    time: "11:00 AM",
    location: "Lab 4, Block B",
    registrationDate: "18 Sep 2025",
    rollNumber: "23EC101",
    status: "Confirmed",
  },
];

export const exploreEvents = [
  ...registrations,
  {
    id: "evt-5",
    title: "AI Summit 2025",
    tagline: "Future of Intelligence",
    category: "Technical",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    date: "12 Oct 2025",
    time: "09:00 AM",
    location: "Main Hall",
    seats: 120,
    status: "Upcoming",
    registrationDate: "N/A",
    rollNumber: "N/A",
  },
  {
    id: "evt-6",
    title: "Annual Sports Meet",
    tagline: "Compete. Conquer. Celebrate.",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    date: "18 Oct 2025",
    time: "07:00 AM",
    location: "Stadium",
    seats: 300,
    status: "Upcoming",
    registrationDate: "N/A",
    rollNumber: "N/A",
  },
  {
    id: "evt-7",
    title: "Photography Masterclass",
    tagline: "Frame the world.",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80",
    date: "22 Oct 2025",
    time: "03:00 PM",
    location: "Studio 2",
    seats: 40,
    status: "Upcoming",
    registrationDate: "N/A",
    rollNumber: "N/A",
  },
  {
    id: "evt-8",
    title: "Drama Night",
    tagline: "Stage. Spotlight. Stories.",
    category: "Cultural",
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80",
    date: "28 Oct 2025",
    time: "06:30 PM",
    location: "Open Air Theatre",
    seats: 200,
    status: "Upcoming",
    registrationDate: "N/A",
    rollNumber: "N/A",
  },
];

export const notificationsData = [
  {
    id: "n1",
    title: "Registration Confirmed",
    message: "Your registration for TechnoVision 2025 has been confirmed.",
    time: "2 hours ago",
    unread: true,
    type: "success",
  },
  {
    id: "n2",
    title: "Event Reminder",
    message: "KickOff Championship starts in 3 days. Don't miss it!",
    time: "Yesterday",
    unread: true,
    type: "info",
  },
  {
    id: "n3",
    title: "New Workshop Available",
    message: "Photography Masterclass is now open for registration.",
    time: "2 days ago",
    unread: true,
    type: "info",
  },
  {
    id: "n4",
    title: "Profile Updated",
    message: "Your profile information was successfully updated.",
    time: "1 week ago",
    unread: false,
    type: "success",
  },
];