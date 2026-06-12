import React from "react";
import { HiMenu, HiOutlineBell } from "react-icons/hi";
import profileImg from "../assets/man.png"; // apna image

const UserNavbar = ({ setIsSidebarOpen }) => {
  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2">

        {/* Left Section */}
        <div className="flex items-center gap-3">

          {/* Mobile Hamburger */}
          {/* <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-2xl text-gray-700"
          >
            <HiMenu />
          </button> */}

          <div>
            <h1 className="text-md sm:text-xl font-bold text-gray-800">
              Welcome back, Shekhar! 👋
            </h1>

            <p className="text-xs text-gray-500 hidden sm:block">
              Here are the events you have registered for.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Notification */}
          {/* <button className="relative text-gray-600 hover:text-indigo-600 transition">
            <HiOutlineBell className="text-xl" />

            <span
              className="absolute -top-1 -right-1
              h-3 w-3 rounded-full bg-indigo-600"
            />
          </button> */}

          {/* Profile */}
          <div className="flex items-center gap-3 cursor-pointer">

            <img
              src={profileImg}
              alt="Profile"
              className="h-8 w-8 rounded-full object-cover "
            />

            <div className="hidden sm:block">
              <h3 className="text-md font-medium text-gray-800">
                Shekhar Suman
              </h3>
            </div>

            <svg
              className="w-5 h-5 text-gray-500 hidden sm:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>

          </div>
        </div>

      </div>
    </header>
  );
};

export default UserNavbar;