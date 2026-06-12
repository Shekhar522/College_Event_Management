import React from "react";
import { useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { useState } from "react";
import Tech_eveImg from "../assets/tech_eve.avif";

import { events as eventsData } from "../data/event";
import EventModal from "../components/EventModal";
// const events = [
//   {
//     id: 1,
//     image: Tech_eveImg,
//     category: "Technical",
//     title: "TechnoVision 2025",
//     subtitle: "Annual Tech Fest",
//     date: "24 May, 2025",
//     percent: "64",
//     time: "10:00 AM",
//     venue: "Main Auditorium",
//     registrations: "320/500",
//     status: "Active",
//   },
//   {
//     id: 2,
//     image: Tech_eveImg,
//     category: "Technical",
//     title: "CodeSprint Hackathon",
//     subtitle: "24-Hour Coding Challenge",
//     date: "28 May, 2025",
//     percent: 80,
//     time: "09:00 AM",
//     venue: "Computer Center",
//     registrations: "400/500",
//     status: "Active",
//   },
//   {
//     id: 3,
//     image: Tech_eveImg,
//     category: "Workshop",
//     title: "AI & Machine Learning Workshop",
//     subtitle: "Hands-on AI Session",
//     date: "02 Jun, 2025",
//     percent: 50,
//     time: "11:00 AM",
//     venue: "Seminar Hall",
//     registrations: "150/300",
//     status: "Upcoming",
//   },
//   {
//     id: 4,
//     image: Tech_eveImg,
//     category: "Cultural",
//     title: "Rhythm Night",
//     subtitle: "Music & Dance Evening",
//     date: "05 Jun, 2025",
//     percent: 72,
//     time: "06:00 PM",
//     venue: "Open Air Theatre",
//     registrations: "360/500",
//     status: "Completed",
//   },
//   {
//     id: 5,
//     image: Tech_eveImg,
//     category: "Sports",
//     title: "Inter-Branch Cricket Cup",
//     subtitle: "Annual Sports Tournament",
//     date: "10 Jun, 2025",
//     percent: 40,
//     time: "08:00 AM",
//     venue: "College Ground",
//     registrations: "120/300",
//     status: "Upcoming",
//   },
//   // {
//   //   id: 6,
//   //   image: Tech_eveImg,
//   //   category: "Workshop",
//   //   title: "Robotics Bootcamp",
//   //   subtitle: "Build & Program Robots",
//   //   date: "15 Jun, 2025",
//   //   percent: 90,
//   //   time: "10:30 AM",
//   //   venue: "ECE Lab",
//   //   registrations: "180/200",
//   //   status: "Active",
//   // },
// ];

const statusStyles = {
  Active: "bg-green-100 text-green-600",
  Upcoming: "bg-blue-100 text-blue-600",
  Completed: "bg-amber-100 text-gray-600",
};

// const [events, setEvents] = useState(events);
// const [isModalOpen, setIsModalOpen] = useState(false);

const Events = ({ events, setEvents }) => {
  // const [events, setEvents] = useState(() => {
  //   const savedEvents = localStorage.getItem("events");

  //   return savedEvents ? JSON.parse(savedEvents) : eventsData;
  // });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const handleEditClick = (event) => {
    setEditingEvent(event);
    setIsModalOpen(true);
  };

  const handleAddEvent = (newEvent) => {
    if (editingEvent) {
      // UPDATE
      setEvents((prev) =>
        prev.map((event) =>
          event.id === editingEvent.id
            ? {
                ...event,
                ...newEvent,
              }
            : event,
        ),
      );
    } else {
      // CREATE
      setEvents((prev) => [
        ...prev,
        {
          id: Date.now(),
          image: Tech_eveImg,
          subtitle: "",
          ...newEvent,
          registrations: `0/${newEvent.capacity}`,
          percent: 0,
          status: "Upcoming",
        },
      ]);
    }

    setEditingEvent(null);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?",
    );

    if (confirmDelete) {
      setEvents((prev) => prev.filter((event) => event.id !== id));
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [status, setStatus] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || event.category === selectedCategory;

    const matchesStatus = status === "All" || event.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });
  // const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(events.map((event) => event.category))];

  const totalEvents = events.length;

  const activeCount = events.filter(
    (event) => event.status === "Active",
  ).length;

  const upcomingCount = events.filter(
    (event) => event.status === "Upcoming",
  ).length;

  const completedCount = events.filter(
    (event) => event.status === "Completed",
  ).length;

  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 4;

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent,
  );

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="">
      {/* header */}
      <div className="bg-white p-3 md:p-4 shadow rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
            Events Management
          </h2>
          <h5 className="text-sm md:text-base text-gray-400 font-medium mt-1">
            Manage and Organize all College Events
          </h5>
        </div>
        {/* <button className="bg-indigo-700 p-2 h-10 w-30 rounded-md flex items-center gap-1">
          <span className="text-white text-xl font-medium">+</span>
          <span className="text-white font-semibold text-[14px]">
            Create Event
          </span>
        </button> */}

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto
      bg-indigo-700 text-white
      px-4 py-2.5
      rounded-lg
      flex items-center justify-center gap-2
      hover:bg-indigo-800
      transition"
        >
          <span className="text-white text-xl font-medium">+</span>
          <span className="text-white font-semibold text-[14px]">
            Create Event
          </span>
        </button>
      </div>

      <div className="bg-gray-100 shadow p-3 flex flex-col md:flex-row gap-3 justify-between items-center">
        <input
          type="text"
          placeholder="Search Events.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-indigo-500 border rounded-lg px-3 py-2 flex-1 hover:border-indigo-500"
        />

        <select
          className="border border-indigo-400 rounded-lg px-7 py-2 text-gray-700 font-medium"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All Categories" : category}
            </option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border border-indigo-400 rounded-lg px-7 py-2 text-gray-700 font-medium"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Upcoming</option>
          <option>Completed</option>
        </select>

        <button className="border border-indigo-400 rounded-lg px-5 py-2 text-gray-700 font-medium hover:bg-indigo-500 hover:border-white hover:border hover:text-white">
          Export
        </button>
      </div>

      <div className="bg-white p-2 shadow grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <h2 className="text-red-600 font-semibold text-sm md:text-base">
            Total Events :{" "}
          </h2>
          <span className="text-gray-600 font-semibold">{totalEvents}</span>
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-green-600 font-semibold text-sm md:text-base">
            Active :{" "}
          </h2>
          <span className="text-gray-600 font-semibold">{activeCount}</span>
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-indigo-600 font-semibold text-sm md:text-base">
            Upcoming :{" "}
          </h2>
          <span className="text-gray-600 font-semibold">{upcomingCount}</span>
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-yellow-600 font-semibold text-sm md:text-base">
            Completed :{" "}
          </h2>
          <span className="text-gray-600 font-semibold">{completedCount}</span>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1.5fr_2fr_1fr_1fr_1fr] p-3 items-center bg-gray-100 shadow text-gray-700 font-medium">
        <div>Event Name</div>

        <div>Category</div>
        <div>Date</div>
        <div>Venue</div>
        <div>Registration</div>
        <div>Status</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>

      {/* <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr_2fr_1fr_1fr_1fr] p-4 items-center ">
        <div>
          <h3 className="font-semibold">TechnoVision 2025</h3>

          <p className="text-xs text-gray-500">Annual Tech Fest</p>
        </div>

        <div>Technical</div>

        <div>24 May 2025</div>

        <div>Main Auditorium</div>

        <div>
          <div>320/500</div>
          <div className="w-[150px] h-1 bg-gray-200 rounded-full mt-1">
            <div className="w-[64%] h-1 bg-indigo-600 rounded-full"></div>
          </div>
        </div>

        <div>
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-md text-xs">
            Active
          </span>
        </div>

        <div className="flex gap-2">
          <button className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md text-xs">
            Edit
          </button>
        </div>

        <div>
          <button className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-xs">
            {" "}
            Delete
          </button>
        </div>
      </div> */}

      {currentEvents.map((event) => (
        <div
          key={event.id}
          className="bg-white border-b border-gray-200 p-4 flex flex-col gap-3  md:grid md:grid-cols-[2fr_1fr_1fr_1.5fr_2fr_1fr_1fr_1fr]
            md:items-center md:gap-3 text-[12px]"
        >
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-12 rounded-sm object-cover"
              src={event.image}
              alt={event.title}
            />

            <div>
              <h3 className="text-sm font-medium text-gray-800">
                {event.title}
              </h3>

              <p className="text-gray-400 text-xs">{event.subtitle}</p>
            </div>
          </div>

          <div className="flex justify-between md:block">
            <span className="font-medium md:hidden">Category : </span>
            <span>{event.category}</span>
          </div>

          <div className="flex justify-between md:block">
            <span className="font-medium md:hidden">Date:</span>

            <span>{event.date}</span>
          </div>

          <div className="flex justify-between md:block">
            <span className="font-medium md:hidden">Venue:</span>

            <span>{event.venue}</span>
          </div>

          <div>
            <div className="flex justify-between">
              <span className="font-medium md:hidden">Registration: </span>
              <span>{event.registrations}</span>
            </div>
            <div className="w-[150px] h-1 bg-gray-200 rounded-full mt-1">
              <div
                className={` h-1 bg-indigo-600 rounded-full`}
                style={{ width: `${event.percent}%` }}
              ></div>
            </div>
          </div>

          <div className="flex justify-between md:block">
            <span className="font-medium md:hidden">Status: </span>
            <span
              className={` px-3 py-1 rounded-md text-xs ${statusStyles[event.status]}`}
            >
              {event.status}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md text-xs hover:bg-indigo-200"
              onClick={() => handleEditClick(event)}
            >
              Edit
            </button>
          </div>

          <div>
            <button
              onClick={() => handleDelete(event.id)}
              className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-xs hover:bg-red-200"
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-center shadow p-2 bg-gray-50">
        <div className="flex items-center text-gray-900 font-poppins gap-2">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="hover:text-xl "
          >
            <IoMdArrowDropleft />
          </button>
          <span>Prev</span>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-indigo-600 text-white"
                  : "border"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {/* <span>1 2 3 </span> */}
          <span>Next</span>
          <button 
            onClick={()=> setCurrentPage((prev) => prev+1)}
            disabled={currentPage === totalPages}
            className="hover:text-xl ">
            <IoMdArrowDropright />
          </button>
        </div>
      </div>

      {isModalOpen && (
        <EventModal
          onClose={() => {
            setIsModalOpen(false);
            setEditingEvent(null);
          }}
          onSave={handleAddEvent}
          initialData={editingEvent}
        />
      )}
    </div>
  );
};

export default Events;
