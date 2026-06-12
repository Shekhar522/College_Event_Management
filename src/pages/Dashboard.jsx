import Sidebar from "../components/Sidebar";
import Statcard from "../components/Statcard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Upcoming_eve from "../components/Upcoming_eve";
import Upcom_events from "../components/Upcom_events";
import Recent_regis from "../components/Recent_regis";
import CalendarCard from "../components/CalendarCard";
import Announcement from "../components/Announcement";
import EventCategories from "../components/EventCategories";
import EventModal from "../components/EventModal";
import { stats } from "../data/stats";
import { notifications } from "../data/notifications";

import { FaCalendarCheck } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { GrAnnounce } from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/md";
import Tech_eveImg from "../assets/tech_eve.avif";
// import { events as eventsData } from "../data/event";

function Dashboard({ events, setEvents }) {
  const navigate = useNavigate();

  useEffect(() => {
  if (localStorage.getItem("isLoggedIn")) {
    navigate("/");
  }
}, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  const [showNotifications, setShowNotifications] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = (newEvent) => {
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

    setIsModalOpen(false);
  };
  const totalEvents = events.length;

  const activeEvents = events.filter(
    (event) => event.status === "Active",
  ).length;

  const upcomingEvents = events.filter(
    (event) => event.status === "Upcoming",
  ).length;

  const completedEvents = events.filter(
    (event) => event.status === "Completed",
  ).length;

  const totalRegistrations = events.reduce((sum, event) => {
    const registered = Number(event.registrations.split("/")[0]);
    return sum + registered;
  }, 0);

  const stats = [
    {
      id: 1,
      bgcolor: "bg-blue-100",
      iconcolor: "text-blue-600",
      icon: "calendar",
      title: "Total Events",
      number: totalEvents,
      arwcolor: "text-green-600",
      arrow: "arrowup",
      percent: "",
      para: "All events",
    },
    {
      id: 2,
      bgcolor: "bg-green-100",
      iconcolor: "text-green-600",
      icon: "people",
      title: "Registrations",
      number: totalRegistrations,
      arwcolor: "text-green-600",
      arrow: "arrowup",
      percent: "",
      para: "Total participants",
    },
    {
      id: 3,
      bgcolor: "bg-yellow-100",
      iconcolor: "text-yellow-600",
      icon: "calendar",
      title: "Upcoming Events",
      number: upcomingEvents,
      percent: "",
      para: "Scheduled events",
    },
    {
      id: 4,
      bgcolor: "bg-purple-100",
      iconcolor: "text-purple-600",
      icon: "peoplegrp",
      title: "Active Events",
      number: activeEvents,
      arwcolor: "text-green-600",
      arrow: "arrowup",
      percent: "",
      para: "Currently running",
    },
    {
      id: 4,
      bgcolor: "bg-purple-100",
      iconcolor: "text-purple-600",
      icon: "peoplegrp",
      title: "Completed Events",
      number: completedEvents,
      arwcolor: "text-green-600",
      arrow: "arrowup",
      percent: "",
      para: "Currently running",
    },
  ];
  const icons = {
    calendar: <FaCalendarCheck />,
    people: <IoPeople />,
    peoplegrp: <FaPeopleGroup />,
    arrowup: <FaArrowUpLong />,
  };
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 p-4 md:p-6 bg-gray-100 h-screen">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden mb-4 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiMenu />
        </button>

        {/* Rest of Dashboard */}
        <div className=" ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="text-[18px] font-bold">Welcome Back, Admin 👋</h1>

              <p className="text-gray-500  text-[12px]">
                Here's what's happening with your events today.
              </p>
            </div>
            <div className="flex items-center  gap-3">
              <button className="h-10 w-10 flex items-center justify-center bg-indigo-200 text-indigo-800 rounded-md">
                <GrAnnounce />
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="h-10 w-10 flex items-center justify-center bg-indigo-200 text-indigo-800 rounded-md"
                >
                  <MdNotificationsActive />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] h-4 w-4 rounded-full flex items-center justify-center">
                    {notifications.length}
                  </span>
                </button>

                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-indigo-400 z-50">
                    <div className="p-3 border-b font-semibold text-gray-700">
                      Notifications
                    </div>

                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className="p-3 shadow  hover:bg-gray-50"
                      >
                        <h4 className="text-sm font-medium">
                          {notification.title}
                        </h4>

                        <p className="text-xs text-gray-500">
                          {notification.message}
                        </p>

                        <span className="text-[10px] text-gray-400">
                          {notification.time}
                        </span>
                      </div>
                    ))}

                    <div className="p-2 text-center text-sm rounded-b-lg text-indigo-600 cursor-pointer hover:bg-gray-50">
                      View All
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="h-10 px-3 bg-indigo-800 text-white rounded-md flex items-center gap-2"
              >
                <span>+</span>
                <span className="text-[12px]">Create Event</span>
              </button>

              <button 
                onClick={handleLogout}
                className="h-10 px-3 bg-indigo-800 text-white rounded-md flex items-center gap-2">
                  Logout
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mt-2">
            {stats.map((stat) => (
              <Statcard
                key={stat.id}
                bgcolor={stat.bgcolor}
                iconcolor={stat.iconcolor}
                icon={icons[stat.icon]}
                title={stat.title}
                number={stat.number}
                arwcolor={stat.arwcolor}
                arrow={icons[stat.arrow]}
                percent={stat.percent}
                para={stat.para}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]  gap-4 mt-3">
            {/* Left Side */}
            <div className="flex flex-col gap-3">
              <Upcom_events events={events} />
              <Recent_regis />
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4">
              <CalendarCard event={events} />
              <EventCategories events={events} />
              {/* <Announcement /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Sidebar /> */}
      {isModalOpen && (
        <EventModal
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddEvent}
        />
      )}
    </div>
  );
}

export default Dashboard;
