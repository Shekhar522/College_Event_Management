import React from "react";
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
import { HiMenu, HiX } from "react-icons/hi";
import businessImg from "../assets/business.png";
import Tech_eveImg from "../assets/tech_eve.avif";

const USerEvents = ({ events }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // useEffect(() => {
  //   localStorage.removeItem("registrations");
  // })
  // const handleRegistration = (registration) => {
  //   const saved = JSON.parse(localStorage.getItem("registrations")) || [];

  //   const registrationData = {
  //   ...registration,

  //   // event details
  //   eventId: selectedEvent.id,
  //   title: selectedEvent.title,
  //   subtitle: selectedEvent.subtitle,
  //   image: selectedEvent.image,
  //   category: selectedEvent.category,
  //   date: selectedEvent.date,
  //   time: selectedEvent.time,
  //   location: selectedEvent.venue,
  //   status: "Confirmed",
  //   registrationDate: new Date().toLocaleDateString(),
  // };

  //   const alreadyRegistered = saved.some(
  //     (item) => item.eventId === registration.eventId,
  //   );

  //   if (alreadyRegistered) {
  //     alert("You are already registered for this event.");
  //     return;
  //   }
  //   localStorage.setItem(
  //     "registrations",
  //     JSON.stringify([...saved, registration]),
  //   );
  //   setIsModalOpen(false);

  //   alert("Registration Successful!");
  // };

  const handleRegistration = (registration) => {
    const saved = JSON.parse(localStorage.getItem("registrations")) || [];

    // Duplicate check
    const alreadyRegistered = saved.some(
      (item) => item.eventId === selectedEvent.id,
    );

    if (alreadyRegistered) {
      alert("You are already registered for this event.");
      return;
    }

    // Save user data + event data together
    const registrationData = {
      // User Details
      ...registration,

      // Event Details
      eventId: selectedEvent.id,
      title: selectedEvent.title,
      subtitle: selectedEvent.subtitle,
      image: selectedEvent.image,
      category: selectedEvent.category,
      date: selectedEvent.date,
      time: selectedEvent.time,
      location: selectedEvent.venue,

      // Registration Details
      status: "Confirmed",
      registrationDate: new Date().toLocaleDateString(),
    };

    localStorage.setItem(
      "registrations",
      JSON.stringify([...saved, registrationData]),
    );

    setIsModalOpen(false);

    alert("Registration Successful!");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img className="h-10 w-10" src={businessImg} alt="College Events" />

            <div>
              <h2 className="text-lg md:text-xl font-bold text-gray-800">
                College <span className="text-indigo-700">Events</span>
              </h2>

              <p className="text-[11px] text-gray-400">
                Discover | Learn | Connect
              </p>
            </div>
          </div>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium font-poppins text-gray-600">
            <NavLink
              to="/user/events"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-700 font-semibold"
                  : "text-gray-600 hover:text-indigo-700"
              }
            >
              Events
            </NavLink>

            <NavLink
              to="/user/myregistrations"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-700 font-semibold"
                  : "text-gray-600 hover:text-indigo-700"
              }
            >
              My Registrations
            </NavLink>

            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-700 font-semibold"
                  : "text-gray-600 hover:text-indigo-700"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contactus"
              className={({ isActive }) =>
                isActive
                  ? "text-indigo-700 font-semibold"
                  : "text-gray-600 hover:text-indigo-700"
              }
            >
              Contact US
            </NavLink>

            {/* Profile */}
            <li>
              <button
                className="h-10 w-10 rounded-full border border-gray-200
          flex items-center justify-center
          hover:bg-indigo-50 hover:text-indigo-700 transition"
              >
                <VscAccount className="text-xl" />
              </button>
            </li>
          </ul>

          {/* Mobile Profile/Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
          {/* <button
      className="md:hidden h-10 w-10 rounded-full border border-gray-200
      flex items-center justify-center"
    >
      <VscAccount className="text-xl" />
    </button> */}
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-sm">
            <div className="flex flex-col px-4 py-3 space-y-4">
              <NavLink
                to="/user/events"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-700"
              >
                Events
              </NavLink>

              <NavLink
                to="/user/myregistrations"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-indigo-700"
              >
                My Registrations
              </NavLink>

              <NavLink
                to="/aboutus"
                className="text-left text-gray-700 hover:text-indigo-700"
              >
                About Us
              </NavLink>

              <NavLink
                to="/contactus"
                className="text-left text-gray-700 hover:text-indigo-700"
              >
                Contact
              </NavLink>

              <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-700">
                <VscAccount />
                Profile
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-indigo-500  px-6 py-4 text-center">
        <h2 className="text-3xl font-bold text-white">Explore Events</h2>
        <p className="text-s font-light text-gray-200">
          Find exciting events happening in your college and register to be a
          part of them.
        </p>
      </div>

      <div className="bg-white p-4 rounded-2xl  flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search events by name, category or venue..."
          className="flex-1 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>All Categories</option>
          <option>Technical</option>
          <option>Cultural</option>
          <option>Sports</option>
          <option>Workshop</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md
      hover:shadow-xl transition duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />

              <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                {event.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-3">
              <h2 className="text-[15px] truncate font-bold text-gray-800">
                {event.title}
              </h2>

              <p className="text-[12px] text-gray-500 mt-1">{event.subtitle}</p>

              <div className="mt-2 grid grid-cols-2 space-y-1 text-[10px] text-gray-600">
                <p>📅 {event.date}</p>

                <p>⏰ {event.time}</p>

                <p >📍 {event.venue}</p>

                <p>👥 {event.registrations}</p>
              </div>

              {/* Progress */}
              <div className="mt-2">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Registrations</span>
                  <span>{event.percent}%</span>
                </div>

                <div className="w-full h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-1 bg-indigo-600 rounded-full"
                    style={{ width: `${event.percent}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-md text-xs font-medium ${
                    event.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : event.status === "Upcoming"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {event.status}
                </span>

                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setIsModalOpen(true);
                  }}
                  className="bg-indigo-600 text-white px-3 py-1
            rounded-md text-xs hover:bg-indigo-700"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <RegisterModal
          event={selectedEvent}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleRegistration}
        />
      )}
    </div>
  );
};

export default USerEvents;
