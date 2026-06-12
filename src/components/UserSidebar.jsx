import React from "react";
import businessImg from "../assets/business.png";
import { NavLink } from "react-router-dom";
import {
  HiMenu,
  HiX,
  HiOutlineBell,
  HiOutlineLogout,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const UserSidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* SIDEBAR */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-60 bg-white border-r shadow-lg
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-6 shadow">
          <img
            src={businessImg}
            alt="logo"
            className="h-8 w-8 sm:h-9 sm:w-9 hidden sm:block"
          />

          <div>
            <h2 className="text-[15px] font-bold text-gray-800">
              College <span className="text-indigo-600">Events</span>
            </h2>

            <p className="text-[10px] text-gray-500">
              Discover | Learn | Connect
            </p>
          </div>

          {/* Close button (mobile only) */}
          <button
            onClick={() => setIsMenuOpen?.(false)}
            className="ml-auto lg:hidden text-2xl text-gray-500 hover:text-red-500"
          >
            <HiX />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-3 flex flex-col gap-2">
          <NavLink
            to="/user/events"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-1 rounded-md text-sm transition ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <HiOutlineCalendar className="text-sm" />
            Explore Events
          </NavLink>

          <NavLink
            to="/user/myregistrations"
            onClick={() => setIsMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-1 rounded-md text-sm transition ${
                isActive
                  ? "bg-indigo-100 text-indigo-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <HiOutlineCalendar className="text-sm" />
            My Registrations
          </NavLink>

          <NavLink
            to="/aboutus"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-1 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <HiOutlineInformationCircle className="text-sm" />
            About Us
          </NavLink>

          <NavLink
            to="/contactus"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-100"
          >
            <HiOutlinePhone className="text-sm" />
            Contact Us
          </NavLink>

          <NavLink
            to="/user/notifications"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center justify-between px-4 py-1 rounded-md text-sm text-gray-600 hover:bg-gray-100"
          >
            <div className="flex items-center gap-3">
              <HiOutlineBell className="text-sm" />
              Notifications
            </div>

            <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
              3
            </span>
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-0 w-full px-4">
          <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition">
            <HiOutlineLogout className="text-xl" />
            Logout
          </button>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 left-4 lg:hidden bg-white p-2 rounded-lg shadow z-50"
      >
        <HiMenu className="text-2xl" />
      </button>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default UserSidebar;