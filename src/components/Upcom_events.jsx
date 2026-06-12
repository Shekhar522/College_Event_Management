import React from "react";
import Tech_eveImg from "../assets/tech_eve.avif";
import { CiLocationOn } from "react-icons/ci";

import { NavLink } from "react-router-dom";
import { events } from "../data/event";
// const events = [
//   {
//     id: 1,
//     title: "TechnoVision 2025",
//     subtitle: "Annual Tech Fest",
//     date: "24 May, 2025",
//     time: "10:00 AM",
//     venue: "Main Auditorium",
//     registrations: "320/500",
//     status: "Active",
//     image: Tech_eveImg,
//   },

//   {
//     id: 2,
//     title: "Hackathon 2025",
//     subtitle: "24 Hour Coding",
//     date: "28 May, 2025",
//     time: "09:00 AM",
//     venue: "Computer Lab",
//     registrations: "180/250",
//     status: "Active",
//     image: Tech_eveImg,
//   },

//   {
//     id: 3,
//     title: "Cultural Night",
//     subtitle: "Dance & Music",
//     date: "30 May, 2025",
//     time: "06:00 PM",
//     venue: "Open Ground",
//     registrations: "450/600",
//     status: "Upcoming",
//     image: Tech_eveImg,
//   },
// ];

const Upcom_events = ({events}) => {

  // const upcoming = events.filter(
  //   (event) => event.status === "Upcoming"
  // );
  const upcoming = events
  .filter((event) => new Date(event.date) >= new Date())
  .sort((a, b) => new Date(a.date) - new Date(b.date))
  .slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-sm flex flex-col justify-around overflow-hidden">
      <div className="flex justify-between items-center p-2">
        <h2 className="text-[14px] font-semibold ">Upcoming Events</h2>
        <NavLink to="/events" className="text-[12px] font-medium text-violet-600 hover:text-violet-700">
          View all Events
        </NavLink>
      </div>

      <div className="hidden md:grid bg-gray-50 p-2 grid grid-cols-[2fr_1fr_1.5fr_1fr_1fr] items-center text-[12px] text-gray-600 font-semibold">
        <h2>Events</h2>
        <h2>Date & Time</h2>
        <h2>Venue</h2>
        <h2>Registrations</h2>
        <h2>Status</h2>
      </div>

      {/* <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] p-2 items-center text-[12px]">
        <div className="flex flex-row items-center gap-2">
          <img className="h-8 w-10 rounded-sm" src={Tech_eveImg} alt="" />
          <div>
            <h2 className="text-gray-800 font-semibold">TechnoVision 2025</h2>
            <h5 className="text-gray-400 text-xs">Annual Tech Fest</h5>
          </div>
        </div>

        <div className="flex flex-col">
          <h2>24 May, 2025</h2>
          <h4>10:00 AM</h4>
        </div>

        <div>
          <h2>Main Auditorium</h2>
        </div>

        <div>
          <h2>320/500</h2>
        </div>

        <div>
          <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full">
            Active
          </span>
        </div>
      </div> */}

      {upcoming.map((event) => (
        <div
          key={event.id}
          className="p-2 md:grid md:grid-cols-[2fr_1fr_1.5fr_1fr_1fr]
            md:items-center text-[12px]"
        >
          {/* <h3>{event.title}</h3>
          <p>{event.date}</p> */}
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-10 rounded-sm object-cover"
              src={event.image}
              alt="{event.title}"
            />

            <div>
              <h3 className="text-[12px] font-medium text-gray-800">
                {event.title}
              </h3>

              <p className="text-gray-400 text-xs">{event.subtitle}</p>
            </div>
          </div>

          {/* mobile */}
          <div className="mt-3 space-y-2 md:hidden text-xs text-gray-600">
            <p>
              📅 {event.date} • {event.time}
            </p>

            <p className="flex items-center gap-2"><CiLocationOn/> {event.venue}</p>

            <p>👥 {event.registrations}</p>
          </div>

          {/* desktop */}
          <div className="hidden md:block">
            <p>{event.date}</p>
            <p className="text-xs text-gray-500">{event.time}</p>
          </div>

          <div className="hidden md:flex items-center gap-1">
            <CiLocationOn className="text-gray-500" />
            <span>{event.venue}</span>
          </div>

          <div className="hidden md:block">
            <h2>{event.registrations}</h2>
          </div>

          <div className="mt-3 md:mt-0">
            <span className="inline-flex px-3 py-1 text-xs font-medium rounded-full bg-violet-100 text-violet-600">
              {event.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Upcom_events;
