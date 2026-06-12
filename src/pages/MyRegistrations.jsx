import React, { useState } from "react";
import UserSidebar from "../components/UserSidebar";
import UserNavbar from "../components/UserNavbar";
import UserEventCard from "../components/UserEventCard";
import { events as eventsData } from "../data/event";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import UsereventRegisCnt from "../components/UsereventRegisCnt";
const MyRegistrations = () => {
  const [events] = useState(eventsData);

  const [registrations, setRegistrations] = useState(() => {
    return JSON.parse(localStorage.getItem("registrations")) || [];
  });

  // useEffect(() => {
  //   localStorage.removeItem("registrations");
  //   setRegistrations([]); // UI bhi update ho jayegi
  // }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 🔥 Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;

  const totalPages = Math.max(1, Math.ceil(registrations.length / eventsPerPage));

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const currentRegistrations = registrations.slice(indexOfFirstEvent, indexOfLastEvent);

  const goPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // const [registrations, setRegistrations] = useState(() => {
  //   return JSON.parse(localStorage.getItem("registrations")) || [];
  // });
  return (
    <div className="flex">
      <UserSidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="flex-1 p-2">
        <UserNavbar />

        {/* Event Cards */}
        <div className="flex flex-col gap-2 mt-2.5">
          {currentRegistrations.map((reg) => (
            <UserEventCard
             
              key={reg.eventId}
              // events={events}
              event={reg}
              registrations={registrations}
              setRegistrations={setRegistrations}
            />
          ))}
        </div>

        {/* Stats Card */}
        <UsereventRegisCnt />

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-2 gap-3">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className="px-2 disabled:opacity-40"
          >
            <IoMdArrowDropleft className="text-xl" />
          </button>

          <span className="text-sm font-medium">Prev</span>

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

          <span className="text-sm font-medium">Next</span>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className="px-2 disabled:opacity-40"
          >
            <IoMdArrowDropright className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyRegistrations;
